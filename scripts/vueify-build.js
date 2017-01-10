var fs = require('fs');
var browserify = require('browserify');
var vueify = require('vueify');
var aliasify = require('aliasify');

aliasifyConfig = {
  aliases: {
    "vue": "vue/dist/vue.js"
  },
  verbose: false
};

browserify('www/js/main.js')
  .transform(aliasify, aliasifyConfig)
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream('www/js/bundle.js'));
  
