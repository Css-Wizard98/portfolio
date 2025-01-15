import React, { useEffect, useState } from "react";
import classes from "./profile.module.scss";
import { Fragment } from "react";
import icon from "../utils/letter-svgrepo-com.svg";
import heart from "../utils/heart-icon.svg";
import neofi from "../utils/neofi.png";
import portfoli from "../utils/portfolio.png"
import todo from "../utils/todo.png";

const Profile = (props) => {
    const options = {
        root: null,
        threshold: 0,
        rootMargin: "-300px 0px -200px 0px"
    }

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);


    function sidebarhandler() {
        setClickCount(prev => {
            return ++prev;
        })
        setSidebarVisible(prev => {
            return !prev;
        })
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.target);
            // if(entry){
            if (entry.isIntersecting) {
                entry.target.classList.add(classes.Active);
            } else {
                entry.target.classList.remove(classes.Active);
            }
            // }
        })
    }, options)

    useEffect(() => {
        window.scrollTo(0, 0);
        if (window.location.hash) {
            window.history.replaceState(null, null, window.location.href.split('#')[0]);
        }
        const sections = document.querySelectorAll('section')
        console.log(sections);
        sections.forEach(section => {
            observer.observe(section);
        });
    }, [])

    function companyHandler(index) {
        setActiveIndex(index);
    }

    return (<div className={classes.container}>
        <header>
            <img className={classes.logo} height="44px" src={icon} alt="" />
            <nav className={classes.navigation}>
                <ul>
                    <li style={{ animationDelay: '.1s' }}>01.<a href="#about" style={{ textDecoration: 'none' }} className={classes.navBtn}>About</a></li>
                    <li style={{ animationDelay: '.25s' }}>02.<a href="#experience" style={{ textDecoration: 'none' }} className={classes.navBtn}>Experience</a></li>
                    <li style={{ animationDelay: '.4s' }}>03.<a href="#work" style={{ textDecoration: 'none' }} className={classes.navBtn}>Work</a></li>
                    <li style={{ animationDelay: '.55s' }}>04.<a href="#contact" style={{ textDecoration: 'none' }} className={classes.navBtn}>Contact</a></li>
                </ul>
            </nav>
            <div onClick={sidebarhandler} className={`${classes.sideBar} ${clickCount == 0 ? classes.NoAnimate : ""} ${sidebarVisible ? classes.Animate : clickCount > 0 ? classes.reverseAnimate : ''}`}>
                <div className={`${classes.lines} ${classes.top}`}></div>
                <div className={`${classes.lines} ${classes.middle}`}></div>
                <div className={`${classes.lines} ${classes.bottom}`}></div>
            </div>
        </header>

        <div className={classes.fadeupSocial} style={{ animationDelay: '2s' }}>
            <div>
                <a href="https://codepen.io/jha03669/pens/public" target="_blank" className={classes.social}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 31.665 31.665">
                    <title>Codepen</title>
                    <path fill="#8892b0"
                        d="M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444
  c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086
  v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z
   M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215
  l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215
  V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z"
                    />
                </svg></a>
                <a href="https://github.com/Css-Wizard98?tab=repositories" target="_blank" className={classes.social}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549">
                    <title>GitHub</title>
                    <path fill="#8892b0"
                        d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
          c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
          c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
          c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
          c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
          c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
          c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
          c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
          c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
          c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
          c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
          c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
          c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
          c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
          c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
          c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
          c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
          c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
          C438.536,184.851,428.728,148.168,409.132,114.573z"
                    />
                </svg></a>
                <a href="https://www.linkedin.com/in/ashish-jha-87595b166/" target="_blank" className={classes.social}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 430.117 430.117">
                    <title>LinkedIn</title>
                    <path fill="#8892b0"
                        d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
          c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
          v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
          C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
          c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
           M5.477,420.56h92.184v-277.32H5.477V420.56z"
                    />
                </svg></a>
            </div>
        </div>
        <div className={classes.fadeupEmail} style={{ animationDelay: '2s' }}><div><a style={{ textDecoration: 'none' }} href="mailto:jhaash98@gmail.com" target="_blank" className={classes.email}>jhaash98@gmail.com</a></div></div>
        <section className={classes.hero}>
            <div className={classes.profileInfo}>
                <div className={classes.fadeup} style={{ animationDelay: '1s' }}><h1 className={classes.title}>Hi, my name is</h1></div>
                <div className={classes.fadeup} style={{ animationDelay: '1.1s' }}><h1 className={classes.heading1}>Ashish Jha.</h1></div>
                <div className={classes.fadeup} style={{ animationDelay: '1.2s' }}><h1 style={{ color: '#8892b0' }} className={classes.heading1}>I build things for the web.</h1></div>
                <div className={classes.fadeup} style={{ animationDelay: '1.3s' }}><p className={classes.about}>I'm a front-end developer passionate about creating beautiful and functional websites. Explore my portfolio to see some of my latest work and feel free to get in touch.</p></div>
                <div className={classes.fadeup} style={{ animationDelay: '1.4s' }}><a href="https://drive.google.com/file/d/1iW29F6if9oBqyRPPFxVRGcdOycdTM8-5/view?usp=sharing" target="_blank">Resume</a></div>
            </div>
        </section>
        <section id="about" className={classes.PersonalInfo}>
            <div className={classes.pesonalSection}>
                <h2><span>About Me</span></h2>
                <div className={classes.inner}>
                    <div className={classes.styleText}>
                        <div>
                            <p>Hello, I'm Ashish, a front-end developer with a passion for creating exceptional web experiences. I have 2+(including 1 year of internship) of experience in the industry and specialize in crafting user-friendly websites that seamlessly merge form and function.</p>
                            <br />
                            <p>My web development journey started with an internship <span style={{ color: '#64ffda' }}>@Jungleworks</span>, a startup where I discovered my passion for front-end development. I was exposed to the latest front-end technologies and worked on a range of products, from small landing pages to large-scale web applications. Since then, I've honed my skills in modern front-end technologies such as HTML, CSS, JavaScript, and React.</p>
                            <br />
                            <p>When I'm not coding, , you can find me in the gym or exploring new hiking trails.</p>
                            <br />
                            <p>Here are a few technologies I’ve been working with recently:</p>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Angular</li>
                                <li>Javascript</li>
                                <li>Typescipt</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.profilePic}></div>
                </div>
            </div>
        </section>


        <section id="experience" className={`${classes.PersonalInfo} ${classes.workHistory}`}>
            <div className={classes.pesonalSection}>
                <h2><span>Where I've worked</span></h2>
                <div className={classes.inner}>
                    <div className={classes.Company}>
                        <div>
                            <ul>
                                <li className={`${activeIndex == 0 ? classes.activeJob : ''}`} onClick={() => companyHandler(0)}>Jungleworks</li>
                                <li className={`${activeIndex == 1 ? classes.activeJob : ''}`} onClick={() => companyHandler(1)}>Jungleworks</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.tasks}>
                        <div className={`${activeIndex == 0 ? classes.activeJob : ''} ${classes.task}`}>
                            <h3>
                                <span>Intern </span>
                                <span>@ Jungleworks</span>
                            </h3>
                            <p>April 2021 - April 2022</p>
                            <div>
                                <ul>
                                    <li>Collaborated with UI designers to develop responsive and cross-browser
                                        compatible designs utilizing Angular and React. </li>
                                    <li>Created the mobile user interface for the product from scratch, using best
                                        practices for mobile-first design, accessibility, and performance
                                        optimization. </li>
                                    <li>Streamlined commission calculation process by collaborating with the
                                        back-end team at Bulbul (SAAS), reducing costs by 20% and eliminating the
                                        need for external tools. </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${activeIndex == 1 ? classes.activeJob : ''} ${classes.task}`}>
                            <h3>
                                <span>Developer </span>
                                <span>@ Jungleworks</span>
                            </h3>
                            <p>April 2022 - Present</p>
                            <div>
                                <ul>
                                    <li>Redesign the user interface for the onboarding process,Resulted in a 60% increase in onboarding steps completion.</li>
                                    <li>Revamped the sign up and sign in process for Yelo(SAAS) with a primary focus on mobile-first design.</li>
                                    <li>Modernized legacy code by updating and modularizing it to improve code
                                        maintainability, scalability, and efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="work" style={{ height: 'auto' }} className={`${classes.PersonalInfo} ${classes.projects}`}>
            <div className={classes.pesonalSection}>
                <h2><span>Some thing's I've built</span></h2>
            </div>

            <div className={classes.project}>
                <div className={classes.projectImage}>
                    <img width="80%" src={neofi} alt="" />
                </div>
                <div className={classes.projectDetail}>
                    <p>Featured Project</p>
                    <h3>Neofi landing Page</h3>
                    <div className={classes.details}>Landing page for a cryptocurrency trading website. The page utilizes the Binance API to fetch and display real-time prices.</div>
                    <ul>
                        <li>React</li>
                        <li>Biance Api</li>
                        <li>Axios</li>
                    </ul>
                    <div></div>
                </div>
            </div>
            <div className={`${classes.project} ${classes.projectLeft}`}>
                <div className={classes.projectImage}>
                    <img width="80%" src={todo} alt="" />
                </div>
                <div className={classes.projectDetail}>
                    <p>Featured Project</p>
                    <h3>Todo App</h3>
                    <div className={classes.details}>Todo app using react and react router with router guard and user authentication using Firebase.</div>
                    <ul>
                        <li>React-Router</li>
                        <li>Firebase</li>
                        <li>Axios</li>
                    </ul>
                    <div></div>
                </div>
            </div>

<div className={classes.moreBtn} style={{textAlign:'center'}}>
<a href="https://master--calm-beijinho-678928.netlify.app/" target="_blank" className={classes.getInTouch}>More</a>

</div>
        </section>

        <section id="contact" style={{ animationDelay: '1=2s' }} className={`${classes.PersonalInfo} ${classes.contact}`}>
            <div className={classes.pesonalSection}>
                <h2><span>What's next?</span></h2>
                <h1>Get In Touch</h1>
                <div className={classes.inner}>
                    <div className={classes.styleText}>
                        <div>
                            <p>Thanks for checking out my portfolio! I'm currently looking for new opportunities and would love to hear from you,feel free to hit me up.</p>
                            <p>Looking forward to hearing from you!</p>
                            <a href="mailto:jhaash98@gmail.com" target="_blank" className={classes.getInTouch}>Say Hello</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            Built with <img height='12px' src={heart} alt="" /> by Ashish.
        </footer>


        {<div className={`${sidebarVisible ? classes.sidebarVisible : ''} ${classes.Popup}`}>
            <div className={classes.body}>
                <ul>
                    <li onClick={sidebarhandler}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#about">About</a></li>
                    <li onClick={sidebarhandler}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#experience">Experience</a></li>
                    <li onClick={sidebarhandler}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#work">Work</a></li>
                    <li onClick={sidebarhandler}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>}
    </div>)
}

export default Profile;