/* 이 파일은 편집 페이지(admin.html)가 저장합니다. 직접 고쳐도 되지만, 편집 페이지를 쓰는 편이 안전합니다. */
window.PROJECTS = [
  {
    "slug": "kt-wiz",
    "title": "kt wiz 미디어월 AI 영상",
    "sub": "AI Video for the kt wiz park Media Wall & Media Facade",
    "date": "2026.07",
    "cats": [
      "AI",
      "Animation"
    ],
    "client": "kt wiz",
    "role": "AI 영상 제작 · 국민대학교 AI디자인랩 산학 프로젝트 학부연구원",
    "tools": "Kling 3.0 · Photoshop · Topaz · Premiere Pro",
    "desc": "수원 kt wiz 파크의 미디어파사드와 미디어월에 송출된 생성형 AI 영상 제작 프로젝트입니다. 2025년 겨울부터 2026년 여름까지 진행했고, 건물 외벽에 프로젝터로 투사하는 미디어파사드와 복도를 따라 길게 세워진 LED 미디어월 영상을 만들었습니다. 여기서는 그중 미디어월 ‘바캉스’ 영상을 소개합니다. 낮과 밤이 바뀌고 다시 처음으로 돌아오는 약 30초 길이의 바닷가 루핑 영상입니다.",
    "cover": "assets/projects/kt-wiz/2026-11-16-4-45-31.png",
    "images": [],
    "process": [
      {
        "t": "Scope",
        "d": "초반 테스트로 시나리오를 확정한 뒤 제작 → 수정 → 최종본 → 송출 순서로 진행했습니다. 미디어파사드와 미디어월을 합쳐 여러 편의 영상을 맡았습니다.",
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
        "img": "assets/projects/kt-wiz/IMG_0500.jpg",
        "imgs": [
          "assets/projects/kt-wiz/IMG_0630.jpg",
          "assets/projects/kt-wiz/SE-ff538c35-ee69-4fcd-956f-fecaa18ce259.jpg",
          "assets/projects/kt-wiz/SE-e2dece12-a39f-4ecc-a917-0efe7fcaa170.jpg",
          "assets/projects/kt-wiz/SE-e4c4241e-64b4-4056-9c65-8e239d0732d8.jpg"
        ]
      }
    ],
    "compact": true
  },
  {
    "slug": "pepperoni-pizza",
    "title": "Pepperoni Pizza",
    "sub": "AI Animation Film",
    "date": "2026.08",
    "cats": [
      "3D",
      "Animation",
      "AI"
    ],
    "role": "Team project | 조유빈, 남이랑",
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
        "label": "개인 블로그",
        "url": "https://blog.naver.com/rima_05/224410157143"
      }
    ]
  },
  {
    "slug": "kdl",
    "title": "Kookmin Dream League",
    "sub": "KDL 2026 Season Promotion",
    "date": "2026.04",
    "cats": [
      "Branding",
      "Graphic",
      "Marketing"
    ],
    "role": "Visual design · Promotion",
    "cover": "assets/projects/kdl/cover.jpg",
    "desc": "제1회 국민대배 대학드림리그 KDL의 2026시즌 비주얼 디자인 및 홍보입니다. 대학 야구 리그의 열정과 젊음을 생동감 있는 타이포그래피와 밝은 컬러로 표현했습니다.",
    "client": "국민대학교 WINDMILLS",
    "images": [
      "assets/projects/kdl/01.jpg",
      "assets/projects/kdl/02.jpg",
      "assets/projects/kdl/03.jpg"
    ]
  },
  {
    "slug": "seia",
    "title": "버추얼 아바타 SEIA",
    "sub": "Original VTuber Avatar",
    "date": "2026.11",
    "cats": [
      "3D",
      "Character",
      "Virtual"
    ],
    "role": "Character design · 3D · Rigging · Texture",
    "tools": "Tripo · Blender · Unity · UniVRM · three.js · MediaPipe · Claude (AI agent)",
    "cover": "assets/seia/cover2.jpg",
    "desc": "가상 아이돌이자 오리지널 버튜버 캐릭터 ‘세이아’. 캐릭터 기획부터 3D 모델 정리, 리깅, 표정, 텍스처 페인팅, VRM 세팅까지 단 이틀만에 혼자서 진행했습니다. Try it live에서 춤을 추게 하거나 윙크를 시켜 보고, 웹캠이 있으면 직접 세이아가 되어 볼 수 있습니다.",
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
    "featured": true
  },
  {
    "slug": "scream",
    "title": "SCREAM!",
    "sub": "Festival Design",
    "date": "2025.08",
    "cats": [
      "Branding",
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
      "UI",
      "UX"
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
    "slug": "windmills",
    "title": "WINDMILLS",
    "sub": "Contents Design",
    "date": "2026.03",
    "cats": [
      "Branding",
      "Graphic",
      "Marketing"
    ],
    "role": "SNS renewal · Graphic",
    "cover": "assets/projects/windmills/cover.jpg",
    "desc": "2026 야구동아리 WINDMILLS의 SNS 콘텐츠 리뉴얼입니다. 선수들의 개성과 팀의 열정을 강조하는 비주얼 시스템을 구축했습니다.",
    "client": "국민대학교 WINDMILLS",
    "images": [
      "assets/projects/windmills/01.jpg",
      "assets/projects/windmills/02.jpg",
      "assets/projects/windmills/03.jpg",
      "assets/projects/windmills/04.jpg",
      "assets/projects/windmills/05.jpg"
    ]
  },
  {
    "slug": "open-gallery",
    "title": "The Open Gallery",
    "sub": "Exhibition · Buenos Aires",
    "date": "2025.06",
    "cats": [
      "Art"
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
  "bio": "리서치부터 브랜딩, 그래픽, 영상, 실물 제작까지 연결하는 디자이너입니다.",
  "focus": "UX/UI · BI · Graphic · AI Design",
  "education": [
    "국민대학교 조형대학 AI디자인학과",
    "국민대학교 경영대학 경영학과 (복수전공) — 재학중"
  ],
  "quests": [
    [
      "2025 — NOW",
      "미대입시 전문 정보센터 그리날다",
      "편집디자이너 · 입시 정보 콘텐츠 편집 및 디자인, 브랜드 아이덴티티 관리"
    ],
    [
      "2025",
      "AI 창작 플랫폼 Carat",
      "4기 크리에이터 · 생성형 AI를 활용한 비주얼 아트 제작 및 실험"
    ],
    [
      "2021 — 2022",
      "국가교육회의 청년특별위원회",
      "청년 위원 · 청년 관점의 교육 현안 논의 및 정책 제안"
    ]
  ],
  "trophies": [
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
  "instagram": "nytrcak"
};
