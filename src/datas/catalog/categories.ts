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

export interface CatalogCategory {
  id: number;
  name: string;
  icon: {
    type: "hot";
    fromColor: string;
    toColor: string;
  };
  items: CatalogItem[];
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
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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

export const catalogCategories: CatalogCategory[] = [
  {
    id: 1,
    name: "Best Sellers",
    icon: {
      type: "hot",
      fromColor: "#FFBB00",
      toColor: "#FFD971",
    },
    items: catalogItems,
  },
  {
    id: 2,
    name: "Pets",
    icon: {
      type: "hot",
      fromColor: "#FF565A",
      toColor: "#993336",
    },
    items: catalogItems,
  },
  {
    id: 3,
    name: "Sheckles",
    icon: {
      type: "hot",
      fromColor: "#56ADFF",
      toColor: "#5CD4FF",
    },
    items: catalogItems,
  },
  {
    id: 4,
    name: "Fruits",
    icon: {
      type: "hot",
      fromColor: "#FF4400",
      toColor: "#FF7D5C",
    },
    items: catalogItems,
  },
  {
    id: 5,
    name: "Mutated Pets",
    icon: {
      type: "hot",
      fromColor: "#0900FF",
      toColor: "#8376FF",
    },
    items: catalogItems,
  },
  {
    id: 6,
    name: "Mega Pets",
    icon: {
      type: "hot",
      fromColor: "#FF00C8",
      toColor: "#FF5CFC",
    },
    items: catalogItems,
  },
  {
    id: 7,
    name: "Bundles",
    icon: {
      type: "hot",
      fromColor: "#FFFF00",
      toColor: "#F1FF87",
    },
    items: catalogItems,
  },
];
