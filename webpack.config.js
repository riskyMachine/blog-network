const path = require('path')

// // Render blogView
// module.exports = {
//     entry: './public/js/editor.js',
//     output: {
//         path: path.resolve(__dirname,'public/dist'),
//         filename: 'bundle.js'
//     },
//     mode: 'development',
//     module: {
//         rules: [
//             {test: /\.js$/, exclude: [/(node_modules)/, /(js)/]}
//         ]
//     }
// }


// //Render editBlog
module.exports = {
    entry: './public/js/editBlog.js',
    output: {
        path: path.resolve(__dirname,'public/dist'),
        filename: 'bundle1.js'
    },
    mode: 'development',
    module: {
        rules: [
            {test: /\.js$/, exclude: [/(node_modules)/, /(js)/]}
        ]
    }
}