import style from './postButton.module.css';

export const PostButton = () => {
  const handleClick = () => {
    return;
  };

  return (
    <button className={style.button} onClick={handleClick}>
      글 쓰기
    </button>
  );
};
