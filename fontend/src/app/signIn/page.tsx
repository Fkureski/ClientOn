"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import InputField from "@/components/InputField";
import { useRouter } from 'next/navigation';

type FormData = {
  legalName: string;
  tradeName: string;
  cnpj: string;
  email: string;
  password: string;
  confirmPassword: string;
  cep: string;
  city: string;
  state: string;
  street: string;
  neighborhood: string;
  number: string;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    legalName: "",
    tradeName: "",
    cnpj: "",
    email: "",
    cep: "",
    city: "",
    state: "",
    street: "",
    neighborhood: "",
    number: "" ,
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(1);

const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, "") 
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .substring(0, 18);
};

const formatCep = (value: string) => {
  return value.replace(/\D/g, "")
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target;

  let formatedValue = value;
  if (id === "cnpj"){
    formatedValue = formatCNPJ(value);
  } 
  else if (id === "cep"){
    formatedValue = formatCep(value);
  }
  setFormData((prev) => ({
    ...prev,
    [id]: formatedValue,
  }));
};

const [successMessage, setSuccessMessage] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const router = useRouter()

const handleNext = () => {
  setStep((prev) => prev + 1);
};

const handleBack = () => {
  setStep((prev) => prev - 1);
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (formData.password != formData.confirmPassword){
    setError("As senhas não coincidem.");
    return
  }

  setIsLoading(true);
  setError(null);

  const storeData = {
    name: formData.legalName,
    fantasyName: formData.tradeName,
    cnpj: formData.cnpj,
    email: formData.email,
    password: formData.password
  }

  try {
    
    const response = await fetch("https://localhost:7292/api/CreateStore/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(storeData),
    });

    if(response.ok){
      const result = await response.json();
      console.log("Store registered successfully.", result);
      setSuccessMessage("Cadastro realizado com sucesso! Você será redirecionado em breve.");
      setTimeout(() => {
        router.push('/signup');
      }, 2000);
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Ocorreu um erro desconhecido ao cadastrar.")
      console.log("Store registration failed.", errorData)
    }
  } catch (err) {

    setError("Não foi possível conectar-se ao servidor. Tente novamente mais tarde.");
    console.log("Network error:", err);
  } finally {
    setIsLoading(false);
  }

  console.log("Form ready to be submitted:", formData);
};

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mt-10 bg-gray-200 p-8 md:p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Cadastro do Comércio
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Step 1 infos*/}
            {step == 1 && (
              <>
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
            </>
            )}
            {step == 2 && (
              <>
              <InputField 
              id="cep"
              label="CEP"
              value={formData.cep}
              onChange={handleChange}
              required
            />

              <InputField 
                id="city"
                label="Cidade"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <InputField 
                id="state"
                label="Estado"
                value={formData.state}
                onChange={handleChange}
                required
              />

              <InputField 
                id="street"
                label="Rua"
                value={formData.street}
                onChange={handleChange}
                required
              />

              <InputField 
                id="neighborhood"
                label="Bairro"
                value={formData.neighborhood}
                onChange={handleChange}
                required
              />

              <InputField 
                id="number"
                label="Número"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </>
            )}
            

            {step == 3 &&(
              <>
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
              </>
            )}

            <div className="flex justify-between pt-5">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                    className="py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-500 hover:bg-gray-700">
                  Voltar
                </button>
              ) : (
                // This empty div acts as a placeholder to keep the "Next" button on the right
                <div /> 
              )}

              {step < 3 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-500 hover:bg-gray-700">
                      Próximo
                  </button>
              )}
            </div>
            <div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
              {step == 3 && !successMessage && (
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors cursor-pointer"
                    disabled={isLoading}>
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                  </button>
              )}
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
        <RegistrationForm />
      </div>
    </main>
  );
}
