import Button from "../../shared/components/FormElements/Button";

const ReportItem = ({ report }) => {
  return (
    <div className="card report-card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <img
              src={report.image}
              alt={report.name}
              width="100%"
              className="img-thumbnail"
            />
          </div>
          <div className="col-md-8">
            <h2>{report.name}</h2>
            <p>{report.owner}</p>
            <p>{report.stars}</p>
            <p>{report.tags}</p>
            <p className="counter_">
              <strong>{report.viewsCount}</strong> views
            </p>
            <p className="counter_">
              <strong>{report.commentsCount}</strong> comments
            </p>
            <p className="counter_">
              <strong>{report.starsCount}</strong> stars
            </p>
            <Button to={`/reports/${report.id}`} size="small" inverse>
              Edit
            </Button>
            <Button size="small" danger>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportItem;
