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
    "revision": "94c6c2fb65052c5affc0d7321e3d3f14"
  },
  {
    "url": "assets/css/1.styles.85454ac8.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.ab0a1440.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.33536321.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.17f312d5.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.45c266a4.css",
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
    "url": "assets/css/styles.f4a9c752.css",
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
    "url": "assets/js/10.eef5089e.js",
    "revision": "c6805b140af80163b197163bc5ace8a7"
  },
  {
    "url": "assets/js/11.c9419cde.js",
    "revision": "f3c370ef21586174f4f780381d7174a9"
  },
  {
    "url": "assets/js/12.f8660961.js",
    "revision": "7b024caf8c7cdb278bb34f7a8b044ca6"
  },
  {
    "url": "assets/js/13.e248aa75.js",
    "revision": "8556fbbe5115343e02db29816d667cef"
  },
  {
    "url": "assets/js/14.d44a6ff6.js",
    "revision": "be16dfded79275fe152b6dbf7ed151fe"
  },
  {
    "url": "assets/js/15.a7023465.js",
    "revision": "b2af80fd23f854a0883f84598a04906e"
  },
  {
    "url": "assets/js/16.1236127b.js",
    "revision": "fa67cdad1bf7cfd2635f79ee8d70f399"
  },
  {
    "url": "assets/js/17.cf2bed5b.js",
    "revision": "60058c0cdc5c0f16a7f7bd9528c0f979"
  },
  {
    "url": "assets/js/18.62746dc9.js",
    "revision": "d4f73cf783f7eeee2c52b9474e06efec"
  },
  {
    "url": "assets/js/19.e3d67a6c.js",
    "revision": "4a7dc201629e4c51b3484bc4061f794d"
  },
  {
    "url": "assets/js/2.ab0a1440.js",
    "revision": "c784c8618f6bed9196b52cd992ec510e"
  },
  {
    "url": "assets/js/20.b40c46cf.js",
    "revision": "2f0fe4e37e922b32b341570cd52d472f"
  },
  {
    "url": "assets/js/21.b2ac6a90.js",
    "revision": "3db91a3e215336b13b69a6a9c4649e67"
  },
  {
    "url": "assets/js/22.fedb77d5.js",
    "revision": "0a4a21e1b193fe05a1c179e087c6fde4"
  },
  {
    "url": "assets/js/23.c9bcbb64.js",
    "revision": "98200c9d82f7bfa95904850f24aad3e8"
  },
  {
    "url": "assets/js/24.45f82f25.js",
    "revision": "824c88d4ddf2ef91d2e36279287c5676"
  },
  {
    "url": "assets/js/25.24448ba4.js",
    "revision": "43bc6a50ab2cc24754f0c16a0983b682"
  },
  {
    "url": "assets/js/26.0a5acb5a.js",
    "revision": "903cb009baa0181070fe32638cb5686c"
  },
  {
    "url": "assets/js/27.edaaea1e.js",
    "revision": "1ab08f1d6a0f90b375692ce0b7817cf8"
  },
  {
    "url": "assets/js/28.10bd3d18.js",
    "revision": "5bdb984d364c454225ac068cb1e10a00"
  },
  {
    "url": "assets/js/29.26f9143c.js",
    "revision": "605e362e3183050af4c1e8cc6bfce058"
  },
  {
    "url": "assets/js/3.33536321.js",
    "revision": "4aa1e9a6d7ffa974ed4e2bb1e59ab517"
  },
  {
    "url": "assets/js/30.88974ac0.js",
    "revision": "3a2d93175c3a75755c060e1ee56dc168"
  },
  {
    "url": "assets/js/31.30e4ea18.js",
    "revision": "dccec377cd82ca8c5f30068348c086fa"
  },
  {
    "url": "assets/js/32.2c3ec7ff.js",
    "revision": "3ef1ff08ec294721d4869aa338e7fe3b"
  },
  {
    "url": "assets/js/33.43eee7d5.js",
    "revision": "59b2d9f3698fecf0ac9ef5f70045e715"
  },
  {
    "url": "assets/js/34.b387aa31.js",
    "revision": "ab2a4034c10cf512cc96cf0f17a0450e"
  },
  {
    "url": "assets/js/35.c2bb60db.js",
    "revision": "06f7450ee22aa82d39b6686f7b9902c7"
  },
  {
    "url": "assets/js/36.01dffd8e.js",
    "revision": "a41df0e1d5fbe204f63aa36ba70978b6"
  },
  {
    "url": "assets/js/37.65bbe5bc.js",
    "revision": "b8cad25fe64e3952e758fbd32aafb36b"
  },
  {
    "url": "assets/js/38.099a531a.js",
    "revision": "044e49b8d69f3147b971ebc1afa52c5a"
  },
  {
    "url": "assets/js/39.1bc4d0d8.js",
    "revision": "e6761476f3f7ccc19565d19c6c9c5225"
  },
  {
    "url": "assets/js/4.17f312d5.js",
    "revision": "a5dcf7ba9dde09d925e295d66c6e566d"
  },
  {
    "url": "assets/js/40.946dc3b6.js",
    "revision": "f0916d117feb86f71ae2840931c8b424"
  },
  {
    "url": "assets/js/41.212e149e.js",
    "revision": "62c826065b3e35d61970b4a0df798375"
  },
  {
    "url": "assets/js/42.01ece0c8.js",
    "revision": "cbcf9b79440b6a707e6652a419af2b3e"
  },
  {
    "url": "assets/js/43.81232719.js",
    "revision": "b7418096badd6c1049904ce00c7c5d73"
  },
  {
    "url": "assets/js/44.d5f10982.js",
    "revision": "fd450a35622b98a4035c208fe46bb695"
  },
  {
    "url": "assets/js/45.516f9eaf.js",
    "revision": "7988ce487a340311bc85961f30014db0"
  },
  {
    "url": "assets/js/46.d2598f7d.js",
    "revision": "d10acbf211bec5e6908e34ad3280cc0c"
  },
  {
    "url": "assets/js/47.1ad17b88.js",
    "revision": "d92eceb23c3049099b737e474c00b3b5"
  },
  {
    "url": "assets/js/48.f61685d3.js",
    "revision": "213ecb6fb8e0a2070b7b007aaebb3a4a"
  },
  {
    "url": "assets/js/49.2bb6cac7.js",
    "revision": "1f4b5e34b1350e5d56519a5654942a10"
  },
  {
    "url": "assets/js/5.45c266a4.js",
    "revision": "cb5c396f603b6c386e638fea0aecd96b"
  },
  {
    "url": "assets/js/50.2c92df0f.js",
    "revision": "995a3dfa57508b4bdc9072ce303af434"
  },
  {
    "url": "assets/js/51.a42506de.js",
    "revision": "387854b3b7df7cdf1a5cdec553420d7e"
  },
  {
    "url": "assets/js/52.e7e73817.js",
    "revision": "eb3269da1d3f0c0953307b16be94395a"
  },
  {
    "url": "assets/js/53.ffe8e7ab.js",
    "revision": "b70585c900c608e3655afc2c2dbf8b57"
  },
  {
    "url": "assets/js/54.6613d697.js",
    "revision": "092bec426d4814059e805b1c362d5286"
  },
  {
    "url": "assets/js/55.61e4e7b7.js",
    "revision": "7d8b5e6add66348e4b6b9aaf4d17182e"
  },
  {
    "url": "assets/js/56.04a2603f.js",
    "revision": "e0db63ccbbb0234716fb449437281b8f"
  },
  {
    "url": "assets/js/57.79008d41.js",
    "revision": "35e411a8ee4250311eb343a4b338fb7e"
  },
  {
    "url": "assets/js/58.7790b7c3.js",
    "revision": "49b8c02a0f46889ddff463537237c532"
  },
  {
    "url": "assets/js/59.45da752e.js",
    "revision": "76922fc283200d921b1a0426cae3af49"
  },
  {
    "url": "assets/js/6.46d20c68.js",
    "revision": "e4f8956924dfbc2be5abc615409d2c90"
  },
  {
    "url": "assets/js/60.683cff1f.js",
    "revision": "ecdca47b69715cd81fe577de5e982463"
  },
  {
    "url": "assets/js/61.af587ea8.js",
    "revision": "69c512746f5f4876ec2240c54f2e7a9c"
  },
  {
    "url": "assets/js/62.18855543.js",
    "revision": "a0c4c55cbf0283f4a91d9e2b6bff6fde"
  },
  {
    "url": "assets/js/63.7819c13d.js",
    "revision": "0266fe35ffe699b850061b75e52c52ad"
  },
  {
    "url": "assets/js/64.e79ec483.js",
    "revision": "da9056544b60fa339fb2fb9c42f25589"
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
    "url": "assets/js/9.0d99c6ed.js",
    "revision": "6f92d1c1132bc4807155798f992d7acd"
  },
  {
    "url": "assets/js/app.f4a9c752.js",
    "revision": "ef247ffeb17ed117d489ad75fb36ee72"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "config/index.html",
    "revision": "b98986a757d0e95cc21021b342137360"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "8d0a6825da3770260344e02cbd20f026"
  },
  {
    "url": "guide/assets.html",
    "revision": "be65734d0402450507a90dbe76fb5119"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9f243cd9369c00472e7065e0e45ece67"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "e571ec0fc0162c9139f185a31ede9c3d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "195954da82ba5d6af1fa650676fef12f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bb80f049ba91da6b44ba03ccb93f0f1c"
  },
  {
    "url": "guide/i18n.html",
    "revision": "23a7ff924b267e6135f824ed41802eca"
  },
  {
    "url": "guide/index.html",
    "revision": "ce6b883089b1ee6e08fcb9cc24f23c4a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "b6d913c78cb283da25d61674adc60e7d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "b479abc06f654d57c41fb1f353d31a04"
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
    "revision": "30c71b75b6a5f4d1ac7d382b2c9a19d0"
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
    "revision": "c01f9341f11c31fabbf8dd4fe4684d5d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "f8394d446f3016e240c5ab4ce3bb8a8f"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "17fbcdedbb6496bd5a68298056310ee4"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "63e66c04dfeb6b3708729c8f3a4cadfd"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "7d26e3000ea304d101a0e045db2ed682"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "27ec6e8c6b3981b761f55b78cb7b5c91"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "a1fc92ce20057923eb37b40c7abf4da1"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "ed3d2b9a3c2dfeb58bf12948e7b84de5"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "406572aefc3cfa538fee0467db4bc5e4"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "403bcca153942c847eceed58f361ca0d"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "196189c4345a15cbe5c113e13b779e15"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "ae346af0e8b8479c0109334673029fbe"
  },
  {
    "url": "zh/index.html",
    "revision": "6158d8b8d9d7f0197edad59288c734db"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "4f8f8ebcd9a33986adb3672e76064a1a"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "eca6d887eda6f61b5a668aca527a65d9"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "c6f64887434fd46e55eee84b335de111"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "52e74c2923b05dd74e08c2eac704d0fc"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "8d5999eaf79502a0865063df179ecc3e"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "a191c5f56c709118f2492597ed7ea8ce"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "f44a892ff8c451eb0d236e9871d7453a"
  },
  {
    "url": "zh/react/index.html",
    "revision": "7db43fb8d42d3a49f2027bcc5e62a131"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "cda21871431dcb4bfecc83e82b8af9d1"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "4ba9366f3185d34bf94ced0ff6386034"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "89a3ca1d8a3b62218e87c7dbf941f302"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "bebc76911a02f65eb682ac743c685356"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "5bd309f7ed28fcbc4926f43ffb83c19a"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "a2e2a3107bee616a13e30e67a113d24a"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "f5b4039b2283476b0bf9dce179eb591d"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "837db9389973b8163de5503dc5f21c69"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "6c0d4230a21744dffb2e4318ef236693"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "fc3a53de957b1e228186da215493547b"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "4b8a5a7e31f8010536781b8d03d8efbc"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "3d767e27ba9378e419af9a1d092ffd7a"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "94a6f381da3356f104eaf3b7f06fb608"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "c8875a01f4811685714959bfaa4beab7"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "67cffba814a632a0d56bff973d7e685e"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "7e3a665d8ac1abdeb62919f665dc4a38"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "a0c2882c5e52cb4284c4e55a687d7188"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "b1af44be6265a31955d12e3f51749cc3"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "41a236e17e1991580cd156777e949dea"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "2238eada522737aa3100771a3d3e6276"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "a364b4c34b0c59a52855c534fcbfc2de"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "7bcf387da388c7460ffffc0c62f77738"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "aad865f0a8b6b5da9bf7e4ddeb1ded0f"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "608d77caf7bc9f53ba54207e1e5411e6"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "70b1c6b76d3efca8a50b593e433ea0d6"
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
