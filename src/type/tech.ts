export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced" | string;
  badge?: string; // Optional if not all technologies have a badge
}