import {observable, action, useStrict} from 'mobx'
import axios from 'axios'

useStrict(true)
class SnippetStore {
  @observable snippets = null

  constructor(){
    this.snippets 
  }

  @action fetchSnippets(){
    //axios call to fetch all code snippets
    return axios.get('/api/snippets')
    .then(action((snips) => this.snippets = snips.data ))
  }

}
const snippetStore = new SnippetStore()

export default snippetStore
export { SnippetStore }
