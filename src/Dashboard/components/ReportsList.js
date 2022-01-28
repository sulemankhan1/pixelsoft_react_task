import ReportItem from "./ReportItem";

import "./Reports.css";

const ReportsList = ({ reports }) => {
  if (reports.length === 0) {
    return <h2>No Reports Found</h2>;
  }
  return (
    <>
      {reports &&
        reports.map((report) => <ReportItem key={report.id} report={report} />)}
    </>
  );
};

export default ReportsList;
