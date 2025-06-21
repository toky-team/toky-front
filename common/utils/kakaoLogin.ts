export function onClickKakaoLogin() {
  window.location.href = process.env.NEXT_PUBLIC_API_URL + `/auth/login/kakao?callback=${process.env.NEXT_CLIENT_URL}`;
}
