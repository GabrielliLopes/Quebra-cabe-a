import styled from 'styled-components';

export const PortfolioSection = styled.section`
  background: linear-gradient(135deg, #cc5b00 0%, #ff7200 100%);
  color: #ffffff;
  padding: 6rem 2rem;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const PortfolioFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 2rem;
  background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 2rem;
  color: ${props => props.active ? '#ff7200' : '#ffffff'};
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #ffffff;
    color: #ff7200;
    border-color: #ffffff;
    transform: translateY(-2px);
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioItem = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  aspect-ratio: 16/10;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: ${props => props.visible ? 1 : 0};
  transform: scale(${props => props.visible ? 1 : 0.9}) translateY(${props => props.visible ? 0 : '20px'});
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: block;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease;

  ${PortfolioItem}:hover & {
    transform: scale(1.1);
  }
`;

export const PortfolioOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: 0.3s ease;

  ${PortfolioItem}:hover & {
    opacity: 1;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  @media (max-width: 968px) {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 100%);
  }
`;

export const PortfolioCategory = styled.p`
  color: #dec8a5;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
`;
