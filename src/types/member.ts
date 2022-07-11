export class LoginMember {
  id = "";
  password = "";
}

export class Member extends LoginMember {
  name = "";
  email = "";
  phone = "";
  postCode? = "";
  addr? = "";
  detailAddr? = "";
  regDate? = "";
}
