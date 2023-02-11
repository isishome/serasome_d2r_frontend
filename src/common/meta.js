const metas = [
  { path: '/bbs/news', title: 'News | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected\'s news.' },
  { path: '/bbs/trade', title: 'Trade | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected\'s trade.' },
  { path: '/bbs/laboratory', title: 'Laboratory | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected\'s laboratory.' },
  { path: '/bbs/forums', title: 'Forums | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected\'s forums.' },
  { path: '/knowledge/classes/amazon', title: 'Classes : Amazon | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/classes/assassin', title: 'Classes : Assassin | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/classes/barbarian', title: 'Classes : Barbarian | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/classes/druid', title: 'Classes : Druid | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/classes/necromancer', title: 'Classes : Necromancer | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/classes/paladin', title: 'Classes : Paladin | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/classes/sorceress', title: 'Classes : Sorceress | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/skills/amazon', title: 'Skills : Amazon | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/skills/assassin', title: 'Skills : Assassin | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/skills/barbarian', title: 'Skills : Barbarian | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/skills/druid', title: 'Skills : Druid | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/skills/necromancer', title: 'Skills : Necromancer | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/skills/paladin', title: 'Skills : Paladin | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/skills/sorceress', title: 'Skills : Sorceress | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/items/cube', title: 'Items : Horadric Cube Recipes | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/items/rune', title: 'Items : Runewords | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/items/craft', title: 'Items : Crafted | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/items/sunder', title: 'Items : Sunder Charms | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/npcs/act1', title: 'NPCs : Act I | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/npcs/act2', title: 'NPCs : Act II | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/npcs/act3', title: 'NPCs : Act III | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/npcs/act4', title: 'NPCs : Act IV | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/npcs/act5', title: 'NPCs : Act V | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/quests/act', title: 'Quests : Act | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/quests/secret1', title: 'Quests : The Secret Cow Level | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/quests/secret2', title: 'Quests : Uber Diablo Quest | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/quests/secret3', title: 'Quests : Pandemonium Event | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/shrines', title: 'Shrines | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/maps/act1', title: 'Maps : Act I | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/maps/act2', title: 'Maps : Act II | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/maps/act3', title: 'Maps : Act III | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/maps/act4', title: 'Maps : Act IV | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/maps/act5', title: 'Maps : Act V | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' },
  { path: '/knowledge/terrorzones', title: 'Terror Zones | Knowledge | Sera\'s Diablo® II Resurrected', description: 'Diablo® II Resurrected provides various information such as classes, skills, items, NPCs, quests, shrines, maps, and terror zones.' }
]

export const updateMeta = (path) => {
  const pathName = path || document.location.pathname
  const findMeta = metas.find(m => (new RegExp(pathName, 'i')).test(m.path))

  const title = findMeta ? findMeta.title : 'Sera\'s Diablo® II Resurrected'
  const desc = findMeta ? findMeta.description : 'Sera\'s Diablo® II Resurrected'

  document.title = title

  const ogTitle = document.createElement('meta')
  ogTitle.setAttribute('property', 'og:title')
  ogTitle.setAttribute('content', title)

  const oldOgTitle = document.head.querySelector('meta[property="og:title"]')
  if (oldOgTitle === null)
    document.head.appendChild(ogTitle)
  else
    oldOgTitle.replaceWith(ogTitle)

  const description = document.createElement('meta')
  description.setAttribute('name', 'description')
  description.setAttribute('content', desc)

  const oldDescription = document.head.querySelector('meta[name="description"]')
  if (oldDescription === null)
    document.head.appendChild(description)
  else
    oldDescription.replaceWith(description)

  const ogDescription = document.createElement('meta')
  ogDescription.setAttribute('property', 'og:description')
  ogDescription.setAttribute('content', desc)

  const oldOgDescription = document.head.querySelector('meta[property="og:description"]')
  if (oldOgDescription === null)
    document.head.appendChild(ogDescription)
  else
    oldOgDescription.replaceWith(ogDescription)

  const canonicalLink = document.createElement('link')
  canonicalLink.setAttribute('rel', 'canonical')
  canonicalLink.setAttribute('href', `${document.location.origin}${pathName}`)

  const oldCanonicalLink = document.head.querySelector('link[rel="canonical"]')
  if (oldCanonicalLink === null)
    document.head.appendChild(canonicalLink)
  else
    oldCanonicalLink.replaceWith(canonicalLink)
}