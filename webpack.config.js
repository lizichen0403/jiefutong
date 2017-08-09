let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:{
        main:path.resolve('./src/main/index.js'),
    },
    output: {
        path:path.resolve('build'),
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test:/\.jsx?$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(gif|png|jpg)$/,
                use:"url-loader?limit=8192"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/template/index.html",
        })
    ]

}