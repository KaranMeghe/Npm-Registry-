interface InputProps {
  placeholder: string;
  type: string;
  className: string;
}

const Input = ({ placeholder, type, className }: InputProps) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default Input;
