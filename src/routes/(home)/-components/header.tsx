import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <section className="container mx-auto">
      <header className="mt-4 md:mt-6 flex justify-between items-center p-2 w-fit border-b">
        <Link href="/" className="font-bold text-lg flex items-center">
          <img
            className="rounded-lg w-9 h-9 mr-2 object-contain object-center text-white"
            src="logo.png"
          />
          ACES Lab
        </Link>
      </header>
    </section>

  );
};

export default Header;
