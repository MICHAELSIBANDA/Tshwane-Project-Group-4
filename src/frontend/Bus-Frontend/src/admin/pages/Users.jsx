import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const Users = () => {


  const [users, setUsers] = useState([

    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      role: "Passenger",
      status: "Active"
    },

    {
      id: 2,
      name: "Sarah Adams",
      email: "sarah@gmail.com",
      role: "Driver",
      status: "Active"
    },

    {
      id: 3,
      name: "Admin User",
      email: "admin@buslink.com",
      role: "Admin",
      status: "Active"
    }

  ]);



  const [newUser, setNewUser] = useState({

    name:"",
    email:"",
    role:"Passenger",
    status:"Active"

  });



  // ADD USER

  const addUser = () => {


    if(!newUser.name || !newUser.email){
      alert("Please fill all fields");
      return;
    }


    setUsers([

      ...users,

      {
        id: Date.now(),
        ...newUser
      }

    ]);



    setNewUser({

      name:"",
      email:"",
      role:"Passenger",
      status:"Active"

    });


  };





  // DELETE USER

  const deleteUser = (id)=>{


    setUsers(

      users.filter(
        user => user.id !== id
      )

    );


  };





  return (

    <div className="dashboard">


      <Sidebar />


      <div className="main">


        <Topbar />



        <div className="table-container">


          <h2>
            User Management
          </h2>




          {/* ADD USER FORM */}

          <div className="form-container">


            <div className="form-group">

              <label>
                Name
              </label>

              <input

                type="text"

                placeholder="Enter user name"

                value={newUser.name}

                onChange={(e)=>

                  setNewUser({

                    ...newUser,

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

                type="email"

                placeholder="Enter email"

                value={newUser.email}

                onChange={(e)=>

                  setNewUser({

                    ...newUser,

                    email:e.target.value

                  })

                }

              />

            </div>





            <div className="form-group">


              <label>
                Role
              </label>


              <select

                value={newUser.role}

                onChange={(e)=>

                  setNewUser({

                    ...newUser,

                    role:e.target.value

                  })

                }

              >


                <option>
                  Passenger
                </option>


                <option>
                  Driver
                </option>


                <option>
                  Admin
                </option>


              </select>


            </div>




            <button

              className="btn btn-add"

              onClick={addUser}

            >

              Add User

            </button>



          </div>





          {/* USERS TABLE */}


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
                  Role
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

                users.map(user=>(


                  <tr key={user.id}>


                    <td>
                      {user.name}
                    </td>


                    <td>
                      {user.email}
                    </td>


                    <td>
                      {user.role}
                    </td>


                    <td>
                      {user.status}
                    </td>



                    <td>


                      <button

                        className="btn btn-delete"

                        onClick={()=>
                          deleteUser(user.id)
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


export default Users;