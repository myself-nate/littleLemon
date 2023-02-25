
const Footer = ({color, children}) =>{
    return (
      <footer style={{backgroundColor: color}}>
              <picture>
          </picture>
          <nav>
          <h1>Site Map</h1>
          <menu>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Log In</a></li>
          </menu>
        </nav>
        <div>
           <h1>Contact Us</h1>
          <menu>
            <li><a href="#">Email</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Address</a></li>
          </menu>
        </div>
        <div>
           <h1>Social Media</h1>
          <menu>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Tiktok</a></li>
          </menu>
          </div>
      </footer>
     );
  }

  export default Footer;