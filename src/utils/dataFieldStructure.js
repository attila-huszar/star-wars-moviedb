import {
  capitalizeString,
  transformDate,
  arabicToRoman,
} from './textTransforms'

export function dataFieldStructure(data, component, page) {
  if (component === 'card') {
    return getCardFields(data, page)
  } else if (component === 'detail') {
    return getDetailFields(data, page)
  }
}

function getCardFields(data, page) {
  return {
    episodes: [
      { label: 'Episode:', value: `Episode ${arabicToRoman(data.id)}` },
      { label: 'Director:', value: data.director },
      { label: 'Producer:', value: data.producer },
      { label: 'Release Date:', value: data.release_date },
    ],
    characters: [
      { label: 'Species:', value: data.species },
      {
        label: 'Birth:',
        value: transformDate(data.born),
      },
      {
        label: 'Homeworld:',
        value: capitalizeString(data.homeworld),
      },
    ],
    planets: [
      { label: 'Climate:', value: data.climate },
      { label: 'Terrain:', value: data.terrain },
      { label: 'Population:', value: data.population },
    ],
    species: [
      { label: 'Classification:', value: data.classification },
      { label: 'Designation:', value: data.designation },
    ],
    vehicles: [
      { label: 'Model:', value: data.model },
      { label: 'Manufacturer:', value: data.manufacturer },
      { label: 'Class:', value: data.class },
    ],
    starships: [
      { label: 'Model:', value: data.model },
      { label: 'Manufacturer:', value: data.manufacturer },
      { label: 'Cost:', value: data.cost_in_credits || 'unknown' },
    ],
  }[page]
}

function getDetailFields(data, page) {
  return {
    episodes: [
      { label: 'Episode:', value: `Episode ${arabicToRoman(data.id)}` },
      { label: 'Director:', value: data.director },
      { label: 'Producer:', value: data.producer },
      { label: 'Release date:', value: data.release_date },
      { label: 'Characters:', value: data.characters, isCollapsed: true },
      { label: 'Planets:', value: data.planets, isCollapsed: true },
      { label: 'Starships:', value: data.starships, isCollapsed: true },
      { label: 'Vehicles:', value: data.vehicles, isCollapsed: true },
      { label: 'Species:', value: data.species, isCollapsed: true },
      {
        label: 'Created:',
        value: new Date(data.created).toLocaleDateString('sv-SE'),
      },
      {
        label: 'Edited:',
        value: new Date(data.edited).toLocaleDateString('sv-SE'),
      },
      { label: '', value: data.opening_crawl },
    ],
    characters: [
      { label: 'Species:', value: data.species },
      { label: 'Gender:', value: data.gender },
      { label: 'Birth:', value: transformDate(data.born) },
      { label: 'Death:', value: transformDate(data.died) },
      { label: 'Homeworld:', value: capitalizeString(data.homeworld) },
      { label: 'Affiliations:', value: data.affiliations, isCollapsed: true },
      { label: 'Wiki:', value: data.wiki, isLink: true },
    ],
    planets: [
      { label: 'Rotation period:', value: data.rotation_period },
      { label: 'Orbital period:', value: data.orbital_period },
      { label: 'Diameter:', value: data.diameter },
      { label: 'Climate:', value: data.climate },
      { label: 'Gravity:', value: data.gravity },
      { label: 'Terrain:', value: data.terrain },
      { label: 'Surface water:', value: data.surface_water },
      { label: 'Population:', value: data.population },
      { label: 'Residents:', value: data.residents, isCollapsed: true },
      { label: 'Films:', value: data.films, isCollapsed: true },
    ],
    species: [
      { label: 'Classification:', value: data.classification },
      { label: 'Designation:', value: data.designation },
      { label: 'Avg. height:', value: data.average_height },
      { label: 'Avg. lifespan:', value: data.average_lifespan },
      {
        label: 'Homeworld:',
        value: data.homeworld ? data.homeworld[0].name : 'unknown',
      },
      { label: 'Language:', value: data.language },
      { label: 'People:', value: data.people, isCollapsed: true },
      { label: 'Films:', value: data.films, isCollapsed: true },
    ],
    vehicles: [
      { label: 'Model:', value: data.model },
      { label: 'Manufacturer:', value: data.manufacturer },
      { label: 'Class:', value: data.class },
      { label: 'Max speed:', value: data.max_atmosphere_speed },
      { label: 'Crew:', value: data.crew },
      { label: 'Passengers:', value: data.passengers },
    ],
    starships: [
      { label: 'Model:', value: data.model },
      { label: 'Manufacturer:', value: data.manufacturer },
      { label: 'Class:', value: data.starship_class },
      { label: 'Length:', value: data.length },
      { label: 'Max speed:', value: data.max_atmosphering_speed },
      { label: 'Hyperdrive:', value: data.hyperdrive_rating },
      { label: 'Crew:', value: data.crew },
      { label: 'Cost:', value: data.cost_in_credits },
    ],
  }[page]
}
