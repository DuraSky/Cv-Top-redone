import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CvGeneration from "./CvGeneration";
// import { CvGenerationEducation } from "./CvGeneration";

export default function Education({
  education,
  setEducation,
  educationArr,
  setEducationArr,
}) {
  const [editingSchool, setEditingSchool] = useState(null);
  const handleAddSchoolClick = () => {
    setEducationArr((prevEducationArr) => [...prevEducationArr, education]);
    setEducation({
      schoolName: "",
      degree: "",
      dateFrom: "",
      dateTill: "",
    });
  };

  return (
    <div>
      <h3>Education: </h3>
      <form className="form-floating">
        <div className="mb-3">
          <label htmlFor="schoolName" className="form-label">
            School Name
          </label>
          <input
            type="text"
            className="form-control"
            id="schoolName"
            value={education.schoolName}
            onChange={(event) =>
              setEducation((prevInfo) => ({
                ...prevInfo,
                schoolName: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control"
            id="degree"
            value={education.degree}
            onChange={(event) =>
              setEducation((prevInfo) => ({
                ...prevInfo,
                degree: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateFrom" className="form-label">
            Date From
          </label>
          <input
            type="date"
            className="form-control"
            id="dateFrom"
            value={education.dateFrom}
            onChange={(event) =>
              setEducation((prevInfo) => ({
                ...prevInfo,
                dateFrom: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateTill" className="form-label">
            Date Till
          </label>
          <input
            type="date"
            className="form-control"
            id="dateTill"
            value={education.dateTill}
            onChange={(event) =>
              setEducation((prevInfo) => ({
                ...prevInfo,
                dateTill: event.target.value,
              }))
            }
          />
        </div>
        <button
          type="button"
          className="add edu"
          onClick={handleAddSchoolClick}
        >
          Add School
        </button>
      </form>
      {educationArr.length > 0 && (
        <DisplaySchool
          educationArr={educationArr}
          setEducationArr={setEducationArr}
          setEducation={setEducation}
          education={education}
          setEditingSchool={setEditingSchool}
          editingSchool={editingSchool}
        />
      )}
    </div>
  );
}

function DisplaySchool({
  educationArr,
  setEducationArr,
  setEducation,
  education,
  setEditingSchool,
  editingSchool,
}) {
  const handleDelete = (school) => {
    // Filter out the selected school from the educationArr
    const updatedEducationArr = educationArr.filter(
      (schoolItem) => schoolItem !== school,
    );

    if (editingSchool === school) {
      setEditingSchool(null);
    }
    setEducationArr(updatedEducationArr);
  };

  const handleEdit = (school) => {
    setEducation({
      schoolName: school.schoolName,
      degree: school.degree,
      dateFrom: school.dateFrom,
      dateTill: school.dateTill,
    });
    setEditingSchool(school);
  };

  const handleSave = (school, updatedSchool) => {
    console.log(`this school`);
    console.log(school);
    console.log(`to update to this`);
    console.log(updatedSchool);

    // Update the education state
    setEducation(updatedSchool);

    // Update the educationArr state by creating a new array
    const updatedEducationArr = educationArr.map((edu) =>
      edu.schoolName === school.schoolName ? updatedSchool : edu,
    );
    setEducationArr(updatedEducationArr);
    setEditingSchool(null);
  };

  return educationArr.map((school) => {
    return (
      <div className="addedDiv" key={uuidv4()}>
        <p className="added">{school.schoolName}</p>
        <div className="buttons">
          <button
            type="button"
            className="butn "
            onClick={() => handleDelete(school)}
          >
            Delete
          </button>

          <button
            type="button"
            className="butn "
            onClick={() => handleEdit(school)}
            disabled={editingSchool !== null && editingSchool !== school} // Disable if another school is being edited
          >
            Edit
          </button>

          <button
            type="button"
            className="butn "
            onClick={() => handleSave(school, education)}
            disabled={editingSchool !== school} // Disable if the school is not being edited
          >
            Save
          </button>
        </div>
      </div>
    );
  });
}
