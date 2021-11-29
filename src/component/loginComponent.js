import React from 'react';
import Box from '@material-ui/core/Box'
import {TextField,Button} from '@material-ui/core';
import axios from 'axios';

class LoginComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={ 
            posts:[],
            name:"",
            designation:"",
            projectDetails:"",
            educationDetails:"",
            profile:"",
        };
    }

    createPost=async()=>{
        try{
            const {name,designation,projectDetails,educationDetails,profile}=this.state;
            const {data:post}=await axios.post("http://localhost:3000/user/saveuser",{
                "name":name,
                "designation":designation,
                "projectDetails":projectDetails,
                "educationDetails":educationDetails,
                "profile":profile,
            });
            console.log("created")
            let posts=[...this.state.posts];
            posts.push(post)
            // console.log(data);  
            this.setState({posts,name:"",designation:"",projectDetails:"",educationDetails:"",profile:""});  
        }
        catch(err){
            console.error(err);
        }
        
    }

    
    handleChange=({target:{name,value}})=>{
        this.setState({[name]:value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.createPost();
    }
render()
{
    return (
        <Box
        component="form"
        onSubmit={this.handleSubmit}
                sx={{
          '& > :not(style)': {flexgrow:1,margin:"30px", m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div className="name">
      <TextField id="filled-basic" label="name" name="name" value={this.state.name} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div className="designation">
      <TextField id="filled-basic" label="designation" name="designation" value={this.state.designation} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div className="projectDetails">
      <TextField id="filled-basic" label="projectDetails" name="projectDetails" value={this.state.projectDetails} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div className="educationDetails">
      <TextField id="filled-basic" label="educationDetails" name="educationDetails"value={this.state.educationDetails} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div className="profile">
        <TextField id="filled-basic" label="profile" 
        name="profile" value={this.state.profile} 
        onChange={this.handleChange} variant="filled" 
        placeholder="Enter your image url" 
        type="url"/><br/>
      </div>
      <div className="submit">
      <Button variant="contained" type="submit" color="primary">
      Submit
      </Button>
      </div>
      </Box>
    );
}
} 

export default LoginComponent    
