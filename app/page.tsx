export default function Home() {
  const skills = [
    { titre: "Compétence 1", texte: "Une phrase qui explique ce que tu fais." },
    { titre: "Compétence 2", texte: "Une phrase qui explique ce que tu fais." },
    { titre: "Compétence 3", texte: "Une phrase qui explique ce que tu fais." },
  ];

  return (
    <main className="min-h-screen bg-fond text-texte">
      <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
          Portfolio
        </p>
        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-8xl">
          Antoine
        </h1>
        <p className="mt-6 max-w-xl text-xl text-discret sm:text-2xl">
          Ta phrase forte ici, courte et directe.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-12 text-sm uppercase tracking-[0.3em] text-discret">
          Compétences
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {skills.map((s) => (
            <div key={s.titre} className="border-t border-primaire pt-4">
              <h3 className="font-display text-lg font-medium">{s.titre}</h3>
              <p className="mt-2 text-discret">{s.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primaire px-6 py-24 text-fond">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-fond/70">
            Contact
          </h2>
          <a
            href="mailto:antoinepelissier0110@gmail.com"
            className="mt-6 inline-block font-display text-2xl font-medium underline-offset-8 hover:underline sm:text-4xl"
          >
            antoinepelissier0110@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}