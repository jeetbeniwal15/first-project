import "../assets/css/AdminDashboard.css";
import AdminCard from "../component/AdminCard";
import AdminCard2 from "../component/AdminCard2";
import AdminProgressBar from "../component/AdminProgressBar";
import { ReactComponent as Cubes } from "../assets/svg/cubes.svg";
import { ReactComponent as Chart1 } from "../assets/svg/chart-1.svg";
import { ReactComponent as Chart2 } from "../assets/svg/chart-2.svg";

function AdminDashboard() {
  return (
    <div className="page-wrapper">
      <section className="content container-fluid">
        <section1 className="d-flex row text-start p-3">
          <h1>Welcome Admin!</h1>
          <h2>Dashboard</h2>
        </section1>
        <section2 className="d-flex row p-3  ">
          <div className="col-3 ">
            <AdminCard img={<Cubes />} value={112} title={"Projects"} />
          </div>
          <div className="col-3">
            <AdminCard img={<Cubes />} value={44} title={"Clients"} />
          </div>
          <div className="col-3">
            <AdminCard img={<Cubes />} value={37} title={"Tasks"} />
          </div>
          <div className="col-3">
            <AdminCard img={<Cubes />} value={218} title={"Employees"} />
          </div>
        </section2>

        <section3 className="d-flex row p-3">
          <div className="col-6 ">
            <div className="card ">
              <h3 className="mb-5">Total Revenue</h3>
              <p>
                <Chart1 className="img-fluid" />
              </p>
            </div>
          </div>

          <div className="col-6 ">
            <div className="card ">
              <h3 className="mb-5">Sales Overview</h3>
              <p>
                <Chart2 className="img-fluid" />
              </p>
            </div>
          </div>
        </section3>
        <section4 className="d-flex row p-3">
          <div className="col-3">
            <div className="card">
              <AdminCard2
                title={"New Employees"}
                increment={"+10%"}
                value={10}
                progress={<AdminProgressBar />}
                employees={"Overall Employees"}
                total={560}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <AdminCard2
                title={"Earnings"}
                increment={"+10%"}
                value={10}
                progress={<AdminProgressBar />}
                employees={"Previous Month"}
                total={213478}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <AdminCard2
                title={"Expenses"}
                increment={"+10%"}
                value={10}
                progress={<AdminProgressBar />}
                employees={"Previous Month"}
                total={11345}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <AdminCard2
                title={"Profit"}
                increment={"+10%"}
                value={10}
                progress={<AdminProgressBar />}
                employees={"Previous Month"}
                total={560}
              />
            </div>
          </div>
        </section4>
        <section5 className="d-flex row p-3">
          <div className="col-4 card">
            <div className="text-start mb-3 card-title">Statistics</div>
            <div className="card mb-1">
              <div className="d-flex justify-content-between mb-3">
                <span>Today Leave</span>
                <span>4/65</span>
              </div>
              <div>
                <AdminProgressBar />
              </div>
            </div>
          </div>
          <div>card1</div>
          <div>card1</div>
        </section5>
      </section>
    </div>
  );
}

export default AdminDashboard;
