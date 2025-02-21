import { SideBarContainer } from '@components/container/sidebar/SideBarContainer.tsx';
import { SideBarTitle } from '@components/title/sidBarTitle/SideBarTitle.tsx';
import { StockTitle } from '@components/title/stockTitle/StockTitle.tsx';
import style from './sideBar.module.css';
import titleStyle from '@components/title/stockTitle/stockTitle.module.css';
import { StockImg } from '@components/sidebar/stockImg/StockImg.tsx';
import stockImg01 from '@assets/img/stockImg/stock01.svg';
import stockImg02 from '@assets/img/stockImg/stock02.svg';
import stockImg03 from '@assets/img/stockImg/stock03.svg';
import stockImg04 from '@assets/img/stockImg/stock04.svg';
import stockImg05 from '@assets/img/stockImg/stock05.svg';
import stockImg06 from '@assets/img/stockImg/stock06.svg';
import stockImg07 from '@assets/img/stockImg/stock07.svg';
import stockImg08 from '@assets/img/stockImg/stock08.svg';
import stockPlusButton from '@assets/img/stockPlusButton/stockButton.svg';

import stockImgStyle from '@components/sidebar/stockImg/stockImg.module.css';
import { SideBarImgBox } from '@components/sidebar/sideBarImgBox/SideBarImgBox.tsx';

export const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <SideBarContainer>
        <SideBarImgBox />
        <SideBarTitle title={'실시간 인기 주식 TOP 10'} />
        <StockTitle stockTitle={'실 SQ'} className={titleStyle.stockTitle01} />
        <StockTitle
          stockTitle={'10,701원'}
          className={titleStyle.stockPrice01}
        />
        <StockTitle
          stockTitle={'+ 1,588원 (17,5%)'}
          className={style.changedPrice01}
        />
        <StockImg
          src={stockImg01}
          alt={'stockImg'}
          className={stockImgStyle.stockImg01}
        />
        <StockTitle stockTitle={'TSLL'} className={titleStyle.stockTitle02} />
        <StockTitle
          stockTitle={'41,542원'}
          className={titleStyle.stockPrice02}
        />
        <StockTitle
          stockTitle={'+ 1,058원 (2.6%)'}
          className={style.changedPrice02}
        />
        <StockImg
          src={stockImg02}
          alt={'stockImg'}
          className={stockImgStyle.stockImg02}
        />
        <StockTitle
          stockTitle={'리게티 컴퓨팅'}
          className={titleStyle.stockTitle03}
        />
        <StockTitle
          stockTitle={'23,946원'}
          className={titleStyle.stockPrice03}
        />
        <StockTitle
          stockTitle={'+1,499원 (6.6%)'}
          className={style.changedPrice03}
        />
        <StockImg
          src={stockImg03}
          alt={'stockImg'}
          className={stockImgStyle.stockImg03}
        />
        <StockTitle
          stockTitle={'마이크로 클라우드'}
          className={titleStyle.stockTitle04}
        />
        <StockTitle
          stockTitle={'600,789원'}
          className={titleStyle.stockPrice04}
        />
        <StockTitle
          stockTitle={'+7,541원 (1.2%)'}
          className={style.changedPrice04}
        />
        <StockImg
          src={stockImg04}
          alt={'stockImg'}
          className={stockImgStyle.stockImg04}
        />
        <StockTitle
          stockTitle={'페러데이 퓨쳐'}
          className={titleStyle.stockTitle05}
        />
        <StockTitle
          stockTitle={'8,349원'}
          className={titleStyle.stockPrice05}
        />
        <StockTitle
          stockTitle={'+1,234원 (17.0%)'}
          className={style.changedPrice05}
        />
        <StockImg
          src={stockImg05}
          alt={'stockImg'}
          className={stockImgStyle.stockImg05}
        />
        <StockTitle stockTitle={'ETHU'} className={titleStyle.stockTitle06} />
        <StockTitle
          stockTitle={'4,116원'}
          className={titleStyle.stockPrice06}
        />
        <StockTitle
          stockTitle={'+588원 (16.4%)'}
          className={style.changedPrice06}
        />
        <StockImg
          src={stockImg06}
          alt={'stockImg'}
          className={stockImgStyle.stockImg06}
        />
        <StockTitle
          stockTitle={'아이온큐'}
          className={titleStyle.stockTitle07}
        />
        <StockTitle
          stockTitle={'12,274원'}
          className={titleStyle.stockPrice07}
        />
        <StockTitle
          stockTitle={'+808원 (7.0%)'}
          className={style.changedPrice07}
        />
        <StockImg
          src={stockImg07}
          alt={'stockImg'}
          className={stockImgStyle.stockImg07}
        />
        <StockTitle stockTitle={'MSTZ'} className={titleStyle.stockTitle08} />
        <StockTitle
          stockTitle={'36,411원'}
          className={titleStyle.stockPrice08}
        />
        <StockTitle
          stockTitle={'-543원 (0.8%)'}
          className={style.changedPrice08}
        />
        <StockImg
          src={stockImg08}
          alt={'stockImg'}
          className={stockImgStyle.stockImg08}
        />
        <StockTitle
          stockTitle={'추가하기'}
          className={titleStyle.stockTitle09}
        />
        <StockImg
          src={stockPlusButton}
          alt={'stockPlusButton'}
          className={stockImgStyle.stockImg09}
        />
      </SideBarContainer>
    </div>
  );
};
