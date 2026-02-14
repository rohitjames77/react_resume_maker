import { useState } from "react";
import ProgressBar from "./progress-header/progressBar";
import PersonalForm from "./personal/personalForm";
import EducationForm from "./education/educationForm";
import WorkExperienceForm from "./work-experience/workExperienceForm";
import SummaryForm from "./personal/Summary";
import ResumeTemplate1 from "./templates/ResumeTemplate1";

export default function MainPage() {
  const [formId, setFormId] = useState(0);
  const [image, setImage] = useState(null);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    university: "",
    city: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [workExperience, setWorkexp] = useState({
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
    city: "",
    description: "",
  });

  const [summary, setSummary] = useState("");
 

  return (
    <div
      id="main-page-container"
      className="bg-gray-400 h-screen w-screen flex flex-row "
    >
      <div
        id="progess-form-container"
        className="grid grid-cols-10 grid-rows-10 h-[95vh] w-1/2 m-8 bg-white rounded-lg overflow-hidden "
      >
        <ProgressBar
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          workExperience={workExperience}
          summary={summary}
          image={image}
          setImage={setImage}
        />
        <div
          id="all-form-container"
          className="col-start-1 col-end-11 row-start-3 row-end-11 overflow-hidden h-full w-full overflow-y-scroll "
        >
          <PersonalForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EducationForm
            personalInfo={personalInfo}
            formId={formId}
            setFormId={setFormId}
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
          
          />
          <WorkExperienceForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            workExperience={workExperience}
            setWorkexp={setWorkexp}
          />
          <SummaryForm summary={summary} setSummary={setSummary} />
        </div>
      </div>
      <ResumeTemplate1
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workExperience={workExperience}
        summary={summary}
  
        image={image}
      />
    </div>
  );
}
