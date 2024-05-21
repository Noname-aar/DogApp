import Image from 'next/image'
import dog1 from "../public/images/dog1.webp"
import dog2 from "../public/images/dog2.webp"
import dog3 from "../public/images/dog3.webp"
import dog4 from "../public/images/dog4.webp"
import dog5 from "../public/images/dog5.webp"
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row'>
    <h1 className='text-3xl'>The Dog App</h1>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={dog1}
          alt='Picture of Dog1'
          layout='fill'
          priority
        />
        </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={dog2}
          alt='Picture of Dog2'
          layout='fill'
          priority
        />
        </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={dog3}
          alt='Picture of Dog3'
          layout='fill'
          priority
        />
        </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={dog4}
          alt='Picture of Dog4'
          layout='fill'
          priority
        />
        </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={dog5}
          alt='Picture of Dog5'
          layout='fill'
          priority
        />
      </div>
     
      
   </div>
     )
}
