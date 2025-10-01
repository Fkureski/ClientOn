"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import InputField from "@/components/InputField"; 

type FormData = { 
    email: string;
    password: string;
}

// Componente com a lógica e a estrutura do formulário
const LoginForm = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Função para atualizar o estado quando o usuário digita
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/dashboard');
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Credenciais inválidas. Tente novamente.");
            }
        } catch (err) {
            setError("Não foi possível conectar ao servidor. Verifique sua conexão.");
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Acessar sua Conta
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputField 
                        id="email"
                        type="email"
                        label="Endereço de E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <InputField 
                        id="password"
                        type="password"
                        label="Sua Senha"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {error && (
                        <p className="text-sm text-center text-red-600 bg-red-100 p-3 rounded-md">
                            {error}
                        </p>
                    )}

                    <div>
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="w-full px-4 py-3 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        >
                            {isLoading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center text-gray-600">
                <Link href="/forgot-password" className="font-medium text-gray-800 hover:underline">
                    Esqueceu sua senha?
                </Link>
                </div>
                <hr />
                <div className="text-sm text-center text-gray-600">
                    Não tem uma conta?{' '}
                    <Link href="/signUp" className="font-medium text-gray-800 hover:underline">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Componente principal da página que renderiza o layout
export default function Signin() {
  return (
    <main className="relative min-h-screen">
      {/* Div para o fundo desfocado */}
      <div className="absolute inset-5 bg-form-fundo bg-cover bg-center filter blur-xs z-0"></div>
      
      {/* Overlay escuro para melhor legibilidade */}
     <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Conteúdo do formulário por cima do fundo */}
      <div className="relative z-10">
        <LoginForm />
      </div>
    </main>
  );
}