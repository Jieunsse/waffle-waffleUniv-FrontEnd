import { Nav } from '@components/nav/Nav.tsx';
import { SideBar } from '@components/sidebar/SideBar.tsx';
import { Footer } from '@components/footer/Footer.tsx';
import footerStyle from '@components/footer/footer.module.css';
import footerTitleStyle from '@components/title/footerTitle/footerTitle.module.css';

export const Template = () => {
  return (
    <>
      <Nav />
      <SideBar />
      <Footer
        className={footerStyle.footer2}
        title01={footerTitleStyle.footerTitle05}
        title02={footerTitleStyle.footerTitle06}
        title03={footerTitleStyle.footerTitle07}
        title04={footerTitleStyle.footerTitle08}
      />
    </>
  );
};
