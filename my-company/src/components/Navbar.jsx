import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav
            style={{
            backgroundColor: "#333",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3rem",
            gap: "20px",
            
      }}
        >

            <ul style={{listStyle: "none",
               display: "flex",
            justifyContent: "space-between",  
             gap: "50px",
             marginLeft: "60%",
             fontWeight: "bold"
             
            }}>
                <li>
                 <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>   
                </li>
                <li>
                 <Link style={{ color: "white", textDecoration: "none" }} to="/about">About</Link>   
                </li>
                <li>
                 <Link style={{ color: "white", textDecoration: "none" }} to="/services">Services</Link>   
                </li>
                <li>
                 <Link style={{ color: "white", textDecoration: "none" }} to="/contact">Contact</Link>   
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;