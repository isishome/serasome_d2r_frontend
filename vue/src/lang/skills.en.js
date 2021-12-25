export default {
  "en": {
    skillsData: {
      amazon: [
        {
          id: "js",
          name: 'Javelin And Spear',
          src: 'back.jpg',
          skills: [
            {
              id: 'jab',
              top: '3.3',
              left: '13.2',
              tooltip: 'left',
              name: 'Jab',
              desc: ['Attacks With A Series Of Rapid Thrusts', 'Using A Javelin Or Spear Class Weapon'],
              level: '1',
              add: [
                { text: 'Multiple Hits' }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                {
                  text: 'Damage: +{0}%', value: [0, -15, -12, -9, -6, -3, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42
                  ]
                },
                { text: 'Mana Cost: {0}', value: [0, 2, 2.2, 2.5, 2.7, 3, 3.2, 3.5, 3.7, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7] }
              ]
            },
            {
              id: 'impale',
              top: '35.7',
              left: '13.2',
              tooltip: 'left',
              required: [
                { treeId: 'js', skillId: 'jab' }
              ],
              name: 'Impale',
              desc: ['Increases Attack Damage But Rapidly Degrades The Weapon'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [0, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575] },
                { text: 'Damage: +{0}%', value: [0, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775] },
                { text: 'Chance Of Losing Durability: {0}%', value: [0, 46, 42, 40, 37, 35, 34, 33, 32, 31, 30, 29, 29, 28, 27, 27, 26, 26, 26, 26, 25] }
              ]
            },
            {
              id: 'fend',
              top: '68.4',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'js', skillId: 'impale' }],
              name: 'Fend',
              desc: ['Attacks All Adjacent Targets'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230] },
                { text: 'Damage: +{0}%', value: [0, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260] }
              ]
            },
            {
              id: 'powerstrike',
              top: '19.7',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningbolt' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'jab' }],
              name: 'Power Strike',
              desc: ['Adds Lightning Damage To Attacks With', 'Javelin And Spear Class Weapons'],
              level: '6',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 32, 44, 56, 68, 80, 92, 104, 116, 128, 140, 152, 164, 176, 188, 200, 212, 224, 236, 248] },
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 16], [1, 34], [1, 52], [1, 70], [1, 88], [1, 106], [1, 124], [1, 142], [1, 178], [1, 214], [1, 250], [1, 286], [1, 322], [1, 358], [1, 394], [1, 430], [1, 484], [1, 538], [1, 592], [1, 646]] },
                { text: 'Mana Cost: {0}', value: [0, 2, 2.2, 2.5, 2.7, 3, 3.2, 3.5, 3.7, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'chargedstrike',
              top: '52.2',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningbolt' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'powerstrike' }, { treeId: 'js', skillId: 'lightningbolt' }],
              name: 'Charged Strike',
              desc: ['Adds Lightning Damage To Javelin And Spear Class Weapons', 'And Releases Charged Bolts Upon Impact'],
              level: '18',
              stat: [
                { text: 'Releases {0} Charged Bolts', value: [0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7] },
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 30], [1, 42], [1, 54], [1, 66], [1, 78], [1, 90], [1, 102], [1, 114], [1, 130], [1, 146], [1, 162], [1, 178], [1, 194], [1, 210], [1, 226], [1, 242], [1, 262], [1, 282], [1, 302], [1, 322]] },
                { text: 'Mana Cost: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'lightningstrike',
              top: '84.4',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningbolt' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'chargedstrike' }],
              name: 'Lightning Strike',
              desc: ['Adds Lightning Damage To Javelin And Spear Class Weapons', 'And Releases Chain Lightning Upon Impact'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                {
                  text: '{0} Hits', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
                  ]
                },
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 25], [1, 35], [1, 45], [1, 55], [1, 65], [1, 75], [1, 85], [1, 95], [1, 110], [1, 125], [1, 140], [1, 155], [1, 170], [1, 185], [1, 200], [1, 215], [1, 235], [1, 255], [1, 275], [1, 295]] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [1], value: [8], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [8], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [1], value: [8], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [1], value: [8], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'poisonjavelin',
              top: '19.7',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'plaguejavelin' }
              ],
              name: 'Poison Javelin',
              desc: ['Magically Enhances Your Javelin', 'To Leave A Trail Of Poison Clouds'],
              level: '6',
              stat: [
                { text: 'Poison Damage: {0}-{1}', value: [0, [25, 37], [46, 62], [75, 93], [109, 131], [150, 175], [196, 225], [250, 281], [309, 343], [412, 459], [528, 589], [656, 732], [796, 890], [950, 1062], [1115, 1248], [1293, 1448], [1484, 1662], [1750, 1953], [2034, 2264], [2337, 2595], [2659, 2946]] },
                { text: 'Over {0} Seconds', value: [0, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46] },
                { text: 'Mana Cost: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'plaguejavelin', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'lightningbolt',
              top: '35.8',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'poisonjavelin' }],
              name: 'Lightning Bolt',
              desc: ['Magically Converts Your Javelin Into A Bolt Of Lightning'],
              level: '12',
              add: [
                { text: '{0}% Weapon Damage', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] },
                { text: 'Converts {0}% Physical Damage To Elemental Damage', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }
              ],
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 40], [1, 52], [1, 64], [1, 76], [1, 88], [1, 100], [1, 112], [1, 124], [1, 142], [1, 160], [1, 178], [1, 196], [1, 214], [1, 232], [1, 250], [1, 268], [1, 296], [1, 324], [1, 352], [1, 380]] },
                { text: 'Mana Cost: {0}', value: [0, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7, 10, 10.2, 10.5, 10.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [0], value: [3], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [0], value: [3], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [0], value: [3], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [0], value: [3], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'plaguejavelin',
              top: '52.2',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'poisonjavelin' }
              ],
              required: [{ treeId: 'js', skillId: 'lightningbolt' }],
              name: 'Plague Javelin',
              desc: ['Magically Enhances Your Javelin To Release', 'Expanding Clouds Of Poison Upon Impact'],
              level: '18',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 120, 129, 138, 147, 156, 165, 174, 183, 192, 201] },
                { text: 'Poison Damage: {0}-{1}', value: [0, [23, 37], [42, 58], [65, 83], [91, 111], [122, 143], [156, 179], [194, 219], [235, 262], [310, 339], [391, 422], [481, 514], [578, 612], [682, 718], [794, 833], [913, 953], [1040, 1082], [1233, 1277], [1439, 1485], [1657, 1705], [1888, 1937]] },
                { text: 'Over {0} Seconds', value: [0, 3, 3.4, 3.8, 4.2, 4.6, 5, 5.4, 5.8, 6.2, 6.6, 7, 7.4, 7.8, 8.2, 8.6, 9, 9.4, 9.8, 10.2, 10.6] },
                { text: 'Mana Cost: {0}', value: [0, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 13, 13, 14, 14.5, 15, 15.5, 16, 16.5] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'poisonjavelin', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'lightningfury',
              top: '84.4',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningbolt' }
              ],
              required: [{ treeId: 'js', skillId: 'plaguejavelin' }],
              name: 'Lightning Fury',
              desc: ['Changes A Thrown Javelin Into A Powerful', 'Bolt Of Lightning That Splits On Impact'],
              level: '30',
              stat: [
                { text: 'Releases {0} Bolts', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 40], [1, 60], [1, 80], [1, 100], [1, 120], [1, 140], [1, 160], [1, 180], [1, 210], [1, 240], [1, 270], [1, 300], [1, 330], [1, 360], [1, 390], [1, 420], [1, 460], [1, 500], [1, 540], [1, 580]] },
                { text: 'Mana Cost: {0}', value: [0, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [1], value: [1], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [1], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [1], value: [1], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [1], value: [1], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            }
          ]
        },
        {
          id: "pm",
          name: 'Passive And Magic',
          src: 'back.jpg',
          skills: [
            {
              id: 'innersight',
              top: '3.4',
              left: '13.2',
              tooltip: 'left',
              name: 'Inner Sight',
              desc: ['Illuminates Nearby Enemies', 'Making Them Easier To Hit', 'For You And Your Party'],
              level: '1',
              add: [
                { text: 'Radius: {0} Yards', value: [13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3] },
                { text: 'Mana Cost: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                {
                  text: 'Enemy Defense: -{0}', value: [0, 40, 65, 90, 115, 140, 165, 190, 215, 260, 305, 350, 395, 440, 485, 530, 575, 635, 695, 755, 815
                  ]
                },
                { text: 'Duration: {0} Seconds', value: [0, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84] }
              ]
            },
            {
              id: 'slowmissiles',
              top: '35.6',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'pm', skillId: 'innersight' }],
              name: 'Slow Missiles',
              desc: ['Illuminates Nearby Enemies And Slow Their Ranged Attacks'],
              level: '12',
              add: [
                { text: 'Ranged Attacks Slowed To {0}%', value: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33] },
                { text: 'Radius: {0} Yards', value: [13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3] },
                { text: 'Mana Cost: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126] }
              ]
            },
            {
              id: 'decoy',
              top: '68.3',
              left: '13.2',
              tooltip: 'left',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'slowmissiles' }],
              name: 'Decoy',
              desc: ['Creates A Duplicate Of Yourself', 'That Draws Fire From Enemies'],
              level: '24',
              stat: [
                { text: 'Life: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
                { text: 'Duration: {0} Seconds', value: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105] },
                { text: 'Mana Cost: {0}', value: [0, 19, 18, 17, 16, 16, 15, 14, 13, 13, 12, 11.5, 10.7, 10, 9.2, 8.5, 7.7, 7, 6.2, 5.5, 4.7] }
              ],
            },
            {
              id: 'valkyrie',
              top: '84.1',
              left: '13.2',
              tooltip: 'left',
              affected: [
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              required: [{ treeId: 'pm', skillId: 'slowmissiles' }, { treeId: 'pm', skillId: 'evade' }],
              name: 'Valkyrie',
              desc: ['Summons A Powerful Valkyrie Ally'],
              level: '30',
              stat: [
                { text: 'Life: {0}', value: [0, 440, 514, 587, 660, 734, 807, 88, 5, 95, 4, 103, 2, 110, 0, 117, 7, 125, 5, 132, 4, 140, 2, 147, 0, 154, 7, 161, 5, 169, 4, 176, 2, 184, 0] },
                { text: 'Attack Rating: +{0}%', value: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800] },
                { text: 'Mana Cost: {0}', value: [0, 25, 26, 27, 28, 29, 30, 31, 32, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] }
              ],
              bonus: [
                { treeId: 'pm', skillId: 'decoy', statIdx: [0], value: [20], type: ['rate'], text: '{n}: +{0}% Life Per Level' },
                { treeId: 'pm', skillId: 'penetrate', statIdx: [1], value: [40], type: ['rate'], text: '{n}: +{0}% Attack Rating Per Level' },
                { treeId: 'pm', skillId: 'criticalstrike' },
                { treeId: 'pm', skillId: 'dodge' },
                { treeId: 'pm', skillId: 'avoid' },
                { treeId: 'pm', skillId: 'evade' }
              ]
            },
            {
              id: 'dodge',
              top: '19.6',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              name: 'Dodge',
              desc: ['Passive - You Have A Chance To Dodge', 'A Melee attack When Attacking', 'Or Standing Still'],
              level: '6',
              stat: [
                { text: '{0}% Chance', value: [0, 18, 24, 29, 34, 37, 40, 42, 44, 46, 47, 49, 50, 51, 52, 52, 54, 54, 55, 55, 56] }
              ]
            },
            {
              id: 'avoid',
              top: '35.6',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'dodge' }],
              name: 'Avoid',
              desc: ['Passive - You Have A Chance To Dodge Enemy Missiles', 'When Attacking Or Standing Still'],
              level: '12',
              stat: [
                { text: '{0}% Chance', value: [0, 24, 31, 36, 41, 45, 48, 50, 52, 54, 55, 57, 58, 60, 61, 61, 63, 63, 64, 64, 65] }
              ]
            },
            {
              id: 'evade',
              top: '68.3',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'avoid' }],
              name: 'Evade',
              desc: ['Passive - You Have A Chance To Dodge', 'A Melee Or Missile Attack', 'When Walking Or Running'],
              level: '24',
              stat: [
                { text: '{0}% Chance', value: [0, 18, 24, 29, 34, 37, 40, 42, 44, 46, 47, 49, 50, 51, 52, 52, 54, 54, 55, 55, 56] }
              ]
            },
            {
              id: 'criticalstrike',
              top: '3.4',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              name: 'Critical Strike',
              desc: ['Passive - Your Attacks Have A Chance To Do Double Damage'],
              level: '1',
              stat: [
                { text: '{0}% Chance', value: [0, 16, 25, 32, 38, 42, 46, 49, 51, 54, 56, 58, 59, 61, 62, 63, 65, 65, 66, 67, 68] }
              ]
            },
            {
              id: 'penetrate',
              top: '52',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'criticalstrike' }],
              name: 'Penetrate',
              desc: ['Passive - Increases Your Attack Rating'],
              level: '18',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225] }
              ]
            },
            {
              id: 'pierce',
              top: '84.1',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'pm', skillId: 'penetrate' }],
              name: 'Pierce',
              desc: ['Passive - Your Missiles Have A Chance To', 'Pass Through Enemies That They Hit'],
              level: '30',
              stat: [
                { text: '{0}% Chance', value: [0, 23, 34, 42, 49, 55, 59, 63, 65, 69, 71, 73, 75, 77, 79, 80, 82, 82, 83, 84, 85] }
              ]
            }
          ]
        },
        {
          id: "bc",
          name: 'Bow And Crossbow',
          src: 'back.jpg',
          skills: [
            {
              id: 'coldarrow',
              top: '19.8',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'bc', skillId: 'icearrow' },
                { treeId: 'bc', skillId: 'freezingarrow' }
              ],
              name: 'Cold Arrow',
              desc: ['Magically Enhances Your Arrows Or Bolts', 'By Adding Cold Damage And A Slowing Effect', 'Cold Arrows Only Do Half Of Their Regular Damage'],
              level: '6',
              stat: [
                { text: 'Converts {0}% Physical Damage To Elemental Damage', value: [0, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41] },
                { text: 'Attack Rating: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                { text: 'Cold Damage: {0}-{1}', value: [0, [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [22, 23], [24, 25], [27, 28], [29, 30], [32, 33], [34, 35], [37, 38], [41, 42], [45, 47], [49, 51], [53, 56]] },
                { text: 'Cold Length: {0} Seconds', value: [0, 4, 5.2, 6.4, 7.6, 8.8, 10, 11.2, 12.4, 13.6, 14.8, 16, 17.2, 18.4, 19.6, 20.8, 22, 23.2, 24.4, 25.6, 26.8] },
                { text: 'Mana Cost: {0}', value: [0, 3.5, 3.6, 3.7, 3.8, 4, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 5, 5.1, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'icearrow', statIdx: [2], value: [12], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'icearrow',
              top: '52.4',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'bc', skillId: 'coldarrow' },
                { treeId: 'bc', skillId: 'freezingarrow' }
              ],
              required: [{ treeId: 'bc', skillId: 'coldarrow' }],
              name: 'Ice Arrow',
              desc: ['Magically Enhances Your Arrow Or Bolt', 'To Freeze Your Enemies'],
              level: '18',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: 'Cold Damage: {0}-{1}', value: [0, [6, 10], [12, 16], [18, 22], [24, 28], [30, 34], [36, 40], [42, 46], [48, 52], [60, 65], [72, 78], [84, 91], [96, 104], [108, 117], [120, 130], [132, 143], [144, 156], [162, 175], [180, 194], [198, 213], [216, 232]] },
                { text: 'Freezes For {0} Seconds', value: [0, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8] },
                { text: 'Mana Cost: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'coldarrow', statIdx: [1], value: [8], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'bc', skillId: 'freezingarrow', statIdx: [2], value: [5], type: ['rate'], text: '{n}: +{0}% Freeze Length Per Level' }
              ]
            },
            {
              id: 'freezingarrow',
              top: '84.6',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'bc', skillId: 'coldarrow' },
                { treeId: 'bc', skillId: 'icearrow' }
              ],
              required: [{ treeId: 'bc', skillId: 'icearrow' }],
              name: 'Freezing Arrow',
              desc: ['Magically Enhances An Arrow Or Bolt', 'To Freeze Entire Groups Of Monsters'],
              level: '30',
              add: [
                { text: 'Radius: {0} Yards', value: [3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 40, 49, 58, 67, 76, 85, 94, 103, 112, 121, 130, 139, 148, 157, 166, 175, 184, 193, 202, 211] },
                { text: 'Cold Damage: {0}-{1}', value: [0, [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100], [100, 110], [110, 120], [125, 135], [140, 150], [155, 165], [170, 180], [185, 195], [200, 210], [215, 225], [230, 240], [250, 260], [270, 280], [290, 300], [310, 320]] },
                { text: 'Freezes For {0} Seconds', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: 'Mana Cost: {0}', value: [0, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'coldarrow', statIdx: [1], value: [12], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'bc', skillId: 'icearrow', statIdx: [2], value: [5], type: ['rate'], text: '{n}: +{0}% Freeze Length Per Level' }
              ]
            },
            {
              id: 'magicarrow',
              top: '3.4',
              left: '42.7',
              tooltip: 'middle',
              name: 'Magic Arrow',
              desc: ['Creates A Magical Arrow Or Bolt', 'That Does Extra Damage'],
              level: '1',
              stat: [
                { text: 'Converts {0}% Physical Damage To Magic Damage', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                { text: 'Attack Rating: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                { text: 'Damage: +{0}', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                { text: 'Mana Cost: {0}', value: [0, 1.5, 1.3, 1.2, 1.1, 1.0, 0.8, 0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0] }
              ]
            },
            {
              id: 'multipleshot',
              top: '19.8',
              left: '42.7',
              tooltip: 'middle',
              required: [{ treeId: 'bc', skillId: 'magicarrow' }],
              name: 'Multiple Shot',
              desc: ['Magically Splits One Arrow', 'Or Bolt Into Many'],
              level: '6',
              add: [
                { text: '{0}% Weapon Damage', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] }
              ],
              stat: [
                { text: '{0} Arrows', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
                { text: 'Mana Cost: {0}', value: [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] }
              ]
            },
            {
              id: 'guidedarrow',
              top: '52.3',
              left: '42.7',
              tooltip: 'middle',
              required: [{ treeId: 'bc', skillId: 'coldarrow' }, { treeId: 'bc', skillId: 'magicarrow' }],
              name: 'Guided Arrow',
              desc: ['Enhances Your Arrows And Bolts', 'To Track Your Target', 'Or Seek One Of Its Own'],
              level: '18',
              add: [
                { text: 'Always Hits' }
              ],
              stat: [
                { text: 'Damage: +{0}%', value: [0, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95] },
                { text: 'Mana Cost: {0}', value: [0, 8, 7.7, 7.5, 7.2, 7, 6.7, 6.5, 6.2, 6, 5.7, 5.5, 5.2, 5, 4.7, 4.5, 4.2, 4, 3.7, 3.5, 3.2] }
              ]
            },
            {
              id: 'strafe',
              top: '68.6',
              left: '42.7',
              tooltip: 'middle',
              required: [{ treeId: 'bc', skillId: 'guidedarrow' }],
              name: 'Strafe',
              desc: ['Magically Splits One Arrow Into Several', 'That Target Multiple Nearby Enemies'],
              level: '24',
              add: [
                { text: '{0}% Weapon Damage', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] },
                { text: 'Mana Cost: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: 'Attacks Up To {0} Targets', value: [0, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
                { text: 'Damage: +{0}%', value: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] }
              ]
            },
            {
              id: 'firearrow',
              top: '3.4',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'bc', skillId: 'explodingarrow' },
                { treeId: 'bc', skillId: 'immolationarrow' }
              ],
              name: 'Fire Arrow',
              desc: ['Magically Enhances Your Arrows', 'Or Bolts With Fire'],
              level: '1',
              stat: [
                { text: 'Converts {0}% Physical Damage To Elemental Damage', value: [0, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41] },
                { text: 'Attack Rating: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [1, 4], [3, 6], [5, 8], [7, 10], [9, 12], [11, 14], [13, 16], [15, 18], [18, 21], [21, 24], [24, 27], [27, 30], [30, 33], [33, 36], [36, 39], [39, 42], [45, 49], [51, 56], [57, 63], [63, 70]] },
                { text: 'Mana Cost: {0}', value: [0, 3, 3.1, 3.2, 3.3, 3.5, 3.6, 3.7, 3.8, 4, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 5, 5.1, 5.2, 5.3] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'explodingarrow', statIdx: [2], value: [12], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'explodingarrow',
              top: '35.9',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'bc', skillId: 'firearrow' },
                { treeId: 'bc', skillId: 'immolationarrow' }
              ],
              required: [{ treeId: 'bc', skillId: 'multipleshot' }, { treeId: 'bc', skillId: 'firearrow' }],
              name: 'Exploding Arrow',
              desc: ['Enchants An Arrow Or Bolt That Explodes On', 'Contact, Damaging All Nearby Enemies'],
              level: '12',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [2, 6], [7, 11], [12, 16], [17, 21], [22, 26], [27, 31], [32, 36], [37, 41], [44, 49], [51, 57], [58, 65], [65, 73], [72, 81], [79, 89], [86, 97], [93, 105], [102, 116], [111, 127], [120, 138], [129, 149]] },
                { text: 'Mana Cost: {0}', value: [0, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'firearrow', statIdx: [1], value: [12], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'immolationarrow',
              top: '68.7',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'bc', skillId: 'explodingarrow' }],
              name: 'Immolation Arrow',
              desc: ['Enhances Arrows Or Bolts To', 'Cause Severe Fire Damage And Creates A Pyre Upon Impact'],
              level: '24',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 120, 129, 138, 147, 156, 165, 174, 183, 192, 201] },
                { text: 'Fire Explosion Damage: {0}-{1}', value: [0, [12, 23], [24, 35], [36, 47], [48, 59], [60, 71], [72, 83], [84, 95], [96, 107], [119, 130], [142, 153], [165, 176], [188, 199], [211, 222], [234, 245], [257, 268], [280, 291], [314, 325], [348, 359], [382, 393], [416, 427]] },
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [8, 10], [14, 16], [19, 22], [26, 29], [32, 35], [38, 41], [44, 46], [51, 53], [57, 59], [63, 65], [69, 71], [76, 78], [82, 84], [87, 90], [93, 96], [100, 103], [106, 108], [107, 110], [112, 114], [118, 120]] },
                { text: 'Fire Duration: {0} Seconds', value: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: 'Mana Cost: {0}', value: [0, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'firearrow', statIdx: [2], value: [5], type: ['rate'], text: '{n}: +{0}% Average Fire Damage Per Second Per Level' },
                { treeId: 'bc', skillId: 'explodingarrow', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            }
          ]
        }
      ],
      assassin: [
        {
          id: "ma",
          name: 'Martial Arts',
          src: 'back.jpg',
          skills: [
            {
              id: 'fistsoffire',
              top: '19.7',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'ma', skillId: 'phoenixstrike' }],
              name: 'Fists Of Fire',
              desc: ['Charge-up Skill', 'ㅤ', 'Consecutive Hits Add Fire Damage', 'To Finishing Moves', 'Can Only Be Used With Claw Class Weapons', 'Must Use A Dragon Finishing Move Or', 'Normal Attack To Release Charges'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148] },
                { text: 'Charge 1 - Fire Damage: {0}-{1}', value: [0, [6, 10], [11, 15], [16, 20], [21, 25], [26, 30], [31, 35], [36, 40], [41, 45], [51, 56], [61, 67], [71, 78], [81, 89], [91, 100], [101, 111], [111, 122], [121, 133], [141, 155], [161, 177], [181, 199], [201, 221]] },
                { text: 'Charge 2 - Fire Damage Radius: {0} Yards', value: [0, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6] },
                { text: 'Charge 3 - Average Fire Damage: {0}-{1} Per Second', value: [0, [9, 15], [17, 23], [25, 31], [32, 39], [40, 46], [48, 54], [56, 62], [64, 70], [79, 85], [95, 101], [110, 117], [126, 132], [142, 148], [157, 164], [173, 179], [189, 195], [214, 221], [239, 248], [264, 275], [289, 301]] }
              ],
              bonus: [
                { treeId: 'ma', skillId: 'phoenixstrike', statIdx: [1, 3], value: [12, 6], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'clawsofthunder',
              top: '52.2',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'ma', skillId: 'phoenixstrike' }],
              required: [{ treeId: 'ma', skillId: 'fistsoffire' }],
              name: 'Claws Of Thunder',
              desc: ['Charge-up Skill', 'ㅤ', 'Consecutive Hits Add Lightning Damage', 'To Finishing Moves', 'Can Only Be Used With Claw Class Weapons', 'Must Use A Dragon Finishing Move Or', 'Normal Attack To Release Charges'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148] },
                { text: 'Charge 1 - Lightning Damage: {0}-{1}', value: [0, [1, 80], [1, 100], [1, 120], [1, 140], [1, 160], [1, 180], [1, 200], [1, 220], [1, 260], [1, 300], [1, 340], [1, 380], [1, 420], [1, 460], [1, 500], [1, 540], [1, 600], [1, 660], [1, 720], [1, 780]] },
                { text: 'Charge 2 - Nova Damage: {0}-{1}', value: [0, [1, 30], [1, 45], [1, 60], [1, 75], [1, 90], [1, 105], [1, 120], [1, 135], [1, 160], [1, 185], [1, 210], [1, 235], [1, 260], [1, 285], [1, 310], [1, 335], [1, 370], [1, 405], [1, 440], [1, 475]] },
                { text: 'Charge 3 - Charged Bolt Damage: {0}-{1}', value: [0, [1, 40], [1, 60], [1, 80], [1, 100], [1, 120], [1, 140], [1, 160], [1, 180], [1, 220], [1, 260], [1, 300], [1, 340], [1, 380], [1, 420], [1, 460], [1, 500], [1, 560], [1, 620], [1, 680], [1, 740]] }
              ],
              bonus: [
                { treeId: 'ma', skillId: 'phoenixstrike', statIdx: [1, 2, 3], value: [8, 8, 8], type: ['rate', 'rate', 'rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'bladesofice',
              top: '68.4',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'ma', skillId: 'phoenixstrike' }],
              required: [{ treeId: 'ma', skillId: 'clawsofthunder' }],
              name: 'Blades Of Ice',
              desc: ['Charge-up Skill', 'ㅤ', 'Consecutive Hits Add Cold Damage', 'To Finishing Moves', 'Can Only Be Used With Claw Class Weapons', 'Must Use A Dragon Finishing Move Or', 'Normal Attack To Release Charges'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148] },
                { text: 'Charge 1 - Cold Damage: {0}-{1}', value: [0, [15, 35], [23, 43], [31, 51], [39, 59], [47, 67], [55, 75], [63, 83], [71, 91], [81, 101], [91, 111], [101, 121], [111, 131], [121, 141], [131, 151], [141, 161], [151, 171], [171, 193], [191, 215], [211, 237], [231, 259]] },
                { text: 'Charge 2 - Cold Damage Radius: {0} Yards', value: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: 'Charge 3 - Freezes For {0} Seconds', value: [0, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 11.6] }
              ],
              bonus: [
                { treeId: 'ma', skillId: 'phoenixstrike', statIdx: [1], value: [8], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'tigerstrike',
              top: '3.3',
              left: '42.9',
              tooltip: 'middle',
              name: 'Tiger Strike',
              desc: ['Charge-up Skill', 'ㅤ', 'Consecutive Hits Add Damage Bonuses', 'To Finishing Moves', 'Must Use A Dragon Finishing Move Or', 'Normal Attack To Release Charges'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148] },
                { text: 'Charge 1 - Damage: +{0}%', value: [0, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480] },
                { text: 'Charge 2 - Damage: +{0}%', value: [0, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960] },
                { text: 'Charge 3 - Damage: +{0}%', value: [0, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200, 1260, 1320, 1380, 1440] }
              ]
            },
            {
              id: 'cobrastrike',
              top: '35.7',
              left: '42.9',
              tooltip: 'middle',
              required: [{ treeId: 'ma', skillId: 'tigerstrike' }],
              name: 'Cobra Strike',
              desc: ['Charge-up Skill', 'ㅤ', 'Consecutive Hits Add Mana Stealing', 'To Finishing Moves', 'Must Use A Dragon Finishing Move Or', 'Normal Attack To Release Charges'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148] },
                { text: 'Charge 1 - Life Steal: +{0}%', value: [0, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135] },
                { text: 'Charge 2 - Life And Mana Steal: +{0}%', value: [0, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135] },
                { text: 'Charge 3 - Life And Mana Steal: +{0}%', value: [0, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270] }
              ]
            },
            {
              id: 'phoenixstrike',
              top: '84.4',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'ma', skillId: 'fistsoffire' }, { treeId: 'ma', skillId: 'clawsofthunder' }, { treeId: 'ma', skillId: 'bladesofice' }],
              required: [{ treeId: 'ma', skillId: 'cobrastrike' }],
              name: 'Phoenix Strike',
              desc: ['Charge-up Skill', 'ㅤ', 'Adds Elemental Novas To Finishing Moves', 'Must Use A Dragon Finishing Move Or', 'Normal Attack To Release Charges'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148] },
                { text: 'Charge 1 - Meteor Damage: {0}-{1}', value: [0, [20, 40], [30, 50], [40, 60], [50, 70], [60, 80], [70, 90], [80, 100], [90, 110], [109, 131], [128, 143], [147, 173], [166, 194], [185, 215], [204, 236], [223, 257], [242, 278], [271, 311], [300, 344], [329, 377], [358, 410]] },
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [14, 22], [24, 34], [35, 47], [49, 57], [60, 68], [71, 82], [84, 93], [95, 104], [119, 128], [142, 150], [166, 175], [188, 199], [213, 221], [236, 246], [259, 267], [284, 292], [320, 332], [358, 371], [396, 411], [434, 451]] },
                { text: 'Charge 2 - Chain Lightning Damage: {0}-{1}', value: [0, [1, 40], [1, 60], [1, 80], [1, 101], [1, 120], [1, 140], [1, 160], [1, 180], [1, 220], [1, 260], [1, 300], [1, 340], [1, 380], [1, 420], [1, 460], [1, 501], [1, 560], [1, 620], [1, 680], [1, 740]] },
                { text: 'Charge 3 - Chaos Ice Bolt Damage: {0}-{1}', value: [0, [16, 32], [20, 36], [24, 40], [28, 44], [32, 48], [36, 52], [40, 56], [44, 60], [52, 68], [60, 76], [68, 84], [76, 92], [84, 100], [92, 108], [100, 116], [108, 124], [120, 137], [132, 150], [144, 163], [156, 176]] }
              ],
              bonus: [
                { treeId: 'ma', skillId: 'fistsoffire', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'ma', skillId: 'fistsoffire', statIdx: [2], value: [6], type: ['rate'], text: '{n}: +{0}% Average Fire Damage Per Second Per Level' },
                { treeId: 'ma', skillId: 'clawsofthunder', statIdx: [3], value: [13], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ma', skillId: 'bladesofice', statIdx: [4], value: [10], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'dragontalon',
              top: '3.3',
              left: '72.3',
              tooltip: 'right',
              name: 'Dragon Talon',
              desc: ['Finishing Move', 'ㅤ', 'Kick Your Enemies Out Of Your Way', 'Adds Charged-up Bonuses To The Kick'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }
              ],
              stat: [
                { text: '{0} Kick', value: [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4] },
                { text: 'Attack Rating: +{0}%', value: [0, 20, 55, 90, 125, 160, 195, 230, 265, 300, 335, 370, 405, 440, 475, 510, 545, 580, 615, 650, 685] },
                { text: 'Kick Damage: +{0}%', value: [0, 5, 12, 19, 26, 33, 40, 47, 54, 61, 68, 75, 82, 89, 96, 103, 110, 117, 124, 131, 138] }
              ]
            },
            {
              id: 'dragonclaw',
              top: '19.7',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'ma', skillId: 'dragontalon' }],
              name: 'Dragon Claw',
              desc: ['Finishing Move', 'ㅤ', 'Slice And Dice Your Enemies', 'With Your Dual Claw Class Weapons', 'Adds Charged-up Bonuses To Both Claw Attacks'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 40, 65, 90, 115, 140, 165, 190, 215, 240, 265, 290, 315, 340, 365, 390, 415, 440, 465, 490, 515] },
                { text: 'Damage: +{0}%', value: [0, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145] }
              ],
              bonus: [
                { treeId: 'sd', skillId: 'clawmastery', statIdx: [1], value: [4], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'dragontail',
              top: '52.2',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'ma', skillId: 'dragonclaw' }],
              name: 'Dragon Tail',
              desc: ['Finishing Move', 'ㅤ', 'Knock Back Your Enemies With An Explosive Kick', 'Adds Charged-up Bonuses To The Kick'],
              level: '18',
              add: [
                { text: 'Radius: {0} Yards', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: 'Mana Cost: {0}', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305] },
                { text: 'Fire Damage: +{0}%', value: [0, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240] }
              ]
            },
            {
              id: 'dragonflight',
              top: '68.4',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'ma', skillId: 'dragontail' }],
              name: 'Dragon Flight',
              desc: ['Finishing Move', 'ㅤ', 'Teleport To Your Enemies', 'And Destroy Them With A Kick', 'Adds Charged-up Bonuses To The Kick'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480] },
                { text: 'Kick Damage: +{0}%', value: [0, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575] }
              ]
            }
          ]
        },
        {
          id: "sd",
          name: 'Shadow Disciplines',
          src: 'back.jpg',
          skills: [
            {
              id: 'burstofspeed',
              top: '19.5',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'sd', skillId: 'clawmastery' }],
              name: 'Burst Of Speed',
              desc: ['Increases Attack And Movement Speed', 'For A Period Of Time'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] }
              ],
              stat: [
                { text: 'Attack Speed: +{0}%', value: [0, 21, 27, 31, 34, 37, 41, 42, 44, 44, 45, 46, 47, 49, 50, 51, 51, 51, 52, 52, 52] },
                { text: 'Run/Walk Speed: +{0}%', value: [0, 23, 29, 34, 39, 42, 45, 47, 49, 51, 52, 54, 55, 56, 57, 57, 59, 59, 60, 60, 61] },
                { text: 'Duration: {0} Seconds', value: [0, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348] }
              ]
            },
            {
              id: 'fade',
              top: '52',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'sd', skillId: 'burstofspeed' }],
              name: 'Fade',
              desc: ['Raise All Resistances And Resist Curses', 'For A Period Of Time'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] }
              ],
              stat: [
                { text: 'Reduces Curse Duration By {0}%', value: [0, 47, 53, 58, 62, 65, 67, 69, 71, 73, 74, 75, 76, 77, 78, 79, 80, 80, 81, 81, 82] },
                { text: 'Resist All: +{0}%', value: [0, 19, 27, 33, 38, 42, 45, 47, 50, 52, 54, 56, 57, 58, 60, 60, 62, 62, 63, 63, 64] },
                { text: 'Duration: {0} Seconds', value: [0, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348] }
              ]
            },
            {
              id: 'venom',
              top: '84.2',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'sd', skillId: 'fade' }],
              name: 'Venom',
              desc: ['Add Poison Damage To Your Weapons'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12] }
              ],
              stat: [
                { text: 'Poison Damage: {0}-{1}', value: [0, [60, 80], [75, 95], [90, 110], [105, 125], [120, 140], [135, 155], [150, 170], [165, 185], [185, 205], [205, 225], [225, 245], [245, 265], [265, 285], [285, 305], [305, 325], [325, 345], [350, 370], [375, 395], [400, 420], [425, 445]] },
                { text: 'Over {0} Seconds', value: [0, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4] },
                { text: 'Duration: {0} Seconds', value: [0, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196] }
              ]
            },
            {
              id: 'clawmastery',
              top: '3.1',
              left: '42.8',
              tooltip: 'middle',
              affected: [{ treeId: 'ma', skillId: 'dragonclaw' }],
              name: 'Claw Mastery',
              desc: ['Passive - Improves Your Skill', 'With Claw Class Weapons'],
              level: '1',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220] },
                { text: 'Damage: +{0}%', value: [0, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99, 103, 107, 111] },
                { text: '{0}% Chance Of Critical Strike', value: [0, 3, 6, 9, 11, 12, 13, 14, 15, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21] }
              ]
            },
            {
              id: 'weaponblock',
              top: '35.5',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'sd', skillId: 'clawmastery' }],
              name: 'Weapon Block',
              desc: ['Passive - Chance To Block When', 'You Are Using Dual Claw Class Weapons'],
              level: '12',
              stat: [
                { text: '{0}% Chance', value: [0, 26, 32, 36, 39, 42, 44, 46, 47, 49, 50, 51, 52, 53, 54, 55, 56, 56, 56, 57, 57] }
              ]
            },
            {
              id: 'shadowwarrior',
              top: '52',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'sd', skillId: 'weaponblock' }, { treeId: 'sd', skillId: 'cloakofshadows' }],
              name: 'Shadow Warrior',
              desc: ['Summon A Shadow Of Yourself That Mimics', 'Your Skills And Fights By Your Side'],
              level: '18',
              stat: [
                { text: 'Life: {0}', value: [0, 376, 432, 488, 545, 601, 658, 714, 770, 827, 883, 940, 996, 1052, 1109, 1165, 1222, 1278, 1334, 1391, 1447] },
                { text: 'Attack Rating: {0}', value: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800] },
                { text: 'Defense: +{0}%', value: [0, 0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228] },
                { text: 'Mana Cost: {0}', value: [0, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36] }
              ]
            },
            {
              id: 'shadowmaster',
              top: '84.2',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'sd', skillId: 'shadowwarrior' }],
              name: 'Shadow Master',
              desc: ['Summon A Powerful Shadow Of Yourself', 'To Fight By Your Side'],
              level: '30',
              stat: [
                { text: 'Life: {0}', value: [0, 376, 432, 488, 545, 601, 658, 714, 770, 827, 883, 940, 996, 1052, 1109, 1165, 1222, 1278, 1334, 1391, 1447] },
                { text: 'Attack Rating: {0}', value: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800] },
                { text: 'Resist All: +{0}%', value: [0, 5, 17, 27, 35, 42, 47, 51, 55, 57, 61, 62, 65, 67, 68, 70, 71, 73, 73, 74, 75] },
                { text: 'Mana Cost: {0}', value: [0, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44] }
              ]
            },
            {
              id: 'psychichammer',
              top: '3.1',
              left: '72.3',
              tooltip: 'right',
              name: 'Psychic Hammer',
              desc: ['Use The Power Of Your Mind', 'To Create A Psychic Blast', 'To Crush And Knock Back Your Enemies'],
              level: '1',
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [2, 5], [3, 6], [4, 7], [5, 8], [6, 9], [7, 10], [8, 11], [9, 12], [10, 13], [12, 15], [13, 16], [15, 18], [16, 19], [18, 21], [19, 22], [21, 24], [23, 26], [25, 28], [27, 30], [29, 32]] },
                { text: 'Magic Damage: {0}-{1}', value: [0, [2, 5], [3, 6], [4, 7], [5, 8], [6, 9], [7, 10], [8, 11], [9, 12], [10, 13], [12, 15], [13, 16], [15, 18], [16, 19], [18, 21], [19, 22], [21, 24], [23, 26], [25, 28], [27, 30], [29, 32]] },
                { text: 'Mana Cost: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
              ]
            },
            {
              id: 'cloakofshadows',
              top: '35.5',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'sd', skillId: 'psychichammer' }],
              name: 'Cloak Of Shadows',
              desc: ['Cast A Shadow To Blind Nearby Enemies', 'Lowering Their Defenses For A Period Of Time'],
              level: '12',
              add: [
                { text: 'Range: {0} Yards', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
                { text: 'Mana Cost: {0}', value: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13] }
              ],
              stat: [
                { text: 'Defense: +{0}%', value: [0, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67] },
                { text: 'Enemy Defense: -{0}%', value: [0, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72] },
                { text: 'Duration: {0} Seconds', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }
              ]
            },
            {
              id: 'mindblast',
              top: '68.2',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'sd', skillId: 'cloakofshadows' }],
              name: 'Mind Blast',
              desc: ['Using The Power Of Your Mind', 'Stun A Group Of Enemies', 'And Convert The Feeble-minded'],
              level: '24',
              add: [
                { text: 'Duration: {0}-{1} Seconds', value: [[6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10], [6, 10]] },
                { text: 'Mana Cost: {0}', value: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [10, 20], [12, 22], [14, 24], [16, 26], [18, 28], [20, 30], [22, 32], [24, 34], [29, 39], [34, 44], [39, 49], [44, 54], [49, 59], [54, 64], [59, 69], [64, 74], [72, 82], [80, 90], [88, 98], [96, 106]] },
                { text: 'Stun Length: {0} Seconds', value: [0, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8] },
                { text: 'Chance To Convert: {0}%', value: [0, 18, 21, 24, 26, 27, 28, 29, 30, 31, 32, 32, 33, 33, 34, 34, 35, 35, 35, 35, 36] }
              ]
            }
          ]
        },
        {
          id: "tr",
          name: 'Traps',
          src: 'back.jpg',
          skills: [
            {
              id: 'shockweb',
              top: '19.7',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'tr', skillId: 'chargedboltsentry' }, { treeId: 'tr', skillId: 'lightningsentry' }, { treeId: 'tr', skillId: 'fireblast' }],
              required: [{ treeId: 'tr', skillId: 'fireblast' }],
              name: 'Shock Web',
              desc: ['Throw A Web Of Lightning', 'To Shock Your Enemies'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }
              ],
              stat: [
                { text: 'Spike: {0}', value: [0, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11] },
                { text: 'Average Lightning Damage: {0}-{1} Per Second', value: [0, [1, 10], [1, 13], [1, 16], [1, 19], [1, 22], [1, 25], [1, 28], [1, 31], [1, 37], [1, 43], [1, 49], [1, 55], [1, 61], [1, 67], [1, 73], [1, 79], [1, 89], [1, 99], [1, 109], [1, 119]] },
                { text: 'Duration: {0} Seconds', value: [0, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6] }
              ],
              bonus: [
                { treeId: 'tr', skillId: 'fireblast', statIdx: [0], value: [[1, 3]], type: ['per_sum'], text: '{n}: +{0} Spike Per 3 Levels' },
                { treeId: 'tr', skillId: 'chargedboltsentry', statIdx: [1], value: [11], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'tr', skillId: 'lightningsentry', statIdx: [1], value: [11], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'tr', skillId: 'deathsentry', statIdx: [1], value: [11], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'chargedboltsentry',
              top: '35.7',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'tr', skillId: 'shockweb' }, { treeId: 'tr', skillId: 'lightningsentry' }, { treeId: 'tr', skillId: 'fireblast' }],
              required: [{ treeId: 'tr', skillId: 'shockweb' }],
              name: 'Charged Bolt Sentry',
              desc: ['A Trap That Emits Charged Bolts', 'At Enemies That Pass Near'],
              level: '12',
              add: [
                { text: 'Shoots {0} Times', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                { text: 'Releases {0} Charged Bolts', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                { text: 'Mana Cost: {0}', value: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13] }
              ],
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 7], [1, 10], [1, 13], [1, 16], [1, 19], [1, 22], [1, 25], [1, 28], [1, 32], [1, 36], [1, 40], [1, 44], [1, 48], [1, 52], [1, 56], [1, 60], [1, 66], [1, 72], [1, 78], [1, 84]] }
              ],
              bonus: [
                { treeId: 'tr', skillId: 'shockweb', addIdx: [1], value: [[1, 3]], type: ['per_sum'], text: '{n}: +{0} Bolt Per 3 Levels' },
                { treeId: 'tr', skillId: 'lightningsentry', addIdx: [0], value: [[1, 4]], type: ['per_sum'], text: '{n}: +{0} Shot Per 4 Levels' },
                { treeId: 'tr', skillId: 'fireblast', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'tr', skillId: 'lightningsentry', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'tr', skillId: 'deathsentry', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'lightningsentry',
              top: '68.4',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'tr', skillId: 'shockweb' }, { treeId: 'tr', skillId: 'chargedboltsentry' }, { treeId: 'tr', skillId: 'deathsentry' }, { treeId: 'tr', skillId: 'fireblast' }],
              required: [{ treeId: 'tr', skillId: 'chargedboltsentry' }],
              name: 'Lightning Sentry',
              desc: ['A Trap That Shoots Lightning', 'To Scorch Passing Enemies'],
              level: '24',
              add: [
                { text: 'Shoots {0} Times', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
                { text: 'Mana Cost: {0}', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 20], [1, 30], [1, 40], [1, 50], [1, 60], [1, 70], [1, 80], [1, 90], [1, 106], [1, 122], [1, 138], [1, 154], [1, 170], [1, 186], [1, 202], [1, 218], [1, 242], [1, 266], [1, 290], [1, 314]] }
              ],
              bonus: [
                { treeId: 'tr', skillId: 'shockweb', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'tr', skillId: 'chargedboltsentry', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'tr', skillId: 'deathsentry', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'deathsentry',
              top: '84.4',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'tr', skillId: 'shockweb' }, { treeId: 'tr', skillId: 'chargedboltsentry' }, { treeId: 'tr', skillId: 'lightningsentry' }, { treeId: 'tr', skillId: 'fireblast' }, { treeId: 'tr', skillId: 'wakeofinferno' }],
              required: [{ treeId: 'tr', skillId: 'lightningsentry' }],
              name: 'Death Sentry',
              desc: ['Trap That Shoots Lightning At Your Enemies', 'Or Explodes Nearby Corpses Laying Waste To More Enemies'],
              level: '30',
              add: [
                { text: 'Corpse Explosion Damage: {0}-{1}% Of Corpse Life', value: [[40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80], [40, 80]] },
                { text: 'Shoots {0} Times', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                { text: 'Mana Cost: {0}', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 50], [1, 58], [1, 66], [1, 74], [1, 82], [1, 90], [1, 98], [1, 106], [1, 120], [1, 134], [1, 148], [1, 162], [1, 176], [1, 190], [1, 204], [1, 218], [1, 240], [1, 262], [1, 284], [1, 306]] },
                { text: 'Radius: {0} Yards', value: [0, 3.3, 3.6, 4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.3, 6.6, 7, 7.3, 7.6, 8, 8.3, 8.6, 9, 9.3, 9.6] }
              ],
              bonus: [
                { treeId: 'tr', skillId: 'fireblast', addIdx: [1], value: [[1, 3]], type: ['per_sum'], text: '{n}: +{0} Shot Per 3 Levels' },
                { treeId: 'tr', skillId: 'lightningsentry', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
              ]
            },
            {
              id: 'fireblast',
              top: '3.3',
              left: '42.8',
              tooltip: 'middle',
              affected: [{ treeId: 'tr', skillId: 'shockweb' }, { treeId: 'tr', skillId: 'chargedboltsentry' }, { treeId: 'tr', skillId: 'deathsentry' }, { treeId: 'tr', skillId: 'wakeoffire' }, { treeId: 'tr', skillId: 'wakeofinferno' }],
              name: 'Fire Blast',
              desc: ['Throw A Fire Bomb', 'To Blast Your Enemies To Bits'],
              level: '1',
              add: [
                { text: 'Radius: {0} Yards', value: [3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [3, 4], [4, 6], [6, 9], [7, 11], [9, 14], [10, 16], [12, 19], [13, 21], [17, 27], [21, 32], [25, 38], [29, 43], [33, 49], [37, 54], [41, 60], [45, 65], [55, 77], [65, 89], [75, 101], [85, 113]] },
                { text: 'Mana Cost: {0}', value: [0, 3, 3.1, 3.2, 3.3, 3.5, 3.6, 3.7, 3.8, 4, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 5, 5.1, 5.2, 5.3] }
              ],
              bonus: [
                { treeId: 'tr', skillId: 'shockweb', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'chargedboltsentry', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'wakeoffire', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'lightningsentry', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'wakeofinferno', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'deathsentry', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'wakeoffire',
              top: '35.7',
              left: '42.8',
              tooltip: 'middle',
              affected: [{ treeId: 'tr', skillId: 'fireblast' }, { treeId: 'tr', skillId: 'wakeofinferno' }],
              required: [{ treeId: 'tr', skillId: 'fireblast' }],
              name: 'Wake Of Fire',
              desc: ['A Trap That Emits Waves Of Fire'],
              level: '12',
              add: [
                { text: 'Shoots {0} Times', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                { text: 'Mana Cost: {0}', value: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [5, 10], [7, 12], [9, 14], [11, 16], [13, 18], [15, 20], [17, 22], [19, 24], [22, 27], [25, 30], [28, 33], [31, 36], [34, 39], [37, 42], [40, 45], [43, 48], [48, 54], [53, 60], [58, 66], [63, 72]] }
              ],
              bonus: [
                { treeId: 'tr', skillId: 'fireblast', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'wakeofinferno', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
              ]
            },
            {
              id: 'wakeofinferno',
              top: '68.4',
              left: '42.8',
              tooltip: 'middle',
              affected: [{ treeId: 'tr', skillId: 'fireblast' }, { treeId: 'tr', skillId: 'wakeoffire' }],
              required: [{ treeId: 'tr', skillId: 'wakeoffire' }],
              name: 'Wake Of Inferno',
              desc: ['Trap That Sprays Fire At Passing Enemies'],
              level: '24',
              add: [
                { text: 'Shoots {0} Times', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
                { text: 'Mana Cost: {0}', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
                { text: 'Range: {0} Yards', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [11, 26], [19, 36], [28, 46], [37, 56], [46, 65], [54, 76], [64, 85], [72, 95], [83, 107], [95, 119], [106, 131], [116, 143], [127, 155], [138, 167], [149, 179], [160, 191], [173, 206], [187, 220], [200, 235], [214, 249]] }
              ],
              bonus: [
                { treeId: 'tr', skillId: 'wakeoffire', addIdx: [2], value: [0.5], type: ['sum'], text: '{n}: +{0} Yards Per Level' },
                { treeId: 'tr', skillId: 'fireblast', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'wakeoffire', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'tr', skillId: 'deathsentry', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'bladesentinel',
              top: '19.7',
              left: '72.4',
              tooltip: 'right',
              name: 'Blade Sentinel',
              desc: ['Set A Spinning Blade To Patrol', 'Between You And Target Point'],
              level: '6',
              add: [
                { text: '{0}% Weapon Damage', value: [37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5, 37.5] },
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [6, 10], [9, 13], [12, 16], [15, 19], [18, 22], [21, 25], [24, 28], [27, 31], [31, 35], [35, 39], [39, 43], [43, 47], [47, 51], [51, 55], [55, 59], [59, 63], [64, 68], [69, 73], [74, 78], [79, 83]] },
                { text: 'Duration: {0} Seconds', value: [0, 4, 4.4, 4.9, 5.4, 5.9, 6.4, 6.8, 7.3, 7.8, 8.3, 8.8, 9.2, 9.7, 10.2, 10.7, 11.2, 11.6, 12.1, 12.6, 13.1] }
              ]
            },
            {
              id: 'bladefury',
              top: '52.2',
              left: '72.4',
              tooltip: 'right',
              required: [{ treeId: 'tr', skillId: 'wakeoffire' }, { treeId: 'tr', skillId: 'bladesentinel' }],
              name: 'Blade Fury',
              desc: ['Throw Spinning Blades', 'To Slice up Your Enemies'],
              level: '18',
              add: [
                { text: '{0}% Weapon Damage', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] },
                { text: 'Minimum Mana Required To Cast: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [8, 10], [11, 13], [14, 16], [17, 19], [20, 22], [23, 25], [26, 28], [29, 31], [34, 36], [39, 41], [44, 46], [49, 51], [54, 56], [59, 61], [64, 66], [69, 71], [77, 79], [85, 87], [93, 95], [101, 103]] },
                { text: 'Mana Cost: {0} Per Blade', value: [0, 1, 1.1, 1.2, 1.3, 1.5, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.5, 2.6, 2.7, 2.8, 3, 3.1, 3.2, 3.3] }
              ]
            },
            {
              id: 'bladeshield',
              top: '84.4',
              left: '72.4',
              tooltip: 'right',
              required: [{ treeId: 'tr', skillId: 'bladefury' }],
              name: 'Blade Shield',
              desc: ['Spinning Blades Slice Enemies', 'Who Stray Too Close'],
              level: '30',
              add: [
                { text: '{0}% Weapon Damage', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [1, 30], [6, 35], [11, 40], [16, 45], [21, 50], [26, 55], [31, 60], [36, 65], [42, 71], [48, 77], [54, 83], [60, 89], [66, 95], [72, 101], [78, 107], [84, 113], [91, 120], [98, 127], [105, 134], [112, 141]] },
                { text: 'Duration: {0} Seconds', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115] },
                { text: 'Mana Cost: {0}', value: [0, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65] }
              ]
            }
          ]
        }
      ],
      necromancer: [
        {
          id: "sm",
          name: 'Summoning',
          src: 'back.jpg',
          skills: [
            {
              id: 'skeletonmastery',
              top: '3.6',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'sm', skillId: 'raiseskeleton' },
                { treeId: 'sm', skillId: 'raiseskeletalmage' },
                { treeId: 'sm', skillId: 'revive' }
              ],
              required: [{ treeId: 'sm', skillId: 'raiseskeleton' }],
              name: 'Skeleton Mastery',
              desc: ['Passive - Increases Life And Damage', 'Of Raised Skeletons And Revived Creatures'],
              level: '1',
              stat: [
                { text: 'Skeletons: Life: +{0}', value: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160] },
                { text: 'Skeletons: Damage: +{0}', value: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40] },
                { text: 'Magi: Life: +{0}', value: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160] },
                { text: 'Magi: Improved Missile Damage' },
                { text: 'Monsters: Life: +{0}%', value: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] },
                { text: 'Monsters: Damage: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] }
              ]
            },
            {
              id: 'golemmastery',
              top: '35.8',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'claygolem' }],
              name: 'Golem Mastery',
              desc: ['Enhances Speed And Life Of All Your Golems'],
              level: '12',
              stat: [
                { text: 'Life: +{0}%', value: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400] },
                { text: 'Attack Rating: {0}', value: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500] },
                { text: 'Run/Walk Speed: +{0}%', value: [0, 6, 10, 14, 17, 20, 22, 23, 24, 26, 27, 28, 29, 30, 30, 31, 32, 32, 32, 33, 33] }
              ]
            },
            {
              id: 'summonresist',
              top: '68.5',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' },
                { treeId: 'sm', skillId: 'raiseskeleton' },
                { treeId: 'sm', skillId: 'raiseskeletalmage' },
                { treeId: 'sm', skillId: 'revive' }
              ],
              required: [{ treeId: 'sm', skillId: 'golemmastery' }],
              name: 'Summon Resist',
              desc: ['Passive - Increases The Resistances', 'Of All Summoned Creatures'],
              level: '24',
              stat: [
                { text: 'Resist All: +{0}%', value: [0, 28, 34, 39, 44, 47, 50, 52, 54, 56, 57, 59, 60, 61, 62, 62, 64, 64, 65, 65, 66] }
              ]
            },
            {
              id: 'claygolem',
              top: '19.8',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              name: 'Clay Golem',
              desc: ['Creates A Golem From The Earth', 'To Fight By Your Side'],
              level: '6',
              add: [
                { text: 'Attack Rating: {0}', value: [60, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440] },
                { text: 'Defense: {0}', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 275, 371, 467, 563, 660, 756, 852, 948, 1045, 1141, 1237, 1333, 1430, 1526, 1622, 1718, 1815, 1911, 2007, 2103] },
                { text: 'Attack Rating: +{0}', value: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400] },
                { text: 'Damage: {0}-{1}', value: [0, [3, 7], [4, 9], [5, 11], [6, 14], [7, 16], [8, 19], [9, 21], [10, 24], [11, 26], [12, 29], [13, 31], [14, 33], [15, 36], [16, 38], [17, 41], [18, 43], [19, 46], [20, 48], [21, 51], [22, 53]] },
                { text: 'Slows Enemies: {0}%', value: [0, 11, 20, 27, 33, 37, 41, 44, 46, 49, 51, 53, 54, 56, 57, 58, 60, 60, 61, 62, 63] },
                { text: 'Mana Cost: {0}', value: [0, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0], value: [25], type: ['sum'] },
                { treeId: 'sm', skillId: 'golemmastery', statIdx: [1], value: [20], type: ['sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'bloodgolem', statIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0}% Life Per Level' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [1], value: [35], type: ['sum'], text: '{n}: +{0} Defense Per Level' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [2], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'bloodgolem',
              top: '52.3',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'claygolem' }],
              name: 'Blood Golem',
              desc: ['Creates A Golem That Shares With You The Life', 'It Steals'],
              level: '18',
              add: [
                { text: 'Life: {0}', value: [637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637] },
                { text: 'Attack Rating: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: 'Defense: {0}', value: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120] }
              ],
              stat: [
                { text: 'Converts {0}% Damage To Life', value: [0, 86, 95, 102, 108, 112, 116, 119, 121, 124, 126, 128, 129, 131, 132, 133, 135, 135, 136, 137, 138] },
                { text: 'Damage: {0}-{1}', value: [0, [10, 27], [13, 36], [17, 45], [20, 55], [24, 64], [27, 74], [31, 83], [34, 93], [38, 102], [41, 112], [45, 121], [48, 130], [52, 140], [55, 149], [59, 159], [62, 168], [66, 178], [69, 187], [73, 197], [76, 206]] },
                { text: 'Mana Cost: {0}', value: [0, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0} Attack Rating Per Level' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [2], value: [35], type: ['sum'], text: '{n}: +{0} Defense Per Level' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [1], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'irongolem',
              top: '68.5',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'bloodgolem' }],
              name: 'Iron Golem',
              desc: ['Transforms A Metallic Item Into A Golem That Gains', 'The Properties Of The Item'],
              level: '24',
              add: [
                { text: 'Life: {0}', value: [1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029] },
                { text: 'Damage: {0}-{1}', value: [[12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33]] },
                { text: 'Attack Rating: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: 'Defense: {0}', value: [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140] },
                { text: 'Mana Cost: {0}', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
              ],
              stat: [
                { text: 'Thorns Damage' },
                { text: '{0}% Damage Returned', value: [0, 150, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420] },
                { text: 'Defense: +{0}', value: [0, 35, 70, 105, 140, 175, 210, 245, 280, 315, 350, 385, 420, 455, 490, 525, 560, 595, 630, 665, 700] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [2], value: [20], type: ['sum'], text: '{n}: +{0} Attack Rating Per Level' },
                { treeId: 'sm', skillId: 'bloodgolem', addIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0} Life Per Level' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [1], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'firegolem',
              top: '84.4',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'irongolem' }],
              name: 'Fire Golem',
              desc: ['Creates A Golem That Converts The Damage', 'It Receives From Fire Into Life'],
              level: '30',
              add: [
                { text: 'Life: {0}', value: [1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029] },
                { text: 'Attack Rating: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: 'Defense: {0}', value: [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140] }
              ],
              stat: [
                { text: 'Absorbs {0}% Fire Damage', value: [0, 36, 45, 52, 58, 62, 66, 69, 71, 74, 76, 78, 79, 81, 82, 83, 85, 85, 86, 87, 88] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [52, 110], [67, 126], [82, 142], [97, 158], [112, 174], [127, 190], [142, 206], [157, 222], [173, 239], [195, 262], [211, 279], [233, 302], [249, 319], [271, 342], [287, 359], [315, 388], [338, 412], [367, 442], [390, 466], [419, 496]] },
                { text: 'Holy Fire: {0}-{1}', value: [0, [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 13], [12, 14], [14, 16], [15, 17], [17, 19], [18, 20], [20, 22], [21, 23], [24, 26], [26, 28], [29, 31], [31, 33], [34, 36]] },
                { text: 'Mana Cost: {0}', value: [0, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0} Attack Rating Per Level' },
                { treeId: 'sm', skillId: 'bloodgolem', addIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0} Life Per Level' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [2], value: [35], type: ['sum'], text: '{n}: +{0} Defense Per Level' }
              ]
            },
            {
              id: 'raiseskeleton',
              top: '3.6',
              left: '72.2',
              tooltip: 'right',
              name: 'Raise Skeleton',
              desc: ['Cast On The Corpse Of A Slain Monster,', 'This Raises A Skeleton Warrior That', 'Fights For You'],
              level: '1',
              add: [
                { text: 'Damage: {0}-{1}', value: [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [2, 4], [4, 5], [6, 7], [8, 9], [10, 11], [12, 14], [14, 16], [17, 19], [21, 23], [26, 28], [31, 33], [37, 39], [37, 39]] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 21, 21, 21, 31, 42, 52, 63, 73, 84, 94, 105, 115, 126, 136, 147, 157, 168, 178, 189, 199] },
                { text: 'Attack Rating: {0}', value: [0, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305] },
                { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119] },
                { text: 'Defense: {0}', value: [0, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305] },
                { text: '{0} Skeletons Total', value: [0, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8] },
                { text: 'Mana Cost: {0}', value: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'skeletonmastery', addIdx: [0], value: [20], type: ['rate'] },
                { treeId: 'sm', skillId: 'skeletonmastery', statIdx: [0, 1, 3], value: [8, 15, 15], type: ['sum', 'sum', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' }
              ]
            },
            {
              id: 'raiseskeletalmage',
              top: '35.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'sm', skillId: 'raiseskeleton' }],
              name: 'Raise Skeletal Mage',
              desc: ['Cast On The Corpse Of A Slain Monster,', 'This Raises A Skeleton Mage That', 'Fights For You'],
              level: '12',
              add: [
                { text: 'Life: {0}', value: [123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123] }
              ],
              stat: [
                { text: 'Defense: {0}', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
                { text: '{0} Skeleton Magi', value: [0, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8] },
                { text: 'Mana Cost: {0}', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'skeletonmastery', statIdx: [0], value: [8], type: ['sum'] },
                { treeId: 'sm', skillId: 'summonresist' }
              ]
            },
            {
              id: 'revive',
              top: '84.5',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'sm', skillId: 'irongolem' }, { treeId: 'sm', skillId: 'raiseskeletalmage' }],
              name: 'Revive',
              desc: ['Returns A Monster To Life', 'To Fight By Your Side'],
              level: '30',
              add: [
                { text: 'Life: +{0}%', value: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200] },
                { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: 'Duration: {0} Seconds', value: [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180] },
                { text: 'Mana Cost: {0}', value: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45] }
              ],
              stat: [
                { text: 'Monsters: {0}', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'skeletonmastery', addIdx: [0, 1], value: [5, 10], type: ['sum', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' }
              ]
            }
          ]
        },
        {
          id: "pb",
          name: 'Poison And Bone',
          src: 'back.jpg',
          skills: [
            {
              id: 'poisondagger',
              top: '19.7',
              left: '12.9',
              tooltip: 'left',
              affected: [
                { treeId: 'pb', skillId: 'poisonexplosion' },
                { treeId: 'pb', skillId: 'poisonnova' }
              ],
              name: 'Poison Dagger',
              desc: ['Adds Poison To Your Dagger Attacks'],
              level: '6',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410] },
                { text: 'Poison Damage: {0}-{1}', value: [0, [7, 15], [13, 23], [20, 32], [30, 43], [40, 56], [53, 70], [67, 85], [82, 103], [104, 126], [129, 153], [155, 181], [185, 212], [216, 245], [250, 281], [286, 319], [325, 359], [374, 410], [426, 464], [481, 521], [540, 581]] },
                { text: 'Over {0} Seconds', value: [0, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6] },
                { text: 'Mana Cost: {0}', value: [0, 3, 3.2, 3.5, 3.7, 4.0, 4.2, 4.5, 4.7, 5.0, 5.2, 5.5, 5.7, 6.0, 6.2, 6.5, 6.7, 7.0, 7.2, 7.5, 7.7] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisonexplosion', statIdx: [1], value: [20], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' },
                { treeId: 'pb', skillId: 'poisonnova', statIdx: [1], value: [20], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'poisonexplosion',
              top: '52',
              left: '12.9',
              tooltip: 'left',
              affected: [
                { treeId: 'pb', skillId: 'poisondagger' },
                { treeId: 'pb', skillId: 'poisonnova' }
              ],
              required: [{ treeId: 'pb', skillId: 'poisondagger' }, { treeId: 'pb', skillId: 'corpse' }],
              name: 'Poison Explosion',
              desc: ['Cast On The Corpse Of A Slain Monster', 'Toxic Gas Is Released', 'That Poisons Nearby Monsters'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] }
              ],
              stat: [
                { text: 'Poison Damage: {0}-{1}', value: [0, [25, 75], [37, 97], [52, 122], [70, 150], [90, 180], [112, 212], [137, 247], [165, 285], [211, 341], [262, 402], [318, 468], [380, 540], [446, 616], [517, 697], [593, 783], [675, 875], [787, 997], [907, 1127], [1035, 1265], [1170, 1410]] },
                { text: 'Over {0} Seconds', value: [0, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisondagger', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' },
                { treeId: 'pb', skillId: 'poisonnova', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'poisonnova',
              top: '84.3',
              left: '13',
              tooltip: 'left',
              affected: [
                { treeId: 'pb', skillId: 'poisondagger' },
                { treeId: 'pb', skillId: 'poisonexplosion' }
              ],
              required: [{ treeId: 'pb', skillId: 'poisonexplosion' }],
              name: 'Poison Nova',
              desc: ['Emits An Expanding Ring Of Concentrated Poison'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: 'Poison Damage: {0}-{1}', value: [0, [50, 90], [62.5, 102.5], [74.2, 115], [87.5, 127.5], [100, 140], [112.5, 152.5], [125, 165], [137.5, 177.5], [155.8, 196.7], [174.2, 215], [193.3, 234.2], [211.7, 252.5], [230.8, 271.7], [250, 290], [268.3, 309.2], [286.7, 327.5], [315, 355.8], [343.3, 384.2], [371.67, 412.5], [400, 440]] },
                { text: 'Over {0} Seconds', value: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisondagger', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' },
                { treeId: 'pb', skillId: 'poisonexplosion', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'teeth',
              top: '3.4',
              left: '42.6',
              tooltip: 'middle',
              affected: [
                { treeId: 'pb', skillId: 'bonespear' },
                { treeId: 'pb', skillId: 'bonespirit' }
              ],
              name: 'Teeth',
              desc: ['Fires A Barrage Of Summoned Barbed Teeth'],
              level: '1',
              stat: [
                { text: '{0} Teeth', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
                { text: 'Magic Damage: {0}-{1}', value: [0, [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 14], [12, 15], [13, 17], [14, 18], [15, 20], [16, 21], [17, 23], [18, 25], [20, 27], [21, 29], [23, 31]] },
                { text: 'Mana Cost: {0}', value: [0, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonewall', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespear', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespirit', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
              ]
            },
            {
              id: 'corpse',
              top: '19.7',
              left: '42.6',
              tooltip: 'middle',
              required: [{ treeId: 'pb', skillId: 'teeth' }],
              name: 'Corpse Explosion',
              desc: ['Cast On The Corpse Of A Slain Monster,', 'It Explodes, Damaging Nearby Enemies'],
              level: '6',
              add: [
                { text: 'Damage: {0}-{1}% Of Corpse Life', value: [[70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120]] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2.6, 3, 3.3, 3.6, 4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.3, 6.6, 7, 7.3, 7.6, 8, 8.3, 8.6, 9] },
                { text: 'Mana Cost: {0}', value: [0, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
              ]
            },
            {
              id: 'bonespear',
              top: '52',
              left: '42.6',
              tooltip: 'middle',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespirit' }
              ],
              required: [{ treeId: 'pb', skillId: 'corpse' }],
              name: 'Bone Spear',
              desc: ['Summons A Deadly Spike Of Bone To Impale Your Enemies'],
              level: '18',
              stat: [
                { text: 'Magic Damage: {0}-{1}', value: [0, [12, 18], [19, 25], [26, 32], [33, 39], [40, 46], [47, 53], [54, 60], [61, 67], [70, 76], [79, 85], [88, 94], [97, 103], [106, 112], [115, 121], [124, 130], [133, 139], [145, 152], [157, 165], [169, 178], [181, 191]] },
                { text: 'Mana Cost: {0}', value: [0, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7, 10, 10.2, 10.5, 10.7, 11, 11.2, 11.5, 11.7] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'teeth', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespirit', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
              ]
            },
            {
              id: 'bonespirit',
              top: '84.3',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespear' }
              ],
              required: [{ treeId: 'pb', skillId: 'bonespear' }],
              name: 'Bone Spirit',
              desc: ['Releases A Spirit Of The Restless Undead That', 'Tracks Its Target Or Finds One Of Its Own'],
              level: '30',
              stat: [
                { text: 'Magic Damage: {0}-{1}', value: [0, [20, 30], [36, 47], [52, 64], [68, 81], [84, 98], [100, 115], [116, 132], [132, 149], [149, 167], [166, 185], [183, 203], [200, 221], [217, 239], [234, 257], [251, 275], [268, 293], [286, 312], [304, 331], [322, 350], [340, 369]] },
                { text: 'Mana Cost: {0}', value: [0, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'teeth', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespear', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
              ]
            },
            {
              id: 'bonearmor',
              top: '3.4',
              left: '72',
              tooltip: 'right',
              affected: [
                { treeId: 'pb', skillId: 'bonewall' },
                { treeId: 'pb', skillId: 'boneprison' }
              ],
              name: 'Bone Armor',
              desc: ['Creates An Orbiting Shield Of Bone', 'That Absorbs Melee Damage'],
              level: '1',
              stat: [
                { text: 'Absorbs {0} Damage', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
                { text: 'Mana Cost: {0}', value: [0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [15], type: ['sum'], text: '{n}: +{0} Damage Absorbed Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [15], type: ['sum'], text: '{n}: +{0} Damage Absorbed Per Level' }
              ]
            },
            {
              id: 'bonewall',
              top: '35.6',
              left: '72',
              tooltip: 'right',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespear' },
                { treeId: 'pb', skillId: 'bonespirit' },
                { treeId: 'pb', skillId: 'bonearmor' },
                { treeId: 'pb', skillId: 'boneprison' }
              ],
              required: [{ treeId: 'pb', skillId: 'bonearmor' }],
              name: 'Bone Wall',
              desc: ['Creates An Impassable Barrier', 'Of Bone And Debris'],
              level: '12',
              add: [
                { text: 'Duration: {0} Seconds', value: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24] },
                { text: 'Mana Cost: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 431, 538, 646, 754, 862, 970, 1077, 1185, 1293, 1401, 1509, 1616, 1724, 1831, 1939, 2047, 2154, 2262, 2370, 2478] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonearmor', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Life Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Life Per Level' }
              ]
            },
            {
              id: 'boneprison',
              top: '68.3',
              left: '72',
              tooltip: 'right',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespear' },
                { treeId: 'pb', skillId: 'bonespirit' },
                { treeId: 'pb', skillId: 'bonearmor' },
                { treeId: 'pb', skillId: 'bonewall' }
              ],
              required: [{ treeId: 'pb', skillId: 'bonespear' }, { treeId: 'pb', skillId: 'bonewall' }],
              name: 'Bone Prison',
              desc: ['Creates A Barrier Of Fossilized Bone Around Your Target'],
              level: '24',
              add: [
                { text: 'Duration: {0} Seconds', value: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 431, 538, 646, 754, 862, 970, 1077, 1185, 1293, 1401, 1509, 1616, 1724, 1831, 1939, 2047, 2154, 2262, 2370, 2478] },
                { text: 'Mana Cost: {0}', value: [0, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonearmor', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Life Per Level' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Life Per Level' }
              ]
            }
          ]
        },
        {
          id: "cs",
          name: 'Curses',
          src: 'back.jpg',
          skills: [
            {
              id: 'dimvision',
              top: '19.8',
              left: '13.2',
              tooltip: 'left',
              name: 'Dim Vision',
              desc: ['Curses A Group Of Monsters,', 'Reducing Their Vison Radius'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3] },
                { text: 'Duration: {0} Seconds', value: [0, 1.7, 2.2, 2.7, 3.2, 3.7, 4.2, 4.7, 5.2, 5.7, 6.2, 6.7, 7.2, 7.7, 8.2, 8.7, 9.2, 9.7, 10.2, 10.7, 11.2] }
              ]
            },
            {
              id: 'confuse',
              top: '52.1',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'dimvision' }],
              name: 'Confuse',
              desc: ['Curses A Monster To Force It To Attack Random Targets'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] },
                { text: 'Duration: {0} Seconds', value: [0, 2.4, 3, 3.4, 4, 4.4, 5, 5.4, 6, 6.4, 7, 7.4, 8, 8.4, 9, 9.4, 10, 10.4, 11, 11.4, 12] }
              ]
            },
            {
              id: 'attract',
              top: '68.5',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'confuse' }],
              name: 'Attract',
              desc: ['Curses A Monster To Becom The', 'Target Of All Nearby Monsters', 'This Curse May Not Be Overridden By Another Curse'],
              level: '24',
              add: [
                { text: 'Radius: {0} Yards', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] },
                { text: 'Mana Cost: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 3, 3.8, 4.8, 5.6, 6.6, 7.4, 8.4, 9.2, 10.2, 11, 12, 12.8, 13.8, 14.6, 15.6, 16.4, 17.4, 18.2, 19.2, 20] }
              ]
            },
            {
              id: 'amplify',
              top: '3.6',
              left: '42.8',
              tooltip: 'middle',
              name: 'Amplify Damage',
              desc: ['Curses A Group Of Enemies, Increasing', 'The Non-Magic Damage They Receive'],
              level: '1',
              add: [
                { text: 'Damage Taken: +{0}%', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] },
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6] },
                { text: 'Duration: {0} Seconds', value: [0, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65] }
              ]
            },
            {
              id: 'ironmaiden',
              top: '35.8',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'amplify' }],
              name: 'Iron Maiden',
              desc: ['Curses A Group Of Enemies, Causing Them', 'To Damage Themselves When Damaging Others'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6] }
              ],
              stat: [
                { text: '{0}% Damage Returned', value: [0, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675] },
                { text: 'Duration: {0} Seconds', value: [0, 12, 14.4, 16.8, 19.2, 21.6, 24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 55.2, 57.6] }
              ]
            },
            {
              id: 'lifetap',
              top: '52.2',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'ironmaiden' }],
              name: 'Life Tap',
              desc: ['Curses A Group Of Monsters So That', 'Damaging Them Gives The Attacker Life'],
              level: '18',
              add: [
                { text: 'Heals: {0}% Of Attack Damage', value: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50] },
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3] },
                { text: 'Duration: {0} Seconds', value: [0, 16, 18.4, 20.8, 23.2, 25.6, 28, 30.4, 32.8, 35.2, 37.6, 40, 42.4, 44.8, 47.2, 49.6, 52, 54.4, 56.8, 59.2, 61.6] }
              ]
            },
            {
              id: 'lowerresist',
              top: '84.6',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'lifetap' }, { treeId: 'cs', skillId: 'decrepify' }],
              name: 'Lower Resist',
              desc: ['Curses An Enemy To Take More Damage From All Magical Attacks', 'Lowers Resistances Of Monsters', 'Lowers Maximum Resistances Of Hostile Players'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] }
              ],
              stat: [
                { text: 'Resist All: -{0}%', value: [0, 31, 37, 41, 44, 47, 49, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 61, 61, 62, 62] },
                { text: 'Radius: {0} Yards', value: [0, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3] },
                { text: 'Duration: {0} Seconds', value: [0, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58] }
              ]
            },
            {
              id: 'weaken',
              top: '19.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'amplify' }],
              name: 'Weaken',
              desc: ['Curses A Group Of Enemies,', 'Reducing The Amount Of Damage They Inflict'],
              level: '6',
              add: [
                { text: 'Enemy Damage: -{0}%', value: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33] },
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3, 18, 18.6] },
                { text: 'Duration: {0} Seconds', value: [0, 16.4, 18.8, 21.2, 23.6, 26, 28.4, 30.8, 33.2, 35.6, 38, 40.4, 42.8, 45.2, 47.6, 50, 52.4, 54.8, 57.2, 59.6] }
              ]
            },
            {
              id: 'terror',
              top: '35.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'weaken' }],
              name: 'Terror',
              desc: ['Curses A Group Of Monsters,', 'Causing Them To Flee In Terror'],
              level: '12',
              add: [
                { text: 'Radius: {0} Yards', value: [2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6] },
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }
              ]
            },
            {
              id: 'decrepify',
              top: '68.5',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'terror' }],
              name: 'Decrepify',
              desc: ['Curses A Group Of Enemies To Make Them', 'Slow, Weak And Take Amplified Damage'],
              level: '24',
              add: [
                { text: 'Radius: {0} Yards', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: 'Mana Cost: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 4, 4.6, 5.2, 5.8, 6.4, 7, 7.6, 8.2, 8.8, 9.4, 10, 10.6, 11.2, 11.8, 12.4, 13, 13.6, 14.2, 14.8, 15.4] }
              ]
            }
          ]
        }
      ],
      barbarian: [
        {
          id: "wc",
          name: 'Warcries',
          src: 'back.jpg',
          skills: [
            {
              id: 'howl',
              top: '3.7',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'wc', skillId: 'warcry' }, { treeId: 'cs', skillId: 'berserk' }],
              name: 'Howl',
              desc: ['Sends Nearby Monster', 'Scrambling Away In Fear'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2.2, 2.5, 2.7, 3, 3.2, 3.5, 3.7, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7] }
              ],
              stat: [
                { text: 'Monster Runs Up To {0} Yards', value: [0, 16, 19.3, 22.6, 26, 29.3, 32.6, 36, 39.3, 42.6, 46, 49.3, 52.6, 56, 59.3, 62.6, 66, 69.3, 72.6, 76, 79.3] },
                { text: 'Duration: {0} Seconds', value: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] }
              ]
            },
            {
              id: 'taunt',
              top: '19.8',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'wc', skillId: 'warcry' }, { treeId: 'cs', skillId: 'frenzy' }],
              required: [{ treeId: 'wc', skillId: 'howl' }],
              name: 'Taunt',
              desc: ['Enrages A Monster Into Relentlessly Attacking'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: 'Target\'s Attack Rating: -{0}%', value: [0, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43] },
                { text: 'Enemy Damage: -{0}%', value: [0, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43] }
              ]
            },
            {
              id: 'battlecry',
              top: '52.2',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'wc', skillId: 'warcry' }],
              required: [{ treeId: 'wc', skillId: 'taunt' }],
              name: 'Battle Cry',
              desc: ['Fearsome Cry That Decreases', 'Enemies\' Defense And Damage'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: 'Enemy Damage: -{0}%', value: [0, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] },
                { text: 'Enemy Defense: -{0}%', value: [0, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88] },
                { text: 'Duration: {0} Seconds', value: [0, 12, 14.4, 16.8, 19.2, 21.6, 24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 55.2, 57.6] }
              ]
            },
            {
              id: 'warcry',
              top: '84.5',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'cs', skillId: 'stun' }],
              required: [{ treeId: 'wc', skillId: 'battlecry' }, { treeId: 'wc', skillId: 'battleorders' }],
              name: 'War Cry',
              desc: ['Injures And Stuns All Nearby Enemies'],
              level: '30',
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [20, 30], [26, 32], [32, 42], [38, 48], [44, 54], [50, 60], [56, 66], [62, 72], [69, 79], [76, 86], [83, 93], [90, 100], [97, 107], [104, 114], [111, 121], [118, 128], [126, 136], [134, 144], [142, 152], [150, 160]] },
                { text: 'Stun Length: {0} Second', value: [0, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8] },
                { text: 'Mana Cost: {0}', value: [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'howl', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'wc', skillId: 'taunt', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'wc', skillId: 'battlecry', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
              ]
            },
            {
              id: 'shout',
              top: '19.8',
              left: '42.7',
              tooltip: 'middle',
              affected: [{ treeId: 'wc', skillId: 'battleorders' }, { treeId: 'wc', skillId: 'battlecommand' }, { treeId: 'cs', skillId: 'berserk' }],
              required: [{ treeId: 'wc', skillId: 'howl' }],
              name: 'Shout',
              desc: ['Warns Of Impending Danger And Improves The Defense', 'Rating Of You And Your Party'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }
              ],
              stat: [
                { text: 'Defense: +{0}%', value: [0, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290] },
                { text: 'Duration: {0} Seconds', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'battleorders', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'wc', skillId: 'battlecommand', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0} Seconds Per Level' }
              ]
            },
            {
              id: 'battleorders',
              top: '68.5',
              left: '42.7',
              tooltip: 'middle',
              affected: [{ treeId: 'wc', skillId: 'shout' }, { treeId: 'wc', skillId: 'battlecommand' }, { treeId: 'cs', skillId: 'concentrate' }],
              required: [{ treeId: 'wc', skillId: 'shout' }],
              name: 'Battle Orders',
              desc: ['Improves The Maximum Mana, Life And', 'Stamina Of You And Your Party'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Max Life: +{0}%', value: [0, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92] },
                { text: 'Max Mana: +{0}%', value: [0, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92] },
                { text: 'Max Stamina: +{0}%', value: [0, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92] },
                { text: 'Duration: {0} Seconds', value: [0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'shout', statIdx: [3], value: [5], type: ['sum'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'wc', skillId: 'battlecommand', statIdx: [3], value: [5], type: ['sum'], text: '{n}: +{0} Seconds Per Level' }
              ]
            },
            {
              id: 'battlecommand',
              top: '84.5',
              left: '42.7',
              tooltip: 'middle',
              affected: [{ treeId: 'wc', skillId: 'shout' }, { treeId: 'wc', skillId: 'battleorders' }],
              required: [{ treeId: 'wc', skillId: 'battleorders' }],
              name: 'Battle Command',
              desc: ['Increases All Current Skill Levels For You And Your Party'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'shout', statIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'wc', skillId: 'battleorders', statIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0} Seconds Per Level' }
              ]
            },
            {
              id: 'findpotion',
              top: '3.7',
              left: '72.2',
              tooltip: 'right',
              name: 'Find Potion',
              desc: ['Use On The Corpse Of A Slain Monster', 'For A Chance To Find A Potion'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: '{0}% Chance', value: [0, 15, 27, 36, 44, 50, 55, 59, 62, 66, 68, 71, 73, 75, 77, 78, 80, 81, 82, 83, 84] }
              ]
            },
            {
              id: 'finditem',
              top: '35.8',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'wc', skillId: 'findpotion' }],
              name: 'Find Item',
              desc: ['Use On The Corpse Of A Slain Monster', 'To Find Hidden Treasures'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: '{0}% Chance', value: [0, 13, 19, 24, 29, 32, 35, 37, 39, 41, 42, 44, 45, 46, 47, 47, 49, 49, 50, 50, 51] }
              ]
            },
            {
              id: 'grimward',
              top: '68.5',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'wc', skillId: 'finditem' }],
              name: 'Grim Ward',
              desc: ['Use On The Corpse Of A Slain Monster', 'To Create A Frightening Totem', 'That Causes Nearby Monsters To Flee'],
              level: '24',
              add: [
                { text: 'Duration: {0} Seconds', value: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6] }
              ]
            }
          ]
        },
        {
          id: "cm",
          name: 'Combat Masteries',
          src: 'back.jpg',
          skills: [
            {
              id: 'swordmastery',
              top: '3.4',
              left: '13.3',
              tooltip: 'left',
              name: 'Sword Mastery',
              desc: ['Passive - Improves Sword Fighting Skill'],
              level: '1',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180] },
                { text: 'Damage: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '{0}% Chance Of Critical Strike', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'polearmmastery',
              top: '19.7',
              left: '13.3',
              tooltip: 'left',
              name: 'Polearm Mastery',
              desc: ['Passive - Improves Polearm Skill'],
              level: '6',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182] },
                { text: 'Damage: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '{0}% Chance Of Critical Strike', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'increasedstamina',
              top: '35.6',
              left: '13.3',
              tooltip: 'left',
              name: 'Increased Stamina',
              desc: ['Passive - Increases Your Stamina'],
              level: '12',
              stat: [
                { text: 'Max Stamina: +{0}%', value: [0, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315] }
              ]
            },
            {
              id: 'increasedspeed',
              top: '68.3',
              left: '13.3',
              tooltip: 'left',
              required: [{ treeId: 'cm', skillId: 'increasedstamina' }],
              name: 'Increased Speed',
              desc: ['Passive - Increases Walk And Run Speed'],
              level: '24',
              stat: [
                { text: 'Run/Walk Speed: +{0}%', value: [0, 13, 18, 22, 25, 28, 30, 32, 33, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42, 42, 43] }
              ]
            },
            {
              id: 'axemastery',
              top: '3.4',
              left: '42.8',
              tooltip: 'middle',
              name: 'Axe Mastery',
              desc: ['Passive - Improves Axe Fighting skill'],
              level: '1',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180] },
                { text: 'Damage: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '{0}% Chance Of Critical Strike', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'throwingmastery',
              top: '19.7',
              left: '42.8',
              tooltip: 'middle',
              name: 'Throwing Mastery',
              desc: ['Passive - Improves Throwing Weapon Skill'],
              level: '6',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182] },
                { text: 'Damage: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '{0}% Chance Of Critical Strike', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'macemastery',
              top: '3.4',
              left: '72.2',
              tooltip: 'right',
              name: 'Mace Mastery',
              desc: ['Passive - Improves Mace Fighting Skill'],
              level: '1',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180] },
                { text: 'Damage: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '{0}% Chance Of Critical Strike', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'spearmastery',
              top: '19.7',
              left: '72.2',
              tooltip: 'right',
              name: 'Spear Mastery',
              desc: ['Passive - Improves Spear Fighting Skill'],
              level: '6',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182] },
                { text: 'Damage: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '{0}% Chance Of Critical Strike', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'ironskin',
              top: '52',
              left: '72.2',
              tooltip: 'right',
              name: 'Iron Skin',
              desc: ['Passive - Improves Defense'],
              level: '18',
              stat: [
                { text: 'Defense: +{0}%', value: [0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220] }
              ]
            },
            {
              id: 'naturalresistance',
              top: '84.4',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'cm', skillId: 'ironskin' }],
              name: 'Natural Resistance',
              desc: ['Passive - Increases Natural Resistances', 'To Elemental And Poison Damage'],
              level: '30',
              stat: [
                { text: 'Resist All: +{0}%', value: [0, 12, 21, 28, 35, 40, 44, 47, 49, 52, 54, 56, 58, 60, 61, 62, 64, 64, 65, 66, 67] }
              ]
            }
          ]
        },
        {
          id: "cs",
          name: 'Combat Skills',
          src: 'back.jpg',
          skills: [
            {
              id: 'leap',
              top: '19.7',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'cs', skillId: 'leapattack' }],
              name: 'Leap',
              desc: ['Jump Into The Air And Knock Back', 'Nearby Enemies When You Land'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 4.6, 7.3, 8.6, 10, 11.3, 12, 12.6, 13.3, 14, 14, 14.6, 14.6, 15.3, 16, 16, 16, 16.6, 16.6, 16.6, 16.6] }
              ]
            },
            {
              id: 'leapattack',
              top: '52.1',
              left: '13.1',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'leap' }],
              name: 'Leap Attack',
              desc: ['Leaps To And Attacks Target Enemy', 'In One Swift Assault'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 0, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
                { text: 'Damage: +{0}%', value: [0, 100, 130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490, 520, 550, 580, 610, 640, 670] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'leap', statIdx: [1], value: [10], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'whirlwind',
              top: '84.5',
              left: '13.1',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'leapattack' }, { treeId: 'cs', skillId: 'concentrate' }],
              name: 'Whirlwind',
              desc: ['A Whirling Dance Of Death', 'That Cuts A Path Through The', 'Legions Of Your Enemies'],
              level: '30',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95] },
                { text: 'Damage: {0}%', value: [0, -50, -42, -34, -26, -18, -10, -2, 6, 14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102] },
                { text: 'Mana Cost: {0}', value: [0, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22] }
              ]
            },
            {
              id: 'bash',
              top: '3.4',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'stun' }, { treeId: 'cs', skillId: 'concentrate' }, { treeId: 'cs', skillId: 'doubleswing' }],
              name: 'Bash',
              desc: ['Powerful Blow That Increases The Damage Done', 'To Enemies And Knocks Them Back'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115] },
                { text: 'Damage: +{0}%', value: [0, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145] },
                { text: 'Damage: +{0}', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'stun', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'cs', skillId: 'concentrate', statIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'stun',
              top: '35.8',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'bash' }],
              required: [{ treeId: 'cs', skillId: 'bash' }],
              name: 'Stun',
              desc: ['Stuns Your Target For A Short Time', 'And Increases Your Attack Rating'],
              level: '12',
              add: [
                { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110] },
                { text: 'Stun Length: {0} Seconds', value: [0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.2, 4.3, 4.4, 4.5] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'bash', addIdx: [0], value: [8], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'cs', skillId: 'concentrate', statIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0}% Attack Rating Per Level' },
                { treeId: 'wc', skillId: 'warcry', statIdx: [1], value: [5], type: ['rate'], text: '{n}: +{0}% Duration Per Level' }
              ]
            },
            {
              id: 'concentrate',
              top: '52.1',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'bash' }, { treeId: 'cs', skillId: 'stun' }],
              required: [{ treeId: 'cs', skillId: 'stun' }],
              name: 'Concentrate',
              desc: ['Attack That Is Not Interruptible And', 'Improves Attack Rating And Defense'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250] },
                { text: 'Damage: +{0}%', value: [0, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160] },
                { text: 'Defense: +{0}%', value: [0, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'bash', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'wc', skillId: 'battleorders', statIdx: [1], value: [10], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'cs', skillId: 'berserk', statIdx: [1], value: [1], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'berserk',
              top: '84.5',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'concentrate' }, { treeId: 'cs', skillId: 'frenzy' }],
              required: [{ treeId: 'cs', skillId: 'concentrate' }],
              name: 'Berserk',
              desc: ['A Powerful But Reckless Attack', 'That Incrfeases Damage And Attack Rating', 'But Decreases Defense'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355, 370, 385] },
                { text: 'Magic Damage: +{0}%', value: [0, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435] },
                { text: 'Duration: {0} Seconds', value: [0, 2.7, 2.4, 2.2, 2.1, 2.0, 1.9, 1.8, 1.7, 1.6, 1.6, 1.6, 1.5, 1.5, 1.4, 1.4, 1.4, 1.4, 1.3, 1.3, 1.3] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'howl', statIdx: [1], value: [10], type: ['sum'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'wc', skillId: 'shout', statIdx: [1], value: [10], type: ['sum'], text: '{n}: +{0}% Magic Damage Per Level' },
              ]
            },
            {
              id: 'doubleswing',
              top: '19.7',
              left: '72.1',
              tooltip: 'right',
              affected: [{ treeId: 'cs', skillId: 'doublethrow' }, { treeId: 'cs', skillId: 'frenzy' }],
              required: [{ treeId: 'cs', skillId: 'bash' }],
              name: 'Double Swing',
              desc: ['When Two Weapons Are Equipped', 'Attacks Two Targets If Possible.', 'Or One Target Twice'],
              level: '6',
              add: [
                { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110] },
                { text: 'Mana Cost: {0}', value: [0, 1.0, 0.8, 0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.5, -0.6, -0.7, -0.8, -1.0, -1.1, -1.2, -1.3] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'bash', addIdx: [0], value: [10], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'doublethrow',
              top: '35.8',
              left: '72.1',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'doubleswing' }],
              name: 'Double Throw',
              desc: ['Allows You To Throw Two Different', 'Throwing Weapons At The Same Time'],
              level: '12',
              add: [
                { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'doubleswing', addIdx: [0], value: [8], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'frenzy',
              top: '68.5',
              left: '72.1',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'doublethrow' }],
              name: 'Frenzy',
              desc: ['Allows You To Swing Two Weapons At Once', 'Each Successful Attack Increases Your Overall Speed', 'Requires Yor To Equip Two Weapons'],
              level: '24',
              add: [
                { text: 'Magic Damage: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: 'Duration: {0} Seconds', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] },
                { text: 'Mana Cost: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 100, 107, 114, 121, 128, 135, 142, 149, 156, 163, 170, 177, 184, 191, 198, 205, 212, 219, 226, 233] },
                { text: 'Damage: +{0}%', value: [0, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185] },
                { text: 'Attack Speed: +{0}-{1}%', value: [0, [7, 7], [7, 13], [7, 18], [7, 22], [7, 25], [7, 27], [7, 29], [7, 31], [7, 33], [7, 34], [7, 35], [7, 36], [7, 37], [7, 38], [7, 39], [7, 40], [7, 40], [7, 41], [7, 41], [7, 42]] },
                { text: 'Run/Walk Speed: +{0}-{1}%', value: [0, [47, 47], [47, 68], [47, 84], [47, 99], [47, 110], [47, 119], [47, 126], [47, 131], [47, 138], [47, 142], [47, 147], [47, 151], [47, 155], [47, 158], [47, 160], [47, 164], [47, 165], [47, 167], [47, 169], [47, 171]] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'doubleswing', statIdx: [1], value: [8], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'wc', skillId: 'taunt', statIdx: [1], value: [8], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'cs', skillId: 'berserk', addIdx: [0], value: [1], type: ['sum'], text: '{n}: +{0}% Magic Damage Per Level' }
              ]
            }
          ]
        }
      ],
      paladin: [
        {
          id: "da",
          name: 'Defensive Auras',
          src: 'back.jpg',
          skills: [
            {
              id: 'prayer',
              top: '3.4',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'da', skillId: 'cleansing' },
                { treeId: 'da', skillId: 'meditation' },
                { treeId: 'cs', skillId: 'holybolt' }
              ],
              name: 'Prayer',
              desc: ['When Active, Aura Slowly Regenerates', 'The Life Of You And Your Party'],
              level: '1',
              stat: [
                { text: 'Heals: +{0}', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 25] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] },
                { text: 'Mana Cost: {0} Per Second', value: [0, 1, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.4, 2.5, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.1, 4.3, 4.5] }
              ]
            },
            {
              id: 'cleansing',
              top: '35.9',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'oa', skillId: 'sanctuary' }
              ],
              required: [{ treeId: 'da', skillId: 'prayer' }],
              name: 'Cleansing',
              desc: ['When Active, Aura Reduces The Length', 'Of Time You and Your Party', 'Will Remain Poisoned or Cursed'],
              level: '12',
              add: [
                { text: '{n}: +{0} Life Healed Every 2 Seconds', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Duration Reduced By {0}%', value: [0, 39, 46, 51, 56, 60, 63, 65, 67, 69, 70, 72, 73, 75, 76, 76, 78, 78, 79, 79, 80] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ],
              bonus: [
                { treeId: 'da', skillId: 'prayer', addIdx: [0], value: [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21, 23]], type: ['array'] }
              ]
            },
            {
              id: 'meditation',
              top: '68.4',
              left: '13.3',
              tooltip: 'left',
              required: [{ treeId: 'da', skillId: 'prayer' }, { treeId: 'da', skillId: 'cleansing' }],
              name: 'Meditation',
              desc: ['When Active, Aura Increases Mana Recovery', 'For You And Your Party'],
              level: '24',
              add: [
                { text: '{n}: +{0} Life Healed Every 2 Seconds', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
              ],
              stat: [
                { text: 'Mana Recovery Rate: +{0}%', value: [0, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775] },
                { text: 'Radius: {0} Yards', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
              ],
              bonus: [
                { treeId: 'da', skillId: 'prayer', addIdx: [0], value: [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21, 23]], type: ['array'] }
              ]
            },
            {
              id: 'defiance',
              top: '19.7',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'holyshield' }
              ],
              name: 'Defiance',
              desc: ['When Active, Aura Increases The Defense', 'Of You And Your Party'],
              level: '6',
              stat: [
                { text: 'Defense: +{0}%', value: [0, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'vigor',
              top: '52.2',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blessedhammer' },
                { treeId: 'cs', skillId: 'charge' }
              ],
              required: [{ treeId: 'da', skillId: 'cleansing' }, { treeId: 'da', skillId: 'defiance' }],
              name: 'Vigor',
              desc: ['When Active, Aura Increases Stamina Recovery Rate', 'Maximum Stamina', 'And Movement Speed For You And Your Party'],
              level: '18',
              stat: [
                { text: 'Run/Walk Speed: +{0}%', value: [0, 13, 18, 22, 25, 28, 30, 32, 33, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42, 42, 43] },
                { text: 'Max Stamina: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525] },
                { text: 'Stamina Recovery Rate: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'redemption',
              top: '84.5',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'sacrifice' }
              ],
              required: [{ treeId: 'da', skillId: 'vigor' }],
              name: 'Redemption',
              desc: ['When Active, Aura Attempts to Redeem', 'The Souls Of Slain Enemies To Give', 'You Life And Mana'],
              level: '30',
              stat: [
                { text: 'Chance To Redeem Soul: {0}%', value: [0, 23, 34, 42, 49, 55, 59, 63, 65, 69, 71, 73, 75, 77, 79, 80, 82, 82, 83, 84, 85] },
                { text: 'Life/Mana Recovered: {0}', value: [0, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120] }
              ]
            },
            {
              id: 'resistfire',
              top: '3.4',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyfire' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Resist Fire',
              desc: ['When Active, Aura Decreases Fire Damage', 'Done To You And Your Party'],
              level: '1',
              stat: [
                { text: 'Resist Fire: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'resistcold',
              top: '19.7',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyfreeze' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Resist Cold',
              desc: ['When Active, Aura Decreases Cold Damage', 'Done To You And Your Party'],
              level: '6',
              stat: [
                { text: 'Resist Cold: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
              ]
            },
            {
              id: 'resistlightning',
              top: '35.9',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyshock' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Resist Lightning',
              desc: ['When Active, Aura Decreases Lightning Damage', 'Done To You And Your Party'],
              level: '12',
              stat: [
                { text: 'Resist Lightning: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'salvation',
              top: '84.5',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyfire' },
                { treeId: 'oa', skillId: 'holyfreeze' },
                { treeId: 'oa', skillId: 'holyshock' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Salvation',
              desc: ['When Active, Aura Decreases Fire, Cold And Lightning', 'Damage', 'Done To You And Your Party'],
              level: '30',
              stat: [
                { text: 'Resist All: +{0}%', value: [0, 60, 68, 75, 80, 85, 88, 91, 93, 96, 97, 99, 101, 102, 103, 104, 106, 106, 107, 108, 108] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            }
          ]
        },
        {
          id: "oa",
          name: 'Offensive Auras',
          src: 'defensive_auras/back.jpg',
          skills: [{
            id: 'might',
            top: '3.4',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'charge' }
            ],
            name: 'Might',
            desc: ['When Active, Aura Increases The Damage', 'Done By You And Your Party'],
            level: '1',
            stat: [
              { text: 'Damage: +{0}%', value: [0, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'blessedaim',
            top: '35.5',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'blessedhammer' }
            ],
            required: [{ treeId: 'oa', skillId: 'might' }],
            name: 'Blessed Aim',
            desc: ['When Active, Aura Increases The Attack Rating', 'For You and Your Party'],
            level: '12',
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'concentration',
            top: '52',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'oa', skillId: 'blessedaim' }],
            name: 'Concentration',
            desc: ['When Active, Aura Increases The Damage And', 'Decreases The Chance', 'That The Attack Will Be Interrupted For You And', 'Your Party'],
            level: '18',
            add: [
              { text: 'Chance Uninterruptable: {0}%', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
            ],
            stat: [
              { text: 'Damage: +{0}%', value: [0, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'fanaticism',
            top: '84.3',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'sacrifice' }
            ],
            required: [{ treeId: 'oa', skillId: 'concentration' }],
            name: 'Fanaticism',
            desc: ['When Active, Aura Increases Damage, Attack Speed', 'And Attack Rating For You And Your Party'],
            level: '30',
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135] },
              { text: 'Your Damage: +{0}%', value: [0, 50, 67, 84, 101, 118, 135, 152, 169, 186, 203, 220, 237, 254, 271, 288, 305, 322, 339, 356, 373] },
              { text: 'Party Damage: +{0}%', value: [0, 25, 33, 42, 50, 59, 67, 76, 84, 93, 101, 110, 118, 127, 135, 144, 152, 161, 169, 178, 186] },
              { text: 'Attack Speed: +{0}%', value: [0, 14, 18, 20, 23, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35] },
              { text: 'Radius: {0} Yards', value: [0, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3, 18, 18.6, 19.3, 20] }
            ]
          },
          {
            id: 'holyfire',
            top: '19.7',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'might' }],
            name: 'Holy Fire',
            desc: ['When Active, Aura Damages Nearby Enemies', 'With Heavenly Flames', 'Adds Fire Damage To Your Attack'],
            level: '6',
            stat: [
              { text: 'Fire Damage: {0}-{1} To Your Attack', value: [0, [6, 18], [9, 21], [12, 24], [15, 27], [18, 30], [21, 33], [24, 36], [27, 39], [33, 45], [39, 51], [45, 57], [51, 63], [57, 69], [63, 75], [69, 81], [75, 87], [84, 96], [93, 105], [102, 114], [111, 123]] },
              { text: 'Fire Damage: {0}-{1}', value: [0, [1, 3], [1.5, 3.5], [2.5, 4.5], [3, 5], [4, 6], [4.5, 6.5], [5.5, 7.5], [6, 8], [7, 9], [8.5, 10.5], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 16], [15, 17], [16, 18], [17, 20], [18, 21]] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistfire', statIdx: [0, 1], value: [18, 18], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [6, 6], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' }
            ]
          },
          {
            id: 'holyfreeze',
            top: '52.1',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'holyfire' }],
            name: 'Holy Freeze',
            desc: ['When Active, Aura Freezes Nearby Monsters', 'Adds Cold Damage To Your Attack'],
            level: '18',
            stat: [
              { text: 'Cold Damage: {0}-{1} To Your Attack', value: [0, [10, 15], [15, 20], [20, 25], [25, 30], [30, 35], [35, 40], [40, 45], [45, 50], [55, 60], [65, 70], [75, 80], [85, 90], [95, 100], [105, 110], [115, 120], [125, 130], [140, 145], [155, 160], [170, 175], [185, 190]] },
              { text: 'Cold Damage: {0}-{1}', value: [0, [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24], [25, 26], [28, 29], [31, 32], [34, 35], [37, 38]] },
              { text: 'Enemies Slowed {0}%', value: [0, 30, 34, 37, 40, 42, 44, 45, 46, 48, 48, 49, 50, 51, 51, 52, 53, 53, 53, 54, 54] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistcold', statIdx: [0, 1], value: [15, 15], type: ['rate', 'rate'], text: '{n}: +{0}% Cold Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [7, 7], type: ['rate', 'rate'], text: '{n}: +{0}% Cold Damage Per Level' }
            ]
          },
          {
            id: 'holyshock',
            top: '68.1',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'fistoftheheavens' }
            ],
            required: [{ treeId: 'oa', skillId: 'holyfreeze' }],
            name: 'Holy Shock',
            desc: ['When Active, Aura Causes Pulses Of Electricity', 'To Damage Nearby Enemies', 'Adds Lightning Damage To Your Attack'],
            level: '24',
            stat: [
              { text: 'Lightning Damage: {0}-{1} To Your Attack', value: [0, [1, 60], [1, 96], [1, 132], [1, 168], [1, 204], [1, 240], [1, 276], [1, 312], [1, 360], [1, 408], [1, 456], [1, 504], [1, 552], [1, 600], [1, 648], [1, 696], [1, 756], [1, 816], [1, 876], [1, 936]] },
              { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 10], [1, 16], [1, 22], [1, 28], [1, 34], [1, 40], [1, 46], [1, 52], [1, 60], [1, 68], [1, 76], [1, 84], [1, 92], [1, 100], [1, 108], [1, 116], [1, 126], [1, 136], [1, 146], [1, 156]] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistlightning', statIdx: [0, 1], value: [12, 12], type: ['rate', 'rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [4, 4], type: ['rate', 'rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
            ]
          },
          {
            id: 'thorns',
            top: '19.7',
            left: '72.2',
            tooltip: 'right',
            name: 'Thorns',
            desc: ['When Active, Reflects Damage Done To You', 'Back At Your Attacker'],
            level: '6',
            stat: [
              { text: '{0}% Damage Returned', value: [0, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650, 690, 730, 770, 810, 850, 890, 930, 970, 1010] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'sanctuary',
            top: '68.1',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'oa', skillId: 'holyfreeze' }, { treeId: 'oa', skillId: 'thorns' }],
            name: 'Sanctuary',
            desc: ['When Active, Aura Damages The Undead', 'And Knocks Them Back'],
            level: '24',
            stat: [
              { text: 'Damage To Undead: +{0}%', value: [0, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720] },
              { text: 'Magic Damage: {0}-{1}', value: [0, [8, 16], [12, 20], [16, 24], [20, 28], [24, 32], [28, 36], [32, 40], [36, 44], [40, 49], [44, 54], [48, 59], [52, 64], [56, 69], [60, 74], [64, 79], [68, 84], [73, 90], [78, 96], [83, 102], [88, 108]] },
              { text: 'Radius: {0} Yards', value: [0, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'cleansing', statIdx: [1], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
            ]
          },
          {
            id: 'conviction',
            top: '84.5',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'oa', skillId: 'sanctuary' }],
            name: 'Conviction',
            desc: ['When Active, Aura Reduces The Defenses', 'And Resistances Of Nearby Enemies'],
            level: '30',
            add: [
              { text: 'Radius: {0} Yards', value: [13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3] }
            ],
            stat: [
              { text: 'Defense: -{0}%', value: [0, 49, 56, 61, 66, 70, 73, 75, 77, 79, 80, 82, 83, 85, 86, 86, 88, 88, 89, 89, 90] },
              { text: 'Resist All: -{0}%', value: [0, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125] }
            ]
          }]
        },
        {
          id: "cs",
          name: 'Combat Skills',
          src: 'defensive_auras/back.jpg',
          skills: [{
            id: 'sacrifice',
            top: '3.4',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'zeal' }
            ],
            name: 'Sacrifice',
            desc: ['Increased Accuracy And Damage', 'At The Cost Of Life'],
            level: '1',
            add: [
              { text: '{0}% Damage To Self', value: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] }
            ],
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 104, 111, 118, 125, 132, 139, 146, 153] },
              { text: 'Damage: +{0}%', value: [0, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435, 450, 465] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'redemption', statIdx: [1], value: [15], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
              { treeId: 'oa', skillId: 'fanaticism', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
            ]
          },
          {
            id: 'zeal',
            top: '35.9',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'sacrifice' }],
            name: 'Zeal',
            desc: ['Allows You To Attack Multiple Adjacent Enemies', 'With A Single Attack'],
            level: '12',
            add: [
              { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
            ],
            stat: [
              { text: '{0} Hits', value: [0, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
              { text: 'Attack Rating: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
              { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96] }
            ],
            bonus: [
              { treeId: 'cs', skillId: 'sacrifice', statIdx: [2], value: [12], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
            ]
          },
          {
            id: 'vengeance',
            top: '52.2',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'zeal' }],
            name: 'Vengeance',
            desc: ['Fire, Lightning And Cold Damage Are Added', 'To Each Successful Attack'],
            level: '18',
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
              { text: 'Fire Damage: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: 'Cold Damage: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: 'Cold Length: +{0} Seconds', value: [0, 1.2, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0, 6.6, 7.2, 7.8, 8.4, 9.0, 9.6, 10.2, 10.8, 11.4, 12.0, 12.6] },
              { text: 'Lightning Damage: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: 'Mana Cost: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistfire', statIdx: [1], value: [10], type: ['sum'], text: '{n}: +{0}% Fire Damage Per Level' },
              { treeId: 'da', skillId: 'resistcold', statIdx: [2], value: [10], type: ['sum'], text: '{n}: +{0}% Cold Damage Per Level' },
              { treeId: 'da', skillId: 'resistlightning', statIdx: [4], value: [10], type: ['sum'], text: '{n}: +{0}% Lightning Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [1, 2, 4], value: [2, 2, 2], type: ['sum', 'sum', 'sum'], text: '{n}: +{0}% Elemental Damage Per Level' }
            ]
          },
          {
            id: 'conversion',
            top: '68.1',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'vengeance' }],
            name: 'Conversion',
            desc: ['Converts Monsters To Fight Against', 'Other Foul Demons And Beasts'],
            level: '24',
            add: [
              { text: 'Duration: {0} Seconds', value: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16] },
              { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
            ],
            stat: [
              { text: 'Change To Convert: {0}%', value: [0, 7, 13, 18, 22, 25, 27, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42] }
            ]
          },
          {
            id: 'holybolt',
            top: '19.7',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'fistoftheheavens' }
            ],
            name: 'Holy Bolt',
            desc: ['A Bolt Of Divine Energy', 'That Damages Undead Enemies'],
            level: '6',
            stat: [
              { text: 'Magic Damage: {0}-{1}', value: [0, [8, 16], [16, 24], [24, 32], [32, 40], [40, 48], [48, 56], [56, 64], [64, 72], [74, 83], [84, 94], [94, 105], [104, 116], [114, 127], [124, 138], [134, 149], [144, 160], [157, 175], [170, 190], [183, 205], [196, 220]] },
              { text: 'Heals: {0}-{1}', value: [0, [1, 6], [3, 10], [5, 14], [7, 18], [9, 22], [11, 26], [13, 30], [15, 34], [17, 38], [19, 42], [21, 46], [23, 50], [25, 54], [27, 58], [29, 62], [31, 66], [33, 70], [35, 74], [37, 78], [39, 82]] },
              { text: 'Mana Cost: {0}', value: [0, 2, 2, 2.1, 2.1, 2.2, 2.3, 2.3, 2.4, 2.5, 2.5, 2.6, 2.6, 2.7, 2.8, 2.8, 2.9, 3, 3, 3.1, 3.1] }
            ],
            bonus: [
              { treeId: 'cs', skillId: 'blessedhammer', statIdx: [0], value: [50], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
              { treeId: 'cs', skillId: 'fistoftheheavens', statIdx: [0], value: [50], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
              { treeId: 'da', skillId: 'prayer', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Life Healed Per Level' }
            ]
          },
          {
            id: 'blessedhammer',
            top: '52.2',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'holybolt' }
            ],
            required: [{ treeId: 'cs', skillId: 'holybolt' }],
            name: 'Blessed Hammer',
            desc: ['Summons An Ethereal Hammer That', 'Spirals Outwards Damaging Enemies It Hits'],
            level: '18',
            add: [
              { text: 'Damage To Undead: +{0}%', value: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150] }
            ],
            stat: [
              { text: 'Magic Damage: {0}-{1}', value: [0, [12, 16], [20, 24], [28, 32], [36, 40], [44, 48], [52, 56], [60, 64], [68, 72], [78, 82], [88, 92], [98, 102], [108, 112], [118, 122], [128, 132], [138, 142], [148, 152], [160, 164], [172, 176], [184, 188], [196, 200]] },
              { text: 'Mana Cost: {0}', value: [0, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7] }
            ],
            bonus: [
              { treeId: 'oa', skillId: 'blessedaim', statIdx: [0], value: [14], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
              { treeId: 'da', skillId: 'vigor', statIdx: [0], value: [14], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
            ]
          },
          {
            id: 'fistoftheheavens',
            top: '84.5',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'holybolt' }
            ],
            required: [{ treeId: 'cs', skillId: 'conversion' }, { treeId: 'cs', skillId: 'blessedhammer' }],
            name: 'Fist Of The Heavens',
            desc: ['Lightning Strikes Your Target As Holy Bolts', 'Seek Out Nearby Enemies'],
            level: '30',
            add: [
              { text: 'Mana Cost: {0}', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] }
            ],
            stat: [
              { text: 'Lightning Damage: {0}-{1}', value: [0, [150, 200], [165, 215], [180, 230], [195, 245], [210, 260], [225, 275], [240, 290], [255, 305], [285, 335], [315, 365], [345, 395], [375, 425], [405, 455], [435, 485], [465, 515], [495, 545], [540, 590], [585, 635], [630, 680], [675, 725]] },
              { text: 'Holy Bolt Damage: {0}-{1}', value: [0, [40, 50], [46, 56], [52, 62], [58, 68], [64, 74], [70, 80], [76, 86], [82, 92], [92, 102], [102, 112], [112, 122], [122, 132], [132, 142], [142, 152], [152, 162], [162, 172], [178, 188], [194, 204], [210, 220], [226, 236]] },
            ],
            bonus: [
              { treeId: 'cs', skillId: 'holybolt', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Holy Bolt Damage Per Level' },
              { treeId: 'oa', skillId: 'holyshock', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
            ]
          },
          {
            id: 'smite',
            top: '3.4',
            left: '72.2',
            tooltip: 'right',
            name: 'Smite',
            desc: ['Temporarily Stun Your Enemy', 'By Bashing It With Your Shield'],
            level: '1',
            add: [
              { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
            ],
            stat: [
              { text: 'Damage: +{0}%', value: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300] },
              { text: 'Stun Length: {0} seconds', value: [0, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4] }
            ]
          },
          {
            id: 'charge',
            top: '35.9',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'cs', skillId: 'smite' }],
            name: 'Charge',
            desc: ['Charge Into Battle And Attack An Enemy'],
            level: '12',
            add: [
              { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
            ],
            stat: [
              { text: 'Attack: +{0}%', value: [0, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
              { text: 'Damage: +{0}%', value: [0, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'vigor', statIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
              { treeId: 'oa', skillId: 'might', statIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
            ]
          },
          {
            id: 'holyshield',
            top: '68.1',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'cs', skillId: 'blessedhammer' }, { treeId: 'cs', skillId: 'charge' }],
            name: 'Holy Shield',
            desc: ['When Active, Aura Decreases Fire, Cold And Lightning', 'Damage', 'Done To You And Your Party'],
            level: '30',
            add: [
              { text: 'Mana Cost: {0}', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
            ],
            stat: [
              { text: 'Smite Damage: {0}-{1}', value: [0, [3, 6], [5, 8], [7, 10], [9, 12], [11, 14], [13, 16], [15, 18], [17, 20], [20, 23], [23, 26], [26, 29], [29, 32], [32, 35], [35, 38], [38, 41], [41, 44], [45, 48], [49, 52], [53, 56], [57, 60]] },
              { text: 'Defense: +{0}%', value: [0, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310] },
              { text: 'Successful Blocking: +{0}%', value: [0, 14, 18, 20, 23, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35] },
              { text: 'Duration: {0} Seconds', value: [0, 30, 55, 80, 105, 130, 155, 180, 205, 230, 255, 280, 305, 330, 355, 380, 405, 430, 455, 480, 505] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'defiance', statIdx: [1], value: [15], type: ['sum'], text: '{n}: +{0}% Defense Per Level' }
            ]
          }]
        }
      ],
      sorceress: [
        {
          id: "cs",
          name: 'Cold Spells',
          src: 'back.jpg',
          skills: [
            {
              id: 'frostnova',
              top: '20',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'cs', skillId: 'icebolt' }
              ],
              name: 'Frost Nova',
              desc: ['Creates An Expanding Ring Of Ice That Damages', 'And Slows All Nearby Enemies'],
              level: '6',
              stat: [
                { text: 'Cold Damage: {0}-{1}', value: [0, [2, 4], [4, 6], [6, 9], [8, 11], [10, 14], [12, 16], [14, 19], [16, 21], [19, 25], [22, 28], [25, 32], [28, 35], [31, 39], [34, 42], [37, 46], [40, 49], [44, 54], [48, 58], [52, 63], [56, 67]] },
                { text: 'Cold Length: {0} Seconds', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
                { text: 'Mana Cost: {0}', value: [0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'blizzard', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'blizzard',
              top: '68.7',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'cs', skillId: 'frostnova' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'iceblast' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              required: [
                { treeId: 'cs', skillId: 'frostnova' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              name: 'Blizzard',
              desc: ['Summons Massive Shards Of Ice To Destroy Your Enemies'],
              level: '24',
              add: [
                { text: 'Duration: {0} Seconds', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Cold Damage: {0}-{1}', value: [0, [45, 75], [60, 91], [75, 107, 90, 123], [105, 139], [120, 155], [135, 171], [150, 187], [180, 218], [210, 249], [240, 280], [270, 311], [300, 342], [330, 373], [360, 404], [390, 435], [435, 481], [480, 527], [525, 573], [570, 619]] },
                { text: 'Mana Cost: {0}', value: [0, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'iceblast', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'glacialspike', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'frozenorb',
              top: '84.6',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'cs', skillId: 'frostnova' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'iceblast' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              required: [{ treeId: 'cs', skillId: 'blizzard' }],
              name: 'Frozen Orb',
              desc: ['Creates A Magical Globe That Sprays A Torrent Of Ice Bolts', 'To Lay Waste To Your Enemies'],
              level: '30',
              stat: [
                { text: 'Cold Damage: {0}-{1}', value: [0, [40, 45], [50, 54], [59, 64], [69, 74], [79, 84], [89, 94], [99, 103], [108, 113], [120, 125], [132, 137], [144, 149], [155, 160], [167, 172], [179, 184], [191, 196], [202, 207], [216, 221], [230, 235], [244, 249], [257, 262]] },
                { text: 'Cold Length: {0} Seconds', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
                { text: 'Mana Cost: {0}', value: [0, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [2], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'icebolt',
              top: '3.8',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blizzard' },
                { treeId: 'cs', skillId: 'frozenorb' },
                { treeId: 'cs', skillId: 'iceblast' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              name: 'Ice Bolt',
              desc: ['Creates A Magical Bolt Of Ice', 'That Damages And Slows Your Enemies'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: 'Cold Damage: {0}-{1}', value: [0, [3, 5], [4, 6], [5, 8], [6, 9], [7, 11], [8, 12], [9, 14], [10, 15], [12, 18], [14, 20], [16, 23], [18, 25], [20, 28], [22, 30], [24, 33], [26, 36], [29, 39], [32, 42], [35, 46], [38, 49]] },
                { text: 'Cold Length: {0} Seconds', value: [0, 6, 7.4, 8.8, 10.2, 11.6, 13, 14.4, 15.8, 17.2, 18.6, 20, 21, 22.8, 24.2, 25.6, 27, 28.4, 29.8, 31.2, 32.6] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'frostnova', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'iceblast', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'glacialspike', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'blizzard', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'iceblast',
              top: '20',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blizzard' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              required: [{ treeId: 'cs', skillId: 'icebolt' }],
              name: 'Ice Blast',
              desc: ['Creates A Magical Sphere Of Ice That', 'Damages And Freezes Your Enemy'],
              level: '6',
              stat: [
                { text: 'Cold Damage: {0}-{1}', value: [0, [8, 12], [15, 20], [22, 27], [29, 35], [36, 42], [43, 50], [50, 57], [57, 64], [71, 79], [85, 93], [99, 108], [113, 123], [127, 137], [141, 151], [155, 166], [169, 180], [190, 202], [211, 224], [232, 245], [253, 266]] },
                { text: 'Freeze Length: {0} Seconds', value: [0, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6, 6.8] },
                { text: 'Mana Cost: {0}', value: [0, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'glacialspike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: +{0}% Freeze Length Per Level' },
                { treeId: 'cs', skillId: 'blizzard', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'glacialspike',
              top: '52.5',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blizzard' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'iceblast' }
              ],
              required: [{ treeId: 'cs', skillId: 'iceblast' }],
              name: 'Glacial Spike',
              desc: ['Creates A Magical Ice Comet', 'That Freezes Or Kills Nearby Enemies'],
              level: '18',
              add: [
                { text: 'Radius: {0} Yards', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
              ],
              stat: [
                { text: 'Cold Damage: {0}-{1}', value: [0, [16, 24], [23, 31], [30, 39], [37, 47], [44, 54], [51, 61], [58, 69], [65, 77], [78, 90], [91, 103], [104, 117], [117, 130], [130, 144], [143, 158], [156, 171], [169, 184], [183, 199], [197, 213], [211, 228], [225, 242]] },
                { text: 'Freeze Length: {0} Seconds', value: [0, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2.7, 2.8, 2.9, 3, 3.2, 3.3, 3.4, 3.5, 3.6, 3.8, 3.9, 4, 4.1, 4.2] },
                { text: 'Mana Cost: {0}', value: [0, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'iceblast', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'blizzard', statIdx: [1], value: [3], type: ['rate'], text: '{n}: +{0}% Freeze Length Per Level' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'coldmastery',
              top: '84.7',
              left: '42.8',
              tooltip: 'middle',
              name: 'Cold Mastery',
              desc: ['Passive - Increases The Damage Of Your Cold Spells', 'By Piercing Enemies\' Resistances To Cold'],
              level: '30',
              stat: [
                { text: '-{0}% To Enemy Cold Resistance', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115] }
              ]
            },
            {
              id: 'frozenarmor',
              top: '3.7',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'cs', skillId: 'shiverarmor' },
                { treeId: 'cs', skillId: 'chillingarmor' }
              ],
              name: 'Frozen Armor',
              desc: ['Increases Your Defense', 'And Freezes Enemies That Hit You'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Defense: {0}%', value: [0, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125] },
                { text: 'Freezes For {0} Seconds', value: [0, 1.2, 1.3, 1.4, 1.5, 1.6, 1.8, 1.9, 2, 2.1, 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 3, 3.1, 3.2, 3.3, 3.4] },
                { text: 'Duration: {0} Seconds', value: [0, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0}% Freeze Length Per Level' },
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0}% Freeze Length Per Level' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: +{0} Seconds Per Level' }
              ]
            },
            {
              id: 'shiverarmor',
              top: '35.9',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'cs', skillId: 'frozenarmor' },
                { treeId: 'cs', skillId: 'chillingarmor' }
              ],
              required: [{ treeId: 'cs', skillId: 'frozenarmor' }],
              name: 'Shiver Armor',
              desc: ['Increases Your Defense', 'Freezes And Damages Enemies That Hit You'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: 'Defense: {0}%', value: [0, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123, 129, 135, 141, 147, 153, 159] },
                { text: 'Cold Damage: {0}-{1}', value: [0, [6, 8], [8, 11], [10, 13], [12, 15], [14, 18], [16, 21], [18, 23], [20, 25], [23, 29], [26, 33], [29, 36], [32, 40], [35, 43], [38, 46], [41, 50], [44, 54], [48, 58], [52, 63], [56, 67], [60, 71]] },
                { text: 'Cold Length: {0} Seconds', value: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: 'Duration: {0} Seconds', value: [0, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [1], value: [9], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [3], value: [10], type: ['sum'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [1], value: [9], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [3], value: [10], type: ['sum'], text: '{n}: +{0} Seconds Per Level' }
              ]
            },
            {
              id: 'chillingarmor',
              top: '68.6',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'cs', skillId: 'frozenarmor' },
                { treeId: 'cs', skillId: 'shiverarmor' }
              ],
              required: [{ treeId: 'cs', skillId: 'shiverarmor' }],
              name: 'Chilling Armor',
              desc: ['Increases Defense And Discharges An Ice Bolt In Retaliation', 'Against Ranged Attackers'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: 'Defense: {0}%', value: [0, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140] },
                { text: 'Cold Damage: {0}-{1}', value: [0, [4, 6], [5, 8], [6, 9], [7, 10], [8, 12], [9, 14], [10, 15], [11, 16], [13, 19], [15, 22], [17, 24], [19, 27], [20, 29], [23, 31], [25, 34], [27, 36], [30, 40], [33, 43], [36, 47], [39, 51]] },
                { text: 'Duration: {0} Seconds', value: [0, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [1], value: [7], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [1], value: [7], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: +{0} Seconds Per Level' }
              ]
            }
          ]
        },
        {
          id: "ls",
          name: 'Lightning Spells',
          src: 'back.jpg',
          skills: [
            {
              id: 'staticfield',
              top: '19.9',
              left: '13.4',
              tooltip: 'left',
              name: 'Static Field',
              desc: ['Creates An Electrical Field That Reduces Life', 'Of All Nearby Enemies'],
              level: '6',
              add: [
                { text: 'Weakens Enemies By {0}%', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] },
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16] }
              ]
            },
            {
              id: 'nova',
              top: '35.8',
              left: '13.4',
              tooltip: 'left',
              affected: [
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              required: [{ treeId: 'ls', skillId: 'staticfield' }],
              name: 'Nova',
              desc: ['Creates An Expanding Ring Of Lightning', 'To Shock Nearby Enemies'],
              level: '12',
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 20], [7, 28], [13, 36], [19, 44], [25, 52], [31, 60], [37, 68], [43, 76], [50, 85], [57, 94], [64, 103], [71, 112], [78, 121], [85, 130], [92, 139], [99, 148], [107, 158], [115, 168], [123, 178], [131, 188]] },
                { text: 'Mana Cost: {0}', value: [0, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'thunderstorm',
              top: '68.7',
              left: '13.4',
              tooltip: 'left',
              required: [{ treeId: 'ls', skillId: 'nova' }],
              name: 'Thunder Storm',
              desc: ['Summons A Deadly Thunderstorm That Strikes', 'Your Enemies With Bolts Of Lightning'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19] }
              ],
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 100], [11, 110], [21, 120], [31, 130], [41, 140], [51, 150], [61, 160], [71, 170], [81, 180], [91, 190], [101, 200], [111, 210], [121, 220], [131, 230], [141, 240], [151, 250], [162, 261], [173, 272], [184, 283], [195, 294]] },
                { text: 'Duration: {0} Seconds', value: [0, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'chargedbolt',
              top: '3.6',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              name: 'Charged Bolt',
              desc: ['Creates Multiple, Randomly Directed', 'Bolts Of Electrical Energy'],
              level: '1',
              stat: [
                { text: '{0} Bolts', value: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
                { text: 'Lightning Damage: {0}-{1}', value: [0, [2, 4], [2, 4], [3, 5], [3, 5], [4, 6], [4, 6], [5, 7], [5, 7], [6, 8], [6, 8], [7, 9], [7, 9], [8, 10], [8, 10], [9, 11], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15]] },
                { text: 'Mana Cost: {0}', value: [0, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightning', statIdx: [1], value: [6], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [1], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'lightning',
              top: '35.8',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              required: [{ treeId: 'ls', skillId: 'chargedbolt' }],
              name: 'Lightning',
              desc: ['Creates A Powerful Lightning Bolt', 'To Lay Waste To Your Enemies'],
              level: '12',
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 40], [1, 48], [1, 56], [1, 64], [1, 72], [1, 80], [1, 88], [1, 96], [1, 108], [1, 120], [1, 132], [1, 144], [1, 156], [1, 168], [1, 180], [1, 192], [1, 212], [1, 232], [1, 252], [1, 272]] },
                { text: 'Mana Cost: {0}', value: [0, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'chargedbolt', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ls', skillId: 'nova', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ls', skillId: 'chainlightning', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'chainlightning',
              top: '52.4',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'lightning' }
              ],
              required: [{ treeId: 'ls', skillId: 'lightning' }],
              name: 'Chain Lightning',
              desc: ['Creates A Bolt Of Lightning That', 'Arcs Through Several Targets'],
              level: '18',
              stat: [
                { text: '{0} Hits', value: [0, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9] },
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 38], [1, 48], [1, 58], [1, 68], [1, 78], [1, 88], [1, 99], [1, 109], [1, 121], [1, 133], [1, 145], [1, 157], [1, 169], [1, 181], [1, 193], [1, 205], [1, 219], [1, 233], [1, 247], [1, 261]] },
                { text: 'Mana Cost: {0}', value: [0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'chargedbolt', statIdx: [1], value: [4], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ls', skillId: 'nova', statIdx: [1], value: [4], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ls', skillId: 'lightning', statIdx: [1], value: [4], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [1], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'lightningmastery',
              top: '84.5',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'nova' },
                { treeId: 'ls', skillId: 'thunderstorm' },
                { treeId: 'ls', skillId: 'chargedbolt' },
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' },
                { treeId: 'ls', skillId: 'telekinesis' }
              ],
              name: 'Lightning Mastery',
              desc: ['Passive - Increases All Damage Caused By Your Lightning Spells'],
              level: '30',
              stat: [
                { text: 'Lightning Damage: +{0}%', value: [0, 50, 62, 74, 86, 98, 110, 122, 134, 146, 158, 170, 182, 194, 206, 218, 230, 242, 254, 266, 278] }
              ]
            },
            {
              id: 'telekinesis',
              top: '19.8',
              left: '72.4',
              tooltip: 'right',
              affected: [
                { treeId: 'ls', skillId: 'energyshield' }
              ],
              name: 'Telekinesis',
              desc: ['Uses The Power Of Your Mind To', 'Pick Up Items. Use Objects,', 'And Knock Back Enemies'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 21]] },
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'teleport',
              top: '52.3',
              left: '72.4',
              tooltip: 'right',
              required: [{ treeId: 'ls', skillId: 'telekinesis' }],
              name: 'Teleport',
              desc: ['Instantly Moves To A Destination Within Your Line Of Sight'],
              level: '18',
              stat: [
                { text: 'Mana Cost: {0}', value: [0, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5] }
              ]
            },
            {
              id: 'energyshield',
              top: '68.6',
              left: '72.4',
              tooltip: 'right',
              required: [{ treeId: 'ls', skillId: 'chainlightning' }, { treeId: 'ls', skillId: 'teleport' }],
              name: 'Energy Shield',
              desc: ['Creates A Magical Shield That Consumes Mana', 'Instead Of Health When You Take Damage'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: 'Absorbs {0}%', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 57, 59, 61, 63, 65, 67, 69, 71, 72, 73, 74, 75] },
                { text: 'Duration: {0} Seconds', value: [0, 144, 204, 264, 324, 384, 444, 504, 564, 624, 684, 744, 804, 864, 924, 984, 1044, 1104, 1164, 1224, 1284] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'telekinesis' }
              ]
            }
          ]
        },
        {
          id: "fs",
          name: 'Fire Spells',
          src: 'back.jpg',
          skills: [
            {
              id: 'inferno',
              top: '19.5',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'fs', skillId: 'firewall' },
                { treeId: 'fs', skillId: 'meteor' }
              ],
              name: 'Inferno',
              desc: ['Creates A Continuous Jet Of Flame', 'To Scorch Your Enemies'],
              level: '6',
              add: [
                { text: 'Minimum Mana Required To Cast: {0}', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }
              ],
              stat: [
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [12, 25], [21, 34], [31, 43], [40, 53], [50, 62], [59, 71], [68, 81], [78, 90], [88, 101], [98, 111], [108, 122], [118, 132], [128, 143], [139, 153], [149, 164], [159, 175], [170, 186], [181, 197], [192, 208], [203, 220]] },
                { text: 'Range: {0} Yards', value: [0, 3.3, 3.3, 4, 4.6, 5.3, 5.3, 6, 6.6, 7.3, 7.3, 8, 8.6, 9.3, 9.3, 10, 10.6, 11.3, 11.3, 12, 12.6] },
                { text: 'Mana Cost: {0} Per Second', value: [0, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [0], value: [13], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'blaze',
              top: '35.7',
              left: '13.3',
              tooltip: 'left',
              required: [{ treeId: 'fs', skillId: 'inferno' }],
              name: 'Blaze',
              desc: ['Creates A Wall Of Fire', 'In Your Wake To Scorch Your Enemies'],
              level: '12',
              stat: [
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [18, 37], [28, 46], [37, 56], [46, 65], [56, 75], [65, 84], [75, 93], [84, 103], [98, 117], [112, 131], [126, 145], [140, 159], [154, 173], [168, 187], [182, 201], [196, 215], [215, 234], [234, 253], [253, 271], [271, 290]] },
                { text: 'Fire Duration: {0} Seconds', value: [0, 4.6, 5.6, 6.6, 7.6, 8.6, 9.6, 10.6, 11.6, 12.6, 13.6, 14.6, 15.6, 16.6, 17.6, 18.6, 19.6, 20.6, 21.6, 22.6, 23.6] },
                { text: 'Mana Cost: {0}', value: [0, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [0], value: [4], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firewall', statIdx: [0], value: [1], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'firewall',
              top: '52.1',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'fs', skillId: 'blaze' }
              ],
              required: [{ treeId: 'fs', skillId: 'blaze' }],
              name: 'Fire Wall',
              desc: ['Creates A Wall Of Flame That', 'Burns Nearby Enemies'],
              level: '18',
              add: [
                { text: 'Fire Duration: {0} Seconds', value: [3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6] }
              ],
              stat: [
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [70, 94], [112, 136], [155, 178], [197, 220], [239, 262], [281, 304], [320, 343], [366, 389], [431, 455], [497, 520], [563, 586], [628, 652], [694, 717], [759, 783], [825, 848], [891, 914], [989, 1012], [1088, 1110], [1186, 1209], [1284, 1307]] },
                { text: 'Range: {0} Yards', value: [0, 4, 6, 7, 8, 10, 11, 12, 14, 15, 16, 18, 19, 20, 22, 23, 24, 26, 27, 28, 30] },
                { text: 'Mana Cost: {0}', value: [0, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [0], value: [4], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'inferno', statIdx: [0], value: [1], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'firebolt',
              top: '3.3',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'fireball' },
                { treeId: 'fs', skillId: 'meteor' },
                { treeId: 'fs', skillId: 'hydra' }
              ],
              name: 'Fire Bolt',
              desc: ['Creates A Magical Flaming Missile'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [3, 6], [4, 7], [6, 9], [7, 10], [9, 12], [10, 13], [12, 15], [13, 16], [15, 19], [17, 22], [19, 25], [21, 28], [23, 31], [25, 34], [27, 37], [29, 40], [33, 45], [37, 50], [41, 55], [45, 60]] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'fireball', statIdx: [0], value: [16], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'meteor', statIdx: [0], value: [16], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'fireball',
              top: '35.7',
              left: '43',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'firebolt' },
                { treeId: 'fs', skillId: 'meteor' },
                { treeId: 'fs', skillId: 'hydra' }
              ],
              required: [{ treeId: 'fs', skillId: 'firebolt' }],
              name: 'Fire Ball',
              desc: ['Creates An Explosive Sphere Of Fiery Death', 'To Engulf Your Enemies'],
              level: '12',
              add: [
                { text: 'Radius: {0} Yards', value: [2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [6, 14], [13, 22], [19, 29], [26, 36], [32, 44], [38, 51], [45, 59], [51, 66], [63, 79], [74, 92], [86, 104], [98, 116], [109, 129], [121, 142], [132, 154], [143, 166], [158, 181], [172, 197], [186, 212], [200, 227]] },
                { text: 'Mana Cost: {0}', value: [0, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'firebolt', statIdx: [0], value: [14], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'meteor', statIdx: [0], value: [14], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'meteor',
              top: '68.4',
              left: '43',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'firebolt' },
                { treeId: 'fs', skillId: 'fireball' }
              ],
              required: [{ treeId: 'fs', skillId: 'firewall' }, { treeId: 'fs', skillId: 'fireball' }],
              name: 'Meteor',
              desc: ['Summons A Meteor From The Heavens', 'To Crush And Incinerate Your Enemies'],
              level: '24',
              add: [
                { text: 'Radius: {0} Yards', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [80, 100], [103, 125], [126, 150], [149, 175], [172, 200], [195, 225], [218, 250], [241, 275], [280, 316], [319, 357], [358, 398], [397, 439], [436, 480], [475, 521], [514, 562], [553, 603], [633, 684], [711, 765], [790, 846], [869, 927]] },
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [34, 57], [43, 66], [52, 75], [62, 87], [70, 96], [82, 104], [91, 114], [100, 123], [111, 134], [123, 146], [134, 160], [146, 170], [160, 182], [170, 194], [182, 204], [194, 216], [207, 230], [221, 246], [236, 260], [250, 273]] },
                { text: 'Mana Cost: {0}', value: [0, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'firebolt', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'fireball', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'inferno', statIdx: [1], value: [3], type: ['rate'], text: '{n}: +{0}% Average Fire Damage Per Second Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0, 1], value: [[0], [0]], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'firemastery',
              top: '84.2',
              left: '43',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'inferno' },
                { treeId: 'fs', skillId: 'blaze' },
                { treeId: 'fs', skillId: 'firewall' },
                { treeId: 'fs', skillId: 'firebolt' },
                { treeId: 'fs', skillId: 'fireball' },
                { treeId: 'fs', skillId: 'meteor' },
                { treeId: 'fs', skillId: 'enchant' },
                { treeId: 'fs', skillId: 'hydra' }
              ],
              name: 'Fire Mastery',
              desc: ['Passive - Increases All Damage Caused By Your Fire Spells'],
              level: '30',
              stat: [
                { text: 'Fire Damage: +{0}%', value: [0, 30, 37, 44, 51, 58, 65, 72, 79, 86, 93, 100, 107, 114, 121, 128, 135, 142, 149, 156, 163] },
              ]
            },
            {
              id: 'warmth',
              top: '3.5',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'fs', skillId: 'inferno' },
                { treeId: 'fs', skillId: 'blaze' },
                { treeId: 'fs', skillId: 'firewall' },
                { treeId: 'fs', skillId: 'enchant' }
              ],
              name: 'Warmth',
              desc: ['Passive - Increases The Rate At Which You Recover Mana'],
              level: '1',
              stat: [
                { text: 'Mana Recovery Rate: +{0}%', value: [0, 30, 42, 54, 66, 78, 90, 102, 114, 126, 138, 150, 162, 174, 186, 198, 210, 222, 234, 246, 258] }
              ]
            },
            {
              id: 'enchant',
              top: '52.1',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'fs', skillId: 'fireball' }, { treeId: 'fs', skillId: 'warmth' }],
              name: 'Enchant',
              desc: ['Enchants Equipped Weapon Of Targeted Character Or Minion', 'Adds Fire Damage To Melee Weapons', 'Adds One-Third Fire Damage To Ranged Weapons'],
              level: '18',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [8, 10], [10, 12], [11, 15], [12, 18], [14, 20], [15, 23], [17, 25], [19, 27], [22, 32], [25, 36], [29, 41], [33, 45], [36, 50], [40, 55], [43, 59], [46, 64], [52, 70], [57, 77], [63, 83], [68, 89]] },
                { text: 'Duration: {0} Seconds', value: [0, 144, 168, 192, 216, 240, 264, 288, 312, 336, 360, 384, 408, 432, 456, 480, 504, 528, 552, 576, 600] },
                { text: 'Mana Cost: {0}', value: [0, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [1], value: [9], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [1], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'hydra',
              top: '84.2',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'fs', skillId: 'enchant' }],
              name: 'Hydra',
              desc: ['Summons A Multi-Headed Beast Of Flame', 'To Reduce Your Enemies To Ashes'],
              level: '30',
              add: [
                { text: 'Duration: {0} Seconds', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
              ],
              stat: [
                { text: 'Hydra Fire Damage: {0}-{1}', value: [0, [14, 18], [19, 26], [25, 33], [31, 39], [36, 46], [41, 52], [47, 59], [52, 65], [60, 73], [67, 82], [75, 90], [83, 99], [90, 107], [98, 116], [105, 124], [113, 133], [122, 144], [132, 154], [141, 165], [150, 175]] },
                { text: 'Mana Cost: {0}', value: [0, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'firebolt', statIdx: [0], value: [3], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'fireball', statIdx: [0], value: [3], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            }
          ]
        }
      ],
      druid: [
        {
          id: "em",
          name: 'Elemental',
          src: 'back.jpg',
          skills: [
            {
              id: 'firestorm',
              top: '3.4',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'em', skillId: 'moltenboulder' }, { treeId: 'em', skillId: 'fissure' }, { treeId: 'em', skillId: 'armageddon' }, { treeId: 'ss', skillId: 'fireclaws' }],
              name: 'Fire Storm',
              desc: ['Unleash Fiery Chaos To Burn Your Enemies'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [3, 7], [7, 10], [10, 14], [14, 17], [17, 21], [21, 24], [24, 28], [28, 31], [33, 38], [39, 45], [45, 52], [51, 59], [57, 66], [63, 73], [69, 80], [75, 87], [83, 97], [91, 106], [99, 116], [107, 125]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'moltenboulder', statIdx: [0], value: [23], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'fissure', statIdx: [0], value: [23], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'moltenboulder',
              top: '19.6',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'em', skillId: 'firestorm' }, { treeId: 'em', skillId: 'volcano' }, { treeId: 'em', skillId: 'armageddon' }, { treeId: 'ss', skillId: 'fireclaws' }],
              required: [{ treeId: 'em', skillId: 'firestorm' }],
              name: 'Molten Boulder',
              desc: ['Launch A Boulder Of Flaming Hot Magma', 'That Knocks Back Your Enemies'],
              level: '6',
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [6, 12], [10, 17], [14, 22], [18, 27], [22, 32], [26, 37], [30, 42], [34, 47], [41, 55], [48, 63], [55, 71], [62, 79], [69, 87], [76, 95], [83, 103], [90, 111], [100, 122], [110, 133], [120, 144], [130, 155]] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [6, 12], [10, 17], [14, 22], [18, 27], [22, 32], [26, 37], [30, 42], [34, 47], [41, 55], [48, 63], [55, 71], [62, 79], [69, 87], [76, 95], [83, 103], [90, 111], [100, 122], [110, 133], [120, 144], [130, 155]] },
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [12, 16], [19, 24], [25, 30], [33, 38], [40, 45], [47, 51], [54, 59], [61, 65], [69, 74], [77, 82], [86, 90], [94, 99], [102, 107], [110, 115], [118, 123], [126, 131], [136, 140], [145, 150], [155, 160], [164, 169]] },
                { text: 'Mana Cost: {0}', value: [0, 10, 10.5, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'volcano', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'firestorm', statIdx: [1, 2], value: [8, 8], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'fissure',
              top: '35.6',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'em', skillId: 'firestorm' }, { treeId: 'em', skillId: 'volcano' }, { treeId: 'em', skillId: 'armageddon' }, { treeId: 'ss', skillId: 'fireclaws' }],
              required: [{ treeId: 'em', skillId: 'moltenboulder' }],
              name: 'Fissure',
              desc: ['Open Volcanic Vents Below Your Enemies,', 'Burning Them To A Crisp'],
              level: '12',
              add: [
                { text: 'Duration: {0} Seconds', value: [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6] },
                { text: 'Mana Cost: {0}', value: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [15, 25], [21, 31], [27, 37], [33, 43], [39, 49], [45, 55], [51, 61], [57, 67], [69, 79], [81, 91], [93, 103], [105, 115], [117, 127], [129, 139], [141, 151], [153, 163], [169, 179], [185, 195], [201, 211], [217, 227]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'firestorm', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'volcano', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'volcano',
              top: '68.4',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'em', skillId: 'moltenboulder' }, { treeId: 'em', skillId: 'fissure' }, { treeId: 'em', skillId: 'armageddon' }, { treeId: 'ss', skillId: 'fireclaws' }],
              required: [{ treeId: 'em', skillId: 'fissure' }],
              name: 'Volcano',
              desc: ['Summon Forth A Volcano To Rain Death', 'And Destruction Over Your Enemies'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [8, 10], [10, 12], [12, 14], [14, 16], [16, 18], [18, 20], [20, 22], [22, 24], [26, 28], [30, 32], [34, 36], [38, 40], [42, 44], [46, 48], [50, 52], [54, 56], [60, 62], [66, 68], [72, 74], [78, 80]] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [8, 10], [10, 12], [12, 14], [14, 16], [16, 18], [18, 20], [20, 22], [22, 24], [26, 28], [30, 32], [34, 36], [38, 40], [42, 44], [46, 48], [50, 52], [54, 56], [60, 62], [66, 68], [72, 74], [78, 80]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'moltenboulder', statIdx: [0], value: [12], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'fissure', statIdx: [1], value: [12], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'armageddon', statIdx: [1], value: [12], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'armageddon',
              top: '84.3',
              left: '13.2',
              tooltip: 'left',
              affected: [{ treeId: 'em', skillId: 'volcano' }],
              required: [{ treeId: 'em', skillId: 'volcano' }, { treeId: 'em', skillId: 'hurricane' }],
              name: 'Armageddon',
              desc: ['Create A Meteor Shower To Rain Fiery', 'Destruction On Nearby Enemies'],
              level: '30',
              add: [
                { text: 'Duration: {0} Seconds', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
                { text: 'Radius: {0} Yards', value: [5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3, 5.3] },
                { text: 'Mana Cost: {0}', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
              ],
              stat: [
                { text: 'Fire Damage: {0}-{1}', value: [0, [25, 75], [40, 91], [55, 107], [70, 123], [85, 139], [100, 155], [115, 171], [130, 187], [150, 209], [170, 231], [190, 253], [210, 275], [230, 297], [250, 319], [270, 341], [290, 363], [315, 390], [340, 417], [365, 444], [390, 471]] },
                { text: 'Average Fire Damage: {0}-{1} Per Second', value: [0, [10, 13], [16, 20], [22, 26], [27, 31], [34, 37], [40, 44], [46, 50], [51, 55], [59, 63], [65, 70], [73, 77], [79, 84], [87, 91], [93, 98], [100, 105], [108, 112], [116, 120], [124, 127], [131, 136], [140, 143]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'fissure', addIdx: [0], value: [2], type: ['rate'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'em', skillId: 'firestorm', statIdx: [0, 1], value: [14, 14], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'moltenboulder', statIdx: [0, 1], value: [14, 14], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'volcano', statIdx: [0, 1], value: [14, 14], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'twister',
              top: '52',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'em', skillId: 'tornado' }, { treeId: 'em', skillId: 'hurricane' }, { treeId: 'em', skillId: 'cyclonearmor' }],
              required: [{ treeId: 'em', skillId: 'cyclonearmor' }],
              name: 'Twister',
              desc: ['Release Several Small Whirlwinds That', 'Cut A Path Through Your Enemies'],
              level: '18',
              add: [
                { text: 'Stun Length: {0} Seconds', value: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4] },
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [6, 8], [8, 10], [10, 12], [12, 14], [14, 16], [16, 18], [18, 20], [20, 22], [23, 25], [27, 29], [30, 32], [34, 36], [37, 39], [41, 43], [44, 46], [48, 50], [53, 55], [58, 61], [63, 66], [68, 72]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'tornado', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'hurricane', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'tornado',
              top: '68.4',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'em', skillId: 'twister' }, { treeId: 'em', skillId: 'hurricane' }, { treeId: 'em', skillId: 'cyclonearmor' }],
              required: [{ treeId: 'em', skillId: 'twister' }],
              name: 'Tornado',
              desc: ['Create A Funnel Of Wind And Debris', 'To Blast Your Enemies'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [25, 35], [33, 43], [41, 51], [49, 59], [57, 67], [65, 75], [73, 83], [81, 91], [95, 106], [109, 121], [123, 136], [137, 151], [151, 166], [165, 181], [179, 196], [193, 211], [213, 232], [233, 253], [253, 274], [273, 295]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'cyclonearmor', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'twister', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'hurricane', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'hurricane',
              top: '84.3',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'em', skillId: 'twister' }, { treeId: 'em', skillId: 'tornado' }, { treeId: 'em', skillId: 'arcticblast' }, { treeId: 'em', skillId: 'cyclonearmor' }],
              required: [{ treeId: 'em', skillId: 'tornado' }],
              name: 'Hurricane',
              desc: ['Create A Massive Storm Of Wind And', 'Debris To Pound Your Enemies To Bits'],
              level: '30',
              add: [
                { text: 'Duration: {0} Seconds', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
                { text: 'Radius: {0} Yards', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] },
                { text: 'Mana Cost: {0}', value: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30] }
              ],
              stat: [
                { text: 'Cold Damage: {0}-{1}', value: [0, [25, 50], [32, 57], [39, 64], [46, 71], [53, 78], [60, 85], [67, 92], [74, 99], [84, 109], [94, 119], [104, 129], [114, 139], [124, 149], [134, 159], [144, 169], [154, 179], [166, 191], [178, 203], [190, 215], [202, 227]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'cyclonearmor', addIdx: [0], value: [2], type: ['sum'], text: '{n}: +{0} Seconds Per Level' },
                { treeId: 'em', skillId: 'twister', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'tornado', statIdx: [0], value: [9], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'arcticblast',
              top: '19.6',
              left: '72.4',
              tooltip: 'right',
              name: 'Arctic Blast',
              desc: ['Blast A Continuous Jet Of Ice', 'To Burn Your Enemies With Frost'],
              level: '6',
              add: [
                { text: 'Minimum Mana Required To Cast: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Average Cold Damage: {0}-{1} Per Second', value: [0, [8, 15], [14, 21], [20, 28], [26, 34], [33, 40], [39, 46], [45, 53], [51, 59], [58, 66], [66, 74], [73, 81], [80, 89], [87, 96], [94, 103], [101, 111], [108, 118], [116, 126], [123, 135], [131, 143], [139, 151]] },
                { text: 'Cold Length: {0} Seconds', value: [0, 4, 4.6, 5.2, 5.8, 6.4, 7, 7.6, 8.2, 8.8, 9.4, 10, 10.6, 11.2, 11.8, 12.4, 13, 13.6, 14.2, 14.8, 15.4] },
                { text: 'Range: {0} Yards', value: [0, 5.3, 6, 6, 6.6, 6.6, 7.3, 7.3, 8, 8, 8.6, 8.6, 9.3, 9.3, 10, 10, 10.6, 10.6, 11.3, 11.3, 12] },
                { text: 'Mana Cost: {0} Per Second', value: [0, 4, 5, 6, 7, 7, 8, 9, 10, 10, 11, 12, 13, 14, 14, 15, 16, 17, 17, 18, 19] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'hurricane', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' },
                { treeId: 'em', skillId: 'cyclonearmor', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Cold Damage Per Level' }
              ]
            },
            {
              id: 'cyclonearmor',
              top: '35.6',
              left: '72.4',
              tooltip: 'right',
              affected: [{ treeId: 'em', skillId: 'tornado' }, { treeId: 'em', skillId: 'hurricane' }, { treeId: 'em', skillId: 'arcticblast' }],
              required: [{ treeId: 'em', skillId: 'arcticblast' }],
              name: 'Cyclone Armor',
              desc: ['Shield Yourself From Damage Caused By', 'Fire, Cold, And Lightning'],
              level: '12',
              stat: [
                { text: 'Absorbs {0} Damage', value: [0, 40, 52, 64, 76, 88, 100, 112, 124, 136, 148, 160, 172, 184, 196, 208, 220, 232, 244, 256, 268] },
                { text: 'Mana Cost: {0}', value: [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'twister', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'tornado', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Damage Per Level' },
                { treeId: 'em', skillId: 'hurricane', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            }
          ]
        },
        {
          id: "ss",
          name: 'Shape Shifting',
          src: 'back.jpg',
          skills: [
            {
              id: 'werewolf',
              top: '3.4',
              left: '13.1',
              tooltip: 'left',
              name: 'Werewolf',
              desc: ['Transform Into A Werewolf'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15] },
                { text: 'Max Life: +{0}%', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] },
                { text: 'Max Stamina: +{0}%', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] },
                { text: 'Duration: {0} Seconds', value: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
                { text: 'Attack Speed: +{0}%', value: [0, 20, 28, 35, 40, 45, 48, 51, 53, 56, 57, 59, 61, 62, 63, 64, 66, 66, 67, 68, 68] }
              ],
              bonus: [
                { treeId: 'ss', skillId: 'lycanthropy' }
              ]
            },
            {
              id: 'feralrage',
              top: '35.7',
              left: '13.1',
              tooltip: 'left',
              required: [{ treeId: 'ss', skillId: 'werewolf' }],
              name: 'Feral Rage',
              desc: ['When In Werewolf From,', 'Go Into A Frenzied Rage To Steal', 'Increasing Amounts Of Life From Your Enemies'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
                { text: 'Duration: {0} Seconds', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
                { text: 'Run/Walk Speed: +{0}-{1}%', value: [0, [19, 31], [19, 36], [19, 36], [19, 40], [19, 40], [19, 43], [19, 43], [19, 45], [19, 45], [19, 47], [19, 47], [19, 49], [19, 49], [19, 50], [19, 50], [19, 52], [19, 52], [19, 53], [19, 53], [19, 55]] },
                { text: 'Life Steal: +{0}-{1}%', value: [0, [4, 12], [4, 16], [4, 20], [4, 24], [4, 28], [4, 32], [4, 36], [4, 40], [4, 44], [4, 48], [4, 52], [4, 56], [4, 60], [4, 64], [4, 68], [4, 72], [4, 76], [4, 80], [4, 84], [4, 88]] },
                { text: 'Damage: +{0}%', value: [0, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145] }
              ]
            },
            {
              id: 'rabies',
              top: '52.1',
              left: '13.1',
              tooltip: 'left',
              required: [{ treeId: 'ss', skillId: 'feralrage' }],
              name: 'Rabies',
              desc: ['When In Werewolf Form,', 'Bite Your Enemies', 'To Inflict Them With Disease', 'That Spreads To Other Monsters'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148, 155, 162, 169, 176, 183] },
                { text: 'Poison Damage: {0}-{1}', value: [0, [18, 43], [34, 61], [52, 82], [73, 105], [96, 131], [121, 159], [150, 190], [180, 223], [219, 264], [261, 308], [306, 356], [354, 406], [405, 460], [460, 517], [517, 577], [578, 640], [658, 723], [742, 810], [831, 901], [924, 996]] },
                { text: 'Over {0} Seconds', value: [0, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 11.6] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'poisoncreeper', statIdx: [1], value: [18], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'fury',
              top: '84.4',
              left: '13.1',
              tooltip: 'left',
              required: [{ treeId: 'ss', skillId: 'rabies' }],
              name: 'Fury',
              desc: ['When In Werewolf Form, Attack', 'Either Multiple Adjacent Targets', 'Or One Target Multiple Times'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: '{0} Hits', value: [0, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                { text: 'Attack Rating: +{0}%', value: [0, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148, 155, 162, 169, 176, 183] },
                { text: 'Damage: +{0}%', value: [0, 100, 117, 134, 151, 168, 185, 202, 219, 236, 253, 270, 287, 304, 321, 338, 355, 372, 389, 406, 423] }
              ]
            },
            {
              id: 'lycanthropy',
              top: '3.4',
              left: '42.8',
              tooltip: 'middle',
              affected: [{ treeId: 'ss', skillId: 'werewolf' }, { treeId: 'ss', skillId: 'werebear' }],
              required: [{ treeId: 'ss', skillId: 'werewolf' }],
              name: 'Lycanthropy',
              desc: ['Passive - Improves Duration And Life', 'When In Werewolf Or Werebear Form'],
              level: '1',
              stat: [
                { text: 'Max Life: +{0}%', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115] },
                { text: 'Duration: +{0} Seconds', value: [0, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420] }
              ]
            },
            {
              id: 'fireclaws',
              top: '52.1',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'ss', skillId: 'feralrage' }, { treeId: 'ss', skillId: 'maul' }],
              name: 'Fire Claws',
              desc: ['When In Werewolf Or Werebear', 'Form, Maul Your Enemies', 'With A Fiery Claw Attack'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [15, 20], [23, 28], [31, 36], [39, 44], [47, 52], [55, 60], [63, 68], [71, 76], [83, 88], [95, 100], [107, 112], [119, 124], [131, 136], [143, 148], [155, 160], [167, 172], [187, 194], [207, 216], [227, 238], [247, 260]] }
              ],
              bonus: [
                { treeId: 'em', skillId: 'firestorm', statIdx: [1], value: [22], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'moltenboulder', statIdx: [1], value: [22], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'fissure', statIdx: [1], value: [22], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' },
                { treeId: 'em', skillId: 'volcano', statIdx: [1], value: [22], type: ['rate'], text: '{n}: +{0}% Fire Damage Per Level' }
              ]
            },
            {
              id: 'hunger',
              top: '68.4',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'ss', skillId: 'fireclaws' }],
              name: 'Hunger',
              desc: ['When In Werewolf Or Werebear', 'Form, Bite your Enemies', 'To Gain Life And Mana'],
              level: '24',
              add: [
                { text: 'Damage: -{0}%', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] },
                { text: 'Mana Cost: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240] },
                { text: 'Life Steal: +{0}%', value: [0, 72, 90, 104, 116, 125, 132, 138, 143, 149, 152, 156, 159, 162, 165, 167, 170, 171, 173, 174, 176] },
                { text: 'Mana Steal: +{0}%', value: [0, 72, 90, 104, 116, 125, 132, 138, 143, 149, 152, 156, 159, 162, 165, 167, 170, 171, 173, 174, 176] }
              ]
            },
            {
              id: 'werebear',
              top: '19.7',
              left: '72.2',
              tooltip: 'right',
              name: 'Werebear',
              desc: ['Transform Into Werebear'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15] },
                { text: 'Max Life: +{0}%', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] },
                { text: 'Duration: {0} Seconds', value: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }
              ],
              stat: [
                { text: 'Damage: +{0}%', value: [0, 55, 63, 71, 79, 87, 95, 103, 111, 119, 127, 135, 143, 151, 159, 167, 175, 183, 191, 199, 207] },
                { text: 'Defense: +{0}%', value: [0, 25, 31, 37, 43, 49, 55, 61, 67, 73, 79, 85, 91, 97, 103, 109, 115, 121, 127, 133, 139] }
              ],
              bonus: [
                { treeId: 'ss', skillId: 'lycanthropy' }
              ]
            },
            {
              id: 'maul',
              top: '35.7',
              left: '72.2',
              tooltip: 'right',
              affected: [{ treeId: 'ss', skillId: 'shockwave' }],
              required: [{ treeId: 'ss', skillId: 'werebear' }],
              name: 'Maul',
              desc: ['When In Werebear Form,', 'Maul Your Enemies', 'For Increasing Extra Damage', 'With Succenssive Hits'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
                { text: 'Duration: {0} Seconds', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
                { text: 'Damage: +{0}-{1}%', value: [0, [20, 60], [20, 80], [20, 80], [20, 100], [20, 100], [20, 120], [20, 120], [20, 140], [20, 140], [20, 160], [20, 160], [20, 180], [20, 180], [20, 200], [20, 200], [20, 220], [20, 220], [20, 240], [20, 240], [20, 260]] },
                { text: 'Stun Length: {0} Seconds', value: [0, 0.9, 1.3, 1.6, 1.9, 2.2, 2.3, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3, 3.1, 3.2, 3.2, 3.2, 3.3, 3.3, 3.4] }
              ]
            },
            {
              id: 'shockwave',
              top: '68.4',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'ss', skillId: 'maul' }],
              name: 'Shock Wave',
              desc: ['When In Werebear Form,', 'Create A Shock Wave', 'That Stuns Nearby Enemies'],
              level: '24',
              add: [
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [10, 20], [13, 23], [16, 26], [19, 29], [22, 32], [25, 35], [28, 38], [31, 41], [36, 46], [41, 51], [46, 56], [51, 61], [56, 66], [61, 71], [66, 76], [71, 81], [78, 88], [85, 95], [92, 102], [99, 109]] },
                { text: 'Stun Length: {0} Seconds', value: [0, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4, 7, 7.6, 8.2, 8.8, 9.4, 10, 10.6, 11.2, 11.8, 12.4, 13] }
              ],
              bonus: [
                { treeId: 'ss', skillId: 'maul', statIdx: [0], value: [5], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            }
          ]
        },
        {
          id: "sm",
          name: 'Summoning',
          src: 'back.jpg',
          skills: [
            {
              id: 'oaksage',
              top: '19.7',
              left: '13.2',
              tooltip: 'left',
              name: 'Oak Sage',
              desc: ['Summon A Spirit Pet That Increases', 'Life For You And Your Party'],
              level: '6',
              stat: [
                { text: 'Life: {0}', value: [0, 60, 78, 96, 114, 132, 150, 168, 186, 204, 222, 240, 258, 276, 294, 312, 330, 348, 366, 384, 402] },
                { text: 'Max Life: +{0}%', value: [0, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125] },
                { text: 'Radius: {0} Yards', value: [0, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36, 37.3, 38.6, 40, 41.3, 42.6, 44, 45.3] },
                { text: 'Mana Cost: {0}', value: [0, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
              ]
            },
            {
              id: 'heartofwolverine',
              top: '52.1',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'sm', skillId: 'oaksage' }],
              name: 'Heart Of Wolverine',
              desc: ['Summon A Spirit Pet That Adds', 'To The Damage And Attack Rating', 'Of You And Your Party'],
              level: '18',
              stat: [
                { text: 'Life: {0}', value: [0, 136, 170, 204, 238, 272, 306, 340, 374, 408, 442, 476, 510, 544, 578, 612, 646, 680, 714, 748, 782] },
                { text: 'Attack Rating: +{0}%', value: [0, 25, 32, 39, 46, 53, 60, 67, 74, 81, 88, 95, 102, 109, 116, 123, 130, 137, 144, 151, 158] },
                { text: 'Damage: +{0}%', value: [0, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 104, 111, 118, 125, 132, 139, 146, 153] },
                { text: 'Radius: {0} Yards', value: [0, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4, 7, 7.6, 8.2, 8.8, 9.4, 10, 10.6, 11.2, 11.8, 12.4, 13] },
                { text: 'Mana Cost: {0}', value: [0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39] }
              ]
            },
            {
              id: 'spiritofbarbs',
              top: '84.4',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'sm', skillId: 'heartofwolverine' }],
              name: 'Spirit Of Barbs',
              desc: ['Summon Spirit Pet That Reflects Damage', 'Taken By Your And Your Party', 'Back At Your Enemies'],
              level: '30',
              stat: [
                { text: 'Life: {0}', value: [0, 213, 266, 319, 372, 426, 479, 532, 585, 639, 692, 745, 798, 852, 905, 958, 1011, 1065, 1118, 1171, 1224] },
                { text: '{0}% Damage Returned', value: [0, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430] },
                { text: 'Radius: {0} Yards', value: [0, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36, 37.3, 38.6, 40, 41.3, 42.6, 44, 45.3] },
                { text: 'Mana Cost: {0}', value: [0, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] }
              ]
            },
            {
              id: 'raven',
              top: '3.3',
              left: '42.9',
              tooltip: 'middle',
              name: 'Raven',
              desc: ['Summon Ravens To Peck Out', 'The Eyes Of Your Enemies'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 16], [15, 17], [16, 18], [17, 19], [18, 20], [19, 21], [20, 22], [21, 23]] },
                { text: '{0} Hits', value: [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
                { text: 'Ravens: {0}', value: [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ]
            },
            {
              id: 'summonspiritwolf',
              top: '19.7',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'sm', skillId: 'summondirewolf' }, { treeId: 'sm', skillId: 'summongrizzly' }],
              required: [{ treeId: 'sm', skillId: 'raven' }],
              name: 'Summon Spirit Wolf',
              desc: ['Summon A Wolf With Teleporting Ability', 'To Fight By Your Side'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15] },
                { text: 'Life: {0}', value: [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [2, 6], [3, 7], [4, 8], [6, 9], [7, 10], [8, 12], [9, 13], [10, 14], [13, 16], [15, 19], [18, 21], [20, 24], [22, 26], [25, 28], [27, 31], [30, 33], [34, 38], [39, 43], [44, 48], [49, 52]] },
                { text: 'Wolves: {0}', value: [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                { text: 'Attack Rating: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 550] },
                { text: 'Defense: +{0}%', value: [0, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'summondirewolf' },
                { treeId: 'sm', skillId: 'summongrizzly' }
              ]
            },
            {
              id: 'summondirewolf',
              top: '52.1',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'sm', skillId: 'summonspiritwolf' }, { treeId: 'sm', skillId: 'summongrizzly' }],
              required: [{ treeId: 'sm', skillId: 'oaksage' }, { treeId: 'sm', skillId: 'summonspiritwolf' }],
              name: 'Summon Dire Wolf',
              desc: ['Summon A Wolf That Becomes Enraged,', 'Eating Corpses To Increase Damage', 'It Does To Enemies'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
                { text: 'Damage: {0}-{1}', value: [0, [8, 13], [10, 16], [12, 18], [14, 20], [17, 23], [19, 25], [21, 27], [24, 29], [27, 33], [31, 36], [34, 40], [37, 43], [41, 47], [44, 50], [48, 54], [51, 57], [58, 64], [65, 71], [72, 78], [79, 85]] },
                { text: 'Wolves: {0}', value: [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
                { text: 'Max Life: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'summonspiritwolf' },
                { treeId: 'sm', skillId: 'summongrizzly' }
              ]
            },
            {
              id: 'summongrizzly',
              top: '84.4',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'sm', skillId: 'summonspiritwolf' }, { treeId: 'sm', skillId: 'summondirewolf' }],
              required: [{ treeId: 'sm', skillId: 'summondirewolf' }],
              name: 'Summon Grizzly',
              desc: ['Summon A Ferocious Grizzly Bear'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
                { text: 'Life: {0}', value: [650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650] }
              ],
              stat: [
                { text: 'Damage: {0}-{1}', value: [0, [37, 75], [54, 94], [72, 116], [93, 139], [115, 165], [140, 192], [166, 222], [195, 253], [235, 297], [279, 344], [326, 393], [376, 446], [428, 502], [484, 561], [543, 622], [605, 687], [684, 769], [767, 855], [854, 945], [945, 1039]] },
                { text: 'Damage: +{0}%', value: [0, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'summonspiritwolf' },
                { treeId: 'sm', skillId: 'summondirewolf' }
              ]
            },
            {
              id: 'poisoncreeper',
              top: '3.3',
              left: '72.3',
              tooltip: 'right',
              affected: [{ treeId: 'ss', skillId: 'rabies' }],
              name: 'Poison Creeper',
              desc: ['Summon A Vine That Spreads', 'Disease To All It Contacts'],
              level: '1',
              add: [
                { text: 'Mana Cost: {0}', value: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 50, 62, 75, 87, 100, 112, 125, 137, 150, 162, 175, 187, 200, 212, 225, 237, 250, 262, 275, 287] },
                { text: 'Poison Damage: {0}-{1}', value: [0, [4, 6], [7, 8], [10, 11], [12, 14], [15, 17], [18, 19], [21, 22], [23, 25], [28, 30], [33, 34], [37, 39], [42, 44], [47, 48], [51, 53], [56, 58], [61, 62], [67, 68], [73, 74], [78, 80], [84, 86]] },
                { text: 'Over {0} Seconds', value: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ]
            },
            {
              id: 'carrionvine',
              top: '35.7',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'sm', skillId: 'poisoncreeper' }],
              name: 'Carrion Vine',
              desc: ['Summon A Vine That Eats Corpses', 'And Replenishes Your Life'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 95, 118, 142, 166, 190, 213, 237, 261, 285, 308, 332, 356, 380, 403, 427, 451, 475, 498, 522, 546] },
                { text: 'Heals: +{0}%', value: [0, 4, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10] }
              ]
            },
            {
              id: 'solarcreeper',
              top: '68.4',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'sm', skillId: 'carrionvine' }],
              name: 'Solar Creeper',
              desc: ['Summon A Vine That Eats Corpses', 'And Replenishes Your Mana'],
              level: '24',
              stat: [
                { text: 'Life: {0}', value: [0, 165, 198, 231, 264, 297, 330, 363, 396, 429, 462, 495, 528, 561, 594, 627, 660, 693, 726, 759, 792] },
                { text: 'Mana Recovery Rate: +{0}%', value: [0, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6] },
                { text: 'Mana Cost: {0}', value: [0, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33] }
              ]
            }
          ]
        }
      ],
      lang: {
        notLearned: 'You have not learned this skill yet',
        remain: 'Skill Choices Remaining',
        required: 'Required Level:',
        reached: 'Maximum Level Reached',
        first: 'First',
        next: 'Next',
        level: 'Level',
        current: 'Current Skill Level',
        bonus: 'Receives Bonuses From',
        max: 'Max',
        back: 'Back',
        info: 'Info',
        reset: 'Reset'
      },
      desc: {
        desktop: [
          { img: ['left-click.png'], text: 'Add skill points' },
          { img: ['right-click.png'], text: 'Back skill points' },
          { key: ['Shift Key'], img: ['left-click.png', 'right-click.png'], text: 'additionally or returns the maximum possible skill' }
        ],
        mobile: [
          { text: '- Max check : When skill is added/back, the maximum value is applied' },
          { text: '- Back check : Back skill points' },
          { text: '- Info check : View skill information' }
        ]
      }
    }
  }
}