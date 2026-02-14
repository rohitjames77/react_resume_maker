

export default function ResumeTemplate1  ({ personalInfo, educationInfo, workExperience, summary, image }) {
    
  return (
    <div className="w-[45%] ml-4 h-[95vh] bg-white shadow-lg p-8 my-8 rounded-lg">
    
      <header className="text-center border-b-2 border-gray-800 pb-6 mb-8">
      
        {image && (
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="text-sm text-gray-600 space-x-2">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.city && personalInfo.country && (
            <span>• {personalInfo.city}, {personalInfo.country}</span>
          )}
        </div>
        {personalInfo.address && (
          <div className="text-sm text-gray-600 mt-1">{personalInfo.address}</div>
        )}
      </header>

    
      {summary && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

    
      {(workExperience.jobTitle || workExperience.employer || 
        workExperience.jobTitle2 || workExperience.employer2 ||
        workExperience.jobTitle3 || workExperience.employer3) && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4 uppercase tracking-wide">
            Work Experience
          </h2>
          

          {(workExperience.jobTitle || workExperience.employer) && (
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {workExperience.jobTitle}
                  </h3>
                  <p className="text-gray-600 italic">{workExperience.employer}</p>
                </div>
                <div className="text-right">
                  {(workExperience.startDate || workExperience.endDate) && (
                    <p className="text-sm text-gray-600 font-semibold">
                      {workExperience.startDate} - {workExperience.endDate || 'Present'}
                    </p>
                  )}
                  {workExperience.city && (
                    <p className="text-sm text-gray-500">{workExperience.city}</p>
                  )}
                </div>
              </div>
              {workExperience.description && (
                <p className="text-gray-700 leading-relaxed mt-2">
                  {workExperience.description}
                </p>
              )}
            </div>
          )}

          {(workExperience.jobTitle2 || workExperience.employer2) && (
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {workExperience.jobTitle2}
                  </h3>
                  <p className="text-gray-600 italic">{workExperience.employer2}</p>
                </div>
                <div className="text-right">
                  {(workExperience.startDate2 || workExperience.endDate2) && (
                    <p className="text-sm text-gray-600 font-semibold">
                      {workExperience.startDate2} - {workExperience.endDate2 || 'Present'}
                    </p>
                  )}
                  {workExperience.city2 && (
                    <p className="text-sm text-gray-500">{workExperience.city2}</p>
                  )}
                </div>
              </div>
              {workExperience.description2 && (
                <p className="text-gray-700 leading-relaxed mt-2">
                  {workExperience.description2}
                </p>
              )}
            </div>
          )}

          {(workExperience.jobTitle3 || workExperience.employer3) && (
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {workExperience.jobTitle3}
                  </h3>
                  <p className="text-gray-600 italic">{workExperience.employer3}</p>
                </div>
                <div className="text-right">
                  {(workExperience.startDate3 || workExperience.endDate3) && (
                    <p className="text-sm text-gray-600 font-semibold">
                      {workExperience.startDate3} - {workExperience.endDate3 || 'Present'}
                    </p>
                  )}
                  {workExperience.city3 && (
                    <p className="text-sm text-gray-500">{workExperience.city3}</p>
                  )}
                </div>
              </div>
              {workExperience.description3 && (
                <p className="text-gray-700 leading-relaxed mt-2">
                  {workExperience.description3}
                </p>
              )}
            </div>
          )}
        </section>
      )}

      {(educationInfo.school || educationInfo.degree ||
        educationInfo.school2 || educationInfo.degree2 ||
        educationInfo.school3 || educationInfo.degree3) && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4 uppercase tracking-wide">
            Education
          </h2>
          
          {(educationInfo.school || educationInfo.degree) && (
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {educationInfo.degree}
                  </h3>
                  <p className="text-gray-600 italic">{educationInfo.school}</p>
                  {educationInfo.university && (
                    <p className="text-gray-600 text-sm">{educationInfo.university}</p>
                  )}
                </div>
                <div className="text-right">
                  {(educationInfo.startDate || educationInfo.endDate) && (
                    <p className="text-sm text-gray-600 font-semibold">
                      {educationInfo.startDate} - {educationInfo.endDate || 'Present'}
                    </p>
                  )}
                  {(educationInfo.city || educationInfo.location) && (
                    <p className="text-sm text-gray-500">
                      {educationInfo.city || educationInfo.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {(educationInfo.school2 || educationInfo.degree2) && (
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {educationInfo.degree2}
                  </h3>
                  <p className="text-gray-600 italic">{educationInfo.school2}</p>
                  {educationInfo.university2 && (
                    <p className="text-gray-600 text-sm">{educationInfo.university2}</p>
                  )}
                </div>
                <div className="text-right">
                  {(educationInfo.startDate2 || educationInfo.endDate2) && (
                    <p className="text-sm text-gray-600 font-semibold">
                      {educationInfo.startDate2} - {educationInfo.endDate2 || 'Present'}
                    </p>
                  )}
                  {educationInfo.city2 && (
                    <p className="text-sm text-gray-500">{educationInfo.city2}</p>
                  )}
                </div>
              </div>
            </div>
          )}


          {(educationInfo.school3 || educationInfo.degree3) && (
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {educationInfo.degree3}
                  </h3>
                  <p className="text-gray-600 italic">{educationInfo.school3}</p>
                  {educationInfo.university3 && (
                    <p className="text-gray-600 text-sm">{educationInfo.university3}</p>
                  )}
                </div>
                <div className="text-right">
                  {(educationInfo.startDate3 || educationInfo.endDate3) && (
                    <p className="text-sm text-gray-600 font-semibold">
                      {educationInfo.startDate3} - {educationInfo.endDate3 || 'Present'}
                    </p>
                  )}
                  {educationInfo.city3 && (
                    <p className="text-sm text-gray-500">{educationInfo.city3}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

