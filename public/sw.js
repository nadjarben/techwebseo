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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache.TaXopn22gTlOSy67DLGbX.1d480af7b82c3794288c054bf6546664.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/static/css/styles.css",
    "revision": "f00ff5734214ecb7d352c63ccb858e49"
  },
  {
    "url": "/static/images/animation-play-outline.png",
    "revision": "0573faf5429f37f04f7b3e8319acce6c"
  },
  {
    "url": "/static/images/bn.png",
    "revision": "40ddbe73bcc053951c37ba3124aeb03c"
  },
  {
    "url": "/static/images/cleaner.jpg",
    "revision": "5943a75846ec4bc2bf02d6ccf4ad8c97"
  },
  {
    "url": "/static/images/cleaners-x.png",
    "revision": "c645f49c8abfebe94bc40af704f31507"
  },
  {
    "url": "/static/images/cleaners.jpg",
    "revision": "728d94a1317cf06f316b2f7dc0cf2c2a"
  },
  {
    "url": "/static/images/cleaners.png",
    "revision": "569e30b6396ffb035d96f2e21835ad73"
  },
  {
    "url": "/static/images/code.jpg",
    "revision": "8377b4bbd23713776ade4e202076213e"
  },
  {
    "url": "/static/images/code.png",
    "revision": "e01966f74775ad4dc70bacb5b2d5c937"
  },
  {
    "url": "/static/images/code1.jpg",
    "revision": "fabfe550465360aeeb993b7289343a6d"
  },
  {
    "url": "/static/images/conception.jpg",
    "revision": "d821f9314ed09e0874cab545e3ca84d1"
  },
  {
    "url": "/static/images/conception.png",
    "revision": "7810c89790aa02a06c8a03aaedb3a234"
  },
  {
    "url": "/static/images/cv-bn.pdf",
    "revision": "8eac9a119c53252d645851e8bc694189"
  },
  {
    "url": "/static/images/cvphoto.png",
    "revision": "ebe4830a894b3fd307395eb6002c91c7"
  },
  {
    "url": "/static/images/dev.png",
    "revision": "1e29b6d14cf9fa2f8df994baacd39526"
  },
  {
    "url": "/static/images/developer.jpg",
    "revision": "db358f20338dfea07e009ec3c68aa983"
  },
  {
    "url": "/static/images/devis.jpg",
    "revision": "e7af5afb6a9124186f7d059f64d91a8d"
  },
  {
    "url": "/static/images/email (2).png",
    "revision": "8bc9938328822d987eece8ca171d1e51"
  },
  {
    "url": "/static/images/email.png",
    "revision": "a7c11587be03676019f34b0ebad9718b"
  },
  {
    "url": "/static/images/email2.png",
    "revision": "f4d211622fbb4a09d23ee05493adc752"
  },
  {
    "url": "/static/images/euro.png",
    "revision": "f76dbf03b0975974df7836a0d5876623"
  },
  {
    "url": "/static/images/flag-en.png",
    "revision": "5f65d7323b027d51aa92705b0143e9af"
  },
  {
    "url": "/static/images/flag-fr.png",
    "revision": "26614f91775dc0cacbadfc0fc99a4f02"
  },
  {
    "url": "/static/images/flag-he.png",
    "revision": "8948b4e5ee31b577afba0326217bf36a"
  },
  {
    "url": "/static/images/ft.jpg",
    "revision": "d0147e2469520feecda21f1f9c9856f7"
  },
  {
    "url": "/static/images/ft.png",
    "revision": "68d7cd7bacaab6ea5d0dadff7912a886"
  },
  {
    "url": "/static/images/ftr.png",
    "revision": "76c61e4440e36b08d378560fb56b34bb"
  },
  {
    "url": "/static/images/github-box.png",
    "revision": "0de1a68e4f0424a8417efae0471ebfb9"
  },
  {
    "url": "/static/images/github.png",
    "revision": "85ff11d560df7eeda6c31a5daeb2bf0c"
  },
  {
    "url": "/static/images/github2.png",
    "revision": "7b0d2373d1cf8adbd26bc6aa650e07d9"
  },
  {
    "url": "/static/images/icons/android-chrome-192x192.png",
    "revision": "6c4227f2d9940f61ba5e396e446d3cc7"
  },
  {
    "url": "/static/images/icons/android-chrome-512x512.png",
    "revision": "84d78c9802d1ed1a2145ec93baa7a4d0"
  },
  {
    "url": "/static/images/icons/android-chrome-72x72.png",
    "revision": "b279f24f535971195c930db6bd33fdc0"
  },
  {
    "url": "/static/images/icons/apple-touch-icon.png",
    "revision": "715de3c61db9769121e6522049a6cdcd"
  },
  {
    "url": "/static/images/icons/browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "/static/images/icons/favicon-16x16.png",
    "revision": "4e7cc69e516c47f46b988ba026bda09a"
  },
  {
    "url": "/static/images/icons/favicon-32x32.png",
    "revision": "c5b1369c8b786285e1837f658998997c"
  },
  {
    "url": "/static/images/icons/favicon.ico",
    "revision": "67a9bfcd93e63aea30b3b8ff9870f56a"
  },
  {
    "url": "/static/images/icons/icon-128x128.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/icon-144x144.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/icon-152x152.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/icon-192x192.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/icon-384x384.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/icon-512x512.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/icon-72x72.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/icon-96x96.png",
    "revision": "4f34c207cab6719ec7a9cff847723c7f"
  },
  {
    "url": "/static/images/icons/mstile-150x150.png",
    "revision": "9574da0dc9291221358c31969420c2a5"
  },
  {
    "url": "/static/images/icons/safari-pinned-tab.svg",
    "revision": "066fe1d8cbc41daa855057a66c4ded76"
  },
  {
    "url": "/static/images/icons/site.webmanifest",
    "revision": "327231893bcdc4cc41c08d53d04377ed"
  },
  {
    "url": "/static/images/image-auto-adjust.png",
    "revision": "55f9204ae66c7fcb3de4b6f9fd562cf9"
  },
  {
    "url": "/static/images/iphone-x.png",
    "revision": "0de4af564a84d0e3047536f3f2e291da"
  },
  {
    "url": "/static/images/lightbulb-outline.png",
    "revision": "3c54b137e22b2e611d28ac52924c6b27"
  },
  {
    "url": "/static/images/linkedin-box.png",
    "revision": "ae9633247b7d3fe1ae51fb6c3ac22269"
  },
  {
    "url": "/static/images/linkedin.png",
    "revision": "a135470177c3779bab42d5d43a31ff6a"
  },
  {
    "url": "/static/images/linkedin2.png",
    "revision": "841abc54e74dad14db71bbe1c99a8123"
  },
  {
    "url": "/static/images/logo_transparent.png",
    "revision": "d34a9c859f8cf531bad8617622acb515"
  },
  {
    "url": "/static/images/node.png",
    "revision": "ba5456b82ffb23f803772c34e771bf4f"
  },
  {
    "url": "/static/images/partage.png",
    "revision": "f0aa9fe0cb34c8a9c6d47714d6efd256"
  },
  {
    "url": "/static/images/phone (2).png",
    "revision": "a933792e528f3241bdba1d670a5e7c54"
  },
  {
    "url": "/static/images/port.jpg",
    "revision": "545bbba7b63cd303eef76889aa590f3b"
  },
  {
    "url": "/static/images/react.png",
    "revision": "d62ef2ad7903ddfa537187a145b1979a"
  },
  {
    "url": "/static/images/reactjs.png",
    "revision": "cba0b89d2bf2d96a1ed26edb5849f804"
  },
  {
    "url": "/static/images/responsive.jpg",
    "revision": "2f06686b47dcbf932c3d59f9ee7e6508"
  },
  {
    "url": "/static/images/responsive.png",
    "revision": "7b97c532e6e9d084a199120f68ff63c6"
  },
  {
    "url": "/static/images/ruler-square.png",
    "revision": "b6698a1d4cb50a36c19e7e9117e6aef9"
  },
  {
    "url": "/static/images/savoir.jpg",
    "revision": "ff2d72e03c3ed7c7803e0019fa55c131"
  },
  {
    "url": "/static/images/seo.jpeg",
    "revision": "a7ae347d7b7ae1ef06b1e36202052945"
  },
  {
    "url": "/static/images/seo.jpg",
    "revision": "8298ddd57607eab00c1dfedd032d96c7"
  },
  {
    "url": "/static/images/seo.png",
    "revision": "3d2233c726beff9fa2b8225caac07a0c"
  },
  {
    "url": "/static/images/seoblog.jpg",
    "revision": "d36d617fe008100fa5bd46e9884d848b"
  },
  {
    "url": "/static/images/share.png",
    "revision": "6189cc30edd0ea0985fb40c785917d4a"
  },
  {
    "url": "/static/images/techweblogo.png",
    "revision": "914dc0beea0a1b93f4babf9f8a338350"
  },
  {
    "url": "/static/images/whatsapp.png",
    "revision": "7ff5b263a556dc62a8dead3ebb3ce3e2"
  },
  {
    "url": "/static/images/whatsapp2.png",
    "revision": "62665e478f71c6a9cc96b49e279bddfd"
  },
  {
    "url": "/static/images/whatsappo.png",
    "revision": "467796474ed761a6d6315ca71b4e0a76"
  },
  {
    "url": "/static/images/wp.png",
    "revision": "d42672d4d185739d26257ed5c653c740"
  },
  {
    "url": "/static/images/yfo.jpg",
    "revision": "3c15328e9281b1a0f2690afbf3f0054a"
  },
  {
    "url": "/static/images/yfo.png",
    "revision": "ba6fbe8bd308883ab1c5028f2603dc03"
  },
  {
    "url": "/static/images/yfof.png",
    "revision": "b6f152e22f963372b91f4c72359e9307"
  },
  {
    "url": "/static/manifest.json",
    "revision": "845e6c63a444fdf12297aeabd8e47d35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts", plugins: [new workbox.expiration.Plugin({ maxEntries: 4, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i, new workbox.strategies.CacheFirst({ "cacheName":"font-awesome", plugins: [new workbox.expiration.Plugin({ maxEntries: 1, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-font-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-image-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:js)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-js-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:css|less)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-style-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/.*/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"others", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
