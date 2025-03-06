import style from './writeModal.module.css';
import profileImg from '@assets/img/userIcon/userIcon01.svg';
import modalIcon01 from '@assets/img/modalIcon/modalIcon01.svg';
import modalIcon02 from '@assets/img/modalIcon/modalIcon02.svg';
import modalIcon03 from '@assets/img/modalIcon/modalIcon03.svg';

export const WriteModal = () => {
  return (
    <div className={style.modal}>
      <img src={profileImg} alt="유저 로고" className={style.profileImg} />
      <input className={style.input} placeholder={'글을 작성하세요.'} />
      <div className={style.iconContainer}>
        <img src={modalIcon01} alt="모달 로고" className={style.icon} />
        <img src={modalIcon02} alt="모달 로고" className={style.icon} />
        <img src={modalIcon03} alt="모달 로고" className={style.icon} />
      </div>
    </div>
  );
};
