# IRANG NAM — Portfolio

타이포 중심의 정적 사이트입니다. 빌드 과정 없이 폴더 그대로 올리면 됩니다.

## 구조
- `index.html` — 메인(소개 → About → Work → Path → Contact, 프로젝트 상세는 같은 페이지 위에 열림)
- `seia.html` — 웹캠으로 SEIA를 움직여 보는 페이지
- `js/projects.js` — **프로젝트와 프로필 내용. 여기만 고치면 됩니다.**
- `assets/projects/<slug>/` — 프로젝트별 이미지 (`cover.jpg` = 썸네일)
- `assets/seia/` — SEIA 이미지, `dance.mp4`(춤 영상을 이 이름으로 넣으면 자동 표시)
- `assets/seia_web.vrm` — 웹용으로 가볍게 만든 SEIA 모델

## 프로젝트 추가
`js/projects.js` 맨 위 주석 참고. 새 분야 이름을 `cats`에 쓰면 탭이 자동으로 생깁니다.

## 로컬에서 보기
웹캠과 3D 모델은 파일을 더블클릭해서는 동작하지 않습니다. 이 폴더에서 `python3 -m http.server 8765` 실행 후 http://localhost:8765 로 접속하세요.

## 편집 페이지
터미널에서 `python3 serve.py` 실행 → http://localhost:8765/admin.html
- 텍스트, 분야, 썸네일, 상세 이미지, 워크플로우, 프로필을 폼에서 고치고 **저장**을 누르면 `js/projects.js`와 `assets/projects/`에 반영됩니다.
- 저장할 때마다 이전 내용이 `js/backups/`에 남습니다(최근 20개).
- **게시**를 누르면 공개 사이트(https://irangnam.github.io/portfolio/)에 올라갑니다. 편집 페이지와 serve.py는 공개 사이트에 올라가지 않습니다(.gitignore).
