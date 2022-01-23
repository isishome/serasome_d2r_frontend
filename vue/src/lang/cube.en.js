export default {
  "en": {
    cubeClassifies: [
      { value: 'all', label: 'All' },
      { value: 'socket', label: 'Socket' },
      { value: 'rune', label: 'Rune' },
      { value: 'gem', label: 'Gem' },
      { value: 'item', label: 'Item' },
      { value: 'quest', label: 'Quest' },
      { value: 'potion', label: 'Potion' }
    ],
    cubeData: [
      {
        classify: 'quest',
        title: 'Secret Cow Level',
        desc: ['A character must first defeat Diablo (in D2C) or Baal (in D2X) on that difficulty level to open the portal'],
        images: ['quests/wirtsleg.png', 'consumables/tomeoftownportal.png'],
        recipe: ['Wirt’s Leg + A Tome of Town Portal']
      },
      {
        classify: 'quest',
        title: 'Pandemonium Event',
        desc: ['These recipes must be executed in Harrogath (Act Five Town) in a Hell difficulty game on the Battle.net Realms', 'Red Portal to either the Matron’s Den, Furnace of Pain, or Forgotten Sands. (Which of the 3 portals opens is random, but they will not repeat if opened in the same game.'],
        images: ['quests/key.png', 'quests/key.png', 'quests/key.png'],
        recipe: ['Key of Hate  + Key of Terror + Key of Destruction']
      },
      {
        classify: 'gem',
        title: 'Gems',
        desc: ['<span class="text-underline">Chipped</span> Gems x 3 → <span class="text-underline">Flawed</span> Gems', '<span class="text-underline">Flawed</span> Gems x 3 → <span class="text-underline">Normal</span> Gems', '<span class="text-underline">Normal</span> Gems x 3 → <span class="text-underline">Flawless</span> Gems', '<span class="text-underline">Flawless</span> Gems x 3 → <span class="text-underline">Perfect</span> Gems'],
        images: ['gems/chipped.png', 'gems/flawed.png', 'gems/normal.png', 'gems/flawless.png', 'gems/perfect.png'],
        recipe: ['<span class="text-underline">Chipped</span>, <span class="text-underline">Flawed</span>, <span class="text-underline">Normal</span>, <span class="text-underline">Flawless</span>, <span class="text-underline">Perfect</span> Gems']
      },
      {
        classify: 'rune',
        title: 'Lowest Level Runes',
        desc: ['<span class="text-weight-bold text-grey-7">El</span> x 3 → <span class="text-weight-bold text-grey-7">Eld</span>', '<span class="text-weight-bold text-grey-7">Eld</span> x 3 → <span class="text-weight-bold text-grey-7">Tir</span>', '<span class="text-weight-bold text-grey-7">Tir</span> x 3 → <span class="text-weight-bold text-grey-7">Nef</span>', '<span class="text-weight-bold text-grey-7">Nef</span> x 3 → <span class="text-weight-bold text-grey-7">Eth</span>', '<span class="text-weight-bold text-grey-7">Eth</span> x 3 → <span class="text-weight-bold text-grey-7">Ith</span>', '<span class="text-weight-bold text-grey-7">Ith</span> x 3 → <span class="text-weight-bold text-grey-7">Tal</span>', '<span class="text-weight-bold text-grey-7">Tal</span> x 3 → <span class="text-weight-bold text-grey-7">Ral</span>', '<span class="text-weight-bold text-grey-7">Ral</span> x 3 → <span class="text-weight-bold text-grey-7">Ort</span>', '<span class="text-weight-bold text-grey-7">Ort</span> x 3 → <span class="text-weight-bold text-grey-7">Thul</span>'],
        images: ['runes/el.png', 'runes/el.png', 'runes/tir.png', 'runes/nef.png', 'runes/eth.png', 'runes/ith.png', 'runes/tal.png', 'runes/ral.png', 'runes/ort.png', 'runes/thul.png']
      },
      {
        classify: 'rune',
        title: 'Low Level Runes',
        desc: ['<span class="text-weight-bold text-grey-7">Thul</span> x 3 + <span class="text-underline">Chipped</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Topaz</span> → <span class="text-weight-bold text-grey-7">Amn</span>', '<span class="text-weight-bold text-grey-7">Amn</span> x 3 + <span class="text-underline">Chipped</span> <span class="text-purple-5">Amethyst</span> → <span class="text-weight-bold text-grey-7">Sol</span>', '<span class="text-weight-bold text-grey-7">Sol</span> x 3 + <span class="text-underline">Chipped</span> <span class="text-blue">Sapphire</span> → <span class="text-weight-bold text-grey-7">Shael</span>', '<span class="text-weight-bold text-grey-7">Shael</span> x 3 + <span class="text-underline">Chipped</span> <span class="text-red">Ruby</span> → <span class="text-weight-bold text-grey-7">Dol</span>', '<span class="text-weight-bold text-grey-7">Dol</span> x 3 + <span class="text-underline">Chipped</span> <span class="text-light-green">Emerald</span> → <span class="text-weight-bold text-grey-7">Hel</span>', '<span class="text-weight-bold text-grey-7">Hel</span> x 3 + <span class="text-underline">Chipped</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> → <span class="text-weight-bold text-grey-7">Io</span>'],
        images: ['runes/thul.png', 'runes/amn.png', 'runes/sol.png', 'runes/shael.png', 'runes/dol.png', 'runes/hel.png', 'runes/io.png']
      },
      {
        classify: 'rune',
        title: 'Normal Level Runes',
        desc: ['<span class="text-weight-bold text-grey-7">Io</span> x 3 + <span class="text-underline">Flawed</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Topaz</span> → <span class="text-weight-bold text-grey-7">Lum</span>', '<span class="text-weight-bold text-grey-7">Lum</span> x 3 + <span class="text-underline">Flawed</span> <span class="text-purple-5">Amethyst</span> → <span class="text-weight-bold text-grey-7">Ko</span>', '<span class="text-weight-bold text-grey-7">Ko</span> x 3 + <span class="text-underline">Flawed</span> <span class="text-blue">Sapphire</span> → <span class="text-weight-bold text-grey-7">Fal</span>', '<span class="text-weight-bold text-grey-7">Fal</span> x 3 + <span class="text-underline">Flawed</span> <span class="text-red">Ruby</span> → <span class="text-weight-bold text-grey-7">Lem</span>', '<span class="text-weight-bold text-grey-7">Lem</span> x 3 + <span class="text-underline">Flawed</span> <span class="text-light-green">Emerald</span> → <span class="text-weight-bold text-grey-7">Pul</span>', '<span class="text-weight-bold text-grey-7">Pul</span> x 2 + <span class="text-underline">Flawed</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> → <span class="text-weight-bold text-grey-7">Um</span>'],
        images: ['runes/io.png', 'runes/lum.png', 'runes/ko.png', 'runes/fal.png', 'runes/lem.png', 'runes/pul.png', 'runes/um.png']
      },
      {
        classify: 'rune',
        title: 'High Level Runes',
        desc: ['<span class="text-weight-bold text-grey-7">Um</span> x 2 + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Topaz</span> → <span class="text-weight-bold text-grey-7">Mal</span>', '<span class="text-weight-bold text-grey-7">Mal</span> x 2 + <span class="text-purple-5">Amethyst</span> → <span class="text-weight-bold text-grey-7">Ist</span>', '<span class="text-weight-bold text-grey-7">Ist</span> x 2 + <span class="text-blue">Sapphire</span> → <span class="text-weight-bold text-grey-7">Gul</span>', '<span class="text-weight-bold text-grey-7">Gul</span> x 2 + <span class="text-red">Ruby</span> → <span class="text-weight-bold text-grey-7">Vex</span>', '<span class="text-weight-bold text-grey-7">Vex</span> x 2 + <span class="text-light-green">Emerald</span> → <span class="text-weight-bold text-grey-7">Ohm</span>', '<span class="text-weight-bold text-grey-7">Ohm</span> x 2 + <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> → <span class="text-weight-bold text-grey-7">Lo</span>'],
        images: ['runes/um.png', 'runes/mal.png', 'runes/ist.png', 'runes/gul.png', 'runes/vex.png', 'runes/ohm.png', 'runes/lo.png']
      },
      {
        classify: 'rune',
        title: 'Highest Level Runes',
        desc: ['<span class="text-weight-bold text-grey-7">Lo</span> x 2 + <span class="text-underline">Flawless</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Topaz</span> → <span class="text-weight-bold text-grey-7">Sur</span>', '<span class="text-weight-bold text-grey-7">Sur</span> x 2 + <span class="text-underline">Flawless</span> <span class="text-purple-5">Amethyst</span> → <span class="text-weight-bold text-grey-7">Ber</span>', '<span class="text-weight-bold text-grey-7">Ber</span> x 2 + <span class="text-underline">Flawless</span> <span class="text-blue">Sapphire</span> → <span class="text-weight-bold text-grey-7">Jah</span>', '<span class="text-weight-bold text-grey-7">Jah</span> x 2 + <span class="text-underline">Flawless</span> <span class="text-red">Ruby</span> → <span class="text-weight-bold text-grey-7">Cham</span>', '<span class="text-weight-bold text-grey-7">Cham</span> x 2 + <span class="text-underline">Flawless</span> <span class="text-light-green">Emerald</span> → <span class="text-weight-bold text-grey-7">Zod</span>'],
        images: ['runes/lo.png', 'runes/sur.png', 'runes/ber.png', 'runes/jah.png', 'runes/cham.png', 'runes/zod.png']
      },
      {
        classify: 'potion',
        title: 'Potions',
        desc: ['<span class="text-red">Health Potions</span> x 3 + <span class="text-blue">Mana Potions</span> x 3 + <span class="text-underline">Chipped</span> Gems → <span class="text-purple">Rejuvenation Potions</span>', '<span class="text-red">Health Potions</span> x 3 + <span class="text-blue">Mana Potions</span> x 3 + <span class="text-underline">Normal</span> Gems → Full <span class="text-purple">Rejuvenation Potions</span>', '<span class="text-purple">Rejuvenation Potions</span> x 3 → <span class="text-purple">Full Rejuvenation Potions</span>'],
        images: ['potions/rejuv.png', 'potions/full_rejuv.png']
      },
      {
        classify: 'socket',
        title: 'Remove Items From Sockets',
        desc: ['<span class="text-weight-bold text-grey-7">Hel</span> + <span class="text-blue">Scroll of Town Portal</span> +  the sockets in an item'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Socketed Weapon Of Same Type',
        desc: ['<span class="text-weight-bold text-grey-7">Ral</span> + <span class="text-weight-bold text-grey-7">Amn</span> +  <span class="text-underline">Perfect</span> <span class="text-purple-5">Amethyst</span> + Normal Weapon', 'Add 1 ~ 6 sockets to the weapon'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Socketed Helm Of Same Type',
        desc: ['<span class="text-weight-bold text-grey-7">Ral</span> + <span class="text-weight-bold text-grey-7">Thul</span> +  <span class="text-underline">Perfect</span> <span class="text-blue">Sapphire</span> + Normal Helm', 'Add 1 ~ 3 sockets to the helm'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Socketed Shield Of Same Type',
        desc: ['<span class="text-weight-bold text-grey-7">Tal</span> + <span class="text-weight-bold text-grey-7">Amn</span> +  <span class="text-underline">Perfect</span> <span class="text-red">Ruby</span> + Normal Shield', 'Add 1 ~ 4 sockets to the shield'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Socketed Body Armor Of Same Type',
        desc: ['<span class="text-weight-bold text-grey-7">Tal</span> + <span class="text-weight-bold text-grey-7">Thul</span> +  <span class="text-underline">Perfect</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Topaz</span> + Normal Body Armor', 'Add 1 ~ 4 sockets to the body armor'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Rare Item Socket Creation',
        desc: ['<span class="text-underline">Perfect</span> <span class="text-grey-7">Skull</span> x 3 + <span class="text-weight-bold text-title">Stone of Jordan</span> + <span class="text-weight-bold text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Rare Weapon</span>', '1 Socket Creation', 'Does not work on items that can not have sockets'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Magic Weapon Socket Creation',
        desc: ['<span class="text-underline">Chipped</span> Gems x 3 + <span class="text-weight-bold text-indigo-5">Magic Weapon</span>', '1~2 Socket Creation', 'Does not work on items that can not have sockets', '<span class="text-weight-bold">Result Level = 25</span>'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Magic Weapon Socket Creation',
        desc: ['<span class="text-underline">Flawless</span> Gems x 3 + <span class="text-weight-bold text-indigo-5">Magic Weapon</span>', '1~2 Socket Creation', 'Does not work on items that can not have sockets', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: 'Magic Weapon Socket Re-Creation',
        desc: ['<span class="text-underline">Normal</span> Gems x 3 + <span class="text-weight-bold text-indigo-5">Socketed Magic Weapon</span>', '1~2 Socket Creation', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'item',
        title: 'Normal Set Weapon Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Ral</span> + <span class="text-weight-bold text-grey-7">Sol</span> + <span class="text-underline">Perfect</span> <span class="text-light-green">Emerald</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Normal Set Weapon</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Version of Set Weapon</span>'],
        images: ['weapons/crystal_sword.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: 'Exceptional Set Weapon Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Lum</span> + <span class="text-weight-bold text-grey-7">Pul</span> + <span class="text-underline">Perfect</span> <span class="text-light-green">Emerald</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Set Weapon</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Elite Version of Set Weapon</span>'],
        images: ['weapons/crystal_sword.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: 'Normal Set Armor Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Tal</span> + <span class="text-weight-bold text-grey-7">Shael</span> + <span class="text-underline">Perfect</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Normal Set Armor</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Version of Set Armor</span>'],
        images: ['armor/light_plate.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: 'Exceptional Set Armor Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Ko</span> + <span class="text-weight-bold text-grey-7">Lem</span> + <span class="text-underline">Perfect</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Set Armor</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">Elite Version of Set Armor</span>'],
        images: ['armor/light_plate.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: 'Normal Weapon Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Eld</span> + <span class="text-underline">Chipped</span> Gems + Low Quality Weapon → Normal Quality Weapon', '<span class="text-weight-bold">Result Level = 1 ilvl</span>', 'Any sockets and items in those sockets will be lost after using this recipe', 'ilvl : Item Level'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Normal Armor Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">El</span> + <span class="text-underline">Chipped</span> Gems + Low Quality Armor → Normal Quality Armor', '<span class="text-weight-bold">Result Level = 1 ilvl</span>', 'Any sockets and items in those sockets will be lost after using this recipe', 'ilvl : Item Level'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Normal Unique Weapon Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Ral</span> + <span class="text-weight-bold text-grey-7">Sol</span> + <span class="text-underline">Perfect</span> <span class="text-light-green">Emerald</span> + <span class="text-title">Normal Unique Weapon</span> → <span class="text-title">Exceptional Unique Weapon</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Normal Unique Armor Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Tal</span> + <span class="text-weight-bold text-grey-7">Shael</span> + <span class="text-underline">Perfect</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> + <span class="text-title">Normal Unique Armor</span> → <span class="text-title">Exceptional Unique Armor</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Exceptional Unique Weapon Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Lum</span> + <span class="text-weight-bold text-grey-7">Pul</span> + <span class="text-underline">Perfect</span> <span class="text-light-green">Emerald</span> + <span class="text-title">Exceptional Unique Weapon</span> → <span class="text-title">Elite Unique Weapon</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Exceptional Unique Armor Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Ko</span> + <span class="text-weight-bold text-grey-7">Lem</span> + <span class="text-underline">Perfect</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> + <span class="text-title">Exceptional Unique Armor</span> → <span class="text-title">Elite Unique Armor</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Normal Rare Weapon Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Ort</span> + <span class="text-weight-bold text-grey-7">Amn</span> + <span class="text-underline">Perfect</span> <span class="text-light-green">Emerald</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Normal Rare Weapon</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Rare Weapon</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Normal Rare Armor Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Ral</span> + <span class="text-weight-bold text-grey-7">Thul</span> + <span class="text-underline">Perfect</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Normal Rare Armor</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Rare Armor</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Exceptional Rare Weapon Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Fal</span> + <span class="text-weight-bold text-grey-7">Um</span> + <span class="text-underline">Perfect</span> <span class="text-light-green">Emerald</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Rare Weapon</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Elite Rare Weapon</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Exceptional Rare Armor Upgrades',
        desc: ['<span class="text-weight-bold text-grey-7">Ko</span> + <span class="text-weight-bold text-grey-7">Pul</span> + <span class="text-underline">Perfect</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Exceptional Rare Armor</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Elite Rare Armor</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Rare Item Creation',
        desc: ['<span class="text-underline">Perfect</span> <span class="text-grey-7">Skull</span> + <span class="text-title">Stone of Jordan</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Rare Item</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Rare Item</span>', '<span class="text-weight-bold">Result Level = clvl * 0.66 + ilvl * 0.66</span>', 'clvl : Character Level', 'ilvl : Item Level'],
        images: ['quests/horadricmalus.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Rare Item Creation',
        desc: ['<span class="text-underline">Perfect</span> <span class="text-grey-7">Skull</span> x 6 + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Rare Item</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Rare Item</span>', '<span class="text-weight-bold">Result Level = clvl * 0.40 + ilvl * 0.40</span>', 'clvl : Character Level', 'ilvl : Item Level'],
        images: ['quests/horadricmalus.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Ring Creation',
        desc: ['<span class="text-indigo-5">Magic Ring</span> x 3 → <span class="text-indigo-5">Magic Amulet</span>', '<span class="text-weight-bold">Result Level = clvl * 0.75</span>', 'clvl : Character Level'],
        images: ['rings/ring1.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Amulet Creation',
        desc: ['<span class="text-indigo-5">Magic Amulet</span> x 3 → <span class="text-indigo-5">Magic Ring</span>', '<span class="text-weight-bold">Result Level = clvl * 0.75</span>', 'clvl : Character Level'],
        images: ['amulets/amulet1.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Item Creation',
        desc: ['<span class="text-underline">Perfect</span> Gems x 3 + <span class="text-indigo-5">Magic Item</span> → <span class="text-indigo-5">Magic Item</span>', '<span class="text-weight-bold">Result Level = Material ilvl</span>', 'ilvl : Item Level'],
        images: ['helms/horror.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Amulet Creation',
        desc: ['<span class="text-weight-bold text-underline">each type</span> <span class="text-underline">Perfect</span> Gems x 6 + <span class="text-indigo-5">Magic Amulet</span> → <span class="text-indigo-5">Magic Amulet</span>', 'Prefix : Prismatic', 'All Resistances +16-20', '<span class="text-weight-bold">Result Level = 50</span>'],
        images: ['amulets/amulet2.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Ring Creation',
        desc: ['<span class="text-underline">Perfect</span> <span class="text-light-green">Emerald</span> + <span class="text-grey-7">Antidote Potion</span> + <span class="text-indigo-5">Magic Ring</span> → <span class="text-indigo-5">Magic Ring</span>', 'Prefix : Jade', '21-30% poison resistance', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['rings/ring2.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Ring Creation',
        desc: ['<span class="text-underline">Perfect</span> <span class="text-red">Ruby</span> + <span class="text-orange">Exploding Potion</span> + <span class="text-indigo-5">Magic Ring</span> → <span class="text-indigo-5">Magic Ring</span>', 'Prefix : Garnet', '21-30% fire resistance', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['rings/ring3.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Ring Creation',
        desc: ['<span class="text-underline">Perfect</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">Topaz</span> + <span class="text-purple">Rejuvenation Potions</span> + <span class="text-indigo-5">Magic Ring</span> → <span class="text-indigo-5">Magic Ring</span>', 'Prefix : Coral', '21-30% lightning resistance', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['rings/ring4.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Ring Creation',
        desc: ['<span class="text-underline">Perfect</span> <span class="text-blue">Sapphire</span> + <span class="text-lime">Thawing Potion</span> + <span class="text-indigo-5">Magic Ring</span> → <span class="text-indigo-5">Magic Ring</span>', 'Prefix : Cobalt', '21-30% cold resistance', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['rings/ring5.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Sword Creation',
        desc: ['<span class="text-underline">All Quality Of</span> <span class="text-red">Ruby</span> + <span class="text-underline">All Kind Of</span> <span class="text-red">Health Potions</span> x 4 + <span class="text-underline">All Kind Of</span> <span class="text-indigo-5">Magic Sword</span> → <span class="text-indigo-5">Magic Sword</span>', 'Suffix : of The Leech', '4-5% Life Stolen Per Hit', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['weapons/colossus_blade.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Shield Creation',
        desc: ['<span class="text-underline">All Quality Of</span> <span class="text-grey-7">Skull</span> + <span class="text-underline">All Quality Of</span> <span class="text-brown">Spiked Club</span> + <span class="text-underline">All Kind Of</span> <span class="text-indigo-5">Magic Shield</span> → <span class="text-indigo-5">Magic Shield</span>', 'Suffix : of Spikes', 'Attacker Takes Damage of 4-6', '<span class="text-weight-bold">Result Level = 30</span>'],
        images: ['shields/monarch.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Magic Polearm Creation',
        desc: ['<span class="text-underline">All Quality Of</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">Diamond</span> + <span class="text-underline">All Kind Of</span> <span class="text-lime">Staff</span> + <span class="text-underline">All Kind Of</span> <span class="text-grey-6">Kris</span> + <span class="text-underline">All Kind Of</span> <span class="text-brown">Belt</span> → <span class="text-indigo-5">Magic Polearm</span>', 'Prefix : Savage', '66-80% Enhanced Damage', '<span class="text-weight-bold">Result Level = 50</span>'],
        images: ['weapons/giant_thresher.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Fully Repaired Weapon',
        desc: ['<span class="text-weight-bold text-grey-7">Ort</span> + Weapon'],
        images: ['etc/repair.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Fully Repaired and Recharged Weapon',
        desc: ['<span class="text-weight-bold text-grey-7">Ort</span> + <span class="text-underline">Chipped</span> Gems + Weapon'],
        images: ['etc/repair.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Fully Repaired Armor',
        desc: ['<span class="text-weight-bold text-grey-7">Ral</span> + Armor'],
        images: ['etc/repair.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: 'Fully Repaired and Recharged Armor',
        desc: ['<span class="text-weight-bold text-grey-7">Ral</span> + <span class="text-underline">Chipped</span> Gems + Armor'],
        images: ['etc/repair.png'],
        width: '30%'
      }
    ]
  }
}