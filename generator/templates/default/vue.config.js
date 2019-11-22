module.exports = {
	css: { extract: false },
	// https://cli.vuejs.org/guide/build-targets.html#vue-vs-js-ts-entry-files
	configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
