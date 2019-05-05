import React, { Component } from 'react';
import { connect } from 'react-redux'
// https://redux-form.com/7.3.0/docs/api/field.md/
// https://redux-form.com/7.3.0/docs/api/reduxform.md/
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
// https://v0.material-ui.com/v0.20.0/#/components/text-field
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)

    // 本classに従属するメソッドにpropsを紐付ける(当該メソッドでpropsを利用する)ために
    // constructorで当該メソッドをbindしています。
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        {/* 以下のいずれかに該当する場合はSubmitボタンが非活性状態となります。 */}
        {/* - 初期値と同じ場合 */}
        {/* - 送信中の場合 */}
        {/* - バリデーションエラーが有る場合 */}
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />}/>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  // タイトルが無かったらエラー
  if (!values.title) errors.title = "Enter a title, please."

  // ボディーが無かったらエラー
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapDispatchToProps = ({ postEvent })

// コンポーネントをreduxFormでwrapする(decorateするとも言ったりします)ことで
// コンポーネントのpropsが拡張され、pristine、submitting、invalid等の属性が追加されます。
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
