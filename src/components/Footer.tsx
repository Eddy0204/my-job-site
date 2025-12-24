const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edward Yeretnov. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion in Tel Aviv
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
