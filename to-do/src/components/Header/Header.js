import './Header.scss';
import Logo from '../../assets/Logo.png';

function Header() {
  return (
    <header className='header'>
      <img src={Logo} alt='Logo' />
      <h1 className='header-title'>Tasks</h1>
    </header>
  )
}

export default Header;