import profilePic from '../assets/resume_pic.jpg';
import './About.css';

function About() {
    return (
        <section>
            <img src={profilePic} alt="Drake" />
            <p>My name is Drake. I am a self-taught junior software developer based in Orem, Utah with a passion for creating web applications and expanding my knowledge in the field. I have a passion for technology and creating interactive software.</p>
        </section>
    );
}

export default About;