import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const Reports = () => {


  return (

    <div className="dashboard">


      <Sidebar/>


      <div className="main">


        <Topbar/>




        <div className="cards">


          <div className="card">

            <h2>
              126
            </h2>

            <p>
              Total Users
            </p>

          </div>




          <div className="card">

            <h2>
              48
            </h2>

            <p>
              Active Drivers
            </p>

          </div>





          <div className="card">

            <h2>
              35
            </h2>

            <p>
              Total Buses
            </p>

          </div>





          <div className="card">

            <h2>
              212
            </h2>

            <p>
              Completed Trips
            </p>

          </div>



        </div>






        <div className="table-container">


          <h2>
            Operational Reports
          </h2>




          <table>


            <thead>

              <tr>

                <th>
                  Category
                </th>

                <th>
                  Result
                </th>

                <th>
                  Status
                </th>

              </tr>


            </thead>



            <tbody>


              <tr>

                <td>
                  Fleet Availability
                </td>

                <td>
                  32 / 35 Buses Available
                </td>

                <td>
                  Good
                </td>

              </tr>




              <tr>

                <td>
                  Driver Performance
                </td>

                <td>
                  94% Positive Rating
                </td>

                <td>
                  Excellent
                </td>

              </tr>





              <tr>

                <td>
                  Complaints
                </td>

                <td>
                  12 Pending Complaints
                </td>

                <td>
                  Needs Review
                </td>

              </tr>





              <tr>

                <td>
                  Delays
                </td>

                <td>
                  Average Delay: 15 minutes
                </td>

                <td>
                  Monitoring
                </td>

              </tr>


            </tbody>



          </table>





          <button className="btn btn-add">

            Generate Report

          </button>




        </div>



      </div>


    </div>

  );

};


export default Reports;