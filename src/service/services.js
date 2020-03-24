import httpService from "./httpServices";
httpService.setAccessToken(httpService.getAccessToken());

export function registerFrom(data) {
  const { name, email, password } = data;
  const body = { name, email, password };
  return httpService
    .post("http://192.168.1.56:5000/api/users", body)
    .then(response => {
      return response;
    });
}
export function loginFrom(data) {
  const { email, password } = data;
  const body = { email, password };
  return httpService
    .post("http://192.168.1.56:5000/api/auth", body)
    .then(response => {
      return response;
    });
}

export function getProfile(idUser) {
  return httpService
    .get(`http://192.168.1.56:5000/api/profile/user/` + idUser)
    .then(profile => {
      return profile;
    });
}
export function updateProfile(body) {
  return httpService
    .post(`http://192.168.1.56:5000/api/profile`, body)
    .then(profile => {
      return profile;
    });
}

export function registerPostFrom(body) {
  return httpService
    .post(`http://192.168.1.56:5000/api/posts`, body)
    .then(profile => {
      return profile;
    });
}
export function getPost() {
  return httpService.get(`http://192.168.1.56:5000/api/posts`).then(post => {
    return post;
  });
}
