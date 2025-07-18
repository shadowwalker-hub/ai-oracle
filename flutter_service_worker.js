'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "233b13dde623c79fa9af78930e9f1827",
".git/config": "dc1bad6e5f06150eb2ddf9518eb94909",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "11db144b14cfb7ec0935c8234d8edda8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2d9c0778d95bdf1ba9255334568b4873",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8e7fb9dfa4beb406833ff1b5730545d",
".git/logs/refs/heads/master": "af0eeab38487b838490ca09ce90ff044",
".git/logs/refs/remotes/origin/HEAD": "bc4b0667f3f2f6402e1940cbc1819e81",
".git/logs/refs/remotes/origin/master": "a14cb2c5a578ffb70e4ec7c02e5f1001",
".git/objects/02/1ed3951315c6c571f6e67484ee7c9568e08327": "a9360e41e3b975fb760081fddd39bbc3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/d45c9e9bf2ba3dada37cedeb85dca65e86260e": "2318ad7f851e66bd8a2e60f14a7d2847",
".git/objects/10/89f3ff52ee2788f228e280d5ec38095dcb3284": "6902001fb70057a2221fb57081e884b3",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/f2b89738d460c4584a4f75b62424110aa0383d": "fbb65585f6a80fe49c71b573f37d827d",
".git/objects/28/760aad5de5b0254448b74565856f49ff51452e": "47b15f0dfe6813273e28eb5fac64ea5c",
".git/objects/2a/1a488aaeee27953367bb9a124ec681e4d2f442": "e47ac31164f3526aebd6b0a863d83531",
".git/objects/2b/8773898a2a7227c28e0589032c04f8d352bc27": "c7888d83ece9ad20bebcb16c2ce25d54",
".git/objects/2f/a45fa76f7eddcd3c47a168be9eb9da45d20bea": "4e5d79ee1ba053e690c253115068bbf3",
".git/objects/30/01505c07a01fc136b446a2315a4c398f902561": "bf1d21cd9b1a986c396231ecab772a4a",
".git/objects/35/a481c2f2ec1d345a2d26464a4e8f0512f6f2db": "d0c9fb2442ade3901a196043d7703a4a",
".git/objects/36/4a27b1870489748913f4a700689b02e5b10323": "e6e9ed4f21c2ea1ba76648e2c2760872",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/bd9c7954bd7745b9ab53f48808dc6558cd5420": "e070b4354b063bdebd742e5a5b1dec95",
".git/objects/41/a69ab30fdc55af66402370a16db0e9ccfbcd77": "b8d1691da10f4751496c17c72688eb25",
".git/objects/42/1bc7f4cd3da9dec6702028201f2dfbead904c6": "1934a91ec831162358080bcb88394937",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7a8c013fb3725e375f3b7a951547b9f0332a51": "84aa064ffccdb67a234b8daa63215eb9",
".git/objects/47/2b1343060f94eafe29bb60c70f844e23afd309": "d78e04379c2fb0bc8579a40f374f9b47",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/a88b83d43de541229a3869a701b31ea6de805d": "7c7398e2531ff689003eae04a5f64ef2",
".git/objects/5b/a165aa2a3ff09b0b398fca210f0661dde70cd1": "c6dc0e966ce489b6c4dffd7a7d5fa33a",
".git/objects/64/994a1046af1f5927bb0fa2f1256206d5d672a3": "28ff0eef5f9697b36f53ceccf89ecfbc",
".git/objects/66/76c1064f5a16b2abe494195edd0bfd8836f617": "6574c79f39cd429a520d2f9b70294e84",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/0b3600bc4c79a66d58a9155ba7af8a02bfbff0": "b3e57fdf0f50ed153bce877c62ef0839",
".git/objects/6c/1b882c25d6bea9090434f24cc4de32d4b2d261": "0d12972f462631c5341d84ca38ad5c9d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/b927b867801cb42ff99256b447933544a206ef": "83925b42e510c99b85b023f8d123b48b",
".git/objects/76/bb74f9d734ee899213ce0833faba75baa78688": "373742bef6af7cbeaa86adbe1dba51f7",
".git/objects/77/c79f8eb9b273993d7ad4d0b445a4c893f86e86": "6adf0241552ea76500ee10c24621f0e8",
".git/objects/80/6fed2fa4157a7616085dd2cccd882e80f9ac49": "6cdcc6ed4db83b31e2182138b576093b",
".git/objects/87/5ee58aa4fbbc404f2fabeb5042b6aa2b818d9f": "1d5c26336d08d43f02f45e1b0f24c443",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f1ca9e2b9de02d9ef9741785d7c288ab638d72": "1a000f5b25994d6e9be374b7a6eb8a79",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/a0311be4df4fb8870fd0e634adc36a993fa0c3": "ac16f58362f1761bc02bfe9c1525681d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a1/20792b45ca8b572094e240e0216e9509354744": "3c2e28fd51777fd44fcf51e18271cab3",
".git/objects/a1/74ebf1d2ebe0b6a92116ac3754e064611df576": "4e6a1140891b399e51f69373ba97a914",
".git/objects/a3/503d6f348cdbea30487334a89b204ca8269bc5": "dfc98786b1de7839a001409d0cb900b7",
".git/objects/a5/6b9c218d08bfc00cc6308e5128cd3b15755e09": "f65c8eb4c9441dd4850a4a8157230e38",
".git/objects/a7/115bf857d296ee1193b5b55ed4ccc2e7326fae": "c84ba920764733beaf0675c66eaa619c",
".git/objects/af/e8f7463533a1ddd822831dc19254266a1a5214": "0a9acdfe9e95b07323194f1ae8470067",
".git/objects/b6/e82360b75bb62b37115e57ac5aa6f9e2b14a7c": "8803d8858c749cd87696b21c096f436c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/6e9324f87662dfc0b8d2657e6737355c8d6577": "4f446ecff8a0b188e4ca464b95326176",
".git/objects/ba/a84f344ffeea01d1ed85a65731322894af6acc": "dc6d0d2747869b66836089859a8db1c5",
".git/objects/bb/3c1f621555c0d9b31c98194e8c2481bad44c5b": "a8876650e4d082e4efd1bd3de4f70202",
".git/objects/bb/41c30273c2108b9468e84dbe5062ed870f6305": "6cf3537ed21de9e961c12a8837bce8bf",
".git/objects/c3/309bbff0b2d1417f2582cfa285ee42966bd2ae": "ac153a5f9d7e712a15334552192bf2eb",
".git/objects/c3/881ab2ceffedbde1cf1021db3f0dc23a078f5a": "d7bed5a79bcc689bb44e5f1aee567d85",
".git/objects/c4/f619879e9b6cf022a791932f1ca7e0d3b63634": "0dc9c94bfad50ce97f2080a3a8e22b66",
".git/objects/c7/c43b31eff4f0265469cc0e563d384131baa7af": "a1c42fd7a3f80e079186e60e5c229e5a",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/4ac87ed1b2c43e700634d8a874b3256dfc100f": "5e5d7d5e353af17fe8e1cc8ebf7da7b3",
".git/objects/c9/6b8e510d289b0a4c3cf1f0cff6e33ecab11a91": "bc85189fc7659492a00bc6b616f1f75a",
".git/objects/cb/11849f18c23ddddba23a1affb9f8b416f92546": "80eceb6c118061d7239a2875636ab1a1",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d1/d8b0abc5c7ba841a0fc0a116245149f0bfe34b": "871ceeaad2ea6b8c3184021845159fcf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f7b3198e7a31ba676aeab23f18451a19e06faf": "7ce4d91bd13dab6e0ee329c1e7ef3cbd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/04d01097ee3b74cf4fd1155bccdb429acf87fa": "eaf8be38ffe890ce778894abc71f2834",
".git/objects/db/da21d8e9553d951d71a0435662eac927f3b093": "0953dc7620f68b299db79a4bd8ecc7c6",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/8232643b03a170e0c4e4d1b4437323a7841ef2": "e8ec0065b0ac98a9752cfa7e2090e982",
".git/objects/df/ea904471d63cbe0315ce8bd0bda29ccd79bde4": "3fcbeca96f961ae80988848b93a22acf",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/565e8a22da23b664897d47d63b20ecfc917000": "80767fb325719f828e46bad7059963ba",
".git/objects/e4/09afcd38bff6fd0034311f012c51114e14acc3": "1478bbdd1aa322a8cff095b87fd845f9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/983c97cf88c4b8984f826f91b4b814f5366464": "e9bce8a8a002faf9f6123abe1bd21d4c",
".git/objects/f6/1d36cb8f5d34c9180f076c8120ee91224890fb": "242a12730d681bc2e65e3b923b7ed3ed",
".git/objects/f8/723811906fff29ca5a09bfff9336e078e5c030": "55da904edb4ac27f84b4dfd1102aa1b4",
".git/objects/f9/05d666ba9f0a9084f44bdf3cff246c269193fd": "1f54500efbe32f6231b66700e209c512",
".git/objects/fb/3384f4057a34af2161c9632b298d03bb669704": "b11773c26d1415304f985f507e2a91b1",
".git/objects/fe/4689a1e469fc92bc3c01635065370bd9cd27dd": "02c6c27a71015104b2a7b3d1bd9a3715",
".git/objects/ff/47cdd283b67392bb92ebe3891bcde2d9148760": "9975a5a3e2ba168d4dc72b26fb8f0627",
".git/ORIG_HEAD": "d6264b6e874d0fe20ae327879f52409b",
".git/REBASE_HEAD": "d6264b6e874d0fe20ae327879f52409b",
".git/refs/heads/master": "4e5e5e9f2f129acf4a1053b6ae4ac267",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4e5e5e9f2f129acf4a1053b6ae4ac267",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "b338760a944dfe70eea677b5143cbed6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f2880a4fc56ed48f6dd7b9ec393b2f9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef9f4c2b345810101fa89829cdd3b491",
"/": "ef9f4c2b345810101fa89829cdd3b491",
"main.dart.js": "1ffa7808992a64a72dcc9cdb7efa65f9",
"manifest.json": "974a60d6db14ccb0617669256867f525",
"version.json": "352717b96fbebddc7dad2648189b1c8e"};
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
