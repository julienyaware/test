import React, { useEffect, useRef, useState } from 'react';
import styles from './MainPage.css';
import setDivHeight from '../setDivHeight';

function MainPage({manuallySetHeight}) {
    const [liveWidth, setLiveWidth] = useState(window.innerWidth);
    const [newDivHeight, setNewDivHeight] = useState(manuallySetHeight);
    const divHeightRef = useRef(null);


    useEffect(() => {
    
        const detectBrowserSizeChange = () => {
            setLiveWidth(window.innerWidth)
        }

        window.addEventListener('resize', detectBrowserSizeChange);
        divHeightRef.current.style.height =  newDivHeight + 'px';
       

    }, [liveWidth])

    const changeDivheight = (e) => {
        e.preventDefault();
        setNewDivHeight(e.target.value)
        divHeightRef.current.style.height = newDivHeight + 'px';

    }

    return (
        <div className='liveWidthContainer' ref={divHeightRef}>
            <span>Live Width: {liveWidth} </span>
            <form>
                <label>Enter the new height for the current div : </label>
                <input
                    type='number'
                    value={newDivHeight}
                    onChange={changeDivheight}
                />

            </form>
        </div>
    );
}

// example of manually setting div height using HOC

export default setDivHeight(MainPage,200);