import axios from "axios";
class JeopardyService {
  constructor(
    url = "http://jservice.io/api/random?count=",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  getQuestion(number = 1) {
    return this.client.get(this.url + number);
  }
}
export default JeopardyService;
