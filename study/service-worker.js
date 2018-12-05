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
    "revision": "6e73e80eabf1134882fe907a59cee3fa"
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
    "url": "assets/css/styles.b8c44707.css",
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
    "url": "assets/js/11.b5564d6d.js",
    "revision": "12210d328163bb80debf145320b312dc"
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
    "url": "assets/js/32.b49b4f28.js",
    "revision": "2fd5c32e0e5011ca996735130d5c31a5"
  },
  {
    "url": "assets/js/33.eeb08925.js",
    "revision": "5987562cdbf302f9e4bb1db04fe5f417"
  },
  {
    "url": "assets/js/34.13f84a9f.js",
    "revision": "c0472b9b7bfe585b76c6e4c61db4d036"
  },
  {
    "url": "assets/js/35.ac3c9719.js",
    "revision": "a96aa5be2cc4ca374d8530ef93364609"
  },
  {
    "url": "assets/js/36.1298c60d.js",
    "revision": "b988a57a9812b97ade69bef181ca3acc"
  },
  {
    "url": "assets/js/37.da12f089.js",
    "revision": "3893379764d3e759093dbff2b527c4e8"
  },
  {
    "url": "assets/js/38.9112a16f.js",
    "revision": "bfe9d8d52b28c9d0a1986157b9bddd91"
  },
  {
    "url": "assets/js/39.892e7448.js",
    "revision": "54451f64813e9332b392d540fb0480e9"
  },
  {
    "url": "assets/js/4.17f312d5.js",
    "revision": "a5dcf7ba9dde09d925e295d66c6e566d"
  },
  {
    "url": "assets/js/40.87f14ece.js",
    "revision": "5635373970440ee9418f0d50770213d1"
  },
  {
    "url": "assets/js/41.660b18d8.js",
    "revision": "c58a55e07887673c0c9c3369c7741e5e"
  },
  {
    "url": "assets/js/42.492fd6ac.js",
    "revision": "26169a56ff10e71562954b6e1ff63e0e"
  },
  {
    "url": "assets/js/43.f4849b62.js",
    "revision": "19e67ee596aeca1a5c799a753ecb336a"
  },
  {
    "url": "assets/js/44.71f0f0ee.js",
    "revision": "d0dd24d9139c52ae05e1d8f0f81e4255"
  },
  {
    "url": "assets/js/45.9c3a6248.js",
    "revision": "26275cfc901b3fdbec3bc20f386cfe68"
  },
  {
    "url": "assets/js/46.5c16e925.js",
    "revision": "1b6249d0cfbb77cbbf0ab76da5021b95"
  },
  {
    "url": "assets/js/47.a94568bf.js",
    "revision": "0659ff0f5278505c08898c7aa94de864"
  },
  {
    "url": "assets/js/48.b9e65257.js",
    "revision": "9016b69d61940e60122245ee8f93159d"
  },
  {
    "url": "assets/js/49.0ede544d.js",
    "revision": "4c32b98f55c1c3daa27ca34280474512"
  },
  {
    "url": "assets/js/5.d8f1abeb.js",
    "revision": "ce7f55c1bb3467c0a5f632fd545f1bdc"
  },
  {
    "url": "assets/js/50.07603c54.js",
    "revision": "ccc38e15f0426691eaa9bdb3a0576d68"
  },
  {
    "url": "assets/js/51.1970a8b0.js",
    "revision": "2f7b027e20fd809f33e3a585f1a2d1f8"
  },
  {
    "url": "assets/js/52.c4b5900a.js",
    "revision": "162db160e2ec78b259ff50d350f36749"
  },
  {
    "url": "assets/js/53.3041bebe.js",
    "revision": "dc6778d6c88104a5abda18b998784af8"
  },
  {
    "url": "assets/js/54.1f206341.js",
    "revision": "53263251f1eb8c1667a952a5705de54c"
  },
  {
    "url": "assets/js/55.1a8f9c43.js",
    "revision": "1f3b22cb4a590df7783872cca132133e"
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
    "url": "assets/js/app.b8c44707.js",
    "revision": "e4c798efd342af70fd31cf2b654f1c92"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "config/index.html",
    "revision": "8a76212d1b1db510f3321e66ec26644b"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "f48aec5d8f0dcdb8ab4764f0309ae809"
  },
  {
    "url": "guide/assets.html",
    "revision": "66a27d98653d9e5a50321e6955c4e058"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "8da3a6cdfe4c9bffeac23e8bcefd6518"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "0cb59b4ca803fdfa01573634a4cb1e25"
  },
  {
    "url": "guide/deploy.html",
    "revision": "6e8b87b48cff616a54eb88b9a85de4e7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6668fc347062e044cac114b69dcd485e"
  },
  {
    "url": "guide/i18n.html",
    "revision": "d723fddb7d85d18dfd40e5ed4f4b402d"
  },
  {
    "url": "guide/index.html",
    "revision": "117893199eee3c45e8da4b8cb0f84c2f"
  },
  {
    "url": "guide/markdown.html",
    "revision": "2bb006373d0432bfd6c6660bfd2c642a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "4af8edae0ae0bba89a0366f5321e91af"
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
    "revision": "9c336db171f3aaf2f9e5433ab585f8a1"
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
    "revision": "35e75021dcf2941daffabf5e7b13cc05"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "d3823c0fc0a5cc5bc53656e9e5dd48fa"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "582b031bdbdb530ed6a649bb6f17e272"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "7e0391d5661df4a440abb2114a141747"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "371eb63df6f5c04d89c330fc6f86f32c"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "328acedbea0e7d48397cd8006f69b083"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "7edddbdc70ce4f40a5f98969dec5ab92"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "925e7a1bfb9dfec56ea3cc91d3331333"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "aef255a232e6d09de3dc7798b1be04d8"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "5d3a25a9eb107996fd69946b2e0369e8"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "665df3dd26d24bdcf2389f1db37f01d9"
  },
  {
    "url": "zh/index.html",
    "revision": "69df54debfa3f230fb6072a279595e8b"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "6b1e354f4f08e478f83376173ac6e559"
  },
  {
    "url": "zh/interview/headline.html",
    "revision": "2686d83138006af900bac37cf127a6e0"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "72c3e851eda490565a1764a905181b69"
  },
  {
    "url": "zh/interview/quick.html",
    "revision": "d07d142e776a0c14a23fdf8432ff97cb"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "70df7163143571e67d5e932971e415fc"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "7b8604822249ef83c393224e9ff13d01"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "f0359733eb5cbda4eef5a182b365ad50"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "1ebfbdc18f89ec0212d7354eee4b8c40"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "8c7116000e3de3cde51b1e6fc10f6ba0"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "9328ce8174cfeda0e5cda0b8441919b3"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "8211f6314e40012abd6dd79a30a32f63"
  },
  {
    "url": "zh/react/index.html",
    "revision": "c3471c3efb95d918d5b67ac84d883f95"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "e3846e2dfd258c81187cec192ae31134"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "ce20ed5cf2aa3a0e51526d8337404137"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "830dc653a9812d79b4fd3e698a4feaa9"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "7ea4a78b4c85e21beef99c16469401b1"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "f06655974a14d7bb2271151df46193e6"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "b0951bb9107b62874b0721f94f9cd646"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "32dee909c91694c90ae8ab9a78b615d8"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "5c1c6aa84015d4adb9c150b3ad45ddf0"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "8d95d2835e49d7187b0fe791f6b6880c"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "280e5177cdc487e9596a41d45bddba6d"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "1fff9da8db0536779503a371e8f60afe"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "6495b2b02cab00c892af707ab205c64c"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "61583cc83b355c7988483689eec43e2d"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "142c94ac99ea2bf068d82bf755d418b4"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "12f5adf85ed5cf611f163fb0a666def0"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "eeb33a4901a206d5470dbefb3af25300"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "05b087ab65f395e62f2a6ad41b059a3d"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "c6fca5578941e4a7235caa08cb57994f"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "62ae9c52c775ba40cf951c3a8d3e2539"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "1aaed8701414be4ebe9fbf83057dea39"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "894d63515f9c5222dd078475004f893f"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "9200d011dffc7cc7cc0398034cb2ee18"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "d8dd8986bb7e3d03169b985570befbbf"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "8d4a40c5a8eaeede1bbc903f9217ce49"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "45b1dcf62270ed0015f7f9358ae48996"
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
