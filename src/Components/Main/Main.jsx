import './Main.css';

import user from '../../Assets/Images/user.jpg';
import universityies from '../../Assets/Images/uneversities.jpg';



function Main() {
	return (
		<main className="main">
			<div className="mian-content container">
				{/* main-left */}
				<div className="main-left">
				<h1 className="main__heading">We Help toc <strong>Build</strong> Your Dream</h1>
				<p className="main__text">We are  always availed to consult on taking your higher education to the next level so you can stay competitive in the</p>
				<button className="btn main-btn">
					<a className="main__btn__link" href="#">Apply Online
					<img src="" alt="" /></a>
				</button>
				<div className="main__links">
					<img src='' alt="" />
				</div>
				</div>
				{/* main-right */}
				<div className="main-right">
					<img src={user} alt="img-user" />
				</div>
			</div>
			{/* Unversities */}
			<section className='unverties'>
			<div className="container">
				<h2>Featured Universities</h2>
				<img src={universityies} alt="" />
			</div>
			</section>
		</main>
	)
}

export default Main;
