import '../style/about.css';
import { InView } from "react-intersection-observer";

function About() {
    
    return <section className='about-me'>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-left`}>
            <div className='about-card-title'>About me</div>
            <div className='about-card-content'>My name is Julián Reyes Lahoz, I&apos;m a spanish self-taught full-stack web developer, although I&apos;ve also worked with desktop and mobile applications, I mostly prefer working on websites, customizing the user experience and trying to come up with new solutions to any challenge I face in web development.</div>
            <div className='about-card-content'>I always strive to build enjoyable and easy to use websites, and then after they&apos;re built I try to polish them so they&apos;re available on mostly all devices and don&apos;t have any accessibility problems.</div>
            <div className='about-card-content'>My drive has always been to improve myself and learn more every day so I&apos;m able to craft the best product possible, which makes me very interested in any environment where I can hone my skills and improve myself.</div>
        </InView>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-right`}>
            <div className='about-card-title'>My toolbox</div>
            <div className='about-card-content'>Lately I&apos;ve worked the most with JavaScript, and the related frameworks to cover the backend and frontend: React & Express, although I&apos;ve taken a look at Angular, for now I&apos;ve decided to keep improving myself with React.</div>
            <div className='about-card-content'>I don&apos;t have any trouble working with webpack or vue, neither with JEST, VITEST or any other testing framework, I doubt I would have any problem adapting to a TDD environment. I don&apos;t have any problem working with MongoDB and other non-relational databases.</div>
            <div className='about-card-content'>I&apos;ve also worked in the past with xampp, nginx and IIS. I&apos;ve worked on web development with PHP but never got to the point where I would need Laravel, so that&apos;s a pending task of mine. And I&apos;ve made a few desktop apps with Java and C#, and mobile apps on Java, but most of my experience outside web development focuses on Java: mostly working alongside netty and MySQL/MariaDB. I strive to at some point delve into Spring so I can apply my previous work in Java to web development.</div>
        </InView>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-left`}>
            <div className='about-card-title'>Data driven</div>
            <div className='about-card-content'>Outside of programming (and honestly, also alongside it) I also love data and taking decisions according to data analysis, I&apos;m a fan of excel sheets and analyzing the data I get from I site to tailor the experience and improve it even further.</div>
            <div className='about-card-content'>I would love an environment where our next steps are data driven and I get a chance to see that data and the logic behind those steps, but I understand that&apos;s something I need to prove I&apos;m worthy of, which drives me even harder to improve my work.</div>
            <div className='about-card-content'>I&apos;m also a person that loves gathering and analyzing data so I try to craft systems to log and save important data about the usage of my applications if it fits.</div>
        </InView>
        <InView as="div" onChange={(inView, entry) => { childEntersView(inView, entry) }} className={`about-card-right`}>
            <div className='about-card-title'>Coding</div>
            <div className='about-card-content'>Coding has always been something very present in my life.</div>
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

export default About;