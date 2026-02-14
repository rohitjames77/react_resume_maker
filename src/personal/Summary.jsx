
export default function SummaryForm({summary,setSummary}){
  const handleOnChange = function (event) {
  setSummary(summary = event.target.value)
  };
return(
<div id="summary-container" className=" h-full w-full text-gray-400 text-xl p-2  ">
<label htmlFor="summary"className="text-gray-600 text-2xl font-[roboto] relative top-4" >Describe your Career Objective....</label>
<textarea id="summary" className="bg-gray-200 h-[80%] w-[85%] rounded-xl relative left-10 top-20 text-gray-800 text-xl font-[roboto]" value={summary} onChange={handleOnChange} required maxLength={200}>
</textarea>
</div>
)

}