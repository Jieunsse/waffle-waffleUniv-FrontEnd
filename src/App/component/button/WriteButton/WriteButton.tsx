import { useNavigate } from 'react-router-dom';

interface writeButtonProps {
  className?: string;
}

export const WriteButton = ({ className }: writeButtonProps) => {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate('/write')}>
      글쓰기
    </button>
  );
};
