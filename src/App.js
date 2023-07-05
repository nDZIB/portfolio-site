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

        <footer className={`footer`}>
          <div className='getntouch'>
            <span className={`ntouch`}>Get in touch</span>
            <h3 className={`contact-title`}>Let's make your brand brilliant!</h3>
            <p className={`contact-desc`}>If you would like to work with us or just want to get in touch, we'd love to hear from you!</p>

            <a className={`contact-primary`} href='#'>brunoserkwi@gmail.com</a>

            <div className={`contact-social`}>
              <a href='#'><svg className='contact-social-icon' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"/></svg></a>
              <a href='#'><svg className='contact-social-icon' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg></a>
              <a href='#'><svg className='contact-social-icon' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><g fill="#181616"><path fill-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clip-rule="evenodd"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"/></g></svg></a>
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
