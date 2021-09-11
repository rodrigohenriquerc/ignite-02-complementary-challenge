export interface FoodData {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export type AddFoodData = Omit<FoodData, "id" | "available">;

export type EditFoodData = FoodData;

export type DeleteFoodData = FoodData["id"];
