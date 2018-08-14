import Signup from "../pages/Signup";

const fakeAuth = {
  isAuthenticated() {
    return true;
  },
  login(email, passwordf) {
    console.log("logging in");
  },
  signout() {
    console.log("signing out");
  },
  signup(email, password) {
    console.log("Signing up");
  },
  getUserInfo() {
    console.log("user information");
  },
  getToken() {
    console.log("token things");
  }
};

export default fakeAuth;
