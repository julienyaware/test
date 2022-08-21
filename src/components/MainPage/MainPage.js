import React, { useEffect, useRef, useState } from 'react';
import styles from './MainPage.css';
import updateDivHeight from '../updateDivHeight';

function MainPage() {
    const [liveWidth, setLiveWidth] = useState(window.innerWidth);
    const [newDivHeight, setNewDivHeight] = useState('');
   

    useEffect(() => {
        const detectBrowserSizeChange = () => {
            setLiveWidth(window.innerWidth)
        }

        window.addEventListener('resize', detectBrowserSizeChange)

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
                    type='text'
                    value={newDivHeight}
                    onChange={changeDivheight}
                />

            </form>

        </div>
    );
}



export default MainPage;