function extractLanguage(string) {
  let language = string.slice(0, 2)
  return language;
}



extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'