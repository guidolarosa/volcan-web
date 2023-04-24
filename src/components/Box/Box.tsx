import React from 'react';
import { ReactNode } from 'react';

type BoxProps = {
  className?: string,
  id?: string
  children?: ReactNode,
}

const Box = (props : BoxProps) => {
  return (
    <div id={props.id} className={`flex mx-auto px-8 lg:px-40 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Box;