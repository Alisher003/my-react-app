import './Services.css';

import img1 from '../../Assets/Images/img-1.jpg';
import img2 from '../../Assets/Images/img-1.jpg';
import img3 from '../../Assets/Images/img-3.jpg';
import img4 from '../../Assets/Images/img-4.jpg';
import img5 from '../../Assets/Images/img-5.jpg';


function Services() {
    return (
        <section id='Our-Services' className='services'>
            <div className="services-content container">
                <div className="services-head">
                    <h1 className='services-head__heading'>Our Services</h1>
                    <p className="services-head__text">
                    Executive Trade International is an University Application Centre, guiding Bangladeshi students to Australian, British, Canadian and Irish universities!
                    </p>
                </div>
                <div className="services-top">
                    <div className="services-top__box">
                        <img className='services-top__img' src={img1} alt="" />
                        <h3 className='services-top__heading'>Career Counselling</h3>
                        <p className='services-top__text'>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </p>
                        <a className='services-top__link' href="">Learn More</a>
                    </div>
                    <div className="services-top__box">
                    <img className='services-top__img' src={img2} alt="" />
                        <h3 className='services-top__heading'>Visa Consultancy</h3>
                        <p className='services-top__text'>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut.  dicta accusantium fugiat. </p>
                        <a className='services-top__link' href="">Learn More</a>
                    </div>
                    <div className="services-top__box">
                    <img className='services-top__img' src={img3} alt="" />
                        <h3 className='services-top__heading'>Accommodation</h3>
                        <p className='services-top__text'>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis  dicta accusantium fugiat.</p>
                        <a className='services-top__link' href="">Learn More</a>
                    </div>
                    <div className="services-top__box">
                    <img className='services-top__img' src={img4} alt="" />
                        <h3 className='services-top__heading'>Pre-Departure Briefing</h3>
                        <p className='services-top__text'>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut.  dolorem dicta accusantium fugiat.</p>
                        <a className='services-top__link' href="">Learn More</a>
                    </div>
                    <div className="services-top__box">
                    <img className='services-top__img' src={img5} alt="" />
                        <h3 className='services-top__heading'>Career Counselling</h3>
                        <p className='services-top__text'>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </p>
                        <a className='services-top__link' href="">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;