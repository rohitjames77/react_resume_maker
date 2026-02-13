
import { FaPercentage } from "react-icons/fa";

export default function ProgressBar({
  personalInfo,
  educationInfo,
  workExperience,
}) {

   const formProgressPercentCalc = (stateObject) => {
    const nonEmptyVal = Object.values(stateObject).filter(
      (index) => index.trim() !== ""
    ).length;
    const formProgPercent = nonEmptyVal /Object.values(stateObject).length  *100
 
 
    return formProgPercent ; 
  }

  const personalFormProgress = formProgressPercentCalc(personalInfo)
const educationFormProgress = formProgressPercentCalc(educationInfo);
const workExpFormProgress = formProgressPercentCalc(workExperience);

const progressArr = [personalFormProgress,educationFormProgress,workExpFormProgress]
  
function totalProgressPercentCalc (){
  let totalProgress = 0;
  progressArr.map((index)=>{ totalProgress += index})
  const unRoundedTotalProgress= totalProgress/3  
return unRoundedTotalProgress.toFixed(2);
}

const tester = totalProgressPercentCalc()



  
  return (
  <div id="" className="flex flex-col  items-center w-full h-[10vh] bg-gray-100 text-9x1 text-gray-900 font-[roboto] text-lg gap-x-2">
    
    <div
    id="progress-bar"
    className=" flex flex-row  items-center w-full h-full bg-gray-200 p-2 text-9x1 text-gray-900 rounded-r-lg font-[roboto] text-lg gap-x-2"
    >

    <h1 id="progress-header " className="font-[roboto] font-medium text-3xl text-gray-500 ">Your Progress so Far</h1>
    <h1 id="percentage-header" className="font-[roboto] font-medium text-3xl text-gray-500 ">{tester}</h1>
   <FaPercentage className="fill-gray-500 h-[2.7vh] w-[2.7vh] ml-1 mb-1"/>
      
    </div>
  <div id="progress-bar-icon-container" className="w-full h-[1.2vh] "><div id="progress-bar-icon" className="h-full bg-gray-900" style={{width:tester+'%'}}></div></div>
  </div>
  );






  }


