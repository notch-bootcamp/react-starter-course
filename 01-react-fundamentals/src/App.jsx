import { useState } from 'react';
import logo from './assets/logo.png';

function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} height={50} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, margin: 10 }} alt="logo" />
      </div>
      <div>
        <h1>Hello World!</h1>
        <span>
          Welcome to today&apos;s lecture!
        </span>
      </div>
    </div>
  );
}

function Cell(props) {
  const { title, color, totalCount, onClick } = props;
  const style = { backgroundColor: color, padding: '5%', height: '10em' };

  const [counter, setCounter] = useState({ value: 0 });
  const handleClick = () => {
    setCounter({ ...counter, value: counter.value + 1 });
    // setCounter((oldValue) => { value: });
    onClick();
  };

  return (
    <div style={style} onClick={handleClick}>
      <h2>{title}</h2>
      <span>{counter.value} / {totalCount}</span>
    </div>
  );
}

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = () => {
    setTotalCount((oldValue) => oldValue + 1);
  };

  return (
    <div className="app">
      <div style={{ backgroundColor: '#51D6A9', margin: 10, padding: "10px" }}>

        <Header />

        <div className="content" style={{ color: 'white', textAlign: 'center' }}>
          <Cell title="A" color="#F3A712" totalCount={totalCount} onClick={handleClick} />
          <Cell title="B" color="#FF0054" totalCount={totalCount} onClick={handleClick} />
          <Cell title="C" color="#3772FF" totalCount={totalCount} onClick={handleClick} />
          <Cell title="D" color="#BAA898" totalCount={totalCount} onClick={handleClick} />
        </div>

      </div>
    </div>
  );
}

export default App;
