export default {
  "ko": {
    crafted: [
      {
        id: 'hit-power',
        name: '힛 파워',
        icon: 'far fa-hand-rock',
        color: 'blue-9',
        common: { recipe: [{ name: '최상급<br>사파이어', img: 'gems/perfect_saphire.png' }, { name: '주얼', img: 'jewels/jewel.png' }], effects: ['피격 시 5% 확률로 4 레벨 서릿발 시전', '공격자가 피해를 3~7 받음'] },
        list: [
          { material: 5, recipe: { equipment: { type: '매직', name: ['풀 헬름', '배서넷', '자이언트 칸크'], img: 'helms/full_helm.png' }, rune: 6 }, effects: ['원거리 공격 방어력 +25~50'] },
          { material: 16, recipe: { equipment: { type: '매직', name: ['체인 부츠', '메시 부츠', '본위브 부츠'], img: 'boots/chain_boots.png' }, rune: 8 }, effects: ['근접 공격 방어력 +25~50'] },
          { material: 17, recipe: { equipment: { type: '매직', name: ['체인 글러브', '헤비 브레이서', '뱀브레이스'], img: 'gloves/chain_gloves.png' }, rune: 9 }, effects: ['밀쳐내기'], hot: true },
          { material: 18, recipe: { equipment: { type: '매직', name: ['헤비 벨트', '배틀 벨트', '트롤 벨트'], img: 'belts/heavy_belt.png' }, rune: 7 }, effects: ['받는 피해의 5~10%만큼 마나 회복'] },
          { material: 4, recipe: { equipment: { type: '매직', name: ['고딕 실드', '에인션트 실드', '와드'], img: 'shields/gothic_shield.png' }, rune: 5 }, effects: ['막기 확률 +5~10%'] },
          { material: 3, recipe: { equipment: { type: '매직', name: ['필드 플레이트', '샤크투스 아머', '크라켄 쉘'], img: 'armor/field_plate.png' }, rune: 4 }, effects: ['타격 회복 속도 +10~20%'] },
          { material: 19, recipe: { equipment: { type: '매직', name: ['아뮬렛'], img: 'amulets/amulet3.png' }, rune: 10 }, effects: ['적중 시 괴물 도주 3~11%'] },
          { material: 20, recipe: { equipment: { type: '매직', name: ['링'], img: 'rings/ring3.png' }, rune: 11 }, effects: ['민첩 +1~5'] },
          { material: 21, recipe: { equipment: { type: '매직', name: ['둔기류 무기'], img: 'weapons/mace.png' }, rune: 3 }, effects: ['피해 +35~60% 증가'] }
        ]
      },
      {
        id: 'blood',
        name: '블러드',
        icon: 'water_drop',
        color: 'red-9',
        common: { recipe: [{ name: '최상급<br>루비', img: 'gems/perfect_ruby.png' }, { name: '주얼', img: 'jewels/jewel1.png' }], effects: ['적중당 생명력 1~3% 훔침', '생명력 +10~20'] },
        list: [
          { material: 5, recipe: { equipment: { type: '매직', name: ['헬름', '캐스크', '아메트'], img: 'helms/helm.png' }, rune: 8 }, effects: ['치명적 공격 5~10%'] },
          { material: 16, recipe: { equipment: { type: '매직', name: ['라이트 플레이트 부츠', '배틀 부츠', '미러드 부츠'], img: 'boots/light_plate_boots.png' }, rune: 5 }, effects: ['생명력 회복 +5~10'] },
          { material: 17, recipe: { equipment: { type: '매직', name: ['헤비 글러브', '샤크스킨 글러브', '뱀파이어본 글러브'], img: 'gloves/heavy_gloves.png' }, rune: 4 }, effects: ['강타 확률 5~10%'], hot: true },
          { material: 18, recipe: { equipment: { type: '매직', name: ['벨트', '메시 벨트', '미스릴 코일'], img: 'belts/belt.png' }, rune: 7 }, effects: ['상처 악화 확률 5~10%'] },
          { material: 4, recipe: { equipment: { type: '매직', name: ['스파이크 실드', '바브드 실드', '블레이드 배리어'], img: 'shields/spiked_shield.png' }, rune: 6 }, effects: ['공격자가 피해를 4~7 받음'] },
          { material: 3, recipe: { equipment: { type: '매직', name: ['플레이트 메일', '템플러 코트', '헬포지 플레이트'], img: 'armor/plate_mail.png' }, rune: 10 }, effects: ['악마 처치 시 생명력 +1~3'] },
          { material: 19, recipe: { equipment: { type: '매직', name: ['아뮬렛'], img: 'amulets/amulet2.png' }, rune: 11 }, effects: ['달리기/걷기 속도 +5~10%'], hot: true },
          { material: 20, recipe: { equipment: { type: '매직', name: ['링'], img: 'rings/ring2.png' }, rune: 12 }, effects: ['힘 +1~5'], hot: true },
          { material: 21, recipe: { equipment: { type: '매직', name: ['도끼류 무기'], img: 'weapons/axe.png' }, rune: 9 }, effects: ['피해 +30~60% 증가'] }
        ]
      },
      {
        id: 'caster',
        name: '캐스터',
        icon: 'auto_fix_high',
        color: 'purple-9',
        common: { recipe: [{ name: '최상급<br>자수정', img: 'gems/perfect_amethyst.png' }, { name: '주얼', img: 'jewels/jewel2.png' }], effects: ['마나 재생 4~10%', '마나 +10~20'] },
        list: [
          { material: 5, recipe: { equipment: { type: '매직', name: ['마스크', '데스 마스크', '데몬헤드 마스크'], img: 'helms/mask.png' }, rune: 4 }, effects: ['적중당 마나 1~4% 훔침'] },
          { material: 16, recipe: { equipment: { type: '매직', name: ['부츠', '데몬하이드 부츠', '웜하이드 부츠'], img: 'boots/boots.png' }, rune: 10 }, effects: ['최대 마나 2~5% 증가'] },
          { material: 17, recipe: { equipment: { type: '매직', name: ['레더 글러브', '데몬하이드 글러브', '브램블 미트'], img: 'gloves/leather_gloves.png' }, rune: 9 }, effects: ['적 처치 시 마나 +1~3'] },
          { material: 18, recipe: { equipment: { type: '매직', name: ['라이트 벨트', '샤크스킨 벨트', '뱀파이어팽 벨트'], img: 'belts/light_belt.png' }, rune: 6 }, effects: ['시전 속도 +5~10%'], hot: true },
          { material: 4, recipe: { equipment: { type: '매직', name: ['스몰 실드', '라운드 실드', '루나'], img: 'shields/small_shield.png' }, rune: 5 }, effects: ['막기 확률 +5~10%'] },
          { material: 3, recipe: { equipment: { type: '매직', name: ['라이트 플레이트', '메이지 플레이트', '아콘 플레이트'], img: 'armor/light_plate.png' }, rune: 7 }, effects: ['적 처치 시 마나 +1~3'] },
          { material: 19, recipe: { equipment: { type: '매직', name: ['아뮬렛'], img: 'amulets/amulet1.png' }, rune: 8 }, effects: ['시전 속도 +5~10%'], hot: true },
          { material: 20, recipe: { equipment: { type: '매직', name: ['링'], img: 'rings/ring1.png' }, rune: 11 }, effects: ['마력 +1~5'], hot: true },
          { material: 21, recipe: { equipment: { type: '매직', name: ['막대류 무기'], img: 'weapons/grim_wand.png' }, rune: 3 }, effects: ['최대 마나 1~5% 증가'] }
        ]
      },
      {
        id: 'safety',
        name: '세이프티',
        icon: 'health_and_safety',
        color: 'green-9',
        common: { recipe: [{ name: '최상급<br>에메랄드', img: 'gems/perfect_emerald.png' }, { name: '주얼', img: 'jewels/jewel4.png' }], effects: ['마법 피해 1~2 감소', '피해 1~4 감소'] },
        list: [
          { material: 5, recipe: { equipment: { type: '매직', name: ['크라운', '그랜드 크라운', '코로나'], img: 'helms/crown.png' }, rune: 6 }, effects: ['방어력 +10~30% 증가', '번개 저항 +5~10%'] },
          { material: 16, recipe: { equipment: { type: '매직', name: ['그리브즈', '워 부츠', '뮈르미돈 부츠'], img: 'boots/greaves.png' }, rune: 9 }, effects: ['방어력 +10~30% 증가', '화염 저항 +5~10%'] },
          { material: 17, recipe: { equipment: { type: '매직', name: ['건틀릿', '워 건틀릿', '오우거 건틀릿'], img: 'gloves/gauntlets.png' }, rune: 8 }, effects: ['방어력 +10~30% 증가', '냉기 저항 +5~10%'] },
          { material: 18, recipe: { equipment: { type: '매직', name: ['새시', '데몬하이드 새시', '스파이더웹 새시'], img: 'belts/sash.png' }, rune: 7 }, effects: ['방어력 +10~30% 증가', '독 저항 +5~10%'] },
          { material: 4, recipe: { equipment: { type: '매직', name: ['카이트 실드', '드래곤 실드', '모나크'], img: 'shields/kite_shield.png' }, rune: 4 }, effects: ['방어력 +10~30% 증가', '저항 +5~10%'] },
          { material: 3, recipe: { equipment: { type: '매직', name: ['브레스트 플레이트', '퀴라스', '그레이트 허버크'], img: 'armor/breast_plate.png' }, rune: 5 }, effects: ['방어력 +10~30% 증가', '빙결 지속시간 절반으로 감소'] },
          { material: 19, recipe: { equipment: { type: '매직', name: ['아뮬렛'], img: 'amulets/amulet3.png' }, rune: 10 }, effects: ['막기 확률 +1~10%'] },
          { material: 20, recipe: { equipment: { type: '매직', name: ['링'], img: 'rings/ring4.png' }, rune: 11 }, effects: ['활력 +1~5'] },
          { material: 21, recipe: { equipment: { type: '매직', name: ['창류 또는 투창류 무기'], img: 'weapons/razortine.png' }, rune: 12 }, effects: ['방어력 +5~10% 증가'] }
        ]
      }
    ]
  }
}