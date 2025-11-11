import CatalogSidebar from "@/components/layouts/catalog/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { catalogItems } from "@/datas/catalog";
import { CatalogItemCard } from "@/components/catalog/CatalogItemCard";
import HotRarityIcon from "@/components/catalog/rarity/icons/hot-rarity-icon";
import { catalogCategories } from "@/datas/catalog/categories";
import CatalogCategory from "@/components/catalog/CatalogCategory";

const CatalogPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <section className="flex font-poppins">
        <div className="hidden lg:flex sticky w-[300px] mt-16 md:mt-[10vh] top-16 md:top-[10vh] h-screen">
          <CatalogSidebar />
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
                <CatalogItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {catalogCategories.map((category) => (
            <CatalogCategory key={category.id} category={category} />
          ))}

          {/* <div className="lg:hidden mt-16 md:mt-[10vh]">
            <MobileSidebar />
          </div> */}
        </div>
      </section>

      <section></section>
    </>
  );
};

export default CatalogPage;
