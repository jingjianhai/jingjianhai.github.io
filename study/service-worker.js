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
    "revision": "b18cda5af9153fac237fdd5fa20bbd9e"
  },
  {
    "url": "assets/css/1.styles.e1e94324.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.0b3410ae.css",
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
    "url": "assets/css/5.styles.077330ad.css",
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
    "url": "assets/css/styles.b894f906.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.e1e94324.js",
    "revision": "1aab90344bab664bbf1a6c239ca02847"
  },
  {
    "url": "assets/js/10.bc799e76.js",
    "revision": "6dbf43a55898486d10bdfbefd5f8a1e6"
  },
  {
    "url": "assets/js/11.2eeb20ff.js",
    "revision": "3f17f98355f095a433da6b0c57a443a9"
  },
  {
    "url": "assets/js/12.10217216.js",
    "revision": "d5e695f720f65e6c7576ab54576e0d25"
  },
  {
    "url": "assets/js/13.8d23bdb7.js",
    "revision": "4bbe670aaf667f0a90e7e175ec616789"
  },
  {
    "url": "assets/js/14.1305835f.js",
    "revision": "6a63f1f3eb132fe240974233eaab2e8d"
  },
  {
    "url": "assets/js/15.92a09a48.js",
    "revision": "d315f0cec67b7617693e5a012600a7ac"
  },
  {
    "url": "assets/js/16.1b71a7fa.js",
    "revision": "004b5d9503b282483bf26f8071a918fd"
  },
  {
    "url": "assets/js/17.51f11011.js",
    "revision": "5b6d4472b0dfeb26bd262896487f8473"
  },
  {
    "url": "assets/js/18.718dcb8c.js",
    "revision": "628b70079ce3e5253370a5cf8c3df347"
  },
  {
    "url": "assets/js/19.a3ca9dde.js",
    "revision": "32cfa7b902218453912767cecf34caa1"
  },
  {
    "url": "assets/js/2.0b3410ae.js",
    "revision": "2e3586b8da9c3c88edb194a63ca35750"
  },
  {
    "url": "assets/js/20.ad5802bb.js",
    "revision": "f36b5cc0778edf0533fe77f97720ab6e"
  },
  {
    "url": "assets/js/21.5b49b50b.js",
    "revision": "e3bca79fe90f6e07eda2387bff19a7e9"
  },
  {
    "url": "assets/js/22.bb6f0927.js",
    "revision": "64a42eb2202066464001094ef6a121b7"
  },
  {
    "url": "assets/js/23.3fed302f.js",
    "revision": "b37a924e14f1155954c73516a6a7052e"
  },
  {
    "url": "assets/js/24.28e99c3a.js",
    "revision": "94fd17134d8032edb73de3468b65018b"
  },
  {
    "url": "assets/js/25.4f3a8922.js",
    "revision": "7c2efebcf20e3fcfd4cb40fd9e137899"
  },
  {
    "url": "assets/js/26.db1ec1b3.js",
    "revision": "d7e972ae175655f3d460d99468b09206"
  },
  {
    "url": "assets/js/27.301ea539.js",
    "revision": "c2c5119f9227976cf746a4d9f484e2fc"
  },
  {
    "url": "assets/js/28.0282ed0d.js",
    "revision": "dfb7cb6fde0217e6be83aa569a86cabc"
  },
  {
    "url": "assets/js/29.d1194ce4.js",
    "revision": "762a2eb57fad45beb3330bc3de7cca0d"
  },
  {
    "url": "assets/js/3.c662bb16.js",
    "revision": "999d4f847dd386b48d352f393e01305a"
  },
  {
    "url": "assets/js/30.e198e754.js",
    "revision": "a8b24a4a2d267c3ea95535c632f37b8c"
  },
  {
    "url": "assets/js/31.e8e7971e.js",
    "revision": "3463eb0a6a206126fcd21b612b090035"
  },
  {
    "url": "assets/js/32.d6b67321.js",
    "revision": "5467f86f9f7e8c6f9aa64a8b8a22e1f2"
  },
  {
    "url": "assets/js/33.f4cceb58.js",
    "revision": "1541050fd8d4d27ea73e9ef31cc732d1"
  },
  {
    "url": "assets/js/34.7d12abf8.js",
    "revision": "8ac12c82b36f85a29a59c61a2e4739ed"
  },
  {
    "url": "assets/js/35.76097b8d.js",
    "revision": "1c298b207c49767343bd40d247bebeb7"
  },
  {
    "url": "assets/js/36.a71927ab.js",
    "revision": "3edea555591a5efac5c7ab2bd6254c2e"
  },
  {
    "url": "assets/js/37.b281e351.js",
    "revision": "22e9de88338e7e123c19ce4122d3e4ad"
  },
  {
    "url": "assets/js/38.de2121c6.js",
    "revision": "76d5a838261b82c3015758e9f787c305"
  },
  {
    "url": "assets/js/39.c7d7b412.js",
    "revision": "74a14c341eb0e26b76921df75fc524af"
  },
  {
    "url": "assets/js/4.acee79dc.js",
    "revision": "3cac8062b479c3583323d1420d8e6468"
  },
  {
    "url": "assets/js/40.477fb5eb.js",
    "revision": "f4b366a78801c4b0821cd5d077935b6a"
  },
  {
    "url": "assets/js/41.6fce7799.js",
    "revision": "8d71c07adfb8562afbe642f40705e6ea"
  },
  {
    "url": "assets/js/42.53df8d45.js",
    "revision": "b58e57d0d36c8a337247d97c691c44a5"
  },
  {
    "url": "assets/js/43.4ba2719b.js",
    "revision": "eda32df8836a0aaa7d82f9f38b7fd797"
  },
  {
    "url": "assets/js/44.184acf69.js",
    "revision": "dc84a0e19a0d030c4f1b1383482ae6ec"
  },
  {
    "url": "assets/js/45.801d2dd5.js",
    "revision": "02dd474f39a15b5f1bad1bdb434c2e4c"
  },
  {
    "url": "assets/js/46.c14c0693.js",
    "revision": "9cdd129912bdb917ffaf44557f8597e0"
  },
  {
    "url": "assets/js/47.485efc05.js",
    "revision": "adeabee6f9f04b3c15ab33e910b524ce"
  },
  {
    "url": "assets/js/48.9f081755.js",
    "revision": "72b1fdd258558b691b7c247ffec79792"
  },
  {
    "url": "assets/js/49.57f2b4f1.js",
    "revision": "120e89d64804e37b7475f2f2183369ed"
  },
  {
    "url": "assets/js/5.077330ad.js",
    "revision": "bf6fed1521338c22247c684f9d4260ac"
  },
  {
    "url": "assets/js/50.86ec9b62.js",
    "revision": "c5ad3afa13a36784423494d31c14032d"
  },
  {
    "url": "assets/js/51.32a18597.js",
    "revision": "898ab8df45d57f83a3018d048ec2cbd0"
  },
  {
    "url": "assets/js/52.658f7513.js",
    "revision": "a80cd1750b7f57f914de798abf4ac0f0"
  },
  {
    "url": "assets/js/53.69617d81.js",
    "revision": "6039c30d6f29168a73d8572a5b30e078"
  },
  {
    "url": "assets/js/54.c8cdac2e.js",
    "revision": "ad5ca851db6a9593973b590c2b13a991"
  },
  {
    "url": "assets/js/55.e9f100a3.js",
    "revision": "51f0258b870d1404b448fe640155db57"
  },
  {
    "url": "assets/js/56.0bc9f602.js",
    "revision": "0811791af80588a31d88a0990241fa0f"
  },
  {
    "url": "assets/js/57.c8213d51.js",
    "revision": "3180fc4fad3023a74f2a1f7674edfc82"
  },
  {
    "url": "assets/js/58.48b9ddd8.js",
    "revision": "8fb004bed91456ebc600b815947909c7"
  },
  {
    "url": "assets/js/59.1363f1db.js",
    "revision": "77ce205a6d589e1fe2495e48033a86fa"
  },
  {
    "url": "assets/js/6.3df485e7.js",
    "revision": "9f32ee75668c9131f69b341101667c5d"
  },
  {
    "url": "assets/js/60.c1a8d134.js",
    "revision": "89022e6dbdd67eb8eed1ec50cbf80c6f"
  },
  {
    "url": "assets/js/61.10959c53.js",
    "revision": "8043e7b6612bed2825604d100f13642b"
  },
  {
    "url": "assets/js/62.6e778b5c.js",
    "revision": "2e39a965c8647a1ff18d1d7973272e05"
  },
  {
    "url": "assets/js/63.340c2450.js",
    "revision": "47fbbe0213bae5b53e62473b402cf10a"
  },
  {
    "url": "assets/js/64.436ffa67.js",
    "revision": "a8ba948e5c04072e117fb3cfa780b696"
  },
  {
    "url": "assets/js/65.bc1a2ba7.js",
    "revision": "e81a3ddbd806260ce84cc41021840aec"
  },
  {
    "url": "assets/js/66.427ab6d2.js",
    "revision": "34ce67891febb924ad3dc49e9e1945b5"
  },
  {
    "url": "assets/js/67.46ddb3b3.js",
    "revision": "1fff76547e49587d5be48a18e0e13e3b"
  },
  {
    "url": "assets/js/68.240f9d4e.js",
    "revision": "43024f6f17bcab3567cebcae0df968fe"
  },
  {
    "url": "assets/js/69.7ff8546f.js",
    "revision": "5372c882b960f4d496750b4a83fea055"
  },
  {
    "url": "assets/js/7.3717cac2.js",
    "revision": "143c26bdc00f3df17c4dafff975667cc"
  },
  {
    "url": "assets/js/70.43bbcca6.js",
    "revision": "4187d536b2bbbb111c9f8930d191d2a1"
  },
  {
    "url": "assets/js/8.b0edb2a0.js",
    "revision": "91ae2ed6ad560b0dad65751280e66bb1"
  },
  {
    "url": "assets/js/9.04b1631f.js",
    "revision": "555dc054d0b1a4aa538aadcd43319200"
  },
  {
    "url": "assets/js/app.b894f906.js",
    "revision": "f063053c4bf57a54ed9e61e8eb970dc4"
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
    "revision": "6ab1adb43e2e0d63b54b2ac79afef2be"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "8dc01ef72ee21ce659a0eee5ac5d1cbd"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "250864d330b9264c99249d00d8491a72"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a9417bc90331b0df57f49cead7f580ec"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "33e656adb2422a578227393a5cd0690a"
  },
  {
    "url": "guide/deploy.html",
    "revision": "6651b405e7f1b3b12d15c56ce7d87e13"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "537c7a032e7e6d52678ea2c3dd11e02b"
  },
  {
    "url": "guide/i18n.html",
    "revision": "8e3d6bff04ebd4dfcd48bfd8f96b79b1"
  },
  {
    "url": "guide/index.html",
    "revision": "a303499b38c845f1f8fe5b301431323d"
  },
  {
    "url": "guide/markdown.html",
    "revision": "174846cd36ecff8b27ccb9bbf09d619d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "f3cee23fb5a6b95c5d17d3be08d61fc9"
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
    "revision": "eb02cba7aa34605192c983942084d4a8"
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
    "revision": "71cd5bd4a31cdcbcc207422114b7aa51"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "fb77319e26a63b26b695d45ed2514164"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "35e0ba6ed64e714688a14095cecefad9"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "4ccd2e89fefac5b4dce8e182c98ede12"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "491e20b8092ac54fd1981bb308dffa54"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "7597a3f01ea02504a22b438278d9258f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "b81578380f33756886cc42a80fc4b22f"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "d26c6b80c2c614ba84d5bda1abdc1e22"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e027158815b7be2e1ff30b3a1479bb59"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "b1f517742076e94452bcf027ccdd7528"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "68d74d4be14dbff92cceab2f4d296f72"
  },
  {
    "url": "zh/index.html",
    "revision": "6fe4de2c52d21e00a0ba0ee035865a09"
  },
  {
    "url": "zh/interface/BlackMarket.html",
    "revision": "07b30f575cbffaef6b8202c96b685776"
  },
  {
    "url": "zh/interface/TouTiao.html",
    "revision": "3aee340edcbbefda28b85d0011b37283"
  },
  {
    "url": "zh/interface/Yuedu.html",
    "revision": "01872953722f14ee5278b61852d4ed59"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "cef0c3c0c65d52b83961c11cb3f29c19"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "f9d655fe40ab85a7fedaade75a137d20"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "c974308c705ec96c07ad25a9fd201bfa"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "d4e7a6524b59a82ca716b2e2971edd33"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "63113c6fc742174212c21e88327af435"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "a9b51a47708edee6cbdd71d2cfc4cab0"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "ab09c60423df7cd53cdf606c4fd37979"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "fc2d0e61fe76304ea9c92de6eb746f9c"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "84f01d18a3dfc1575b4a742d0f6b2f3d"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "14f1d3bcf1efdc094976d4a4f0750c58"
  },
  {
    "url": "zh/react/index.html",
    "revision": "6a200a0282b6982bdc15486b424f1f62"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "99732fbf653b1a0b775f39af647ccdf8"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "d75be4ed5203f024b3806b1df9b3d5a8"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "5dd133de6b13c70bdebdf1b1c8303f90"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "735fda3ece2d69c5ce6be49bb29d6897"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "b0f8b7facdb1a02656958d732c2fde9c"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "2434a385820ccf3604cdea5c58ef2269"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "df6aca5e636e2dd5ab196034ae7d437a"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "adb8523f989780c7497233180b07c74c"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "2f55a6bc640de93f0eaa04ba19c3f008"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "e545bfc4b8cc93b5e400cbd46b3c8ab9"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "d23947c077e14c859cc43eaa1e15326a"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "800a64fa02981b338694ad61536f599c"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "cbe6cb62f4e85c2cd6a524bf388866ad"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "64df492d6e855f3ce3eef46b98e8393f"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "f15777b9d5b589c645f80066d693288b"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "1fb7ad11b306497bcec3e71e093e42a8"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "19d4c7e74a9cb92d6593d4b3fdc7d41d"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "7ffe6d8f1ab23f97d8ce9832b0a7d33e"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "1eb5eba93c6cfb8d25457c8ff94b7ab0"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "444a840beb26ca427716dc6096eddc5f"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "3cd6f421f2565f939ea670b9b619ab20"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "38d03796077712ee649cf6ed857b0f11"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "647bfc2cb7265930030fd07d0410f837"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "ee17cd5fdd91274830de90f5f3845b4b"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "2330f392e2b2e9900834784bb7c68e2f"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "46fc1e784ef88a1f347395d5b1dcdc8f"
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
