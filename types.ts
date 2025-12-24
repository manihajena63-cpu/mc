export interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: 'Update' | 'Event' | 'Community';
}

export interface ServerItem {
  id: number;
  name: string;
  ip: string;
  players: number;
  maxPlayers: number;
  version: string;
  mode: string;
  tags: string[];
  image: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}