import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CategoryPageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #cc5b00 0%, #ff7200 100%);
  color: #ffffff;
  padding: 8rem 2rem 6rem 2rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 2rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffffff;
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: #ffffff;
    background-clip: unset;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ClientCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition-delay: ${props => props.delay}ms;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const categoryData = {
    branding: {
      title: 'Branding',
      description: 'Criação de identidade visual e posicionamento de marca',
      clients: [
        { name: 'Bee Happy', description: 'Identidade Visual' },
        { name: 'Center Marc', description: 'Branding Completo' },
        { name: 'L3 Engenharia Ambiental', description: 'Identidade de Marca' },
        { name: 'Lirios', description: 'Design de Marca' },
        { name: 'Movimento Eco', description: 'Branding Sustentável' },
        { name: 'Pet Life', description: 'Identidade Visual' },
        { name: 'Red Nose', description: 'Rebranding' },
        { name: 'Sanclá', description: 'Manual de Marca' },
        { name: 'Pericles', description: 'Branding Pessoal' },
        { name: 'Arte Esportiva', description: 'Identidade Esportiva' }
      ]
    },
    'gestao-midias': {
      title: 'Gestão de Mídias',
      description: 'Gerenciamento estratégico de redes sociais e presença digital',
      clients: [
        { name: 'Bee Happy', description: 'Gestão de Redes Sociais' },
        { name: 'Center Marc', description: 'Marketing Digital' },
        { name: 'L3 Engenharia Ambiental', description: 'Presença Digital' },
        { name: 'Lirios', description: 'Social Media' },
        { name: 'Movimento Eco', description: 'Conteúdo Digital' },
        { name: 'Pet Life', description: 'Gestão de Mídias' },
        { name: 'Red Nose', description: 'Estratégia Digital' },
        { name: 'Sanclá', description: 'Redes Sociais' },
        { name: 'Pericles', description: 'Marketing de Conteúdo' },
        { name: 'Arte Esportiva', description: 'Social Media' }
      ]
    },
    'comunicacao-integrada': {
      title: 'Comunicação Integrada',
      description: 'Estratégias 360° de comunicação corporativa',
      clients: [
        { name: 'Bee Happy', description: 'Comunicação 360°' },
        { name: 'Center Marc', description: 'Estratégia Integrada' },
        { name: 'L3 Engenharia Ambiental', description: 'Comunicação Corporativa' },
        { name: 'Lirios', description: 'Assessoria de Imprensa' },
        { name: 'Movimento Eco', description: 'Comunicação Sustentável' },
        { name: 'Pet Life', description: 'Relações Públicas' },
        { name: 'Red Nose', description: 'Gestão de Crise' },
        { name: 'Sanclá', description: 'Comunicação Interna' },
        { name: 'Pericles', description: 'Assessoria de Comunicação' },
        { name: 'Arte Esportiva', description: 'Comunicação Esportiva' }
      ]
    },
    videos: {
      title: 'Vídeos',
      description: 'Produção audiovisual e motion graphics',
      clients: [
        { name: 'Bee Happy', description: 'Vídeos Institucionais' },
        { name: 'Center Marc', description: 'Produção Audiovisual' },
        { name: 'L3 Engenharia Ambiental', description: 'Vídeos Corporativos' },
        { name: 'Lirios', description: 'Motion Graphics' },
        { name: 'Movimento Eco', description: 'Documentários' },
        { name: 'Pet Life', description: 'Campanhas em Vídeo' },
        { name: 'Red Nose', description: 'Vídeos Promocionais' },
        { name: 'Sanclá', description: 'Conteúdo Audiovisual' },
        { name: 'Pericles', description: 'Vídeos Musicais' },
        { name: 'Arte Esportiva', description: 'Cobertura Esportiva' }
      ]
    }
  };

  const currentCategory = categoryData[category];

  if (!currentCategory) {
    return <div>Categoria não encontrada</div>;
  }

  const handleClientClick = (clientName) => {
    navigate(`/portfolio/${category}/${clientName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
  };

  const handleBackClick = () => {
    // Verifica se a página está rolada
    if (window.scrollY > 0) {
      // Se estiver rolada, volta para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se já estiver no topo, navega para a página anterior
      navigate('/');
      setTimeout(() => {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <CategoryPageWrapper>
      <Container>
        <BackButton onClick={handleBackClick}>
          ← Voltar para Portfólio
        </BackButton>
        <PageHeader>
          <h1>{currentCategory.title}</h1>
          <p>{currentCategory.description}</p>
        </PageHeader>
        <ClientsGrid>
          {currentCategory.clients.map((client, index) => (
            <ClientCard
              key={index}
              visible={visible}
              delay={index * 100}
              onClick={() => handleClientClick(client.name)}
            >
              <h3>{client.name}</h3>
              <p>{client.description}</p>
            </ClientCard>
          ))}
        </ClientsGrid>
      </Container>
    </CategoryPageWrapper>
  );
};

export default CategoryPage;
