import Head from "next/head";
import { infoClassmates } from "/lib/classmates";

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
        <link rel="stylesheet" href="main.css" />
      </Head>

      <header>
        <div id="mainTitleContainer">
          <h1 id="mainTitle">INFOdex</h1>
        </div>
        <form method="get" action="/search">
          <div id="searchContainer">
            <input
              id="searchInput"
              type="search"
              placeholder="Pesquise por alguém"
            />
            <span id="clearButton" className="disabled">
              &times;
            </span>
            <button id="searchButton" type="submit">
              <img id="searchIcon" src="searchIcon.png" alt="" />
            </button>
          </div>
          <div id="filterContainer">
            <label htmlFor="filterSelect">Ordenar por:</label>
            <select id="filterSelect">
              <option value="alphabetic">A-Z</option>
              <option value="alphabeticReverse">Z-A</option>
              <option value="height">Altura</option>
              <option value="date">Data</option>
            </select>
          </div>
        </form>
      </header>

      <main>
        {infoClassmates.map((classmate) => (
          <div
            key={classmate.name}
            className="classmateDiv"
            onClick={() => handleClick(classmate)}
          >
            <img
              className="classmatePhoto"
              src={classmate.photo}
              alt={`Foto de ${classmate.name}`}
            />
            <p className="classmateName">
              {classmate.name.split(" ")[0]}
            </p>
          </div>
        ))}
      </main>
    </>
  );
}
