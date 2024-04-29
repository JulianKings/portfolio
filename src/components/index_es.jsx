/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useRef, useState } from 'react';
import '../style/index.css';
import useMultiRefs from '../scripts/helper/helper';
import PropTypes from 'prop-types';
import { attemptLoop } from '../scripts/canvasManagement';

function ContentSpan({letter, previousContent, bold, title, appendGameBox})
{
    if(title)
    {
        if(/\s/.test(letter))
        {
            return <Fragment>
                {previousContent}
                <span ref={appendGameBox} className='title-span hit-span space-hit'>{letter}</span>
            </Fragment>;
        } else {
            return <Fragment>
                {previousContent}
                <span ref={appendGameBox} className='title-span hit-span'>{letter}</span>
            </Fragment>;
        }
    } else  {
        if(bold)
        {
            if(/\s/.test(letter))
            {
                return <Fragment>
                    {previousContent}
                    <span ref={appendGameBox} className='bold-span hit-span space-hit'>{letter}</span>
                </Fragment>;
            } else {
                return <Fragment>
                    {previousContent}
                    <span ref={appendGameBox} className='bold-span hit-span'>{letter}</span>
                </Fragment>;
            }
        } else {
            if(/\s/.test(letter))
            {
                return <Fragment>
                    {previousContent}
                    <span ref={appendGameBox} className='hit-span space-hit'>{letter}</span>
                </Fragment>;
            } else {
                return <Fragment>
                    {previousContent}
                    <span ref={appendGameBox} className='hit-span'>{letter}</span>
                </Fragment>;
            }
        }
    }
}

ContentSpan.propTypes = {
    letter: PropTypes.string,
    previousContent: PropTypes.object,
    bold: PropTypes.bool,
    title: PropTypes.bool,
    appendGameBox: PropTypes.func
}

function Index_ES()
{
    const [gameStatus, setGameStatus] = useState(null);
    const [gameBox, addGameBox] = useMultiRefs();
    const barRef = useRef(null);
    const canvasRef = useRef(null);
    const foregroundRef = useRef(null);
    const ballPositionX = useRef(320);
    const ballPositionY = useRef(400);
    const ballMovementX = useRef(2);
    const ballMovementY = useRef(-2);
    const barLocation  = useRef(0);
    const announcementRef = useRef(null);

    useEffect(() => {
        if(gameStatus && gameStatus === "started")
        {
            if(foregroundRef.current && canvasRef.current)
            {
                const { width, height } = foregroundRef.current.getBoundingClientRect();
                canvasRef.current.width = width;
                canvasRef.current.height = height - 160;
            } 

            ballPositionX.current = 320;
            ballPositionY.current = 400;
            ballMovementX.current = 2;
            ballMovementY.current = -2;

            announcementRef.current.textContent = '';

            const gameBoxIteratorBase = gameBox();
            gameBoxIteratorBase.forEach((box) => {
                if(box.classList.contains('box-hit'))
                {
                    box.classList.remove('box-hit');
                }
            })

            const repeatDrawInterval = setInterval(() => {
                const gameBoxIterator = gameBox();
                attemptLoop(repeatDrawInterval, canvasRef, ballPositionX, ballPositionY, barLocation, ballMovementX, ballMovementY, gameBoxIterator, announcementRef, 'es');
            }, 10)
    
            return () => clearInterval(repeatDrawInterval);
        } else if(gameStatus && gameStatus === 'restarted')
        {
            setGameStatus('started');
        }
    }, [gameStatus]);

    useEffect(() => {
        const handleResize = () => {
            if(foregroundRef.current && canvasRef.current)
            {
                const { width, height } = foregroundRef.current.getBoundingClientRect();
                canvasRef.current.width = width;
                canvasRef.current.height = height - 160;
            }  
        };
 
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if(!gameStatus || gameStatus === 'stopped')
    {
        barRef.current = null;
        canvasRef.current = null;
        foregroundRef.current = null;
        return <>
            <div className="index-container index-content-container">
                <p className="index-title">Hola, me llamo Julián Reyes</p>
                <p>Soy un desarrollador web full-stack <strong>autodidacto</strong>, buscando siempre mejorar mis habilidades.</p>
                <p>Puedes echarle un vistazo a mis últimos proyectos en <strong>la sección de proyectos</strong>.</p>
                <p>Contáctame en mi <a href='https://linkedin.com/in/julián-reyes-lahoz-05702a266'>LinkedIn</a> o mi e-mail: <strong>julli123@hotmail.es</strong></p>
                <div className='start-game'><button onClick={() =>  { setGameStatus('started') }} type='button'>Curiosear</button></div>
            </div>
            
        </>;
    } else {
        let firstLine = 'Hola, me llamo Julián Reyes';
        let secondLine = 'Soy un desarrollador web full-stack ';
        let secondLineBold = 'autodidacto';
        let secondLineEnd = ', buscando siempre mejorar mis habilidades.';
        let thirdLine = 'Puedes echarle un vistazo a mis últimos proyectos en ';
        let thirdLineBold = 'la sección de proyectos.';
        let fourthLine = 'Contáctame en mi LinkedIn o mi e-mail: '
        let fourthLineBold = 'julli123@hotmail.es';

        let firstLineContent = '';
        let currentArray = firstLine.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            firstLineContent = <ContentSpan previousContent={firstLineContent} letter={letter} title={true} appendGameBox={addGameBox} />;
        }
        let secondLineContent = '';
        currentArray = secondLine.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            secondLineContent = <ContentSpan previousContent={secondLineContent} letter={letter} appendGameBox={addGameBox} />;
        }
        currentArray = secondLineBold.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            secondLineContent = <ContentSpan previousContent={secondLineContent} bold={true} letter={letter} appendGameBox={addGameBox} />;
        }
        currentArray = secondLineEnd.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            secondLineContent = 
            secondLineContent = <ContentSpan previousContent={secondLineContent} letter={letter} appendGameBox={addGameBox} />;
        }
        let thirdLineContent = '';
        currentArray = thirdLine.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            thirdLineContent = <ContentSpan previousContent={thirdLineContent} letter={letter} appendGameBox={addGameBox} />;
        }
        currentArray = thirdLineBold.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            thirdLineContent = <ContentSpan previousContent={thirdLineContent} bold={true} letter={letter} appendGameBox={addGameBox} />;
        }
        let fourthLineContent = '';
        currentArray = fourthLine.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            fourthLineContent = <ContentSpan previousContent={fourthLineContent} letter={letter} appendGameBox={addGameBox} />;
        }
        currentArray = fourthLineBold.split("");
        for(let i = 0; i < currentArray.length; i++)
        {
            const letter = currentArray[i];
            fourthLineContent = <ContentSpan previousContent={fourthLineContent} bold={true} letter={letter} appendGameBox={addGameBox} />;
        }

        return <>
            <div className="index-container" onMouseMove={(event) => { onMouseMove(event)}}>
                <canvas ref={canvasRef} className='index-canvas'></canvas>
                <div ref={foregroundRef} className='index-content-container'>
                    <p>{firstLineContent}</p>
                    <p>{secondLineContent}</p>
                    <p>{thirdLineContent}</p>
                    <p>{fourthLineContent}</p>
                    <div className='bar-holder'>
                        <div ref={barRef} className='bar'></div>
                    </div>
                    <div ref={announcementRef} className='game-announcements'></div>
                    <div className='stop-game'><button onClick={() =>  { setGameStatus('stopped') }} type='button'>Volver atrás</button></div>
                    <div className='restart-game'><button onClick={() =>  { setGameStatus('restarted'); }} type='button'>Reiniciar el juego</button></div>
                </div>
            </div>
            
        </>;
    }

    function onMouseMove (event)
    {
        if(barRef.current)
        {
            let parentRect = barRef.current.parentElement.getBoundingClientRect(); 
            const limitRight = parentRect.right;
            const limitLeft = parentRect.left;
            const translateX = (event.clientX < limitLeft) ? 0 : (event.clientX > (limitRight - 45) ? (limitRight - 45 - limitLeft) : (event.clientX - limitLeft));
            barLocation.current = translateX;
        }
    }
}

export default Index_ES