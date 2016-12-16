import React from 'react'
import {observer} from 'mobx-react'
import snippetStore from '../SnippetStore'

@observer
export default class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    snippetStore.fetchSnippets()
    .then((snips) => {
      console.log(snippetStore.snippets)
    })
  }
  render(){
    const snip = snippetStore.snippets
    return <div>{snip}</div>
  }

}

