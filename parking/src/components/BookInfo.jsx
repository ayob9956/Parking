import { useState } from "react";

function BookInfo() {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    date: "",
    // ... أضف المزيد من حقول الحجز اللازمة هنا
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // قم بمعالجة بيانات الحجز هنا (مثلاً إرسالها إلى الخادم أو تنفيذ إجراء معين)
    console.log(bookingData);
  };

  return (
    <div className="card p-6">
      <h3 className="text-2xl font-bold mb-4">احجز موقفك</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="name" className="label">
            الاسم:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingData.name}
            onChange={handleInputChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="email" className="label">
            البريد الإلكتروني:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="date" className="label">
            تاريخ الحجز:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
            className="input input-bordered"
            required
          />
        </div>

        {/* ... أضف المزيد من حقول الحجز هنا */}

        <button type="submit" className="btn btn-primary mt-4">
          حجز الموقف
        </button>
      </form>
    </div>
  );
}

export default BookInfo;