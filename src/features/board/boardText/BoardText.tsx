interface BoardTextProps {
  className: string;
  text: string;
}

export const BoardText = ({ className, text }: BoardTextProps) => {
  return <div className={className}>{text}</div>;
};
