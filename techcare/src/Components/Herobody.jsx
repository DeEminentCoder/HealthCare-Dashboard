// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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

const patientData = [
  { name: "Emily Williams", info: "Female 18", image: "layer8.png" },
  { name: "Ryan Smith", info: "Female 18", image: "Layer 1.png" },
  { name: "David Lee", info: "Female 18", image: "Layer 2.png" },
  { name: "Brandon Jones", info: "Female 18", image: "Layer 3.png" },
  { name: "Jessicca Taylor", info: "Female 18", image: "Layer 4.png" },
  { name: "Samantha Johnson", info: "Female 18", image: "Layer 5.png" },
  { name: "Asley Wilson", info: "Female 18", image: "Layer 6.png" },
  { name: "Ashley Garcia", info: "Female 18", image: "Layer 7.png" },
  { name: "Christopher Rodriguez", info: "Female 18", image: "Layer 9.png" },
  { name: "Jessica Martinez", info: "Female 18", image: "Layer 12.png" },
  { name: "Jessica Martinez", info: "Female 18", image: "Layer 12.png" },
  { name: "Jessica Martinez", info: "Female 18", image: "Layer 12.png" },
  { name: "Jessica Martinez", info: "Female 18", image: "Layer 12.png" },
  { name: "Jessica Martinez", info: "Female 18", image: "Layer 12.png" },
];

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
              <img src="search.svg" alt="" width={13} />
            </div>
            {patientData.map((patient, index) => (
              <div
                key={index}
                className={`d-flex justify-content-between align-items-center pb-1 mb-1 px-3 ${
                  patient.name === "David Lee" ? "bg-info bg-opacity-25" : ""
                }`}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={patient.image}
                    alt={patient.name}
                    className="rounded-circle me-2"
                  />
                  <div className="mt-2">
                    <span className="patientname fw-bold">{patient.name}</span>
                    <p className="text-muted">{patient.info}</p>
                  </div>
                </div>
                <span className="fs-4">...</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="bg-white rounded p-3 shadow"
            style={{ height: "550px" }}
          >
            <h5 className="card-title mb-3 fw-bold">Diagnosis History</h5>
            <div className="d-flex justify-content-center">
              <Line options={options} data={data} height={130} />
              <br />
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body bg-info bg-opacity-25">
                    <h5 className="card-title">
                      <img src="respiratory rate.svg" alt="" width={70} />
                    </h5>
                    <small className="card-text">Respiratory rate</small>
                    <p className="card-text-bold fw-bold fs-5">20 bpm</p>
                    <small className="norm">Normal</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body bg-danger bg-opacity-10">
                    <h5 className="card-title">
                      <img src="temperature.svg" alt="" width={70} />
                    </h5>
                    <small className="card-text">Temperature</small>
                    <p className="card-text-bold fw-bold fs-5">98.6℉</p>
                    <small className="norm">Normal</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body bg-danger bg-opacity-10">
                    <h5 className="card-title">
                      <img src="HeartBPM.svg" alt="" width={70} />
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
            className="bg-white rounded mt-4 p-3 shadow overflow-auto"
            style={{ height: "250px" }}
          >
            <h5 className="mb-4 fw-bold">Diagnosis List</h5>
            <table className="table table-borderless">
              <thead className="norm table-light rounded-5">
                <tr>
                  <th className="text-start">Problem/Diagnosis</th>
                  <th className="text-start ">Description</th>
                  <th className="text-start">Status</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr>
                  <td className="text-start pt-4">Hypertension</td>
                  <td className="text-start pt-4">
                    High blood pressure condition
                  </td>
                  <td className="text-start pt-4 text-nowwrap text-break lh-sm">
                    Under <br /> Observation
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Type 2 Diabetes</td>
                  <td className="text-start">Chronic high blood pressure</td>
                  <td className="text-start">Cured</td>
                </tr>
                <tr>
                  <td className="text-start">Asthma</td>
                  <td className="text-start">Managed Managed</td>
                  <td className="text-start">Cured</td>
                </tr>
                <tr>
                  <td className="text-start">Asthma</td>
                  <td className="text-start">Managed Managed</td>
                  <td className="text-start">Cured</td>
                </tr>
                <tr>
                  <td className="text-start">Asthma</td>
                  <td className="text-start">Managed Managed</td>
                  <td className="text-start">Cured</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-3 pb-5">
          <div
            className="bg-white rounded p-3 shadow"
            style={{ height: "560px" }}
          >
            <center className="">
              <img src="Layer 2@2x.png" alt="" width={150} />
              <p className="mb-3 fw-bold mt-3">David Lee</p>
            </center>
            <div>
              <div className="p-2 d-flex align-items-center">
                <div className="pe-4">
                  <img src="InsuranceIcon.svg" alt="" width={30} />
                </div>
                <div className="selected-info">
                  <small>Date of Birth</small>
                  <br />
                  <small className="fw-bold">August 92, 1996</small>
                </div>
              </div>
              <div className="p-2 d-flex align-items-center">
                <div className="pe-4">
                  <img src="FemaleIcon.svg" alt="" width={30} />
                </div>
                <div className="selected-info">
                  <small>Gender</small>
                  <br />
                  <small className="fw-bold">Female</small>
                </div>
              </div>
              <div className="p-2 d-flex align-items-center">
                <div className="pe-4">
                  <img src="PhoneIcon.svg" alt="" width={30} />
                </div>
                <div className="selected-info">
                  <small>Contact Info.</small>
                  <br />
                  <small className="fw-bold">+234 810 373 9480</small>
                </div>
              </div>
              <div className="p-2 d-flex align-items-center">
                <div className="pe-4">
                  <img src="PhoneIcon.svg" alt="" width={30} />
                </div>
                <div className="selected-info">
                  <small>Emergency Contact</small>
                  <br />
                  <small className="fw-bold">+234 810 373 9480</small>
                </div>
              </div>
              <div className="p-2 d-flex align-items-center">
                <div className="pe-4">
                  <img src="InsuranceIcon.svg" alt="" width={30} />
                </div>
                <div className="selected-info">
                  <small>Insurance Provider</small>
                  <br />
                  <small className="fw-bold">Sunrise Health Assurance</small>
                </div>
              </div>
            </div>
            <center className="">
              <button className="btn btn-sm btn-info rounded-5 fw-medium mt-3 px-4">
                Show all information
              </button>
            </center>
          </div>
          <div
            className="bg-white mt-5 rounded p-3 shadow overflow-auto"
            style={{ height: "215px" }}
          >
            <h5 className="mb-3 fw-bold">Lab Results</h5>
            <div className="d-block">
              <div className="norm py-2 text-muted d-flex justify-content-between px-3">
                <span>Blood Test</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
              <div className="norm py-2 text-muted d-flex justify-content-between px-3 rounded-2 bg-light">
                <span>CT Scans</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
              <div className="norm py-2 text-muted d-flex justify-content-between px-3">
                <span>Hypertension</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
              <div className="norm py-2 text-muted d-flex justify-content-between px-3">
                <span>X-Rays</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
              <div className="norm py-2 text-muted d-flex justify-content-between px-3">
                <span>Hypertension</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
              <div className="norm py-2 text-muted d-flex justify-content-between px-3">
                <span>Hypertension</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
              <div className="norm py-2 text-muted d-flex justify-content-between px-3">
                <span>Hypertension</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
              <div className="norm py-2 text-muted d-flex justify-content-between px-3">
                <span>Hypertension</span>
                <img
                  src="download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                  width={15}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobody;
