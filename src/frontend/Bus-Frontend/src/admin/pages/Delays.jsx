import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const Delays = () => {


  const [delays, setDelays] = useState([

    {
      id:1,
      bus:"BUS-102",
      route:"Downtown - Airport",
      reason:"Heavy Traffic",
      minutes:20,
      date:"2026-01-15",
      status:"Active"
    },

    {
      id:2,
      bus:"BUS-205",
      route:"University Route",
      reason:"Mechanical Issue",
      minutes:35,
      date:"2026-01-10",
      status:"Resolved"
    }

  ]);



  const [newDelay, setNewDelay] = useState({

    bus:"",
    route:"",
    reason:"",
    minutes:"",
    date:"",
    status:"Active"

  });





  // ADD DELAY

  const addDelay = () => {


    if(!newDelay.bus || !newDelay.reason){

      alert("Please enter delay details");

      return;

    }



    setDelays([

      ...delays,

      {
        id:Date.now(),
        ...newDelay
      }

    ]);



    setNewDelay({

      bus:"",
      route:"",
      reason:"",
      minutes:"",
      date:"",
      status:"Active"

    });


  };





  // DELETE DELAY

  const deleteDelay = (id) => {


    setDelays(

      delays.filter(
        delay => delay.id !== id
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
            Delay Management
          </h2>





          <div className="form-container">


            <div className="form-group">

              <label>
                Bus Number
              </label>


              <input

              placeholder="BUS-101"

              value={newDelay.bus}

              onChange={(e)=>

                setNewDelay({

                  ...newDelay,

                  bus:e.target.value

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

              value={newDelay.route}

              onChange={(e)=>

                setNewDelay({

                  ...newDelay,

                  route:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Delay Reason
              </label>


              <input

              placeholder="Reason"

              value={newDelay.reason}

              onChange={(e)=>

                setNewDelay({

                  ...newDelay,

                  reason:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Delay Minutes
              </label>


              <input

              type="number"

              placeholder="Minutes"

              value={newDelay.minutes}

              onChange={(e)=>

                setNewDelay({

                  ...newDelay,

                  minutes:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Date
              </label>


              <input

              type="date"

              value={newDelay.date}

              onChange={(e)=>

                setNewDelay({

                  ...newDelay,

                  date:e.target.value

                })

              }

              />

            </div>





            <button

            className="btn btn-add"

            onClick={addDelay}

            >

              Add Delay

            </button>



          </div>






          <table>


            <thead>

              <tr>

                <th>
                  Bus
                </th>


                <th>
                  Route
                </th>


                <th>
                  Reason
                </th>


                <th>
                  Minutes
                </th>


                <th>
                  Date
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

            delays.map(delay => (


              <tr key={delay.id}>


                <td>
                  {delay.bus}
                </td>


                <td>
                  {delay.route}
                </td>


                <td>
                  {delay.reason}
                </td>


                <td>
                  {delay.minutes} mins
                </td>


                <td>
                  {delay.date}
                </td>


                <td>
                  {delay.status}
                </td>


                <td>


                  <button

                  className="btn btn-delete"

                  onClick={() => deleteDelay(delay.id)}

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


export default Delays;