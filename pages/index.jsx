import Head from "next/head";
import { infoClassmates } from "/lib/classmates";
import styles from "@/styles/main.module.css";
export default function Home() {
  function handleClick(classmate) {
    localStorage.setItem("classmate", JSON.stringify(classmate));
    window.location.href = "/secondaryPage";
  }

  return (
    <>
      <Head>
        <title>INFOdex</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.allSite}>
        <header className={styles.mainHeader}>
          <div className={styles.mainTitleContainer}>
            <h1 className={styles.mainTitle}>INFOdex</h1>
          </div>

          <form method="get" action="/search" className={styles.mainForm}>
            <div className={styles.searchContainer}>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Pesquise por alguém"
              />
              <span className={`${styles.clearButton} ${styles.disabled}`}>
                &times;
              </span>
              <button className={styles.searchButton} type="submit">
                <img
                  className={styles.searchIcon}
                  src="searchIcon.png"
                  alt="Buscar"
                />
              </button>
            </div>

            <div className={styles.filterContainer}>
              <label htmlFor="filterSelect">Ordenar por:</label>
              <select className={styles.filterSelect} id="filterSelect">
                <option className={styles.option} value="alphabetic">
                  A-Z
                </option>
                <option className={styles.option} value="alphabeticReverse">
                  Z-A
                </option>
                <option className={styles.option} value="height">
                  Altura
                </option>
                <option className={styles.option} value="date">
                  Data
                </option>
              </select>
            </div>
          </form>
        </header>

        <main className={styles.mainBody}>
          {infoClassmates.map((classmate) => (
            <div
              key={classmate.name}
              className={styles.classmateDiv}
              onClick={() => handleClick(classmate)}
            >
              <img
                className={styles.classmatePhoto}
                src={classmate.photo}
                alt={`Foto de ${classmate.name}`}
              />
              <p className={styles.classmateName}>
                {classmate.name.split(" ")[0]}
              </p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
