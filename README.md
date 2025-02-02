# 淫语翻译机！
【yinglish】淫语翻译机！(js版)

能把中文翻译成淫语的翻译机！

修改自莉沫酱的[yinglish](https://github.com/RimoChan/yinglish)

## 使用!

首先你要有 nodejs!

我也不知道最低版本要求多少, 反正我的是 v20.11.0

``` bash
git clone https://github.com/Rin-Kawaii/yinglish_js.git

npm i

node main.js
```

然后访问 localhost:3000

如果你需要导入到你自己的项目, 你只需要复制 `yinglish.js` 到你自己的项目然后使用 CJS 语法导入即可!

``` javascript
const translate = require("./yinglish.js");
```

啥? 你问为什么不能用 ES 语法, 那是因为 `nodejieba` 只支持 CJS 语法(
