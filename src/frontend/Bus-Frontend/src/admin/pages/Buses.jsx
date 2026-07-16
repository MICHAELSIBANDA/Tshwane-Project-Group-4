import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const Buses = () => {


  const [buses, setBuses] = useState([

    {
      id:1,
      number:"BUS-102",
      registration:"KDA-4521",
      capacity:50,
      route:"Downtown - Airport",
      driver:"John Smith",
      status:"Active"
    },

    {
      id:2,
      number:"BUS-205",
      registration:"KDB-7834",
      capacity:45,
      route:"City Centre - University",
      driver:"David Lee",
      status:"Maintenance"
    }

  ]);



  const [newBus,setNewBus] = useState({

    number:"",
    registration:"",
    capacity:"",
    route:"",
    driver:"",
    status:"Active"

  });





  // ADD BUS

  const addBus = () => {


    if(!newBus.number || !newBus.registration){

      alert("Please enter bus details");

      return;

    }



    setBuses([

      ...buses,

      {
        id:Date.now(),
        ...newBus
      }

    ]);



    setNewBus({

      number:"",
      registration:"",
      capacity:"",
      route:"",
      driver:"",
      status:"Active"

    });


  };





  // DELETE BUS

  const deleteBus=(id)=>{


    setBuses(

      buses.filter(
        bus=>bus.id !== id
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
            Bus Management
          </h2>




          <div className="form-container">


            <div className="form-group">

              <label>
                Bus Number
              </label>


              <input

              placeholder="Example BUS-101"

              value={newBus.number}

              onChange={(e)=>

                setNewBus({

                  ...newBus,

                  number:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Registration Number
              </label>


              <input

              placeholder="Registration"

              value={newBus.registration}

              onChange={(e)=>

                setNewBus({

                  ...newBus,

                  registration:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Capacity
              </label>


              <input

              type="number"

              placeholder="Passenger capacity"

              value={newBus.capacity}

              onChange={(e)=>

                setNewBus({

                  ...newBus,

                  capacity:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Route
              </label>


              <input

              placeholder="Bus route"

              value={newBus.route}

              onChange={(e)=>

                setNewBus({

                  ...newBus,

                  route:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Assigned Driver
              </label>


              <input

              placeholder="Driver name"

              value={newBus.driver}

              onChange={(e)=>

                setNewBus({

                  ...newBus,

                  driver:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Status
              </label>


              <select

              value={newBus.status}

              onChange={(e)=>

                setNewBus({

                  ...newBus,

                  status:e.target.value

                })

              }

              >


                <option>
                  Active
                </option>


                <option>
                  Maintenance
                </option>


                <option>
                  Inactive
                </option>


              </select>


            </div>





            <button

            className="btn btn-add"

            onClick={addBus}

            >

              Add Bus

            </button>



          </div>







          <table>


            <thead>

              <tr>

                <th>
                  Bus
                </th>

                <th>
                  Registration
                </th>

                <th>
                  Capacity
                </th>

                <th>
                  Route
                </th>

                <th>
                  Driver
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

            buses.map(bus=>(


              <tr key={bus.id}>


                <td>
                  {bus.number}
                </td>


                <td>
                  {bus.registration}
                </td>


                <td>
                  {bus.capacity}
                </td>


                <td>
                  {bus.route}
                </td>


                <td>
                  {bus.driver}
                </td>


                <td>
                  {bus.status}
                </td>


                <td>


                  <button

                  className="btn btn-delete"

                  onClick={()=>
                    deleteBus(bus.id)
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


export default Buses;