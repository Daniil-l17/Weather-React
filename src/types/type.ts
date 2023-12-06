
export interface LocalNames {
  sq?: string
  sd?: string
  na?: string
  sw?: string
  en: string
  he: string
  ce?: string
  ky?: string
  ba?: string
  id?: string
  ig?: string
  zu?: string
  th?: string
  fj?: string
  mg?: string
  ia?: string
  os?: string
  ie?: string
  rm?: string
  ascii?: string
  no?: string
  mn?: string
  hr?: string
  mi?: string
  bh?: string
  ln?: string
  sk?: string
  et?: string
  sr?: string
  tg?: string
  lt?: string
  bs?: string
  tt?: string
  cy?: string
  yo?: string
  te?: string
  si?: string
  da?: string
  eu?: string
  it?: string
  sa?: string
  pt?: string
  bn?: string
  ar?: string
  ab?: string
  oc?: string
  av?: string
  se?: string
  vi?: string
  so?: string
  ga?: string
  co?: string
  st?: string
  hu?: string
  gd?: string
  hi?: string
  mr?: string
  ug?: string
  nl?: string
  gv?: string
  fy?: string
  be?: string
  ne?: string
  tw?: string
  ta?: string
  br?: string
  lo?: string
  ha?: string
  fi?: string
  km?: string
  az?: string
  ps?: string
  ja?: string
  cs?: string
  ru: string
  el?: string
  wo?: string
  sn?: string
  fr: string
  cu?: string
  kw?: string
  ka?: string
  sm?: string
  yi?: string
  tk?: string
  de?: string
  uz?: string
  ro?: string
  is?: string
  af?: string
  an?: string
  bi?: string
  lv?: string
  mk?: string
  hy?: string
  ko: string
  nn?: string
  kk?: string
  to?: string
  pa?: string
  lb?: string
  wa?: string
  jv?: string
  ur?: string
  sv?: string
  su?: string
  vo?: string
  ms?: string
  fa?: string
  pl?: string
  io?: string
  kl?: string
  tr?: string
  bm?: string
  om?: string
  kn?: string
  ku?: string
  sh?: string
  nv?: string
  ee?: string
  li?: string
  ht?: string
  ca?: string
  my?: string
  mt?: string
  ay?: string
  qu?: string
  cv?: string
  gl?: string
  zh?: string
  fo?: string
  sc?: string
  gu?: string
  bg?: string
  gn?: string
  ny?: string
  uk?: string
  es?: string
  eo?: string
  or?: string
  feature_name?: string
  ff?: string
  ml?: string
  sl?: string
  tl?: string
  kv?: string
  am?: string
  bo?: string
  iu?: string
  oj?: string
  cr?: string
}


export interface Iwether {
  name: string
  local_names?: LocalNames
  lat: number
  lon: number
  country: string
  state: string
}




export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}


export interface Iwather {
  coord: Coord
  weather: Weather[]
  name: string
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  cod: number
}