

export default function ExtraExperienceForm3({ workExperience, setWorkexp }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setWorkexp({ ...workExperience, [id]: value });
  };


  return (
    <div id="extraExperienceForm" className="grid grid-cols-2 gap-y-6 border-b-4 border-gray-400 p-8">
      <label htmlFor="" className="text-gray-800 row-start-1 col-start-1 col-end-2">
        Job Title
      </label>
      <input
        type="text"
        maxLength={40}
        id="jobTitle3"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-1 rounded-xl col-start-2 col-end-5"
        value={workExperience.jobTitle3}
        onChange={handleOnChange}
        required
      ></input>

      <label htmlFor="Employer" className="text-gray-800 row-start-2 col-start-1 col-end-2">
        Employer
      </label>
      <input
        type="text"
        id="employer3"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-2 rounded-xl col-start-2 col-end-5"
        value={workExperience.employer3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="startDate" className="text-gray-800 row-start-3 col-start-1 col-end-2">
        Start Date
      </label>
      <input
        type="date"
        id="startDate3"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-3 rounded-xl col-start-2 col-end-5"
        value={workExperience.startDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="endDate" className="text-gray-800 row-start-4 col-start-1 col-end-2">
        End Date
      </label>
      <input
        type="date"
        id="endDate3"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-4 rounded-xl col-start-2 col-end-5"
        value={workExperience.endDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="city" className="text-gray-800 row-start-5 col-start-1 col-end-2">City </label>
      <input
        type="text"
        id="city3"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-5 rounded-xl col-start-2 col-end-5"
        value={workExperience.city3}
        onChange={handleOnChange}
      ></input>
      <label htmlFor="description" className="text-gray-800 row-start-6 col-start-1 col-end-2">Description </label>
      <input
        type="text"
        id="description3"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-6 rounded-xl col-start-2 col-end-5"
        value={workExperience.description3}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
