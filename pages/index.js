import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LayoutPage from "../components/layout";

export default function Home() {
  return (
    <LayoutPage title="Home">
      <div className="px-6 md:px-12 lg:px-24 xl:px-48 max-w-[1440px]">
        <div className="py-12 font-bold text-5xl text-center">
          Selamat datang!
        </div>
      </div>
    </LayoutPage>
  );
}
