


 export default function ExtraEducationField2({ educationInfo, setEducationInfo }) {
  const handleOnChange = (event) => {
  const { id, value } = event.target;
  setEducationInfo((prev) => ({
    ...prev,
    [id]: value,
  }));
};

  return (
    <div className="grid grid-cols-2 gap-y-6 m-4 gap-y-6 m-4 mt-[5%] border-b-4 border-gray-400 p-8">
      <label htmlFor="school" className=" text-lg text-gray-800 row-start-1 col-start-1 col-end-2">
        School
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 text-gray-300 row-start-1 rounded-xl col-start-2 col-end-5"
        id="school2"
        value={educationInfo.school2}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className=" text-lg text-gray-800  row-start-2 col-start-1 col-end-2">
        University
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300  text-gray-300 rounded-xl row-start-2 col-start-2 col-end-5"
        id="university2"
        value={educationInfo.university2}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree-name" className="text-lg text-gray-800 row-start-3 col-start-1 col-end-2">
        Degree
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300  text-gray-300 rounded-xl row-start-3 col-start-2 col-end-5"
        id="degree2"
        value={educationInfo.degree2}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="start-date" className="text-lg text-gray-800 row-start-4 col-start-1 col-end-2">
        Start Date
      </label>
      <input
        type="date"
        className="bg-white border-1 border-gray-300  text-gray-300 rounded-xl row-start-4 col-start-2 col-end-5"
        id="startDate2"
        value={educationInfo.startDate2}
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
      <label htmlFor="end-date" className="text-lg text-gray-800 row-start-5 col-start-1 col-end-2">
        End Date
      </label>
      <input
        type="date"
        className="bg-white border-1 border-gray-300 text-gray-300 rounded-xl row-start-5 col-start-2 col-end-5"
        id="endDate2"
        value={educationInfo.endDate2}
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
    </div>
  );
}
