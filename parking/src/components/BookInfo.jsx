"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function BookInfo() {
    const position = { lat: 24.85357907176668, lng: 46.71208704698528 };
    const [open, setOpen] = useState(false);
  return (
    <div className="flex  ">
   



    {/* <!-- component --> */}
<div class="flex h-screen w-full max-md:flex-wrap  justify-center">

	<div className="card shrink-0 w-full max-md:w-72 max-sm:w-full  max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
            <p className="text-center font-bold">معلومات الحجز </p>
          <label className="label">
            <span className="label-text">اختر يوم الحجز </span>
          </label>
          <input type="email" placeholder="اختر يوم الحجز " className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">اختر وقت الحجز</span>
          </label>
          <input type="email" placeholder="اختر وقت الحجز" className="input input-bordered" required />
        </div> <div className="form-control">
          <label className="label">
            <span className="label-text">اختر مدة الحجز </span>
          </label>
          <input type="email" placeholder="اختر مدة الحجز " className="input input-bordered" required />
        </div> <div className="form-control">
          <label className="label">
            <span className="label-text">رقم الموقف ( حدد موقفك من الخريطة )</span>
          </label>
          <input type="email" placeholder="رقم الموقف ( حدد موقفك من الخريطة )" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">التكلفة الإجمالية (لكل ساعة 8 ريال سعودي) </span>
          </label>
          <input type="password" placeholder="(لكل ساعة 8 ريال سعودي)" className="input input-bordered max-sm:w-full" required />
          <label className="label">
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">التالي</button>
        </div>
      </form>
    </div>
    <div className="w-full h-full  items-center justify-center content-center ">
	 <APIProvider apiKey="AIzaSyCOEE04AQC7gzfcMrUrmYoHiULXK7yJaeA">
      <div className="w-full h-full">
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