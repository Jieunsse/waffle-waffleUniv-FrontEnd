interface TierSignProps {
  title: string;
  className?: string;
}

export const TierSign = ({ title, className }: TierSignProps) => {
  return <div className={className}>{title}</div>;
};
