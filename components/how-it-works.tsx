export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Processo simples</h2>
          <p className="mt-2 text-3xl font-bold dark:text-white sm:text-4xl">
            Como funciona
          </p>
          <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-700">
            Crie seu portfólio profissional em apenas três passos simples
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-3">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white text-xl font-bold">
                1
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 dark:text-white">Forneça suas informações</h3>
              <p className="mt-2 text-base dark:text-gray-300 text-gray-700">
                Preencha um formulário simples com seus dados profissionais, habilidades e projetos anteriores.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white text-xl font-bold">
                2
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 dark:text-white">Nossa IA cria seu portfólio</h3>
              <p className="mt-2 text-base dark:text-gray-300 text-gray-700">
                Nosso agente de IA analisa suas informações e gera textos profissionais e um layout personalizado.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white text-xl font-bold">
                3
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 dark:text-white">Publique e compartilhe</h3>
              <p className="mt-2 text-base dark:text-gray-300 text-gray-700">
                Seu portfólio fica online instantaneamente com um domínio personalizado pronto para ser compartilhado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 