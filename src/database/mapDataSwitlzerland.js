export const mapDataSwitzerland = async() => {
  const response = await fetch('https://code.highcharts.com/mapdata/countries/ch/ch-all.geo.json');
  return await response.json()
}


export const data = [
 
  ['ch-fr', 0],
  ['ch-lu', 0],
  ['ch-ni', 0],
  ['ch-vs', 0],
  ['ch-sg', 0],
  ['ch-ar', 0],
  ['ch-ti', 0],
  ['ch-gl', 0],
  ['ch-gr', 0],
  ['ch-sz', 0],
  ['ch-tg', 0],
  ['ch-sh', 0],
  ['ch-ur', 0],
  ['ch-zh', 0],
  ['ch-zg', 0],
  ['ch-vd', 0],
  ['ch-bl', 0],
  ['ch-be', 0],
  ['ch-bs', 0],
  ['ch-so', 0],
  ['ch-nw', 0],
  ['ch-ai', 0],
  ['ch-ge', 0],
  ['ch-ju', 0],
  ['ch-ne', 0],
  ['ch-ag', 0]
];
  

//https://code.highcharts.com/mapdata/countries/ch/ch-all.geo.json