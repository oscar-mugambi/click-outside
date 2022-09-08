import React, { useState, useEffect, useRef } from 'react';

const Enhance = (WrappedComponent) => {
  const Component = () => {
    const [state, setState] = useState(true);
    const ref = useRef();

    useEffect(() => {
      const handleMouseClick = (e) => {
        if (!ref.current.contains(e.target)) {
          setState(false);
        }
      };

      document.addEventListener('mousedown', handleMouseClick);
    }, [ref]);

    return <WrappedComponent state={state} setState={setState} ref={ref} />;
  };
  return Component;
};

export default Enhance;
