import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

const HydroChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de LCgeoma. ¿En qué puedo ayudarte con tus proyectos hidropónicos hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Generate a random session ID on mount
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const webhookUrl = 'https://lcgeoma.app.n8n.cloud/webhook/f8faa5bd-3a87-444a-aee7-6bc5062943e2/chat';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chatInput: userMessage.text + " (Responde de manera breve y concisa, máximo 50 palabras si es posible)",
          sessionId: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      // The n8n workflow returns an array with one item containing the 'response' field
      // Based on the provided JSON: return [{ json: cleanOutput }]; where cleanOutput = { response: ... }
      // So data should be [{ response: "..." }] or just { response: "..." } depending on how n8n returns it.
      // Usually webhook nodes return the data directly.

      let botText = "Lo siento, no pude entender la respuesta.";

      if (Array.isArray(data) && data.length > 0 && data[0].response) {
        botText = data[0].response;
      } else if (data.response) {
        botText = data.response;
      } else if (typeof data === 'string') {
        // Sometimes it might return just a string if configured that way
        botText = data;
      }

      // Clean up markdown asterisks
      botText = botText.replace(/\*\*/g, '');

      setMessages(prev => [...prev, { role: 'model', text: botText }]);

    } catch (error) {
      console.error('Error sending message to n8n:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, hubo un error al conectar con el asistente. Por favor intenta de nuevo más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-primary p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot bg-white/20 p-2 rounded-full"></i>
              <div>
                <h3 className="font-bold text-sm">Asistente LCgeoma</h3>
                <span className="text-xs opacity-80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span> En línea
                </span>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-none'
                    : 'bg-white text-secondary border border-gray-200 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all transform hover:scale-105 flex items-center justify-center text-2xl"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-alt'}`}></i>
      </button>
    </div>
  );
};

export default HydroChat;