import { User } from "better-auth";
import ChooseGame from "./choose-game";
import Logo from "../Logo";
import LanguageEditor from "./language-editor";

const Header = async ({ user }: { user?: User }) => {
  console.log(user);

  return (
    <header className="flex justify-between items-center h-26 p-8">
      <div className="flex justify-center items-center gap-8">
        <div>
          <Logo size={10} />
        </div>

        <ChooseGame />
      </div>

      <div>
        {/* Language Button */}
        <LanguageEditor />
        {/* Authentication Button */}
      </div>
    </header>
  );
};

export default Header;
