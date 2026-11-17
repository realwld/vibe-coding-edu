# VIBE LAB

고3 학생들의 바이브코딩 결과물을 소개하는 정적 전시관입니다. HTML, CSS, JavaScript만 사용하며 패키지 설치나 빌드가 필요 없습니다. 음성고등학교 결과물과 학습용 예시를 각각의 목록 페이지에서 소개합니다. 현재 학생 작품은 등록 대기 중이며, 실행 가능한 예시는 집중 타이머와 자기소개 페이지입니다.

## 로컬 실행

```sh
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 을 엽니다. 첫 화면은 전시관입니다. `projects/eumseonghs/`는 음성고 작품 목록, `projects/examples/`는 예시 목록이며, `projects/examples/focus/`에서 집중 타이머를 실행할 수 있습니다. 집중 25분 / 휴식 5분 전환, 시작·일시 정지·초기화와 완료 횟수를 지원합니다. 완료 횟수는 현재 페이지를 열어 둔 동안만 유지됩니다. 타이머는 자동으로 다음 모드로 넘어가지 않습니다.

## GitHub Pages 배포

1. 이 코드를 `realwld/vibe-coding-edu` 저장소의 `main` 브랜치에 push합니다.
2. GitHub 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다. 저장소 관리자 권한이 필요합니다.
3. **Actions → Deploy GitHub Pages**의 성공 여부를 확인합니다. 설정 후 실행되지 않으면 **Run workflow**로 실행합니다.
4. 배포가 성공하면 https://realwld.github.io/vibe-coding-edu/ 에서 열 수 있습니다.

워크플로는 공개할 HTML·CSS·JS 파일과 `projects/`만 배포합니다. 저장소 설정, README 및 Git 메타데이터는 배포 파일에 포함하지 않습니다.

## 실제 작품으로 바꾸기

자세한 폴더 구성과 메인 페이지 반영 요청 방법은 [작품 추가 안내](PROJECT_GUIDE.md)를 참고하세요.

- `index.html`: 음성고등학교·예시 목록으로 연결되는 메인 페이지입니다. 각 목록의 작품 수와 등록 상태를 표시합니다.
- `projects/eumseonghs/index.html`: 음성고등학교 학생 작품 목록입니다.
- `projects/examples/index.html`: 집중 타이머, 자기소개 등 예시 작품 목록입니다. 기획 단계인 영화 프로젝트는 준비 중으로 표시합니다.
- `projects/examples/focus/`: 집중 타이머 예시입니다. 학생 작품은 `projects/eumseonghs/작품이름/`, 예시 작품은 `projects/examples/작품이름/`에 추가합니다.
- 작품을 늘리면 해당 목록의 `article.work-card`를 추가하고 작품 번호·실행 가능한 작품 수(`.count`)·메인 페이지의 수량을 수정합니다. 학생 작품을 처음 추가할 때는 빈 상태 안내를 교체합니다.
- 홈·목록·작품 실행·CSS·JavaScript 파일은 상대 경로로 연결합니다. 대표 URL과 GitHub 코드 링크는 실제 배포·저장소 주소를 사용합니다.
- Google Fonts를 사용하며, 연결할 수 없으면 기기의 기본 sans-serif 글꼴로 표시됩니다.

학생 이름 대신 팀명이나 닉네임을 사용해도 됩니다. 서버, 계정, 데이터베이스는 필요하지 않습니다.
