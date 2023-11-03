import { useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../firebase/config";
import { useState } from "react";

export function useLogin() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<boolean>(false);

  const loginWithFirebase = async (email: string, password: string) => {
    try {
      const res: any = await logInWithEmailAndPassword(email, password);
      console.log(res);

      console.log(await res?.user.getIdToken());

      if (await res?.user.getIdToken()) {
        localStorage.setItem(
          "token",
          JSON.stringify(await res?.user.getIdToken())
        );
        navigate("/dashboard");
      }
    } catch (error) {
      if (error) {
        setLoginError(true);
      }
      return error;
    }
  };

  return {
    loginError,
    loginWithFirebase,
    setLoginError,
  };
}
