import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.scrolled ? '0.5rem 0' : '1rem 0'};
  background: rgba(30, 29, 29, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transition: 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 5px 20px rgba(0, 0, 0, 0.5)' : 'none'};
`;

export const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: 0.3s ease;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 968px) {
    position: fixed;
    top: 70px;
    left: ${props => props.active ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 70px);
    background: #1e1d1d;
    flex-direction: column;
    padding: 2rem;
    transition: 0.3s ease;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: 0.3s ease;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${props => props.active ? '80%' : '0'};
    height: 2px;
    background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
    transform: translateX(-50%);
    transition: 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }

  &:hover {
    color: #ff7200;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 968px) {
    display: flex;
  }
`;

export const MenuBar = styled.span`
  width: 25px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: 0.3s ease;

  ${props => props.active && props.first && `
    transform: rotate(45deg) translate(8px, 8px);
  `}

  ${props => props.active && props.second && `
    opacity: 0;
  `}

  ${props => props.active && props.third && `
    transform: rotate(-45deg) translate(7px, -7px);
  `}
`;
