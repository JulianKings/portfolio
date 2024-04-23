// vars
const ballRadius = 6;
const paddleY = 440;
const paddleWidth = 90;
const paddleHeight = 10;
const wordsBoxPadding = 20;
const wordsBoxHeight = 200;

function attemptLoop(interval, canvasRef, ballPositionX, ballPositionY, barLocation, ballMovementX, ballMovementY, gameBox)
{
    const context = canvasRef.current.getContext("2d");
    // clean up canvas
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // draw ball
    attemptDrawBall(context, ballPositionX, ballPositionY);

    // draw paddle
    attemptDrawPaddle(context, barLocation)

    // attempt bounce logic
    attemptBounce(interval, canvasRef, barLocation, ballPositionX, ballPositionY, ballMovementX, ballMovementY);

    // attempt bounce logic on text
    attemptTextBounce(canvasRef, ballPositionX, ballPositionY, ballMovementX, ballMovementY, gameBox)

    // update pos
    ballPositionX.current += ballMovementX.current;
    ballPositionY.current += ballMovementY.current;
}

function attemptDrawBall(context, ballPositionX, ballPositionY)
{
    context.beginPath();
    context.arc(ballPositionX.current, ballPositionY.current, ballRadius, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
}

function attemptDrawPaddle(context, barLocation)
{
    context.beginPath();
    context.rect(barLocation.current, paddleY, paddleWidth, paddleHeight);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
}

function attemptBounce(interval, canvasRef, barLocation, ballPositionX, ballPositionY, ballMovementX, ballMovementY)
{
    // bouncing check
    if(ballPositionX.current + ballMovementX.current > (canvasRef.current.width - ballRadius) || ballPositionX.current + ballMovementX.current < ballRadius)
    {
        ballMovementX.current = -ballMovementX.current;
    }
    
    if(ballPositionY.current + ballMovementY.current < ballRadius)
    {
        ballMovementY.current = -ballMovementY.current;
    } else {
        if(ballPositionY.current + ballMovementY.current > (paddleY - paddleHeight + ballRadius))
        {
            if(ballPositionX.current > barLocation.current && ballPositionX.current < (barLocation.current + paddleWidth))
            {
                ballMovementY.current = -ballMovementY.current;
            }
        } 

        if(ballPositionY.current + ballMovementY.current > (canvasRef.current.height - ballRadius))
        {
            // game over
            clearInterval(interval);
        }
    }
}

function attemptTextBounce(canvasRef, ballPositionX, ballPositionY, ballMovementX, ballMovementY, gameBox)
{
    // check words box
    if((ballPositionX.current + ballMovementX.current) > (wordsBoxPadding - ballRadius) && (ballPositionX.current + ballMovementX.current) < (canvasRef.current.width - wordsBoxPadding - ballRadius))
    { 
        // inside box X
        if((ballPositionY.current + ballMovementY.current) > (wordsBoxPadding - ballRadius) && (ballPositionY.current + ballMovementY.current) < (wordsBoxHeight - wordsBoxPadding - ballRadius))
        {
            for(const box of gameBox) 
            {
                const parentRect = box.parentElement.parentElement.getBoundingClientRect();
                const boxRect = box.getBoundingClientRect(); 
                const boxX = boxRect.left - parentRect.left;
                const boxXEnd = boxX + boxRect.width;
                const boxY = boxRect.top - parentRect.top;
                const boxYEnd = boxY + boxRect.height;
                if((ballPositionX.current + ballMovementX.current) > (boxX - ballRadius) && (ballPositionX.current + ballMovementX.current) < (boxXEnd - ballRadius))
                { 
                    // inside box X
                    if((ballPositionY.current + ballMovementY.current) > (boxY - ballRadius) && (ballPositionY.current + ballMovementY.current) < (boxYEnd - ballRadius))
                    {
                        // bounce back
                        if(!box.classList.contains('box-hit') && !box.classList.contains('space-hit'))
                        {
                            ballMovementY.current = -ballMovementY.current;
                            box.classList.add('box-hit');
                        }
                    }
                }
            
            }        
        }
    }
}

export { attemptLoop }