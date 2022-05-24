import{Component} from "react";
import axios from "axios";
import { BaseURLAdmin } from "../../Config/Constants";

export default class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state={
      users:[],
      totalUsers:"",
    }
  }
  componentDidMount(){
      axios.post(`${BaseURLAdmin}/listUsers`,{}, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "authorization":sessionStorage.getItem("token")
        } })
      .then(data=>{
        console.log(data);
        this.setState({users:data.data.users});


      })
      axios.post(`${BaseURLAdmin}/countUsers`,{}, {
        headers:{
          "Content-Type": "application/x-www-form-urlencoded",
          "authorization":sessionStorage.getItem("token")
        }
      })
      .then(data=>{
        console.log(data);
        this.setState({totalUsers:data.data.count});
      })
  }


  render() {
    return (
      <>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <h1 className="h3 mb-2 text-gray-800">Users List</h1>
         

          {/* <!-- DataTales Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered table-striped"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead className="">
                    <tr>
                      <th>S.no</th>
                      <th>Name</th>
                      <th>E-mail</th>
                      <th>Phone-No</th>
                      <th>Total-Ads</th>
                      <th>Created-On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {                 
                    this.state.users.map((user,index)=>(
                      <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td></td>
                        <td>{user.createdAt}</td>
                        <td><button className="btn btn-primary">del</button></td>

                      </tr>
                    ))}

                  </tbody>
                  
                              
                    
                  
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </>
    );
  }
}
