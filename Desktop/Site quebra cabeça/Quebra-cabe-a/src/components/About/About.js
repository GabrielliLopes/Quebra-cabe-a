import React, { useEffect, useRef, useState } from 'react';
import { 
  AboutSection, 
  Container, 
  SectionHeader, 
  AboutContent, 
  AboutText, 
  AboutStats, 
  StatCard, 
  StatNumber, 
  StatLabel 
} from './About.styles';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const aboutRef = useRef(null);

  // Função para animar contadores
  const animateCounter = (setter, target, duration = 2000) => {
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);
      setter(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            // Inicia as animações dos contadores
            setTimeout(() => {
              animateCounter(setYearsCount, 4, 2000);
              animateCounter(setClientsCount, 50, 2000);
              animateCounter(setProjectsCount, 75, 2000);
            }, 300);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <AboutSection id="about" ref={aboutRef}>
      <Container>
        <SectionHeader>
          <h2>Sobre Nós</h2>
          <p>Conheça a agência que une criatividade, estratégia e resultados</p>
        </SectionHeader>
        <AboutContent>
          <AboutText visible={isVisible}>
            <h3>Cada Peça Importa</h3>
            <p>
              Na Quebra-Cabeça, acreditamos que cada projeto é único, como um quebra-cabeça
              complexo que precisa de atenção aos detalhes. Nossa equipe multidisciplinar trabalha
              em conjunto para encaixar perfeitamente cada elemento da sua estratégia de
              comunicação.
            </p>
            <p>
              Com anos de experiência no mercado, desenvolvemos campanhas que não apenas chamam
              atenção, mas criam conexões genuínas entre marcas e pessoas.
            </p>
          </AboutText>
          <AboutStats visible={isVisible}>
            <StatCard>
              <StatNumber>{yearsCount}+</StatNumber>
              <StatLabel>Anos de Experiência</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{clientsCount}+</StatNumber>
              <StatLabel>Clientes Satisfeitos</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{projectsCount}+</StatNumber>
              <StatLabel>Projetos Realizados</StatLabel>
            </StatCard>
          </AboutStats>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
