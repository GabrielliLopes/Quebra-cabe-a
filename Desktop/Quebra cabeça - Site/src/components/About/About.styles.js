import styled from 'styled-components';

export const AboutSection = styled.section`
  background: #ffffff;
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
    margin-bottom: 1rem;
    color: #000000;
  }

  p {
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateX(${props => props.visible ? '0' : '-50px'});
  transition: all 0.8s ease;

  h3 {
    color: #000000;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateX(${props => props.visible ? '0' : '50px'});
  transition: all 0.8s ease 0.2s;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #ff7200;
    box-shadow: 0 10px 30px rgba(255, 114, 0, 0.15);
  }
`;

export const StatNumber = styled.span`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1rem;
  font-weight: 500;
`;
