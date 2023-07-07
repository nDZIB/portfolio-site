import './App.css';
import * as React from 'react';
import logo from './assets/images/logo.png';
import { useQuery } from '@apollo/client';
import { GET_PORTFOLIO } from './_lib/apollo';
import { Icon } from '@iconify/react';


function App() {

  const { loading, error, data } = useQuery(GET_PORTFOLIO);

  const bodyEltRef = React.createRef();
  const headerRef = React.createRef();

  if (loading) return 'Loading';
  if (error) return `Errored ${error}`;

  const portfolio = data?.portfolios[0]

  return (
    <div className={`app`}>
      <header ref={headerRef} className={`header`}>

        <img alt='logo' className={`logo`} src={logo} />

        <ul className={`nav-lg`}>
          <li className={`nav-item`}><a href='#about'>about me</a></li>
          <li className={`nav-item`}><a href='#experience'>experience</a></li>
          <li className={`nav-item`}><a href='#skills'>skills</a></li>
          <li className={`nav-item`}><a href='#projects'>projects</a></li>
          <li className={`nav-item`}><a href='#contact'>contact</a></li>
        </ul>

        <button className={`btn-hire`}>Hire Me!</button>

        <button className={`nav-trigger-sm`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" /></svg>
        </button>
        <ul className={`nav-sm`}>
          <li className={`nav-item`}><a href='#about'>about me</a></li>
          <li className={`nav-item`}><a href='#experience'>experience</a></li>
          <li className={`nav-item`}><a href='#skills'>skills</a></li>
          <li className={`nav-item`}><a href='#projects'>projects</a></li>
          <li className={`nav-item`}><a href='#contact'>contact</a></li>
        </ul>
      </header>

      <main ref={bodyEltRef} className={`body`}>
        <div className={`resume`}>
          <figure className={`bio`}>
            <img title="Serkwi Bruno Ndzi" alt='Serkwi Bruno Ndzi avatar' className={`avatar`} src={portfolio.avatar.url} />
            <figcaption className={`name-tag`}>
              <h1 className={`name`}>Serkwi Bruno Ndzi</h1>
              <p className={`email`}>{portfolio.email}</p>
              <ul className={`sm`}>
                {
                  portfolio.socials.map(social => <li key={`social-${social.id}`}><a title={social.name} className={`sm-link`} href={social.url}><Icon width='32' height='32' icon={social.logo} color={social.fill}/></a></li>)
                }
              </ul>
            </figcaption>
          </figure>

          <div className={`summary`}>
            <div id='about' className={`section`}>
              <h2 className={`cta`}>Hello, I'm <span className={`name-cta`}>Serkwi Bruno Ndzi</span>, </h2>
              <h2 className={`cta`}><span className={`cta-role`}>{portfolio.role}</span></h2>
              <h2 className={`cta mt-2`}>Based in Cameroon</h2>
            </div>

            <div className={`section numerics`}>
              <div className={`info`}>
                <span className={`info-value`}>{portfolio.yearsExperience}</span>
                <span className={`info-desc`}>Years of Experience</span>
              </div>

              <div className={`info`}>
                <span className={`info-value`}>{portfolio.projects.length}</span>
                <span className={`info-desc`}>Projects Completed</span>
              </div>

              <a download="CV-Serkwi Bruno Ndzi.pdf" href={portfolio.cv.url} className={`download-cv-btn`}><span>Download C.V</span></a>
            </div>

            <div className={`about-me section`}>
              <h3 className={`about-me-title`}>About me</h3>
              <p>
                {portfolio.summary}
              </p>
            </div>

            <div id='experience' className={`experience section`}>
              <h2 className={`section-title`}>Experience</h2>

              <ul className={`experiences`}>
                {
                  portfolio.experiences.map(experience => {
                    return <li key={`experience-${experience.id}`} className={`experience-item`}>
                      <div className={`experience-item-summary`}>
                        <span className={`experience-date`}>{experience.period}</span>
                        <h3 className={`experience-role`}>{experience.role} ({experience.company})</h3>
                        <img alt={experience.company} className={`company-logo`} title={experience.company} src={experience.companyLogo.url} />
                        <button className={`btn-view-experience`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" /></svg></button>
                      </div>

                      <div className={`experience-item-summary`}></div>
                    </li>
                  })
                }
              </ul>
            </div>

            <div id='skills' className={`skills section`}>
              <h2 className={`section-title`}>Skills</h2>

              <ul className={`skills-set`}>
                {
                  portfolio.skills.map(skill => {
                    return <li key={`skill-${skill.id}`} className={`skill`}>
                      <Icon icon={skill.icon} width='48' height='48' color={skill.fill} className='skill-img' />
                      <p className={`skill-name`}>{skill.name}</p>
                      <span className={`skill-score`}>{skill.score}%</span>

                      <div className={`skill-progress`}><div className={`skill-level`}></div></div>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>

        </div>

        <section id='projects' className={`projects`}>
          <h2 className={`section-title`}>Projects</h2>
          <ul className={`projects-list`}>
            {
              portfolio.projects.map(project => {
                return <li key={`project-${project.id}`} className={`project group`}>
                  <img title={project.name} alt={project.name} className={`project-img`} src={project.image.url} />
                  <div className={`project-tags`}>
                    {
                      project.tags.map(tag => <span key={`${project.id}-tag-${tag}`} className={`project-tag`}>{tag}</span>)
                    }
                  </div>
                  <div className={`project-info`}>
                    <h3 className={`project-name`}>{project.name}</h3>
                    <a href={project.url}>
                      <svg className={`view-project`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M400 464H48V104h192V72H16v424h416V272h-32v192z" /><path fill="currentColor" d="M304 16v32h137.373L188.687 300.687l22.626 22.626L464 70.627V208h32V16H304z" /></svg>
                    </a>
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

            <a className={`contact-primary`} href={`mailto:${portfolio.email}`}>{portfolio.email}</a>

            <div className={`contact-social`}>
              {
                portfolio.socials.map(social => <a key={`social-foot-${social.id}`} title={social.name} href={social.url}><Icon className='bg-white' width={'48'} height={'48'} opacity='1' icon={social.logo} color={social.fill}/></a>)
              }
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
