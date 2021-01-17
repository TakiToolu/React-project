
const {override, fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
    //针对antd 实现按需打包打包
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    //使用less-loader对源码中的less变量进行重新指定，为更换主题做准备
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {'@primary-color': '#1DA57A'},
    }),
  );