import React from "react"
import './Competence.css'
import jsonfile from "../../infos/canDo.json"


function Competence() {


  return (
    <div className='competence container'>
        <p className='font-bold text-xl'>What I Can Do</p>
        {jsonfile.map((skill) => (
        <div className='relative do md:flex md:flex-row flex flex-col gap-8 justify-between px-[65px] py-[50px] w-full content-center bg-[#F5F5F5] rounded-[71px] lg:h-[480px] h-auto overflow-hidden'>
            <div className='texts relative flex flex-col gap-7 justify-center md:text-left text-center'>
                <p className='md:text-[20px] text-[18px] font-normal md:self-start self-center'>{skill.domain}</p>
                <div className='flex flex-col gap-3 md:self-start self-center font-semibold '>
                    {skill.words.map((word,index) => <p key={index} className='xl:text-6xl text-5xl'>{word}</p>)}
                    <p className='font-normal text-xl flex content-center gap-1 justify-center md:justify-start'>{skill.Experience} <img src='https://em-content.zobj.net/source/apple/354/flexed-biceps_light-skin-tone_1f4aa-1f3fb_1f3fb.png' alt="Experience Icon" width={20}></img></p>
                </div>
            </div>
            <img src={`/assets/${skill.picture}`} alt="skill" className='picture md:max-w-[350px] md:block hidden z-10 object-contain'/>
        </div>
  ))}
  </div>
  )}



export default Competence