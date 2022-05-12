import { } from 'react';
import { Icon } from '@iconify/react';
import clouds from './cloud01.png';
import clouds1 from './cloud02.png';
import clouds2 from './cloud03.png';
import sun from './sun.png';

function App() {

  return (
    <div className="flex h-screen ">
      <div className='relative w-1/2 h-full bg-gradient-to-b from-blue-500 to-cyan-500 flex flex-col justify-center p-16 text-white'>
        <p className='text-xl ml-0.5 text-white'>Thursday, May 12</p>
        <h1 className=' text-5xl mt-12'>Good Night, Chang !</h1>
        <p className='mt-4 text-xl ml-0.5'>Here's your weather telecast for today. </p>
        <img className='w-20 h-20 mt-5' src="//cdn.weatherapi.com/weather/64x64/night/116.png" />
        <div className=' flex items-center justify-between'>
          <div>
        <p className='flex items-center gap-2 text-2xl ml-1 mt-4'>
          <Icon icon="fa6-solid:location-dot" width="25" height="25" />
          Johor Bahru
        </p>
        <p className='ml-1 text-xl mt-5 font-bold tracking-wider'>Partly cloudy</p>
        <p className='text-lg mt-2 ml-1'>Feels like 30.1°C</p>
          </div>
          <p className=' text-7xl'>27°C</p>
        </div>     
        <img src={sun} className=' absolute w-52 h-52 top-4 right-20 ' />
        <img src={clouds} className=' absolute w-96 h-64 opacity-30 top-8 left-10' />
        <img src={clouds1} className=' absolute w-96 h-64 opacity-30 top-4 right-1 ' />
        <img src={clouds2} className=' absolute w-96 h- opacity-30 top-2 left-1 ' />
      </div>
      <div className='w-1/2 h-full text-zinc-700'>
        <div className='flex ml-24 items-end'>
          <input type='text' placeholder ='Location' className="flex-1 border-b-2 border-stone-200 placeholder-zinc-300 pb-2 text-xl pt-2 focus:outline-none" />
          <div className='w-24 h-24 bg-blue-500 flex items-center justify-center rounded-xl'>
            <Icon icon="ic:baseline-search" className='w-8 h-8 text-white font-extraligth' />
          </div>      
        </div>
        <div className='m-24 mt-12'>
          <h2 className='font-bold text-2xl'>Weather Details</h2>
          <div className='flex items-center justify-between text-xl'/>
          <span className='font-extralight text-zinc-500'></span>
          <span></span>
        </div>
      </div>
   </div>
  )
}

export default App
