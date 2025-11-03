'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "45fb571f88b94dceec0ae780c9a75440",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "42f19443ed5c1b3a284aaca18a95c8a1",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "e50a627695294084075f09f89e4877ee",
".git/objects/0d/374bade6bbc3963858155d0b1e9557688cff35": "9f3a3ba7abadc5ada1ba448910669f76",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/516c14904631ce5c32a105c134dee5c56acca3": "28dee2171697542c4593d31833173322",
".git/objects/66/05b1441656fd3facd94601b3dd3e04a07f7e4d": "6e24cee66af69ef27f663b361dc5b00a",
".git/objects/3e/780dde370347b83408f43689ef0fd0debc941a": "966c36b555e69e0bcecfeb40ed1f2653",
".git/objects/68/e2d95389506e4c6a1c9087bbfea758757a236e": "6ab33eef16fa876c731268ecd6631a43",
".git/objects/57/d5528a7885d5e193c45e3de4d824b5611dee59": "c571b3dad4766748240535240a20c3f0",
".git/objects/6f/27dde6712accc589dcb482ae3082497a12335b": "3e47ea18c9dd1b22e62150ae6515a2f5",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/32/9b9d6bb3e95ee458985515b5d21e194c0a2704": "8c9d4c953c083bbe3e8176d3a981ce34",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/6c8ebdd9f3301bbe8be3e0808472330c0661f8": "bfd3939de2bb008aa6fb2a9ac4f4c8df",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/a3/7389d4f4261ad8da0805ccdb50f9ec4b7eede8": "1c671fe524d591cefa12c6c9bd8d04d8",
".git/objects/a3/3e6977c1207efbb8ab14e44dd2686beaf63859": "9331fd2e6521df53e7cbc3ab2a236c73",
".git/objects/b5/54c766de62b624eb2c82f4e5475c4acd2abe7c": "84de470c2e44efb720310dff48544983",
".git/objects/ac/45c1a8e4462163953e30b4cce2154c6268c028": "20f235d1393c300ebfdceb124ac19f4f",
".git/objects/d0/07c3897730765e43a6654e69f824d26fc5c678": "eb82d4b7a77b8d038050e4bb692da525",
".git/objects/df/acd98c9c6db0edfc350f21f9d28c78ec5657eb": "189a9748360d16e35054577eb68b5581",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a2/cc5be08ac8b53d0c7b387297c482d3d8f2922a": "402eb1d424f76d0dbea021a2d158a299",
".git/objects/d1/a008de02c6560dd3b7a4a2518ae1d6057aa94c": "f0b2204d369d327566bf19ae75c1b4a0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/3513ec823d496aadf1730f4b8bbf41e372a484": "b599db3be7c09156715f7eea3d385b24",
".git/objects/bc/f283acfcf12401952b50fac2e896be32baeb36": "d68509e9afc12d506ba585d926fd5c17",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/9c2ef2025b21135152bec544c28380449bb340": "9c5f265d5480ff68b8587e3191f425b9",
".git/objects/f4/1b5ebc8379b132c6e4af082d1ce33a637c01d0": "7dd4714ef61fe6d1d2e31aee4d6318ea",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/4ff167ee6be28eca1933f9926b3d77bec1a06c": "8630c9310cc4732501d795897b498f65",
".git/objects/fd/b1066bb6162afa38a1fc3d628055388ace3ee5": "b705556eaf9a6fc3c4108091ef8d3f34",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/563ce0d47a35a6e9fbe6a319525a14f294cb97": "196aaf5a326ed6f8f71804ec930da33c",
".git/objects/c8/b68390b02922d283277bcc390c333a769bab77": "c2cfb8f18c510a7d0176ff3f20548c96",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4e/c48ba68b74c259551c592fa144379ba236ff51": "b1d7938c1ac32fafc05734f45a3037dd",
".git/objects/4e/37a591e0bbfa08ae08cf17ecf6c905f489010a": "fb4a0fb3922ccfd989d1e0624bc93c79",
".git/objects/20/967db1f35a2580eade48f61189482ddf29c71b": "e2b3cd47baf284057619fbc7fb94cd71",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/270b840278d8faf50b878612195381f3f7c082": "e56b20e03e9a864eeb875fe6a9acf625",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/42/1332e163defafdcacf0d92a1382fdfe91e206e": "68d8cec8e21da9f7c6de686488af6996",
".git/objects/7b/1de68a3235a6fe1656cc8abfa1539b96f5447a": "c6977dbc11fd8f0ea276432f71bf08b8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/21/3ccf731a949a7f8ccd32210e5bdf026c4dbd8f": "63d9dbe503f6745ab9207ae23883a28e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2fce5f535aa89ef88e60a94203f12830703890": "1de7c9330cfb095853ffbc26106bab60",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/71429ae3f0c1dca53e09ac5a7771f018701572": "b911dfdf8a617c93817e7a1e1cde7f01",
".git/objects/38/fafdf591cd370cac2bd7baefa974485fae954e": "cbd269937e9c58b53598171ebaac69c1",
".git/objects/91/49e431fadf731aa61cf8592e5e1fbcbe17d1e7": "1a08e309438f1c8f10f7d1b4221e7a42",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/e70f36d1e14d9733a374262e06e2a4fbaab0e0": "96d0dbe7eace3434fcbae1612639c91f",
".git/objects/5e/9e1413569eb03d10582d2bedd95cf332737dc9": "2d05ba3d1feef61814ea3a64ea3ac2c0",
".git/objects/08/89d488fc2ae51160fda90b1314ab911427a037": "737a86c850a7c371a98d877f11135f2a",
".git/objects/d3/c1b49f041808663362df73a23394a18380a858": "214229827226d1622e2040cd04b6fcaa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4fdc1b3fc9be4603e252231e32a169b857aa09": "adee5df2ac0973a7e2dbbb5b673dcdcc",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/88e20fffa046e80b643be74bd645bce1512973": "a10fb784a6257e6af9809a4258aaa6cc",
".git/objects/c4/c2499aa7af345fa9138edd327262fccef173c2": "9e8b13854c1c2e71eb880eae4755d8f5",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e1/4bfa59e9318231b5bd33ea7d0871e41fe61c1d": "43dec27ced9a0bb6f3bc59b0de5e5553",
".git/objects/fa/e0b4f558fb8fc4f4afd1f821c2d586e0ec5193": "970190d4e0322f20333b4779cbaedcea",
".git/objects/ff/2623a217d6db6c789afae5709b98d335968f61": "1f76cc9a9badbb8fac10bc9c9acf2032",
".git/objects/c2/9eb554452e4dcca6ed8889fb171befc605591b": "92d92639e9de49ebc389fe5901ce478a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/0dc138e061d39d5b8ad47754ce2b03bf1381be": "4b99a5105a12f0defbc56dc70d02ad3f",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8d/75bab68c8bd23d5853fadbdc095424ee1b202c": "d9153fdfd240392beb55f07743d1961e",
".git/objects/85/cde0c4cb9f59bee4a3afba09cf9cd7c9283359": "f212a2523895131b42272ea04a771380",
".git/objects/2b/82c334a2a5b1ecfc4c9a6a41a6c5d93efff302": "45a23206443d1dc0503e8c81b15f58b0",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e5ed8c01dc8b917676aa3ca101d8587",
".git/logs/refs/heads/main": "abd26adac023e30273bd2f448ec33673",
".git/logs/refs/remotes/pages/main": "84c11b35a40d3897062c7c064af51107",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e92bed7532dd9f5449b7b3436ff22dd5",
".git/refs/remotes/pages/main": "e92bed7532dd9f5449b7b3436ff22dd5",
".git/index": "8f60d3d8588d80de26f974d81750d3a2",
".git/COMMIT_EDITMSG": "1fc4f76e41f84c1b0362b45b3d8d8c15",
"assets/AssetManifest.json": "e55c04a6e5d795896dbe87f7fc2def93",
"assets/NOTICES": "ab7cdde2a8eb306210f38ec8a761fed6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "03bdb9a121899244655558573a0a4ffb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7f8865a51f5ed9e0bce45b53327baaa0",
"assets/fonts/MaterialIcons-Regular.otf": "f0dd7165094fab252c80c06f7ccc950f",
"assets/assets/images/email.png": "3d7e56d116cb45995294e3618f6bbc33",
"assets/assets/images/download.png": "01ef7ef662d8c8e403d3241c5db48f40",
"assets/assets/images/website.png": "4465f2c25a224897608ac7d9e98701c6",
"assets/assets/images/projects.png": "3ced5bc64ffd4fd6e4f472dcc244944f",
"assets/assets/images/instagram.png": "9cc6da63ce8693690ea292dfdd6e0df0",
"assets/assets/images/taxi_3.webp": "fe12e66b43df8b183fffeaab6f0bee55",
"assets/assets/images/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/unknown.png": "cff5d59759761b6cd44eb60a7b31ea6b",
"assets/assets/images/trhaber_2.webp": "c1796253f4a5401cfd9e3902ddb02ffc",
"assets/assets/images/gmail.png": "768c7c7be2ee2f69e0cac54f31e0a55a",
"assets/assets/images/reference.png": "ad67fab78113140e87584448d7de7f07",
"assets/assets/images/trhaber_3.webp": "6f23b3cc7da710e525b41ed74f98706f",
"assets/assets/images/taxi_2.webp": "381f3af5f806fec5244748ec05463e89",
"assets/assets/images/appstore.png": "05256275d1a21dca7db8340c16dd3ac7",
"assets/assets/images/ghost.png": "5e019349d23527fa3104e32e15b81036",
"assets/assets/images/taxi_1.webp": "3294eb1d17fe3259aaf3dd71b795087f",
"assets/assets/images/dice.png": "2ad63f2ebfe5fd932baf396c9d368e0b",
"assets/assets/images/achievement.png": "d906ff8529902e01d2651e3c96553165",
"assets/assets/images/communication.png": "d58798d423054b3fe039f22d1208ae29",
"assets/assets/images/trhaber_1.webp": "946fb31202d92c89a1b6eb4c8a9e13ab",
"assets/assets/images/twitter.png": "edf53618c583eeae2cff3caa47248dd6",
"assets/assets/images/linkedin.png": "ef9b9c05b778bdca7d37d6b19cfb2472",
"assets/assets/images/phone.png": "198e8a91a904707b53f9ce17b443995c",
"assets/assets/images/youtube.png": "d337e86234003f84a90624e9a34727c9",
"assets/assets/images/education.png": "35cc5186fad4f7a8843e8028bfbd8b60",
"assets/assets/images/career.png": "bf311f6c698069cd8bd7df9d5e4595d8",
"assets/assets/images/about.png": "0c41f9cd13d86c28bde65d9b978c9c98",
"assets/assets/images/my_photo.webp": "006fe7305526eef6fb26fdb68849c525",
"assets/assets/images/achievement.webp": "a549eeb7ec402a5e5de0b4d54e0a65fc",
"assets/assets/images/camera.png": "d47b51b84ea8b68845ef058e79875039",
"assets/assets/images/snake.png": "7aecf29b1761d8724ca43b325fe2af63",
"assets/assets/images/live.png": "37a1eea6d3276313e467d11ae055ba9d",
"assets/assets/translations/tr.json": "065fa347c003bfd09cdc04fc88cd6e92",
"assets/assets/translations/en.json": "dd40b6b17a6ab38326d858108d8b2636",
"assets/assets/Oguzhan-Ozdemir-Resume-20251030.pdf": "d45ea08da87a5b12cae76861f6ebb152",
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
