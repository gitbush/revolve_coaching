module.exports = function (eleventyConfig) {
  
    // set copy asset folder to dist
    eleventyConfig.addPassthroughCopy('static');
  
    // set input and output folder
    return {
      addPassthroughFileCopy: true,
      markdownTemplateEngine: 'njk',
      templateFormats: ['html', 'njk', 'md'],
      dir: { 
        input: 'src/site', 
        output: 'dist',
        includes: 'includes'
    },
      dataTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk'
    };
  }