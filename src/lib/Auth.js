class Auth {
  static setToken(token) {
    localStorage.setItem('token', token);
  }
  //----------------------------------------------------------------------------
  static getToken() {
    return localStorage.getItem('token');
  }
  //----------------------------------------------------------------------------
  static logout() {
    localStorage.removeItem('token');
  }
  //----------------------------------------------------------------------------
  static getPayload(){
    const token = this.getToken();
    if(!token) return null;
    const parts = token.split('.');
    // const [ , encryptedPayload] = token.split('.');
    if(parts.length < 3) return null;
    // json.parser(encryptedPayload) to get the JSON string
    // JSON.stringify(content) to put into a string
    return JSON.parse(atob(parts[1]));
  }
  //----------------------------------------------------------------------------
  static isAuthenticated() {
    const payload= this.getPayload();
    if(!payload) return false;
    const now = Math.round(Date.now() / 1000 );
    return now < payload.exp;
  }
  //----------------------------------------------------------------------------
  static isCurrentUser(user){
    return this.isAuthenticated() && user._id === this.getPayload().sub;
  }
}
//------------------------------------------------------------------------------
export default Auth;
