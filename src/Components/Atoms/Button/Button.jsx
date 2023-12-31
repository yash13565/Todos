/* eslint-disable react/prop-types */

function Button(props) {
  const { text, onClick, className } = props;
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
