import React from "react";
import "../styles/BootesProject.css";
import meByCatalysStuff from "../assets/meByCatalysStuff.webp";

function BootesProject() {
  return (
    <section className="bootes_container importantComponent">
      <h2 className="bootes_title title" >_Boötes Project</h2>
      <div className="bootes_content">
        <article className="bootes_content-article">
          <h3 className="bootes_content-articleTitle first-title">
            Un projet associatif
          </h3>
          <div>
            <p>
              Le Boötes Project, c'est notre service de{" "}
              <b>Création de Site Web</b> destinés aux associations loi 1901 et,
              soyons directe, il se veut <b>le plus abordable possible</b> !
            </p>
            <p>
              <b>Pourquoi choisir ce terrain ?</b>
            </p>
            <p>
              Parceque j'y ai travaillé et que j'ai assisté à la détermination
              et la bienveillance des acteurs de ce milieu. Les rencontres
              faites avec les passionné·e·s me donnent envie de les encourager à
              continuer leur actions !
            </p>
            <p>
              Et c'est la raison d'être du projet :{" "}
              <b>Fournir à votre association une vraie présence sur Internet</b>
              , c'est un indispensable aujourd'hui mais toutes les structures ne
              peuvent se munir d'un site aussi facilement que ça.
            </p>
            <p>Avec le Boötes Project, c'est ce qu'on veut résoudre !</p>
          </div>
        </article>
        <figure>
          <img
            className="bootes_content-picture"
            src={meByCatalysStuff}
            alt="Représentation de Victor faites par un artiste nommé(e) CatalysStuff"
          />
          <figcaption>Drawn by CatalysStuff - Thank you !</figcaption>
        </figure>
        <article className="bootes_content-article second-element">
          <h3 className="bootes_content-articleTitle second-title">
            Notre équipe
          </h3>
          <div>
            <p>
              Notre équipe est un couple de jeunes parisiens passionné·e·s par
              le web et le numérique depuis plusieurs années.
            </p>
            <p>
              Moi, c'est <b>Victor</b> (bonjour), le <b>Développeur</b> du duo
              représenté ici avec mon éternel hoodie. J'ai deux diplômes dans ma
              besace, un premier en <u>Système & Réseau</u>, un deuxieme en{" "}
              <u>Intégration Web</u> et ce n'est qu'un début.
            </p>
            <p>
              Avec <b>Lisa</b>, ma chère et tendre <b>Designeuse UI/UX</b> qui
              rejoindra bientôt l'aventure dès la fin de sa formation, nous
              voulons faire quelque chose qui compte à nos yeux.
            </p>
            <p>
              Ensemble, nous représentons une version gentille de la Team
              Rocket, on a même un chat qui parle, <b>Praline</b>. Elle ne se
              tait jamais.
            </p>
          </div>
        </article>
      </div>

    </section>
  );
}

export default BootesProject;
