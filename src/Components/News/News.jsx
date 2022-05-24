import './News.css';

import newsImg1 from '../../Assets/Images/newsImg-1.jpg';
import newsImg2 from '../../Assets/Images/newsImg-2.jpg';
import newsImg3 from '../../Assets/Images/newsImg-3.svg';
import icon from '../../Assets/Images/icon.jpg';


function News() {
    return (
        <section className='news'>
            <div className="news-content container">
                <h2 className="news-content__headig">News</h2>
                <p className="news-content__text">Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.</p>
                <div className="news-content-boxes">
                    <div className="news-content-boxes__box">
                        <img src={newsImg1} alt="" className="news-content-boxes__img" />
                        <div className="news-content-boxes-box__footer">
                        <span className='news-content-boxes-box-span'>
                            <img className='span__img' src={icon} alt="" />
                            <p className='span__text'>17 Apr 2020</p>
                        </span>
                        <h3 className="news-content-boxes__heading">Come On In. The Water\s Fine (Mostly).</h3>
                        </div>
                    </div>
                    <div className="news-content-boxes__box">
                        <img src={newsImg2} alt="" className="news-content-boxes__img" />
                        <div className="news-content-boxes-box__footer">
                        <span className='news-content-boxes-box-span'>
                            <img className='span__img' src={icon} alt="" />
                            <p className='span__text'>17 Apr 2020</p>
                        </span>
                        <h3 className="news-content-boxes__heading">Trump Lays Plans to Reverse Obama\s Climate Change </h3>
                        </div>
                    </div>
                    <div className="news-content-boxes__box">
                        <img src={newsImg3} alt="" className="news-content-boxes__img" />
                        <div className="news-content-boxes-box__footer">
                        <span className='news-content-boxes-box-span'>
                            <img className='span__img' src={icon} alt="" />
                            <p className='span__text'>17 Apr 2020</p>
                        </span>
                        <h3 className="news-content-boxes__heading">How a Little Bit of Hydra Regrows a Whole Animal</h3>
                        </div>
                    </div>
                </div>
                <button className='btn btn-news'>Join Here</button>
            </div>
        </section>
    )
}

export default News;