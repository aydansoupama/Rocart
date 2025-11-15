import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const SignInWithGoogleButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data);
  };

  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 px-7 py-2.5 
                                border border-white/60 rounded-md text-white bg-transparent 
                                hover:bg-white/10 transition-all duration-200 
                                disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isLoading}
      onClick={handleGoogleSignIn}
    >
      <img
        src="/loginbg/google.png"
        alt="Google"
        className="w-5 h-5 object-contain"
      />
      <span className="text-sm font-medium">Google</span>
    </button>
  );
};

export default SignInWithGoogleButton;
