import React from "react";
import Head from "next/head";

interface IProps {
    title?: string;
    description?: string;
}

const Seo: React.FC<IProps> = (props: IProps) => {

  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

Seo.defaultProps = {
  title: "Title for My SEO",
  description:
    "Ejemplo Seo",
};

export default Seo;