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
    "revision": "d7c0706357b606c7c9a4ae602c340d78"
  },
  {
    "url": "assets/css/1.styles.52e49171.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.7d7951bd.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.8044022c.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.17f312d5.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.d8f1abeb.css",
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
    "url": "assets/css/styles.b9db2ac2.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.52e49171.js",
    "revision": "31b17837af897896436e93ef7abe03c0"
  },
  {
    "url": "assets/js/10.eef5089e.js",
    "revision": "c6805b140af80163b197163bc5ace8a7"
  },
  {
    "url": "assets/js/11.71c81568.js",
    "revision": "996e669e405daac37b2d67ca6d643785"
  },
  {
    "url": "assets/js/12.e7afd3c9.js",
    "revision": "87112c371830852eabd668f9534810fb"
  },
  {
    "url": "assets/js/13.975e3b92.js",
    "revision": "e25f7bf2e580e44bcf0d838a1895b191"
  },
  {
    "url": "assets/js/14.4b611616.js",
    "revision": "e37fd0c3e04a35d96b944931ebc9d30f"
  },
  {
    "url": "assets/js/15.caceb9e7.js",
    "revision": "fa506523eded2a3ac147719d0ab03adf"
  },
  {
    "url": "assets/js/16.ad75446a.js",
    "revision": "25f9b57b70f5aa8afe729d4222f2b47b"
  },
  {
    "url": "assets/js/17.6bbdc5fc.js",
    "revision": "3db5b99cf3105e06d6d5c79d2dd1c8bc"
  },
  {
    "url": "assets/js/18.e5f20db6.js",
    "revision": "76150e35f7ccfd2229735fc98aaa49be"
  },
  {
    "url": "assets/js/19.8d66e4b6.js",
    "revision": "c392c7b64307ec1e8fb823593df2dc17"
  },
  {
    "url": "assets/js/2.7d7951bd.js",
    "revision": "87fe052833109c0b478028491c233085"
  },
  {
    "url": "assets/js/20.70b2db30.js",
    "revision": "f6644a51054acc29e0bd1b4b03120e88"
  },
  {
    "url": "assets/js/21.cd1757bf.js",
    "revision": "60c25f97b2f05e2ac3a9f4602d957c93"
  },
  {
    "url": "assets/js/22.33b94fe8.js",
    "revision": "338e3ccad76f94076eb21d055d2be21d"
  },
  {
    "url": "assets/js/23.23d47633.js",
    "revision": "c72ac3687dc938b23f9186873c476098"
  },
  {
    "url": "assets/js/24.b248b8fb.js",
    "revision": "1a49740cb5d2bf185f0261fb39deb90a"
  },
  {
    "url": "assets/js/25.a8f737f6.js",
    "revision": "1c9da274f62afb0e7ff1c5a188969f4e"
  },
  {
    "url": "assets/js/26.85f49cc4.js",
    "revision": "3317a12912bc509cea04b6370b3c1d4f"
  },
  {
    "url": "assets/js/27.e9013213.js",
    "revision": "c4b7ac46fb2fc94cebe336006b81d860"
  },
  {
    "url": "assets/js/28.ca8f9812.js",
    "revision": "d9e9bbbe309e8a878250906253f46068"
  },
  {
    "url": "assets/js/29.5ffd722e.js",
    "revision": "3bbf912b8d0769360cb3399d0c85448c"
  },
  {
    "url": "assets/js/3.8044022c.js",
    "revision": "19ad493a5d4bb76f8a004b0b3da7e7df"
  },
  {
    "url": "assets/js/30.2c568555.js",
    "revision": "9e457c9edac3d2310b09f88172cc2ee1"
  },
  {
    "url": "assets/js/31.d9ab5e73.js",
    "revision": "4a9425f546f1f5302e9d095e9357c4aa"
  },
  {
    "url": "assets/js/32.56b3210e.js",
    "revision": "d0195f5a02cc747030ce64a883c9d2e1"
  },
  {
    "url": "assets/js/33.6c770e32.js",
    "revision": "983947388b0cf7ebe786e523b0d65ba2"
  },
  {
    "url": "assets/js/34.ba85afd1.js",
    "revision": "3f494548a479d5ab8ea9c1074bc3ac67"
  },
  {
    "url": "assets/js/35.9fcf35d4.js",
    "revision": "8a80caf18b7e197f04d24645a4d67e06"
  },
  {
    "url": "assets/js/36.d9aca82c.js",
    "revision": "6f9e7e003b0fe9db2af8e8c4c6e5968b"
  },
  {
    "url": "assets/js/37.6f30d35c.js",
    "revision": "75b72131e8d701f22eb5d20bec640bd5"
  },
  {
    "url": "assets/js/38.7439f949.js",
    "revision": "37a58d140f68060b0ec02d8219bc2208"
  },
  {
    "url": "assets/js/39.5f6a1043.js",
    "revision": "7cea77215531bbb0fc3210a73e2090ab"
  },
  {
    "url": "assets/js/4.17f312d5.js",
    "revision": "a5dcf7ba9dde09d925e295d66c6e566d"
  },
  {
    "url": "assets/js/40.189b127f.js",
    "revision": "66e53568f6c99229e72892a591cfeef9"
  },
  {
    "url": "assets/js/41.902e5cfb.js",
    "revision": "f659b5ba1de0e167f2f9e671906de077"
  },
  {
    "url": "assets/js/42.1ac9cd96.js",
    "revision": "0d604966d3128f74e5e098c0b934c192"
  },
  {
    "url": "assets/js/43.d4e3478b.js",
    "revision": "3b211b1bfd234833f60e8402b2d40583"
  },
  {
    "url": "assets/js/44.fff416a9.js",
    "revision": "e59c7b58079352045fcf87370f31a895"
  },
  {
    "url": "assets/js/45.5548faf7.js",
    "revision": "61c083c4f99e195de150628c24798b41"
  },
  {
    "url": "assets/js/46.15471261.js",
    "revision": "c6f4a3bcf952505172d2aceeeedb5002"
  },
  {
    "url": "assets/js/47.30e9f543.js",
    "revision": "4ca66382320d516ef5e0c877628ae081"
  },
  {
    "url": "assets/js/48.cf637747.js",
    "revision": "f0db1bbc3078fa93363396475e92549f"
  },
  {
    "url": "assets/js/49.3d4a2e4f.js",
    "revision": "a8618210e814a32affcb213337fc3141"
  },
  {
    "url": "assets/js/5.d8f1abeb.js",
    "revision": "ce7f55c1bb3467c0a5f632fd545f1bdc"
  },
  {
    "url": "assets/js/50.80c35e98.js",
    "revision": "2cc6d34419d9ebdcaeb6e5952223d743"
  },
  {
    "url": "assets/js/51.5ca52d7d.js",
    "revision": "cd6ddd9a4025bd9b49003ed4cff53c8c"
  },
  {
    "url": "assets/js/52.2a0c2588.js",
    "revision": "2fee8a92c327d585e0f5502c5ed45270"
  },
  {
    "url": "assets/js/53.2ebcb162.js",
    "revision": "c1384419e6b89272821406065fcabc9b"
  },
  {
    "url": "assets/js/54.013fa4cc.js",
    "revision": "b970061c5c5b01e4420217d24ec99812"
  },
  {
    "url": "assets/js/55.c9706a43.js",
    "revision": "a50931b43680536855211e71edaec1dd"
  },
  {
    "url": "assets/js/56.d556b1ae.js",
    "revision": "f353fd35447ad152f9ac64cee57bfdc0"
  },
  {
    "url": "assets/js/57.2584f737.js",
    "revision": "e3c37c3ed401b94b4dbe203dad2c7225"
  },
  {
    "url": "assets/js/58.61683304.js",
    "revision": "8aac27f6d256065fdc74811abd9ea1d3"
  },
  {
    "url": "assets/js/59.2a85a0d2.js",
    "revision": "3fb5b1ee837bfa5e0c76de695ff06711"
  },
  {
    "url": "assets/js/6.46d20c68.js",
    "revision": "e4f8956924dfbc2be5abc615409d2c90"
  },
  {
    "url": "assets/js/60.5f09acc0.js",
    "revision": "3eba41c2f10197b332646f7c35577074"
  },
  {
    "url": "assets/js/61.aa7f0e47.js",
    "revision": "af734af2025076f24285a0b6ab585462"
  },
  {
    "url": "assets/js/62.f0118191.js",
    "revision": "e3c8838f11783aca1d7ce7e6b55ae9fc"
  },
  {
    "url": "assets/js/63.150b0eff.js",
    "revision": "264a201d743b265d6a31ca12a62f4283"
  },
  {
    "url": "assets/js/64.b933e958.js",
    "revision": "66afa27e06d85e88e1d5f8c81450bf32"
  },
  {
    "url": "assets/js/65.ca086b7c.js",
    "revision": "1624d129502bee27ad4447831a367f22"
  },
  {
    "url": "assets/js/66.f5b73968.js",
    "revision": "240e0d172e726fe1161564a0ad63c9df"
  },
  {
    "url": "assets/js/67.bc1d78c1.js",
    "revision": "b1ac256fa9cbbc4901ff958e4faf5d15"
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
    "url": "assets/js/9.f84d5e04.js",
    "revision": "47677d49c6fb3f32d75e9bc9a3bbb1fa"
  },
  {
    "url": "assets/js/app.b9db2ac2.js",
    "revision": "5d0939da836c95e2ea3ff41234e71f24"
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
    "revision": "5275b533586fb04fcea7205a5fc3631a"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "120f0ee64d7f03a30e75cf99b0745631"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "7d70a8f5d40d3d1bcff9f23813c4e87a"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "37da78c23529a85dea97006c23d448f9"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "d1f58687cc4999c771755278221a6b18"
  },
  {
    "url": "guide/deploy.html",
    "revision": "7c826b9dbab4397255c5d640eddb4f93"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3079f7136c2540ae468c4d4378420ccf"
  },
  {
    "url": "guide/i18n.html",
    "revision": "09e60e450ff496f5dca7e6a9102f5d8d"
  },
  {
    "url": "guide/index.html",
    "revision": "27b3b027d26654385f363eb0562804bb"
  },
  {
    "url": "guide/markdown.html",
    "revision": "15bbddc5296b21df755dcb05cc0603d3"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "21aa35de6fe2ffac5402df25b5f0477b"
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
    "revision": "020339a140ee1eb22376bada4098c8de"
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
    "revision": "be89aa77555376817119a20dcc0d0f56"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "90fa67c8d0015dfd3a2cdb53ab521336"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "8a7839442fbfee88d29a456eb625e12b"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "929dcc80defc80d334db8de9eab15e11"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "c760d2af73e44d1f065c983ed165943f"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "1f4cab5a3e7731a0527aa3899b958198"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "626f9d8633bc385957b5aba48fb75775"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "55d9c16f437e7cd621bf38fc54d38e1b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f803cddc9295294be4f3e8daa38fac7c"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "5af25eb8fad2ed1bc2672427e553eb12"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "06fe131a193b36a624d282f89a3c5b21"
  },
  {
    "url": "zh/index.html",
    "revision": "fe366f2c2c09759d49150c5ce84f6ec4"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "5c9b4980efb05541d8b1022b66e74cb7"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "dbe0fa53300acc7de2a1e63fc90502e5"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "863d1325cf27695d6329800b89edb7fe"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "4a5347277612fef0c0036604e2eaf376"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "e3b99065031e31c12c70767e044a1c93"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "877102e041c6c738ae6954c4d763329a"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "b9d2750c38e5d9737a111c0e3e23ee6e"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "bce8ce9b96b66eba08fd39b771951d2f"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "a43cf6cd8bf20219689ac42e9afad888"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "d13efbc7af95f33bbba57e01a303aa5c"
  },
  {
    "url": "zh/react/index.html",
    "revision": "9905cc7e8a68f58b45aed19afecb7a9f"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "3a05d6f6b382d2e2bf5458ec127f6a41"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "cf190b8e48293435325fd7db0e664a82"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "1a8ab24b638bae56fc423c36f20f1797"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "c0c30435f450c0501cb34679f10fcd16"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "0cd4a1c4259de679670f2775635475ca"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "0ebfbe6e701d16af7210816a36ddac83"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "bac6dcc236ba3d098aab68543444721e"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "9cbc8fe8abc989073f65dde3844b7593"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "41f6b1676a3be671813cd5420f028e62"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "4e909deb1d6af001f09ca680e210beeb"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "4c331e38cab0e88618aba9986030be38"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "ac2b8e730fbaef4a645c21887c1a41b9"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "df89f3f8a3268387d03718247d40a3f3"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "0b9f1da1d3c317d90c5e9c40200fbfe8"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "1242e641996e47c65ecc2e6e42907d62"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "9d216e1fddfd6a3316298e571f5462fb"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "689cbf92c4e440218c1e9ee758452205"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "780995385c626f9d44ce4e961b9c2450"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "548bfb9cadbb35d20ee4a006c55d6a2e"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "76d843805d1a046ce43eda233edb5942"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "c37a44263ca0dd50ce07700daa702a77"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "b47c5f92a0e56642b4ab52410d650933"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "47c78c7b69d5c0bad8b6c29e0cda6cd4"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "3ba606ed9cc4ab9d57cbd59f4860cad8"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "a8c26fcf61697ac8223fb5be9a837163"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "5dd4058d0090f586695b25b3e9a633c3"
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
