import './content.css'
import { Outlet } from 'react-router-dom';
import menuIcon from './assets/menu.svg';
import menuWhiteIcon from './assets/menu_white.svg';
import { useEffect, useRef } from 'react';

function MainContent() {
  const navBox = useRef(null);
  const navIcon = useRef(null);
  const navIconImage = useRef(null);
  const contentBox = useRef(null);

  useEffect(() => {
    if(navBox.current)
    {
      navBox.current.addEventListener("mousedown", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  }, []);

  return (
    <>
      <nav ref={navIcon} className='navigation' onFocus={() => { navIconFocus(); }} onBlur={() => { navIconLosesFocus(); }} tabIndex='0'>
        <img ref={navIconImage} src={menuIcon} />
      </nav>
      <nav ref={navBox} className='navigation-box'>
        <div className='nav-item-container'>
          <div className='nav-item'>
            Home
          </div>
          <div className='nav-item'>
            Projects
          </div>
          <div className='nav-item'>
            About Me
          </div>
        </div>
      </nav>
      <main ref={contentBox} className='content-holder'>
        <Outlet />
      </main>
    </>
  )

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
