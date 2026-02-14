import ImageUpload from "../image/ImageUpload";

export default function ProgressBar({
  personalInfo,
  educationInfo,
  workExperience,
  image,
  setImage,
}) {
  const formProgressPercentCalc = (stateObject) => {
    const nonEmptyVal = Object.values(stateObject).filter(
      (index) => index.trim() !== "",
    ).length;
    const formProgPercent =
      (nonEmptyVal / Object.values(stateObject).length) * 100;

    return formProgPercent;
  };

  const personalFormProgress = formProgressPercentCalc(personalInfo);
  const educationFormProgress = formProgressPercentCalc(educationInfo);
  const workExpFormProgress = formProgressPercentCalc(workExperience);

  const progressArr = [
    personalFormProgress,
    educationFormProgress,
    workExpFormProgress,
  ];

  function totalProgressPercentCalc() {
    let totalProgress = 0;
    progressArr.map((index) => {
      totalProgress += index;
    });
    const unRoundedTotalProgress = totalProgress / 3;
    return unRoundedTotalProgress.toFixed(2);
  }

  const totalProgress = totalProgressPercentCalc();

  return (
    <div
      id=""
      className=" col-start-1 col-end-11 row-start-1 row-end-3 flex flex-col items-end bg-white text-gray-900 font-[roboto] text-lg gap-x-2 border-b-1 "
    >
      <ImageUpload image={image} setImage={setImage} />

      <div
        id="progress-bar"
        className="relative flex flex-row items-center w-full h-full p-2 text-9x1 text-gray-900 rounded-r-lg font-[roboto] text-lg gap-x-2"
      >
        <div
          id="progess-title-container"
          className=" absolute w-1/4 h-1/4 bottom-2 right-3 "
        >
          <h1
            id="progress-header "
            className=" h-full w-full relative font-[roboto] font-medium text-lg text-gray-800 "
          >
            Your progress so far<span className="ml-2">{totalProgress}%</span>
          </h1>
        </div>
      </div>
      <div id="progress-bar-icon-container" className="w-full h-[1.4vh] ">
        <div
          id="progress-bar-icon"
          className="h-full bg-indigo-600"
          style={{ width: totalProgress + "%" }}
        ></div>
      </div>
    </div>
  );
}
