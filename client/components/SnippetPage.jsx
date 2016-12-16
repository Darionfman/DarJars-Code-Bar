import React from 'react'
import {observer} from 'mobx-react';

@observer
export default class SnippetPage extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log('this.props')
  }
  render(){
    return <div>no</div>
  }

}
