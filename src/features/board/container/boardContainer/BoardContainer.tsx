import { DistinctLine } from '@src/features/board/distinctLine/DistinctLine.tsx';
import distinctLineStyle from '@src/features/board/distinctLine/distinctLine.module.css';
import { UserIcon } from '@components/userIcon/UserIcon.tsx';
import { GraphTitle } from '@src/features/board/graphTitle/GraphTitle.tsx';
import tierStyle from '@src/features/board/tierSign/tierSign.module.css';
import { TierSign } from '@src/features/board/tierSign/TierSign.tsx';
import { BoardText } from '@src/features/board/boardText/BoardText.tsx';
import { ButtonContainer } from '@src/features/board/container/buttonContainer/ButtonContainer.tsx';

interface boardContainerProps {
  userIconClassName: string;
  boardUserClassName: string;
  userTitle: string;
  timeTitle: string;
  timeClassName: string;
  tierName: string;
  boardTextClassName: string;
  boardText: string;
  src: string;
  containerClassName: string;
}

export const BoardContainer = ({
  userIconClassName,
  boardUserClassName,
  userTitle,
  timeClassName,
  timeTitle,
  tierName,
  boardTextClassName,
  boardText,
  src,
  containerClassName,
}: boardContainerProps) => {
  return (
    <div className={containerClassName}>
      <UserIcon alt={'userIcon'} src={src} className={userIconClassName} />
      <GraphTitle title={userTitle} className={boardUserClassName} />
      <TierSign title={tierName} className={tierStyle.tierSign} />
      <GraphTitle title={timeTitle} className={timeClassName} />
      <BoardText className={boardTextClassName} text={boardText} />
      <ButtonContainer />
      <DistinctLine className={distinctLineStyle.line} />
    </div>
  );
};
