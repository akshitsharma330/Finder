import { Navigate } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import qs from "qs";
import { BaseURLAdmin } from "../../Config/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class ListBlockedUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockedUsers: [],
    };
  }

  componentDidMount() {
    axios
      .post(
        `${BaseURLAdmin}/listBlockedUsers`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            authentication: sessionStorage.getItem("token"),
          },
        }
      )
      .then((data) => {
        this.setState({ blockedUsers : data.data.users});
      });
  }
}
