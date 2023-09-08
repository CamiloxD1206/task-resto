module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            }
        ]
    }
}; //Esto convierte el formato JS que esta en la ubicacion de "entry", lo convierte para luego guardarlo en la carpeta public.