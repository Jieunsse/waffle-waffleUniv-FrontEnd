interface GraphLogoProps {
  className?: string;
  src: string;
  alt: string;
}

export const GraphLogo = ({ className, src, alt }: GraphLogoProps) => {
  return <img src={src} alt={alt} className={className} />;
};
