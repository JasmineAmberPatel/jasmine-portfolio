import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles/main.css';
import '../styles/social.css';

function Social() {
    return (
        <div className="Social" id="social">
            <a className="btn btn-dark cv" href="https://drive.google.com/file/d/1LRp_CpyEYkRpdSawD-HFv47UO7Topi3A/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
            <br />
            <div className="social-icons">
                <SocialIcon url="https://www.linkedin.com/in/jasmine-amber-patel-b04956a1/" network="linkedin" target="_blank" style={{ height: 35, width: 35 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://github.com/JasmineAmberPatel" network="github" target="_blank" style={{ height: 35, width: 35, margin: 10 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://www.instagram.com/jamber_ceramics/" network="instagram" target="_blank" style={{ height: 35, width: 35 }} bgColor="#272727" fgColor="#ffffff" />
            </div>
            <p>© 2024 Jasmine Patel</p>
        </div>
    )
};


export default Social;