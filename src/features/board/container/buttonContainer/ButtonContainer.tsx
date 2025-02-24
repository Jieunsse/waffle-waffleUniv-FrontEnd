import style from './buttonContainer.module.css';
import button01 from '@assets/img/boardIcon/heartIcon.svg';
import button02 from '@assets/img/boardIcon/messageIcon.svg';
import button03 from '@assets/img/boardIcon/plainIcon.svg';

export const ButtonContainer = () => {
  return (
    <div className={style.buttonContainer}>
      <img src={button01} alt="heartButton" className={style.imageButtons} />
      <img src={button02} alt="messageButton" className={style.imageButtons} />
      <img src={button03} alt="plainButton" className={style.imageButtons} />
    </div>
  );
};
