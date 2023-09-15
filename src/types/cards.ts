import { Nullable } from "../types";
export enum Suites {
  Hearts = "hearts",
  Diamonds = "diamonds",
  Spades = "spades",
  Clubs = "clubs",
}

export enum CardTypes {
  Ace = "ace",
  King = "king",
  Queen = "queen",
  Jack = "jack",
  Numeric = "numeric",
}
export type TSuite =
  | Suites.Hearts
  | Suites.Diamonds
  | Suites.Spades
  | Suites.Clubs;

export type TCardType =
  | CardTypes.Ace
  | CardTypes.King
  | CardTypes.Queen
  | CardTypes.Jack
  | CardTypes.Numeric;

export interface ICard {
  value: Nullable<string | number>;
  suit: TSuite;
  type: TCardType;
  isOpen: boolean;
}
