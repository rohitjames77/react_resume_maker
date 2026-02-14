 export default function ExtraEducationField3({ educationInfo, setEducationInfo }) {
const handleOnChange = (event) => {
  const { id, value } = event.target;
  setEducationInfo((prev) => ({
    ...prev,
    [id]: value,
  }));
};



  return (
    <div className="grid grid-rows-6 grid-cols-4 gap-y-6 m-4 mt-5 border-b-4 border-gray-400 p-8 ">
      <label htmlFor="school" className="text-gray-800 row-start-1 col-start-1 col-end-2">
        School
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-1 col-start-2 col-end-5"
        id="school3"
        value={educationInfo.school3}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className="text-gray-800 row-start-2 col-start-1 col-end-2">
        University
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-2 col-start-2 col-end-5"
        id="university3"
        value={educationInfo.university3}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree-name" className="text-gray-800 row-start-3 col-start-1 col-end-2">
        Degree
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-3 col-start-2 col-end-5"
        id="degreeName3"
        value={educationInfo.degree3}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="start-date" className="text-gray-800 row-start-4 col-start-1 col-end-2">
        Start Date
      </label>
      <input
        type="date"
        className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-4 col-start-2 col-end-5"
        id="startDate3"
        value={educationInfo.startDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="end-date" className="text-gray-800 row-start-5 col-start-1 col-end-2">
        End Date
      </label>
      <input
        type="date"
        className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-5 col-start-2 col-end-5"
        id="endDate3"
        value={educationInfo.endDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="location" className="text-gray-800 row-start-6 col-start-1 col-end-2">
        Location
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-6 col-start-2 col-end-5"
        id="location3"
        value={educationInfo.location3}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
    </div>
  );
}
