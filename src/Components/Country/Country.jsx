import './Country.css'

import countryImg1 from '../../Assets/Images/countryImg1.jpg';
import countryImg2 from '../../Assets/Images/countryImg2.jpg';
import countryImg3 from '../../Assets/Images/countryImg3.jpg';


function Country() {
    return (
        <section className='country'>
            <div className="container">
                <div className="country-top">
                    <h2 className="country__heading">Countries We Covered</h2>
                    <p className="country__text">
                    Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.
                    </p>
                </div>
            </div>
                <div className="country-hero">
                    <ul className="conutry-hero-list">
                        <li className="country-hero-list__item">
                            <img className='country-hero-list__item__img' src={countryImg1} alt="" />
                            <h3 className='country-hero-list__item__heading'>Study in Australia</h3>
                            <p className='country-hero-list__item__text'>Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi </p>
                        </li>
                        <li className="country-hero-list__item">
                            <img className='country-hero-list__item__img' src={countryImg2} alt="" />
                            <h3 className='country-hero-list__item__heading'>Study in Canada</h3>
                            <p className='country-hero-list__item__text'>Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi </p>
                        </li>
                        <li className="country-hero-list__item">
                            <img className='country-hero-list__item__img' src={countryImg3} alt="" />
                            <h3 className='country-hero-list__item__heading'>Study in Uk</h3>
                            <p className='country-hero-list__item__text'>Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi  est.</p>
                        </li>
                    </ul>
                </div>
        </section>
    )
}

export default Country;