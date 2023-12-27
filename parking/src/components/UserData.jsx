import React from "react";
import { Link } from 'react-router-dom'


function UserData() {
  return(<>
  
   <div className="bg-gray-100 w-full min-h-screen">
     

       <div className="bg-gray-100  min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">بيانات السيارة</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-make">ماركة السيارة</label>
          <input className="border border-gray-400 rounded-lg py-2 px-4 w-full" type="text" id="car-make" placeholder="ادخل ماركة السيارة" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-model">موديل السيارة</label>
          <input className="border border-gray-400 rounded-lg py-2 px-4 w-full" type="text" id="car-model" placeholder="ادخل موديل السيارة" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="car-license">رقم لوحة السيارة</label>
          <input className="border border-gray-400 rounded-lg py-2 px-4 w-full" type="text" id="car-license" placeholder="ادخل رقم لوحة السيارة" />
        </div>
        <Link to='/payment'>
            <button className="btn btn-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="button">
            حفظ
          </button>
        </Link>
        </div>
    </div>
    </div>
  
  
  </>)
}

export default UserData;
