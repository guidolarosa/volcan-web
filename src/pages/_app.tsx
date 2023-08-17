import '@/styles/globals.css'
import '@splidejs/react-splide/css';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />
}
