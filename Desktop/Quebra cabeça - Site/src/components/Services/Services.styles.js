import styled from 'styled-components';

export const ServicesSection = styled.section`
  background: #dec8a5;
  color: #000000;
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
    color: #000000;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: #f0f0f0;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  transition: 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '30px'});
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    border-color: #ff7200;
    box-shadow: 0 12px 30px rgba(255, 114, 0, 0.25);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #ff7200;
  line-height: 1;
`;

export const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: #ff7200;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: none;
  text-transform: uppercase;
`;

export const ServiceDescription = styled.p`
  font-size: 1.0rem;
  color: #666666;
  line-height: 1.7;
  margin: 0;
`;
