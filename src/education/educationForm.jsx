import ExtraEducationField2 from "./extraEduField2";
import ExtraEducationField3 from "./extraEduField3";
import { RiFileAddLine } from "react-icons/ri";

export default function EducationForm({
  educationInfo,
  setEducationInfo,
  addEduFields,
  setAddEduFields
}) {

  
const handleOnChange = (event) => {
  const { id, value } = event.target;
  setEducationInfo((prev) => ({
    ...prev,
    [id]: value,
  }));
  console.log(educationInfo);
  
};
      return (
      <div className=" h-full w-full bg-white text-gray-400 text-lg overflow-hidden border-gray-400 p-2" id="education-form-container">
      <h2 className="text-2xl text-gray-800 font-bold ">Educational details</h2>
     <form className=" grid grid-cols-2 gap-y-6 m-4 p-4  " id="education-form-container">
      <label htmlFor="school" className=" text-lg font-[roboto] text-gray-800 row-start-1 col-start-1 col-end-2">
        School
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-1 col-start-2 col-end-5 items-end"
        id="school"
        value={educationInfo.school}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className="  text-lg text-gray-800 row-start-2 col-start-1 col-end-2">
        University
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 rounded-xl row-start-2 col-start-2 col-end-5"
        id="university"
        value={educationInfo.university}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree" className=" text-lg text-gray-800 row-start-3 col-start-1 col-end-2">
        Degree
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 rounded-xl row-start-3 col-start-2 col-end-5"
        id="degree"
        value={educationInfo.degree}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="startDate" className=" text-lg text-gray-800 row-start-4 col-start-1 col-end-2">
        Start Date
      </label>
      <input
        type="date"
        className="bg-white border-1 border-gray-300 row-start-4 rounded-xl col-start-2 col-end-5"
        id="startDate"
        value={educationInfo.startDate}
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
      <label htmlFor="endDate" className=" text-lg text-gray-800 row-start-5 col-start-1 col-end-2">
        End Date
      </label>
      <input
        type="date"
        className="bg-white border-1 border-gray-300 row-start-5 rounded-xl col-start-2 col-end-5 font-gray-800"
        id="endDate"
        value={educationInfo.endDate}
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
      <label htmlFor="location" className=" text-lg text-gray-800 row-start-6 col-start-1 col-end-2">
        Location
      </label>
      <input
        type="text"
        className="bg-white border-1 border-gray-300 row-start-6 rounded-xl col-start-2 col-end-5"
        id="location"
        value={educationInfo.location}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
      </form>
    <ExtraEducationField2
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <ExtraEducationField3
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />

      </div>
     )
    }

 