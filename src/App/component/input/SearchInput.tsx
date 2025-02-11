interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({ placeholder, className }: SearchInputProps) => {
  return <input placeholder={placeholder} className={className} />;
};
