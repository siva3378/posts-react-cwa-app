import { decorate, observable, action, flow } from "mobx"

class _PostStore {
  page = 0;
  _posts = [];

  get currentPage() {
    return this.page;
  }

  nextPage() {
    this.page = this.page + 10;
    console.log(this.page);
  }
}

decorate(_PostStore, {
  page: observable,
  skip: observable,
  _posts: observable,
  nextPage: action.bound
})

export default new _PostStore();