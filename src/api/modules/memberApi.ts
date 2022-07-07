import { Member } from "@/types/member";
import axios from "axios";

export default {
  addMember: (member: Member) => {
    return axios({
      url: "/api/board/join",
      method: "post",
      data: { ...member },
    });
  },
};
