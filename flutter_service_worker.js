'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c93d45b14b13ea7cb55622c7d130c90",
"web_icon.webp": "1d7d75e34044b232733ba1e84ecef402",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "4e7a5616b4322e86d9b331bf53983118",
"/": "4e7a5616b4322e86d9b331bf53983118",
"main.dart.js": "a630dbd707950dee06e5aea4d18264e9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "34ed9b76522826a01ec31b459494fbff",
"assets/AssetManifest.json": "a985140f6520ab2202352ec5171d41fc",
"assets/NOTICES": "ab7cdde2a8eb306210f38ec8a761fed6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1e61fce651c400701a827ab6e6ff0d48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ffa2b4123357e3a99dd73f9beb7ae750",
"assets/fonts/MaterialIcons-Regular.otf": "f0dd7165094fab252c80c06f7ccc950f",
"assets/assets/images/movie_app_5.webp": "c41c914de44f1fc8cd577bc9ed2a7f73",
"assets/assets/images/web_icon.webp": "1d7d75e34044b232733ba1e84ecef402",
"assets/assets/images/greenscore_3.webp": "4fe4049af8f1ca2f4cb6d15050b3a55f",
"assets/assets/images/joylive_1.webp": "341e74731a8a3b37ddc982e87919557a",
"assets/assets/images/ceptedershane_2.webp": "a9d32cf07c3390b1586880654c32f201",
"assets/assets/images/soundcare_1.webp": "a9dbcd51711b69214c62a6c40ba55574",
"assets/assets/images/ceptedershane_3.webp": "3a8e6873f30f6d4a583c977c787d4a43",
"assets/assets/images/movie_app_8.webp": "d25ca4f2cd4b5db717f6d68baa945733",
"assets/assets/images/greenscore_2.webp": "8e6d6836d1b2f70f44a13cc87c0cc812",
"assets/assets/images/movie_app_4.webp": "1d36754e8faf393b063e2ad68c11f2a2",
"assets/assets/images/taxi_3.webp": "fe12e66b43df8b183fffeaab6f0bee55",
"assets/assets/images/purellm_2.webp": "71a62e191d0cc4e1940e77ee0b0d9f04",
"assets/assets/images/movie_app_3.webp": "387251673d30961ec8fb27bb13d8170b",
"assets/assets/images/trhaber_2.webp": "c1796253f4a5401cfd9e3902ddb02ffc",
"assets/assets/images/trhaber_3.webp": "6f23b3cc7da710e525b41ed74f98706f",
"assets/assets/images/movie_app_2.webp": "18dc014447899f40646d427e6b7d7792",
"assets/assets/images/purellm_3.webp": "67b4b450f317e462b3dc3c6735c05f43",
"assets/assets/images/taxi_2.webp": "381f3af5f806fec5244748ec05463e89",
"assets/assets/images/taxi_1.webp": "3294eb1d17fe3259aaf3dd71b795087f",
"assets/assets/images/movie_app_1.webp": "bbac85db0540c61c19afab9ee1dd201d",
"assets/assets/images/trhaber_1.webp": "946fb31202d92c89a1b6eb4c8a9e13ab",
"assets/assets/images/purellm_1.webp": "16ae9feada7bb46e332df26e8edb49ca",
"assets/assets/images/joylive_3.webp": "72cc028970d8e670163851a03bdc8260",
"assets/assets/images/greenscore_1.webp": "56855996a53229ef3e2f23665dd93ecf",
"assets/assets/images/movie_app_7.webp": "18a9a18d05a07b450197709304be5247",
"assets/assets/images/soundcare_3.webp": "babf5c5ea607a2704502946349c62606",
"assets/assets/images/my_photo.webp": "006fe7305526eef6fb26fdb68849c525",
"assets/assets/images/achievement.webp": "a549eeb7ec402a5e5de0b4d54e0a65fc",
"assets/assets/images/soundcare_2.webp": "f1a3f30607cf576d6662f7092e4555e5",
"assets/assets/images/ceptedershane_1.webp": "b572a2239d2a7013af7ca7aea37a3654",
"assets/assets/images/movie_app_6.webp": "99c649da094db5c45922e406d25f4aef",
"assets/assets/images/joylive_2.webp": "681632709a95b74f87a358381e5f84a5",
"assets/assets/translations/tr.json": "49b688c1f48303f1f70ab4a6e483f3f9",
"assets/assets/translations/en.json": "9c7571eff8b42187eb832d4190976335",
"assets/assets/Oguzhan-Ozdemir-Resume-20251030.pdf": "6edeea4e8ae23f5ae6d73303976ca5c4",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
