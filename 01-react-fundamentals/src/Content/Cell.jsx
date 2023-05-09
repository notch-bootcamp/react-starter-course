import { useState, memo } from 'react';

function Cell(props) {
  const { title, color, totalCount, onClick } = props;
  const style = { backgroundColor: color, padding: '5%', height: '10em' };
  
  const [counter, setCounter] = useState({ value: 0 });
  const handleClick = () => {
    setCounter({ ...counter, value: counter.value + 1 });
    // setCounter((oldValue) => { value: });
    onClick();
  };
  
  console.log('render Cell');
  return (
    <div style={style} onClick={handleClick}>
      <h2>{title}</h2>
      <span>{counter.value} / {totalCount}</span>
    </div>
  );
}

export default memo(Cell);
