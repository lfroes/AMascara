const Button = (props) => {
  const { text, glow, link } = props;
  return (
    <button className={`${glow ? "glow" : ""} button`}>
      <a href={link ? link : "#"} target="_blank">
        <span className={`button__text text-vrising-white `}>{text}</span>
      </a>
    </button>
  );
};

export default Button;
