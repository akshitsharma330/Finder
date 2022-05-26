import{Component} from "react";
import axios from "axios";
import { BaseURLAdmin } from "../../Config/Constants";
import qs from "qs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state={
      users:[],
      totalUsers:"",
    }
  }
  deleteUser=(userId,uinfoId)=>{
    
    axios.post(`${BaseURLAdmin}/deleteUser`,qs.stringify(userId,uinfoId),{
      headers: {'Content-Type': 'application/x-www-form-urlencoded',
      'authorization':sessionStorage.getItem("token")}
    })
    .then(data=>{
      // console.log(data);
      if(data.data.success){
        toast.success(data.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      }
      else{
        toast.error(data.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      
      }
    })
    
  }
  componentDidMount(){
      axios.post(`${BaseURLAdmin}/listUsers`,{}, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "authorization":sessionStorage.getItem("token")
        } })
      .then(data=>{
        // console.log(data);
        this.setState({users:data.data.users});


      })
      axios.post(`${BaseURLAdmin}/countUsers`,{}, {
        headers:{
          "Content-Type": "application/x-www-form-urlencoded",
          "authorization":sessionStorage.getItem("token")
        }
      })
      .then(data=>{
        // console.log(data);
        this.setState({totalUsers:data.data.count});
      })
  }


  render() {
    return (
      <>
      <ToastContainer />
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
                        <td>{user.user_Id.name}</td>
                        <td>{user.email}</td>
                        <td>{user.user_Id.number}</td>
                        <td></td>
                        <td>{user.createdAt}</td>
                        <td><button className="btn btn-danger p-1 m-1"  onClick={()=>{this.deleteUser(user.Id,user.user_Id)}} >del</button><button className="btn btn-warning p-1 m-1">Blo</button><button className="btn btn-primary p-1 m-1">Blo</button></td>

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
