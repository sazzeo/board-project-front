import { Member } from "@/types/member";

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

export class BlogMember extends Member {
  title? = "";
  subTitle? = "";
  tagYn? = false;
  tagMin? = 0;
  tagCardinal? = 0;
}
