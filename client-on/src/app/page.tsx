"use client";

//app page.tsx
import {useState} from 'react';
import Navbar from '@/components/Navbar';
import * as React from 'react';
import Button from '@mui/material/Button';

const Hero = () => (
  <section className='bg-gray-800 text-white'>
    <div className='container mx-auto px-6 py-24 text-center'>
      <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
        ClientOn <br></br> Feito para alavancar seus negócios
      </h1>
      <p className='mt-8'> 
        Uma plataforma completa que transformará seu modelo de administrar sua empresa
      </p>
      <Button variant="outlined" size="large">
        Comece agora mesmo
      </Button>
    </div>
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

export default function Home() {
  return (
    <main className='bg-gray-100'>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
