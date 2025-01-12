import React from 'react'
import { Smartphone, Tablet, TvMinimal } from 'lucide-react';
import { useScreen } from '@/app/contexts/ScreenContext';

const ScreenAdjustment = () => {
  const {setScreen, screen} = useScreen();
  return (
    <div className='w-full flex items-center justify-around'>
      <button onClick={() => setScreen({...screen, type: 'pc'})}   className={`p-2 rounded ${screen.type === 'pc' ? 'bg-slate-200' : 'bg-slate-100'} w-16 flex items-center flex-col justify-center hover:bg-slate-200 transition-all delay-50`}>
      <TvMinimal />
        PC
      </button>
      <button onClick={() => setScreen({...screen, type: 'tablet'})} className={`p-2 rounded ${screen.type === 'tablet' ? 'bg-slate-200' : 'bg-slate-100'} w-16 flex items-center flex-col justify-center  hover:bg-slate-200 transition-all delay-50`}>
      <Tablet />
        Tablet
      </button>
      <button onClick={() => setScreen({...screen, type: 'mobile'})} className={`p-2 rounded ${screen.type === 'mobile' ? 'bg-slate-200' : 'bg-slate-100'} w-16 flex items-center flex-col justify-center hover:bg-slate-200 transition-all delay-50`}>
      <Smartphone />
        Mobile
      </button>
  </div>
  )
}

export default ScreenAdjustment