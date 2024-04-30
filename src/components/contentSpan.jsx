import { Fragment } from "react";
import PropTypes from 'prop-types';

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

export default ContentSpan;