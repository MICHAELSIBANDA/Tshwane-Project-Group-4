import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const Complaints = () => {


  const [complaints, setComplaints] = useState([

    {
      id:1,
      passenger:"Michael Brown",
      driver:"John Smith",
      bus:"BUS-102",
      issue:"Late arrival",
      date:"2026-01-15",
      status:"Pending"
    },

    {
      id:2,
      passenger:"Sarah Wilson",
      driver:"David Lee",
      bus:"BUS-205",
      issue:"Driver behaviour",
      date:"2026-01-10",
      status:"Resolved"
    }

  ]);



  const [newComplaint,setNewComplaint] = useState({

    passenger:"",
    driver:"",
    bus:"",
    issue:"",
    date:"",
    status:"Pending"

  });





  const addComplaint = () => {


    if(!newComplaint.passenger || !newComplaint.issue){

      alert("Please complete complaint details");

      return;

    }


    setComplaints([

      ...complaints,

      {
        id:Date.now(),
        ...newComplaint
      }

    ]);



    setNewComplaint({

      passenger:"",
      driver:"",
      bus:"",
      issue:"",
      date:"",
      status:"Pending"

    });


  };





  const deleteComplaint = (id)=>{


    setComplaints(

      complaints.filter(
        complaint => complaint.id !== id
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
            Complaint Management
          </h2>



          <div className="form-container">


            <div className="form-group">

              <label>
                Passenger Name
              </label>

              <input

              placeholder="Passenger"

              value={newComplaint.passenger}

              onChange={(e)=>

                setNewComplaint({

                  ...newComplaint,

                  passenger:e.target.value

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

              value={newComplaint.driver}

              onChange={(e)=>

                setNewComplaint({

                  ...newComplaint,

                  driver:e.target.value

                })

              }

              />

            </div>





            <div className="form-group">

              <label>
                Bus Number
              </label>


              <input

              placeholder="BUS-101"

              value={newComplaint.bus}

              onChange={(e)=>

                setNewComplaint({

                  ...newComplaint,

                  bus:e.target.value

                })

              }

              />


            </div>





            <div className="form-group">

              <label>
                Complaint
              </label>


              <textarea

              placeholder="Complaint description"

              value={newComplaint.issue}

              onChange={(e)=>

                setNewComplaint({

                  ...newComplaint,

                  issue:e.target.value

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

              value={newComplaint.date}

              onChange={(e)=>

                setNewComplaint({

                  ...newComplaint,

                  date:e.target.value

                })

              }

              />


            </div>





            <button

            className="btn btn-add"

            onClick={addComplaint}

            >

              Add Complaint

            </button>



          </div>






          <table>


            <thead>

              <tr>

                <th>
                  Passenger
                </th>

                <th>
                  Driver
                </th>

                <th>
                  Bus
                </th>

                <th>
                  Issue
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

            complaints.map(complaint=>(


              <tr key={complaint.id}>


                <td>
                  {complaint.passenger}
                </td>


                <td>
                  {complaint.driver}
                </td>


                <td>
                  {complaint.bus}
                </td>


                <td>
                  {complaint.issue}
                </td>


                <td>
                  {complaint.date}
                </td>


                <td>
                  {complaint.status}
                </td>


                <td>

                  <button

                  className="btn btn-delete"

                  onClick={()=>deleteComplaint(complaint.id)}

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


export default Complaints;