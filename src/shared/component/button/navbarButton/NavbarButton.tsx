import React from 'react';

interface NavbarButtonProps {
  children?: React.ReactNode;
  className?: string;
  buttonName?: string;
  onClick?: () => void;
}

export const NavbarButton = ({
  children,
  className,
  buttonName,
  onClick,
}: NavbarButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {buttonName}
      {children}
    </button>
  );
};
