
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold">Dino Play</h2>
          <p className="mt-2 text-sm">Criando soluções inovadoras para o mundo.</p>
        </div>
        <nav>
          <h3 className="font-semibold">Links Rápidos</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Serviços</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Suporte</a></li>
          </ul>
        </nav>
        <div>
          <h3 className="font-semibold">Contato</h3>
          <p className="mt-2 text-sm">Email: contato@minhaempresa.com</p>
          <p className="text-sm">Telefone: (11) 9999-9999</p>
        </div>
      </div>
      <div className="text-center text-sm border-t border-gray-700 pt-8 mt-6">
        © 2025 Minha Empresa. Todos os direitos reservados.
      </div>
    </footer>
  )
}