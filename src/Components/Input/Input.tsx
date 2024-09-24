interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: "string";
}

const Input = ({ placeholder, type, className, ...props }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

export default Input;
