(() => {
  const key = 'realEduAdminPreviewSession';
  const loginPage = location.pathname.endsWith('/admin-login.html');
  const valid = () => { try { return Number(sessionStorage.getItem(key)) > Date.now(); } catch { return false; } };
  if (!loginPage && !valid()) { location.replace('admin-login.html'); return; }
  document.addEventListener('DOMContentLoaded', () => {
    if (loginPage) {
      document.querySelector('#admin-login-form').addEventListener('submit', event => {
        event.preventDefault();
        const form = event.currentTarget;
        const values = new FormData(form);
        const message = document.querySelector('#login-message');
        if (values.get('email') !== 'admin@example.com' || values.get('password') !== 'realedu-demo') { message.textContent = '안내된 테스트 계정으로 입력해 주세요.'; return; }
        try { sessionStorage.setItem(key, String(Date.now() + 30 * 60 * 1000)); } catch { message.textContent = '브라우저 저장소를 사용할 수 없습니다.'; return; }
        form.reset(); location.replace('admin.html');
      });
      return;
    }
    const logout = document.createElement('button');
    logout.className = 'quiet'; logout.textContent = '로그아웃';
    logout.onclick = () => { try { sessionStorage.removeItem(key); } catch {} location.replace('admin-login.html'); };
    document.querySelector('.topbar > div').append(logout);
    const check = () => { if (!valid()) location.replace('admin-login.html'); };
    setInterval(check, 15000); window.addEventListener('pageshow', check);
  });
})();
