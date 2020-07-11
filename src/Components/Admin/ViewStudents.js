import React, {Component} from 'react';
import apistudents from "../api/studentapi";
import _ from "lodash";
import classes from './ViewStudents.module.css'

class ViewStudents extends Component{

    constructor(props) {
        super(props);
        this.state = {
          students: [],
          studentsDup: [],
        };
      }

      componentDidMount = async () => {
          await apistudents.getAllStudent().then((stdnt) => {
            this.setState({
              students: stdnt.data.data,
            });
          });

      }

      render(){
          const {
              studentsDup,
            } = this.state;
        //   console.log('StudentList ->', students)

          this.state.students.map((std) => {
                const appoin = {
                  id: std._id,
                  firstname: std.firstname,
                  lastname: std.lastname,
                  email: std.email,
                  address:std.address,
                  username:std.username,
                  dob:std.dob,
                  contact_number: std.contact_number,
                  date: std.date,                 
                };
                studentsDup.push(appoin);
            });
      
          const allStudents = _.uniq(studentsDup);

        let showTable = true
        if (!this.state.students.length) {
            showTable = false
        }

          return (
            <div className={classes.ViewStudents}>
                <div>
                <h4>
                    <strong>
                    <font color="blue">&nbsp;&nbsp;&nbsp;Students</font>
                    </strong>
                </h4>
                </div>

                <div>
                <table class="table table-stripe">
                    <tr>
                    <th>
                        <font color="lightseagreen">Student ID</font>
                    </th>                    
                    <th>
                        <font color="lightseagreen">Name</font>
                    </th>  
                    <th>
                        <font color="lightseagreen">Email</font>
                    </th>                  
                    <th>
                    <font color="lightseagreen">Address</font>
                    </th>
                    <th>
                        <font color="lightseagreen">Username</font>
                    </th>

                    <th>
                        <font color="lightseagreen">DOB</font>
                    </th>
                    <th>
                        <font color="lightseagreen">Contact Number</font>
                    </th>
                    <th>
                        <font color="lightseagreen">Date Joined</font>
                    </th>
                    </tr>

                    <tbody>
                    {allStudents.map((myreq) => {
                        if (myreq._id != "") {
                        const index = allStudents.indexOf(myreq);
                        const date = myreq.date.split("T")[0];
                        const dob = myreq.dob.split("T")[0];
                        return (
                            <tr>
                            <td>{myreq.id}</td>
                            <td>{myreq.firstname} {myreq.lastname}</td>
                            <td>{myreq.email}</td>
                            <td>{myreq.address}</td>
                            <td>{myreq.username}</td>
                            <td>{dob}</td>
                            <td>{myreq.contact_number}</td>                            
                            <td>{date}</td>
                            </tr>
                        );
                        }
                    })}
                    </tbody>
                </table>
                </div>
            </div>
          );
      }

}

export default ViewStudents;