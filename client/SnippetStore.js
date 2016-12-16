import {observable, action} from 'mobx'
import axios from 'axios'

class SnippetStore {
  @observable snippets = null

  @action fetchSnippets(){
    //axios call to fetch all code snippets
    axios.get('api/snippets')
    .then(snippets => this.snippets = snippets)
  }
  
}

const store = new SnippetStore

export default store