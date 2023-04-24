import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Box from './../components/Box/Box';
import Button from './../components/Button/Button';
import { navigation } from '@/localization/en/ui-constants';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`${montserrat.className} h-[2000px]`}
    >
      <Box id="header" className="h-12 my-8 flex items-center fixed">
        <div className="relative h-8 w-8">
          <Image 
            fill
            src="/logo.svg"
            alt="Volcan"
          />
        </div>
        <nav className="rounded-full border border-stone-600 ml-8 px-8 h-16 items-center justify-center bg-stone-900 hidden md:flex backdrop-opacity-100">
          <ul className="flex gap-8">
            {navigation.map((item) => (
              <li key={item.href} className={'tracking-widest font-light text-stone-300 hover:text-stone-100 transition-all'}>
                <Link href={item.label}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Box>
      <main>
        <Box className="flex h-[calc(100vh)] items-center justify-center">
          <strong className="text-6xl lg:text-9xl text-red-600">Imagine</strong>
        </Box>
        <Box className="">
          <div id="breakdown" className="flex flex-col max-w-6xl mx-auto w-full text-center py-16 rounded-2xl bg-cover" style={{backgroundImage: `url(/homepage/breakdown.png)`}}>
            <strong className="inline-block text-5xl lg:text-8xl">We Are</strong>
            <strong className="inline-block text-5xl lg:text-8xl">VOLCAN</strong>
            <p className="text-2xl lg:text-4xl mt-8 leading-relaxed max-w-4xl mx-auto tracking-wide">
              We create and develop business ideas <br/>and brands with <strong>attitude and <br/>meaningfull impact</strong>.
            </p>
            <Button
              label={'About Us'}
              className={'mt-8 mx-auto'}
            />
          </div>
        </Box>
      </main>
    </div>
  )
}
