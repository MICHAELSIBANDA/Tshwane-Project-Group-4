import "../styles/admin.css";


const AdminDashboard = () => {

  return (

    <div className="content">


      


      <p className="welcome">
        Welcome back, Admin. Manage users, drivers, buses and operations from here.
      </p>




      <div className="cards">


        <div className="card">

          <h2>
            3
          </h2>

          <p>
            Total Users
          </p>

        </div>




        <div className="card">

          <h2>
            2
          </h2>

          <p>
            Drivers
          </p>

        </div>




        <div className="card">

          <h2>
            2
          </h2>

          <p>
            Active Buses
          </p>

        </div>




        <div className="card">

          <h2>
            2
          </h2>

          <p>
            Complaints
          </p>

        </div>


      </div>





      <div className="dashboard-section">


        <h2>
          Recent Operations
        </h2>



        <table>


          <thead>

            <tr>

              <th>
                Operation
              </th>

              <th>
                Details
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>




          <tbody>


            <tr>

              <td>
                Bus Schedule
              </td>

              <td>
                Morning routes updated
              </td>

              <td>
                Active
              </td>

            </tr>



            <tr>

              <td>
                Driver Shift
              </td>

              <td>
                New shifts assigned
              </td>

              <td>
                Completed
              </td>

            </tr>




            <tr>

              <td>
                Complaints
              </td>

              <td>
                Passenger complaints review
              </td>

              <td>
                Pending
              </td>

            </tr>


          </tbody>


        </table>


      </div>


    </div>

  );

};


export default AdminDashboard;