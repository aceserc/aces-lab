import { loginWithGoogle } from "@/firebase/login-with-google";

import { Button } from "../ui/button";
import {useNavigate} from "react-router-dom";

function GoogleLogin() {
  const navigate = useNavigate();
  return (
    <Button
        onClick={async () => { await loginWithGoogle(); navigate("/dashboard/create"); }}
      variant="secondary"
      className="gap-4 border-primary/40 border"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        width={20}
        height={20}
      />
      Continue with Google
    </Button>
  );
}

export default GoogleLogin;
