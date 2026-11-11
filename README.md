# 免费经典电影 | Free Classic Movies

一个公有领域经典电影免费观看站：35 部老电影，全部来自 Internet Archive（archive.org），视频直接从 Internet Archive 播放。

在线访问：https://sekaiyang.github.io/free-classic-movies/

## 内容

- 35 部公有领域影片：冒险、动画、喜剧（卓别林）、剧情、恐怖、悬疑、黑色电影、科幻、中文电影
- 中文经典包括：《神女》（1934）、《恋爱与义务》（1931）、《红侠》（1929）、《大小黄天霸》（1962）、《风云儿女》（1935）、《怕老婆》（1929）
- 海报来自 `https://archive.org/services/img/<identifier>`

## 技术

纯静态网站（HTML/CSS/JS，无后端），托管于 GitHub Pages。默认语言为英文，页眉有语言切换器（English / 中文 / Svenska / Español / Français / Deutsch），访客的选择保存在浏览器 localStorage 中；界面文案见 `i18n.js`，影片标题不翻译。

- `index.html`：首页（影片网格、分类筛选、搜索、播放弹窗）
- `i18n.js`：六种语言的界面文案与切换逻辑
- `styles.css`：深色影院风格样式
- `about.html` / `contact.html` / `privacy.html`：关于、联系、隐私政策
- 影片数据在 `index.html` 的 `FILMS` 数组中；新增影片时在数组中加一行，并对应放到相应分类即可。

## 广告位

页面中有两处“广告位”占位（页眉下方横幅、影片行之间），目前是纯占位样式，**没有接入任何广告代码或广告网络**，将来接入 Google AdSense 时再替换。

## 版权

本站影片均为公有领域（Public Domain）作品，来源为 Internet Archive。请勿添加受版权保护的影片。
