import styles from "./page.scss";
import NavBar from "../../Components/NavBar";
import Presentation from "../../Components/Presentation";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <NavBar />
        <Presentation />
        <Presentation />
        <Presentation />
        <Presentation />
      </main>
    </div>
  );
}
