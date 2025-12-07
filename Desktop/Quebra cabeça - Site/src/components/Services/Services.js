import React, { useEffect, useRef, useState } from 'react';
import { 
  ServicesSection, 
  Container, 
  SectionHeader, 
  ServicesGrid, 
  ServiceCard, 
  ServiceIcon, 
  ServiceTitle, 
  ServiceDescription 
} from './Services.styles';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const servicesRef = useRef(null);

  const services = [
    {
      icon: 'fas fa-comments',
      title: 'Gestão de Mídias Sociais',
      description:
        'Criação de conteúdo e gestão estratégica para aumentar a presença digital da sua marca.',
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Campanhas de Tráfego Pago',
      description: 'Gestão de anúncios no Google e redes sociais para gerar conversões reais.',
    },
    {
      icon: 'fas fa-photo-video',
      title: 'Criação de Conteúdo',
      description:
        'Produção de roteiros, vídeos e fotos profissionais para engajamento nas redes.',
    },
    {
      icon: 'fas fa-gem',
      title: 'Branding e Identidade Visual',
      description: 'Criação de marcas que se destacam e são lembradas.',
    },
    {
      icon: 'fas fa-chess-king',
      title: 'Consultoria Estratégica',
      description:
        'Assessoria completa para desenvolvimento de estratégias digitais personalizadas.',
    },
    {
      icon: 'fas fa-tv',
      title: 'Mídia Offline',
      description:
        'Planejamento e execução de campanhas publicitárias em mídias como rádio, TV e outdoor.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-service-card]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <ServicesSection id="services" ref={servicesRef}>
      <Container>
        <SectionHeader>
          <h2>Nossos Serviços</h2>
          <p>Soluções completas para elevar sua marca ao próximo nível</p>
        </SectionHeader>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              data-service-card
              visible={visibleCards.includes(index)}
            >
              <ServiceIcon>
                <i className={service.icon}></i>
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
