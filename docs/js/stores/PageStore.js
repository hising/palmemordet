import request from 'superagent';
import {observable} from 'mobx';
import marked from 'marked';

class PageStore {
  @observable currentPage = "";

    loadPage(pageName) {
    let path = `/pages/${pageName}.md`;
    request
      .get(path)
      .end((err, response) => {
        if (err) {
          return;
        }

        let markdown = response.text;
        this.currentPage = marked(markdown);

      });
  }
}
const pageStore = new PageStore();
export default pageStore;
