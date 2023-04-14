const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'ico', 'webp', 'jp2', 'avif', 'pdf'], // Add 'pdf' to the list of supported file extensions
});
