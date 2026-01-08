// src/pages/Home.tsx

import { useNavigate } from "react-router-dom";

import "../css/home.css";




function Home() {

    
    const navigate = useNavigate();

    return <>
        <section className="home">
            <div className="home-content">
                <div className="text-area">
                    <h1>Back-End
                        <br/>
                        Developer
                    </h1>

                    <button 
                        className="btn about-btn" onClick={() => navigate('/about')}>About</button>

                    {/* SNS 아이콘 영역 */}
                    <div className="social">
                        <i className="fab fa-email"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                    </div> 

                    <div className="image-area">
                        <div className="profile-circle">
                            <img src="assets/img/profile.png" alt="Ji Eun Kim" className="profile-image"/>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    

    
    </>
}

export default Home;