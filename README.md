- 创建项目

```sh
$ npm install -g create-react-app yarn
$ create-react-app space-admin
```

- 安装 antd

```sh
$ yarn add antd
```

如何使用：

```js
import {Button} from 'antd'
import 'antd/dist/antd.css'

<Button type="primary">antd button</Button>
```

**以上这种方式会默认一次性加载全部的 antd 组件的样式，为了提高性能，需要配置按需加载**

使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) 和 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 配置按需加载:

```js
$ yarn add react-app-rewired --dev
$ yarn add babel-plugin-import --dev
```

```diff
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

根目录新建 `config-overrides.js` 用于重写配置

```js
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
};
```

```diff
  import {Button} from 'antd'
- import 'antd/dist/antd.css'

  <Button type="primary">antd button</Button>
```

**使用 [react-app-rewire-less](http://npmjs.com/react-app-rewire-less) 实现加载 less 样式并自定义主题**

```sh
$ yarn add react-app-rewire-less --dev
```

```diff
  const { injectBabelPlugin } = require('react-app-rewired');
+ const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
-   config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
+   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
+   config = rewireLess.withLoaderOptions({
+     javascriptEnabled: true,
+     modifyVars: { "@primary-color": "#1DA57A" },
+   })(config, env);
    return config;
  };
```

- 路由

```js
$ react-router-dom axios
```