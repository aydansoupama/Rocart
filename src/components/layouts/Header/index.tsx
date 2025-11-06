import { User } from "better-auth";
import ChooseGame from "./choose-game";
import Logo from "../Logo";
import LanguageEditor from "./language-editor";
import Auth from "./auth";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="flex justify-between items-center h-26 p-8">
      <div className="flex justify-center items-center gap-8">
        <div>
          <Logo size={10} />
        </div>

        <ChooseGame />
      </div>

      <div className="flex justify-center items-center gap-8">
        <LanguageEditor />
        <Auth user={session?.user} />
      </div>
    </header>
  );
};

export default Header;
