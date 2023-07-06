import './App.css';
import * as React from 'react';
import { HeaderComponent } from "./components/header.component";
import { HeroMessageComponent } from "./components/hero-message.component";
import { ProjectsGalleryComponent } from "./components/projects-gallery.component";
import { MyWorksComponent } from "./components/my-works.component";
import { FooterComponent } from "./components/footer.component";
import { MyPostsComponent } from "./components/my-posts.component";

function App() {
  const projects = [1, 2, 4, 5]

  return (
    // <main className={`app min-h-screen flex justify-center bg-slate-50`}>
    //     <div id="container" className={`w-[98vw] md:w-[62vw] bg-white px-2 md:px-16 pt-4`}>
    //         <HeaderComponent />
    //         <HeroMessageComponent />
    //         <ProjectsGalleryComponent />
    //         <div className={`flex flex-col-reverse lg:flex-row lg:justify-between mt-[2rem] md:mt-[5rem] leading-8`}>
    //             <MyPostsComponent />
    //             <MyWorksComponent />
    //         </div>
    //         <FooterComponent />
    //     </div>
    // </main>

    <div className={`app`}>
      <header className={`header`}>

        <img className={`logo`} src='https://ui-themez.smartinnovates.net/items/hawke/assets/imgs/logo-light.png' />

        <ul className={`nav-lg`}>
          <li className={`nav-item`}><a href='#about'>about me</a></li>
          <li className={`nav-item`}><a href='#experience'>experience</a></li>
          <li className={`nav-item`}><a href='#skills'>skills</a></li>
          <li className={`nav-item`}><a href='#projects'>projects</a></li>
          <li className={`nav-item`}><a href='#contact'>contact</a></li>
        </ul>

        <button className={`btn-hire`}>Hire Me!</button>

        <button className={`nav-trigger-sm`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
        </button>
        <ul className={`nav-sm`}>
          <li className={`nav-item`}><a href='#about'>about me</a></li>
          <li className={`nav-item`}><a href='#experience'>experience</a></li>
          <li className={`nav-item`}><a href='#skills'>skills</a></li>
          <li className={`nav-item`}><a href='#projects'>projects</a></li>
          <li className={`nav-item`}><a href='#contact'>contact</a></li>
        </ul>
      </header>

      <main className={`body`}>
        <div className={`resume`}>
          <figure className={`bio`}>
            <img className={`avatar`} src='https://media.licdn.com/dms/image/D4E03AQGPUlXGnGURNg/profile-displayphoto-shrink_200_200/0/1675959954904?e=1694044800&v=beta&t=izLC_E5eoCIG0glpODio5WFVA0PnRtYSr3WPaewiVuY' />
            <caption className={`name-tag`}>
              <h1 className={`name`}>Serkwi Bruno Ndzi</h1>
              <p className={`email`}>brunoserkwi@gmail.com</p>
              <ul className={`sm`}>
                <li><a className={`sm-link`} href='#'>FB</a></li>
              </ul>
            </caption>
          </figure>

          <div className={`summary`}>
            <div id='about' className={`section`}>
              <h2 className={`cta`}>Hello, I'm <span className={`name-cta`}>Serkwi Bruno Ndzi</span>, </h2>
              <h2 className={`cta`}><span className={`cta-role`}>Full-stack Software Engineer</span></h2>
              <h2 className={`cta mt-2`}>Based in Cameroon</h2>
            </div>

            <div className={`section numerics`}>
              <div className={`info`}>
                <span className={`info-value`}>14</span>
                <span className={`info-desc`}>Years of Experience</span>
              </div>

              <div className={`info`}>
                <span className={`info-value`}>8</span>
                <span className={`info-desc`}>Projects Completed</span>
              </div>

              <button className={`download-cv-btn`}><span>Download C.V</span></button>
            </div>

            <div className={`about-me section`}>
              <h3 className={`about-me-title`}>About me</h3>
              <p>
                Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.
              </p>
            </div>

            <div id='experience' className={`experience section`}>
              <h2 className={`section-title`}>Experience</h2>

              <ul className={`experiences`}>
                <li className={`experience-item`}>
                  <div className={`experience-item-summary`}>
                    <span className={`experience-date`}>2020 - Present</span>
                    <h3 className={`experience-role`}>Full-Stack Engineer (Go-Groups LTD)</h3>
                    <img className={`company-logo`} title={`Go-Groups LTD`} src='https://ui-themez.smartinnovates.net/items/hawke/assets/imgs/resume/1.svg' />
                    <button className={`btn-view-experience`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg></button>
                  </div>

                  <div className={`experience-item-summary`}></div>
                </li>

                <li className={`experience-item`}>
                  <div className={`experience-item-summary`}>
                    <span className={`experience-date`}>2020 - Present</span>
                    <h3 className={`experience-role`}>Full-Stack Engineer (Go-Groups LTD)</h3>
                    <img className={`company-logo`} title={`Go-Groups LTD`} src='https://ui-themez.smartinnovates.net/items/hawke/assets/imgs/resume/1.svg' />
                    <button className={`btn-view-experience`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg></button>
                  </div>

                  <div className={`experience-item-summary`}></div>
                </li>
              </ul>
            </div>

            <div id='skills' className={`skills section`}>
              <h2 className={`section-title`}>Skills</h2>

              <ul className={`skills-set`}>
                <li className={`skill`}>
                  <svg className={`skill-img`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg>
                  <p className={`skill-name`}>UI / UX Design</p>
                  <span className={`skill-score`}>95%</span>

                  <div className={`skill-progress`}><div className={`skill-level`}></div></div>
                </li>

                <li className={`skill`}>
                  <svg className={`skill-img`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg>
                  <p className={`skill-name`}>UI / UX Design</p>
                  <span className={`skill-score`}>95%</span>

                  <div className={`skill-progress`}><div className={`skill-level`}></div></div>
                </li>

                <li className={`skill`}>
                  <svg className={`skill-img`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg>
                  <p className={`skill-name`}>UI / UX Design</p>
                  <span className={`skill-score`}>95%</span>

                  <div className={`skill-progress`}><div className={`skill-level`}></div></div>
                </li>

                <li className={`skill`}>
                  <svg className={`skill-img`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg>
                  <p className={`skill-name`}>UI / UX Design</p>
                  <span className={`skill-score`}>95%</span>

                  <div className={`skill-progress`}><div className={`skill-level`}></div></div>
                </li>

                <li className={`skill`}>
                  <svg className={`skill-img`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg>
                  <p className={`skill-name`}>UI / UX Design</p>
                  <span className={`skill-score`}>95%</span>

                  <div className={`skill-progress`}><div className={`skill-level`}></div></div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <section id='projects' className={`projects`}>
          <h2 className={`section-title`}>Projects</h2>
          <ul className={`projects-list`}>
            {
              projects.map(project => {
                return <li className={`project group`}>
                  <img className={`project-img`} src={`https://angular.io/generated/images/marketing/home/any-size.svg`} />
                  <div className={`project-tags`}>
                    <span className={`project-tag`}>Web development</span>
                    <span className={`project-tag`}>on-going</span>
                  </div>
                  <div className={`project-info`}>
                    <h3 className={`project-name`}>Partiner BPO</h3>
                    <svg className={`view-project`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M400 464H48V104h192V72H16v424h416V272h-32v192z"/><path fill="currentColor" d="M304 16v32h137.373L188.687 300.687l22.626 22.626L464 70.627V208h32V16H304z"/></svg>
                  </div>
                </li>
              })
            }
          </ul>
        </section>

        <footer id='contact' className={`footer`}>
          <div className='getntouch'>
            <span className={`ntouch`}>Get in touch</span>
            <h3 className={`contact-title`}>Let's make your brand brilliant!</h3>
            <p className={`contact-desc`}>If you would like to work with us or just want to get in touch, we'd love to hear from you!</p>

            <a className={`contact-primary`} href='#'>brunoserkwi@gmail.com</a>

            <div className={`contact-social`}>
              {/* <a href='#'><svg className='contact-social-icon' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"/></svg></a> */}
              <a href='#'><svg className='contact-social-icon' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg></a>
              <a href='#'><svg className='contact-social-icon' xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.212-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.688 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30ZM65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508Zm4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078Zm3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406Zm5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555Zm7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048Zm8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459Zm8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097Z"/></g></svg></a>
              <a href='#'><svg className='contact-social-icon' xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#1D9BF0" rx="60"/><path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.864-15.839a36.976 36.976 0 0 1-34.5-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13Z"/></g></svg></a>
            </div>
          </div>

          <form className={`contact-form`}>
            <div className={`contact-info`}>
              <input className={`input`} placeholder='Name' />
              <input className={`input`} placeholder='Email' />
            </div>

            <input className={`input`} placeholder={`Subject`} />

            <textarea className={`textarea`} placeholder={`Message`}></textarea>

            <button className={`btn-send`}>Send a message</button>
          </form>
        </footer>
      </main>
    </div>
  );
}

export default App;
