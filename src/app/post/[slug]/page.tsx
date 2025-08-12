import styles from "./styles.module.scss";
import { getPage } from "@/utils/actions/get-page";
import { IPage } from "@/interfaces/Page";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container/index";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { objects }: IPage = await getPage(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada!",
        description: "Oficina de carros em São Paulo.",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      openGraph: {
        images: [objects[0].metadata.banner.url],
        title: "DevMotors - Sua oficina especializada!",
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch {
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficina de carros em São Paulo.",
    };
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const { objects }: IPage = await getPage(slug);

  return (
    <main>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h2 className={styles.title}>
              {objects[0].metadata.description.title}
            </h2>
            <p>{objects[0].metadata.description.text}</p>
            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              fill
              quality={100}
              priority
              src={objects[0].metadata.description.banner.url}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Page;
