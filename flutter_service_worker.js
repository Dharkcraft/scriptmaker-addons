'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "17f44008bff03e4c03ef96b0285a3b75",
"assets/AssetManifest.bin.json": "7c58f4966add38b12c6dab1378c9e4c3",
"assets/AssetManifest.json": "63295eb3180511522120af818c580cac",
"assets/assets/icons/amount.png": "13d749b06669f362dc6f42071a0728a8",
"assets/assets/icons/creative_mode.png": "1e175377499679f2df900af29ff584c0",
"assets/assets/icons/ds.png": "057cea5a17a6ad920969ca7fc1018fb4",
"assets/assets/icons/falling_entity_false.png": "6ce1c68ed39bb864f6f2cd04c18a1deb",
"assets/assets/icons/falling_entity_true.png": "f4581c7ff5d48370b824505a6520941a",
"assets/assets/icons/falling_false.png": "d58baf269b8a00e21c20f986bdd51ef6",
"assets/assets/icons/falling_true.png": "4608b42c831068f3b848eb28f6368fcb",
"assets/assets/icons/flying_entity_false.png": "70888abe4414ae0b73e5679f1456aa28",
"assets/assets/icons/flying_entity_true.png": "6009a280c7c4bc08df1b7c4639484cc4",
"assets/assets/icons/flying_false.png": "b6c78432318f5ecc09bf3b2d0e849b39",
"assets/assets/icons/flying_true.png": "cd249c6c2defce1ca45a7e3688a3c91f",
"assets/assets/icons/hastag.png": "8580aa3ffd9ace90cd9d5c3818c640fa",
"assets/assets/icons/inwater_entity_false.png": "0eed98d25ae7298a9e7630953d504b04",
"assets/assets/icons/inwater_entity_true.png": "d9d1b6a6d98ae1d0c1c5a5874a721d93",
"assets/assets/icons/inwater_false.png": "b07c4301354dbe66068b9f5e2f378235",
"assets/assets/icons/inwater_true.png": "1007e838a98144d8d6fc45265c21e6eb",
"assets/assets/icons/itemname.png": "f240267a27a45d28e1283c988a693a82",
"assets/assets/icons/item_use.png": "bbb6cbe9010adbf03ed1df329de150dd",
"assets/assets/icons/item_use_complete.png": "2bf1eac3b2c2306bc359a3945ab12103",
"assets/assets/icons/jumping_entity_false.png": "97b2ffd8657554d8889349698f6944b4",
"assets/assets/icons/jumping_entity_true.png": "03f24c044697139047e79d3427b2e69d",
"assets/assets/icons/jumping_false.png": "7cf82d2534763dbdb11b10572863a36e",
"assets/assets/icons/jumping_true.png": "ce01b31f910d5c4a05aeaf5fbfeb5063",
"assets/assets/icons/level.png": "ffda65c017f9d7b9aa51481821454e29",
"assets/assets/icons/logo.png": "a81ce898797eabc6fba335beaf08b12c",
"assets/assets/icons/onground_entity_false.png": "9842f95c1a33a580a1bd07b993e3c262",
"assets/assets/icons/onground_entity_true.png": "13b1329b396dc6387d5a8d5e62117825",
"assets/assets/icons/onground_false.png": "b35fc1611c0143773828473768096ddf",
"assets/assets/icons/onground_true.png": "e2bd37efb541b46c16f9e158a2ce86e9",
"assets/assets/icons/pack_icon.png": "d2f2257d5c124a97b9e1dcf03aa173b9",
"assets/assets/icons/sneaking_false.png": "c8532dad23df4b88bd82d938356b921d",
"assets/assets/icons/sneaking_true.png": "4933cd62e5c0b36d40bc075e038bbf0e",
"assets/assets/icons/sprinting_entity_false.png": "db76e4af076f3e72fb8c0d531c46b7ac",
"assets/assets/icons/sprinting_entity_true.png": "433180fd59aaaf13cd820990d3743ee6",
"assets/assets/icons/sprinting_false.png": "ff62a9d67d95ae0d6c4b341552d05fce",
"assets/assets/icons/sprinting_true.png": "8bfdeef96c8197eea5729a1afddd065e",
"assets/assets/icons/survival_mode.png": "4913487488be61893a0e30e2d38c9dd4",
"assets/assets/icons/swimming_entity_false.png": "af3545c93502cd434f06f92e6973fa92",
"assets/assets/icons/swimming_entity_true.png": "79d1fe7153d23d5c1732551d57292733",
"assets/assets/icons/swimming_false.png": "06c3db64b9d0f03f579918c8396e0b2b",
"assets/assets/icons/swimming_true.png": "a235d061a10a00ea784d4448e2b4f620",
"assets/assets/icons/yt.png": "d337e86234003f84a90624e9a34727c9",
"assets/assets/intro/1.png": "5b9cb386c5798d8f7f53a2a157a4bd8a",
"assets/assets/intro/2.png": "403659159356b284504e7a5fb670c1a8",
"assets/assets/intro/3.png": "39494bb5a1e8d14d501385ffcfc03e9b",
"assets/assets/intro/4.png": "0c53bc96487467d37fd75dea824383d2",
"assets/assets/intro/5.png": "912cddd6f97ef11638496fdc1892ef3c",
"assets/assets/intro/6.png": "06ad0560ca2596768a5605a2c8d02b6e",
"assets/assets/intro/7.png": "5520455bc9eaeec001be1cdbce0b46bc",
"assets/assets/intro/8.png": "bf260c905fd7c9113873ffde34b6c51b",
"assets/assets/intro/9.png": "5d8495bc0bf3327f1071c0786f0e0e0c",
"assets/assets/lang.json": "54647187706c5d7c25483d987d973ae2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4c49898256a8411008bc1f47640f7b35",
"assets/NOTICES": "7c3f0379e085005a09cb590a929e82da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f13595bffcf01bdac7f7e9d5cb5de1e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ef8dad6184fa36bd7a15413251bdfb5",
"/": "3ef8dad6184fa36bd7a15413251bdfb5",
"main.dart.js": "2031a7f3e1dd3f084b0e75f9df429e5a",
"manifest.json": "2e0c9b7c3026b604b6b1bef48e13fad5",
"splash/img/dark-1x.png": "1e9e23adc119a58757e841ba405f2880",
"splash/img/dark-2x.png": "049abbeb5b15d3c044b12febf83aed7e",
"splash/img/dark-3x.png": "198333bafc432e30d5277f7bbc9d73bd",
"splash/img/dark-4x.png": "30523d85c9824fa1d0f073f6a39015e6",
"splash/img/light-1x.png": "1e9e23adc119a58757e841ba405f2880",
"splash/img/light-2x.png": "049abbeb5b15d3c044b12febf83aed7e",
"splash/img/light-3x.png": "198333bafc432e30d5277f7bbc9d73bd",
"splash/img/light-4x.png": "30523d85c9824fa1d0f073f6a39015e6",
"version.json": "03e08b5c4a0eb628e2d7e40630f1f7f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
