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

  submitValues(e,form){
    e.preventDefault()
    console.log(form)
  }
  render(){
    const FieldGroup = this.FieldGroup
    let form = {}
    return (
      <bs.Grid>
        <form onSubmit={(e) => this.submitValues(e,form)}>
          <bs.Row>
            <bs.Col md={12}>
              <bs.FormGroup controlId='Title'>
                <bs.ControlLabel>Snippet Title</bs.ControlLabel>
                <bs.FormControl defaultValue='' type='text' placeholder='Insert Snippet Title' inputRef={el => form.title = el} />
              </bs.FormGroup>
            </bs.Col>
          </bs.Row>
        </form>
      </bs.Grid>
      )
  }

}
