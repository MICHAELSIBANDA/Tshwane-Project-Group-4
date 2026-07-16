import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const Schedules = () => {


  const [schedules, setSchedules] = useState([

    {
      id:1,
      bus:"BUS-102",
      driver:"John Smith",
      route:"Downtown - Airport",
      departure:"08:00",
      arrival:"09:30",
      status:"Scheduled"
    },

    {
      id:2,
      bus:"BUS-205",
      driver:"David Lee",
      route:"University Route",
      departure:"10:00",
      arrival:"11:15",
      status:"Completed"
    }

  ]);




  const [newSchedule,setNewSchedule] = useState({

    bus:"",
    driver:"",
    route:"",
    departure:"",
    arrival:"",
    status:"Scheduled"

  });





  const addSchedule = () => {


    if(!newSchedule.bus || !newSchedule.route){

      alert("Please enter bus and route");

      return;

    }



    setSchedules([

      ...schedules,

      {
        id:Date.now(),
        ...newSchedule
      }

    ]);



    setNewSchedule({

      bus:"",
      driver:"",
      route:"",
      departure:"",
      arrival:"",
      status:"Scheduled"

    });


  };





  const deleteSchedule=(id)=>{


    setSchedules(

      schedules.filter(
        schedule=>schedule.id !== id
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
            Bus Scheduling
          </h2>





          <div className="form-container">


            <div className="form-group">

              <label>
                Bus Number
              </label>


              <input

              placeholder="BUS-101"

              value={newSchedule.bus}

              onChange={(e)=>

                setNewSchedule({

                  ...newSchedule,

                  bus:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Driver
              </label>


              <input

              placeholder="Driver name"

              value={newSchedule.driver}

              onChange={(e)=>

                setNewSchedule({

                  ...newSchedule,

                  driver:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Route
              </label>


              <input

              placeholder="Route"

              value={newSchedule.route}

              onChange={(e)=>

                setNewSchedule({

                  ...newSchedule,

                  route:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Departure Time
              </label>


              <input

              type="time"

              value={newSchedule.departure}

              onChange={(e)=>

                setNewSchedule({

                  ...newSchedule,

                  departure:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Arrival Time
              </label>


              <input

              type="time"

              value={newSchedule.arrival}

              onChange={(e)=>

                setNewSchedule({

                  ...newSchedule,

                  arrival:e.target.value

                })

              }

              />


            </div>





            <button

            className="btn btn-add"

            onClick={addSchedule}

            >

              Add Schedule

            </button>



          </div>






          <table>


            <thead>

              <tr>

                <th>
                  Bus
                </th>

                <th>
                  Driver
                </th>

                <th>
                  Route
                </th>

                <th>
                  Departure
                </th>

                <th>
                  Arrival
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

            schedules.map(schedule=>(


              <tr key={schedule.id}>


                <td>
                  {schedule.bus}
                </td>


                <td>
                  {schedule.driver}
                </td>


                <td>
                  {schedule.route}
                </td>


                <td>
                  {schedule.departure}
                </td>


                <td>
                  {schedule.arrival}
                </td>


                <td>
                  {schedule.status}
                </td>


                <td>

                  <button

                  className="btn btn-delete"

                  onClick={()=>
                    deleteSchedule(schedule.id)
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


export default Schedules;