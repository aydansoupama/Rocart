import { User } from "better-auth";
import ChooseGame from "./choose-game";
import Logo from "../Logo";

const Header = async ({ user }: { user?: User }) => {
  console.log(user);

  return (
    <header className="flex items-center h-26 p-8">
      <div className="flex justify-center items-center gap-8">
        <div>
         <Logo size={10} />
        </div>

        {/* Choose a Game Button */}
        <ChooseGame />
      </div>

      <div>
        {/* Language Button */}
        {/* Authentication Button */}
      </div>
    </header>
  );
};

export default Header;
