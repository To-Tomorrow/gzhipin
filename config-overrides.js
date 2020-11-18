const {override, fixBabelImports,addLessLoader} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',//或者css, true代表运用less
    }),
    addLessLoader({
        lessOptions:{
            javascriptEnable: true,
            modifyVars: {
                '@brand-primary': '#1cae82',
                '@brand-primary-tap': '#1DA57A',
                "@primary-color": '#f47983',
            }
        }
        })
);