import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "@/styles/secondary.module.css";

export default function SecondaryPage() {
  const [classmate, setClassmate] = useState(null);

  useEffect(() => {
    // pega o classmate do localStorage
    const stored = localStorage.getItem("classmate");
    if (stored) {
      const parsed = JSON.parse(stored);
      setClassmate(parsed);

      // muda o título da aba
      document.title = parsed.name.split(" ")[0];
    }
  }, []);

  if (!classmate) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{classmate.name.split(" ")[0]}</title>
      </Head>

      <div className={styles.classmateCard}>
        <div className={styles.infodexLink}>
          <a href="/" className={styles.mainTitle}>
            <p>INFOdex</p>
          </a>
        </div>

        <header className={styles.secondaryHeader}>
          <div className={styles.photoContainer}>
            <img
              className={styles.classmatePhoto}
              src={classmate.photo}
              alt={`Foto de ${classmate.name}`}
            />
          </div>

          <div className={styles.informationsContainer}>
            <div className={styles.nameContainer}>
              <p className={styles.classmateInformation}>
                Nome: {classmate.name}
              </p>
            </div>

            {classmate.nickname && (
              <div className={styles.nicknameContainer}>
                <p className={styles.classmateInformation}>
                  Apelido: {classmate.nickname}
                </p>
              </div>
            )}
          </div>
        </header>

        <main className={styles.secondaryBody}>
          <p className={styles.classmateDescription}>
            {classmate.description}
          </p>
        </main>
      </div>
    </>
  );
}
