import Head from "next/head";

export default function LayoutPage(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </div>
  );
}
