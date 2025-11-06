import Header from "@/components/layouts/Header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <Header user={session?.user} />;
};

export default Home;
