import React from 'react'
import Aurora from '../Components/Aurora'


const About = ({SocialMedia}) => {
      const items = [
      { Name: "#web developer" },
      { Name: "#frontend developer" },
      { Name: "#react developer" },
      { Name: "#uiux designer" },
    ];

      const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "src/assets/jeyasudhan.pdf";       // path to your PDF in public folder
    link.download = "JeyaSudhan_Resume.pdf";    // file name for download
    link.click();
  };

  return (
    <>
  <div className='w-[90%] h-screen relative  '>
<Aurora  colorStops={["#C147E9", "#000000", "#C147E9"]}
        amplitude={18.2}
        blend = {0.5}
        speed={0.8} />
       <div className=' z-40 absolute  top-0 w-full h-screen flex flex-col    gap-7 justify-baseline  '>

      
    <div className='   w-full flex gap-7 justify-between backdrop-blur-[100px] '>{
      items.map((NameData,idx)=>(

        <span className='  text-2xl p-5 bg-transparent uppercase ' key={idx}>{NameData.Name}</span>
      ))
      
      
      }</div>
  
  <section className='  flex '>
<div className=' basis-6/12  ' >
  <h1 className='boldonse-regular text-4xl mt-15 ml-30  text-[#BF40BF] text-pop-up-right'  >About</h1>
  <p className='boldonse-regular text-4xl mt-15 ml-30 leading-13 text-pop-up-right-delay2 '>SoftWare Engineer   &<br/>MERN Stack Developer</p>
  <p className=' mt-15 ml-30 poppins-medium opacity-80 text-pop-up-right-delay3'>I’m <span className='font-extralight bg-[#BF40BF] px-2.5'>Jeya Sudhan R</span> , a MERN-stack Developer and Software Engineer skilled in building scalable web applications using React, Node.js, Express.js, and MongoDB, along with experience in Python, Django, and Flask. I enjoy creating clean UIs with Tailwind CSS, Material UI, and Ant Design, and building efficient RESTful APIs.</p>
   <button     onClick={handleDownload} className=' mt-7 ml-30 poppins-medium bg-[#BF40BF] text-pop-up-right-delay3 py-2 px-3 rounded model-card ' >Download Resume </button>
</div>
<div className='relative basis-6/12   ' >
  <h1 className= 'absolute top-50 boldonse-regular  rounded-2xl  right-50 z-50 text-5xl backdrop-blur-xl  p-6 '>THUNDER
   <span className='flex justify-center gap-3 mt-7'>{SocialMedia.map((item,idx)=>(
        <a className=" hover:-translate-y-1 text-3xl transition duration-100 text-white/50 hover:text-[#fffdff]  "  key={idx} href={item.link}>{item.platform}</a>
      ))}</span>
  </h1>
<div className=' bg-amber-300 w-full h-full  Thunder  '>


</div>


</div>
  </section>
  
    </div>

  </div>
    </>
  )
}

export default About