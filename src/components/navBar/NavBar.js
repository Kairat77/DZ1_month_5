import { Link, NavLink } from "react-router-dom";


export default function NavBar () {
    return(
       <ul style={{
        display: 'flex',
        listStyletype: 'none',
        width: '40%',
        justifyContent: 'space-between'
        }}>
        <li>
            <NavLink to="/" className="link" >main page</NavLink>
        </li>
        <li>
            <NavLink to="/about" className="link">about page</NavLink>
        </li>
        <li>
            <NavLink to="/contacts" className="link">contacts page</NavLink>
        </li>
        <li>
            <NavLink to="/data" className="link">data page</NavLink>
        </li>
       </ul>
    )
}