module.exports = function (eleventyConfig) {
  
    // set copy asset folder to dist
    eleventyConfig.addPassthroughCopy('assets');
  
    // set input and output folder
    return {
      dir: { 
        input: 'src/site', 
        output: 'dist',
        includes: '_includes' 
    },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };
  }