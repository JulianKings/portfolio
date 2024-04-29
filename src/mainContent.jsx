import './content.css'
import { NavLink, Outlet } from 'react-router-dom';
import menuIcon from './assets/menu.svg';
import menuWhiteIcon from './assets/menu_white.svg';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import spainIcon from './assets/spain.png';
import ukIcon from './assets/uk.png';
import { useEffect, useRef, useState } from 'react';

function MainContent() {
  const navBox = useRef(null);
  const navIcon = useRef(null);
  const navIconImage = useRef(null);
  const contentBox = useRef(null);
  const langIconRef = useRef(null);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    if(navBox.current)
    {
      navBox.current.addEventListener("mousedown", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  }, []);

  let langIcon = spainIcon;
  if(currentLang === 'en')
  {
    langIcon = ukIcon;
  }

  let homePrompt = 'Home';
  let projectPrompt = 'Projects';
  let aboutMePrompt = 'About Me';
  if(currentLang === 'es')
  {
    homePrompt = 'Inicio';
    projectPrompt = 'Proyectos';
    aboutMePrompt = 'Sobre mi';
  }


  return (
    <>
      <nav ref={navIcon} className='navigation'>
        <img ref={langIconRef} src={langIcon} className='icon-image' onClick={(event) => { alternateLang(event); }} />
        <img ref={navIconImage} src={menuIcon} onFocus={() => { navIconFocus(); }} onBlur={() => { navIconLosesFocus(); }} tabIndex='0' />
      </nav>
      <nav ref={navBox} className='navigation-box'>
        <div className='nav-item-container'>
          <div className='nav-item'>
            <NavLink to='/'>{homePrompt}</NavLink>
          </div>
          <div className='nav-item'>
            <NavLink to='/projects'>{projectPrompt}</NavLink>
          </div>
          <div className='nav-item'>
          <NavLink to='/about'>{aboutMePrompt}</NavLink>
          </div>
        </div>
      </nav>
      <main ref={contentBox} className='content-holder'>
        <section className='main-content'>
          <Outlet context={[currentLang]} />
        </section>
        <footer className='footer'>
          <div className='contact'>
            <p><img src={githubIcon} alt='GitHub icon' /> <span><a href='https://github.com/JulianKings'>GitHub</a></span></p>
            <p><img src={linkedinIcon} alt='LinkedIn icon' /> <span><a href='https://linkedin.com/in/julián-reyes-lahoz-05702a266'>LinkedIn</a></span></p>
          </div>
          <div className='copyright'>
            © Julian Reyes 2024
          </div>
        </footer>
      </main>
    </>
  )

  function alternateLang(event)
  {
    event.preventDefault();
    event.stopPropagation();

    if(currentLang && currentLang === 'en')
    {
      setCurrentLang('es');
      if(langIconRef.current)
      {
        langIconRef.current.src = spainIcon;
      }
    } else {
      setCurrentLang('en');
      if(langIconRef.current)
      {
        langIconRef.current.src = ukIcon;
      }
    }

  }

  function navIconFocus()
  {
    if(navBox.current)
    {
      if(!navBox.current.classList.contains('shown'))
      {
        navBox.current.classList.add('shown');
      }      
    }

    if(contentBox.current)
    {
      if(!contentBox.current.classList.contains('squeeze'))
      {
        contentBox.current.classList.add('squeeze');
      }      
    }

    if(navIcon.current && navIconImage.current)
    {
      if(!navIcon.current.classList.contains('static'))
      {
        navIcon.current.classList.add('static');
      }      
      navIconImage.current.src = menuWhiteIcon;
    }
  }

  function navIconLosesFocus()
  {
    if(navBox.current)
    {
      if(navBox.current.classList.contains('shown'))
      {
        navBox.current.classList.remove('shown');
      }      
    }

    if(contentBox.current)
    {
      if(contentBox.current.classList.contains('squeeze'))
      {
        contentBox.current.classList.remove('squeeze');
      }      
    }

    if(navIcon.current && navIconImage.current)
    {
      if(navIcon.current.classList.contains('static'))
      {
        navIcon.current.classList.remove('static');
      }      
      navIconImage.current.src = menuIcon;
    }
  }
}

export default MainContent
