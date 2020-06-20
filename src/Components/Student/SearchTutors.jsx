import React, { Component } from "react";
import ReactTable from "react-table";

import api from "../api/tutorapi";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;
class SearchTutors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllTutor().then((tutors) => {
      this.setState({
        tutors: tutors.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { tutors, isLoading } = this.state;
    //  console.log("TCL: MoviesList -> render -> tutors", tutors);

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Name",
        accessor: "fullname",
        filterable: true,
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: true,
      },
      {
        Header: "Subjects",
        accessor: "subjects",
        Cell: (props) => <span>{props.value.join(" / ")}</span>,
      },
    ];

    let showTable = true;
    if (!tutors.length) {
      showTable = false;
    }

    return (
      <div>
        <div>
          <h3>
            {" "}
            <strong>&nbsp;&nbsp;&nbsp;TUTORS</strong>
          </h3>
        </div>
        <div>
          <table class="table table-stripe">
            <tr>
              <th>
                <font color="black">User Name</font>
              </th>
              <th>
                <font color="black">Email</font>
              </th>
              <th>
                <font color="black">Subjects</font>
              </th>
              <th>
                <font color="black">Description</font>
              </th>
            </tr>

            <tbody>
              {this.state.tutors.map((newtutor) => {
                if (newtutor._id != "") {
                  return (
                    <tr>
                      <td>{newtutor.fullname}</td>

                      <td>{newtutor.email}</td>
                      <td>{newtutor.subjects}</td>
                      <td>{newtutor.description}</td>
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

export default SearchTutors;
