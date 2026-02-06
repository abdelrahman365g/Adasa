import { CategoryColor, CategoryEnum } from "./category.enum";

export interface Category {
  name: CategoryEnum;
  count: number;
  color: CategoryColor;
}