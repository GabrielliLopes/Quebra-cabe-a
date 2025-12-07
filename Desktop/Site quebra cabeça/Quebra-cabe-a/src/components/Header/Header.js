import React, { useState, useEffect } from 'react';
import { HeaderWrapper, Nav, Logo, NavLinks, NavLink, MenuToggle, MenuBar } from './Header.styles';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderWrapper scrolled={isScrolled} id="header">
      <Nav>
        <Logo>QUEBRA-CABEÇA</Logo>
        <NavLinks active={isMobileMenuOpen} id="navLinks">
          <li>
            <NavLink
              href="#home"
              active={activeSection === 'home'}
              onClick={handleLinkClick}
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#about"
              active={activeSection === 'about'}
              onClick={handleLinkClick}
            >
              Sobre Nós
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#services"
              active={activeSection === 'services'}
              onClick={handleLinkClick}
            >
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#portfolio"
              active={activeSection === 'portfolio'}
              onClick={handleLinkClick}
            >
              Portfólio
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#contact"
              active={activeSection === 'contact'}
              onClick={handleLinkClick}
            >
              Contato
            </NavLink>
          </li>
        </NavLinks>
        <MenuToggle onClick={toggleMobileMenu} aria-label="Menu">
          <MenuBar active={isMobileMenuOpen} first />
          <MenuBar active={isMobileMenuOpen} second />
          <MenuBar active={isMobileMenuOpen} third />
        </MenuToggle>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
