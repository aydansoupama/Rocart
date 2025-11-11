import { MobileSidebar } from "@/components/layouts/catalog/sidebar/MobileSidebar";
import CatalogSidebar from "@/components/layouts/catalog/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CatalogPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <section className="flex">
        {/* Sidebar for mobile */}
        <div className="lg:hidden mt-16 md:mt-[10vh]">
          <MobileSidebar />
        </div>

        {/* Sidebar for desktop */}
        <div className="hidden lg:block mt-16 md:mt-[10vh] sticky">
          <CatalogSidebar />
        </div>

        {/* Catalog */}
        <div className="min-h-screen"></div>
      </section>

      <section></section>
    </>
  );
};

export default CatalogPage;
