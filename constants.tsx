
import { MenuItem, MembershipTier, EventItem } from './types';

export const MENU_DATA: MenuItem[] = [
  { name: 'Fried Blue Corn & Pecan Hushpuppies', description: 'sweet potato mole, crème fraîche', category: 'starter' },
  { name: 'Crab Fingers', description: 'curry leaf, leche de tigre, smoked chili oil', category: 'starter' },
  { name: 'Big Tree Oysters', description: 'chili mignonette, pickled shallots', category: 'starter' },
  { name: 'Bulgogi Beef Tartare', description: 'apple kimchi, potato chips', category: 'starter' },
  { name: 'Seared Whole Fish', description: 'blue crab salad & Goan crab curry', category: 'main' },
  { name: 'Roasted Half Chicken', description: 'chili lime butter & gremolata', category: 'main' },
  { name: '10oz Seared Picanha Steak', description: 'mojo de ajo & roasted potatoes', category: 'main' },
  { name: 'Tangerine Almond Cake', description: 'citrus glaze, whipped cream', category: 'dessert' },
  { name: 'Fried Apple Hand Pie', description: 'cinnamon sugar, vanilla bean ice cream', category: 'dessert' },
  { name: 'Como La Flor', description: 'Tequila, hibiscus, lime, agave', category: 'drink' },
  { name: 'Smoking Gun', description: 'Mezcal, grapefruit, bitters, rosemary', category: 'drink' },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  { name: 'Traditional', price: '$1,000', benefit: 'Receive $1,200 house credit' },
  { name: 'Second Tier', price: '$2,500', benefit: '$3,000 house credit + knife sharpening services' },
  { name: 'Third Tier', price: '$5,000', benefit: 'Private 5-course dinner for 8 + house credit & perks' },
];

export const EVENTS: EventItem[] = [
  { title: 'Robert Sinskey Wine Dinner', description: 'A special evening pairing exclusive vintages with a 5-course tasting menu.' },
  { title: 'Beefsteak Dinner', description: 'Our annual celebration of communal dining, meat, and merriment.' },
  { title: 'Garden Parties', description: 'Happy hours and casual food-focused gatherings in our beautiful wine garden.' },
];
