export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          0kbot
        </h1>
        <p className="text-xl text-muted-foreground">
          Automatización e IA para empresas chilenas
        </p>
        <div className="border border-border rounded-lg p-6 bg-card space-y-3">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Próximamente
          </p>
          <p className="text-base text-foreground">
            Estamos construyendo algo para ayudarte a automatizar tus procesos.
          </p>
          <a
            href="mailto:hola@0kbot.com"
            className="inline-block text-sm text-primary hover:underline"
          >
            hola@0kbot.com
          </a>
        </div>
      </div>
    </main>
  );
}
