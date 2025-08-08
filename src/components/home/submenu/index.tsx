"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { IMenu } from "@/interfaces/Menu";

interface SubMenuProps {
  menu: IMenu;
}

const SubMenu = ({ menu }: SubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}
        {menu.objects.map((item) => (
          <li key={item.slug}>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SubMenu;
