import React from 'react';
import { ReactNode } from 'react';

type BoxProps = {
  className?: string,
  id?: string
  children?: ReactNode,
  style?: object
}

const Box = (props : BoxProps) => {
  return (
    <div id={props.id} className={`flex mx-auto px-4 lg:px-40 ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Box;