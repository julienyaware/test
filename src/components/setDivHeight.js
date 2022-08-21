import React, { useEffect, useRef, useState } from 'react';

// HOC

const setDivHeight = (WrappedComponent,defaultHeight) => {
  function UpdatedComponent() {
    const [manuallySetHeight, setManuallySetHeight] = useState(defaultHeight);

        return (
           <WrappedComponent manuallySetHeight={manuallySetHeight}/>
        );
    }

    return UpdatedComponent ;
   
}

export default setDivHeight;