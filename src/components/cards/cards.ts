import { TSuite, ICard, CardTypes, Suites, Nullable } from "@/types";
import { Diamond, Heart, Clumb, Spade } from "@/components/icons";
import { ref, type Component } from "vue";

export const cards = ref<ICard[]>([]);

export function fillCards() {
  cards.value = [
    {
      value: 2,
      suit: Suites.Hearts,
      type: CardTypes.Jack,
      isOpen: false,
    },
    {
      value: 3,
      suit: Suites.Clubs,
      type: CardTypes.Queen,
      isOpen: false,
    },
    {
      value: 10,
      suit: Suites.Diamonds,
      type: CardTypes.Numeric,
      isOpen: false,
    },
  ];
}

export function getImageUrl(name: string, ext: string): string {
  return new URL(`../../assets/${name}.${ext}`, import.meta.url).href;
}

export function getCardValue(card: ICard): Nullable<string | number> {
  switch (card.type) {
    case CardTypes.Ace:
      return "A";
    case CardTypes.King:
      return "K";
    case CardTypes.Jack:
      return "J";
    case CardTypes.Queen:
      return "Q";
    case CardTypes.Numeric:
      return card.value;
    default:
      return 0;
  }
}

export function getCardColor(suit: TSuite): string {
  switch (suit) {
    case Suites.Hearts:
    case Suites.Diamonds:
      return "red";
    case Suites.Spades:
    case Suites.Clubs:
      return "black";
    default:
      return "";
  }
}

export function getSuiteIcon(suit: TSuite): Nullable<Component> {
  switch (suit) {
    case Suites.Hearts:
      return Heart;
    case Suites.Diamonds:
      return Diamond;
    case Suites.Clubs:
      return Clumb;
    case Suites.Spades:
      return Spade;
    default:
      return null;
  }
}

export function handleSelect(cardIndex: number, value: boolean): void {
  cards.value[cardIndex].isOpen = value;
}
