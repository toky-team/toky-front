const onClickKakaoLogin = () => {
  window.location.href =
    import.meta.env.VITE_API_URL + `/auth/login/kakao?callback=${import.meta.env.VITE_CLIENT_URL}/signup`;
};

export default onClickKakaoLogin;
