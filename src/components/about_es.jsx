import { Link } from 'react-router-dom';
import '../style/about.css';
import { InView } from "react-intersection-observer";

function About_ES() {
    
    return <section className='about-me'>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-left`}>
            <div className='about-card-title'>Sobre mí</div>
            <div className='about-card-content'>Mi nombre es Julián Reyes Lahoz, soy un desarrollador web full-stack autodidacto, aunque también he trabajado con aplicaciones móvil y de escritorio. Prefiero trabajar haciendo sitios web, preparando con cuidado la experiencia de usuario para mejorarla al punto que pueda y pensando en soluciones nuevas o aprendiendo las existentes para superar cualquier reto que me encuentre durante mi camino en desarrollo web.</div>
            <div className='about-card-content'>Siempre intento construir sitios disfrutables y faciles de usar, y una vez construidos, intento mejorarlos para que se puedan disfrutar en tantos dispositivos como me sea posible y no tengan ningún problema de accesibilidad.</div>
            <div className='about-card-content'>Lo que me mueve siempre ha sido mejorar mis habilidades y aprender más para poder crear el mejor producto posible, lo cual conlleva que me atraiga cualquier ambiente en el que pueda mejorar mis habilidades y mejorar yo mismo como programador.</div>
            <div className='about-card-content'>Mi último trabajo se puede encontrar en <Link to='/projects'>la sección de proyectos</Link>.</div>
        </InView>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-right`}>
            <div className='about-card-title'>Mis herramientas</div>
            <div className='about-card-content'>Últimamente con lo que más he trabajado es JavaScript, y las frameworks convenientes para cubrir el backend y el frontend: React y Express. Aunque le he echado un vistazo a Angular, por ahora he decidido seguir mejorando en mi manejo de React.</div>
            <div className='about-card-content'>No tengo ningún problema trabajando con webpack o vue, ni tampoco con JEST, VITEST o cualquier otra framework de testeo. Dudo que tuviera problemas adaptandome a un ambiente en el que lo primero sea el testeo (TDD). Me manejo bien con MongoDB y las bases de datos no relacionales en general.</div>
            <div className='about-card-content'>He trabajado en el pasado con xampp, nginx y IIS. He usado también para desarrollo web PHP pero nunca llegue al punto en que necesitara Laravel, por tanto es una tarea pendiente para mí. También he hecho algunas aplicaciones de escritorio con Java y C# y aplicaciones móvil con Java, aunque la mayoría de mi experiencia fuera del desarrollo web se concentra en java: mayormente trabajando con bases de datos relaciones (sobretodo MySQL/MariaDB) y netty. Aspiro a en algun punto meterme en Spring para poder aplicar todo mi trabajo previo con Java al desarrollo web.</div>
        </InView>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-left`}>
            <div className='about-card-title'>Dirigido por los datos</div>
            <div className='about-card-content'>Fuera de la programación (y honestamente, tambien al lado de esta) me encanta recopilar información y tomar decisiones en consecuencia al análisis de esa información. Soy muy fan de las hojas de excel y analizar la información que pueda extraer de mis sitios para mejorar la experiencia y el sitio para acercarse mas a lo que puedan buscar mis usuarios.</div>
            <div className='about-card-content'>Me encantaría un ambiente en el que nuestros progresos y las decisiones se toman en torno a una extensa red de datos y me encantaría tener la oportunidad de ver esos datos y la lógica detrás de la toma de esas decisiones, pero entiendo que eso es algo que necesito probar que merezco, lo cual me empuja aun más a mejorar mi trabajo.</div>
            <div className='about-card-content'>Soy una persona a la que le encanta juntar y analizar datos, por lo cual si mis aplicaciones lo permiten, soy muy dado a guardar registros o preparar sistemas que guarden esos registros sobre el uso de mis aplicaciones con el objetivo de mejorarlas acorde a esa informacion a posteriori.</div>
        </InView>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-right`}>
            <div className='about-card-title'>Programar</div>
            <div className='about-card-content'>La programación siempre ha sido algo muy presente en mi vida, desde tenerlo como hobby a ser algo que busco que sea mi sustento. Lo que más me encanta del mundo de la programación es que es algo que esta en constante cambio, dado que me impulsa a buscar maneras de seguir mejorando y aprender cosas nuevas constantemente, dado que constantemente se encuentran formas mas eficientes de hacer las cosas que desembocan en gigantescas actualizaciones o los creadores mejoran sus herramientas para que su uso sea mas fácil e intuitivo. Es un mundo en si mismo.</div>
            <div className='about-card-content'>Me encanta solucionar problemas, me encantan los restos y la satisfacción que obtienes cuando ese problema que había estado molestandote durante días finalmente se resuelve, es algo que ningún otro apartado de mi vida me ha dado y que me encanta.</div>
        </InView>
    </section>;

    function childEntersView(inView, entry)
    {
        if(inView)
        {
            if(entry.target.classList.contains('about-card-left'))
            {
                entry.target.classList.add('about-card-left-animation');
            } else {
                entry.target.classList.add('about-card-right-animation');
            }
        } else {
            if(entry.target.classList.contains('about-card-left-animation'))
            {
                entry.target.classList.remove('about-card-left-animation');
            } else if(entry.target.classList.contains('about-card-right-animation'))
            {
                entry.target.classList.remove('about-card-right-animation');
            }
        }
    }

}

export default About_ES;