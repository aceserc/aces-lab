export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <section className="">
          <h3 className="">
            &copy;
            {" "}
            {new Date().getFullYear()}
            {" "}
            Designed and developed by
            <a
              target="_blank"
              href="https://jrtilak.dev"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              @jrTilak
            </a>
            {" "}
            and
            <a
              target="_blank"
              href="https://github.com/dev-sandip"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              @dev-sandip
            </a>
          </h3>
        </section>
      </div>
    </footer>
  );
};
