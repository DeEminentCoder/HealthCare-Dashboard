// import React from 'react'
const Navbar = () => {
  return (
    <div
      id="nav-container"
      className="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center bg-body-white px-4 py-2 shadow-sm rounded-5 mx-2 my-2"
    >
      {/* Logo Section */}
      <div id="logo" className="mb-3 mb-md-0 text-md-start text-center">
        <img
          src="TestLogo.svg"
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: '150px' }}
        />
      </div>

      {/* Navigation Links */}
      <div
        id="nav"
        className="d-flex gap-2 justify-content-center align-items-center flex-wrap"
      >
        <div
          id="nav-links"
          className="d-flex py-1 px-2 btn"
          style={{ fontSize: '0.9rem' }}
        >
          <img src="home.svg" alt="Home" width={12} />
          <span className="fw-bold p-1">Overview</span>
        </div>
        <div
          id="nav-links"
          className="d-flex py-1 px-2 btn btn-info active rounded-5"
          style={{ fontSize: '0.9rem' }}
        >
          <img src="group.svg" alt="Group" width={16} />
          <span className="fw-bold p-1">Patients</span>
        </div>
        <div
          id="nav-links"
          className="d-flex py-1 px-2 btn"
          style={{ fontSize: '0.9rem' }}
        >
          <img src="calendar.svg" alt="Calendar" width={11} />
          <span className="fw-bold p-1">Schedule</span>
        </div>
        <div
          id="nav-links"
          className="d-flex py-1 px-2 btn"
          style={{ fontSize: '0.9rem' }}
        >
          <img src="chat.svg" alt="Chat" width={12} />
          <span className="fw-bold p-1">Message</span>
        </div>
        <div
          id="nav-links"
          className="d-flex py-1 px-2 btn"
          style={{ fontSize: '0.9rem' }}
        >
          <img src="card.svg" alt="Transactions" width={12} />
          <span className="fw-bold p-1">Transactions</span>
        </div>
      </div>

      {/* Right Section */}
      <div
        id="right"
        className="d-flex align-items-center justify-content-md-end justify-content-center gap-2 flex-wrap mt-2 mt-md-0"
      >
        <div
          id="right-links"
          className="d-flex align-items-center gap-2 btn flex-wrap justify-content-center text-center"
          style={{ fontSize: '0.85rem' }}
        >
          <img src="senior.png" alt="Doctor" height={30} />
          <div className="d-flex flex-column text-center text-md-start">
            <span className="fw-bold p-0">Dr. J. Simmons</span>
            <span className="text-muted p-0">Practitioner</span>
          </div>
        </div>
        <div id="settings" className="btn px-2">
          <img src="settings.svg" alt="Settings" width={12} />
        </div>
        <div id="more" className="btn ps-0">
          <img src="more.svg" alt="More" width={2} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
