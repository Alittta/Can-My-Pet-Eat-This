import { Fragment } from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {


    return (
        <Fragment>
            <footer id="footer" className='text-center text-lg-start bg-light text-muted'>
                <section class="d-flex justify-content-center p-4 border-bottom">
                <div class="me-3 d-none d-lg-block">
                    <span>Get connected with me:</span>
                </div>
                <div className='ml-2'>
                    <a href="https://www.linkedin.com/in/alondra-de-jesus" class="me-2 text-reset">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Alittta" class="me-4 text-reset">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                </section>
                <p className='d-flex justify-content-center mt-2 me-5 mx-5'>We value transparency and honesty in providing information to our users. Please be informed that the food data presented on this platform is generated with the assistance of ChatGPT, an AI language model developed by OpenAI. While we strive to ensure accuracy, it is crucial to understand that the data may not be sourced from real-world databases or experts.</p>
                <p className='d-flex justify-content-center mt-3'><FontAwesomeIcon className='mt-1 mx-1' icon={faCopyright} /> 2023 - Alondra De Jesús Figueroa</p>
            </footer>
        </Fragment>
    );
};


export default Footer;















