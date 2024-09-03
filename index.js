const strapi = require("@strapi/strapi");

async function startStrapi() {
  try {
    // Initialize Strapi application
    const app = await strapi().load();

    // Use environment port if provided by Vercel, otherwise default to Strapi's config port
    const port = process.env.PORT || app.config.server.port;

    // Start the HTTP server on the designated port
    app.server.listen(port, () => {
      console.log(`Strapi is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error starting Strapi:", err);
  }
}

// Call the function to start Strapi
startStrapi();
