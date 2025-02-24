interface userIconProps {
  className?: string;
  src?: string;
  alt: string;
}

export const UserIcon = ({ className, src, alt }: userIconProps) => {
  return <img src={src} alt={alt} className={className} />;
};
