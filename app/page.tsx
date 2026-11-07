export default function Home() {
  const skills = [
    { titre: "Compétence 1", texte: "Une phrase qui explique ce que tu fais." },
    { titre: "Compétence 2", texte: "Une phrase qui explique ce que tu fais." },
    { titre: "Compétence 3", texte: "Une phrase qui explique ce que tu fais." },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-600">
          Portfolio
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Antoine
        </h1>
        <p className="mt-6 max-w-xl text-xl text-neutral-600 sm:text-2xl">
          Ta phrase forte ici, courte et directe.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-10 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Compétences
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {skills.map((s) => (
            <div key={s.titre} className="border-t border-black pt-4">
              <h3 className="text-lg font-medium">{s.titre}</h3>
              <p className="mt-2 text-neutral-600">{s.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Contact
          </h2>
          <a
            href="mailto:antoinepelissier0110@gmail.com"
            className="mt-6 inline-block text-2xl text-orange-500 underline-offset-8 hover:underline sm:text-4xl"
          >
            antoinepelissier0110@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}