import { useNavigate } from 'react-router-dom';

interface writeButtonProps {
  className?: string;
}

export const WriteButton = ({ className }: writeButtonProps) => {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate('/post')}>
      글쓰기
    </button>
  );
};
