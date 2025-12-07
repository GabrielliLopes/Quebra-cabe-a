import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PortfolioSection,
  Container,
  SectionHeader,
  PortfolioGrid,
  PortfolioItem,
  PortfolioImage,
  PortfolioOverlay,
  PortfolioCategory
} from './Portfolio.styles';

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const portfolioRef = useRef(null);
  const navigate = useNavigate();

  const portfolioCategories = [
    {
      title: 'Branding',
      category: 'branding',
      description: 'Criação de identidade visual e posicionamento de marca',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=500&fit=crop',
    },
    {
      title: 'Gestão de Mídias',
      category: 'gestao-midias',
      description: 'Gerenciamento estratégico de redes sociais',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
    },
    {
      title: 'Comunicação Integrada',
      category: 'comunicacao-integrada',
      description: 'Estratégias 360° de comunicação corporativa',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
    },
    {
      title: 'Vídeos',
      category: 'videos',
      description: 'Produção audiovisual e motion graphics',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/portfolio/${category}`);
  };

  return (
    <PortfolioSection id="portfolio" ref={portfolioRef}>
      <Container>
        <SectionHeader>
          <h2>Portfólio</h2>
          <p>Conheça nossas áreas de atuação e os projetos que nos orgulhamos de ter realizado</p>
        </SectionHeader>
        <PortfolioGrid>
          {portfolioCategories.map((item, index) => (
            <PortfolioItem
              key={index}
              className="portfolio-item"
              onClick={() => handleCategoryClick(item.category)}
              visible={visibleItems.includes(index)}
            >
              <PortfolioImage src={item.image} alt={item.title} />
              <PortfolioOverlay>
                <h3>{item.title}</h3>
                <PortfolioCategory>{item.description}</PortfolioCategory>
              </PortfolioOverlay>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;
