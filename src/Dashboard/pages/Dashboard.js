import { useEffect, useState } from "react";
import ReportsList from "../components/ReportsList";

import "./Dashboard.css";

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/reports")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReports(data);
      });
  }, []);

  return (
    <>
      <main className="main-container">
        <ReportsList reports={reports} />
      </main>
    </>
  );
};

export default Dashboard;
