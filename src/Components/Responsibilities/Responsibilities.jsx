import './Responsibilities.css';


import dateImg1 from '../../Assets/Images/date-1.jpg';
import dateImg2 from '../../Assets/Images/date-2.jpg';

function Responsibilities() {
    return (
        <section id='responsibilities' className='responsibilities'>
            <div className="responsibilities-content container">
                <div className='responsibilities-top'>
                <h2 className='responsiblities-top__heading'>Upcoming University Events</h2>
                <p className='responsiblities-top__text'>
                    Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.
                </p>
                </div>

                <ul className="responsibilities-list">
                    <li className="responsibilities-list__item">
                        <div className="responsibilities-list__nav">
                            <img className='responsibilities-list__img' src={dateImg1} alt="" />
                            <h3 className='responsibilities-list__heading'>Macquarie University, Sydney, Australia</h3>
                        </div>
                        <p className='responsibilities-list__text'>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. I</p>
                        <div className="responsibilities-list__footer">
                            <a className='responsibilities-list__footer__link' href="#">Learn More</a>
                            <span className='responsibilities-list__footer__element'>10:00 AM - 2:00 PM</span>
                        </div>
                    </li>
                    <li className="responsibilities-list__item">
                        <div className="responsibilities-list__nav">
                            <img className='responsibilities-list__img' src={dateImg2} alt="" />
                            <h3 className='responsibilities-list__heading'>Macquarie University, Sydney, Australia</h3>
                        </div>
                        <p className='responsibilities-list__text'>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. I</p>
                        <div className="responsibilities-list__footer">
                            <a className='responsibilities-list__footer__link' href="#">Learn More</a>
                            <span className='responsibilities-list__footer__element'>10:00 AM - 2:00 PM</span>
                        </div>
                    </li>
                </ul>
            </div>
    </section>
    )
}

export default Responsibilities;