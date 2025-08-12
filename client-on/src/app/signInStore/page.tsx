"use client";

import Navbar from "@/components/Navbar";

// Componente do Formulário de Cadastro
const RegistrationForm = () => (
  // Seção principal que centraliza o conteúdo
  <section className="py-12 ">
    <div className="container mx-auto px-4 bg-form-fundo bg-cover bg-center">
      
      {/* O "cartão" do formulário */}
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
        
        {/* Título do Formulário */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Cadastro do Comércio
        </h2>

        <form className="space-y-6">
          {/* Campo: Nome Pessoa Jurídica */}
          <div>
            <label htmlFor="legalName" className="block text-sm font-medium text-gray-700">
              Nome Pessoa Jurídica
            </label>
            <input
              type="text"
              id="legalName"
              name="legalName"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>

          {/* Campo: Nome Fantasia */}
          <div>
            <label htmlFor="tradeName" className="block text-sm font-medium text-gray-700">
              Nome Fantasia
            </label>
            <input
              type="text"
              id="tradeName"
              name="tradeName"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          {/* Campo: CNPJ */}
          <div>
            <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
              CNPJ
            </label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>

          {/* Campo: E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>

          {/* Campo: Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>

          {/* Campo: Confirmar Senha */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>

          {/* Botão de Cadastro */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors cursor-pointer"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

// Componente principal da Página de Cadastro
export default function Signin() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <RegistrationForm />
    </main>
  );
}