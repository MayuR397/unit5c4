import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarHome" style={{color:"white",marginLeft:"15px",fontWeight:"bold"}} to={"/"}>
        Home
      </Link>
      <Link className="navbarLoginSignUp" style={{color:"white",marginLeft:"15px", fontWeight:"bold"}} to={"/loginsignup"}>
        Login/Sign Up
      </Link>
    </div>
  );
};
