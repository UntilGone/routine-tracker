export interface ColProps {
  col: ColType;
}

export interface ColType {
  id: string;
  name: string;
  color: string;
  list: CardType[];
}

export interface CardProps {
  card: CardType;
  state: string;
  color: string;
}

export interface CardType {
  id: string;
  name: string;
  content: string;
  dueTo: number[];
  date: number;
}
