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
    "revision": "1db14a2e71832315f719e136e8bb447d"
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
    "url": "assets/css/styles.360a5eca.css",
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
    "url": "assets/js/11.f9d956fb.js",
    "revision": "97b05c8c94c20bad1a8f44eeff2b5161"
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
    "url": "assets/js/31.7fbed4f0.js",
    "revision": "31e97b25563726d2acac1c385448a3b2"
  },
  {
    "url": "assets/js/32.062e6162.js",
    "revision": "f17f7a3620b633dc214ea87986c59afb"
  },
  {
    "url": "assets/js/33.b26001ac.js",
    "revision": "17c24f1655de8e215fdbcedd0dc2276f"
  },
  {
    "url": "assets/js/34.09398f4f.js",
    "revision": "ab675773789bac1977f7afe9049ad009"
  },
  {
    "url": "assets/js/35.b5141b14.js",
    "revision": "a6e41b6b5c58a7476768b25781dffc4d"
  },
  {
    "url": "assets/js/36.eace8d74.js",
    "revision": "d9524c174deb0fb23c4678734291e387"
  },
  {
    "url": "assets/js/37.5382852a.js",
    "revision": "b6032b23aa658caefa2ecc9e91c7b532"
  },
  {
    "url": "assets/js/38.5a81f436.js",
    "revision": "622de9aacb1a7cd16150974048d1a49e"
  },
  {
    "url": "assets/js/39.7f42dfb8.js",
    "revision": "50b6aa3e097479ebb3d07252b5c352ee"
  },
  {
    "url": "assets/js/4.acee79dc.js",
    "revision": "3cac8062b479c3583323d1420d8e6468"
  },
  {
    "url": "assets/js/40.c5d2ee81.js",
    "revision": "2d110a7fafce7181d301a9a559315501"
  },
  {
    "url": "assets/js/41.b82ea8e8.js",
    "revision": "4ed1c0e4ced7a33f8445e622b73afefe"
  },
  {
    "url": "assets/js/42.244f5144.js",
    "revision": "da846ac93aa73992e928cb539141b390"
  },
  {
    "url": "assets/js/43.69f731ee.js",
    "revision": "ae838b97d3dd2b139327882dc536841c"
  },
  {
    "url": "assets/js/44.08ff1f41.js",
    "revision": "34efdbdcc344e5135148b56078a03022"
  },
  {
    "url": "assets/js/45.704b7fcd.js",
    "revision": "02165b3facdb55580aaee4f8cd436006"
  },
  {
    "url": "assets/js/46.f7ec2d7b.js",
    "revision": "2ebf822e495c9ceeb4332fef43076dfb"
  },
  {
    "url": "assets/js/47.6f582600.js",
    "revision": "7760f72bdaba3ae7bab36bfa827c87ab"
  },
  {
    "url": "assets/js/48.f09c6250.js",
    "revision": "0d920ce3525e9c6e0506313fab415bc7"
  },
  {
    "url": "assets/js/49.8de25ca6.js",
    "revision": "fb349cfd059c98a5b1d883bee08d90f5"
  },
  {
    "url": "assets/js/5.1f35c3f7.js",
    "revision": "a4b944c962f7a238a28fc34c6c13a935"
  },
  {
    "url": "assets/js/50.347a83e6.js",
    "revision": "34516f2e72e5a71a4f204dd360dd6dc8"
  },
  {
    "url": "assets/js/51.8caf9ea7.js",
    "revision": "07deb81b07c851f853d268a8fb70af2f"
  },
  {
    "url": "assets/js/52.ad876462.js",
    "revision": "ad9e38a8352b6b9ccecf1e9aeeb2f085"
  },
  {
    "url": "assets/js/53.94590d46.js",
    "revision": "19d2415bf084bd283985cbef0845b5e7"
  },
  {
    "url": "assets/js/54.c4806ab4.js",
    "revision": "db3b99ebc85a3af53b4424ccee4edb38"
  },
  {
    "url": "assets/js/55.d4621f80.js",
    "revision": "97b39961a549a179012e44d836950432"
  },
  {
    "url": "assets/js/56.80df66ef.js",
    "revision": "c3959707cb16118d54899a39a3b1b304"
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
    "url": "assets/js/app.360a5eca.js",
    "revision": "2060a3d561f9a9e9c580525216abb935"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "baidu.png",
    "revision": "e989d76137aa87abd8d4acfa195b499c"
  },
  {
    "url": "config/index.html",
    "revision": "5e9286b9a2eb382f08cad273b7ee800c"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "30f191bfe17142c84eb7598d917e1431"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "46c983b9a0a083d44be7a7805c30c7d9"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "83b29d6fd5e8cd253efb3f992c4e58ac"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "c4061bab07ac8ee368e98260294b3747"
  },
  {
    "url": "guide/deploy.html",
    "revision": "dba214df66df3b70d14c03f367e053b3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "792815c22758e9ddbb8e1b94d070664c"
  },
  {
    "url": "guide/i18n.html",
    "revision": "55314a22a67b422ecc538cf32ec1ea47"
  },
  {
    "url": "guide/index.html",
    "revision": "958c0605ecd4b7ebb08a48415fabf3fa"
  },
  {
    "url": "guide/markdown.html",
    "revision": "a2906f13984e69b4fd4487cbb7a66be1"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "0a464f5474100de7379b789bc059c1ea"
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
    "revision": "713c39d7b19f3d7c1a93201a1180389e"
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
    "revision": "a28c97fd597f0728c30445301580579b"
  },
  {
    "url": "zh/config/index.html",
    "revision": "8261253243e401ee95c2936d9fef4a77"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "03f699fb308939e2dbe597e71bbe56f9"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "c23f62cb24b4473550f74f9a467eb5a1"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "0e4d49c5a0c11ad7c44a265194489c86"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "6c4003d7208d8969a7acb4c9d9fc826c"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d23700047b0609297cbfb09c33eb2edd"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "89e283855799b99953937c35b0908032"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5d449425c533e6752d1db8c80143a74a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "8c0ed0d4aa49e960bb09b160bb2d928c"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "46481cd1f133025fc3cdc1073d6cd647"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "388fedc566a2d88cf3357ca942084d54"
  },
  {
    "url": "zh/index.html",
    "revision": "e6f762138611a6943a7a4aade33c1472"
  },
  {
    "url": "zh/interface/Yuedu.html",
    "revision": "138667b6451ac88984ee4d067ced52df"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "f3067531e54d3919426d55b929f61f31"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "d5a53a480ef7ebca7ed619d1d0534c73"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "e4eaaab3749bb8e1e23686fce2095e42"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "f876001c9d2e9f647245f6ee7a786045"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "755bd08d2c39f2a9aabb676d736e079d"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "d928b6029ef047fd609bf1f82ea99452"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "dce391ed2fefdd5a16ef4567cccf8f35"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "f35b97e158d638079cf1e63900364051"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "6514084a973041d8ba0e91ebebac51cf"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "d05efa5e96457400102bf780860a0e57"
  },
  {
    "url": "zh/react/index.html",
    "revision": "a5531218fefc26d2c684789cfd274772"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "0f98491764d5f315a3dfdbc307c23c3c"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "52c49dade0e2a2ea71fd636a49d4ed40"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "fc1b0325b784ebe2978d03fc3c5bb371"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "d2afd8f1c9319203e06ccb43f9399a2f"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "bb6bb61e9cf4132b168fcf52abd6ada7"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "5c5e46ca5eb65d39e2452b24ff8b1f9b"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "4d8f3e3bf92cb861ff1899513296af31"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "b705bb6e7b00e38d42107c00eddd78d2"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "09e86014cd58edb155565a8fc74263eb"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "503d6d42ab89ba889fa77eabb28c53f0"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "d672bd8fa0073c98b07f27111490fa3a"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "3b963cc128bb7d2c418672ee690e9e41"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "0311911be1b803ae665c4717cfe9dbc7"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "e710cd62a618367cd2d3de3bee9ce5c2"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "e843ed32198712e16d1d930d0ed794b0"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "ca530064a85ea208a474a81cca92d759"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "d2ac516e7eaae20a5a3543cef07cdfe3"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "dc2b0ef4a4eb3d851d19eb83be41452a"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "60e33e5d6d1d034b0b68bf2be0bc6bf4"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "c45d876d2b1bdf0a91ba9cab9c0d10a9"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "a067b92f35c57b8d13cb22903a9b8995"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "c02cd24da5d695db4883789e21998fd9"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "a49286bb9ab2b9d1993daab9e5389482"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "94021e734acc56e029ea1a90e50a7b1d"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "973f058eb8f212e72c343ef2cfea2371"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "4136e81e35f1d86224fd69755c3ab9f6"
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
