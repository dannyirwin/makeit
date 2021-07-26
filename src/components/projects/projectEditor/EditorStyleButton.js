const StyleButton = props => {
  let className = 'editor-styleButton';
  if (props.active) {
    className += ' editor-activeButton';
  }
  const onToggle = e => {
    e.preventDefault();
    props.onToggle(props.style);
  };
  return (
    <button className={className} onMouseDown={onToggle}>
      {props.label}
    </button>
  );
};
export default StyleButton;
