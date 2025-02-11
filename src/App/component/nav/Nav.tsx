import React from 'react';
import navStyle from '@components/nav/Nav.module.css';
import { SearchInput } from '@components/input/SearchInput.tsx';
import searchInputStyles from '@components/input/serachInput.module.css';
import mainLogo from '@assets/img/logo/mainLogo.svg';
import hamburgerButton from '@assets/img/hamburger/hamburgerButton.svg';
import hamburgerStyle from '@assets/img/hamburger/hamburger.module.css';
import mainLogoStyle from '@assets/img/logo/mainLogo.module.css';
import { NavbarButton } from '@components/button/navbarButton/NavbarButton.tsx';
import NavbarButtonStyle from '@components/button/navbarButton/navbarButton.module.css';
import { useNavigate } from 'react-router-dom';

interface NavProps {
  children?: React.ReactNode;
  className?: string;
}

export const Nav = ({ children, className }: NavProps) => {
  const navigate = useNavigate();

  return (
    <nav className={`${navStyle.navbar} ${className || ''}`}>
      <img
        src={mainLogo}
        alt="로고"
        className={mainLogoStyle.img}
        onClick={() => navigate('/')}
      />
      <SearchInput placeholder="검색" className={searchInputStyles.input} />
      <NavbarButton
        className={`${NavbarButtonStyle.button} ${NavbarButtonStyle.home}`}
        buttonName={'홈'}
        onClick={() => navigate('/')}
      />
      <NavbarButton
        className={`${NavbarButtonStyle.button} ${NavbarButtonStyle.news}`}
        buttonName={'뉴스'}
        onClick={() => navigate('/news')}
      />
      <NavbarButton
        className={`${NavbarButtonStyle.button} ${NavbarButtonStyle.board}`}
        buttonName={'게시판'}
        onClick={() => navigate('/board')}
      />
      <NavbarButton
        className={`${NavbarButtonStyle.button} ${NavbarButtonStyle.login}`}
        buttonName={'로그인'}
        onClick={() => navigate('/login')}
      />
      <img
        src={hamburgerButton}
        alt="햄버거 버튼"
        className={hamburgerStyle.img}
      />
      {children}
    </nav>
  );
};
