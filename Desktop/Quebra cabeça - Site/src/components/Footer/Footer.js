import React from 'react';
import { FooterWrapper, FooterContent, FooterSection, SocialLinks, SocialLink, FooterBottom } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h3>Quebra-Cabeça</h3>
          <p>Agência de publicidade criativa que transforma ideias em soluções impactantes.</p>
          <SocialLinks>
            <SocialLink
              href="https://wa.me/5516996415690"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/quebracabeca.comunicacao?igsh=b3R3OTIIbGxzM2ho"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <h3>Serviços</h3>
          <p>Gestão de Mídias Sociais</p>
          <p>Campanhas de Tráfego Pago</p>
          <p>Criação de Conteúdo</p>
          <p>Branding e Identidade Visual</p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 Quebra-Cabeça Comunicação. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
