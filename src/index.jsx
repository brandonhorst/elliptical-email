/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'
import Validator from 'lacona-phrase-validator'

export default class Email extends Phrase {
  getValue(result) {
    return `${result.firstPart}@${result.secondPart}`
  }

  firstPart(input) {
    return /^[^\s@]+$/.test(input)
  }

  secondPart(input) {
    return /^[^\s@]+$/.test(input)
  }

  describe() {
    return (
      <sequence>
        <choice limit={1} id='firstPart'>
          <placeholder text='example' />
          <Validator validate={this.firstPart} />
        </choice>
        <literal text='@' />
        <choice limit={1} id='secondPart'>
          <placeholder text='example.com' />
          <Validator validate={this.secondPart} />
        </choice>
      </sequence>
    )
  }
}
