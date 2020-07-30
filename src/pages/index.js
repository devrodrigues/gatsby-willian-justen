import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá!</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "cadetblue" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
