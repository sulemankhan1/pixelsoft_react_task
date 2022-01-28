import { Link } from "react-router-dom";

import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className="main-header">
      <h2>
        <Link to="/">Dashboard</Link>
      </h2>
    </div>
  );
};

export default MainHeader;
