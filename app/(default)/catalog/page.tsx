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
        <div className="lg:hidden mt-16 md:mt-[10vh] w-[300px]">
          <MobileSidebar />
        </div>

        {/* Sidebar for desktop */}
        <div className="hidden lg:block w-[300px] sticky top-16 md:top-[10vh] h-screen">
          <CatalogSidebar />
        </div>

        {/* Catalog */}
        <div className="min-h-screen ml-[300px]">
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
          <div className="min-h-screen">azd</div>
        </div>
      </section>

      <section></section>
    </>
  );
};

export default CatalogPage;
