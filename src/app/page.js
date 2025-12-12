import NavBar from "../../Components/NavBar/NavBar";
import Presentation from "../../Components/Presentacion/Presentation";
import Servicios from "../../Components/Servicios/Servicios";
import "./page.scss";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <NavBar />
        <Presentation />
        <Servicios />
      </main>
    </div>
  );
}
