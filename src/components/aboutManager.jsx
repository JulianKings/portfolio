import { useOutletContext } from 'react-router-dom';
import About_ES from './about_es';
import About from './about';

function AboutManager()
{
    const [currentLang] = useOutletContext();

    if(currentLang && currentLang === 'en')
    {
        return <About />;
    } else {
        return <About_ES />;
    }
}

export default AboutManager;