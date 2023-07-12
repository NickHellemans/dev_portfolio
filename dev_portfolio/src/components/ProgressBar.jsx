import React from 'react'

export const ProgressBar = ({percent}) => {
    return (
    <div className='w-full h-[24px] mt-3 green-pink-gradient p-[1px] rounded-md'>
        <div style={{width: `${percent}%`, height: `${100}%`}} className={`flex items-center justify-end progress rounded-md`}>
            <p className='mr-2 text-white font-bold text-[16px]'>{percent}</p>
        </div>
    </div>
  )
}
