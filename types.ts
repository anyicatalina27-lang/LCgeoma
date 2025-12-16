export interface Founder {
    name: string;
    role: string;
    degree: string;
    description: string;
    image: string;
    contactLink: string;
}

export interface Product {
    id: string;
    title: string;
    price: string;
    features: string[];
    image: string;
    badge?: string;
    ctaLink: string;
    isSecondary?: boolean;
    originalPrice?: string;
}

export interface Step {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}