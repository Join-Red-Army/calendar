import './Button.css'

interface IButton {
  text: string
  onClickFoo: () => void
}

const Button: React.FC<IButton> = (props) => {
  const { text, onClickFoo } = props;
  return (
    <button className='Button' onClick={ onClickFoo }>
      { text }
    </button>
  );
};

export default Button;