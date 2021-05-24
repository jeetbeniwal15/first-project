import "../assets/css/AdminCard2.css";

function AdminCard2({ title, increment, value, progress, employees, total }) {
  return (
    <div className="d-flex row card-2">
      <div className="d-flex justify-content-between pb-3">
        <span>{title}</span>
        <span>{increment}</span>
      </div>
      <h4 className="text-start pb-3">{value}</h4>
      <div>{progress}</div>
      <span className="text-start ">
        {employees} <span>{total}</span>
      </span>
    </div>
  );
}

export default AdminCard2;
