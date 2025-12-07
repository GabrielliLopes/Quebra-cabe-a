import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #000000;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  color: #ffffff;
  font-size: 1.2rem;

  &:hover {
    background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
    border-color: transparent;
    transform: translateY(-3px);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;
