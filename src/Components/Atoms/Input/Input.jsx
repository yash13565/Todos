/* eslint-disable react/prop-types */

function Input(props) {
  const { onChange, value, placeholder,className } = props;
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input;
