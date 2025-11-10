import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DefaultLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <Header user={session?.user} />

      <main className="scroll-smooth">{children}</main>
      
      <Footer />
    </>
  );
};

export default DefaultLayout;