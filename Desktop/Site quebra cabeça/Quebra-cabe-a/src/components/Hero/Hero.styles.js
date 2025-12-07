import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1d1d 0%, #2a2929 50%, #1e1d1d 100%);
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(255, 114, 0, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(222, 200, 165, 0.1) 0%, transparent 50%);
    animation: ${pulse} 8s ease-in-out infinite;
  }
`;

export const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  h1 {
    margin-bottom: 2rem;
    animation: ${fadeInUp} 1s ease;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    animation: ${fadeInUp} 1s ease 0.2s backwards;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.125rem;
  transition: 0.3s ease;
  animation: ${fadeInUp} 1s ease 0.4s backwards;
  box-shadow: 0 10px 30px rgba(255, 114, 0, 0.3);
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 114, 0, 0.5);
  }
`;
