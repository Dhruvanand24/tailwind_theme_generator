import React from 'react'
import { Smartphone, Tablet, TvMinimal } from 'lucide-react';
import { useScreen } from '@/app/contexts/ScreenContext';

const ScreenAdjustment = () => {
  const {setScreen, screen} = useScreen();
  return (
    <div className='w-full flex items-center justify-around'>
      <button onClick={() => setScreen({type: 'pc', size: "1024px"})}   className={`p-2 rounded ${screen.type === 'pc' ? 'bg-slate-200' : 'bg-slate-100'} w-16 flex items-center flex-col justify-center hover:bg-slate-200 transition-all delay-50`}>
      <TvMinimal />
        PC
      </button>
      <button onClick={() => setScreen({type: 'tablet', size: "820px"})} className={`p-2 rounded ${screen.type === 'tablet' ? 'bg-slate-200' : 'bg-slate-100'} w-16 flex items-center flex-col justify-center  hover:bg-slate-200 transition-all delay-50`}>
      <Tablet />
        Tablet
      </button>
      <button onClick={() => setScreen({type: 'mobile', size: "412px"})} className={`p-2 rounded ${screen.type === 'mobile' ? 'bg-slate-200' : 'bg-slate-100'} w-16 flex items-center flex-col justify-center hover:bg-slate-200 transition-all delay-50`}>
      <Smartphone />
        Mobile
      </button>
  </div>
  )
}

export default ScreenAdjustment