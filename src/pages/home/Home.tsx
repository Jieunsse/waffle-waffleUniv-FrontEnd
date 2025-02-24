import { Nav } from '@components/nav/Nav.tsx';
import NavStyles from '@components/nav/Nav.module.css';
import { Banner } from '@components/banner/Banner.tsx';
import BannerStyles from '@components/banner/banner.module.css';
import BannerImg from '@assets/img/banner/banner.svg';
import BannerButtonStyles from '@components/button/bannerButton/bannerButton.module.css';
import { CardNews } from '@components/card/CardNews.tsx';
import CardNewsStyles from '@components/card/cardNews.module.css';
import { CategoryTitle } from '@components/title/newsTitle/CategoryTitle/CategoryTitle.tsx';
import { CardNewsContainer } from '@components/container/cardNews/CardNewsContainer.tsx';
import cardNewsImg01 from '@assets/img/cardNews/cardNews01.png';
import cardNewsImg02 from '@assets/img/cardNews/cardNews02.png';
import cardNewsImg03 from '@assets/img/cardNews/cardNews03.png';
import { SideBar } from '@components/sidebar/SideBar.tsx';
import { PopularPost } from '@components/popularPost/PopularPost.tsx';
import { PopularPostContainer } from '@components/container/popularPostContainer/PopularPostContainer.tsx';
import CategoryStyle from '@components/title/newsTitle/CategoryTitle/categoryTitle.module.css';
import { WriteButton } from '@components/button/WriteButton/WriteButton.tsx';
import writeButtonStyle from '@components/button/WriteButton/WriteButton.module.css';
import { ImgBox } from '@components/popularPost/imgBox/ImgBox.tsx';
import imgBoxStyle from '@components/popularPost/imgBox/imgBox.module.css';
import { Footer } from '@components/footer/Footer.tsx';
import footerStyle from '@components/footer/footer.module.css';
import footerTitleStyle from '@components/title/footerTitle/footerTitle.module.css';

export const Home = () => {
  return (
    <div>
      <Nav className={NavStyles.navbar} />
      <br />
      <Banner
        bannerClassName={BannerStyles.bannerContainer}
        imgClassName={BannerStyles.banner}
        src={BannerImg}
        leftButtonClassName={BannerButtonStyles.leftButton}
        rightButtonClassName={BannerButtonStyles.rightButton}
      />
      <CategoryTitle
        CategoryTitle={'주식 뉴스'}
        className={CategoryStyle.categoryTitle}
      />
      <CardNewsContainer>
        <CardNews
          src={cardNewsImg01}
          className={CardNewsStyles.container}
          titleText={'[단독] 모셔널, 현대차그룹 체제 후 첫 스톡옵션 발행'}
          subTitle={'1시간 전 · 이데일리'}
        />
        <CardNews
          src={cardNewsImg02}
          className={CardNewsStyles.secondCard}
          titleText={
            '넷플릭스 오징어게임 2, 공개 첫주에 시청자 6,800만 명 기록'
          }
          subTitle={'17시간 전 · 연합인포맥스'}
        />
        <CardNews
          src={cardNewsImg03}
          className={CardNewsStyles.thirdCard}
          titleText={'엔비디아, 로보틱스 차기 성장 촉매제'}
          subTitle={'10시간 전 · 연합인포맥스'}
        />
      </CardNewsContainer>
      <SideBar />
      <PopularPostContainer>
        <CategoryTitle
          CategoryTitle={'인기글'}
          className={CategoryStyle.popularTitle}
        />
        <WriteButton className={writeButtonStyle.button} />
        <ImgBox className={imgBoxStyle.imgBoxNvidia} />
        <ImgBox className={imgBoxStyle.imgBoxTesla} />
        <ImgBox className={imgBoxStyle.imgBoxBrandLogo} />
        <PopularPost />
      </PopularPostContainer>
      <Footer
        className={footerStyle.footer}
        title01={footerTitleStyle.footerTitle01}
        title02={footerTitleStyle.footerTitle02}
        title03={footerTitleStyle.footerTitle03}
        title04={footerTitleStyle.footerTitle04}
      />
    </div>
  );
};
