import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ClientGalleryWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1d1d 0%, #2c2c2c 100%);
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
  background: rgba(255, 114, 0, 0.25);
  border: 2px solid rgba(255, 114, 0, 0.6);
  border-radius: 2rem;
  color: #ff7200;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgba(255, 114, 0, 0.35);
    transform: translateX(-5px);
    box-shadow: 0 6px 20px rgba(255, 114, 0, 0.3);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ff7200;
  }

  .category-name {
    font-size: 1rem;
    color: #dec8a5;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: ${props => props.visible ? 1 : 0};
  transform: scale(${props => props.visible ? 1 : 0.9}) translateY(${props => props.visible ? 0 : '20px'});
  transition-delay: ${props => props.delay}ms;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0 20px 50px rgba(255, 114, 0, 0.3);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
  opacity: 0;
  transition: 0.3s ease;

  ${ImageCard}:hover & {
    opacity: 1;
  }

  h3 {
    color: #ffffff;
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
  }

  p {
    color: #dec8a5;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const ClientGallery = () => {
  const { category, client } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Dados simulados das imagens por cliente
  const galleryData = {
    branding: {},
    'gestao-midias': {},
    'comunicacao-integrada': {},
    videos: {},
    // Clientes gerais
    'bee-happy': {
      name: 'Bee Happy',
      images: []
    },
    'center-marc': {
      name: 'Center Marc',
      images: []
    },
    'l3-engenharia-ambiental': {
      name: 'L3 Engenharia Ambiental',
      images: []
    },
    'lirios': {
      name: 'Lirios',
      images: []
    },
    'movimento-eco': {
      name: 'Movimento Eco',
      images: []
    },
    'pet-life': {
      name: 'Pet Life',
      images: []
    },
    'red-nose': {
      name: 'Red Nose',
      images: []
    },
    'sancla': {
      name: 'Sanclá',
      images: []
    },
    'pericles': {
      name: 'Pericles',
      images: []
    },
    'arte-esportiva': {
      name: 'Arte Esportiva',
      images: []
    }
  };

  const categoryNames = {
    branding: 'Branding',
    'gestao-midias': 'Gestão de Mídias',
    'comunicacao-integrada': 'Comunicação Integrada',
    videos: 'Vídeos'
  };

  const clientData = galleryData[category]?.[client];

  if (!clientData) {
    return (
      <ClientGalleryWrapper>
        <Container>
          <BackButton onClick={() => navigate(`/portfolio/${category}`)}>
            ← Voltar
          </BackButton>
          <GalleryHeader>
            <h1>Cliente não encontrado</h1>
          </GalleryHeader>
        </Container>
      </ClientGalleryWrapper>
    );
  }

  const handleBackToCategory = () => {
    // Verifica se a página está rolada
    if (window.scrollY > 0) {
      // Se estiver rolada, volta para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se já estiver no topo, navega para a página anterior
      navigate(`/portfolio/${category}`);
    }
  };

  return (
    <ClientGalleryWrapper>
      <Container>
        <BackButton onClick={handleBackToCategory}>
          ← Voltar para {categoryNames[category]}
        </BackButton>
        <GalleryHeader>
          <div className="category-name">{categoryNames[category]}</div>
          <h1>{clientData.name}</h1>
          <p>Portfólio completo de projetos realizados</p>
        </GalleryHeader>
        <ImageGrid>
          {clientData.images.map((image, index) => (
            <ImageCard
              key={index}
              visible={visible}
              delay={index * 100}
            >
              <img src={image.url} alt={image.title} />
              <ImageOverlay>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </ImageOverlay>
            </ImageCard>
          ))}
        </ImageGrid>
      </Container>
    </ClientGalleryWrapper>
  );
};

export default ClientGallery;
