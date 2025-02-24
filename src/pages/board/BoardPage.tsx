import { Nav } from '@components/nav/Nav.tsx';
import { SideBar } from '@components/sidebar/SideBar.tsx';
// import { Footer } from '@components/footer/Footer.tsx';
// import footerStyle from '@components/footer/footer.module.css';
// import footerTitleStyle from '@components/title/footerTitle/footerTitle.module.css';

import { Graph } from '@src/features/board/graph/Graph.tsx';
import { GraphLogo } from '@src/features/board/graphLogo/GraphLogo.tsx';
import graphLogo from '@assets/img/logo/LG.svg';
import graphLogoStyle from '@src/features/board/graphLogo/graphLogo.module.css';
import { GraphTitle } from '@src/features/board/graphTitle/GraphTitle.tsx';
import graphTitleStyle from '@src/features/board/graphTitle/graphTitle.module.css';
import { DistinctLine } from '@src/features/board/distinctLine/DistinctLine.tsx';
import distinctLineStyle from '@src/features/board/distinctLine/distinctLine.module.css';
import { SearchInput } from '@components/input/SearchInput.tsx';
import searchInputStyle from '@components/input/serachInput.module.css';
import { UserIcon } from '@components/userIcon/UserIcon.tsx';
import userIconStyle from '@components/userIcon/userIcon.module.css';
import userIcon01 from '@assets/img/userIcon/userIcon01.svg';
import userIcon02 from '@assets/img/userIcon/userIcon02.svg';
import userIcon03 from '@assets/img/userIcon/userIcon03.svg';
import { BoardContainer } from '@src/features/board/container/boardContainer/BoardContainer.tsx';
import boardContainerStyle from '@src/features/board/container/boardContainer/boardContainer.module.css';
import boardTextStyle from '@src/features/board/boardText/boardText.module.css';

export const BoardPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      <SideBar />
      <Graph />
      <GraphLogo
        src={graphLogo}
        alt={'graphLogo'}
        className={graphLogoStyle.graphLogo}
      />
      <GraphTitle title={'LG 전자'} className={graphTitleStyle.graphTitle} />
      <GraphTitle
        title={'78,400원'}
        className={graphTitleStyle.graphTitlePrice}
      />
      <GraphTitle
        title={'+0.43%'}
        className={graphTitleStyle.graphTitlePercentage}
      />
      <SearchInput
        placeholder={'글을 작성하세요'}
        className={searchInputStyle.boardInput}
      />
      <UserIcon
        alt={'userIcon'}
        src={userIcon01}
        className={userIconStyle.userIcon}
      />
      <DistinctLine className={distinctLineStyle.line0} />
      <DistinctLine className={distinctLineStyle.line1} />
      <BoardContainer
        containerClassName={boardContainerStyle.container}
        userIconClassName={userIconStyle.userIcon}
        boardUserClassName={graphTitleStyle.boardUserName}
        userTitle={'러블리한 딸기'}
        timeTitle={'10분 전'}
        timeClassName={boardContainerStyle.boardTime}
        tierName={'새싹'}
        boardTextClassName={boardTextStyle.boardText}
        boardText={'어디까지 내려갈래'}
        src={userIcon02}
      />
      <BoardContainer
        containerClassName={boardContainerStyle.container02}
        userIconClassName={userIconStyle.userIcon}
        boardUserClassName={graphTitleStyle.boardUserName}
        userTitle={'하락장'}
        timeTitle={'30분 전'}
        timeClassName={boardContainerStyle.boardTime}
        tierName={'새싹'}
        boardTextClassName={boardTextStyle.boardText}
        boardText={'진짜 내려감?'}
        src={userIcon03}
      />
      <BoardContainer
        containerClassName={boardContainerStyle.container02}
        userIconClassName={userIconStyle.userIcon}
        boardUserClassName={graphTitleStyle.boardUserName}
        userTitle={'국장하지마세요'}
        timeTitle={'1시간 전'}
        timeClassName={boardContainerStyle.boardTime}
        tierName={'새싹'}
        boardTextClassName={boardTextStyle.boardText}
        boardText={'도지가 미래다.'}
        src={userIcon01}
      />
      <BoardContainer
        containerClassName={boardContainerStyle.container02}
        userIconClassName={userIconStyle.userIcon}
        boardUserClassName={graphTitleStyle.boardUserName}
        userTitle={'엘지주식만 삼'}
        timeTitle={'2시간 전'}
        timeClassName={boardContainerStyle.boardTime}
        tierName={'새싹'}
        boardTextClassName={boardTextStyle.boardText}
        boardText={'이거 맞냐?'}
        src={userIcon02}
      />
      <BoardContainer
        containerClassName={boardContainerStyle.container02}
        userIconClassName={userIconStyle.userIcon}
        boardUserClassName={graphTitleStyle.boardUserName}
        userTitle={'투자의 귀재'}
        timeTitle={'5시간 전'}
        timeClassName={boardContainerStyle.boardTime}
        tierName={'새싹'}
        boardTextClassName={boardTextStyle.boardText}
        boardText={'장투 드가자~'}
        src={userIcon03}
      />
      <BoardContainer
        containerClassName={boardContainerStyle.container02}
        userIconClassName={userIconStyle.userIcon}
        boardUserClassName={graphTitleStyle.boardUserName}
        userTitle={'사놓고 안봄'}
        timeTitle={'10시간 전'}
        timeClassName={boardContainerStyle.boardTime}
        tierName={'새싹'}
        boardTextClassName={boardTextStyle.boardText}
        boardText={'돈 묶였다.'}
        src={userIcon01}
      />
    </div>
  );
};

// <BoardContainer
//   userIconClassName={userIconStyle.userIcon}
//   boardUserClassName={graphTitleStyle.boardUserName}
//   userTitle={'러블리한 딸기'}
//   timeTitle={'10분 전'}
//   timeClassName={boardContainerStyle.boardTime}
//   tierName={'새싹'}
//   src={userIcon02}
// />
