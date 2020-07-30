import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            author
            position
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { author, position, description },
      },
    }) => (
      <div className="Profile-wrapper">
        <h1>{author}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )}
  />
);

export default Profile;
