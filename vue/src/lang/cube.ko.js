export default {
  "ko": {

    cubeClassifies: [
      { value: 'all', label: '전체' },
      { value: 'socket', label: '소켓' },
      { value: 'rune', label: '룬' },
      { value: 'gem', label: '보석' },
      { value: 'item', label: '아이템' },
      { value: 'quest', label: '퀘스트' },
      { value: 'potion', label: '포션' }
    ],
    cubeData: [
      {
        classify: 'quest',
        title: '카우레벨',
        desc: ['해당 난이도에서 디아블로 또는 바알 클리어'],
        images: ['quests/wirtsleg.png', 'consumables/tomeoftownportal.png'],
        recipe: ['워트의 의족 + 타운 포탈 책']
      },
      {
        classify: 'quest',
        title: '횃불 퀘스트',
        desc: ['헬 난이도 해로게쓰에서만 활성', 'Matron\'s Den, Furnace of Pain, Forgotten Sands 포탈이 랜덤하게 생성', '각 포탈에서 Baal\'s Eye + Diablo\'s Horn + Mephisto\'s Brain 획득', '3개의 장기를 큐빙하면 우버 트리스트람 포탈 생성'],
        images: ['quests/key.png', 'quests/key.png', 'quests/key.png'],
        recipe: ['증오 + 공포 + 파괴의 열쇠']
      },
      {
        classify: 'gem',
        title: '보석',
        desc: ['<span class="text-underline">최하급</span> 보석 x 3 → <span class="text-underline">하급</span> 보석', '<span class="text-underline">하급</span> 보석 x 3 → <span class="text-underline">일반</span> 보석', '<span class="text-underline">일반</span> 보석 x 3 → <span class="text-underline">상급</span> 보석', '<span class="text-underline">상급</span> 보석 x 3 → <span class="text-underline">최상급</span> 보석'],
        images: ['gems/chipped.png', 'gems/flawed.png', 'gems/normal.png', 'gems/flawless.png', 'gems/perfect.png'],
        recipe: ['<span class="text-underline">최하급</span>, <span class="text-underline">하급</span>, <span class="text-underline">일반</span>, <span class="text-underline">상급</span>, <span class="text-underline">최상급</span> 보석']
      },
      {
        classify: 'rune',
        title: '최하급룬',
        desc: ['<span class="text-weight-bold text-grey-7">엘룬</span> x 3 → <span class="text-weight-bold text-grey-7">엘드룬</span>', '<span class="text-weight-bold text-grey-7">엘드룬</span> x 3 → <span class="text-weight-bold text-grey-7">티르룬</span>', '<span class="text-weight-bold text-grey-7">티르룬</span> x 3 → <span class="text-weight-bold text-grey-7">네프룬</span>', '<span class="text-weight-bold text-grey-7">네프룬</span> x 3 → <span class="text-weight-bold text-grey-7">에드룬</span>', '<span class="text-weight-bold text-grey-7">에드룬</span> x 3 → <span class="text-weight-bold text-grey-7">아이드룬</span>', '<span class="text-weight-bold text-grey-7">아이드룬</span> x 3 → <span class="text-weight-bold text-grey-7">탈룬</span>', '<span class="text-weight-bold text-grey-7">탈룬</span> x 3 → <span class="text-weight-bold text-grey-7">랄룬</span>', '<span class="text-weight-bold text-grey-7">랄룬</span> x 3 → <span class="text-weight-bold text-grey-7">오르트룬</span>', '<span class="text-weight-bold text-grey-7">오르트룬</span> x 3 → <span class="text-weight-bold text-grey-7">주울룬</span>'],
        images: ['runes/el.png', 'runes/eld.png', 'runes/tir.png', 'runes/nef.png', 'runes/eth.png', 'runes/ith.png', 'runes/tal.png', 'runes/ral.png', 'runes/ort.png', 'runes/thul.png']
      },
      {
        classify: 'rune',
        title: '하급룬',
        desc: ['<span class="text-weight-bold text-grey-7">주울룬</span> x 3 + <span class="text-underline">최하급</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">토파즈</span> → <span class="text-weight-bold text-grey-7">앰룬</span>', '<span class="text-weight-bold text-grey-7">앰룬</span> x 3 + <span class="text-underline">최하급</span> <span class="text-purple-5">자수정</span> → <span class="text-weight-bold text-grey-7">솔룬</span>', '<span class="text-weight-bold text-grey-7">솔룬</span> x 3 + <span class="text-underline">최하급</span> <span class="text-blue">사파이어</span> → <span class="text-weight-bold text-grey-7">샤엘룬</span>', '<span class="text-weight-bold text-grey-7">샤엘룬</span> x 3 + <span class="text-underline">최하급</span> <span class="text-red">루비</span> → <span class="text-weight-bold text-grey-7">돌룬</span>', '<span class="text-weight-bold text-grey-7">돌룬</span> x 3 + <span class="text-underline">최하급</span> <span class="text-light-green">에메랄드</span> → <span class="text-weight-bold text-grey-7">헬룬</span>', '<span class="text-weight-bold text-grey-7">헬룬</span> x 3 + <span class="text-underline">최하급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> → <span class="text-weight-bold text-grey-7">이오룬</span>'],
        images: ['runes/thul.png', 'runes/amn.png', 'runes/sol.png', 'runes/shael.png', 'runes/dol.png', 'runes/hel.png', 'runes/io.png']
      },
      {
        classify: 'rune',
        title: '일반룬',
        desc: ['<span class="text-weight-bold text-grey-7">이오룬</span> x 3 + <span class="text-underline">하급</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">토파즈</span> → <span class="text-weight-bold text-grey-7">룸룬</span>', '<span class="text-weight-bold text-grey-7">룸룬</span> x 3 + <span class="text-underline">하급</span> <span class="text-purple-5">자수정</span> → <span class="text-weight-bold text-grey-7">코룬</span>', '<span class="text-weight-bold text-grey-7">코룬</span> x 3 + <span class="text-underline">하급</span> <span class="text-blue">사파이어</span> → <span class="text-weight-bold text-grey-7">팔룬</span>', '<span class="text-weight-bold text-grey-7">팔룬</span> x 3 + <span class="text-underline">하급</span> <span class="text-red">루비</span> → <span class="text-weight-bold text-grey-7">렘룬</span>', '<span class="text-weight-bold text-grey-7">렘룬</span> x 3 + <span class="text-underline">하급</span> <span class="text-light-green">에메랄드</span> → <span class="text-weight-bold text-grey-7">풀룬</span>', '<span class="text-weight-bold text-grey-7">풀룬</span> x 2 + <span class="text-underline">하급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> → <span class="text-weight-bold text-grey-7">우움룬</span>'],
        images: ['runes/io.png', 'runes/lum.png', 'runes/ko.png', 'runes/fal.png', 'runes/lem.png', 'runes/pul.png', 'runes/um.png']
      },
      {
        classify: 'rune',
        title: '상급룬',
        desc: ['<span class="text-weight-bold text-grey-7">우움룬</span> x 2 + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">토파즈</span> → <span class="text-weight-bold text-grey-7">말룬</span>', '<span class="text-weight-bold text-grey-7">말룬</span> x 2 + <span class="text-purple-5">자수정</span> → <span class="text-weight-bold text-grey-7">이스트룬</span>', '<span class="text-weight-bold text-grey-7">이스트룬</span> x 2 + <span class="text-blue">사파이어</span> → <span class="text-weight-bold text-grey-7">굴룬</span>', '<span class="text-weight-bold text-grey-7">굴룬</span> x 2 + <span class="text-red">루비</span> → <span class="text-weight-bold text-grey-7">벡스룬</span>', '<span class="text-weight-bold text-grey-7">벡스룬</span> x 2 + <span class="text-light-green">에메랄드</span> → <span class="text-weight-bold text-grey-7">오움룬</span>', '<span class="text-weight-bold text-grey-7">오움룬</span> x 2 + <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> → <span class="text-weight-bold text-grey-7">로룬</span>'],
        images: ['runes/um.png', 'runes/mal.png', 'runes/ist.png', 'runes/gul.png', 'runes/vex.png', 'runes/ohm.png', 'runes/lo.png']
      },
      {
        classify: 'rune',
        title: '최상급룬',
        desc: ['<span class="text-weight-bold text-grey-7">로룬</span> x 2 + <span class="text-underline">상급</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">토파즈</span> → <span class="text-weight-bold text-grey-7">수르룬</span>', '<span class="text-weight-bold text-grey-7">수르룬</span> x 2 + <span class="text-underline">상급</span> <span class="text-purple-5">자수정</span> → <span class="text-weight-bold text-grey-7">베르룬</span>', '<span class="text-weight-bold text-grey-7">베르룬</span> x 2 + <span class="text-underline">상급</span> <span class="text-blue">사파이어</span> → <span class="text-weight-bold text-grey-7">자룬</span>', '<span class="text-weight-bold text-grey-7">자룬</span> x 2 + <span class="text-underline">상급</span> <span class="text-red">루비</span> → <span class="text-weight-bold text-grey-7">참룬</span>', '<span class="text-weight-bold text-grey-7">참룬</span> x 2 + <span class="text-underline">상급</span> <span class="text-light-green">에메랄드</span> → <span class="text-weight-bold text-grey-7">조드룬</span>'],
        images: ['runes/lo.png', 'runes/sur.png', 'runes/ber.png', 'runes/jah.png', 'runes/cham.png', 'runes/zod.png']
      },
      {
        classify: 'potion',
        title: '포션',
        desc: ['<span class="text-red">힐링포션</span> x 3 + <span class="text-blue">마나포션</span> x 3 + <span class="text-underline">최하급</span> 보석 → <span class="text-purple">활력포션</span>', '<span class="text-red">힐링포션</span> x 3 + <span class="text-blue">마나포션</span> x 3 + <span class="text-underline">일반</span> 보석 → 대량의 <span class="text-purple">활력포션</span>', '<span class="text-purple">활력포션</span> x 3 → <span class="text-purple">대량의 활력포션</span>'],
        images: ['potions/rejuv.png', 'potions/full_rejuv.png']
      },
      {
        classify: 'socket',
        title: '소켓 초기화',
        desc: ['<span class="text-weight-bold text-grey-7">헬룬</span> + <span class="text-blue">타운포탈 스크롤</span> + 소켓사용 아이템'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '무기 소켓생성',
        desc: ['<span class="text-weight-bold text-grey-7">랄룬</span> + <span class="text-weight-bold text-grey-7">앰룬</span> +  <span class="text-underline">최상급</span> <span class="text-purple-5">자수정</span> + 노멀무기', '1 ~ 6 무작위 소켓생성'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '투구 소켓생성',
        desc: ['<span class="text-weight-bold text-grey-7">랄룬</span> + <span class="text-weight-bold text-grey-7">주울룬</span> +  <span class="text-underline">최상급</span> <span class="text-blue">사파이어</span> + 노멀투구', '1 ~ 3 무작위 소켓생성'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '방패 소켓생성',
        desc: ['<span class="text-weight-bold text-grey-7">탈룬</span> + <span class="text-weight-bold text-grey-7">앰룬</span> +  <span class="text-underline">최상급</span> <span class="text-red">루비</span> + 노멀방패', '1 ~ 4 무작위 소켓생성'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '방어구 소켓생성',
        desc: ['<span class="text-weight-bold text-grey-7">탈룬</span> + <span class="text-weight-bold text-grey-7">주울룬</span> +  <span class="text-underline">최상급</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">토파즈</span> + 노멀방어구', '1 ~ 4 무작위 소켓생성'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '레어 아이템 소켓생성',
        desc: ['<span class="text-underline">최상급</span> <span class="text-grey-7">스컬</span> x 3 + <span class="text-weight-bold text-title">조던링</span> + <span class="text-weight-bold text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">레어 무기</span>', '1 소켓생성', '소켓을 생성할수 없는 아이템은 소켓생성 불가'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '매직 무기 소켓생성',
        desc: ['<span class="text-underline">최하급</span> 보석 x 3 + <span class="text-weight-bold text-indigo-5">매직 무기</span>', '1~2 소켓생성', '소켓을 생성할수 없는 아이템은 소켓생성 불가', '<span class="text-weight-bold">결과물 레벨 = 25</span>'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '매직 무기 소켓생성',
        desc: ['<span class="text-underline">상급</span> 보석 x 3 + <span class="text-weight-bold text-indigo-5">매직 무기</span>', '1~2 소켓생성', '소켓을 생성할수 없는 아이템은 소켓생성 불가', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'socket',
        title: '매직 무기 소켓 재생성',
        desc: ['<span class="text-underline">일반</span> 보석 x 3 + <span class="text-weight-bold text-indigo-5">소켓 매직 무기</span>', '1~2 소켓생성', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['etc/sockets.png'],
        width: '100%'
      },
      {
        classify: 'item',
        title: '노멀 세트 무기강화',
        desc: ['<span class="text-weight-bold text-grey-7">랄룬</span> + <span class="text-weight-bold text-grey-7">솔룬</span> + <span class="text-underline">최상급</span> <span class="text-light-green">에메랄드</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">노멀 세트 무기</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 세트 무기</span>'],
        images: ['weapons/crystal_sword.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: '익셉셔널 세트 무기강화',
        desc: ['<span class="text-weight-bold text-grey-7">룸룬</span> + <span class="text-weight-bold text-grey-7">풀룬</span> + <span class="text-underline">최상급</span> <span class="text-light-green">에메랄드</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 세트 무기</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">엘리트 세트 무기</span>'],
        images: ['weapons/crystal_sword.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: '노멀 세트 방어구강화',
        desc: ['<span class="text-weight-bold text-grey-7">탈룬</span> + <span class="text-weight-bold text-grey-7">샤엘룬</span> + <span class="text-underline">최상급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">노멀 세트 방어구</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 세트 방어구</span>'],
        images: ['armor/light_plate.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: '익셉셔널 세트 방어구강화',
        desc: ['<span class="text-weight-bold text-grey-7">코룬</span> + <span class="text-weight-bold text-grey-7">렘룬</span> + <span class="text-underline">최상급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> + <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 세트 방어구</span> → <span class="text-light-green-13" style="text-shadow:0 0 3px rgba(0,0,0,1)">엘리트 세트 방어구</span>'],
        images: ['armor/light_plate.png'],
        version: '2.4'
      },
      {
        classify: 'item',
        title: '노멀 무기강화',
        desc: ['<span class="text-weight-bold text-grey-7">엘드룬</span> + <span class="text-underline">최하급</span> 보석 + 로우 퀄리티 무기 → 노멀 퀄리티 무기', '<span class="text-weight-bold">결과물 레벨 = 1 ilvl</span>', '기존 소켓 및 재료 모두 사라짐', 'ilvl : 아이템 레벨'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '노멀 방어구강화',
        desc: ['<span class="text-weight-bold text-grey-7">엘룬</span> + <span class="text-underline">최하급</span> 보석 + 로우 퀄리티 방어구 → 노멀 퀄리티 방어구', '<span class="text-weight-bold">결과물 레벨 = 1 ilvl</span>', '기존 소켓 및 재료 모두 사라짐', 'ilvl : 아이템 레벨'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '노멀 유니크 무기강화',
        desc: ['<span class="text-weight-bold text-grey-7">랄룬</span> + <span class="text-weight-bold text-grey-7">솔룬</span> + <span class="text-underline">최상급</span> <span class="text-light-green">에메랄드</span> + <span class="text-title">노멀 유니크 무기</span> → <span class="text-title">익셉셔널 유니크 무기</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '노멀 유니크 방어구강화',
        desc: ['<span class="text-weight-bold text-grey-7">탈룬</span> + <span class="text-weight-bold text-grey-7">샤엘룬</span> + <span class="text-underline">최상급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> + <span class="text-title">노멀 유니크 방어구</span> → <span class="text-title">익셉셔널 유니크 방어구</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '익셉셔널 유니크 무기강화',
        desc: ['<span class="text-weight-bold text-grey-7">룸룬</span> + <span class="text-weight-bold text-grey-7">풀룬</span> + <span class="text-underline">최상급</span> <span class="text-light-green">에메랄드</span> + <span class="text-title">익셉셔널 유니크 무기</span> → <span class="text-title">엘리트 유니크 무기</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '익셉셔널 유니크 방어구강화',
        desc: ['<span class="text-weight-bold text-grey-7">코룬</span> + <span class="text-weight-bold text-grey-7">렘룬</span> + <span class="text-underline">최상급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> + <span class="text-title">익셉셔널 유니크 방어구</span> → <span class="text-title">엘리트 유니크 방어구</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '노멀 레어 무기강화',
        desc: ['<span class="text-weight-bold text-grey-7">오르트룬</span> + <span class="text-weight-bold text-grey-7">앰룬</span> + <span class="text-underline">최상급</span> <span class="text-light-green">에메랄드</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">노멀 레어 무기</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 레어 무기</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '노멀 레어 방어구강화',
        desc: ['<span class="text-weight-bold text-grey-7">랄룬</span> + <span class="text-weight-bold text-grey-7">주울룬</span> + <span class="text-underline">최상급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">노멀 레어 방어구</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 레어 방어구</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '익셉셔널 레어 무기강화',
        desc: ['<span class="text-weight-bold text-grey-7">팔룬</span> + <span class="text-weight-bold text-grey-7">우움룬</span> + <span class="text-underline">최상급</span> <span class="text-light-green">에메랄드</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 레어 무기</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">엘리트 레어 무기</span>'],
        images: ['weapons/crystal_sword.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '익셉셔널 레어 방어구강화',
        desc: ['<span class="text-weight-bold text-grey-7">코룬</span> + <span class="text-weight-bold text-grey-7">풀룬</span> + <span class="text-underline">최상급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">익셉셔널 레어 방어구</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">엘리트 레어 방어구</span>'],
        images: ['armor/light_plate.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '레어 아이템 생성',
        desc: ['<span class="text-underline">최상급</span> <span class="text-grey-7">스컬</span> + <span class="text-title">조던링</span> + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">레어 아이템</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">레어 아이템</span>', '<span class="text-weight-bold">결과물 레벨 = clvl * 0.66 + ilvl * 0.66</span>', 'clvl : 캐릭터 레벨', 'ilvl : 아이템 레벨'],
        images: ['quests/horadricmalus.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '레어 아이템 생성',
        desc: ['<span class="text-underline">최상급</span> <span class="text-grey-7">스컬</span> x 6 + <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">레어 아이템</span> → <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">레어 아이템</span>', '<span class="text-weight-bold">결과물 레벨 = clvl * 0.40 + ilvl * 0.40</span>', 'clvl : 캐릭터 레벨', 'ilvl : 아이템 레벨'],
        images: ['quests/horadricmalus.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 링 생성',
        desc: ['<span class="text-indigo-5">매직 링</span> x 3 → <span class="text-indigo-5">매직 아뮬렛</span>', '<span class="text-weight-bold">결과물 레벨 = clvl * 0.75</span>', 'clvl : 캐릭터 레벨'],
        images: ['rings/ring1.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 아뮬렛 생성',
        desc: ['<span class="text-indigo-5">매직 아뮬렛</span> x 3 → <span class="text-indigo-5">매직 링</span>', '<span class="text-weight-bold">결과물 레벨 = clvl * 0.75</span>', 'clvl : 캐릭터 레벨'],
        images: ['amulets/amulet1.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 아이템 생성',
        desc: ['<span class="text-underline">최상급</span> 보석 x 3 + <span class="text-indigo-5">매직 아이템</span> → <span class="text-indigo-5">매직 아이템</span>', '<span class="text-weight-bold">결과물 레벨 = 재료 ilvl</span>', 'ilvl : 아이템 레벨'],
        images: ['helms/horror.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 아뮬렛 생성',
        desc: ['<span class="text-weight-bold text-underline">종류별</span> <span class="text-underline">최상급</span> 보석 x 6 + <span class="text-indigo-5">매직 아뮬렛</span> → <span class="text-indigo-5">매직 아뮬렛</span>', '고정 접두사 : 프리즈마틱', '모든 저항 +16~20%', '<span class="text-weight-bold">결과물 레벨 = 50</span>'],
        images: ['amulets/amulet2.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 링 생성',
        desc: ['<span class="text-underline">최상급</span> <span class="text-light-green">에메랄드</span> + <span class="text-grey-7">해독포션</span> + <span class="text-indigo-5">매직 링</span> → <span class="text-indigo-5">매직 링</span>', '고정 접두사 : 제이드', '포이즌 저항 +21~30%', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['rings/ring2.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 링 생성',
        desc: ['<span class="text-underline">최상급</span> <span class="text-red">루비</span> + <span class="text-orange">폭발포션</span> + <span class="text-indigo-5">매직 링</span> → <span class="text-indigo-5">매직 링</span>', '고정 접두사 : 가넷', '파이어 저항 +21~30%', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['rings/ring3.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 링 생성',
        desc: ['<span class="text-underline">최상급</span> <span class="text-yellow" style="text-shadow:0 0 3px rgba(0,0,0,1)">토파즈</span> + <span class="text-purple">소량의 활력포션</span> + <span class="text-indigo-5">매직 링</span> → <span class="text-indigo-5">매직 링</span>', '고정 접두사 : 코랄', '라이트닝 저항 +21~30%', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['rings/ring4.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 링 생성',
        desc: ['<span class="text-underline">최상급</span> <span class="text-blue">사파이어</span> + <span class="text-lime">해빙포션</span> + <span class="text-indigo-5">매직 링</span> → <span class="text-indigo-5">매직 링</span>', '고정 접두사 : 코발트', '콜드 저항 +21~30%', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['rings/ring5.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 소드 생성',
        desc: ['<span class="text-underline">모든등급</span> <span class="text-red">루비</span> + <span class="text-underline">모든종류</span> <span class="text-red">힐링포션</span> x 4 + <span class="text-underline">모든종류</span> <span class="text-indigo-5">매직 소드</span> → <span class="text-indigo-5">매직 소드</span>', '고정 접미사 : 오브 더 리치', '4~5% 생명력 흡수', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['weapons/colossus_blade.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 방패 생성',
        desc: ['<span class="text-underline">모든등급</span> <span class="text-grey-7">스컬</span> + <span class="text-underline">모든등급</span> <span class="text-brown">스파이크 클럽</span> + <span class="text-underline">모든종류</span> <span class="text-indigo-5">매직 방패</span> → <span class="text-indigo-5">매직 방패</span>', '고정 접미사 : 오브 스파이크', '공격한 적이 4~6의 피해를 입음', '<span class="text-weight-bold">결과물 레벨 = 30</span>'],
        images: ['shields/monarch.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '매직 폴암 생성',
        desc: ['<span class="text-underline">모든등급</span> <span class="text-white" style="text-shadow:0 0 3px rgba(0,0,0,1)">다이아몬드</span> + <span class="text-underline">모든종류</span> <span class="text-lime">스태프</span> + <span class="text-underline">모든종류</span> <span class="text-grey-6">크리스</span> + <span class="text-underline">모든종류</span> <span class="text-brown">허리띠</span> → <span class="text-indigo-5">매직 폴암</span>', '고정 접두사 : 새비지', '+66~80% 증가된 데미지', '<span class="text-weight-bold">결과물 레벨 = 50</span>'],
        images: ['weapons/giant_thresher.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '무기 수리',
        desc: ['<span class="text-weight-bold text-grey-7">오르트룬</span> + 무기'],
        images: ['etc/repair.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '무기 수리 및 충전',
        desc: ['<span class="text-weight-bold text-grey-7">오르트룬</span> + <span class="text-underline">최하급</span> 보석 + 무기'],
        images: ['etc/repair.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '방어구 수리',
        desc: ['<span class="text-weight-bold text-grey-7">랄룬</span> + 방어구 → 수리'],
        images: ['etc/repair.png'],
        width: '30%'
      },
      {
        classify: 'item',
        title: '방어구 수리 및 충전',
        desc: ['<span class="text-weight-bold text-grey-7">랄룬</span> + <span class="text-underline">최하급</span> 보석 + 방어구'],
        images: ['etc/repair.png'],
        width: '30%'
      }
    ]
  }
}