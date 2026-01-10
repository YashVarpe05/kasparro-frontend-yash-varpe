export function PlatformFooter() {
  return (
    <footer className="border-t py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <span className="text-lg font-bold text-white">K</span>
            </div>
            <span className="font-bold">Kasparro</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-Native SEO & Brand Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
