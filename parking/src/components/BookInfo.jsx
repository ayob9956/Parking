import React, { useState, useEffect } from "react";
import { Map, Polygon, GoogleApiWrapper } from "google-maps-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BookInfo({ google }) {
  const position = { lat: 24.85353885090064, lng: 46.71209072625354 };
  const navigate = useNavigate();

  const [parking, setParking] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [parkingNum, setParkingNum] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [fillColors, setFillColors] = useState("#34a653");

  useEffect(() => {
    axios
      .get("https://658c45f8859b3491d3f5d2ff.mockapi.io/Parking")
      .then((response) => {
        setParking(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching parking data:", error);
      });

    axios
      .get("https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation")
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reservation data:", error);
      });
  }, []);

  useEffect(() => {
    if (startTime !== "" && endTime !== "") {
      const start = new Date(`2000-01-01T${startTime}`);
      const end = new Date(`2000-01-01T${endTime}`);
      const diff = Math.abs(end - start);
      const hours = Math.ceil(diff / (1000 * 60 * 60));
      setTotalCost(hours * 8);
    }
  }, [startTime, endTime]);

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  const handleParking = (parkingNum) => {
    setParkingNum(parkingNum);
  };

  const book = () => {
    axios
      .post("https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation", {
        parkingId: parkingNum,
        date: date,
        startTime: startTime,
        endTime: endTime,
        totalCost: totalCost,
        paymentStatus: "incomplete",
        reservationStatus: "active",
      })
      .then((res) => {
        localStorage.setItem("ReservationId", res.data.id);
        navigate("/userdata");
      })
      .catch((error) => {
        console.error("Error creating reservation:", error);
      });
  };

  useEffect(() => {
    // Move the checkAvailability logic here
    const today = getCurrentDate();
    parking.forEach((item) => {
      const reservationFound = reservations.find(
        (r) => r.parkingId === item.parkingNum && r.date === today
      );
      if (reservationFound) {
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        const time1 = currentTime;
        const time2 = reservationFound.startTime;
        const time3 = reservationFound.endTime;
        const [hours1, minutes1] = time1.split(":").map(Number);
        const [hours2, minutes2] = time2.split(":").map(Number);
        const [hours3, minutes3] = time3.split(":").map(Number);
        const totalMinutes1 = hours1 * 60 + minutes1;
        const totalMinutes2 = hours2 * 60 + minutes2;
        const totalMinutes3 = hours3 * 60 + minutes3;
        if (totalMinutes2 <= totalMinutes1 && totalMinutes3 >= totalMinutes1) {
          setFillColors("#FF0000");
        } else {
          setFillColors("#34a653");
        }
      } else {
        setFillColors("#34a653");
      }
    });

    // Update parking status to "available" if reservations expire
    const expiredReservations = reservations.filter((r) => {
      const endTime = new Date(`${r.date}T${r.endTime}`);
      const currentTime = new Date();
      return endTime < currentTime;
    });

    if (expiredReservations.length > 0) {
      const updatedParking = parking.map((item) => {
        const hasExpiredReservation = expiredReservations.some(
          (r) => r.parkingId === item.parkingNum
        );
        if (hasExpiredReservation) {
          return { ...item, status: "available" };
        }
        return item;
      });
      setParking(updatedParking);
    }
  }, [reservations, parking]);

  return (
    <div className="flex border-8">
      <div className="flex h-fit justify-center max-sm:flex-col">
        <div className="card shrink-0 max-md:w-72 max-sm:w-screen max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control border-none">
              <p className="text-center font-bold">معلومات الحجز</p>
              <div className="">
                <label htmlFor="date" className=" block mb-2">
                  تحديد التاريخ:
                </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  id="date"
                  name="date"
                  className="input input-bordered p-4 h-[5vh] w-[84%] shadow-sm flex"
                  required
                  min={getCurrentDate()}
                />
              </div>
            </div>
            <div className="w-full h-[20vh] flex flex-col gap-2">
              <label htmlFor="time" className="block">
                تحديد الوقت:
              </label>
              <input
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                type="time"
                id="time"
                name="time"
                className="p-4 h-[5vh] w-[84%] shadow-sm input input-bordered flex"
                required
              />
              <div className="w-[50%] flex items-center justify-evenly gap-3">
                <hr className="border-[1px] w-[84%]"></hr>
                <p className="text-[12px] text-[#5d5b5b] ">الى</p>
                <hr className="border-[1px] w-[84%]"></hr>
              </div>
              <input
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                type="time"
                id="time"
                name="time"
                min="08:00"
                max="17:00"
                className="p-2 h-[5vh] shadow-sm input input-bordered w-[84%]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  رقم الموقف (حدد موقفك من الخريطة)
                </span>
              </label>
              <input
                value={parkingNum}
                type="text"
                className="p-2 h-[5vh] shadow-sm input input-bordered w-[84%]"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text max-sm:text-sm">
                  التكلفة الإجمالية (لكل ساعة 8 ريال سعودي)
                </span>
              </label>
              <input
                value={totalCost}
                type="text"
                className="p-4 h-[5vh] shadow-sm input input-bordered w-[84%]"
                readOnly
              />
            </div>
            <div className="form-control border-none">
              <Link to={"/userdata"}>
                <button onClick={book} className="btn btn-primary">
                  التالي
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="h-full items-center justify-center content-center">
          <div className="w-44 max-sm:hidden">
            <Map
              containerStyle={{ width: "72vw", height: "85%" }}
              google={google}
              zoom={25}
              initialCenter={position}
              mapId="30946c4a5f450f07"
              mapTypeId="satellite"
            >
              {parking.map((item) => (
                <Polygon
                  key={item.id}
                  paths={item.coords}
                  strokeColor={
                    item.status === "available" ? "#34a653" : "#FF0000"
                  }
                  strokeOpacity={0.8}
                  strokeWeight={2}
                  fillColor={
                    item.status === "available" ? "#34a653" : "#FF0000"
                  }
                  fillOpacity={0.35}
                  tilt={item.parkingNum}
                  onClick={() => {
                    localStorage.setItem("parkingId", item.id);
                    handleParking(item.parkingNum);
                  }}
                />
              ))}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}


// export default BookInfo
export default GoogleApiWrapper({
  apiKey: "AIzaSyCOEE04AQC7gzfcMrUrmYoHiULXK7yJaeA",
})(BookInfo);

