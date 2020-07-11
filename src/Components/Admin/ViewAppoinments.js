import React, {Component} from 'react';
import apistudents from "../api/studentapi";
import apisappoinment from "../api/appoinmentapi";
import apitutors from "../api/tutorapi";
import _ from "lodash";
import classes from './ViewStudents.module.css';

class ViewAppoinments extends Component{

    constructor(props) {
        super(props);
        this.state = {
          students: [],
          tutors: [],
          appoinments: [],
          myAppoinStudentsDup: [],
          tutorID: [],
        };
      }

      componentDidMount = async () => {
        await apisappoinment.getAllAppoinment().then((appoinments) => {
          this.setState({
            appoinments: appoinments.data.data,
            isLoading: false,
          });
        });

        await apitutors.getAllTutor().then((tut) => {
            this.setState({
              tutors: tut.data.data,
            });
          });

          await apistudents.getAllStudent().then((stdnt) => {
            this.setState({
              students: stdnt.data.data,
            });
          });

      }

      render(){
          const {
              appoinments,
              myAppoinStudentsDup,
            } = this.state;
        //   console.log('AppoinmnetList ->', appoinments)



          this.state.tutors.map((myr) => {
            this.state.students.map((std) => {
            this.state.appoinments.map((appoinment) => {
              if (appoinment.tutorID == myr._id && appoinment.studentID == std._id) {
                const appoin = {
                  id: appoinment._id,
                  firstname: std.firstname,
                  lastname: std.lastname,
                  fullname: myr.fullname,
                  accept:appoinment.accept,
                  date:appoinment.date,
                  startTime: appoinment.startTime,
                  endTime: appoinment.endTime,
                  venue: appoinment.venue,                  
                };
                myAppoinStudentsDup.push(appoin);
              }
            });      
            });
          });
      
          const myAppoinStudents = _.uniq(myAppoinStudentsDup);

        let showTable = true
        if (!appoinments.length) {
            showTable = false
        }

          return (
            <div>
                <div>
                <h4>
                    <strong>
                    <font color="blue">&nbsp;&nbsp;&nbsp;Appoinments</font>
                    </strong>
                </h4>
                </div>

                <div className={classes.ScrollBar}>
                <table class="table table-stripe">
                    <tr>
                    <th>
                        <font color="lightseagreen">appoinment ID</font>
                    </th>                    
                    <th>
                        <font color="lightseagreen">Student ID</font>
                    </th>  
                    <th>
                        <font color="lightseagreen">Tutor Name</font>
                    </th>                  
                    <th>
                    <font color="lightseagreen">Accept Status</font>
                    </th>
                    <th>
                        <font color="lightseagreen">Date</font>
                    </th>

                    <th>
                        <font color="lightseagreen">Start Time</font>
                    </th>
                    <th>
                        <font color="lightseagreen">End Time</font>
                    </th>
                    <th>
                        <font color="lightseagreen">Venue</font>
                    </th>
                    </tr>

                    <tbody>
                    {myAppoinStudents.map((myreq) => {
                        if (myreq._id != "") {
                        const index = myAppoinStudents.indexOf(myreq);
                        const date = myreq.date.split("T")[0];
                        const accept = myreq.accept.toString();
                        return (
                            <tr>
                            <td>{myreq.id}</td>
                            <td>{myreq.firstname} {myreq.lastname}</td>
                            <td>{myreq.fullname}</td>
                            <td>
                                <font color="red">
                                    &nbsp;&nbsp;&nbsp; {accept}
                                </font>                               
                            </td>
                            <td>{date}</td>
                            <td>{myreq.startTime}</td>
                            <td>{myreq.endTime}</td>
                            <td>{myreq.venue}</td>
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

export default ViewAppoinments;