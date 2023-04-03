/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-03-31 19:05:560
 */
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserWebpackPlugin()
        ]
    }
}