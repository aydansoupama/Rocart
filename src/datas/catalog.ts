export interface CatalogItem {
  id: number;
  name: string;
  image: string;
  color: string;
  rarity: {
    name: string;
    color: string;
    icon: {
      type: "hot";
      fromColor: string;
      toColor: string;
    };
  };
  price: {
    discountPercentage: number;
    originalPrice: number;
  };
}

export const catalogItems: CatalogItem[] = [
  {
    id: 1,
    name: "Racoon Pets",
    image: "/img-5467--1--1.png",
    color: "#1D724C",
    rarity: {
      name: "Rare",
      color: "#FF4232",
      icon: {
        type: "hot",
        fromColor: "#FF867C",
        toColor: "#FF4232",
      },
    },
    price: {
      discountPercentage: 31,
      originalPrice: 69.99,
    },
  },
];
