export interface ModalI {
  open: boolean;
  onClose?: () => void;
}

export interface RecipeCardDataI {
  id: string;
  title: string;
  description?: string;
  image: {
    before: string;
    after: string;
  };
  category: {
    main: string;
    sub: string;
  };
  recipe: { property: string; value: number }[];
}
