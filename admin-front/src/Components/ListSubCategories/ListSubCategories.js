import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import {BaseURLAdmin} from "../../Config/Constants";
import {Navigate} from "react-router-dom";
import {Component} from "react";
import "react-toastify/dist/ReactToastify.css";
import qs from "qs";

export default class ListSubCategories extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subCategories:[],
            totalSubCategories:0,
        }
    }
    componentDidMount() {
        axios.post(`${BaseURLAdmin}/getSubCategories`,qs.stringify({}),{
    }
}