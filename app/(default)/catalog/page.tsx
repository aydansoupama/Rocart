import CatalogSidebar from "@/components/layouts/catalog/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { catalogItems } from "@/datas/catalog";
import { CatalogItemCard } from "@/components/catalog/CatalogItemCard";
import HotRarityIcon from "@/components/catalog/rarity/icons/hot-rarity-icon";
import { catalogCategories } from "@/datas/catalog/categories";
import CatalogCategory from "@/components/catalog/CatalogCategory";
import CatalogFooter from "@/components/sections/catalog/CatalogFooter";
import CatalogSearch from "@/components/catalog/CatalogSearch";
import Logo from "@/components/layouts/Logo";
import CartSheet from "@/components/cart/CartSheet";

const CatalogPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <section className="flex font-poppins">
        <div className="flex flex-col items-center justify-between sticky w-[70px] h-screen pt-16 pb-2 md:pt-[10vh] top-0 overflow-y-auto">
          <CatalogSidebar />
          <Logo size={32} variant={"compact"} />
        </div>

        <div className="flex-1 flex flex-col gap-10 p-4 md:p-6 lg:p-8 mt-16 md:mt-[10vh] bg-[#000b05] min-w-0">
          {/* Hot Items */}
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-5 mb-6">
              <div className="w-[30px] h-[30px]">
                <HotRarityIcon fromColor={"#FF867C"} toColor={"#FF4232"} />
              </div>
              <span className="text-[20px] font-bold">Hot Items</span>
            </h2>
            <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-4 p-2">
              {catalogItems.map((item) => (
                <CatalogItemCard key={item.id} item={item} index={item.id} />
              ))}
            </div>
          </div>

          <CatalogSearch />

          {catalogCategories.map((category) => (
            <CatalogCategory key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      <div className="fixed top-[300px] right-0">
        <CartSheet />
      </div>

      <CatalogFooter />
    </>
  );
};

export default CatalogPage;
