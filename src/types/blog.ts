export class Blog {
  url? = "";
  title? = "";
  subTitle? = "";
}

export class BlogInfo extends Blog {
  constructor() {
    super();
    this.name = "";
    this.id = "";
  }
  name? = "";
  id? = "";
}
