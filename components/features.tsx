import { Brain, Palette, Zap, Globe, Moon, Clock } from "lucide-react";

const features = [
  {
    name: "IA avançada",
    description: "Nossa IA analisa suas informações e cria textos personalizados para destacar suas habilidades.",
    icon: Brain,
  },
  {
    name: "Design profissional",
    description: "Layouts modernos e responsivos que funcionam em qualquer dispositivo.",
    icon: Palette,
  },
  {
    name: "Rápido e fácil",
    description: "Configure seu portfólio em minutos, sem necessidade de conhecimentos técnicos.",
    icon: Zap,
  },
  {
    name: "Site completo",
    description: "Receba um domínio personalizado para compartilhar facilmente com recrutadores e clientes.",
    icon: Globe,
  },
  {
    name: "Tema claro/escuro",
    description: "Seu portfólio se adapta automaticamente às preferências de tema do visitante.",
    icon: Moon,
  },
  {
    name: "Atualizações rápidas",
    description: "Atualize seu portfólio a qualquer momento com novos projetos e experiências.",
    icon: Clock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Recursos exclusivos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
            Tudo que você precisa para um portfólio impressionante
          </p>
          <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-700">
            Nossa tecnologia de IA transforma suas informações básicas em um portfólio profissional completo
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 dark:text-gray-300 text-gray-700">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
} 