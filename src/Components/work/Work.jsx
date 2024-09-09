import React from 'react'
import "./Work.css"
import work_exp from '../../infos/work.json'


function Work() {
  return (
    <div className='work container'>
        <p className='font-bold text-xl'>Work Experience</p>
        {work_exp.map((exp) => (
          <div key={exp.type} className={`work_stage flex md:justify-between justify-center px-[50px] py-[30px] bg-[#f5f5f5] rounded-[30px] items-center ${exp.active !== "none" ? 'border-[2px] border-[#0000ff]' : ''}`}>
          <div className='flex flex-col gap-3 md:items-start md:justify-start justify-center items-center text-center'>
            <p className='text-[20px] font-normal'>{exp.type} {exp.active !== "none" ? <span className='text-[16px] font-bold text-[#0000ff]'> | {exp.active}</span>:null}</p>
            <p className='text-4xl font-semibold'>{exp.profile}</p>
            <p className='text-[20px] font-bold text-[#0000ff]'>{exp.entreprise}</p>
          </div>
          <img className='md:block hidden' src={`/${exp.img}`} width={70} height={70} alt='company logo'></img>
        </div>
        ))}
    </div>
  )
}

export default Work