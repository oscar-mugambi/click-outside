import React, { forwardRef } from 'react';
import enhanceWithClickOutside from './EnhanceWIthClickOutside';

const DropDown = forwardRef(({ state, setState }, ref) => {
  console.log(state);
  return (
    <>
      <div style={{ marginBottom: 30 }}> Dropdown component </div>
      <button ref={ref} onClick={() => setState(!state)}>
        Toggle Component
      </button>

      {state && (
        <ul>
          <li>One</li>
          <li>Two</li>
        </ul>
      )}
    </>
  );
});

export default enhanceWithClickOutside(DropDown);
