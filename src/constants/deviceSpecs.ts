export const DEVICE_SPECS: Record<string, { ram: string, cores: string }> = {
  // Samsung
  // S Series
  'SM-S948B': { ram: '16', cores: '8' }, 'SM-S946B': { ram: '12', cores: '8' }, 'SM-S941B': { ram: '12', cores: '8' }, // S26
  'SM-S938B': { ram: '16', cores: '8' }, 'SM-S936B': { ram: '12', cores: '8' }, 'SM-S931B': { ram: '12', cores: '8' }, // S25
  'SM-S928B': { ram: '12', cores: '8' }, 'SM-S926B': { ram: '12', cores: '8' }, 'SM-S921B': { ram: '8', cores: '8' }, // S24
  'SM-S721B': { ram: '8', cores: '8' }, // S24 FE
  'SM-S918B': { ram: '12', cores: '8' }, 'SM-S916B': { ram: '8', cores: '8' }, 'SM-S911B': { ram: '8', cores: '8' }, // S23
  'SM-S711B': { ram: '8', cores: '8' }, // S23 FE
  'SM-S908B': { ram: '12', cores: '8' }, 'SM-S906B': { ram: '8', cores: '8' }, 'SM-S901B': { ram: '8', cores: '8' }, // S22
  'SM-G998B': { ram: '12', cores: '8' }, 'SM-G996B': { ram: '8', cores: '8' }, 'SM-G991B': { ram: '8', cores: '8' }, // S21
  'SM-G990B': { ram: '8', cores: '8' }, // S21 FE
  'SM-G988B': { ram: '12', cores: '8' }, 'SM-G986B': { ram: '12', cores: '8' }, 'SM-G981B': { ram: '8', cores: '8' }, // S20
  'SM-G780B': { ram: '8', cores: '8' }, // S20 FE
  'SM-G975F': { ram: '8', cores: '8' }, 'SM-G973F': { ram: '8', cores: '8' }, 'SM-G970F': { ram: '6', cores: '8' }, // S10
  'SM-G965F': { ram: '6', cores: '8' }, 'SM-G960F': { ram: '4', cores: '8' }, // S9
  'SM-G955F': { ram: '4', cores: '8' }, 'SM-G950F': { ram: '4', cores: '8' }, // S8
  'SM-G935F': { ram: '4', cores: '8' }, 'SM-G930F': { ram: '4', cores: '8' }, // S7
  'SM-G925F': { ram: '3', cores: '8' }, 'SM-G920F': { ram: '3', cores: '8' }, // S6
  'SM-G900F': { ram: '2', cores: '4' }, 'GT-I9505': { ram: '2', cores: '4' }, 'GT-I9300': { ram: '1', cores: '4' }, // S5, S4, S3
  'GT-I9100': { ram: '1', cores: '2' }, 'GT-I9000': { ram: '0.5', cores: '1' }, // S2, S1

  // Z Series (Foldables)
  'SM-F966B': { ram: '16', cores: '8' }, 'SM-F751B': { ram: '12', cores: '8' }, // Fold 7, Flip 7
  'SM-F956B': { ram: '12', cores: '8' }, 'SM-F741B': { ram: '12', cores: '8' }, // Fold 6, Flip 6
  'SM-F946B': { ram: '12', cores: '8' }, 'SM-F731B': { ram: '8', cores: '8' }, // Fold 5, Flip 5
  'SM-F936B': { ram: '12', cores: '8' }, 'SM-F721B': { ram: '8', cores: '8' }, // Fold 4, Flip 4
  'SM-F926B': { ram: '12', cores: '8' }, 'SM-F711B': { ram: '8', cores: '8' }, // Fold 3, Flip 3
  'SM-F916B': { ram: '12', cores: '8' }, 'SM-F707B': { ram: '8', cores: '8' }, // Fold 2, Flip 5G
  'SM-F900F': { ram: '12', cores: '8' }, 'SM-F700F': { ram: '8', cores: '8' }, // Fold, Flip

  // Note Series
  'SM-N986B': { ram: '12', cores: '8' }, 'SM-N985F': { ram: '8', cores: '8' }, // Note 20
  'SM-N975F': { ram: '12', cores: '8' }, 'SM-N970F': { ram: '8', cores: '8' }, // Note 10
  'SM-N960F': { ram: '6', cores: '8' }, // Note 9
  'SM-N950F': { ram: '6', cores: '8' }, // Note 8
  'SM-N930F': { ram: '4', cores: '8' }, // Note 7
  'SM-N920C': { ram: '4', cores: '8' }, // Note 5
  'SM-N910C': { ram: '3', cores: '8' }, // Note 4
  'SM-N9005': { ram: '3', cores: '4' }, // Note 3

  // A Series
  'Galaxy A76': { ram: '12', cores: '8' }, 'Galaxy A56': { ram: '12', cores: '8' }, 'Galaxy A36': { ram: '8', cores: '8' },
  'Galaxy A75': { ram: '12', cores: '8' }, 'Galaxy A55': { ram: '8', cores: '8' }, 'Galaxy A35': { ram: '8', cores: '8' },
  'Galaxy A74': { ram: '8', cores: '8' }, 'Galaxy A54': { ram: '8', cores: '8' }, 'Galaxy A34': { ram: '6', cores: '8' },
  'Galaxy A73': { ram: '8', cores: '8' }, 'Galaxy A53': { ram: '6', cores: '8' }, 'Galaxy A33': { ram: '6', cores: '8' },
  'Galaxy A72': { ram: '8', cores: '8' }, 'Galaxy A52': { ram: '6', cores: '8' }, 'Galaxy A32': { ram: '4', cores: '8' },
  'Galaxy A71': { ram: '8', cores: '8' }, 'Galaxy A51': { ram: '6', cores: '8' }, 'Galaxy A31': { ram: '4', cores: '8' },
  'Galaxy A70': { ram: '6', cores: '8' }, 'Galaxy A50': { ram: '4', cores: '8' }, 'Galaxy A30': { ram: '4', cores: '8' },
  'Galaxy A9': { ram: '6', cores: '8' }, 'Galaxy A8': { ram: '4', cores: '8' }, 'Galaxy A7': { ram: '4', cores: '8' },
  'Galaxy A5': { ram: '3', cores: '8' }, 'Galaxy A3': { ram: '2', cores: '8' },
  'Galaxy A7 (2017)': { ram: '3', cores: '8' }, 'Galaxy A5 (2017)': { ram: '3', cores: '8' },

  // M Series
  'Galaxy M56': { ram: '12', cores: '8' }, 'Galaxy M55': { ram: '8', cores: '8' }, 'Galaxy M54': { ram: '8', cores: '8' },
  'Galaxy M36': { ram: '8', cores: '8' }, 'Galaxy M35': { ram: '8', cores: '8' }, 'Galaxy M34': { ram: '6', cores: '8' },
  'Galaxy M16': { ram: '6', cores: '8' }, 'Galaxy M15': { ram: '6', cores: '8' }, 'Galaxy M14': { ram: '4', cores: '8' },
  'Galaxy M53': { ram: '8', cores: '8' }, 'Galaxy M33': { ram: '6', cores: '8' }, 'Galaxy M23': { ram: '4', cores: '8' },
  'Galaxy M52': { ram: '8', cores: '8' }, 'Galaxy M32': { ram: '6', cores: '8' }, 'Galaxy M22': { ram: '4', cores: '8' },
  'Galaxy M51': { ram: '8', cores: '8' }, 'Galaxy M31': { ram: '6', cores: '8' }, 'Galaxy M21': { ram: '4', cores: '8' },
  'Galaxy M30': { ram: '4', cores: '8' }, 'Galaxy M20': { ram: '4', cores: '8' }, 'Galaxy M10': { ram: '3', cores: '8' },

  // Tablets
  'Galaxy Tab S11 Ultra': { ram: '16', cores: '8' }, 'Galaxy Tab S11': { ram: '12', cores: '8' },
  'Galaxy Tab S10 Ultra': { ram: '16', cores: '8' }, 'Galaxy Tab S10+': { ram: '12', cores: '8' }, 'Galaxy Tab S10': { ram: '12', cores: '8' },
  'Galaxy Tab S10 FE+': { ram: '8', cores: '8' }, 'Galaxy Tab S10 FE': { ram: '6', cores: '8' },
  'Galaxy Tab S9 Ultra': { ram: '16', cores: '8' }, 'Galaxy Tab S9+': { ram: '12', cores: '8' }, 'Galaxy Tab S9': { ram: '8', cores: '8' },
  'Galaxy Tab S9 FE+': { ram: '8', cores: '8' }, 'Galaxy Tab S9 FE': { ram: '6', cores: '8' },
  'Galaxy Tab S8 Ultra': { ram: '12', cores: '8' }, 'Galaxy Tab S8+': { ram: '8', cores: '8' }, 'Galaxy Tab S8': { ram: '8', cores: '8' },
  'Galaxy Tab S7+': { ram: '8', cores: '8' }, 'Galaxy Tab S7': { ram: '6', cores: '8' },
  'Galaxy Tab S7 FE': { ram: '6', cores: '8' },
  'Galaxy Tab S6': { ram: '6', cores: '8' }, 'Galaxy Tab S5e': { ram: '4', cores: '8' },
  'Galaxy Tab S4': { ram: '4', cores: '8' }, 'Galaxy Tab S3': { ram: '4', cores: '4' },
  'Galaxy Tab S2': { ram: '3', cores: '8' }, 'Galaxy Tab S': { ram: '3', cores: '8' },
  'Galaxy Tab A9': { ram: '4', cores: '8' }, 'Galaxy Tab A8': { ram: '3', cores: '8' },
  'Galaxy Tab A7': { ram: '3', cores: '8' }, 'Galaxy Tab A 10.1': { ram: '2', cores: '8' },
  'Galaxy Tab E': { ram: '1.5', cores: '4' },

  // Lenovo (Smartphones & Tablets)
  // Smartphones
  'Lenovo Legion Y90': { ram: '18', cores: '8' }, 'Lenovo Legion Duel 2': { ram: '16', cores: '8' },
  'Lenovo Legion Duel': { ram: '12', cores: '8' }, 'Lenovo K15 Plus': { ram: '4', cores: '8' },
  'Lenovo K13 Note': { ram: '4', cores: '8' }, 'Lenovo K12 Pro': { ram: '4', cores: '8' },
  'Lenovo K10 Note': { ram: '4', cores: '8' }, 'Lenovo K9': { ram: '3', cores: '8' },
  'Lenovo Vibe P2': { ram: '4', cores: '8' }, 'Lenovo Vibe K5': { ram: '2', cores: '8' },
  'Lenovo Vibe Shot': { ram: '3', cores: '8' }, 'Lenovo Z6 Pro': { ram: '8', cores: '8' },
  'Lenovo Z5 Pro': { ram: '6', cores: '8' }, 'Lenovo Z5s': { ram: '4', cores: '8' },
  'Lenovo S5': { ram: '3', cores: '8' }, 'Lenovo A6000': { ram: '1', cores: '4' },

  // Tablets
  'Lenovo Tab P12 Pro': { ram: '8', cores: '8' }, 'Lenovo Tab P12': { ram: '8', cores: '8' },
  'Lenovo Tab P11 Pro Gen 2': { ram: '8', cores: '8' }, 'Lenovo Tab P11': { ram: '6', cores: '8' },
  'Lenovo Tab P10': { ram: '4', cores: '8' }, 'Lenovo Tab E10': { ram: '2', cores: '4' },
  'Lenovo Tab M10 Plus Gen 3': { ram: '4', cores: '8' }, 'Lenovo Tab M10': { ram: '3', cores: '8' },
  'Lenovo Tab M9': { ram: '3', cores: '8' }, 'Lenovo Tab M8': { ram: '2', cores: '4' },
  'Lenovo Tab M7': { ram: '1', cores: '4' }, 'Lenovo Yoga Tab 13': { ram: '8', cores: '8' },
  'Lenovo Yoga Tab 11': { ram: '4', cores: '8' }, 'Lenovo Yoga Tab 3': { ram: '2', cores: '4' },

  // Google Pixel
  'Pixel 11 Pro': { ram: '16', cores: '10' }, 'Pixel 11': { ram: '12', cores: '10' },
  'Pixel 10 Pro': { ram: '16', cores: '9' }, 'Pixel 10': { ram: '12', cores: '9' },
  'Pixel 9 Pro': { ram: '16', cores: '9' }, 'Pixel 9': { ram: '12', cores: '9' },
  'Pixel 8 Pro': { ram: '12', cores: '9' }, 'Pixel 8': { ram: '8', cores: '9' },
  'Pixel 7 Pro': { ram: '12', cores: '8' }, 'Pixel 7': { ram: '8', cores: '8' },
  'Pixel 6 Pro': { ram: '12', cores: '8' }, 'Pixel 6': { ram: '8', cores: '8' },
  'Pixel 5': { ram: '8', cores: '8' },
  'Pixel 4 XL': { ram: '6', cores: '8' }, 'Pixel 4': { ram: '6', cores: '8' },
  'Pixel 3 XL': { ram: '4', cores: '8' }, 'Pixel 3': { ram: '4', cores: '8' },
  'Pixel 2 XL': { ram: '4', cores: '8' }, 'Pixel 2': { ram: '4', cores: '8' },
  'Pixel XL': { ram: '4', cores: '4' }, 'Pixel': { ram: '4', cores: '4' },
  
  // Low-End / Budget Tablets
  'Galaxy Tab A9': { ram: '4', cores: '8' },
  'Galaxy Tab A8': { ram: '3', cores: '8' },
  'Galaxy Tab A7 Lite': { ram: '3', cores: '8' },
  'Lenovo Tab M10': { ram: '3', cores: '8' },
  'Lenovo Tab M8': { ram: '2', cores: '4' },
  'Amazon Fire HD 10': { ram: '3', cores: '8' },
  'Amazon Fire HD 8': { ram: '2', cores: '6' },
  'Generic Budget Tablet': { ram: '2', cores: '4' },

  // No-Name / Generic / White-Label
  'Generic Android Tablet': { ram: '4', cores: '4' },
  'MTK Generic': { ram: '2', cores: '4' },
  'Spreadtrum Generic': { ram: '2', cores: '4' },
  'Android': { ram: '4', cores: '8' },
  'Tablet': { ram: '4', cores: '8' },

  // Sony Xperia (Smartphones & Tablets 2012-2026)
  // Tablets
  'Xperia Z4 Tablet': { ram: '3', cores: '8' }, 'Xperia Z3 Tablet Compact': { ram: '3', cores: '4' },
  'Xperia Z2 Tablet': { ram: '3', cores: '4' }, 'Xperia Tablet Z': { ram: '2', cores: '4' },
  'Xperia Tablet S': { ram: '1', cores: '4' },

  // Smartphones
  'Xperia 1 VI': { ram: '12', cores: '8' }, 'Xperia 5 V': { ram: '8', cores: '8' },
  'Xperia 1 V': { ram: '12', cores: '8' }, 'Xperia 1 IV': { ram: '12', cores: '8' },
  'Xperia 1 III': { ram: '12', cores: '8' }, 'Xperia 1 II': { ram: '8', cores: '8' },
  'Xperia 1': { ram: '6', cores: '8' }, 'Xperia XZ3': { ram: '4', cores: '8' },
  'Xperia XZ2': { ram: '4', cores: '8' }, 'Xperia XZ1': { ram: '4', cores: '8' },
  'Xperia XZ': { ram: '3', cores: '4' }, 'Xperia Z5': { ram: '3', cores: '8' },
  'Xperia Z3': { ram: '3', cores: '4' }, 'Xperia Z2': { ram: '3', cores: '4' },
  'Xperia Z1': { ram: '2', cores: '4' }, 'Xperia Z': { ram: '2', cores: '4' },
  'Xperia T': { ram: '1', cores: '2' }, 'Xperia S': { ram: '1', cores: '2' },

  // Nothing Phone
  'Nothing Phone (3)': { ram: '12', cores: '8' }, 'Nothing Phone (2)': { ram: '12', cores: '8' },
  'Nothing Phone (1)': { ram: '8', cores: '8' },

  // LG (Iconic Models)
  'LG V60 ThinQ': { ram: '8', cores: '8' }, 'LG G8 ThinQ': { ram: '6', cores: '8' },
  'LG G7 ThinQ': { ram: '4', cores: '8' }, 'LG G6': { ram: '4', cores: '4' },
  'LG G5': { ram: '4', cores: '4' }, 'LG G4': { ram: '3', cores: '6' },
  'LG G3': { ram: '3', cores: '4' }, 'LG G2': { ram: '2', cores: '4' },

  // Vivo & Honor
  'Vivo X100 Pro': { ram: '16', cores: '8' }, 'Vivo X90 Pro': { ram: '12', cores: '8' },
  'Honor Magic6 Pro': { ram: '16', cores: '8' }, 'Honor Magic5 Pro': { ram: '12', cores: '8' },

  // Realme
  'Realme GT6': { ram: '16', cores: '8' }, 'Realme GT5 Pro': { ram: '16', cores: '8' },
  'Realme GT Neo 6 SE': { ram: '12', cores: '8' }, 'Realme GT Neo 5': { ram: '16', cores: '8' },
  'Realme 12 Pro+': { ram: '12', cores: '8' }, 'Realme 11 Pro+': { ram: '12', cores: '8' },
  'Realme 10 Pro+': { ram: '12', cores: '8' }, 'Realme 9 Pro+': { ram: '8', cores: '8' },
  'Realme C67': { ram: '8', cores: '8' }, 'Realme C55': { ram: '8', cores: '8' },

  // Infinix & Tecno
  'Infinix GT 20 Pro': { ram: '12', cores: '8' }, 'Infinix Note 40 Pro': { ram: '12', cores: '8' },
  'Infinix Note 30 VIP': { ram: '12', cores: '8' }, 'Infinix Zero 30 5G': { ram: '12', cores: '8' },
  'Infinix Hot 40 Pro': { ram: '8', cores: '8' }, 'Infinix Smart 8 Pro': { ram: '8', cores: '8' },
  'Tecno Camon 30 Premier': { ram: '12', cores: '8' }, 'Tecno Camon 20 Premier': { ram: '8', cores: '8' },
  'Tecno Phantom V Fold': { ram: '12', cores: '8' }, 'Tecno Phantom X2 Pro': { ram: '12', cores: '8' },
  'Tecno Spark 20 Pro+': { ram: '8', cores: '8' },

  // Rugged (Blackview, Ulefone, Doogee)
  'Blackview BL9000': { ram: '12', cores: '8' }, 'Blackview BV9900': { ram: '8', cores: '8' },
  'Blackview BV9800 Pro': { ram: '6', cores: '8' },
  'Ulefone Armor 24': { ram: '12', cores: '8' }, 'Ulefone Armor 21': { ram: '8', cores: '8' },
  'Ulefone Armor 17 Pro': { ram: '8', cores: '8' },
  'Doogee V30 Pro': { ram: '12', cores: '8' }, 'Doogee V20': { ram: '8', cores: '8' },
  'Doogee S100': { ram: '12', cores: '8' }, 'Doogee S98 Pro': { ram: '8', cores: '8' },

  // HTC & Nokia (HMD)
  'HTC U23 Pro': { ram: '12', cores: '8' }, 'HTC U12+': { ram: '6', cores: '8' },
  'HTC U11': { ram: '6', cores: '8' }, 'HTC 10': { ram: '4', cores: '4' },
  'HTC One M9': { ram: '3', cores: '8' }, 'HTC One M8': { ram: '2', cores: '4' },
  'Nokia G42 5G': { ram: '6', cores: '8' }, 'Nokia G22': { ram: '4', cores: '8' },
  'Nokia XR21': { ram: '6', cores: '8' }, 'Nokia XR20': { ram: '6', cores: '8' },
  'Nokia 8.3 5G': { ram: '8', cores: '8' }, 'Nokia 9 PureView': { ram: '6', cores: '8' },
  'Nokia 8': { ram: '4', cores: '8' }, 'Nokia 7 Plus': { ram: '4', cores: '8' },

  // ZTE & Nubia
  'Nubia RedMagic 9 Pro': { ram: '16', cores: '8' }, 'Nubia RedMagic 8 Pro': { ram: '16', cores: '8' },
  'Nubia Z60 Ultra': { ram: '16', cores: '8' }, 'Nubia Z50 Ultra': { ram: '16', cores: '8' },
  'ZTE Axon 50 Ultra': { ram: '12', cores: '8' }, 'ZTE Axon 40 Ultra': { ram: '12', cores: '8' },
  'ZTE Axon 40 Pro': { ram: '12', cores: '8' }, 'ZTE Axon 30': { ram: '8', cores: '8' },
  'ZTE Axon 20': { ram: '8', cores: '8' }, 'ZTE Axon 30 Ultra': { ram: '12', cores: '8' },
  'ZTE Blade V50 Design': { ram: '8', cores: '8' }, 'ZTE Blade V40': { ram: '6', cores: '8' },
  'ZTE Blade V30': { ram: '4', cores: '8' }, 'ZTE Blade A73': { ram: '4', cores: '8' },
  'ZTE Blade A72': { ram: '4', cores: '8' }, 'ZTE Blade A53': { ram: '2', cores: '8' },
  'ZTE Blade A52': { ram: '3', cores: '8' }, 'ZTE Blade A33': { ram: '2', cores: '4' },
  'ZTE Blade A32': { ram: '2', cores: '4' }, 'ZTE Blade A71': { ram: '3', cores: '8' },
  'ZTE Blade A51': { ram: '2', cores: '8' }, 'ZTE Blade A31': { ram: '2', cores: '4' },

  // Budget Brands (Cubot, Umidigi, Oukitel, Vernee, Elephone)
  'Cubot KingKong 9': { ram: '12', cores: '8' }, 'Cubot Note 50': { ram: '8', cores: '8' },
  'Umidigi Bison GT2': { ram: '8', cores: '8' }, 'Umidigi A15': { ram: '8', cores: '8' },
  'Oukitel WP22': { ram: '8', cores: '8' }, 'Oukitel C35': { ram: '6', cores: '8' },
  'Vernee Apollo Lite': { ram: '4', cores: '10' }, 'Elephone U2': { ram: '6', cores: '8' },

  // Meizu
  'Meizu 21 Pro': { ram: '16', cores: '8' }, 'Meizu 20 Pro': { ram: '12', cores: '8' },
  'Meizu 18s Pro': { ram: '12', cores: '8' }, 'Meizu 17 Pro': { ram: '12', cores: '8' },

  // TCL & Alcatel
  'TCL 50 Pro NXTPAPER': { ram: '8', cores: '8' }, 'TCL 40 NxtPaper': { ram: '8', cores: '8' },
  'TCL 30 5G': { ram: '4', cores: '8' }, 'Alcatel 3X (2020)': { ram: '6', cores: '8' },
  'Alcatel 1S (2021)': { ram: '3', cores: '8' },

  // Lenovo Smartphones
  'Lenovo Legion Y90': { ram: '18', cores: '8' }, 'Lenovo Legion Duel 2': { ram: '16', cores: '8' },
  'Lenovo K15 Plus': { ram: '4', cores: '8' }, 'Lenovo K13 Note': { ram: '4', cores: '8' },

  // Eastern European Brands
  'Allview Soul X9': { ram: '8', cores: '8' }, 'Allview V6 Viper': { ram: '4', cores: '8' },
  'Tesla Smartphone 9.2': { ram: '4', cores: '8' }, 'Tesla Smartphone 6.4': { ram: '3', cores: '8' },
  'Prestigio Grace R7': { ram: '2', cores: '4' }, 'Prestigio Muze G7': { ram: '2', cores: '4' },
  'Maxcom MS571': { ram: '4', cores: '8' }, 'Maxcom MS459': { ram: '2', cores: '4' },
  'Hammer Blade 5G': { ram: '6', cores: '8' }, 'Hammer Explorer': { ram: '4', cores: '8' },
  'Sigma Mobile X-treme PQ54': { ram: '4', cores: '8' }, 'Sigma Mobile X-treme PQ39': { ram: '3', cores: '4' },
  // Carrier Branded Devices (Telekom, Vodafone, O2)
  'Telekom T Phone': { ram: '4', cores: '8' }, 'Telekom T Phone Pro': { ram: '6', cores: '8' },
  'Vodafone Smart V11': { ram: '3', cores: '8' }, 'Vodafone Smart N10': { ram: '2', cores: '4' },
  'O2 my Handy Phone': { ram: '4', cores: '8' },
  // Smartwatches
  'Galaxy Watch 9': { ram: '2', cores: '5' }, 'Galaxy Watch 8': { ram: '2', cores: '5' },
  'Galaxy Watch 7': { ram: '2', cores: '5' }, 'Galaxy Watch 6': { ram: '2', cores: '5' },
  'Galaxy Watch 5': { ram: '1.5', cores: '2' }, 'Galaxy Watch 4': { ram: '1.5', cores: '2' },
  'Galaxy Watch 3': { ram: '1', cores: '2' },

  // Android TV & Streaming Sticks
  'Waipu.tv Stick 4K': { ram: '2', cores: '4' }, 'Waipu.tv Stick': { ram: '1', cores: '4' },
  'Chromecast with Google TV (4K)': { ram: '2', cores: '4' }, 'Chromecast with Google TV (HD)': { ram: '1.5', cores: '4' },
  'Nvidia Shield TV Pro': { ram: '3', cores: '8' }, 'Nvidia Shield TV': { ram: '2', cores: '4' },
  'Amazon Fire TV Stick 4K Max': { ram: '2', cores: '4' }, 'Amazon Fire TV Stick 4K': { ram: '1.5', cores: '4' },
  'Amazon Fire TV Stick': { ram: '1', cores: '4' }, 'Xiaomi Mi TV Stick 4K': { ram: '2', cores: '4' },
  'Xiaomi Mi TV Stick': { ram: '1', cores: '4' }, 'Generic Android TV Box': { ram: '2', cores: '4' },
};
