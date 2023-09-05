const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
const glob = require('glob');

const comp = {};

async function getComps (path, comp) {
    const files = glob.sync(`${path}/**/index.js`);
    files.forEach(item => {
        const name = item.split(/[/.]/)[2];
        comp[name] = `./${item}`
    })
}

getComps('components/lib', comp);

module.exports = {
    entry: comp,
    mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            }
        ]
    }
};