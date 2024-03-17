import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Experience({
  experience,
  setExperience,
  experienceArr,
  setExperienceArr,
}) {
  const [editingJob, setEditingJob] = useState(null);
  const handleAddExperienceClick = () => {
    setExperienceArr((prevExperienceArr) => [...prevExperienceArr, experience]);
    setExperience({
      company: "",
      position: "",
      dateFrom: "",
      dateTill: "",
    });
  };
  return (
    <div>
      <h3>Experience</h3>
      <form className="form-floating">
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            value={experience.company}
            onChange={(event) =>
              setExperience((prevInfo) => ({
                ...prevInfo,
                company: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={experience.position}
            onChange={(event) =>
              setExperience((prevInfo) => ({
                ...prevInfo,
                position: event.target.value,
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
            value={experience.dateFrom}
            onChange={(event) =>
              setExperience((prevInfo) => ({
                ...prevInfo,
                dateTill: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateTill" className="form-label">
            DateTill
          </label>
          <input
            type="date"
            className="form-control"
            id="dateTill"
            value={experience.dateTill}
            onChange={(event) =>
              setExperience((prevInfo) => ({
                ...prevInfo,
                dateFrom: event.target.value,
              }))
            }
          />
        </div>
        <button
          type="button"
          className="add exp"
          onClick={handleAddExperienceClick}
        >
          Add Company
        </button>
      </form>
      {experienceArr.length > 0 && (
        <DisplayExperience
          experienceArr={experienceArr}
          setExperienceArr={setExperienceArr}
          setExperience={setExperience}
          experience={experience}
          editingJob={editingJob}
          setEditingJob={setEditingJob}
        />
      )}
    </div>
  );
}

function DisplayExperience({
  experienceArr,
  setExperienceArr,
  setExperience,
  experience,
  editingJob,
  setEditingJob,
}) {
  const handleDelete = (job) => {
    // Filter out the selected school from the educationArr
    const updatedExperienceArr = experienceArr.filter(
      (experienceItem) => experienceItem !== job,
    );

    if (editingJob === job) {
      setEditingJob(null);
    }
    setExperienceArr(updatedExperienceArr);
  };

  const handleEdit = (job) => {
    setExperience({
      company: job.company,
      position: job.position,
      dateFrom: job.dateFrom,
      dateTill: job.dateTill,
    });
    setEditingJob(job);
  };

  const handleSave = (job, updatedJob) => {
    console.log(`this job`);
    console.log(job);
    console.log(`to update to this`);
    console.log(updatedJob);

    // Update the education state
    setExperience(updatedJob);

    // Update the educationArr state by creating a new array
    const updatedExperienceArr = experienceArr.map((j) =>
      j.company === job.company ? updatedJob : j,
    );
    setExperienceArr(updatedExperienceArr);
    setEditingJob(null);
  };

  return experienceArr.map((job) => {
    return (
      <div className="addedDiv" key={uuidv4()}>
        <p className="added">{job.company}</p>
        <div className="buttons">
          <button
            type="button"
            className="butn"
            onClick={() => handleDelete(job)}
          >
            Delete
          </button>

          <button
            type="button"
            className="butn"
            onClick={() => handleEdit(job)}
            disabled={editingJob !== null && editingJob !== job} // Disable if another school is being edited
          >
            Edit
          </button>

          <button
            type="button"
            className="butn"
            onClick={() => handleSave(job, experience)}
            disabled={editingJob !== job} // Disable if the school is not being edited
          >
            Save
          </button>
        </div>
      </div>
    );
  });
}
