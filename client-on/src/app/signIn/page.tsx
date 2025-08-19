"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import InputField from "@/components/InputField";

type FormData = {
  legalName: string;
  tradeName: string;
  cnpj: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    legalName: "",
    tradeName: "",
    cnpj: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, "") // só números
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .substring(0, 18);
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [id]: id === "cnpj" ? formatCNPJ(value) : value, // aplica só no CNPJ
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form ready to be submitted:", formData);
};

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Cadastro do Comércio
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField
              id="legalName"
              label="Nome Pessoa Jurídica"
              value={formData.legalName}
              onChange={handleChange}
              required
            />

            <InputField
              id="tradeName"
              label="Nome Fantasia"
              value={formData.tradeName}
              onChange={handleChange}
            />

            <InputField
              id="cnpj"
              label="CNPJ"
              value={formData.cnpj}
              onChange={handleChange}
              required
            />

            <InputField
              id="email"
              label="E-mail"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <InputField
              id="password"
              label="Senha"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <InputField
              id="confirmPassword"
              label="Confirmar Senha"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

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
};

export default function Signin() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-5 bg-form-fundo bg-cover bg-center filter blur-xs z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <RegistrationForm />
      </div>
    </main>
  );
}
