import {observable, computed} from 'mobx'
import axios from 'axios'

class SnippetStore {
  @observable snippets = null

  @computed get snippets() {
    if (this.snippets == null) {
      this.fetchSnippets();
    }
    return this.snippets;
  }

  fetchSnippets(){
    //axios call to fetch all code snippets
    axios.get('api/snippets')
    .then(snippets => this.snippets = snippets)
  }
}

const store = new SnippetStore

export default store