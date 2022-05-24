import './Header.css';
import logoImage from '../../Assets/Images/logo.svg';


function Header() {
	return (
		<header id='home' className='header'>
			<div className="header-content container">
			<a href="header-logo__link">
			<img className='logo-img'
				src={logoImage}
				alt='logo'
				width={146}
				height={52}
			/>
			</a>
			<nav className='site-nav'>
				<li className='site-nav__item'>
					<a className='site-nav-link' href="#home">Home</a>
				</li>
				<li className='site-nav__item'>
					<a className='site-nav-link' href="#">About Us</a>
				</li>
				<li className='site-nav__item'>
					<a className='site-nav-link' href="#Our-Services">Our Services</a>
				</li>
				<li className='site-nav__item'>
					<a className='site-nav-link' href="#responsibilities">Responsibilities</a>
				</li>
				<li className='site-nav__item'>
					<a className='site-nav-link' href="#">Country</a>
				</li>
			</nav>
			<button className='btn-nav'>
				<a className='btn-nav__link' href="">Apply</a>
			</button>
			</div>
		</header>
	);
}

export default Header;
