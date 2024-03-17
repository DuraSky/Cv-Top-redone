import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./components/style.css";

import PersonalInfo from "./components/personalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvGeneration from "./components/CvGeneration";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John",
    surname: "Doe",
    birth: "1998-01-01",
    email: "john.doe@gmail.com",
    address: "Evergreen 42, London",
  });

  const [educationArr, setEducationArr] = useState([]);
  const [education, setEducation] = useState({
    schoolName: "Harward",
    degree: "Lawyer",
    dateFrom: "1998-01-02",
    dateTill: "2006-02-02",
  });

  const [experienceArr, setExperienceArr] = useState([]);
  const [experience, setExperience] = useState({
    company: "Lawyers&Co",
    position: "Partner",
    dateFrom: "2007-03-04",
    dateTill: "2023-02-12",
  });

  return (
    <React.StrictMode>
      <div className="inputs">
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Education
          education={education}
          setEducation={setEducation}
          educationArr={educationArr}
          setEducationArr={setEducationArr}
        />
        <Experience
          experience={experience}
          setExperience={setExperience}
          experienceArr={experienceArr}
          setExperienceArr={setExperienceArr}
        />
      </div>
      <CvGeneration
        personalInfo={personalInfo}
        educationArr={educationArr}
        experienceArr={experienceArr}
      />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
