import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const Drivers = () => {


  const [drivers, setDrivers] = useState([

    {
      id:1,
      name:"John Smith",
      email:"john@gmail.com",
      bus:"BUS-102",
      shift:"Morning",
      complaints:2,
      status:"Active"
    },

    {
      id:2,
      name:"David Lee",
      email:"david@gmail.com",
      bus:"BUS-205",
      shift:"Night",
      complaints:0,
      status:"Active"
    }

  ]);



  const [newDriver,setNewDriver] = useState({

    name:"",
    email:"",
    bus:"",
    shift:"Morning",
    complaints:0,
    status:"Active"

  });




  // ADD DRIVER

  const addDriver = ()=>{


    if(!newDriver.name || !newDriver.bus){

      alert("Please enter driver name and bus");

      return;

    }


    setDrivers([

      ...drivers,

      {
        id:Date.now(),
        ...newDriver
      }

    ]);



    setNewDriver({

      name:"",
      email:"",
      bus:"",
      shift:"Morning",
      complaints:0,
      status:"Active"

    });


  };





  // DELETE DRIVER

  const deleteDriver=(id)=>{


    setDrivers(

      drivers.filter(
        driver=>driver.id !== id
      )

    );


  };





  return (

    <div className="dashboard">


      <Sidebar/>


      <div className="main">


        <Topbar/>




        <div className="table-container">


          <h2>
            Driver Management
          </h2>





          <div className="form-container">



            <div className="form-group">

              <label>
                Driver Name
              </label>


              <input

              placeholder="Enter driver name"

              value={newDriver.name}

              onChange={(e)=>

                setNewDriver({

                  ...newDriver,

                  name:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Email
              </label>


              <input

              placeholder="Enter email"

              value={newDriver.email}

              onChange={(e)=>

                setNewDriver({

                  ...newDriver,

                  email:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Assigned Bus
              </label>


              <input

              placeholder="Bus number"

              value={newDriver.bus}

              onChange={(e)=>

                setNewDriver({

                  ...newDriver,

                  bus:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Shift
              </label>


              <select

              value={newDriver.shift}

              onChange={(e)=>

                setNewDriver({

                  ...newDriver,

                  shift:e.target.value

                })

              }

              >


                <option>
                  Morning
                </option>


                <option>
                  Afternoon
                </option>


                <option>
                  Night
                </option>


              </select>


            </div>





            <button

            className="btn btn-add"

            onClick={addDriver}

            >

              Add Driver

            </button>



          </div>






          <table>


            <thead>

              <tr>

                <th>
                  Name
                </th>


                <th>
                  Email
                </th>


                <th>
                  Bus
                </th>


                <th>
                  Shift
                </th>


                <th>
                  Complaints
                </th>


                <th>
                  Status
                </th>


                <th>
                  Action
                </th>


              </tr>

            </thead>





            <tbody>


              {

              drivers.map(driver=>(


                <tr key={driver.id}>


                  <td>
                    {driver.name}
                  </td>


                  <td>
                    {driver.email}
                  </td>


                  <td>
                    {driver.bus}
                  </td>


                  <td>
                    {driver.shift}
                  </td>


                  <td>
                    {driver.complaints}
                  </td>


                  <td>
                    {driver.status}
                  </td>


                  <td>


                    <button

                    className="btn btn-delete"

                    onClick={()=>
                      deleteDriver(driver.id)
                    }

                    >

                      Delete

                    </button>


                  </td>


                </tr>


              ))

              }


            </tbody>


          </table>



        </div>



      </div>


    </div>


  );

};


export default Drivers;