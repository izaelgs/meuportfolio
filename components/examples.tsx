import Image from "next/image";

const examples = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Designer",
    image: "/examples/portfolio1.webp",
    preview: "/examples/preview1.webp",
  },
  {
    id: 2,
    name: "Pedro Santos",
    role: "Desenvolvedor Web",
    image: "/examples/portfolio2.jpg",
    preview: "/examples/preview2.jpg",
  },
  {
    id: 3,
    name: "Luiza Costa",
    role: "Fotógrafa",
    image: "/examples/portfolio3.jpg",
    preview: "/examples/preview3.jpg",
  },
];

export default function Examples() {
  return (
    <section id="examples" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Exemplos reais</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
            Veja o que a nossa IA pode criar
          </p>
          <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-700">
            Exemplos de portfólios criados com nossa tecnologia de IA
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {examples.map((example) => (
            <div key={example.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="relative flex-shrink-0">
                <Image
                  className="h-56 w-full object-cover"
                  src={example.preview}
                  alt={`Portfólio de ${example.name}`}
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <Image
                    className="h-10 w-10 rounded-full ring-2 ring-white"
                    src={example.image}
                    alt={example.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">{example.name}</p>
                    <p className="text-xs text-gray-300">{example.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-6">
                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Ver portfolio completo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 