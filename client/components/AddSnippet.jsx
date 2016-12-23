import React from 'react'
import {observer} from 'mobx-react'
import * as bs from "react-bootstrap"

@observer
export default class AddSnippet extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log('this.props')
  }
  FieldGroup({ id, label, help, ...props }) {
    return (
      <bs.FormGroup controlId={id}>
        <bs.ControlLabel>{label}</bs.ControlLabel>
        <bs.FormControl {...props} />
        {help && <bs.HelpBlock>{help}</bs.HelpBlock>}
      </bs.FormGroup>
    )
  }
  submitValues(e){
    e.preventDefault()
    console.log(`the refs are not working for some reason`)
  }
  render(){
    let FieldGroup = this.FieldGroup
    return (
      <bs.Grid>
        <form onSubmit={(e) => this.submitValues(e)}>
          <bs.Row>
            <bs.Col md={12}>
            <FieldGroup
              id='Title'
              type='text'
              label='Snippet Title'
              placeholder='Insert Snippet Title'
              defaultValue=''
            />
            </bs.Col>
          </bs.Row>
        </form>
      </bs.Grid>
      )
  }

}
