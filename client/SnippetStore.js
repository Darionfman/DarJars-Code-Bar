import {observable, action} from 'mobx'
import axios from 'axios'

class SnippetStore {
  @observable snippets

  constructor(){
    this.snippets = []
  }

  fetchSnippets(){
    //axios call to fetch all code snippets
    return axios.get('/api/snippets')
    .then(action((snips) => this.snippets.push(snips.data)))
  }

}
const snippetStore = new SnippetStore()

export default snippetStore
export { SnippetStore }
