/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ad76ee5e237db51cfccb1800010b51e"
  },
  {
    "url": "assets/css/1.styles.85454ac8.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.74912a0d.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.c662bb16.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.acee79dc.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.1f35c3f7.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.3df485e7.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/7.styles.3717cac2.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.0c2fe543.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.85454ac8.js",
    "revision": "60ace19f3f21724788cbabcd34d50a33"
  },
  {
    "url": "assets/js/10.0b64601b.js",
    "revision": "3d558799b28be4597765fdbb222a89a4"
  },
  {
    "url": "assets/js/11.6f89a762.js",
    "revision": "f228f3a2387790df51936147888ef532"
  },
  {
    "url": "assets/js/12.80fd8eb8.js",
    "revision": "0433f293ce22f0ba092b9f75abcc1318"
  },
  {
    "url": "assets/js/13.d44a64ce.js",
    "revision": "361e33301e43a5ec8a6b23e58e4043f5"
  },
  {
    "url": "assets/js/14.4e242b49.js",
    "revision": "833a9b1ed6b08644ad072bc463151910"
  },
  {
    "url": "assets/js/15.eeb11dcb.js",
    "revision": "924963cd3a0216fdf0dba2920272c580"
  },
  {
    "url": "assets/js/16.8cf11868.js",
    "revision": "bbdf55cb87821ad2448f450004fa83ff"
  },
  {
    "url": "assets/js/17.d5144c5a.js",
    "revision": "d138a00dd77f0f2e040bfed014ee032e"
  },
  {
    "url": "assets/js/18.9ee515d5.js",
    "revision": "dfd6fdf6945ed15ddefc1d37da264b6d"
  },
  {
    "url": "assets/js/19.7783bd5b.js",
    "revision": "c1e3c98480469ebe01d19dff95afbf26"
  },
  {
    "url": "assets/js/2.74912a0d.js",
    "revision": "33f2f533c5725a612e89956df8696a33"
  },
  {
    "url": "assets/js/20.f80f9f36.js",
    "revision": "00e97f86ff770c7bb362be48be27adb8"
  },
  {
    "url": "assets/js/21.8184238d.js",
    "revision": "d829dd80ca413318ee533b4f4c7a337b"
  },
  {
    "url": "assets/js/22.8d27bc82.js",
    "revision": "f2172aaf89eed1163faef48526e9bce2"
  },
  {
    "url": "assets/js/23.f3adcc9f.js",
    "revision": "6a236b8d8ec6ed9e9c14112393c97c01"
  },
  {
    "url": "assets/js/24.0a569f77.js",
    "revision": "38791503c71e54520154d83ade48efc4"
  },
  {
    "url": "assets/js/25.304af3d8.js",
    "revision": "f0087ede49d14ff4be39e844c2a4d044"
  },
  {
    "url": "assets/js/26.c3142e31.js",
    "revision": "ed54c4e9b98c6069e5ba0729d4176492"
  },
  {
    "url": "assets/js/27.4bf86489.js",
    "revision": "af279ff82879790bd37e8c9a8457d777"
  },
  {
    "url": "assets/js/28.c3d85679.js",
    "revision": "40befb920dc781f26b38d63c7e7d0884"
  },
  {
    "url": "assets/js/29.0fe9fc08.js",
    "revision": "5dad0096db01ca3258e8d46335687d5a"
  },
  {
    "url": "assets/js/3.c662bb16.js",
    "revision": "999d4f847dd386b48d352f393e01305a"
  },
  {
    "url": "assets/js/30.40fc8fef.js",
    "revision": "2a151e071503fd7e8294d7f1d722a631"
  },
  {
    "url": "assets/js/31.fcde0b19.js",
    "revision": "b3255afc95a66ba69f5ce65df5932bad"
  },
  {
    "url": "assets/js/32.d81b31ac.js",
    "revision": "22991ab59948f81c75e414b6b03f3bcf"
  },
  {
    "url": "assets/js/33.c1f3e92c.js",
    "revision": "c49c64b20ba83274dff4d5f63add5728"
  },
  {
    "url": "assets/js/34.09398f4f.js",
    "revision": "ab675773789bac1977f7afe9049ad009"
  },
  {
    "url": "assets/js/35.fb9fa7e2.js",
    "revision": "d273beb43066232c870b9fbdfb9084bf"
  },
  {
    "url": "assets/js/36.5345892d.js",
    "revision": "6ace48e91ca690fcdc4cdd7cc0f225da"
  },
  {
    "url": "assets/js/37.c5a7edf1.js",
    "revision": "250f0d60892ebdcfb6abff18946fb013"
  },
  {
    "url": "assets/js/38.9985ce72.js",
    "revision": "13d1f8906f3c5629160e4ea7555aa068"
  },
  {
    "url": "assets/js/39.f6cdbc3d.js",
    "revision": "7942cc2579af63034ba9ecf37d98cf84"
  },
  {
    "url": "assets/js/4.acee79dc.js",
    "revision": "3cac8062b479c3583323d1420d8e6468"
  },
  {
    "url": "assets/js/40.6a44f994.js",
    "revision": "a4ce547fe741e58c777b6e22a0a6c096"
  },
  {
    "url": "assets/js/41.a2847c9a.js",
    "revision": "8b4e43eeeb6781044829554bf4d0114b"
  },
  {
    "url": "assets/js/42.145db786.js",
    "revision": "a0cb4978b4d5d38fd433839cf005db88"
  },
  {
    "url": "assets/js/43.cd1787f2.js",
    "revision": "aaa08301a37c7a74608bffe00aed9e68"
  },
  {
    "url": "assets/js/44.c7fddb5c.js",
    "revision": "ebfb00526e7b1931b233b625f7101286"
  },
  {
    "url": "assets/js/45.342be2aa.js",
    "revision": "3f86e1e53dbb78ca4cf474413522f96f"
  },
  {
    "url": "assets/js/46.f0223c0b.js",
    "revision": "55937df4973c339e69ab68b614196076"
  },
  {
    "url": "assets/js/47.c3ab5391.js",
    "revision": "5a7dd73ea69eab5e0b0e117ff06b058e"
  },
  {
    "url": "assets/js/48.ab0724b1.js",
    "revision": "28de6c8aa90fa221a53b9d5695d908d8"
  },
  {
    "url": "assets/js/49.8c3aaebf.js",
    "revision": "82fbf12e27ec88f6282e964a66ecb58c"
  },
  {
    "url": "assets/js/5.1f35c3f7.js",
    "revision": "a4b944c962f7a238a28fc34c6c13a935"
  },
  {
    "url": "assets/js/50.2b87de2c.js",
    "revision": "16da12d35a78a405978e8264cb459424"
  },
  {
    "url": "assets/js/51.6637131f.js",
    "revision": "5e04dfa5bf5e603e87690a3575c568b5"
  },
  {
    "url": "assets/js/52.5d7f210b.js",
    "revision": "7c24371633795cafc276871be0c66b5d"
  },
  {
    "url": "assets/js/53.70f2d1a2.js",
    "revision": "b2852501906b1bcdd90d549d632e6bfb"
  },
  {
    "url": "assets/js/54.b84032a4.js",
    "revision": "26120177716cd253e1dcf571b6d82e0e"
  },
  {
    "url": "assets/js/55.70b361e2.js",
    "revision": "aadac8e6c40bf91f6e0af15e0260df0e"
  },
  {
    "url": "assets/js/56.ff265c39.js",
    "revision": "4973556f72003fe225fee97ebf35c95a"
  },
  {
    "url": "assets/js/57.d5dd6e97.js",
    "revision": "5fa9934893b66e846d5a650bb27382e2"
  },
  {
    "url": "assets/js/58.44109d82.js",
    "revision": "ef1c8d675d0bdf9d5446cae6cc0c539f"
  },
  {
    "url": "assets/js/59.0fd1d2df.js",
    "revision": "12bded324c309c2c5c6a536ff311908d"
  },
  {
    "url": "assets/js/6.3df485e7.js",
    "revision": "9f32ee75668c9131f69b341101667c5d"
  },
  {
    "url": "assets/js/60.d8e5a243.js",
    "revision": "21954cba2d36b1fa396d12825e81dc4c"
  },
  {
    "url": "assets/js/61.55cf716b.js",
    "revision": "4d93e79224f3e42c6521a4d1248ea577"
  },
  {
    "url": "assets/js/62.691b27e8.js",
    "revision": "d644e30aa2384b950c2379bd8cce2548"
  },
  {
    "url": "assets/js/63.14076a4a.js",
    "revision": "2ae44b5b822114cb98f1164fb929a83d"
  },
  {
    "url": "assets/js/64.28995446.js",
    "revision": "cb3b00fe3c55f113c7823837c0fb48b9"
  },
  {
    "url": "assets/js/65.2f9dcc3d.js",
    "revision": "9553abc6512e2fe1cc17f112520d195f"
  },
  {
    "url": "assets/js/66.93190107.js",
    "revision": "4fb585918258e1780378673c5da6c163"
  },
  {
    "url": "assets/js/67.ad2ccbb0.js",
    "revision": "497c4926948148bdd241fff3b2981849"
  },
  {
    "url": "assets/js/68.88b209e1.js",
    "revision": "b277610ba607719afb082c71cb5acd1c"
  },
  {
    "url": "assets/js/7.3717cac2.js",
    "revision": "143c26bdc00f3df17c4dafff975667cc"
  },
  {
    "url": "assets/js/8.f9796fa4.js",
    "revision": "8dbdb046897b2d84f1e30736cd0a8f7e"
  },
  {
    "url": "assets/js/9.36b2bf05.js",
    "revision": "1c8c72296599c73f0f4a2f8b432108cd"
  },
  {
    "url": "assets/js/app.0c2fe543.js",
    "revision": "fef9c10b1f445e3013197a39b6982800"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "config/index.html",
    "revision": "b826629017c9da1efc4b93e335ecc5ff"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "c7e4bfa59c0043b414bfcbf34d6b9653"
  },
  {
    "url": "guide/assets.html",
    "revision": "e43b16fdae4a1553ba8e7c6f13e6b7de"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "62a0f8dde022fb47a47eb1252138fc15"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "5ed6990ac2639820a053efe9845dd052"
  },
  {
    "url": "guide/deploy.html",
    "revision": "c8d61dc8ccfbcd8726df29dd91a2c792"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "16e7318105159d1f1109119db848b9e4"
  },
  {
    "url": "guide/i18n.html",
    "revision": "fe02bc697c8114a4482678cad360855d"
  },
  {
    "url": "guide/index.html",
    "revision": "13cb6fe1dee6f127dcd4819767cd33b4"
  },
  {
    "url": "guide/markdown.html",
    "revision": "752d9709db83d3f1c7532585d98903f4"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "d09916f5676e4963429cb605fd0302bd"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "4ebc004dbddcca75de1dc5f9f4ec5d3b"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "947ca8f8fa5daee13c98dac98957b1ea"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "3d3956c959488bd3967dfc37a1db4312"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "137b033ee270d407e4967b7c6ca1fbd9"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "5a19d3cd4b634854c711bae23e2a872b"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "37f75afd504e55927c7d4a8a60b1438a"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "3555717e40a80840845d26c1d5a29547"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "ddef6e56ec52419301f863982374a081"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f119b9fc7493cb093076e47ae867738f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7e69bacc71df3c9ca3618227c4744014"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "beb4e9b18f060d5dc4d14376998bc7ab"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "01e74922e88fb8dbb6704fcfb5e8eba5"
  },
  {
    "url": "zh/index.html",
    "revision": "54ce27873e355b9d693aebcc73cf55ef"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "b30114d55ede8ad3c9117514951546f4"
  },
  {
    "url": "zh/interview/headline.html",
    "revision": "0e24fb0712eea0cc2c8b15e7006394f5"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "da8550229ea9aabfa13bd28d3fa79f35"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "060045095dd91674878cc05c1d733885"
  },
  {
    "url": "zh/interview/quick.html",
    "revision": "6279295b00cd4f51379081281edb94ed"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "032482274d4bcbe1e0da84f9d83e7979"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "585e5c8b36959950286404121b9899d4"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "d7d07e232729ff559bbb40b54173a693"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "14cf5f51073dcf25fcb862b6f78f598a"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "8f7afe37de0c12799b71034f46dd1e4e"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "1357e2fde5aa459235fedd54439de841"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "4a3378f1ce01a88901a3e5ea0e8e0ec8"
  },
  {
    "url": "zh/react/index.html",
    "revision": "14800cecbf061f036ffcc77bb85afc42"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "6dbb73fb06c0e90f2c49f8834e55de49"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "3233466243ebbcee49aa4f59ac2aa0fd"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "885a8f77e8f3c24c18b1fab59d71a4b2"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "cff3a35da25c3fb4612dd15799cc5d63"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "258095b18080da4b0dce5bb5f773fc65"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "3e14bb2c2fff9238f2b75eaa9ed6993f"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "8195ef84d2b4b45cabdee81afd45000b"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "33416b414a46ff62d200816e20f98727"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "b17b04dfa75ceadca2bb337590e0e729"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "f9b5b428960ff713cf71b8cfe9a4ff0d"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "8ddb15301c643ddaf6d52bc882da28c5"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "2876d8c90f76ef6d54eafe88186f946a"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "10ae3d8784b1b6d9943d820e2d1430c4"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "80ef3e87834a210398aa5c396416fa4e"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "f1c078267dc3632dd17b57b3bbdee885"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "20f2048f5211d3cbdba3fc8442fd988a"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "d2f0c80fea7da2fc2e792fce3167c946"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "c11c86b1ab1bc15b62617ec6e0136166"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "41664b76d291a73e73916413404f229b"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "74ed5954e28a91e8f429cda60b0e192c"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "db4ab05299c8be917f904093f9a97f44"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "6be8fea00f42914c112bd136c979ba69"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "daf6bc613baa1b38535e8059266e060c"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "b31adb558abaf0c1f3221e997be2f028"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "03234e2d56600379863d2ddaba3b774e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
