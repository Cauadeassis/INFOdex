import Head from "next/head";
import { infoClassmates } from "/lib/classmates";

export default function MainPage() {
  function handleClick(classmate) {
    localStorage.setItem("classmate", JSON.stringify(classmate));
    window.location.href = "/secondaryPage";
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title id="secondaryPageTitle">Document</title>
        <link rel="stylesheet" href="secondary.css" />
      </Head>

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
