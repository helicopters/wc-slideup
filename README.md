## 基于 Vue 的 slideup 效果

## Install
```shell
npm i wc-slideup --save-dev

```

## Usage
```javascript
import wcSlideup from 'wc-slideup'
import 'wc-slideup/style.css'
Vue.use(wcSlideup);
```

```html
<wc-slideup ref="slideup">
 content
</wc-slideup>

```

```shell
1. 需要为 wc-slideup 添加 ref 属性
2. 通过 this.$refs.slideup.show() 显示 slideup;
3. 通过 this.$refs.slideup.hide() 隐藏 slideup;

```