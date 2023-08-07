import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';

type ButtonProps = {
  className?: string,
  id?: string
  label: ReactNode | string
}

const Button = (props : ButtonProps) => {
  return (
    <Link href={'#'} id={props.id} className={`border border-stone-50 fit-content flex h-12 items-center w-fit px-4 rounded-full ${props.className}`}>
      {props.label}
    </Link>
  );
};

export default Button;