export class LoginMember {
  id = "";
  password = "";
}

export class Member extends LoginMember {
  name = "";
  email? = "";
  phone? = 0;
  postCode? = "";
  addr? = "";
  detailAddr? = "";
  regDate? = "";
  authToken? = "";
}
