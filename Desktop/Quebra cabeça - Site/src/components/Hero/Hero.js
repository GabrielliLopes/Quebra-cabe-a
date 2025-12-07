import React from 'react';
import Puzzle from '../Puzzle';
import { HeroSection, HeroContent, HeroText, CTAButton } from './Hero.styles';

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText>
          <h1>Montamos Soluções Criativas para Sua Marca</h1>
          <p>
            Somos a Quebra-Cabeça, uma agência de publicidade que transforma ideias em campanhas
            memoráveis. Cada peça do seu projeto é cuidadosamente encaixada para criar resultados
            extraordinários.
          </p>
          <CTAButton href="#contact">
            Vamos Conversar
          </CTAButton>
        </HeroText>
        <Puzzle />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
