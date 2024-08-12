import React from "react";

const NotFound: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    color: "#343a40",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    overflow:"hidden"
    
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "4rem",
    margin: "0",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1.5rem",
  };

  const linkStyle: React.CSSProperties = {
    marginTop: "20px",
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  };

  return (
    <div style={{ height: "100vh", width: "100%",overflowY:"hidden"}}>
      <div style={pageStyle}>
        <h1 style={headingStyle}>404</h1>
        <p style={paragraphStyle}>Page Not Found</p>
        <a href="/" style={linkStyle}>
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
