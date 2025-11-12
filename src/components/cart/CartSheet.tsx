"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/Button";
import { DialogTitle } from "../ui/Dialog";
import CartIcon from "../catalog/CartIcon";
import { hexToRgba } from "@/lib/utils";
import { useCartStore } from "@/stores/cart";
import { useUIStore } from "@/stores/ui";
import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  DeleteItemIcon,
  DecreaseItemIcon,
  IncreaseItemIcon,
  CloseCartIcon,
} from "./ActionsItem";

const CartSheet = () => {
  const items = useCartStore((state) => state.items);

  const { increaseQuantity, decreaseQuantity, removeItem, total } =
    useCartStore();

  const { isCartOpen, openCart, closeCart } = useUIStore();

  const previousCount = useRef(items.length);

  useEffect(() => {
    const currentTotalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);

    if (currentTotalQuantity > previousCount.current) {
      openCart();
    }

    previousCount.current = currentTotalQuantity;
  }, [items, openCart]);

  return (
    <Sheet
      open={isCartOpen}
      onOpenChange={(open) => (open ? openCart() : closeCart())}
    >
      <SheetTrigger asChild>
        <Button
          className="w-16 h-16 rounded-none rounded-l-xl border cursor-pointer text-[#2ADF84] bg-[#006432] hover:bg-[#04381e]"
          style={{
            borderColor: hexToRgba("#13E97D", 0.25),
          }}
        >
          <CartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="font-poppins min-w-[500px]"
        side="right"
        showClose={false}
      >
        <DialogTitle className="sr-only">Filter Panel</DialogTitle>
        <SheetHeader className="flex flex-row items-center justify-between bg-[#06100a] border-b-[1.65px] px-7 border-[#2b322e]">
          <SheetTitle className="font-semibold text-[24px]">Cart</SheetTitle>
          <SheetClose className="flex justify-center items-center rounded-[20px] w-16 h-[58px] bg-[#003b18] hover:bg-[#003b18]/80 border border-[#265238] cursor-pointer">
            <div className="relative w-8 h-8">
              <CloseCartIcon />
            </div>
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col h-full gap-5">
          {items.length === 0 ? (
            <p>Ton panier est vide</p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between bg-[#06100a] border-y h-[135px] px-4 py-4 gap-[22px]"
                  style={{
                    borderColor: "#2b322e",
                  }}
                >
                  <div className="flex items-center gap-[22px]">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-20"
                      style={{
                        borderRadius: "1px",
                        overflow: "visible",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id={`stroke-gradient-${item.name.replace(
                            /\s+/g,
                            "-"
                          )}-${item.id}`}
                          x1="0%"
                          y1="100%"
                          x2="0%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor={"#666464"}
                            stopOpacity="0.7"
                          />
                          <stop
                            offset="28%"
                            stopColor="#CCC9C9"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        rx="15"
                        fill="none"
                        stroke={`url(#stroke-gradient-${item.name.replace(
                          /\s+/g,
                          "-"
                        )}-${item.id})`}
                      />
                    </svg>

                    <div className="relative flex justify-center items-center w-24 h-24 rounded-[20px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />

                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-20"
                        style={{
                          borderRadius: "1.62px",
                          overflow: "visible",
                        }}
                      >
                        <defs>
                          <linearGradient
                            id={`stroke-gradient-cart-${item.name.replace(
                              /\s+/g,
                              "-"
                            )}-${item.id}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor={item.rarity.color}
                              stopOpacity="1"
                            />
                            <stop
                              offset="28%"
                              stopColor="#259951"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          rx="15"
                          fill="none"
                          stroke={`url(#stroke-gradient-cart-${item.name.replace(
                            /\s+/g,
                            "-"
                          )}-${item.id})`}
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-[22px]">{item.name}</h3>
                      <p className="text-[#3DFF88] text-[18px]">
                        ${item.price.originalPrice}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2.5">
                    {item.quantity >= 2 ? (
                      <button
                        className="flex justify-center items-center rounded-[6px] cursor-pointer w-10 h-10 p-2.5 bg-[#276838] hover:bg-[#276838]/80 border border-[#437450] mt-auto text-[18px]"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <DecreaseItemIcon />
                      </button>
                    ) : (
                      <button
                        className="flex justify-center items-center rounded-[6px] cursor-pointer w-10 h-10 p-2.5 bg-[#276838] hover:bg-[#276838]/80 border border-[#437450] mt-auto text-[18px]"
                        onClick={() => removeItem(item.id)}
                      >
                        <DeleteItemIcon />
                      </button>
                    )}

                    <div className="flex justify-center items-center rounded-[6px] w-10 h-10 bg-[#276838] border border-[#437450] mt-auto text-[18px]">
                      {item.quantity}
                    </div>
                    <button
                      className="flex justify-center items-center rounded-[6px] cursor-pointer w-10 h-10 p-2.5 bg-[#276838] hover:bg-[#276838]/80 border border-[#437450] mt-auto text-[18px]"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <IncreaseItemIcon />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <SheetFooter className="flex flex-col gap-[30px] px-11 py-[46px]">
          <div className="flex flex-col justify-center h-[93px] bg-[#06100A] border-[1.62px] border-[#2b322e] px-5 py-6 rounded-[25px]">
            <h3 className="text-[22px] font-semibold">
              ${total().toFixed(2)} USD
            </h3>
            <p className="text-[#21843B] text-base">
              Discounts Applied at Checkout
            </p>
          </div>
          <button className="bg-[#00A241] hover:bg-[#00A241]/80 cursor-pointer transition-all rounded-[25px] py-6 px-32 flex justify-center items-center gap-1.5 h-[85px]">
            <div className="relative w-[38px] h-[38px]">
              <CartIcon />
            </div>
            <h3 className="text-[22px] font-semibold">Checkout</h3>
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
