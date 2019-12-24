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
  "precache._eFQwek2B65v_8BLo7qje.95165001c42b298f69c7d02a893d144a.js"
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
    "revision": "290402a4297ec1d8f08069327ad64e64"
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
    "url": "/static/images/seoblog.jpg",
    "revision": "d36d617fe008100fa5bd46e9884d848b"
  },
  {
    "url": "/static/manifest.json",
    "revision": "f67155e9608fd235edbae003ac0c595d"
  },
  {
    "url": "/static/service-worker.js",
    "revision": "cec4ee5aae0eeb487134c370038f37a2"
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
