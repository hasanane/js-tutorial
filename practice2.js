print = a => {console.log(a)}


numbers = [2,5,8,3,5,7,5,7,8,6,5,54,4,4,3,5,6,6,7,7,7,2,8]
larg = numbers.reduce((a,b) => {
    if(a>b){
        return a
    }
    else{
        return b
    }
}, 0) 
x = 1
print(larg) 












status: 200,
statusText: 'OK',
headers: Object [AxiosHeaders] {
  date: 'Sun, 15 Sep 2024 15:31:32 GMT',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '2023',
  connection: 'keep-alive',
  'cache-control': 'public, max-age=86400, s-maxage=86400',
  etag: 'W/"5e0d-5fWRaxlbpjY4eNJNjWKLzaZ/amE"',
  'strict-transport-security': 'max-age=31556926',
  'x-country-code': 'US',
  'x-powered-by': 'Express',
  'x-served-by': 'cache-mia-kmia1760040-MIA',
  'x-cache': 'HIT',
  'x-cache-hits': '1',
  'x-timer': 'S1720445625.880707,VS0,VE156',
  vary: 'Origin, Accept-Encoding,cookie,need-authorization, x-fh-requested-host, accept-encoding',
  'alt-svc': 'h3=":443"; ma=86400',
  'cf-cache-status': 'HIT',
  age: '29874',
  'accept-ranges': 'bytes',
  'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=0qOgXQlOSV9GGdb0J0VsiVVV2PhqBkHpYp48mKfrZ%2BKbrH9c%2BPvdJpJ7N80QQwgHspjML8LCrR83z4zfYDS4yZam2aU6nVtP9k4fC6R64dZ%2FtMBRp8FeS0UIyj3M"}],"group":"cf-nel","max_age":604800}',
  nel: '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
  'access-control-allow-origin': '*',
  server: 'cloudflare',
  'cf-ray': '8c39aa1019d83266-VIE'
},
config: {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: [ 'xhr', 'http', 'fetch' ],
  transformRequest: [ [Function: transformRequest] ],
  transformResponse: [ [Function: transformResponse] ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: [Function], Blob: [class Blob] },
  validateStatus: [Function: validateStatus],
  headers: Object [AxiosHeaders] {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': undefined,
    'User-Agent': 'axios/1.7.7',
    'Accept-Encoding': 'gzip, compress, deflate, br'
  },
  method: 'get',
  url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  data: undefined
},
request: <ref *1> ClientRequest {
  _events: [Object: null prototype] {
    abort: [Function (anonymous)],
    aborted: [Function (anonymous)],
    connect: [Function (anonymous)],
    error: [Function (anonymous)],
    socket: [Function (anonymous)],
    timeout: [Function (anonymous)],
    finish: [Function: requestOnFinish]
  },
  _eventsCount: 7,
  _maxListeners: undefined,
  outputData: [],
  outputSize: 0,
  writable: true,
  destroyed: true,
  _last: true,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  maxRequestsOnConnectionReached: false,
  _defaultKeepAlive: true,
  useChunkedEncodingByDefault: false,
  sendDate: false,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  strictContentLength: false,
  _contentLength: 0,
  _hasBody: true,
  _trailer: '',
  finished: true,
  _headerSent: true,
  _closed: true,
  _header: 'GET /api/v2/pokemon/ditto HTTP/1.1\r\n' +
    'Accept: application/json, text/plain, */*\r\n' +
    'User-Agent: axios/1.7.7\r\n' +
    'Accept-Encoding: gzip, compress, deflate, br\r\n' +
    'Host: pokeapi.co\r\n' +
    'Connection: keep-alive\r\n' +
    '\r\n',
  _keepAliveTimeout: 0,
  _onPendingData: [Function: nop],
  agent: Agent {
    _events: [Object: null prototype],
    _eventsCount: 2,
    _maxListeners: undefined,
    defaultPort: 443,
    protocol: 'https:',
    options: [Object: null prototype],
    requests: [Object: null prototype] {},
    sockets: [Object: null prototype] {},
    freeSockets: [Object: null prototype],
    keepAliveMsecs: 1000,
    keepAlive: true,
    maxSockets: Infinity,
    maxFreeSockets: 256,
    scheduling: 'lifo',
    maxTotalSockets: Infinity,
    totalSocketCount: 1,
    maxCachedSessions: 100,
    _sessionCache: [Object],
    [Symbol(shapeMode)]: false,
    [Symbol(kCapture)]: false
  },
  socketPath: undefined,
  method: 'GET',
  maxHeaderSize: undefined,
  insecureHTTPParser: undefined,
  joinDuplicateHeaders: undefined,
  path: '/api/v2/pokemon/ditto',
  _ended: true,
  res: IncomingMessage {
    _events: [Object],
    _readableState: [ReadableState],
    _maxListeners: undefined,
    socket: null,
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    rawHeaders: [Array],
    rawTrailers: [],
    joinDuplicateHeaders: undefined,
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: [TLSSocket],
    _consuming: true,
    _dumped: false,
    req: [Circular *1],
    _eventsCount: 4,
    responseUrl: 'https://pokeapi.co/api/v2/pokemon/ditto',
    redirects: [],
    [Symbol(shapeMode)]: true,
    [Symbol(kCapture)]: false,
    [Symbol(kHeaders)]: [Object],
    [Symbol(kHeadersCount)]: 48,
    [Symbol(kTrailers)]: null,
    [Symbol(kTrailersCount)]: 0
  },
  aborted: false,
  timeoutCb: null,
  upgradeOrConnect: false,
  parser: null,
  maxHeadersCount: null,
  reusedSocket: false,
  host: 'pokeapi.co',
  protocol: 'https:',
  _redirectable: Writable {
    _events: [Object],
    _writableState: [WritableState],
    _maxListeners: undefined,
    _options: [Object],
    _ended: true,
    _ending: true,
    _redirectCount: 0,
    _redirects: [],
    _requestBodyLength: 0,
    _requestBodyBuffers: [],
    _eventsCount: 3,
    _onNativeResponse: [Function (anonymous)],
    _currentRequest: [Circular *1],
    _currentUrl: 'https://pokeapi.co/api/v2/pokemon/ditto',
    [Symbol(shapeMode)]: true,
    [Symbol(kCapture)]: false
  },
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false,
  [Symbol(kBytesWritten)]: 0,
  [Symbol(kNeedDrain)]: false,
  [Symbol(corked)]: 0,
  [Symbol(kChunkedBuffer)]: [],
  [Symbol(kChunkedLength)]: 0,
  [Symbol(kSocket)]: TLSSocket {
    _tlsOptions: [Object],
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    secureConnecting: false,
    _SNICallback: null,
    servername: 'pokeapi.co',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object: null prototype],
    _eventsCount: 9,
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: 'pokeapi.co',
    _closeAfterHandlingError: false,
    _readableState: [ReadableState],
    _writableState: [WritableState],
    allowHalfOpen: false,
    _maxListeners: undefined,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: [TLSWrap],
    _requestCert: true,
    _rejectUnauthorized: true,
    timeout: 5000,
    parser: null,
    _httpMessage: null,
    autoSelectFamilyAttemptedAddresses: [Array],
    [Symbol(alpncallback)]: null,
    [Symbol(res)]: [TLSWrap],
    [Symbol(verified)]: true,
    [Symbol(pendingSession)]: null,
    [Symbol(async_id_symbol)]: -1,
    [Symbol(kHandle)]: [TLSWrap],
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: 5000,
      _idlePrev: [TimersList],
      _idleNext: [TimersList],
      _idleStart: 2516,
      _onTimeout: [Function: bound ],
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 28,
      [Symbol(triggerId)]: 26
    },
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(shapeMode)]: true,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: false,
    [Symbol(kSetKeepAlive)]: true,
    [Symbol(kSetKeepAliveInitialDelay)]: 1,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(connect-options)]: [Object]
  },
  [Symbol(kOutHeaders)]: [Object: null prototype] {
    accept: [Array],
    'user-agent': [Array],
    'accept-encoding': [Array],
    host: [Array]
  },
  [Symbol(errored)]: null,
  [Symbol(kHighWaterMark)]: 16384,
  [Symbol(kRejectNonStandardBodyWrites)]: false,
  [Symbol(kUniqueHeaders)]: null
},
data: {
  abilities: [ [Object], [Object] ],
  base_experience: 101,
  cries: {
    latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg',
    legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg'
  },
  forms: [ [Object] ],
  game_indices: [
    [Object], [Object], [Object],
    [Object], [Object], [Object],
    [Object], [Object], [Object],
    [Object], [Object], [Object],
    [Object], [Object], [Object],
    [Object], [Object], [Object],
    [Object], [Object]
  ],
  height: 3,
  held_items: [ [Object], [Object] ],
  id: 132,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/132/encounters',
  moves: [ [Object] ],
  name: 'ditto',
  order: 214,
  past_abilities: [],
  past_types: [],
  species: {
    name: 'ditto',
    url: 'https://pokeapi.co/api/v2/pokemon-species/132/'
  },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
    back_female: null,
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    front_female: null,
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
    front_shiny_female: null,
    other: [Object],
    versions: [Object]
  },
  stats: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
  types: [ [Object] ],
  weight: 40
}
}
