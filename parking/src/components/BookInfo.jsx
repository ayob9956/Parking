
import { useState } from "react";

import { useEffect } from "react";

import { Map, Polygon, GoogleApiWrapper } from "google-maps-react";
import axios from "axios";


function BookInfo({ google }) {
    const position = { lat: 24.85353885090064, lng: 46.71209072625354 };
    const [open, setOpen] = useState(false);

    // const [fillColor,setFillColor] = useState("#FF0000")
    const [fillColor,setFillColor] = useState("#34a653")

    

    const [parking,setParking] = useState([])

 

   
  useEffect(() => {
    axios.get('https://658c45f8859b3491d3f5d2ff.mockapi.io/Parking')
  .then(function (response) {
    setParking(response.data)
    // handle success
    console.log(response);
  })
  }, []);

  const handleParking = (parkingNum) => {
    console.log(parkingNum);
  };




 

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

          <label className="label">
          </label>
        </div>
        <div className="form-control border-none">
          <button className="btn btn-primary">التالي</button>
        </div>
      </form>
    </div>

    
    <div className=" h-full items-center justify-center content-center">
   <div className="w-44 max-sm:hidden" >
        <Map  containerStyle={{ width: '72vw' , height: '85%'}}
          google={google}
          zoom={25}
          initialCenter={position} mapId="30946c4a5f450f07" mapTypeId="satellite">

          {parking.map(item=>
           
            <Polygon
            paths={item.coords}
            strokeColor= {fillColor}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor= {fillColor}
            fillOpacity={0.35}
            tilt={item.parkingNum}
            onClick={() => handleParking(item.parkingNum)}

            

          />
          )}
        </Map>
        </div>

      {/* <div className="w-44 hidden max-sm:block" >
        <Map  containerStyle={{ width: '400px', height: '600px' }}
google={google} zoom={25} initialCenter={position} >
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
        </div> */}
          
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

