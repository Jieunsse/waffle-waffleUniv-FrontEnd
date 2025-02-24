import style from './footer.module.css';
import { FooterTitle } from '@components/title/footerTitle/FooterTitle.tsx';
import rocketLogo from 'src/shared/assets/img/logo/rocketLogo.svg';

interface FooterProps {
  className: string;
  title01: string;
  title02: string;
  title03: string;
  title04: string;
}

export const Footer = ({
  className,
  title01,
  title02,
  title03,
  title04,
}: FooterProps) => {
  return (
    <div className={className}>
      <FooterTitle title={'공지사항'} className={title01} />
      <FooterTitle title={'개인정보 처리방침'} className={title02} />
      <FooterTitle title={'문의하기'} className={title03} />
      <FooterTitle title={'©Gostock. All reserved.'} className={title04} />
      <img src={rocketLogo} alt={'logo'} className={style.logo} />
    </div>
  );
};
