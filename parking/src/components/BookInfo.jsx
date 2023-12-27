
import { useState } from "react";

import { useEffect } from "react";

import { Map, Polygon, GoogleApiWrapper } from "google-maps-react";


function BookInfo({ google }) {
    const position = { lat: 24.85353885090064, lng: 46.71209072625354 };
    const [open, setOpen] = useState(false);

 

   
  useEffect(() => {
    setOpen(true);
  }, []);

  const triangleCoords = [
    { lat: 24.853728142944043, lng: 46.71222233178017 },
    { lat: 24.853722612430246, lng: 46.71219795173656 },
    { lat: 24.853678368310977, lng: 46.71220709425291 },
    { lat: 24.8536811335689, lng: 46.71223249013166 },
  ];

  const triangleCoords2 = [
    { lat: 24.853724156363523, lng: 46.71219380779733 },
    { lat: 24.8537194548795, lng: 46.712169196326634 },
    { lat: 24.853675966144028, lng: 46.71217955905114 },
    { lat: 24.853678316886878, lng: 46.71220417052183 },
    ];

 

  return (
    <div className="flex border-8  " >

    {/* <!-- component --> */}

  <div class="flex h-fit justify-center max-sm:flex-col">

  <div className="card shrink-0 max-md:w-72 max-sm:w-screen  max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
        <div className="form-control border-none">
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
        <div className="form-control border-none">
          <button className="btn btn-primary">التالي</button>
        </div>
      </form>
    </div>

    
    <div className=" h-full items-center justify-center content-center">


   <div className="w-44 max-sm:hidden" >
        <Map  containerStyle={{ width: '72vw'}}
google={google} zoom={25} initialCenter={position} mapId="30946c4a5f450f07" mapTypeId="satellite">
            <Polygon
            paths={triangleCoords}
            strokeColor="#FF0000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#FF0000"
            fillOpacity={0.35}
          />

          <Polygon
            paths={triangleCoords2}
            strokeColor="#FF0000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#FF0000"
            fillOpacity={0.35}
          />
        </Map>
        </div>

      <div className="w-44 hidden max-sm:block" >
        <Map  containerStyle={{ width: '400px', height: '600px' }}
google={google} zoom={25} initialCenter={position} >
                              {/* <div className=" w-56 h-12 bg-white border text-black">متاح غير متاح</div> */}
            <Polygon
            paths={triangleCoords}
            strokeColor="#FF0000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#FF0000"
            fillOpacity={0.35}
          />

          <Polygon
            paths={triangleCoords2}
            strokeColor="#FF0000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#FF0000"
            fillOpacity={0.35}
          />
        </Map>
        </div>
          
          {/* <AdvancedMarker position={position} onClick={() => setOpen(true)}>

            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />


          </AdvancedMarker> */}
          {/* <div className=" w-56 h-12 bg-white border text-black">متاح غير متاح</div> */}

          {/* {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p className="text-center items-center">انا في اكادمية طويق</p>
            </InfoWindow>

          )} */}
          
       
    {/* </APIProvider> */}

  </div>

    </div>
    </div>
    
  )
}

// export default BookInfo
export default GoogleApiWrapper({
  apiKey: "AIzaSyCOEE04AQC7gzfcMrUrmYoHiULXK7yJaeA",
})(BookInfo);

