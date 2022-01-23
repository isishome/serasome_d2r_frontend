export default {
  "en": {
    
    crafted: [
      {
        id: 'hit-power',
        name: 'Hit Power',
        icon: 'far fa-hand-rock',
        color: 'blue-9',
        common: { recipe: [{ name: 'Perfect<br>Sapphire', img: 'gems/perfect_saphire.png' }, { name: 'Jewel', img: 'jewels/jewel.png' }], effects: ['5% Chance To Cast Level 4 Frost Nova When Struck', 'Attacker Takes Damage of (3-7)'] },
        list: [
          { material: 5, recipe: { equipment: { type: 'Magic', name: ['Full Helm', 'Basinet', 'Giant Conch'], img: 'helms/full_helm.png' }, rune: 6 }, effects: ['(25-50) Defense vs. Missiles'] },
          { material: 16, recipe: { equipment: { type: 'Magic', name: ['Chain', 'Mesh', 'Boneweave Boots'], img: 'boots/chain_boots.png' }, rune: 8 }, effects: ['(25-50) Defense vs. Melee'] },
          { material: 17, recipe: { equipment: { type: 'Magic', name: ['Chain Gloves', 'Heavy Bracers', 'Vambraces'], img: 'gloves/chain_gloves.png' }, rune: 9 }, effects: ['Knockback'], hot: true },
          { material: 18, recipe: { equipment: { type: 'Magic', name: ['Heavy Belt', 'Battle Belt', 'Troll Belt'], img: 'belts/heavy_belt.png' }, rune: 7 }, effects: ['(5-10) % Damage Goes to Mana'] },
          { material: 4, recipe: { equipment: { type: 'Magic', name: ['Gothic Shield', 'Ancient Shield', 'Ward'], img: 'shields/gothic_shield.png' }, rune: 5 }, effects: ['(5-10%) Increased Chance of Blocking'] },
          { material: 3, recipe: { equipment: { type: 'Magic', name: ['Field Plate', 'Sharktooth Armor', 'Kraken Shell'], img: 'armor/field_plate.png' }, rune: 4 }, effects: ['10-20% Faster Hit Recovery'] },
          { material: 19, recipe: { equipment: { type: 'Magic', name: ['Amulet'], img: 'amulets/amulet3.png' }, rune: 10 }, effects: ['Hit Causes Monster To Flee (3-11)%'] },
          { material: 20, recipe: { equipment: { type: 'Magic', name: ['Ring'], img: 'rings/ring3.png' }, rune: 11 }, effects: ['+ (1-5) To Dexterity'] },
          { material: 21, recipe: { equipment: { type: 'Magic', name: ['Blunt Weapon'], img: 'weapons/mace.png' }, rune: 3 }, effects: ['+ (35-60%) Enhanced Damage'] }
        ]
      },
      {
        id: 'blood',
        name: 'Blood',
        icon: 'water_drop',
        color: 'red-9',
        common: { recipe: [{ name: 'Perfect<br>Ruby', img: 'gems/perfect_ruby.png' }, { name: 'Jewel', img: 'jewels/jewel1.png' }], effects: ['(1-3)% Life Stolen Per Hit', '+(10-20) To Life'] },
        list: [
          { material: 5, recipe: { equipment: { type: 'Magic', name: ['Helm', 'Casque', 'Armet'], img: 'helms/helm.png' }, rune: 8 }, effects: ['5-10% Deadly Strike'] },
          { material: 16, recipe: { equipment: { type: 'Magic', name: ['Light Plated Boots', 'Battle Boots', 'Mirrored Boots'], img: 'boots/light_plate_boots.png' }, rune: 5 }, effects: ['Replenish Life + (5-10)'] },
          { material: 17, recipe: { equipment: { type: 'Magic', name: ['Heavy Gloves', 'Sharkskin Gloves', 'Vampirebone Gloves'], img: 'gloves/heavy_gloves.png' }, rune: 4 }, effects: ['Crushing Blow (5-10)%'], hot: true },
          { material: 18, recipe: { equipment: { type: 'Magic', name: ['Belt', 'Mesh Belt', 'Mithril Coil'], img: 'belts/belt.png' }, rune: 7 }, effects: ['Open Wounds (5-10)%'] },
          { material: 4, recipe: { equipment: { type: 'Magic', name: ['Spiked Shield', 'Barbed Shield', 'Blade Barrier'], img: 'shields/spiked_shield.png' }, rune: 6 }, effects: ['Attacker Takes Damage of (4-7)'] },
          { material: 3, recipe: { equipment: { type: 'Magic', name: ['Plate Mail', 'Templar Coat', 'Hellforge Plate'], img: 'armor/plate_mail.png' }, rune: 10 }, effects: ['+ (1-3) Life Per Demon Kill'] },
          { material: 19, recipe: { equipment: { type: 'Magic', name: ['Amulet'], img: 'amulets/amulet2.png' }, rune: 11 }, effects: ['5-10% Faster Run/Walk'], hot: true },
          { material: 20, recipe: { equipment: { type: 'Magic', name: ['Ring'], img: 'rings/ring2.png' }, rune: 12 }, effects: ['+ (1-5) To Strength'], hot: true },
          { material: 21, recipe: { equipment: { type: 'Magic', name: ['Axe'], img: 'weapons/axe.png' }, rune: 9 }, effects: ['+ (35-60%) Enhanced Damage'] }
        ]
      },
      {
        id: 'caster',
        name: 'Caster',
        icon: 'auto_fix_high',
        color: 'purple-9',
        common: { recipe: [{ name: 'Perfect<br>Amethyst', img: 'gems/perfect_amethyst.png' }, { name: 'Jewel', img: 'jewels/jewel2.png' }], effects: ['Regenerate Mana (4-10)%', '+ (10-20) To Mana'] },
        list: [
          { material: 5, recipe: { equipment: { type: 'Magic', name: ['Mask', 'Death Mask', 'Demonhead Mask'], img: 'helms/mask.png' }, rune: 4 }, effects: ['(1-4)% Mana Stolen Per Hit'] },
          { material: 16, recipe: { equipment: { type: 'Magic', name: ['Boots', 'Demonhide Boots', 'Wyrmhide Boots'], img: 'boots/boots.png' }, rune: 10 }, effects: ['Increase Maximum Mana (2-5)%'] },
          { material: 17, recipe: { equipment: { type: 'Magic', name: ['Leather Gloves', 'Demonhide Gloves', 'Bramble Mitts'], img: 'gloves/leather_gloves.png' }, rune: 9 }, effects: ['+ (1-3) Mana Per Kill'] },
          { material: 18, recipe: { equipment: { type: 'Magic', name: ['Light Belt', 'Sharkskin Belt', 'Vampirefang Belt'], img: 'belts/light_belt.png' }, rune: 6 }, effects: ['5-10% Faster Cast Rate'], hot: true },
          { material: 4, recipe: { equipment: { type: 'Magic', name: ['Small Shield', 'Round Shield', 'Luna'], img: 'shields/small_shield.png' }, rune: 5 }, effects: ['+ (5-10)% Increased Chance Of Blocking'] },
          { material: 3, recipe: { equipment: { type: 'Magic', name: ['Light Plate', 'Mage Plate', 'Archon Plate'], img: 'armor/light_plate.png' }, rune: 7 }, effects: ['+ (1-3) Mana Per Kill'] },
          { material: 19, recipe: { equipment: { type: 'Magic', name: ['Amulet'], img: 'amulets/amulet1.png' }, rune: 8 }, effects: ['(5-10)% Faster Cast Rate'], hot: true },
          { material: 20, recipe: { equipment: { type: 'Magic', name: ['Ring'], img: 'rings/ring1.png' }, rune: 11 }, effects: ['+ (1-5) To Energy'], hot: true },
          { material: 21, recipe: { equipment: { type: 'Magic', name: ['Rod'], img: 'weapons/grim_wand.png' }, rune: 3 }, effects: ['Increase Maximum Mana (1-5)%'] }
        ]
      },
      {
        id: 'safety',
        name: 'Safety',
        icon: 'health_and_safety',
        color: 'green-9',
        common: { recipe: [{ name: 'Perfect<br>Emerald', img: 'gems/perfect_emerald.png' }, { name: 'Jewel', img: 'jewels/jewel4.png' }], effects: ['Magic Damage Reduced By (1-2)', 'Damage Reduced By (1-4)'] },
        list: [
          { material: 5, recipe: { equipment: { type: 'Magic', name: ['Crown', 'Grand Crown', 'Corona'], img: 'helms/crown.png' }, rune: 6 }, effects: ['+ (10-30)% Enhanced Defense', 'Lightning Resist + (5-10)%'] },
          { material: 16, recipe: { equipment: { type: 'Magic', name: ['Greaves', 'War Boots', 'Myrmidon Boots'], img: 'boots/greaves.png' }, rune: 9 }, effects: ['+ (10-30)% Enhanced Defense', 'Fire Resist + (5-10)%'] },
          { material: 17, recipe: { equipment: { type: 'Magic', name: ['Gauntlets', 'War Gauntlets', 'Ogre Gauntlets'], img: 'gloves/gauntlets.png' }, rune: 8 }, effects: ['+ (10-30)% Enhanced Defense', 'Cold Resist + (5-10)%'] },
          { material: 18, recipe: { equipment: { type: 'Magic', name: ['Sash', 'Demonhide Sash', 'Spiderweb Sash'], img: 'belts/sash.png' }, rune: 7 }, effects: ['+ (10-30)% Enhanced Defense', 'Poison Resist +(5-10)%'] },
          { material: 4, recipe: { equipment: { type: 'Magic', name: ['Kite Shield', 'Dragon Shield', 'Monarch'], img: 'shields/kite_shield.png' }, rune: 4 }, effects: ['+ (10-30)% Enhanced Defense', 'Magic Resistance +(5-10)%'] },
          { material: 3, recipe: { equipment: { type: 'Magic', name: ['Breast Plate', 'Cuirass', 'Great Hauberk'], img: 'armor/breast_plate.png' }, rune: 5 }, effects: ['+ (10-30)% Enhanced Defense', 'Half Freeze Duration'] },
          { material: 19, recipe: { equipment: { type: 'Magic', name: ['Amulet'], img: 'amulets/amulet3.png' }, rune: 10 }, effects: ['+ (1-10)% Increased Chance Of Blocking'] },
          { material: 20, recipe: { equipment: { type: 'Magic', name: ['Ring'], img: 'rings/ring4.png' }, rune: 11 }, effects: ['+ (1-5) To Vitality'] },
          { material: 21, recipe: { equipment: { type: 'Magic', name: ['Spear or Javelin'], img: 'weapons/razortine.png' }, rune: 12 }, effects: ['+ (5-10%) Enhanced Defense'] }
        ]
      }
    ]
  }
}