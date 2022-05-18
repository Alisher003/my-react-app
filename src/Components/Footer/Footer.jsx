import './Footer.css';

import logoImage from '../../Assets/Images/logo.svg';

function Footer() {
	return <footer className='footer'>
		<div className="footer-content container">
			{/* left */}
			<div className='footer-left'>
				<a className='logo' href="#">
					<img src={logoImage} alt="logo" />
				</a>
				<p className='footer-left__text'>Concord Royal Court (3rd floor)
				Dhanmondi, Dhaka 1209, Bangladesh.</p>
				<p className='footer-left__botomtext'>© 2020 Executive Trade International.</p>
			</div>
			{/* center */}
			<div className="footer-center">
				<ul className="footer-center-list">
					<li className="footer-center-list__item">
						<a href="" className="footer-center-list__link">About Us</a>
					</li>
					<li className="footer-center-list__item">
						<a href="" className="footer-center-list__link">Responsibilities</a>
					</li>
					<li className="footer-center-list__item">
						<a href="" className="footer-center-list__link">Our Services</a>
					</li>
					<li className="footer-center-list__item">
						<a href="" className="footer-center-list__link">Contact</a>
					</li>
				</ul>
			</div>
			{/* right */}
			<div className="footer-right">
				<ul className="footer-right-list">
					<li className="footer-right-list__item">
						<a href="" className="footer-right-list__link">Disclaimer</a>
					</li>
					<li className="footer-right-list__item">
						<a href="" className="footer-right-list__link">Testimonials</a>
					</li>
					<li className="footer-right-list__item">
						<a href="" className="footer-right-list__link">Privacy Policy</a>
					</li>
					<li className="footer-right-list__item">
						<a href="" className="footer-right-list__link">Terms of Service</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>;
}
export default Footer;
