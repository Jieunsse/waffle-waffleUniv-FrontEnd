import { Nav } from '@components/nav/Nav.tsx';
import NavStyles from '@components/nav/Nav.module.css';
import { Banner } from '@components/banner/Banner.tsx';
import BannerStyles from '@components/banner/banner.module.css';
import BannerImg from '@assets/img/banner/banner.svg';
import BannerButtonStyles from '@components/button/bannerButton/bannerButton.module.css';

export const Test = () => {
  return (
    <div>
      <Nav className={NavStyles.navbar} />
      <br />
      <Banner
        imgClassName={BannerStyles.banner}
        src={BannerImg}
        leftButtonClassName={BannerButtonStyles.leftButton}
        rightButtonClassName={BannerButtonStyles.rightButton}
      />
    </div>
  );
};
