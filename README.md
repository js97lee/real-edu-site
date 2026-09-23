# REAL-Edu

리얼데이의 실전형 AI·웹·하드웨어 교육 플랫폼 홈페이지입니다.

- Live site: https://real-edu-lab.jisulee0317.chatgpt.site
- Stack: HTML, CSS, vanilla JavaScript
- Typeface: NanumSquare Neo

## Structure

- `dist/index.html` — website source
- `dist/assets/real-edu-hero.png` — hero artwork
- `.openai/hosting.json` — site deployment configuration

## Course commerce preview

- `dist/catalog.js`, `dist/commerce.js` — shared catalog, sample prices, browser-local cart and checkout preview.
- `dist/product-design.html` — industrial/product design course.
- `dist/login.html`, `dist/signup.html`, `dist/reset-password.html` — validated account UI, without a live authentication service.
- `dist/cart.html`, `dist/checkout.html`, `dist/order-complete.html` — add/remove, deduplication, totals, guest checkout form and explicitly simulated result.
- `dist/privacy.html`, `dist/terms.html`, `dist/refund.html` — policies describing the current preview and outstanding business details.

Special workshops retain KRW 100,000. The seven other course prices are explicitly marked as design-preview prices. No payment or account is created. Passwords and applicant details are not stored or sent. The cart stores only course IDs in localStorage; the session order preview stores only course IDs, amount, method and preview ID. Real authentication, payment provider integration, verified business details and final operating policies are required before accepting actual online orders.

Verified locally: cart persistence, removal and empty state; product-design checkout total and result; signup password mismatch and valid-input handling; mobile cart/header; nine catalog prices and three learning pictograms; local page/asset links and JavaScript syntax.

## Local preview

```bash
python3 -m http.server 4173 --directory dist
```
