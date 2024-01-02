import React from 'react'
import m from '../assets/Logo.png'
import p from '../assets/aboutFig.jpg'
import Nav from './Nav';
import cars from  '../assets/Cars.png'

export default function About() {
  return (
    <>
 <Nav/>
      

    <div className='w-full h-[80vh] bg-[#f5f5f5] mt-2 '>
      
        <div className='w-full h-[46vh] flex justify-around  '>
            <div className='h-[40vh] flex flex-col justify-center gap-2 font-bold text-lg '>
                <hr className='w-[60%] bg-[#e3c22da1] h-2 rounded-lg  '></hr> 
                <p>تعرف علينا </p>
            </div>
            <div className='p- text-center'>
                <p className='pt-6'> فريق موقع "[ ركنة  ]"،  ونهدف إلى تغيير وايجاد حلول متمكنة مع مشكلات  </p>
                <p className='pt-2'> البحث عن مواقف السيارات. نعلم جيدًا أن العثور على المواقف القريبة من   </p>
                <p className='pt-2'> المستشفيات أو الوجهات المهمة يمكن أن تكون أمرًا صعبًا ومرهقًا ويمكن</p>
                <p className='pt-2'>أن يؤثر على جدولك الزمني ومهمتك الحالية.</p>
            </div>
            

        </div>
   <div className='w-full h-[40vh] bg-[#f0f0f0] flex justify-between items-center p-2'>
  <img className='w-[35%] h-64 ml-6 rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] absolute top-72 left-40' src={cars} alt="" />

  <div className='p-2 text-center'>
    <p className='pt-6'>تتيح لك منصتنا الاحترافية حجز موقفك بشكل مسبق بكل يسر وسهولة. بحيث  </p>
    <p className='pt-2'>يمكنك استعراض المواقف المتاحة واختيار الموقف الذي يناسب احتياجاتك . </p>
    <p className='pt-2'>ومواعيدك ويمكنك أيضًا تحديد التاريخ والوقت الذي ترغب فيه بالحجز</p>
    <p className='pt-2'> وبضغطة زر واحد ويسكون موقف سيارتك مؤمنًا بالفعل.</p>
  </div>
</div>
      
    </div>
    </>
  )
}
