import jwt from "jsonwebtoken";

class AuthHeader {
  encodeUserPassword(token) {
    return jwt.sign({ password: token }, cert);
  }
}

export default new AuthHeader();
