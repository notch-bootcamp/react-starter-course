import logo from '../assets/logo.png';

function Header() {

  console.log('render Header');
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

export default Header;