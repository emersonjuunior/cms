import SubMenu from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { IHome } from "../interfaces/Home";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container/index";
import Services from "@/components/home/services";
import Footer from "@/components/home/footer";
import { IMenu } from "../interfaces/Menu";

export default async function Home() {
  const data = await getDataHome();
  const object: IHome["object"] = data.objects[0];
  const menu: IMenu = await getSubMenu();

  return (
    <main>
      <div>
        {menu.objects.length > 0 && <SubMenu menu={menu} />}
        <Hero
          heading={object.metadata.heading}
          buttonTitle={object.metadata.cta_button.title}
          buttonUrl={object.metadata.cta_button.url}
          bannerUrl={object.metadata.banner.url}
          icon={<Phone size={24} color="#fff" />}
        />

        <Container>
          <Services object={object} />
          <Footer object={object} />
        </Container>
      </div>
    </main>
  );
}
