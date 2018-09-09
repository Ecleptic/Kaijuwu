const path = require("path");
const slash = require("slash");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`);

    graphql(`
      {
        teams {
          teamName
          players {
            playerName
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors);
      }
      result.data.allPosts.edges.map(({ node }) => {
        createPage({
          path: `/post/${node.slug}`,
          component: slash(postTemplate),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });
};
