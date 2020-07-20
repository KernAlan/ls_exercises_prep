function extractRegion(string) {
  let region = string.slice(3, 5);
    console.log(region);
  return region;

}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'