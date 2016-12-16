import React from 'react'
import {observer} from 'mobx-react'
import snippetStore from '../SnippetStore'
import {LinkContainer} from 'react-router-bootstrap'
import * as Bs from 'react-bootstrap'

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    snippetStore.fetchSnippets()
    .then((snips) => {
      console.log(snippetStore.snippets)
    })
  }
  render(){
    const snip = snippetStore.snippets
    return (
      <div className='wrapper'>
      <Bs.Navbar bsClass ='nav sidebar fixed-top'>
        <Bs.Nav bsClass='nav'>
          <LinkContainer to='/'>
            <Bs.NavItem>
              Home
            </Bs.NavItem>
          </LinkContainer>
        </Bs.Nav>
      </Bs.Navbar>
      <Bs.Grid fluid={true}>
        { this.props.children }
      </Bs.Grid>
      </div>
    )
  }

}

