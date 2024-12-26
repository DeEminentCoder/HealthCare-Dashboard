import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Weight (kg)",
      data: [70, 72, 75, 73, 76, 78, 80],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
      categoryPercentage: 0.8,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 10,
        },
      },
    },
    title: {
      display: true,
      text: "Patient Weight Over Time",
      font: {
        size: 12,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
};

const Herobody = () => {
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
  const username = "coalition";
  const password = "skills-test";
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  const [patientData, setPatientData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    getPatientData();
  }, []);

  const getPatientData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: authHeader,
        },
      })
      .then((res) => {
        console.log("Data fetched successfully:", res.data);
        setPatientData(res.data);
        if (res.data.length > 0) {
          setSelectedPatient(res.data[3]);
        }
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      });
  };

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3">
          <div
            className="bg-white rounded py-3 shadow overflow-auto"
            style={{ height: "825px" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3  px-3">
              <h5 className="card-title mb-0 fw-bold">Patients</h5>
              <img src="search.svg" alt="my.jpg" width={13} />
            </div>
            {patientData.length === 0 && (
              <center>
                <img
                  src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
                  alt="Loading"
                  width={200}
                />
                <p>Pls Connect Your Internet...</p>
              </center>
            )}
            {patientData.map((patient, index) => (
              <div
                key={index}
                className={`d-flex justify-content-between align-items-center pb-1 mb-1 px-3 ${
                  patient.name === selectedPatient?.name
                    ? "bg-info bg-opacity-25"
                    : ""
                }`}
                onClick={() => handlePatientSelect(patient)}
              >
                <div className="d-flex align-items-center px-1">
                  <img
                    src={patient.profile_picture}
                    alt={patient.name}
                    className="rounded-circle me-2"
                    width={50}
                  />
                  <div className="mt-2">
                    <span className="patientname fw-bold">{patient.name}</span>
                    <p className="text-muted">
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>
                <span className="fs-4">...</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="bg-white rounded p-3 shadow mb-4"
            style={{ minHeight: "550px" }}
          >
            <h5 className="card-title mb-3 fw-bold">Diagnosis History</h5>
            <div className="d-flex justify-content-center">
              <Line options={options} data={data} height={130} />
              <br />
            </div>
            <div className="row mt-4">
              <div className="col-md-4 py-2">
                <div className="card">
                  <div className="card-body bg-info bg-opacity-25">
                    <h5 className="card-title">
                      <img src="respiratory rate.svg" alt="my.jpg" width={70} />
                    </h5>
                    <small className="card-text">Respiratory rate</small>
                    <p className="card-text-bold fw-bold fs-5">20 bpm</p>
                    <small className="norm">Normal</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-2">
                <div className="card">
                  <div className="card-body bg-danger bg-opacity-10">
                    <h5 className="card-title">
                      <img src="temperature.svg" alt="my.jpg" width={70} />
                    </h5>
                    <small className="card-text">Temperature</small>
                    <p className="card-text-bold fw-bold fs-5">98.6℉</p>
                    <small className="norm">Normal</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-2">
                <div className="card">
                  <div className="card-body bg-danger bg-opacity-10">
                    <h5 className="card-title">
                      <img src="HeartBPM.svg" alt="my.jpg" width={70} />
                    </h5>
                    <small className="card-text">Heart rate</small>
                    <p className="card-text-bold fw-bold fs-5">78 bpm</p>
                    <div className="dropdown dropstart">
                      <small
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <small className="norm">Lower than average</small>
                      </small>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li className="">
                          <span className="dropdown-item text-muted" href="#">
                            View Details
                          </span>
                        </li>
                        <li>
                          <span className="dropdown-item text-muted" href="#">
                            View Details
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
          
  className="bg-white rounded p-3 shadow overflow-auto"
  style={{ height: "237px" }}
>
  <h5 className="mb-4 fw-bold">Diagnosis List</h5>
  <table className="table table-borderless">
    <thead className="norm table-light rounded-5">
      <tr>
        <th className="text-start">Problem/Diagnosis</th>
        <th className="text-start">Description</th>
        <th className="text-start">Status</th>
      </tr>
    </thead>
    <tbody className="text-muted">
      {selectedPatient?.diagnostic_list?.map((diagnosis, index) => (
        <tr key={index}>
          <td className="text-start pt-3">{diagnosis.name}</td>
          <td className="text-start pt-3">{diagnosis.description}</td>
          <td className="text-start pt-3 text-nowrap text-break lh-sm">
            {diagnosis.status}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  {patientData.length === 0 && (
              <center>
                <img
                  src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
                  alt="Loading"
                  width={70}
                />
                <p>Pls Connect Your Internet...</p>
              </center>
            )}
</div>

        </div>

        <div className="col-md-3 pb-5">
          <div
            className="bg-white rounded p-3 shadow"
            style={{ height: "560px" }}
          >
            {patientData.length === 0 && (
              <center>
                <img
                  src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
                  alt="Loading"
                  width={200}
                />
                <p>Pls Connect Your Internet...</p>
              </center>
            )}
            {selectedPatient && (
              <>
                <center className="">
                  <img
                    src={selectedPatient.profile_picture}
                    alt="my.jpg"
                    width={150}
                  />
                  <p className="mb-3 fw-bold mt-3">{selectedPatient.name}</p>
                </center>
                <div>
                  <div className="p-2 d-flex align-items-center">
                    <div className="pe-4">
                      <img src="InsuranceIcon.svg" alt="my.jpg" width={30} />
                    </div>
                    <div className="selected-info">
                      <small>Date of Birth</small>
                      <br />
                      <small className="fw-bold">
                        {selectedPatient.date_of_birth}
                      </small>
                    </div>
                  </div>
                  <div className="p-2 d-flex align-items-center">
                    <div className="pe-4">
                      <img src="FemaleIcon.svg" alt="my.jpg" width={30} />
                    </div>
                    <div className="selected-info">
                      <small>Gender</small>
                      <br />
                      <small className="fw-bold">
                        {selectedPatient.gender}
                      </small>
                    </div>
                  </div>
                  <div className="p-2 d-flex align-items-center">
                    <div className="pe-4">
                      <img src="PhoneIcon.svg" alt="my.jpg" width={30} />
                    </div>
                    <div className="selected-info">
                      <small>Contact Info.</small>
                      <br />
                      <small className="fw-bold">
                        {selectedPatient.phone_number}
                      </small>
                    </div>
                  </div>
                  <div className="p-2 d-flex align-items-center">
                    <div className="pe-4">
                      <img src="PhoneIcon.svg" alt="my.jpg" width={30} />
                    </div>
                    <div className="selected-info">
                      <small>Emergency Contact</small>
                      <br />
                      <small className="fw-bold">
                        {selectedPatient.emergency_contact}
                      </small>
                    </div>
                  </div>
                  <div className="p-2 d-flex align-items-center">
                    <div className="pe-4">
                      <img src="InsuranceIcon.svg" alt="my.jpg" width={30} />
                    </div>
                    <div className="selected-info">
                      <small>Insurance Provider</small>
                      <br />
                      <small className="fw-bold">
                        {selectedPatient.insurance_type}
                      </small>
                    </div>
                  </div>
                </div>
                <center className="">
                  <button className="btn btn-sm btn-info rounded-5 fw-medium mt-3 px-4">
                    Show all information
                  </button>
                </center>
              </>
            )}
          </div>
          <div
            className="bg-white mt-5 rounded p-3 shadow overflow-auto"
            style={{ height: "215px" }}
          >
            <h5 className="mb-3 fw-bold">Lab Results</h5>
            {patientData.length === 0 && (
              <center>
                <img
                  src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
                  alt="Loading"
                  width={100}
                />
                <p>Pls Connect Your Internet...</p>
              </center>
            )}
            <div className="d-block">
              {selectedPatient?.lab_results?.map((result, index) => (
                <div
                  className="norm py-2 text-muted d-flex justify-content-between px-3"
                  key={index}
                >
                  <span>{result}</span>
                  <img
                    src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                    alt="Download Icon"
                    width={15}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobody;
