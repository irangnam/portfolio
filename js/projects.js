/* 이 파일은 편집 페이지(admin.html)가 저장합니다. 직접 고쳐도 되지만, 편집 페이지를 쓰는 편이 안전합니다. */
window.PROJECTS = [
  {
    "slug": "seia",
    "title": "버추얼 아바타 SEIA",
    "sub": "Original VTuber Avatar",
    "date": "2026.11",
    "cats": [
      "Character",
      "3D · XR"
    ],
    "role": "Character concept · Story · Art direction · Texture painting",
    "tools": "Higgsfield · Midjourney (컨셉 아트 생성) · Tripo · Blender · Unity · UniVRM · three.js · MediaPipe · Claude (AI agent)",
    "cover": "assets/seia/cover2.jpg",
    "desc": "기사단 시험장을 잘못 찾아와 아이돌이 된 여우 소녀 ‘세이아’. 캐릭터의 설정과 성격을 기획하고, 실제로 움직이는 3D 아바타 시제품으로 만들었습니다. 아래에서 춤을 추게 하거나 윙크를 시켜 보고, 웹캠을 켜면 직접 세이아가 되어 볼 수 있습니다. 모델 정리와 리깅, 웹 구현은 AI 에이전트(Claude)와 함께 이틀 동안 진행했습니다.",
    "images": [
      "assets/seia/seia_full.png",
      "assets/seia/seia_back.png",
      "assets/seia/seia_tpose.png"
    ],
    "process": [
      {
        "t": "Concept",
        "d": "핑크 헤어에 여우 귀, 땋은 머리, 별 머리핀. 판타지 아머 느낌의 아이돌 의상으로 캐릭터 방향을 잡았습니다.",
        "imgs": []
      },
      {
        "t": "AI base mesh",
        "d": "Tripo로 얼굴, 헤어, 몸, 건틀릿 파츠를 따로 생성했습니다. 초기 생성 모델은 면이 깨져 있고 좌우가 어긋나 있어 그대로는 쓸 수 없기 때문에 파츠별 생성이 필수적입니다.",
        "imgs": [
          "assets/seia/wf_gauntlet_a.jpg",
          "assets/seia/wf_gauntlet_b.jpg",
          "assets/projects/seia/hf_20261113_201654_d5fa7380-3c13-43c9-b6.png",
          "assets/projects/seia/hf_20261113_201654_e82913ae-b1d6-4ab6-aa.png"
        ]
      },
      {
        "t": "Cleanup in Blender",
        "d": "파츠를 하나로 조립하고 목 이음새, 손목 연결부, 등 코르셋의 떠 있던 끈 조각, 어깨 비대칭, 머리끝과 치마의 겹침을 정리했습니다.",
        "img": "assets/seia/process_corset.png",
        "imgs": []
      },
      {
        "t": "Rig & weights",
        "d": "휴머노이드 본에 더해 땋은 머리, 옆머리, 귀, 치마에 흔들림용 본을 추가했습니다. 팔꿈치는 분할선을 늘리고 가중치 폭을 좁혀 ‘휘는’ 대신 ‘접히게’ 고쳤고, 손가락 15개 관절을 양손 모두 리깅했습니다.",
        "img": "assets/seia/process_elbow.png",
        "imgs": []
      },
      {
        "t": "Expressions",
        "d": "눈 깜빡임, 눈웃음, 눈썹, 모음 입모양, 귀 감정 모션까지 17개 셰이프 키를 만들고 기쁨, 화남, 슬픔, 놀람 표정으로 묶었습니다.",
        "img": "assets/projects/seia/2026-11-16-1-29-47.png"
      },
      {
        "t": "Texture painting",
        "d": "AI 텍스처의 얼룩과 번짐을 정리하고, 등 코르셋 끈을 새로 그리고, 건틀릿 색을 의상 팔레트에 맞춘 뒤 Blender에서 직접 페인팅으로 마무리했습니다.",
        "img": "assets/seia/process_hand.png"
      },
      {
        "t": "Toon shading & VRM",
        "d": "Unity에서 MToon 셰이더로 밝고 부드러운 툰 룩을 잡고, 스프링 본과 콜라이더를 세팅해 VRM 1.0으로 내보냈습니다.",
        "img": "assets/projects/seia/2026-11-16-1-39-01.png"
      },
      {
        "t": "Tracking test",
        "d": "웹캠 모션 캡처 앱에서 실제로 움직여 보며 입 크기, 눈 깜빡임 버그, 손 크기, 팔 접힘을 반복해서 고쳤습니다."
      },
      {
        "t": "Motion",
        "d": "아이리제의 HEART CRUSH 댄스 모션(FBX)을 세이아의 뼈대에 맞게 리타게팅해 춤을 추게 했습니다. 이외의 모션(숨쉬기, 눈 깜빡임, 귀 털기, 팔 흔들림)은 코드로 직접 만들었습니다."
      },
      {
        "t": "On the web",
        "d": "모델을 63MB에서 13MB로 줄이고, three-vrm과 MediaPipe로 브라우저 안에서 표정·고개·팔을 따라 하게 만들었습니다. 설치 없이 이 사이트에서 바로 체험할 수 있습니다."
      }
    ],
    "banner": "assets/seia/banner2.jpg",
    "live": "seia.html",
    "tallImages": true,
    "featured": true,
    "liveBg": "assets/seia/live_bg.jpg",
    "demoVideo": "assets/seia/webcam-demo.mp4",
    "liveText": "웹캠을 켜면 세이아가 당신의 표정과 손을 따라 합니다.",
    "storyWorld": "커튼콜 왕국",
    "storyQuote": "“출정 준비 완료! …앗, 여긴 왜 조명이 있나요?”",
    "storyText": "커튼콜 왕국에서는 밤하늘의 별이 관객입니다. 별들은 무대가 즐거우면 박수를 치며 더 밝게 빛나고, 그 빛으로 마을에 불이 켜지고 꽃이 핍니다. 그래서 이 나라의 영웅은 칼을 든 기사가 아니라, 무대에 올라 별을 즐겁게 하는 아이돌입니다.\n세이아의 엄마는 전설적인 영웅은 아니고, 작은 시골 마을을 지키는 기사입니다. 어릴 적 마을 축제를 망치러 산에서 멧돼지들이 내려왔을 때, 위험에 빠진 세이아를 엄마가 구해 냈습니다. 그 강함에 푹 빠진 세이아에게 엄마는 멋쩍어하며 “엄마는 기사라서 그래~” 하고 답했고, 그날부터 세이아는 자신도 기사가 되기를 간절히 바랍니다.\n세이아는 시골 여우 마을에서 온 신인 아이돌입니다. 마을을 지키는 기사단이었던 엄마를 동경해 입단 시험을 보러 왔다가 줄을 잘못 서서 아이돌 오디션장에 들어갔고, 무술 시범으로  선보인 발차기가 별들에게 독특한 안무로 통해 합격했습니다. 본인은 아직도 기사단에 들어온 줄 압니다. 공연은 ‘출정’, 리허설은 ‘훈련’, 팬은 ‘아군’, 앵콜은 ‘증원 요청’이라고 부르는 과격한 말투를 가졌습니다.",
    "storyTraits": "여우 귀 | 객석의 가장 작은 박수 소리까지 듣습니다. 기분이 귀에 다 드러나서 거짓말을 못 합니다.\n별 머리핀 | 첫 무대를 본 별 하나가 신나서 떨어졌다가 돌아가지 않고 머리에 붙어 삽니다. 세이아의 1호 팬입니다.\n땋은 머리 | 엄마와의 추억을 생각하며 매일 아침 직접 땋지만, 엄마가 땋아준 머리처럼 단정하지 못합니다.\n갑옷 의상 | 기사단인 줄 알고 단단한 갑옷을 주문해버렸습니다. 보다 못한 의상팀이 리본과 프릴을 달면 방어력이 올라간다고 설득해서 지금의 리폼된 의상을 더 좋아합니다.\n건틀릿 | 하이파이브 전용입니다. 자신의 힘 때문에 팬의 손이 아플까 봐 낀다지만 진짜인지는 알 수 없습니다.\n윙크 | 활 선생님에게 한쪽 눈을 감으면 조준이 잘된다고 배워서, 이것을 필살기로 알고 있습니다.",
    "planLabel": "현재 기획안",
    "planNotes": "타깃 | 버추얼 아이돌을 깊이 즐기는 20~30대 여성 팬 (가설)\n핵심 매력 | 바보 같은데 귀엽고, 그런데 강합니다. 엉뚱한 착각을 끝까지 진지하게 밀고 나가는 모습과, 엄마와의 애착 관계에서 오는 공감대를 중심에 둡니다.\n데뷔 방송 | 오디션 현장을 다시 재현합니다. 세이아는 여전히 기사단 시험인 줄 알고, 자신의 장비와 무기를 하나씩 자랑합니다.\n반복 코너 1 · 오늘의 훈련 | 게임 방송입니다. 세이아는 게임을 실전 훈련으로 믿고 임하며, 지면 “전술적 후퇴”라고 우깁니다. 방송 끝에 그날의 훈련 성과를 스스로 보고합니다.\n반복 코너 2 · 엄마에게 보내는 전황 보고 | 방송을 마치며 그날 있었던 일을 엄마에게 보내는 편지로 읽습니다. 착각투성이 보고가 웃음을 만들고, 엄마 이야기가 공감대를 만듭니다.\n반복 코너 3 · 아군 모집 | 시청자를 ‘아군’으로 임명해 함께 싸우는 참여형 코너입니다. 세이아가 채팅에 온 팬에게 계급과 임무를 붙여 주고, 모인 아군과 마인크래프트 같은 게임에서 팀 전투에 나섭니다. 팬 수십 명이 크리에이터와 한 팀이 되어 다른 팬덤과 겨루는 요즘의 대규모 참여 콘텐츠를 세이아의 ‘출정’으로 가져옵니다.\n하지 않는 것 | 뒤로 미루지 않습니다. 남을 욕하지 않습니다. “할 수 없다”고 말하지 않습니다.\n목소리와 연기 | 까랑까랑하고 당찬 톤. 틀린 말도 큰 소리로 자신 있게 하는 캐릭터라, 기죽지 않는 목소리가 어울립니다."
  },
  {
    "slug": "jamong",
    "title": "자몽 재개관&자치페스타 영상",
    "sub": "AI Character Film for a Youth Center Reopening",
    "date": "2026.11",
    "cats": [
      "Character",
      "AI Video"
    ],
    "client": "군산 청소년 자치배움터 자몽",
    "role": "Character design · AI video production · Sound",
    "tools": "Nano Banana Pro (Higgsfield) · Kling · Seedance",
    "desc": "운영이 잠시 중단됐던 군산 청소년 자치배움터 ‘자몽’의 재개관을 축하하는 영상입니다. 이곳에서 근무하던 선생님들의 의뢰로 만들었습니다. 이 공간에 추억이 있는 청소년과 청년들이 공감과 그리움, 감동을 느끼도록, 그들이 공간을 어떻게 쓰고 무엇을 했는지를 실제 공간 구석구석과 함께 보여주고자 했습니다. 자몽 캐릭터는 그 청소년들을 대표해 공간을 돌아다니고, 그 기억을 지금의 캐릭터가 영화관에서 영화로 보는 구조로 풀었습니다.",
    "cover": "assets/projects/jamong/popcorn.jpg",
    "compact": true,
    "videos": [
      "assets/projects/jamong/jamong-film.mp4"
    ],
    "images": [
      "assets/projects/jamong/billiards.jpg",
      "assets/projects/jamong/dance-room.jpg",
      "assets/projects/jamong/band-room.jpg",
      "assets/projects/jamong/studio.jpg",
      "assets/projects/jamong/lounge.jpg",
      "assets/projects/jamong/cinema-seat.jpg",
      "assets/projects/jamong/popcorn.jpg",
      "assets/projects/jamong/cinema-screen.jpg",
      "assets/projects/jamong/coming-soon.jpg"
    ],
    "process": [
      {
        "t": "Concept",
        "d": "과거의 기억을 ‘영화’로, 그것을 바라보는 현재를 ‘영화관의 관객’으로 설정했습니다. 캐릭터가 공간을 누비는 장면들이 스크린 속 영화가 되고, 마지막에 객석의 캐릭터가 그것을 보고 있는 구조입니다.",
        "imgs": [
          "assets/projects/jamong/cinema-screen.jpg"
        ]
      },
      {
        "t": "Character",
        "d": "자몽을 모티프로 한 캐릭터를 디자인했습니다. 크레용과 망점 느낌의 손그림 질감, 큰 눈, 짧은 팔다리로 친근한 인상을 잡았습니다.",
        "imgs": [
          "assets/projects/jamong/studio.jpg"
        ]
      },
      {
        "t": "Backgrounds",
        "d": "캐릭터가 등장할 공간별 배경 이미지를 확보했습니다."
      },
      {
        "t": "Compositing",
        "d": "Higgsfield에서 Nano Banana Pro로 배경 위에 캐릭터를 합성했습니다. 공간의 조명 방향과 색, 그림자, 초점 흐림을 캐릭터에 맞춰 그림체가 다른 캐릭터가 배경에 녹아들게 했습니다.",
        "imgs": [
          "assets/projects/jamong/billiards.jpg",
          "assets/projects/jamong/dance-room.jpg",
          "assets/projects/jamong/band-room.jpg",
          "assets/projects/jamong/lounge.jpg"
        ]
      },
      {
        "t": "Video",
        "d": "합성한 이미지를 Kling과 Seedance로 컷별 영상으로 만들었습니다.",
        "imgs": [
          "assets/projects/jamong/cinema-seat.jpg",
          "assets/projects/jamong/popcorn.jpg",
          "assets/projects/jamong/cinema-screen.jpg"
        ]
      },
      {
        "t": "Sound",
        "d": "영상의 분위기가 살도록 음향 작업에 공을 들였습니다."
      }
    ],
    "ribbon": ""
  },
  {
    "slug": "pepperoni-pizza",
    "title": "[NC AI] Pepperoni Pizza",
    "sub": "AI Animation Film",
    "date": "2026.08",
    "cats": [
      "AI Video"
    ],
    "role": "2인 공동 작업 (조유빈, 남이랑) · 캐릭터 콘셉트, 도시 배경 제작(Blender), 셰이딩, 영상 제작, 배경음악·사운드 기획까지 전 과정을 함께 진행",
    "tools": "VARCO 3D, VARCO Sound, Higgsfield, Photoshop, Blender, Premiere Pro",
    "desc": "NC와 함께하는 AI 영상 제작 프로젝트.\n3D 모델 생성 툴인 VARCO 3D를 활용한 작업물로, NC AI 본사 미디어월에 게시되었다.",
    "cover": "assets/projects/animation-02/cover.jpg",
    "videos": [
      "assets/projects/animation-02/pepperoni-pizza.mp4",
      "assets/projects/animation-02/out-of-the-rubble.mp4",
      "assets/projects/pepperoni-pizza/2-2.mp4"
    ],
    "images": [
      "assets/projects/animation-02/workflow-hd.jpg",
      "assets/projects/animation-02/asset-pizza-box.jpg",
      "assets/projects/animation-02/asset-ruin-interior.jpg",
      "assets/projects/animation-02/asset-ruin-house.jpg",
      "assets/projects/animation-02/asset-tower.jpg",
      "assets/projects/animation-02/asset-building.jpg",
      "assets/projects/animation-02/asset-shadow-crowd.jpg"
    ],
    "client": "NC",
    "compact": true,
    "links": [
      {
        "label": "국민대학교 뉴스플러스",
        "url": "https://www.kookmin.ac.kr/comm/board/user/505778f2d4a04163de6ee5fee35d9bb9/view.do?dataSeq=1077059"
      },
      {
        "label": "남이랑 개인 블로그",
        "url": "https://blog.naver.com/rima_05/224410157143"
      },
      {
        "label": "한겨레",
        "url": "https://www.hani.co.kr/arti/economy/biznews/1278574.html"
      },
      {
        "label": "중앙일보",
        "url": "https://www.joongang.co.kr/article/25463602"
      },
      {
        "label": "스마트경제",
        "url": "http://www.dailysmart.co.kr/news/articleView.html?idxno=130022"
      },
      {
        "label": "뉴시스",
        "url": "https://mobile.newsis.com/view_amp.html?ar_id=NISX20260922_0003800613"
      }
    ],
    "ribbon": "with NC AI"
  },
  {
    "slug": "kt-wiz",
    "title": "kt wiz 미디어월 AI 영상",
    "sub": "AI Video for the kt wiz park Media Wall & Media Facade",
    "date": "2025.12-2026.07",
    "cats": [
      "AI Video"
    ],
    "client": "kt wiz",
    "role": "스토리보드 · 사운드 · 제작 계획 수립 및 AI 영상 제작 (국민대학교 AI디자인랩 산학 프로젝트 학부연구원)",
    "tools": "Kling 3.0 · Photoshop · Topaz · Premiere Pro",
    "desc": "수원 kt wiz 파크의 미디어파사드와 미디어월에 송출된 생성형 AI 영상 제작 프로젝트입니다. 2025년 겨울부터 2026년 여름까지 진행했고, 건물 외벽에 프로젝터로 투사하는 미디어파사드와 복도를 따라 길게 세워진 LED 미디어월 영상을 만들었습니다. 여기서는 그중 미디어월 ‘바캉스’ 영상을 소개합니다. 낮과 밤이 바뀌고 다시 처음으로 돌아오는 약 30초 길이의 바닷가 루핑 영상입니다.",
    "cover": "assets/projects/kt-wiz/2026-11-16-4-47-40.png",
    "images": [
      "assets/projects/kt-wiz/2026-11-16-4-49-15.png",
      "assets/projects/kt-wiz/2026-11-16-4-51-01.png",
      "assets/projects/kt-wiz/2026-11-16-4-51-17.png"
    ],
    "process": [
      {
        "t": "Scope",
        "d": "PM이 kt wiz 측과 협의해 큰 콘셉트와 조건을 정했고, 그 주제에 맞는 구체적인 스토리보드와 사운드, 제작 계획은 직접 세웠습니다. 초반 테스트로 시나리오를 확정한 뒤 제작 → 수정 → 최종본 → 송출 순서로 진행했고, 미디어파사드와 미디어월을 합쳐 여러 편의 영상을 맡았습니다.",
        "imgs": [
          "assets/projects/kt-wiz/folders.jpg"
        ]
      },
      {
        "t": "Layout",
        "d": "미디어월이 매우 길어 화면을 3분할로 설계했습니다. 좌우에는 낮과 밤이 반복되는 바닷가 루핑 영상을 길게 두고, 가운데에는 16:9 비율의 메탈 로고 루핑 영상을 배치해 총 2개의 영상을 만들었습니다.",
        "imgs": [
          "assets/projects/kt-wiz/plan.jpg"
        ]
      },
      {
        "t": "Key frames",
        "d": "Kling 3.0으로 제작했습니다. 안정성을 높이기 위해 첫 프레임과 마지막 프레임 이미지를 먼저 만들고 그 사이를 영상으로 채우는 방식을 썼습니다. 바람의 방향이나 파도 모양처럼 두 프레임 사이에 변화를 주어야 영상으로 만들었을 때 움직임이 자연스럽습니다. 이미지는 11K로 렌더링했습니다.",
        "imgs": [
          "assets/projects/kt-wiz/key-day.jpg",
          "assets/projects/kt-wiz/key-sunset.jpg"
        ]
      },
      {
        "t": "Compositing",
        "d": "이렇게 긴 비율의 이미지를 한 번에 오류 없이 생성할 수 있는 모델이 없어, 이미지를 3분할로 나눠 만들거나 오브젝트를 따로 만들어 Photoshop에서 합성해 최종 이미지를 완성했습니다. 이후 배경을 검정으로 채워 21:9 비율로 맞췄습니다.",
        "imgs": [
          "assets/projects/kt-wiz/comp-1.jpg",
          "assets/projects/kt-wiz/comp-2.jpg"
        ]
      },
      {
        "t": "Video & upscale",
        "d": "구간별로 영상을 생성한 뒤 Topaz로 HD에서 11K까지 업스케일했습니다. 연산량이 커서 연구실 워크스테이션 환경에서 작업했습니다.",
        "imgs": [
          "assets/projects/kt-wiz/clips.jpg"
        ]
      },
      {
        "t": "Edit & loop",
        "d": "업스케일한 클립을 Premiere Pro에서 이어 붙였습니다. 용량이 커서 미리보기 재생이 되지 않아, 중간중간 저품질로 인코딩해 타이밍을 확인하며 맞췄습니다. 낮에서 밤으로 바뀌고 다시 처음 화면으로 돌아오는 약 30초 루핑 영상으로 완성했습니다."
      },
      {
        "t": "On site",
        "d": "시즌 개막 약 2주 뒤부터 kt wiz 파크 미디어월에서 송출을 시작했습니다. 현장 점검차 방문했을 때 관람객들이 영상 앞에서 사진을 찍고 가는 모습을 볼 수 있었습니다.",
        "imgs": [
          "assets/projects/kt-wiz/IMG_0630.jpg",
          "assets/projects/kt-wiz/SE-ff538c35-ee69-4fcd-956f-fecaa18ce259.jpg",
          "assets/projects/kt-wiz/SE-e2dece12-a39f-4ecc-a917-0efe7fcaa170.jpg",
          "assets/projects/kt-wiz/SE-e4c4241e-64b4-4056-9c65-8e239d0732d8.jpg"
        ],
        "img": "assets/projects/kt-wiz/IMG_0498.jpg"
      }
    ],
    "compact": true,
    "links": [
      {
        "label": "국민대학교 국민NEW&HOT",
        "url": "https://kookmin.ac.kr/comm/board/user/be8e117863cfd580d7ed5931a799207c/view.do?dataSeq=1076905"
      },
      {
        "label": "국민대학교 AI디자인랩",
        "url": "https://ai-design.kookmin.ac.kr/ai-design/etc-board/lab-news.do?mode=view&articleNo=5936989"
      },
      {
        "label": "",
        "url": ""
      }
    ],
    "logoColor": true,
    "ribbon": "with kt wiz"
  },
  {
    "slug": "bathbomb-wrap-xr",
    "title": "배스밤 선물 포장 XR 모듈",
    "sub": "WebXR Gift-Wrapping Interaction Prototype",
    "date": "2026.11",
    "cats": [
      "3D · XR",
      "UX · UI"
    ],
    "role": "Interaction design · 3D · WebXR prototype",
    "tools": "Blender · three.js (WebXR) · Claude (AI agent)",
    "desc": "크리스마스 시즌의 배스밤 선물 포장을 XR 환경에서 직접 해 보는 인터랙션 모듈입니다. 포장지 롤 랙에서 종이를 당겨 뽑고, 자르고, 배스밤을 감싸고, 리본을 붙이고, 램프를 켜는 과정을 손동작으로 조작하도록 설계했습니다. 핸드 트래킹 제스처를 기준으로 만들었고, VR 기기가 없어도 PC에서 마우스와 키보드로 같은 흐름을 체험할 수 있습니다. 모델은 Blender에서 만들고, 인터랙션은 Claude와 함께 WebXR로 구현했습니다.",
    "cover": "assets/projects/paper-roll-rack-xr/render-closeup.jpg",
    "images": [],
    "live": "https://irangnam.github.io/paper-roll-rack-xr/index.html",
    "liveText": "배스밤을 직접 포장해 보세요. PC에서는 마우스로, VR 기기에서는 손으로 조작합니다.",
    "process": [
      {
        "t": "Pull",
        "d": "롤을 잡고 몸 쪽으로 당기면 포장지가 풀려 나옵니다. 포장할 만큼 나오면 저절로 끊어져 테이블에 놓이고, 배스밤이 그 위로 올라갑니다. VR에서는 주먹을 쥐어 종이를 잡습니다."
      },
      {
        "t": "Cut",
        "d": "검지와 중지를 편 가위 손 모양으로 세 번 자르면 종이가 잘립니다. 컨트롤러에서는 오른쪽 트리거가 가위 역할을 합니다. 손목을 돌리면 종이가 뒤집혀 뒷면이 위로 옵니다."
      },
      {
        "t": "Wrap",
        "d": "배스밤을 두 손으로 감싸 모으면 종이가 모입니다. 또는 종이의 네 모서리를 하나씩 들어 올려 배스밤 위에 내려놓아 감쌉니다."
      },
      {
        "t": "Ribbon",
        "d": "왼쪽 리본 상자의 뚜껑을 들어 올려 열고, 리본을 꺼내 포장한 선물의 목 부분에 가져가면 붙습니다."
      },
      {
        "t": "Lamp",
        "d": "오른쪽 램프의 당김 줄을 핀치하거나 톡 치면 불이 켜지고 꺼집니다."
      },
      {
        "t": "Pattern editor",
        "d": "포장지 무늬를 바꿔 볼 수 있는 패턴 편집기를 따로 두었습니다. 편집기에서 적용한 설정이 데모에 그대로 반영됩니다."
      }
    ]
  },
  {
    "slug": "windmills",
    "title": "WINDMILLS SNS",
    "sub": "Contents Design",
    "date": "2026.03",
    "cats": [
      "Graphic"
    ],
    "role": "SNS renewal · Graphic",
    "cover": "assets/projects/windmills/1-4.png",
    "desc": "2026 야구동아리 WINDMILLS의 SNS 콘텐츠 리뉴얼입니다. 선수들의 개성과 팀의 열정을 강조하는 비주얼 시스템을 구축했습니다.",
    "client": "국민대학교 WINDMILLS",
    "images": [
      "assets/projects/windmills/1-2.png",
      "assets/projects/windmills/3-_1.png",
      "assets/projects/windmills/01.jpg",
      "assets/projects/windmills/02.jpg",
      "assets/projects/windmills/1-3.png",
      "assets/projects/windmills/2026-11-16-7-39-24.png",
      "assets/projects/windmills/Kusf-3.png"
    ],
    "ribbon": "",
    "links": [
      {
        "label": "윈드밀스 인스타그램",
        "url": "https://www.instagram.com/kmu_windmills/"
      }
    ]
  },
  {
    "slug": "kdl",
    "title": "Kookmin Dream League",
    "sub": "KDL 2026 Season Promotion",
    "date": "2026.04",
    "cats": [
      "Graphic"
    ],
    "role": "Visual design · Promotion",
    "cover": "assets/projects/kdl/cover.jpg",
    "desc": "제1회 국민대배 대학드림리그 KDL의 2026시즌 비주얼 디자인 및 홍보입니다. 대학 야구 리그의 열정과 젊음을 생동감 있는 타이포그래피와 밝은 컬러로 표현했습니다.",
    "client": "국민대학교 WINDMILLS",
    "images": [
      "assets/projects/kdl/01.jpg",
      "assets/projects/kdl/02.jpg",
      "assets/projects/kdl/29.png",
      "assets/projects/kdl/image-3.png",
      "assets/projects/kdl/03.jpg",
      "assets/projects/kdl/image.png",
      "assets/projects/kdl/2.png",
      "assets/projects/kdl/image-2.png"
    ],
    "live": "",
    "links": [
      {
        "label": "KDL 인스타그램",
        "url": "https://www.instagram.com/kookmin_dreamleague/"
      }
    ]
  },
  {
    "slug": "scream",
    "title": "SCREAM!",
    "sub": "Festival Design",
    "date": "2025.08",
    "cats": [
      "Graphic"
    ],
    "role": "Visual identity",
    "cover": "assets/projects/scream/cover.jpg",
    "desc": "‘The Last Names’와 ‘BAND 404’의 연합 공연인 ‘SCREAM!’의 비주얼 아이덴티티 디자인입니다. 밴드의 열정과 힘찬 에너지 그리고 괴짜같은 면모를 유쾌하게 보여줍니다.",
    "client": "BAND 404",
    "images": [
      "assets/projects/scream/01.jpg",
      "assets/projects/scream/02.jpg",
      "assets/projects/scream/03.jpg",
      "assets/projects/scream/04.jpg"
    ]
  },
  {
    "slug": "yeogi-mr",
    "title": "여기어때 MR 리디자인",
    "sub": "visionOS App Design Proposal",
    "date": "2026.04",
    "cats": [
      "UX · UI"
    ],
    "role": "UX · UI design",
    "cover": "assets/projects/yeogi-mr/cover.jpg",
    "desc": "MR 공간에서의 유저 경험을 바탕으로 Vision OS에서 작동하는 여기어때 어플리케이션 디자인 제안입니다. 공간 컴퓨팅 환경에 최적화된 인터페이스와 사용자 경험을 설계했습니다.",
    "client": "개인 작업",
    "images": [
      "assets/projects/yeogi-mr/01.jpg",
      "assets/projects/yeogi-mr/02.jpg",
      "assets/projects/yeogi-mr/03.jpg",
      "assets/projects/yeogi-mr/04.jpg",
      "assets/projects/yeogi-mr/05.jpg",
      "assets/projects/yeogi-mr/06.jpg",
      "assets/projects/yeogi-mr/07.jpg",
      "assets/projects/yeogi-mr/08.jpg",
      "assets/projects/yeogi-mr/09.jpg",
      "assets/projects/yeogi-mr/10.jpg",
      "assets/projects/yeogi-mr/11.jpg",
      "assets/projects/yeogi-mr/12.jpg",
      "assets/projects/yeogi-mr/13.jpg",
      "assets/projects/yeogi-mr/14.jpg",
      "assets/projects/yeogi-mr/15.jpg"
    ],
    "tools": "Figma, Blender"
  },
  {
    "slug": "open-gallery",
    "title": "The Open Gallery",
    "sub": "Exhibition · Buenos Aires",
    "date": "2025.06",
    "cats": [
      "Graphic"
    ],
    "role": "AI artwork ‘SUPER HERO’",
    "cover": "assets/projects/open-gallery/cover.jpg",
    "desc": "Grand Brizo Bel Air Hotel(Buenos Aires)에서 개최된 The Open Gallery 전시에 출품한 작품입니다. AI 생성형 아트를 활용한 창작 작업을 선보였습니다.",
    "client": "개인 작업",
    "images": [
      "assets/projects/open-gallery/01.jpg",
      "assets/projects/open-gallery/02.jpg"
    ]
  }
];

window.PLAYER = {
  "name": "IRANG NAM",
  "nameKo": "남이랑",
  "klass": "DESIGNER",
  "bio": "버추얼 캐릭터의 설정과 세계관을 기획하고, 영상과 3D 시제품으로 직접 만들어 확인하는 디자이너 남이랑입니다.",
  "focus": "Character Concept · Story · Prototyping (AI video, 3D)",
  "education": [
    "국민대학교 조형대학 AI디자인학과",
    "국민대학교 경영대학 경영학과 (복수전공)"
  ],
  "quests": [
    [
      "2026",
      "AI디자인학과 학생회장",
      "AI디자인학과 3대 학생회 로그(log)"
    ],
    [
      "2025 — 2026",
      "미대입시 전문 정보센터 그리날다",
      "편집디자이너 · 입시 정보 콘텐츠 편집 및 디자인"
    ],
    [
      "2025",
      "AI 창작 플랫폼 Carat",
      "4기 크리에이터 · 생성형 AI를 활용한 비주얼 아트 제작 및 실험"
    ]
  ],
  "trophies": [
    [
      "2026",
      "KMU-SIT gPBL 일본 워크숍 참가"
    ],
    [
      "2025",
      "Open Gallery 아르헨티나 AI Artists 쇼케이스 출품 — ‘SUPER HERO’"
    ],
    [
      "2025",
      "데이터분석 준전문가 (ADsP)"
    ],
    [
      "2024",
      "화성시 AI CF 공모전 특별상"
    ],
    [
      "2024",
      "Microsoft Certified: Azure AI Fundamentals"
    ],
    [
      "2024",
      "한국디자인진흥원 디자인 워크샵 수료"
    ],
    [
      "2024",
      "E²GEE LAB MAKEATHON 디자이너 참여"
    ]
  ],
  "email": "skadlfkd0203@gmail.com",
  "instagram": "nytrcak",
  "heroLine": "I'm [Irang Nam]. I plan virtual characters — who they are, how they talk, what world they live in — and prototype them myself.",
  "aboutLine": "캐릭터가 어떤 아이인지 정하고, [직접 움직이는 시제품]으로 만들어 봅니다.",
  "bio2": "국민대학교 조형대학 AI디자인학과에서 공부하고 있습니다. 버추얼 아바타 SEIA는 캐릭터 설정부터 움직이는 시제품까지 AI 에이전트와 함께 만들었고, kt wiz 파크 미디어월 영상과 NC와 함께한 AI 영상 프로젝트에 참여했습니다."
};
