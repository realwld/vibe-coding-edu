# 음성고 작품 추가 및 메인 페이지 반영 안내

## 기본 작업 방식

학생 작품을 `projects/eumseonghs/` 아래에 작품별 폴더로 추가합니다. 파일을 올린 뒤 Codex에 메인 페이지 반영을 요청하면, 폴더와 코드를 확인해 해당 목록의 작품 카드·실행 링크·작품 수와 메인의 수량을 수정하고 GitHub Pages에 재배포합니다.

**폴더를 추가하는 것만으로 메인 페이지에 카드가 자동 생성되지는 않습니다.** 현재는 해당 폴더의 목록 `index.html`과 루트 `index.html`의 수량을 함께 수정하는 방식입니다.

## 폴더 구성

```text
projects/eumseonghs/
├── index.html             # 음성고 학생 작품 목록
└── new-project/           # 새 작품마다 별도 폴더
    ├── index.html
    ├── style.css
    ├── script.js
    └── assets/            # 이미지 등 필요한 경우 추가
```

- 작품의 시작 파일은 `index.html`로 저장합니다.
- CSS·JavaScript 파일명은 자유롭게 정하되 HTML에서 실제 파일명을 연결합니다.
- 폴더명은 공백 없는 영문 소문자·숫자·하이픈 사용을 권장합니다.
- 파일명과 경로의 대소문자를 정확하게 맞춥니다.
- 기존 작품을 유지하려면 같은 폴더를 덮어쓰지 않고 새 폴더를 만듭니다.

작품 안에서 사용하는 파일은 다음처럼 상대 경로로 연결합니다.

```html
<link rel="stylesheet" href="./style.css">
<script src="./script.js" defer></script>
<img src="./assets/preview.png" alt="작품 화면">
```

`projects/eumseonghs/작품폴더/index.html`에서 전시관으로 돌아가는 상대 경로는 `../../../`입니다.

```html
<a href="../../../">전시관으로 돌아가기</a>
```

## 작품과 함께 전달할 정보

| 항목 | 예시 |
| --- | --- |
| 작품 폴더 | `projects/eumseonghs/new-project/` |
| 작품명 | 오늘의 공부 계획 |
| 한 줄 소개 | 하루 공부 계획을 기록하고 완료 여부를 확인하는 웹 앱 |
| 작성자 표시 | 3학년 1팀 또는 팀 별칭 |
| 대표 이미지 | `assets/preview.png` — 있으면 전달 |

작품명·소개·팀명을 제공하면 그대로 반영합니다. 정보가 없으면 코드를 바탕으로 작품명과 소개를 작성하고, 실제 학생 이름이나 팀명은 임의로 만들지 않습니다.

## Codex에 요청하는 예시

```text
projects/eumseonghs/new-project/에 작품을 추가했어.
작품명은 ‘오늘의 공부 계획’, 팀명은 ‘3학년 1팀’이야.
소개는 ‘하루 공부 계획을 기록하고 완료 여부를 확인하는 웹 앱’으로 해줘.
음성고 작품 목록에 추가하고 메인 페이지의 작품 수도 반영해서 재배포해줘.
기존 작품은 유지해줘.
```

여러 작품을 한꺼번에 추가한 경우 폴더별로 같은 정보를 전달하면 됩니다.

## 메인 페이지 반영 작업

1. 새 작품 폴더의 HTML·CSS·JavaScript와 연결된 파일을 확인합니다.
2. `projects/eumseonghs/index.html`에 `article.work-card`를 추가하고 작품명·소개·작성자·기술 태그를 반영합니다. 첫 학생 작품을 등록할 때는 빈 상태 안내를 교체합니다.
3. 카드 이미지 영역과 ‘작품 실행’ 링크를 모두 해당 작품의 배포 주소로 연결합니다.
4. ‘GitHub에서 코드 보기’ 링크를 해당 작품의 소스 폴더로 연결합니다.
5. 목록의 작품 번호와 실행 가능한 작품 수(`.count`), 루트 `index.html`의 해당 목록 수량을 수정합니다. 준비 중인 작품은 실행 가능한 작품 수에 포함하지 않습니다.
6. 실제 학생 작품에는 ‘예시 작품’ 표시를 사용하지 않으며, 소개 영역도 실제 전시 내용에 맞게 조정합니다. 기존 학습용 예시를 유지하면 그 작품의 예시 표시는 남깁니다.
7. 경로와 필요한 동작을 검증하고, 변경 사항을 커밋·push한 뒤 배포 성공과 공개 페이지 반영을 확인합니다.

## 주소 규칙

작품 폴더가 `new-project`라면 다음 주소를 사용합니다.

- 전시관: https://realwld.github.io/vibe-coding-edu/
- 작품 실행: https://realwld.github.io/vibe-coding-edu/projects/eumseonghs/new-project/
- 작품 소스: https://github.com/realwld/vibe-coding-edu/tree/main/projects/eumseonghs/new-project

## 배포 확인

`main` 브랜치에 push하면 `.github/workflows/pages.yml`이 자동으로 배포합니다. GitHub의 **Actions → Deploy GitHub Pages**에서 결과를 확인합니다.

코드 변경 없이 다시 배포하려면 같은 워크플로의 **Run workflow**에서 `main`을 선택합니다. 로컬 변경 사항은 먼저 커밋·push해야 재배포에 포함됩니다.

배포 후 메인 카드, 작품 실행, CSS·JavaScript·이미지 로딩, 전시관으로 돌아가기 링크를 확인합니다.

## 목록 페이지와 예시 작품

- 메인 전시관: `/vibe-coding-edu/`
- 음성고 학생 작품 목록: `/vibe-coding-edu/projects/eumseonghs/`
- 예시 작품 목록: `/vibe-coding-edu/projects/examples/`
- 집중 타이머 예시: `/vibe-coding-edu/projects/examples/focus/`
- 자기소개 예시: `/vibe-coding-edu/projects/examples/introduce/`

학생 결과물은 `projects/eumseonghs/`, 학습용 예시는 `projects/examples/` 아래에 추가합니다. 각 디렉터리의 `index.html`은 목록 페이지이므로 작품 파일로 덮어쓰지 않습니다.

예시를 추가할 때도 같은 절차로 `projects/examples/index.html`의 카드와 수량, 메인 페이지의 예시 수량을 수정합니다. 기획 문서만 있는 작품은 ‘준비 중’으로 표시하고 실행 링크는 완성 후 추가합니다.

작품에서 자기 목록으로 돌아가려면 `<a href="../">작품 목록으로</a>`, 메인 전시관으로 돌아가려면 `<a href="../../../">전체 전시관으로</a>`를 사용합니다.
