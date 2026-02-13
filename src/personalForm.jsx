

export default function PersonalForm({ personalInfo, setPersonalInfo }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setPersonalInfo({ ...personalInfo, [id]: value });
  };

  return (
    <div className="bg-gray-100 w-full h-[80vh] text-gray-400 text-xl" id="personal-form-container ">
      <form className="grid grid-cols-2 gap-y-4 m-4" id="personal-form">
        <label htmlFor="first-name" className="font-[roboto] font-medium text-3xl">First Name</label>
        <input
          type="text"
          maxLength={30}
          className="bg-slate-200 rounded-xl w-full text-gray-500 row-start-1 col-start-2"
          id="firstName"
          value={personalInfo.firstName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="lastName" className="font-[roboto] font-medium text-3xl">Last Name</label>
        <input
          type="text"
          maxLength={30}
          className="bg-slate-200 rounded-xl w-full text-gray-500"
          id="lastName"
          value={personalInfo.lastName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="email" className="font-[roboto] font-medium text-3xl">Email</label>
        <input
          type="email"
          className="bg-slate-200 rounded-xl w-full text-gray-500"
          id="email"
          value={personalInfo.email}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="phone" className="font-[roboto] font-medium text-3xl">Phone</label>
        <input
          type="tel"
          className="bg-slate-200 rounded-xl w-full text-gray-500"
          id="phone"
          value={personalInfo.phone}
          onChange={handleOnChange}
        />

        <label htmlFor="address" className="font-[roboto] font-medium text-3xl">Address</label>
        <input
          type="text"
          className="bg-slate-200 rounded-xl w-full text-gray-500"
          maxLength={100}
          id="address"
          value={personalInfo.address}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="city" className="font-[roboto] font-medium text-3xl">City</label>
        <input
          type="text"
          className="bg-slate-200 rounded-xl w-full text-gray-500"
          maxLength={60}
          id="city"
          value={personalInfo.city}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="country" className="font-[roboto] font-medium text-3xl">Country</label>
        <input
          type="text"
          className="bg-slate-200 rounded-xl w-full text-gray-500"
          maxLength={60}
          id="country"
          value={personalInfo.country}
          onChange={handleOnChange}
          required
        />
      </form>
    </div>
  );
}