import style from './footer.module.css';
import titleStyle from '@components/title/footerTitle/footerTitle.module.css';
import { FooterTitle } from '@components/title/footerTitle/FooterTitle.tsx';
import rocketLogo from 'src/shared/assets/img/logo/rocketLogo.svg';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <FooterTitle title={'공지사항'} className={titleStyle.footerTitle01} />
      <FooterTitle
        title={'개인정보 처리방침'}
        className={titleStyle.footerTitle02}
      />
      <FooterTitle title={'문의하기'} className={titleStyle.footerTitle03} />
      <FooterTitle
        title={'©Gostock. All reserved.'}
        className={titleStyle.footerTitle04}
      />
      <img src={rocketLogo} alt={'logo'} className={style.logo} />
    </div>
  );
};
