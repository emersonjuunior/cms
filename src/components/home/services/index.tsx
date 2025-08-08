import { IHome } from "@/interfaces/Home";
import styles from "./styles.module.scss";
import Image from "next/image";

const Services = ({ object }: IHome) => {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h2 className={styles.title}>Sobre</h2>
          <p>{object.metadata.about.description}</p>
        </article>
        <div className={styles.imageAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa sobre a empresa"
            quality={100}
            fill
            src={object.metadata.about.banner.url}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>
      </section>
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem do serviço"
                quality={100}
                fill
                src={service.image.url}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Services;
