// import React from 'react'
const Navbar = () => {
  return (
    <div
      id="nav-container"
      className="d-flex align-items-center justify-content-between gap- bg-body-white px-4 py-2 shadow-sm rounded-5 mx-4 my-3"
    >
      <div id="logo">
        <div>
          <img src="TestLogo.svg" alt="" width={160} />
        </div>
      </div>
      <div id="nav" className="d-flex gap-3 justify-content-between">
        <div id="nav-links" className="d-flex p-1 gap-1">
          <img src="home.svg" alt="" width={14}/>
          <span className="fw-bold">Overview</span>
        </div>
        <div id="nav-links" className="d-flex p-1 gap-1">
          <img src="group.svg" alt="" width={20}/>
          <span className="fw-bold">Patients</span>
        </div>
        <div id="nav-links" className="d-flex p-1 gap-1">
          <img src="calendar.svg" alt="" width={13}/>
          <span className="fw-bold">Schedule</span>
        </div>
        <div id="nav-links" className="d-flex p-1 gap-1">
          <img src="chat.svg" alt="" width={15}/>
          <span className="fw-bold">Message</span>
        </div>
        <div id="nav-links" className="d-flex p-1 gap-1">
          <img src="card.svg" alt="" width={15}/>
          <span className="fw-bold">Transactions</span>
        </div>
      </div>
      <div id="right">
        <div>
          <img src="TestLogo.svg" alt="" width={150} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
