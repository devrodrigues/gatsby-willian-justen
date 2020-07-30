import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          author
          position
          description
        }
      }
    }
  `);

  return (
    <div className="Profile-wrapper">
      <h1>{author}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
