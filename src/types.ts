export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  duration?: string;
  benefits: string[];
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  originalValue: number;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  petName: string;
  petType: 'Cão' | 'Gato';
  petBreed: string;
  result: string; // e.g. "-4.2 kg em 8 semanas"
  text: string;
  avatarColor: string; // Since we don't want heavy external images that could break, we'll design extremely elegant colored avatars with initials, pet emojis, or customizable clean UI
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
