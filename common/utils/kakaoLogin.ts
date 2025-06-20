export function onClickKakaoLogin() {
  window.location.href = process.env.NEXT_PUBLIC_API_URL + '/auth/login/kakao?callback=http://localhost:3000';
}
