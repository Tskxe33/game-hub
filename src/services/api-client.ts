import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "00b4c09cc3ac4f8faec2bfcaef065a58",
  },
});
