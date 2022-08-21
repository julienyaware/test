import React, { useRef, useState } from 'react';

const updateDivHeight = (WrappedComponent) => {
  function UpdatedComponent(props) {
    const [newDivHeight, setNewDivHeight] = useState('');
    const divHeightRef = useRef(null);
    
    const changeDivheight = (e) => {
      e.preventDefault();
      setNewDivHeight(e.target.value)
      divHeightRef.current.style.height = newDivHeight + 'px';
      console.log(newDivHeight)
     }

     
        return (
           <WrappedComponent changeDivheight={changeDivheight}/>
        );
    }

    return UpdatedComponent ;
   
}

export default updateDivHeight;