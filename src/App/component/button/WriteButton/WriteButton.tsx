interface writeButtonProps {
  className?: string;
}

export const WriteButton = ({ className }: writeButtonProps) => {
  return <button className={className}>글쓰기</button>;
};
