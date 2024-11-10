import { Link } from "react-router-dom";

import Logo from "@/assets/logo.png";
import GoogleLogin from "@/components/reuseable/google-login";

function LoginPage() {
  return (
    <div className="relative h-[calc(100vh-4rem)] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden">
      <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566125882500-87e10f726cdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img
            src={Logo}
            alt="ACES Logo"
            className="mr-2 h-8 w-8"
          />
          ACES Letter Generator
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg text-white">
              "This letter generator has simplified our official correspondence process and helped us maintain professional standards in our communications."
            </p>
            <footer className="text-white text-sm">ACES President</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to ACES Letter Generator
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to start creating professional Nepali letters
            </p>
          </div>
          <div className="grid gap-6">
            <GoogleLogin />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our
            {" "}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>
            {" "}
            and
            {" "}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;
