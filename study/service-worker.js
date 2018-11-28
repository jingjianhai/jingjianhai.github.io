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
    "revision": "01b4ca64a9c1704489b5d88f853d4414"
  },
  {
    "url": "assets/css/1.styles.0904406a.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.b5870de0.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.c677376d.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.17f312d5.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.ba1813eb.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.46d20c68.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/7.styles.3717cac2.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.f99a9e01.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.0904406a.js",
    "revision": "cb072d3da6daa6ea6301586e104d4d2d"
  },
  {
    "url": "assets/js/10.eef5089e.js",
    "revision": "c6805b140af80163b197163bc5ace8a7"
  },
  {
    "url": "assets/js/11.c84e3978.js",
    "revision": "0950f39e4f0f5eb0fbe14c4e19d17cd0"
  },
  {
    "url": "assets/js/12.e363aa02.js",
    "revision": "8d40599d09def8c2f7311aa94e9aedd3"
  },
  {
    "url": "assets/js/13.519cc079.js",
    "revision": "8f13a1e9ecf632c1380cca2cb1bc2fe1"
  },
  {
    "url": "assets/js/14.8df84f22.js",
    "revision": "8bcd160aba54544921fc062afb715b6e"
  },
  {
    "url": "assets/js/15.f08d216c.js",
    "revision": "111c6511a5e81b3b4b7df7810463774f"
  },
  {
    "url": "assets/js/16.d1e35e63.js",
    "revision": "9713b13ef23b8e0306ec3a44d3b9b034"
  },
  {
    "url": "assets/js/17.048201bf.js",
    "revision": "a7d97aca43b2ad75fa13638988df8a4c"
  },
  {
    "url": "assets/js/18.82d222b7.js",
    "revision": "1b9bc29b7e2c92d540fcc9560661eff7"
  },
  {
    "url": "assets/js/19.a3ca9dde.js",
    "revision": "32cfa7b902218453912767cecf34caa1"
  },
  {
    "url": "assets/js/2.b5870de0.js",
    "revision": "12a32e6e5dd6dbfd46d8814a2ebd7520"
  },
  {
    "url": "assets/js/20.ed5a7e31.js",
    "revision": "097b8545f40a1de575149866aca88695"
  },
  {
    "url": "assets/js/21.b5807475.js",
    "revision": "801d7856b0e074cd81dc9ef188f823f4"
  },
  {
    "url": "assets/js/22.e9db8214.js",
    "revision": "8db39e3dbab31bfd3d76da084ed1c5b0"
  },
  {
    "url": "assets/js/23.11d28605.js",
    "revision": "33be561a57ed05ae1d4fb6d4f7ffe346"
  },
  {
    "url": "assets/js/24.540b8644.js",
    "revision": "0c590e9a3199b29e61251674e05d1499"
  },
  {
    "url": "assets/js/25.d52f8c8a.js",
    "revision": "8f8e292a0ed0394fc87ff0683a1ee583"
  },
  {
    "url": "assets/js/26.019bf4fa.js",
    "revision": "bf23d2d589ab3e08b080f9f82c421ce5"
  },
  {
    "url": "assets/js/27.8563ac51.js",
    "revision": "7ed2ed30d2cd6b96d8ce4a28e70e8600"
  },
  {
    "url": "assets/js/28.2a7ff017.js",
    "revision": "f291fcff5ec14582eb18945fecaea6a5"
  },
  {
    "url": "assets/js/29.55329b9a.js",
    "revision": "0fc9a2c5857e871f7301c0b5da8e9164"
  },
  {
    "url": "assets/js/3.c677376d.js",
    "revision": "c7265a6c02effe9292b3b45cf21a492e"
  },
  {
    "url": "assets/js/30.71227434.js",
    "revision": "281e351979b97e1a85e318ae9ca2e8cf"
  },
  {
    "url": "assets/js/31.dcac3149.js",
    "revision": "6edf6843cc47371eef15eb7dd9d4d605"
  },
  {
    "url": "assets/js/32.420e6b3b.js",
    "revision": "885edeb72a02f53733774255fa9b00b8"
  },
  {
    "url": "assets/js/33.08c4fc46.js",
    "revision": "b008e547a1ea9cec434bd451f55a8485"
  },
  {
    "url": "assets/js/34.224f5bee.js",
    "revision": "1eb697fe6e392f976bab6860c089bc20"
  },
  {
    "url": "assets/js/35.0a8c86ec.js",
    "revision": "53a86ec652b9c65882022cc0792544ad"
  },
  {
    "url": "assets/js/36.5755dd3c.js",
    "revision": "a9a32d94f3276970abeaddec59648ccd"
  },
  {
    "url": "assets/js/37.e98bd568.js",
    "revision": "cdd1193ce73035adceb60faa53bc95be"
  },
  {
    "url": "assets/js/38.7be5ba1a.js",
    "revision": "26390ffa1c038c29dafbb13f97755429"
  },
  {
    "url": "assets/js/39.38e2b35a.js",
    "revision": "72e360aa2a58ffba1b2848fc5feb17db"
  },
  {
    "url": "assets/js/4.17f312d5.js",
    "revision": "a5dcf7ba9dde09d925e295d66c6e566d"
  },
  {
    "url": "assets/js/40.2880e1e3.js",
    "revision": "0059eb0465f5cb7f1094cb9e5f98579f"
  },
  {
    "url": "assets/js/41.b021e9f2.js",
    "revision": "0eb52e7911aed727a55f23a7ea30d879"
  },
  {
    "url": "assets/js/42.1276df07.js",
    "revision": "985bdbd88dc9dabf0f70ade382d05be7"
  },
  {
    "url": "assets/js/43.8888b25b.js",
    "revision": "3f50f9161b08eb5c4c0eeecda7718331"
  },
  {
    "url": "assets/js/44.11bcc8b9.js",
    "revision": "c8dcfcb2f9ea69fa2968ae5a96e1d594"
  },
  {
    "url": "assets/js/45.3ea654c5.js",
    "revision": "fd9d8fdd7f3ffd47ab9b9405b8031da9"
  },
  {
    "url": "assets/js/46.88e9b875.js",
    "revision": "6ada3432c82893d56084f43941d2c8e8"
  },
  {
    "url": "assets/js/47.99ba0b15.js",
    "revision": "f8034e82dfc1d3a5f024fd9a9fea1cae"
  },
  {
    "url": "assets/js/48.eaf69587.js",
    "revision": "ca6114a9a032158fb6b2de4e6c7951bc"
  },
  {
    "url": "assets/js/49.c049b9b4.js",
    "revision": "96fde1c10e78bc4cd8c953625e0863b6"
  },
  {
    "url": "assets/js/5.ba1813eb.js",
    "revision": "35752102dd4fcdc2be04910261116042"
  },
  {
    "url": "assets/js/50.bf40b02c.js",
    "revision": "9a79d8b7da84e8eba102f3a913ad9504"
  },
  {
    "url": "assets/js/51.2c461375.js",
    "revision": "6fa47ed8564e70c27d6133ad183f5e09"
  },
  {
    "url": "assets/js/52.b0199d80.js",
    "revision": "a17b4d4b356742dfc183b3c34c2b719e"
  },
  {
    "url": "assets/js/53.a13355b7.js",
    "revision": "bad9745a7afdeafc9512da0a27c781f6"
  },
  {
    "url": "assets/js/54.a9a70b66.js",
    "revision": "177f50bfd80af70b44def0c579aa89ef"
  },
  {
    "url": "assets/js/55.265dc784.js",
    "revision": "8548b68e295d3012a1e6f9ea935fabde"
  },
  {
    "url": "assets/js/56.15004143.js",
    "revision": "ff6170c1ee43e3f9a0dda40542bfc0bd"
  },
  {
    "url": "assets/js/57.85d4d333.js",
    "revision": "f230adde7ae991db306461bac9da334f"
  },
  {
    "url": "assets/js/58.a7e7786c.js",
    "revision": "3b9584e1eb381ab58dcbb8f79df9cb4c"
  },
  {
    "url": "assets/js/59.575ec4e5.js",
    "revision": "d5c26621a24017e1d8fd255b72a9823b"
  },
  {
    "url": "assets/js/6.46d20c68.js",
    "revision": "e4f8956924dfbc2be5abc615409d2c90"
  },
  {
    "url": "assets/js/60.8e0fc97e.js",
    "revision": "e6df9abed1fd8723627136c467d1fee8"
  },
  {
    "url": "assets/js/61.0755301b.js",
    "revision": "e1296f59aae949ef9fd723f538bae275"
  },
  {
    "url": "assets/js/7.3717cac2.js",
    "revision": "143c26bdc00f3df17c4dafff975667cc"
  },
  {
    "url": "assets/js/8.af9ce757.js",
    "revision": "e7e2cf97b3ac8c3f25e0ed88b4c6a51c"
  },
  {
    "url": "assets/js/9.951a7aeb.js",
    "revision": "514346486da9a1657d272c397fc83e71"
  },
  {
    "url": "assets/js/app.f99a9e01.js",
    "revision": "aedfdeb43bde768b6c14b4038d80e08e"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "config/index.html",
    "revision": "c73552a664e1aa2946d96ee100136576"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "54e61074a11ed6ded31b4ae9948fb65a"
  },
  {
    "url": "guide/assets.html",
    "revision": "16a3fe7931c939b9cbedb20496449c52"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "0643709d900fb3ae37931cae7af25c48"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "5bdf2e4e51ba84d5a8095d661a8e221d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "8e2090789b395eb79887f38799a9c400"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6c9fd7b772db4d15fb5f3f3d2125cc4e"
  },
  {
    "url": "guide/i18n.html",
    "revision": "d40702561e3c6b250ef92a3d78e9bddb"
  },
  {
    "url": "guide/index.html",
    "revision": "4b95be7893bf253017b24bb33f41e22f"
  },
  {
    "url": "guide/markdown.html",
    "revision": "f04f401a109cf850a7e01b7cd6138c12"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "14a60f6cc3057941abcfb38e4000eb24"
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
    "revision": "9a5422a296fcfbdc61e37f3a2dd1efb4"
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
    "url": "zh/ali/index.html",
    "revision": "bacd61c21677380b338ed14fef9fdd4d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "e613e770ee5075824597209f3e88f2f8"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "e6ba0fdb6b8dd4f26371a53fc42c9c63"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "be2415384e19f83c7b50f2c5ab02ec07"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "dbf138ea114eccf8376f5509d8f15a0e"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "b34c2b7f0cd8a5c052ffcfdcc927b0de"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "90c78a3a8bd718719e4292ca43d19fc9"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "0b3086e15c2b2b1714b818f2285962cb"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "24341f9b188ffd8f51d2786b7b6e900b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "86f0eda4db200f9e628836dd96f3c07e"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "4b609a07aa3d27661ab5d6186178e403"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "30b959c36d15f5a23d8e6f4f2cd60788"
  },
  {
    "url": "zh/index.html",
    "revision": "04dfbcc28262ad7d02870e7633a7c19c"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "5c772603af344212f389f89fac76d345"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "3c43c29ff5e94162187c7bbcc28d1a65"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "7f9e84e7932f6000cd09e866831c4518"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "54d2a87a5dcaaf69c27ebf0a851dca0a"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "bebb2047913d30ebbb1f37f5cbb0b811"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "f763b2c8d8838ec909c8e30b583e5be5"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "e1c47f618808a8292f71fe47870f9971"
  },
  {
    "url": "zh/react/index.html",
    "revision": "880f7ecaa4a021a9f01dee62af1ecded"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "cdd41d5f70f3c43a2281c6a884ef97d2"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "ef61328905232d7483cccbeb336bfa77"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "7239a9736958c48d62c033eb6526df92"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "74966884ef06ed11edba2d94ecd62d65"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "801750cd9e884a1bca23843cf372d289"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "73a8f4375c59d2423fdac7e6ff9c9e38"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "87ada0cb1ab97f8417aaa84e298a713f"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "97f5518be89e567b3fb4e71494be68ed"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "cc174c35b0531e4ccbb7336eb4932829"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "0c06108ad626eb00bafbead52eed31cc"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "4d164e201ad7b79b8dc56f735fcfd9ed"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "2c5f4f924b7e9a015dc8de729c7ca78f"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "a27217e2e8d05e864d05cee0a7ea224b"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "06181e81c5155ab74ffd3a5ec910798c"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "9b0e14d84e15950ed7fa1d2a6fe25fca"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "2801ab29a837e2fed3dec05d877d6d70"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "b7b88e7cdacd77c53a9becb55c54e93d"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "f4b92a414e458a8af6b247358e992df4"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "95f483f974efa6eec5c04fd2c8ad6072"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "8fd2c4983ed54969ac360a649cb072ca"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "ff260d200b6035d45895f1f3354bc0cd"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "1fe9f89de279990dec00490d50e25ddc"
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
