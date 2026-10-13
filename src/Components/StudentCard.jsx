import { useState } from "react";

function StudentCard({name,id,major,year,gpa}){

    const [view,setView] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    function handleView(){
        setView(view+1)
        }

    return(
        <div className="student-card">
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Major: {major}</p>
        <p>Year: {year}</p>
        <p>GPA: {gpa}</p>
        <p>Profile Views {view}</p>

        <button className="profile-btn" onClick={handleView}>
            View Profile
        </button>
        <button className="delete-btn">
            Delete
        </button>
        
         <button className="showDetails" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div>
          <p>Email: student@example.com</p>
          <p>Phone: 0300-1234567</p>
        </div>
      )}

        </div>  
    
    
)
}
export default StudentCard;