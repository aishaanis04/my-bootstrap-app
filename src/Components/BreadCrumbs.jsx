function BreadCrumbs(){
    return(
        <>
<nav className="breadcrumb-box" aria-label="breadcrumb">
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Students</a></li>
    <li className="breadcrumb-item active" aria-current="page">Directory</li>
  </ol>
</nav>
</nav>
</>
    )
}
export default BreadCrumbs;