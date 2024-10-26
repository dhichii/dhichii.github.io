import logo from '../../assets/logo.svg';
import { hideSidebar } from './sidebar';
import './active-navbar';

export default function Header() {
  return (
    <header>
    <a href="./index.html" className="logo" aria-label='Home'><img src={logo} alt="logo"/></a>

    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
      <div className='menu-button'></div>
    </label>
    <nav>
      <ul className="menu">
        <li><a onClick={() => hideSidebar()} href="#home" className="active">home</a></li>
        <li><a onClick={() => hideSidebar()} href="#projects">projects</a></li>
        <li><a onClick={() => hideSidebar()} href="#skills">skills</a></li>
        <li><a onClick={() => hideSidebar()} href="https://drive.google.com/file/d/187ye6H6ZjQEspMx7B9Mfs1zsbgP--h4o/view?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  </header>
  )
}
