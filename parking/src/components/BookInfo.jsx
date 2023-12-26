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
    <div className="flex  border-8 ">
   



    {/* <!-- component --> */}
<div class="flex  w-full max-md:flex-wrap  justify-center  ">

	<div className="card shrink-0 w-full max-md:w-72 max-sm:w-full  max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
        <div className="form-control border-none">
            <p className="text-center font-bold">معلومات الحجز </p>
          <label className="label">
            <span className="label-text">اختر يوم الحجز </span>
          </label>
          <input type="text" placeholder="اختر يوم الحجز " className="input input-bordered" required />
        </div>
        <div className="form-control border-none">
          <label className="label">
            <span className="label-text">اختر بداية الحجز</span>
          </label>
          <input type="text" placeholder="اختر بداية الحجز" className="input input-bordered" required />
        </div> <div className="form-control border-none">
          <label className="label">
            <span className="label-text">اختر نهاية الحجز </span>
          </label>
          <input type="text" placeholder="اختر نهاية الحجز " className="input input-bordered" required />
        </div> <div className="form-control border-none">
          <label className="label">
            <span className="label-text">رقم الموقف ( حدد موقفك من الخريطة )</span>
          </label>
          <input type="text" placeholder="رقم الموقف ( حدد موقفك من الخريطة )" className="input input-bordered" required />
        </div>
        <div className="form-control border-none">
          <label className="label">
            <span className="label-text">التكلفة الإجمالية (لكل ساعة 8 ريال سعودي) </span>
          </label>
          <input type="text" placeholder="(لكل ساعة 8 ريال سعودي)" className="input input-bordered max-sm:w-full" required />
          <label className="label">
            
          </label>
        </div>
        <div className="form-control mt-6 border-none">
           <Link className="btn btn-primary" to='/userdata'>
           <button className="btn btn-primary">التالي</button>

            </Link> 
        </div>
      </form>
    </div>
    <div className="w-full h-full  items-center justify-center content-center ">
	 <APIProvider apiKey="AIzaSyCOEE04AQC7gzfcMrUrmYoHiULXK7yJaeA">
      <div className="w-full h-full">

        <Map zoom={20} center={position} mapId="AIzaSyCOEE04AQC7gzfcMrUrmYoHiULXK7yJaeA" mapTypeId="satellite">
                              <div className=" w-56 h-12 bg-white border text-black">متاح غير متاح</div>

          <AdvancedMarker position={position} onClick={() => setOpen(true)}>

            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />

          </AdvancedMarker>
          <div className=" w-56 h-12 bg-white border text-black">متاح غير متاح</div>

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