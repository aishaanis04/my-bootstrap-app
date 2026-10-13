function Pagination(){
    return(
        <nav aria-label="pag-nav">
        <ul className="pagination justify-content-center">
       <li className="page-item disabled">
     <a className="page-link" href="#" tabindex="-1">Previous</a>
     </li>
     <li className="page-item active">
      <a className="page-link" href="#">1 <span class="hidden-visually"></span></a>
    </li>
     < li className="page-item"><a class="page-link" href="#">2</a></li>
    <li className="page-item"><a class="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    )
}
export default Pagination;