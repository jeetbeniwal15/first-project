import "../assets/css/AdminCard.css";

function AdminCard({ img, value, title }) {
  return (
    <div className="card ">
      <div className="d-flex justify-content-between align-items-center p-3">
        <span className="circle d-flex flex-column justify-content-center ">
          <span>{img}</span>
        </span>
        <div>
          <h1>{value}</h1>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
