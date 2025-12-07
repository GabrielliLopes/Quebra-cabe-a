import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const flash = keyframes`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 8px 8px 15px rgba(255, 114, 0, 0.4);
  }
`;

const celebrate = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(-3deg);
  }
  50% {
    transform: scale(1.15) rotate(3deg);
  }
  75% {
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const PuzzleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 1s ease 0.6s backwards;
`;

export const PuzzleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 3/4;

  @media (max-width: 968px) {
    max-width: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
  }
`;

export const PuzzleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  height: 100%;
  perspective: 1000px;

  @media (max-width: 640px) {
    gap: 8px;
  }
`;

export const PuzzlePiece = styled.div`
  background: ${props => {
    // Cores alternadas mais vibrantes
    const colors = ['#ff7200', '#dec8a5', '#ff7200', '#ffffff'];
    return colors[props.index % 4];
  }};
  color: ${props => {
    const colors = ['#ffffff', '#1e1d1d', '#ffffff', '#1e1d1d'];
    return colors[props.index % 4];
  }};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  cursor: ${props => props.animating ? 'default' : 'grab'};
  position: relative;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  user-select: none;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  /* Transições suaves para movimento */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Animação de slide inicial */
  animation: ${slideIn} 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.05}s;
  
  /* Estado quando está correto */
  ${props => props.isCorrect && css`
    background: linear-gradient(135deg, #ff7200 0%, #ff9500 100%);
    color: #ffffff;
    box-shadow: 5px 5px 15px rgba(255, 114, 0, 0.3);
  `}
  
  /* Animação de celebração quando resolvido */
  ${props => props.solved && css`
    animation: ${celebrate} 0.6s ease;
    animation-delay: ${props => props.index * 0.05}s;
    background: linear-gradient(135deg, #ff7200 0%, #ff9500 100%);
    color: #ffffff;
  `}

  &:hover {
    ${props => !props.animating && css`
      transform: translateY(-3px);
      box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.25);
    `}
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
    border-radius: 8px;
  }
`;

export const ShuffleButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 0.9rem;

  &:hover {
    background: white;
    color: #1e1d1d;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

