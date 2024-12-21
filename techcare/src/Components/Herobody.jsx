// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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
  { name: 'Emily Williams', info: "Female 18", image: "layer8.png"},
  { name: 'Ryan Smith', info: "Female 18", image: "Layer 1.png" },
  { name: 'David Lee', info: "Female 18", image: "Layer 2.png" },
  { name: 'Brandon Jones', info: "Female 18", image: "Layer 3.png" },
  { name: 'Jessicca Taylor', info: "Female 18", image: "Layer 4.png" },
  { name: 'Samantha Johnson', info: "Female 18", image: "Layer 5.png" },
  { name: 'Asley Wilson', info: "Female 18", image: "Layer 6.png" },
  { name: 'Ashley Garcia', info: "Female 18", image: "Layer 7.png" },
  { name: 'Christopher Rodriguez', info: "Female 18", image: "Layer 9.png" },
  { name: 'Jessica Martinez', info: "Female 18", image: "Layer 12.png" },
  { name: 'Jessica Martinez', info: "Female 18", image: "Layer 12.png" },
  { name: 'Jessica Martinez', info: "Female 18", image: "Layer 12.png" },
  { name: 'Jessica Martinez', info: "Female 18", image: "Layer 12.png" },
  { name: 'Jessica Martinez', info: "Female 18", image: "Layer 12.png" },
];

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Weight (kg)',
      data: [70, 72, 75, 73, 76, 78],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Patient Weight Over Time',
    },
  },
};

const Herobody = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="bg-white rounded p-3 shadow overflow-auto" style={{ height: '850px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="card-title mb-0 fw-bold">Patients</h5>
              <img src="search.svg" alt="" width={13}/>
            </div>
            {patientData.map((patient, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center pb-2 mb-2">
                <div className="d-flex align-items-center">
                  <img src={patient.image} alt={patient.name} className="rounded-circle me-2 "/>
                  <div>
                    <span className='patientname fw-bold'>{patient.name}</span>
                    <p className="text-muted">{patient.info}</p>
                  </div>
                </div>
                <span>...</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-white rounded p-3 shadow" style={{ height: '500px' }}>
            <h5 className="card-title mb-3 fw-bold">Diagnosis History</h5>
            <div className="d-flex justify-content-center">
              <Line options={options} data={data} />
            </div>
            <div className="row mt-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card {i + 1}</h5>
                      <p className="card-text">Card {i + 1} Content Goes Here</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded mt-5 p-3 shadow" style={{ height: '300px' }}>
            <h5 className="card-title mb-3 fw-bold">Diagnosis History</h5>
            <div className="d-flex justify-content-center">
              {/* <Line options={options} data={data} /> */}
            </div>
            <div className="row mt-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card {i + 1}</h5>
                      <p className="card-text">Card {i + 1} Content Goes Here</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-3 pb-5">
          <div className="bg-white rounded p-3 shadow overflow-auto" style={{ height: '560px' }}>
            <h5 className="mb-3">Patient Details</h5>
            <div className="alert alert-info" role="alert">
              Highlighted Patient Information
            </div>
          </div>
          <div className="bg-white mt-5 rounded p-3 shadow overflow-auto" style={{ height: '240px' }}>
            <h5 className="mb-3">Patient Details</h5>
            <div className="alert alert-info" role="alert">
              Highlighted Patient Information
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobody;