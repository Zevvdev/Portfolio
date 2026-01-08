// src/pages/About.tsx


import SkillItem from "../components/SkillItem";
import { profileInfo } from "../types/profile";
import { skills } from "../types/skills";
import "../css/about.css";



export default function About() {

    
    return (
        <div className="page-wrapper">

            <main className="page-content">
                <div className="container py-5">
                    <div className="row gy-5 align-items-center">

                        {/* 왼쪽 프로필 */}
                        <div className="col-lg-5 col-md-12 text-center profile-section">
                            <div className="profile-circle">
                                <img src="assets/img/profile.png" alt="Ji Eun Kim" className="profile-image"/>
                            </div>

                            <h3 className="mt-4">Ji Eun Kim</h3>
                            <p className="text-muted mb-4">Full-stack Developer</p>

                        {/* 프로필 정보 4개 */}
                        <div className="profile-info-list">
                            {profileInfo.map((info) => (
                                <div className="profile-info-item" key={info.label}>
                                    <span className="label">
                                        {info.label}
                                    </span>
                                    {info.link ? (
                                        <a href={info.link} target="_blank" rel="noopener noreferrer" className="value">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <span className="value">
                                            {info.value}
                                        </span>
                                    )}                                    
                                </div>
                            ))}
                        </div>

                    </div> {/* End of profile-section */}




                        {/* 오른쪽 소개 */}
                        <div className="col-lg-7 col-md-12 ps-lg-5 content-section">
                            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                                <h2>About Me</h2>
                                <a href="/cv.pdf" download className="btn btn-outline-dark me-2">
                                        Download CV
                                    </a>
                                <a href="mailto:archi.01239@gmail.com" className="btn btn-dark">
                                    Hire Me
                                </a>
                            </div>
                            
                            <p className="mt-3">
                                I am a junior developer who is passionate and dedicated to my work,
                                with a focus on problem-solving and continuous learning.
                            </p>

                            {/* Skills */}
                            <div className="skills-container mt-5">
                                
                                <div className="skills-grid">
                                    {skills.map((skill) => (
                                        <SkillItem
                                            key={skill.name}
                                            name={skill.name}
                                            level={skill.level}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="quote-box mt-5">
                                “Code with purpose. Build with clarity. Improve continuously.”
                            </div>
                        </div>
                    </div> {/* End of row */}
                </div> {/* End of container-fluid */}   
            </main>


        </div>
    );
}