export interface MealProperties {
  meal: string,
  description: string,
  calories: number,
}

export interface MealsData {
  id: string,
  meal: string,
  description: string,
  calories: number,
}

export interface FetchedData {
    [key: string]: {
        [key: string]: MealsData;
    };
}