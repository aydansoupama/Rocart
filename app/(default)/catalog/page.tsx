import CatalogSidebar from "@/components/layouts/catalog/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CatalogPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <section className="flex ">
        {/* Sidebar */}
        <CatalogSidebar />

        {/* Catalog */}
        <div className="min-h-screen"></div>
      </section>

      <section></section>
    </>
  );
};

export default CatalogPage;
