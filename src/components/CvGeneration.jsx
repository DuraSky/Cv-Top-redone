export default function CvGeneration({
  personalInfo,
  educationArr,
  experienceArr,
}) {
  const { name, surname, birth, email, address } = personalInfo;

  return (
    <div className="generation">
      <div className="personalInfo section">
        <h2>Personal Info</h2>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Surname:</b> {surname}
        </p>
        <p>
          <b>Birth:</b> {birth}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>
        <p>
          <b>Address:</b> {address}
        </p>
      </div>

      <div className="educationDiv section">
        <h2>Education</h2>
        {educationArr.map((school, index) => (
          <div key={index}>
            <p>
              <b>School Name:</b> {school.schoolName}
            </p>
            <p>
              <b>Degree:</b> {school.degree}
            </p>
            <p>
              <b>Date From:</b> {school.dateFrom}
            </p>
            <p>
              <b>Date Till:</b> {school.dateTill}
            </p>
          </div>
        ))}
      </div>

      <div className="experienceDiv section">
        <h2>Work Experience</h2>
        {experienceArr.map((job, index) => (
          <div key={index}>
            <p>
              <b>Company Name:</b> {job.company}
            </p>
            <p>
              <b>Position: </b>
              {job.position}
            </p>
            <p>
              <b>Date From:</b> {job.dateFrom}
            </p>
            <p>
              <b>Date Till:</b> {job.dateTill}
            </p>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>Created by</p>
        <p>
          <b>DuraSky</b>
        </p>
      </div>
    </div>
  );
}
