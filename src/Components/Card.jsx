import StudentCard from "./StudentCard";
function Card(){
    return(
     <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="public\student image.jfif" alt="Card image cap"/>
    <div className="card-body">
      <StudentCard
          name="Zainab Malik"
          id="101"
          major="Computer Science"
          year="2026"
          gpa="2.9"
/>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="\public\student image.jfif" alt="Card image cap"/>
    <div className="card-body">
       <StudentCard
           name="Aisha Anis"
           id="102"
           major="Engineering"
           year="2022"
           gpa="3.2"
             />
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="\public\student image.jfif" alt="Card image cap"/>
    <div className="card-body">
      <StudentCard
           name="Javaid Malik"
           id="103"
           major="Bio Science"
           year="2023"
           gpa="3.9"
             />
    </div>
  </div>
   <div className="card">
    <img className="card-img-top" src="\public\student image.jfif" alt="Card image cap"/>
    <div className="card-body">
       <StudentCard
           name="Sarah Khan"
           id="104"
           major="Computer Science"
           year="2024"
           gpa="3.5"
             />
    </div>
</div>
</div>
    )
}
export default Card;