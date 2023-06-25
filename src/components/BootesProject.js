import React from "react";
import "../styles/BootesProject.css";
import meByCatalysStuff from "../assets/meByCatalysStuff.webp";

function BootesProject() {
  return (
    <section className="bootes_container" id="#presentation">
      <h1>Boötes Project</h1>
      <div className="bootes_content">
        <article className="bootes_content-article">
          <h2>Un projet associatif</h2>
          <div>
            <p>
              Le Boötes Project, c'est notre service de{" "}
              <b>création de Site Web</b> destinés aux associations loi 1901 (la fameuse).
            </p>
            <p>
              <u>
                <b>Pourquoi choisir ce terrain ?</b>
              </u>
            </p>
            <p>
              "Et bien parceque j'y ai travaillé et c'est dans ce milieu que
              j'ai pu rencontrer les personnes les personnes plus passionné·e·s
              et bienveillant·e·s".
            </p>
            <p>
              "S'il y a bien une chose que je retire de cet univers, c'est qu'il
              me semble évident que sans les associations et leur actions, le
              monde perdrait de sa beauté".
            </p>
            <p>
              <u>
                <b>C'est pas un peu facile comme conclusion ?</b>
              </u>
            </p>
            <p>
              "Oui, plutôt, mais c'est sincère" ! - Chez Boötes Dev, nous
              croyons en vous et c'est pour soutenir vos actions que nous vous
              proposons nos services de la plus abordable des manières !
            </p>
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
          <h2>Notre profil</h2>
          <div>
            <p>
              Nous sommes un couple de jeunes parisiens passionné·e·s par le web
              et le numérique depuis plusieurs années.
            </p>
            <p>
              Représenté·e·s ici avec mon éternel hoodie, je suis <b>Victor</b>{" "}
              (bonjour), le <u>Développeur</u> du duo ! J'ai deux diplômes à mon
              arc, un premier en Système & Réseau, un deuxieme en Intégration
              Web et ce n'est qu'un début.
            </p>
            <p>
              Avec <b>Lisa</b>, ma chère et tendre <u>Designeuse UI/UX</u>, nous
              voulons faire quelque chose qui compte à nos yeux.
            </p>
            <p>
              Ensemble, nous représentons une version gentille de la Team
              Rocket, on a même notre chat qui parle, <b>Praline</b>. Elle ne se
              tait jamais.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BootesProject;
