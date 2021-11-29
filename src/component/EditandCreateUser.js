

function EditAndCreateUser(props)
{

    //to set the values of name,email,country in inputfiled
    let handleInput =({target:{value,name}})=>{
        if(name==="name")
        {
            props.setName(value);
        }
        if(name==="designation")
        {
            props.setDesignation(value);
        }
        if(name==="projectDetails")
        {
            props.setprojectDetails(value);
        }
        if(name==="EducationDetails")
        {
            props.setEducationDetails(value);
        }
}
           
    return(
        <>
        <div className="card mx-auto createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="userName"
                     value={props.name} 
                     onChange={handleInput}
                     name="name"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Designation:</label><br/>
                    <input className="form-control" type="email" placeholder="Designation" 
                    value={props.designation} 
                    onChange={handleInput}
                    name="designation"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Project Details:</label><br/>
                    <input className="form-control" type="text" placeholder="Project Details" 
                    value={props.projectDetails} 
                    onChange={handleInput}
                    name="projectDetails"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Education Details:</label><br/>
                    <input className="form-control" type="text" placeholder="Education Details" 
                    value={props.educationDetails} 
                    onChange={handleInput}
                    name="educationDetails"
                    />
                </div>
                <br/>
                <div className="text-center">
                <button className="mx-auto btn btn-primary"  type="submit" onClick={props.handleSubmit}>Submit</button>
                </div>
             </form>
            </div>
        </div> 
        </>
    );
}

export default EditAndCreateUser;