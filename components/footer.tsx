import Link from "next/link";
import { ThemeToggle } from "./theme-toggle"; // Assuming you have this component

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 w-full">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Meu Portfólio</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              O jeito mais fácil e rápido de ter seu portfólio online com a ajuda da inteligência artificial.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Produto</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#features" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Recursos</Link></li>
              <li><Link href="#how-it-works" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Como funciona</Link></li>
              <li><Link href="#examples" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Exemplos</Link></li>
              <li><Link href="/pricing" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Preços</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Sobre nós</Link></li>
              <li><Link href="/contact" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contato</Link></li>
              <li><Link href="/privacy" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacidade</Link></li>
              <li><Link href="/terms" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Termos</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Instagram</span>
              {/* Instagram icon */}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Twitter</span>
              {/* Twitter icon */}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
} 