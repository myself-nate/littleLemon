const Header = ({color, children}) =>{
    return (
      <header style={{backgroundColor: color}}>
            <nav>
                <picture>
                    {/* <svg src='../../img/logo-a.svg' alt='a little lemon'></svg> */}
                </picture>
                <menu>
                    {children}
                </menu>
            </nav>
      </header>
     );
  }

  export default Header;