 const Header = () => {
    return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-home">
        <a className="navbar-brand" href="#">PIZZAGUY</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
        
            <li className="nav-item">
              <a className="nav-link" href="#">About Pizza</a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href="#">Pizza Types</a>
              </li>
            </ul>

           <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button>
          </form>
        </div>
        
    </nav>

    )
}

export default Header;