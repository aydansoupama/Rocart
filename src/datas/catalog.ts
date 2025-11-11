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
  {
    id: 2,
    name: "Racoon Pets",
    image: "/img-5467--1--1.png",
    color: "#1D3572",
    rarity: {
      name: "Mythical",
      color: "#329CFF",
      icon: {
        type: "hot",
        fromColor: "#7CF6FF",
        toColor: "#3292FF",
      },
    },
    price: {
      discountPercentage: 31,
      originalPrice: 69.99,
    },
  },
  {
    id: 3,
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
  {
    id: 4,
    name: "Racoon Pets",
    image: "/img-5467--1--1.png",
    color: "#1D3572",
    rarity: {
      name: "Mythical",
      color: "#329CFF",
      icon: {
        type: "hot",
        fromColor: "#7CF6FF",
        toColor: "#3292FF",
      },
    },
    price: {
      discountPercentage: 31,
      originalPrice: 69.99,
    },
  },
  {
    id: 5,
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
  {
    id: 6,
    name: "Racoon Pets",
    image: "/img-5467--1--1.png",
    color: "#1D3572",
    rarity: {
      name: "Mythical",
      color: "#329CFF",
      icon: {
        type: "hot",
        fromColor: "#7CF6FF",
        toColor: "#3292FF",
      },
    },
    price: {
      discountPercentage: 31,
      originalPrice: 69.99,
    },
  },
];
