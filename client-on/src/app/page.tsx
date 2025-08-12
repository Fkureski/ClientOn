"use client";

//app page.tsx
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const slidesData = [
  {
    image: "/slide1.png",
    title: "ClientOn",
    subtitle: "Feito para alavancar seus negócios",
    description: "Uma plataforma completa que transformará seu modelo de administrar sua empresa."
  },
  {
    image: "/slide2.png",
    title: "Análise de Dados",
    subtitle: "Decisões inteligentes baseadas em dados",
    description: "Visualize métricas e KPIs em tempo real para tomar as melhores decisões."
  },
  {
    image: "/slide3.png",
    title: "Automação de Tarefas",
    subtitle: "Poupe tempo e reduza erros",
    description: "Automatize processos repetitivos e foque no que realmente importa: o crescimento."
  },
]

const Hero = () => (
  <section className='relative h-screen text-white h-[500px]'>
    <Swiper
    //modulo utilizado
    modules={[Navigation, Pagination, Autoplay]}
    navigation //navegação por setas
    pagination = {{clickable: true}} //navegação por botões
    autoplay = {{delay: 5000, disableOnInteraction: false}} //Faz o carrossel de mover sozinho a cada 5 seg
    loop = {true} //Cria um loop infinito
    className='w-full h-full'    
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} className='relative'>
          {/*Imagem de fundo do slide*/}
          <img src={slide.image}
          alt={slide.title}
          className='w-full h-full object-cover absolute inset-0 -z-10'/>
          {/* Overlay escuro para melhorar a legibilidade do texto */}
          <div className='absolute inset-0 bg-black/80'/>
          {/* Conteúdo do slide (centralizado) */}
          <div className='relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center'>
            <h1 className='text-slate-200 text-4xl md:text-6xl font-bold leading-tight'>
              {slide.title} <br /> 
              <span className='text-3xl'>
                {slide.subtitle}
              </span>
            </h1>
            <p className='mt-8 max-w-2xl'>
              {slide.description}
            </p>
            <div className='mt-8'>
              <Button variant='contained' size='large' sx={{color: 'white', borderColor: 'black'}}>
                Comece agora mesmo
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

const Features = () => (
  <section className='bg-white py-20'>
    <div className='container mx-auto px-6 text-center'>
      <h2 className='text-3xl font-bold text-gray-800 mb-12'>
        Nossos Recursos
      </h2>
    </div>
  </section>
);

const Footer = () => (
  <footer className='bg-gray-800 text-white'>
    <div className='container mx-auto px-6 py-12'>
      {/*Seção principal do footer*/}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

        {/*Coluna 1*/}
        <div className='md:col-span-1'>
          <h2 className='text-2xl font-bold mb-2'>
            ClientOn
          </h2>
          <p className='text-zinc-400 text-sm'>
          Uma plataforma completa que transformará seu modelo de administrar sua empresa.
          </p>
        </div>

        {/*Coluna 2*/}
        <div>
          <h3 className='font-semibold mb-4'>
            Produto
          </h3>
          <ul className='space-y-2'>
            <li><a href="#" className='text-zinc-400 hover:text-white hover:underline'>Recursos</a></li>
            <li><a href="#" className='text-zinc-400 hover:text-white hover:underline'>Preços</a></li>
            <li><a href="#" className='text-zinc-400 hover:text-white hover:underline'>Demonstração</a></li>
            <li><a href="#" className='text-zinc-400 hover:text-white hover:underline'>Integrações</a></li>
          </ul>
        </div>

        {/*Coluna 3*/}
        <div>
          <h3 className='font-semibold mb-4'>Empresa</h3>
          <ul className='space-y-2'>
            <li><a href="#" className="text-zinc-400 hover:text-white hover:underline">Sobre Nós</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white hover:underline">Contato</a></li>
          </ul>
        </div>
      </div>

      {/* Linha divisória */}
      <hr className="my-8 border-gray-700" />

      {/* Seção inferior com copyright e redes sociais */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-zinc-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} ClientOn. Todos os direitos reservados.
        </p>
      </div>
    </div>

  </footer>
)

export default function Home() {
  return (
    <main className='bg-gray-100'>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
