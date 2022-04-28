import { Outlet } from "react-router-dom";
import ProjectSelector from "./elements/ProjectSelector/ProjectSelector";
import styles from './App.module.scss'

function App() {
  return (
    <>
      <section className={styles.App}>
        <div className={styles.App__content}>
          <Outlet />
        </div>
        <ProjectSelector />
      </section>
    </>
  );
}

export default App;
