import styled from "styled-components";
import GraLine from "@/components/common/GradationLine"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from './Logo';

const HeaderWrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav<{ open?: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background: rgba(223, 223, 223, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    gap: 1rem;

    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;


const NavItem = styled(motion.button)<{ active?: boolean }>`
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  color: ${({ active }) => (active ? 'var(--primary-color)' : 'var(--gray-100)')};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ active }) => (active ? '80%' : '0%')};
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
  

interface HeaderProps {
    PageName?: string;
    menuName?: string | string[];
}

const Header = ({}: HeaderProps = {}) => {
    const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { path: '/home', label: '홈' },
    { path: '/project', label: '프로젝트' },
  ];

  const isActive = (path: string) =>
    path === '/home'
      ? location.pathname === '/home'
      : location.pathname.startsWith(path);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo onClick={() => navigate('/home')} />

        <MenuButton onClick={() => setOpen(!open)}>
          <MenuIcon />
        </MenuButton>

        <Nav open={open}>
          {menuItems.map((item) => (
            <NavItem
              key={item.path}
              active={isActive(item.path)}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavItem>
          ))}
        </Nav>
      </HeaderContainer>

      <GraLine />
    </HeaderWrapper>
  );
}

export default Header;