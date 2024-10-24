import axios, { Axios } from "axios"
import react, { useEffect, useState } from 'react'
import { serverPath } from "../info"
function Projects(props) {
  const [projects, setProjects] = useState([])

    useEffect(()=>{
      axios.get(serverPath + "/projects" , {withCredentials : true} )
      .then((res)=>{
        setProjects(res.data)
      })
    } , [])
    
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-9">
            {projects.map((i)=>(
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">{i.title}</h5>
                  <p className="card-text">{i.description}</p>
                  <a href="#" className="btn request-btn btn-primary">Go somewhere</a>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Projects;