import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export function Carousel({ children: slides }) {
    const [ currentCard, setCurrentCard ] = useState(0);

    const prev = () =>
        setCurrentCard( curr => ( curr === 0 ? slides.length - 1 : curr - 1 ));
    const next = () =>
        setCurrentCard( curr => ( curr === slides.length - 1 ? 0 : curr + 1 ));

    return(
        <div className="overflow-hidden relative">
            <div 
                className="flex transition-transform ease-out
                duration-500" style={{ transform: `translateX(-${currentCard * 100}%)` }}>
                {slides}
            </div>
            <div className='absolute inset-0 flex items-center
            justify-between p-4'>
                <button 
                    className="p-1 rounded-full shadow bg-white/80
                  text-gray-800 hover:bg-white"
                    onClick={ prev }>
                    <ChevronLeft size={40} />
                </button>

                <button 
                    className="p-1 rounded-full shadow bg-white/80
                  text-gray-800 hover:bg-white"
                    onClick={ next }>
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
}