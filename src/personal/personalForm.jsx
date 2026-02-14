

export default function PersonalForm({ personalInfo, setPersonalInfo }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setPersonalInfo({ ...personalInfo, [id]: value });
  };

  return (
    <div className="bg-white h-full w-full text-gray-400 text-xl flex flex-col p-8 " id="personal-form-container ">
      <h2 className="text-2xl text-gray-800 font-bold">Enter your personal details</h2>
      <form className="grid grid-cols-2  h-full w-full p-4" id="personal-form ">
        <label htmlFor="firstName" className="font-[roboto] font-medium text-lg text-gray-500">First Name</label>
        <input
          type="text"
          maxLength={30}
          className="bg-white border-1 border-gray-300 rounded-lg w-full h-1/2 text-gray-800 row-start-1 col-start-2 outline-none focus:outline-none"
          id="firstName"
          value={personalInfo.firstName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="lastName" className="font-[roboto] font-medium text-lg text-gray-500">Last Name</label>
        <input
          type="text"
          maxLength={30}
          className="bg-white border-1 border-gray-300 rounded-xl w-full h-1/2 text-gray-800 outline-none focus:outline-none"
          id="lastName"
          value={personalInfo.lastName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="email" className="font-[roboto] font-medium text-lg text-gray-500">Email</label>
        <input
          type="email"
          className="bg-white border-1 border-gray-300 rounded-xl w-full h-1/2 text-gray-800 outline-none focus:outline-none"
          id="email"
          value={personalInfo.email}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="phone" className="font-[roboto] font-medium text-lg text-gray-500">Phone</label>
        <input
          type="tel"
          className="bg-white border-1 border-gray-300 rounded-xl w-full h-1/2 text-gray-800 outline-none focus:outline-none"
          id="phone"
          value={personalInfo.phone}
          onChange={handleOnChange}
        />

        <label htmlFor="address" className="font-[roboto] font-medium text-lg text-gray-500">Address</label>
        <input
          type="text"
          className="bg-white border-1 border-gray-300 rounded-xl w-full h-1/2 text-gray-800 outline-none focus:outline-none"
          maxLength={100}
          id="address"
          value={personalInfo.address}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="city" className="font-[roboto] font-medium text-lg text-gray-500">City</label>
        <input
          type="text"
          className="bg-white border-1 border-gray-300 rounded-xl w-full h-1/2 text-gray-800 outline-none focus:outline-none"
          maxLength={60}
          id="city"
          value={personalInfo.city}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="country" className="font-[roboto] font-medium text-lg text-gray-500">Country</label>
        <input
          type="text"
          className="bg-white border-1 border-gray-300 rounded-xl w-full h-1/2 text-gray-800 outline-none focus:outline-none"
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