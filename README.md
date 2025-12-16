<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1oH6QJQ1GXYQP1dz5ZWatGciuLIcPk4eY

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create a `.env` or `.env.local` file and set your API key and model. Example variables are provided in `.env.example`.

   - `VITE_API_KEY`: tu clave de API (Gemini or provider key)
   - `VITE_AI_MODEL`: modelo a usar (por ejemplo `gemini-2.5-flash` o `gpt-5-mini`)

   Nota: Si eliges `gpt-5-mini` debes integrar el cliente de OpenAI en lugar de (o además de) `GoogleGenAI`. Actualmente el proyecto usa `GoogleGenAI`.
3. Run the app:
   `npm run dev`
