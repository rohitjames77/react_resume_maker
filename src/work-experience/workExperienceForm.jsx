import ExtraExperienceForm2 from "./extraWorkExp2";
import ExtraExperienceForm3 from "./extraWorkExp3";
import { RiFileAddLine } from "react-icons/ri";

export default function WorkExperienceForm({
  workExperience,
  setWorkexp,
addWorkExp,
  setAddWorkExp
}) {
  
  
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setWorkexp({ ...workExperience, [id]: value });
  };
  
  const handleOnClick = function () {
    setAddWorkExp(!addWorkExp);
    if (!addWorkExp) {
      setWorkexp(
        Object.defineProperties(workExperience, {
          jobTitle2: { value: "" },
          jobTitle3: { value: "" },
          employer2: { value: "" },
          employer3: { value: "" },
          startDate2: { value: "" },
          startDate3: { value: "" },
          endDate2: { value: "" },
          endDate3: { value: "" },
          city2: { value: "" },
          city3: { value: "" },
          description2: { value: "" },
          description3: { value: "" },
        })
      );
  
    }
  };
    return (
      <div id="experience-form-container" className="bg-white h-full w-full text-gray-400 text-lg overflow-hidden p-2">
         <h2 className="text-2xl text-gray-800 font-bold ">Professional experience</h2>
             <div id="extraExperienceForm" className="grid grid-cols-2 gap-y-2 p-8 ">
        <label htmlFor="" className="text-lg font-[roboto] text-gray-800 row-start-1 col-start-1 col-end-2">
          Job Title
        </label>
        <input
          type="text"
          maxLength={40}
          id="jobTitle"
          className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-1 col-start-2 col-end-5 items-end"
          value={workExperience.jobTitle}
          onChange={handleOnChange}
          required
        ></input>

        <label htmlFor="Employer" className="text-lg font-[roboto] text-gray-800 row-start-2 col-start-1 col-end-2">
          Employer
        </label>
        <input
          type="text"
          id="employer"
          className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-2 col-start-2 col-end-5 items-end"
          value={workExperience.employer}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="startDate" className="text-lg font-[roboto] text-gray-800 row-start-3 col-start-1 col-end-2">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className="bg-white border-1 border-gray-300 text-gray-200 rounded-xl row-start-3 col-start-2 col-end-5 items-end"
          value={workExperience.startDate}
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
        <label htmlFor="endDate" className="text-lg font-[roboto] text-gray-800 row-start-4 col-start-1 col-end-2">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          className="bg-white border-1 border-gray-300 text-gray-200 rounded-xl row-start-4 col-start-2 col-end-5 items-end"
          value={workExperience.endDate}
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
        <label htmlFor="city" className="text-lg font-[roboto] text-gray-800 row-start-5 col-start-1 col-end-2">City </label>
        <input
          type="text"
          id="city"
          className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-5 col-start-2 col-end-5 items-end"
          value={workExperience.city}
          onChange={handleOnChange}
        ></input>
        <label htmlFor="description" className="text-lg font-[roboto] text-gray-800 row-start-6 col-start-1 col-end-2">Description </label>
        <input
          type="text"
          id="description"
          className="bg-white border-1 border-gray-300 text-gray-800 rounded-xl row-start-6 col-start-2 col-end-5 items-end"
          value={workExperience.description}
          onChange={handleOnChange}
        ></input>
        </div>
       <ExtraExperienceForm2
            workExperience={workExperience}
            setWorkexp={setWorkexp}
          />
      
      </div>
    );
  }

  