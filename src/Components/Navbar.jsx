import { Link } from 'react-router-dom' 

function Navbar(){
    return (
       <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Student Portal
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/students">
            Students
          </Link>

          <Link className="nav-link" to="/courses">
            Courses
          </Link>

        </div>

      </div>

    </nav>

  )
}

export default Navbar
//     <nav className="navbar navbar-expand navbar-light bg-light">
      
//   <a className="navbar-brand" href="#">Student Portal</a>
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <a className="nav-link" href="#" >Dashboard <span className="hidden-visually"></span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Students</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Courses</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Reports</a>
//       </li>
//        <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Settings
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a className="dropdown-item" href="#">My Profile</a>
//           <a className="dropdown-item" href="#">Password Reset</a>
//           <a className="dropdown-item" href="#">Sign Out</a>
//         </div>
//       </li>
//     </ul>

  
//   <form className="d-flex ms-auto gap 2">
//     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </nav>
//         )
// }

// export default Navbar;