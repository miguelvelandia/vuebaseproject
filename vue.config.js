module.exports = {
    //Configurando modo fix del eslint
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
     // proxy API requests to Valet during development
     devServer: {
        proxy: 'http://localhost:8080/',
        headers: {
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept", 
            "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE",      
          },
        disableHostCheck: true
    },

    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: '../public',

    assetsDir: process.env.NODE_ENV === 'production'
        ? '/'
        : 'http://localhost:8080/',

  
    // modify the location of the generated HTML file.
    // make sure to do this only in production.
    indexPath: process.env.NODE_ENV === 'production' ?
        'index.html' : 'index.html',

    lintOnSave: undefined
}

