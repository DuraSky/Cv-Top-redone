import { useState } from "react";
import CvGeneration from "./CvGeneration";

export default function PersonalInfo({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <h3>Personal Information:</h3>
      <form className="form-floating">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={personalInfo.name}
            onChange={(event) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                name: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={personalInfo.surname}
            onChange={(event) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                surname: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="birth" className="form-label">
            Birth Date
          </label>
          <input
            type="date"
            className="form-control"
            id="birth"
            value={personalInfo.birth}
            onChange={(event) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                birth: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={personalInfo.email}
            onChange={(event) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                email: event.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={personalInfo.address}
            onChange={(event) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                address: event.target.value,
              }))
            }
          />
        </div>
      </form>
    </>
  );
}
