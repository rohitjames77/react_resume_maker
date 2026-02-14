export default function ExtraExperienceForm2({ workExperience, setWorkexp }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setWorkexp({ ...workExperience, [id]: value });
  };

  return (
    <div id="extraExperienceForm" className="grid grid-cols-2 gap-y-6 p-8">
      <label
        htmlFor="jobTitle2"
        className="text-gray-800 row-start-1 col-start-1 col-end-2"
      >
        Job Title
      </label>
      <input
        type="text"
        maxLength={40}
        id="jobTitle2"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-1 rounded-xl col-start-2 col-end-5"
        value={workExperience.jobTitle2}
        onChange={handleOnChange}
        required
      ></input>

      <label
        htmlFor="Employer"
        className="text-gray-800 row-start-2 col-start-1 col-end-2"
      >
        Employer
      </label>
      <input
        type="text"
        id="employer2"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-2 rounded-xl col-start-2 col-end-5"
        value={workExperience.employer2}
        onChange={handleOnChange}
        required
      ></input>
      <label
        htmlFor="startDate"
        className="text-gray-800 row-start-3 col-start-1 col-end-2"
      >
        Start Date
      </label>
      <input
        type="date"
        id="startDate2"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-3 rounded-xl col-start-2 col-end-5"
        value={workExperience.startDate2}
        onChange={handleOnChange}
        OnKeyDown={(e) => {
          const input = e.target;
          const currentValue = input.value;
          if (e.key.match(/[0-9/-]/)) {
            const parts = currentValue.split("-");
            if (parts.length === 3 && parts[0].length >= 4) {
              e.preventDefault();
              return;
            }
            e.stopPropagation();
          }
        }}
        required
      ></input>
      <label
        htmlFor="endDate"
        className="text-gray-800 row-start-4 col-start-1 col-end-2"
      >
        End Date
      </label>
      <input
        type="date"
        id="endDate2"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-4 rounded-xl col-start-2 col-end-5"
        value={workExperience.endDate2}
        onChange={handleOnChange}
        OnKeyDown={(e) => {
          const input = e.target;
          const currentValue = input.value;

          if (e.key.match(/[0-9/-]/)) {
            const parts = currentValue.split("-");
            if (parts.length === 3 && parts[0].length >= 4) {
              e.preventDefault();
              return;
            }
            e.stopPropagation();
          }
        }}
        required
      ></input>
      <label
        htmlFor="city"
        className="text-gray-800 row-start-5 col-start-1 col-end-2"
      >
        City{" "}
      </label>
      <input
        type="text"
        id="city2"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-5 rounded-xl col-start-2 col-end-5"
        value={workExperience.city2}
        onChange={handleOnChange}
      ></input>
      <label
        htmlFor="description"
        className="text-gray-800 row-start-6 col-start-1 col-end-2"
      >
        Description{" "}
      </label>
      <input
        type="text"
        id="description2"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-6 rounded-xl col-start-2 col-end-5"
        value={workExperience.description2}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
