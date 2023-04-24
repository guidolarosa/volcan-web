import React from 'react';
import { ReactNode } from 'react';

type BoxProps = {
  className?: string,
  id?: string
  children?: ReactNode,
}

const Box = (props : BoxProps) => {
  return (
    <div id={props.id} className={`flex mx-auto px-2 lg:px-40 sm:px-20 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Box;