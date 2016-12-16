import React from 'react'
import {observer} from 'mobx-react';

@observer
export default class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log(this.props)
  }
  render(){
    return <div>Suh Dude!</div>
  }

}
App.propTypes = {
  store: React.PropTypes.object.isRequired,
}
