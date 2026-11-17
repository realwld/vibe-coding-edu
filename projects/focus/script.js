const durations = { focus: 25 * 60, break: 5 * 60 };
let mode = 'focus';
let remaining = durations.focus;
let deadline = 0;
let interval = null;
let completed = 0;
const time = document.querySelector('#time');
const start = document.querySelector('#start');
const status = document.querySelector('#status');
const progress = document.querySelector('#progress');

function render() {
  const display = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
  time.textContent = display;
  document.title = `${display} · ${mode === 'focus' ? '집중' : '휴식'} — 집중 한 조각`;
  progress.style.strokeDashoffset = String(100 * (1 - remaining / durations[mode]));
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function tick() {
  // 실제 종료 시각을 기준으로 계산해 탭을 옮겨도 시간 오차가 쌓이지 않습니다.
  remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  render();
  if (remaining === 0) {
    stop();
    if (mode === 'focus') {
      completed += 1;
      document.querySelector('#completed').textContent = String(completed);
    }
    status.textContent = mode === 'focus' ? '한 조각 완료! 5분 휴식으로 잠깐 쉬어 가세요.' : '잘 쉬었나요? 다시 한 조각 시작해 보세요.';
    start.textContent = '다시 시작하기 ↗';
  }
}

start.addEventListener('click', () => {
  if (interval !== null) {
    tick();
    if (interval === null) return;
    stop();
    start.textContent = '이어서 시작하기 ↗';
    status.textContent = '잠시 멈췄어요. 내 속도로 이어 가세요.';
    return;
  }
  if (remaining === 0) remaining = durations[mode];
  deadline = Date.now() + remaining * 1000;
  interval = setInterval(tick, 250);
  start.textContent = '잠시 멈추기 Ⅱ';
  status.textContent = mode === 'focus' ? '좋아요. 지금은 한 가지에만 집중해요.' : '화면에서 눈을 떼고 가볍게 스트레칭해 보세요.';
  render();
});

function reset() {
  stop();
  remaining = durations[mode];
  start.textContent = mode === 'focus' ? '집중 시작하기 ↗' : '휴식 시작하기 ↗';
  status.textContent = '준비되면 시작해 보세요.';
  render();
}

document.querySelector('#reset').addEventListener('click', reset);
document.querySelectorAll('[data-mode]').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.mode === mode) return;
    mode = button.dataset.mode;
    document.querySelectorAll('[data-mode]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#mode-label').textContent = mode === 'focus' ? '나에게 집중할 시간' : '잠깐, 쉬어 가는 시간';
    document.querySelector('#clock-note').textContent = mode === 'focus' ? '한 번에, 한 가지씩.' : '쉬는 시간도 소중하니까.';
    reset();
  });
});
document.addEventListener('visibilitychange', () => { if (interval !== null) tick(); });
render();
