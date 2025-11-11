import { MobileSidebar } from "@/components/layouts/catalog/sidebar/MobileSidebar";
import CatalogSidebar from "@/components/layouts/catalog/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { catalogItems } from "@/datas/catalog";
import { CatalogItemCard } from "@/components/catalog/CatalogItemCard";

const CatalogPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <section className="flex">
        <div className="hidden lg:flex sticky w-[300px] mt-16 md:mt-[10vh] top-16 md:top-[10vh] h-screen">
          <CatalogSidebar />
        </div>

        <div className="flex-1 p-4 md:p-6 lg:p-8 mt-16 md:mt-[10vh] bg-[#000b05]">
          <div className="lg:hidden mt-16 md:mt-[10vh]">
          <MobileSidebar />
        </div>
          <h2 className="text-3xl font-bold text-white mb-6">All Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {catalogItems.map((item) => (
              <CatalogItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
};

export default CatalogPage;
