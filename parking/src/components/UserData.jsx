import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";


function UserData() {

  const [carBrand,setCarBrand] = useState();
  const [carModel,setCarModel] = useState();
  const [licensePlate,setLicensePlate] = useState();

  const [ReservationId,setReservationId] = useState(localStorage.getItem("ReservationId"));

  const carInfo = {
    carBrand: carBrand ,
    carModel: carModel ,
    licensePlate: licensePlate};

  const postData=()=>{
    axios.put(`https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation/${ReservationId}`, {
      carInfo : carInfo
  });

  }

  return(<>
  
   <div className="bg-gray-100 w-full min-h-screen cardata">
     

       <div className="bg-gray-100  min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">بيانات السيارة</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-make">ماركة السيارة</label>
          <input value={carBrand} onChange={(e)=>setCarBrand(e.target.value)} className="border border-gray-400 rounded-lg py-2 px-4 w-full" type="text" id="car-make" placeholder="ادخل ماركة السيارة" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-model">موديل السيارة</label>
          <input value={carModel} onChange={(e)=>setCarModel(e.target.value)} className="border border-gray-400 rounded-lg py-2 px-4 w-full" type="text" id="car-model" placeholder="ادخل موديل السيارة" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-license">رقم لوحة السيارة</label>
          <input value={licensePlate} onChange={(e)=>setLicensePlate(e.target.value)} className="border border-gray-400 rounded-lg py-2 px-4 w-full" type="text" id="car-license" placeholder="ادخل رقم لوحة السيارة" />
        </div>
        <Link to='/checkout'>
            <button onClick={postData} className="btn btn-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="button">
            حفظ
          </button>
        </Link>
        </div>
    </div>
    </div>
  
  
  </>)
}

export default UserData;
