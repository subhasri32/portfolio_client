import React from "react";
import axios from 'axios';

class TableComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            name:"",
            designation:"",
            projectDetails:"",
            educationDetails:"",
            profile:"",

        }
    }
    getPost=async()=>{
        try{
            const {data}=await axios.get("http://localhost:3000/user/getuser");
            console.log(data);
            this.setState({users:data})
        }
        catch(err){
            console.error(err);
        }
        
    }
    componentDidMount(){
        this.getPost();
    }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>designation</th>
            <th>projectDetails</th>
            <th>educationDetails</th>
            <th>profile</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>default1</td>
            <td>BE</td>
            <td>
                <img src="https://i.pravatar.cc/50?img=1" alt="thumb" />
            </td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>default2</td>
            <td>Computer Science</td>
            <td>
                <img src="https://i.pravatar.cc/50?img=2" alt="thumb" />
            </td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>default3</td>
            <td>Btech</td>
            <td>
                <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
            </td>
          </tr>
        {
                this.state.users.map((user)=>{
                    return(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.designation}</td>
                            <td>{user.projectDetails}</td>
                            <td>{user.educationDetails}</td>
                            <td><img src={user.profile}></img></td>
                            </tr>
                    );
                })
            }
            </tbody>
        
      </table>
    );
  }
}

export default TableComponent;