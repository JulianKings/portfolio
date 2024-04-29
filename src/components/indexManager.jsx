import { useOutletContext } from 'react-router-dom';
import Index from '.';
import Index_ES from './index_es';

function IndexManager()
{
    const [currentLang] = useOutletContext();

    if(currentLang && currentLang === 'en')
    {
        return <Index />;
    } else {
        return <Index_ES />;
    }
}

export default IndexManager;