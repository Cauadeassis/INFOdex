import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title id="secondaryPageTitle">Document</title>
        <link rel="stylesheet" href="secondary.css" />
      </Head>
      <div id="classmateCard">
        <div id="infodexLink">
          <a href="main.html">
            <p>INFOdex</p>
          </a>
        </div>
        <div id="header">
          <div id="photoContainer"></div>
          <div id="informationsContainer">
            <div id="nameContainer"></div>
            <div id="nicknameContainer"></div>
          </div>
        </div>
        <div id="bodyDiv"></div>
      </div>
    </>)
}

