import React, { useState, useEffect, useCallback } from 'react';
import { PuzzleWrapper, PuzzleContainer, PuzzleGrid, PuzzlePiece } from './Puzzle.styles';

const Puzzle = () => {
  // Letras que formam "QUEBRA CABEÇA" (12 letras no grid 4x3)
  const targetWord = ['Q', 'U', 'E', 'B', 'R', 'A', 'C', 'A', 'B', 'E', 'Ç', 'A'];

  // Função para embaralhar array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Começa com letras embaralhadas
  const [letters, setLetters] = useState(() => shuffleArray(targetWord));
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('shuffled'); // 'shuffled', 'solving', 'solved'

  // Animação automática para formar a palavra
  const animateToSolution = useCallback(() => {
    if (animationPhase === 'solving') return;

    setIsAnimating(true);
    setAnimationPhase('solving');

    let delay = 0;
    const moveDelay = 300; // tempo entre cada movimento

    // Resolver letra por letra
    for (let targetPos = 0; targetPos < targetWord.length; targetPos++) {
      const targetLetter = targetWord[targetPos];

      setTimeout(() => {
        setLetters(prev => {
          const newLetters = [...prev];
          // Encontrar onde está a letra que deveria estar nesta posição
          const currentPos = newLetters.findIndex((letter, idx) =>
            letter === targetLetter && idx >= targetPos
          );

          if (currentPos !== -1 && currentPos !== targetPos) {
            // Trocar as letras
            [newLetters[targetPos], newLetters[currentPos]] = [newLetters[currentPos], newLetters[targetPos]];
          }
          return newLetters;
        });
      }, delay);

      delay += moveDelay;
    }

    // Marcar como resolvido após todas as animações
    setTimeout(() => {
      setLetters([...targetWord]);
      setAnimationPhase('solved');
      setIsAnimating(false);

      // Reiniciar após 3 segundos
      setTimeout(() => {
        setLetters(shuffleArray(targetWord));
        setAnimationPhase('shuffled');
      }, 3000);
    }, delay + 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letters, animationPhase]);

  // Iniciar animação automática ao carregar
  useEffect(() => {
    const timer = setTimeout(() => {
      animateToSolution();
    }, 1500); // Aguarda 1.5s antes de começar

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loop da animação
  useEffect(() => {
    if (animationPhase === 'shuffled' && !isAnimating) {
      const timer = setTimeout(() => {
        animateToSolution();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animationPhase, isAnimating, animateToSolution]);

  const handleDragStart = (index) => {
    if (isAnimating) return;
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (draggedIndex === null || draggedIndex === dropIndex || isAnimating) return;

    const newLetters = [...letters];
    const temp = newLetters[draggedIndex];
    newLetters[draggedIndex] = newLetters[dropIndex];
    newLetters[dropIndex] = temp;

    setLetters(newLetters);
    setDraggedIndex(null);
  };

  return (
    <PuzzleWrapper>
      <PuzzleContainer>
        <PuzzleGrid>
          {letters.map((letter, index) => (
            <PuzzlePiece
              key={`piece-${index}`}
              index={index}
              isCorrect={letter === targetWord[index]}
              animating={isAnimating}
              solved={animationPhase === 'solved'}
              draggable={!isAnimating}
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
            >
              {letter}
            </PuzzlePiece>
          ))}
        </PuzzleGrid>
      </PuzzleContainer>
    </PuzzleWrapper>
  );
};

export default Puzzle;
