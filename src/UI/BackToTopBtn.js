import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTopBtn.css';

function BackToTopBtn() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = () => {
        if (window.scrollY > 100) {
            setBackToTop(true);
        } else {
            setBackToTop(false);
        }

        calcScrollValue();
    };

    const calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let scrollValue = Math.round((pos * 100) / calcHeight);

        if (pos > 100 && scrollProgress !== null) {
            scrollProgress.style.display = "grid";
            scrollProgress.addEventListener("click", () => {
                document.documentElement.scrollTop = 0;
            });
            scrollProgress.style.background = `conic-gradient(#ffbd00 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
        } else if(scrollProgress !== null) {
            scrollProgress.style.display = "none";
        }        
    };

    return (
        <Fragment>
            {backToTop && (
                <div id="progress">
                    <span id="progress-value"><FontAwesomeIcon icon={faArrowUp} /></span>
                </div>
            )}
        </Fragment>
    );
}

export default BackToTopBtn;
