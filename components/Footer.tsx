export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="px-6 py-12 sm:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-foreground-secondary">
              &copy; {new Date().getFullYear()} Lauf Studio
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-foreground-secondary transition-colors hover:text-foreground"
            >
              X / Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-foreground-secondary transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
