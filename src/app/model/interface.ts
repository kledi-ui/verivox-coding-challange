export interface IProduct {
  id: string;
  index: number;
  title: string;
  rating: number;
  image: string;
  isEdible: boolean;
  price: number;
  tags: string[];
  description: string;
}

export interface ISortingItem {
  label: string;
  value: SortingTypes;
}

export interface FilterEvent {
  filteredPrice: number;
  selectedSortingType: SortingTypes;
}

export enum SortingTypes {
  price = 1,
  rating = 2,
  title = 3,
}
