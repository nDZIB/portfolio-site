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
          <li className={`nav-item`}><a href='#'>home</a></li>
          <li className={`nav-item`}><a href='#'>about</a></li>
          <li className={`nav-item`}><a href='#'>services</a></li>
          <li className={`nav-item`}><a href='#'>portfolio</a></li>
          <li className={`nav-item`}><a href='#'>testimonials</a></li>
          <li className={`nav-item`}><a href='#'>conact</a></li>
        </ul>

        <button className={`btn-hire`}>Hire Me!</button>

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
            <div className={`section`}>
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

            <div className={`experience section`}>
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

            <div className={`skills section`}>
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

        <section className={`projects`}>
          <h2 className={`section-title`}>Projects</h2>
          <ul className={`projects-list`}>
            {
              projects.map(project => {
                return <li className={`project group`}>
                  <img className={`project-img`} src={`http://localhost:4200/assets/img/gowaka.png`} />
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
      </main>
    </div>
  );
}

export default App;
