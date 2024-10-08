import { TCategory } from "@/types/category.type";
import cricketImg from "@/assets/images/cricket_logo.png";
import footballImg from "@/assets/images/football_logo.jfif";
import hockeyImg from "@/assets/images/hockey_logo.jfif";
import tennisImg from "@/assets/images/tennis_logo.jfif";
import basketballImg from "@/assets/images/basketball_logo.jfif";
import archeryImg from "@/assets/images/archery_logo.png";

export const CATEGORIES: TCategory[] = [
  {
    name: "Cricket",
    image: cricketImg,
  },
  {
    name: "Football",
    image: footballImg,
  },
  {
    name: "Hockey",
    image: hockeyImg,
  },
  {
    name: "Tennis",
    image: tennisImg,
  },
  {
    name: "Basketball",
    image: basketballImg,
  },
  {
    name: "Archery",
    image: archeryImg,
  },
];
