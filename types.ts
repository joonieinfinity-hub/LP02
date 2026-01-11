
export interface MenuItem {
  name: string;
  description?: string;
  category: 'starter' | 'main' | 'dessert' | 'drink';
  price?: string;
}

export interface EventItem {
  title: string;
  description: string;
  date?: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  benefit: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
