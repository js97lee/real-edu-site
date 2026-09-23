document.addEventListener('DOMContentLoaded', () => {
  const note = document.querySelector('#payment-note');
  if (!note) return;
  const panel = document.createElement('fieldset');
  panel.className = 'card-details';
  panel.innerHTML = `<legend>카드 결제 정보</legend><div class="form-columns"><label class="field">카드 종류<select name="cardType"><option value="credit">신용카드</option><option value="check">체크카드</option></select></label><label class="field">카드사<select name="cardIssuer" required><option value="">카드사를 선택해 주세요</option>신한카드</option><option>삼성카드</option><option>현대카드</option><option>KB국민카드</option><option>롯데카드</option><option>하나카드</option><option>우리카드</option><option>NH농협카드</option><option>BC카드</option><option>기타 카드</option></select></label></div><label class="field">결제 방식<select name="installment"><option value="0">일시불</option><option value="2">2개월</option><option value="3">3개월</option><option value="6">6개월</option><option value="12">12개월</option></select></label><p class="field-hint" id="installment-hint">할부 선택은 UI 예시입니다. 실제 가능 개월 수와 수수료는 PG 연결 후 카드사 조건에 따라 결정됩니다.</p><div class="card-flow"><span>01 카드 선택</span><span>02 PG 인증</span><span>03 결제 결과</span></div><p class="shop-note">카드번호·CVC는 이 사이트에서 입력받지 않습니다. 실제 결제 시 PG 보안 결제창에서 인증합니다. 현재 PG는 연결되지 않았습니다.</p>`;
  note.before(panel);
  const type = panel.querySelector('[name=cardType]');
  const installment = panel.querySelector('[name=installment]');
  function update() {
    const card = document.querySelector('[name=payment]:checked').value === 'card';
    panel.hidden = !card; panel.disabled = !card;
    const check = type.value === 'check';
    if (check) installment.value = '0';
    installment.disabled = !card || check;
    document.querySelector('#installment-hint').textContent = check ? '체크카드는 일시불로 결제합니다.' : '할부 선택은 UI 예시입니다. 실제 가능 개월 수와 수수료는 PG 연결 후 카드사 조건에 따라 결정됩니다.';
  }
  document.querySelectorAll('[name=payment]').forEach(input => input.addEventListener('change', update));
  type.addEventListener('change', update); update();
});
