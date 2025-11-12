import { CatalogItem } from "@/datas/catalog";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = CatalogItem & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CatalogItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  total: () => number;
};

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...item, quantity: 1 }] });
        }
      },

      removeItem: (id) =>
        set({
          items: get().items.filter((i) => i.id !== id),
        }),

      clearCart: () => set({ items: [] }),

      increaseQuantity: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }),

      decreaseQuantity: (id) =>
        set({
          items: get()
            .items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        }),

      total: () =>
        get().items.reduce(
          (sum, i) => sum + i.price.originalPrice * i.quantity,
          0
        ),
    }),
    {
      name: "cart-storage", // clé dans le localStorage
    }
  )
);
