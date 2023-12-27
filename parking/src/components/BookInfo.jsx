"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Link } from "react-router-dom/dist";

function BookInfo() {
    const position = { lat: 24.85357907176668, lng: 46.71208704698528 };
    const [open, setOpen] = useState(false);
  return (

    <div className="flex  ">

   



    {/* <!-- component --> */}
<div class="flex h-screen w-full max-md:flex-wrap  justify-center bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] ">

	<div className="card shrink-0 w-full max-md:w-72 max-sm:w-full items-center max-w-sm shadow-2xl bg-base-100 bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f]  ">
      <form className="card-body ">
        <div className="w-full h-[90vh] flex flex-col justify-center gap-6">
        <div className="form-control flax gap-5">
            <p className="text-center font-bold">معلومات الحجز </p>

    <div className="">
      <label htmlFor="date" className=" block mb-2">تحديد التاريخ:</label>
      <input type="date" id="date" name="date" className="input input-bordered  p-4 h-[5vh] w-[84%] shadow-sm flex " required/>
    </div> 
        </div>
    <div className="w-full h-[20vh] flex flex-col gap-2 ">
  <label htmlFor="time" className="block">
    تحديد الوقت:
  </label>
  <input
    type="time"
    id="time"
    name="time"
    min="08:00"
    max="17:00"
    className="p-4 h-[5vh] shadow-sm input input-bordered w-[84%] "
    required
  />
   <div className=" w-[84%] flex items-center justify-evenly gap-3">
            <hr className="border-[1px] w-[84%]"></hr>
            <p className="text-[12px] text-[#5d5b5b] ">الى</p>
            <hr className="border-[1px] w-[84%]"></hr>
    </div>

     <input
    type="time"
    id="time"
    name="time"
    min="08:00"
    max="17:00"
    className="p-4 h-[5vh] shadow-sm input input-bordered w-[84%] "
    required
  />
</div>

       <div className="form-control">
          <label className="label">
            <span className="label-text">رقم الموقف ( حدد موقفك من الخريطة )</span>
          </label>
          <input type="text" placeholder="رقم الموقف ( حدد موقفك من الخريطة )" className="p-2 h-[5vh] shadow-sm input input-bordered w-[84%]" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text max-sm:text-sm">التكلفة الإجمالية (لكل ساعة 8 ريال سعودي) </span>
          </label>

          <input type="text" placeholder="(لكل ساعة 8 ريال سعودي)" className="p-4 h-[5vh] shadow-sm input input-bordered w-[84%]" required />

          
        </div>

        <div className="form-control mt-6 border-none">
           <Link className="btn btn-primary max-sm:btn-sm" to='/userdata'>
           التالي
            </Link> 
        </div>
        </div>
      </form>
    </div>
    <div className="w-full h-full  items-center justify-center content-center border-[2px] rounded-xl shadow-2xl border-[#cecece]">
	 <APIProvider apiKey="AIzaSyCOEE04AQC7gzfcMrUrmYoHiULXK7yJaeA">
      <div className="w-full h-full  ">
        <Map zoom={20} center={position} mapId="AIzaSyCOEE04AQC7gzfcMrUrmYoHiULXK7yJaeA" mapTypeId="satellite">
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p className="text-center items-center">انا في اكادمية طويق</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>


	</div>
    </div>
    </div>
    
  )
}

export default BookInfo