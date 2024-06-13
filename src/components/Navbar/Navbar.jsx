import "./Navbar.css";
import { CarWidget } from "../cartWidget/CarWidget";

export const Navbar = () => {
  return (
    <div className="navBarcontainer">
      <h2>MD</h2>

      <ul style={{ display: "flex", gap: "10px" }}>
        <li style={{ listStyle: "none" }}>Todo</li>
        <li style={{ listStyle: "none" }}>Puertas</li>
        <li style={{ listStyle: "none" }}>Terminaciones</li>
      </ul>

      <CarWidget />
    </div>
  );
};
