/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export default class Email extends Phrase {
  // getValue(result) {
    // return `${result.firstPart}@${result.secondPart}.${result.thirdPart}`
  // }

  displayWhen (input) {
    return /^[\d\w_+.@-]*$/.test(input)
  }

  filter (input) {
    return /^[\d\w_+.-]+@[\d\w_.-]{1,63}\.\w{2,63}$/.test(input)
  }

  describe() {
    return (
      <argument text='email address' displayWhen={this.displayWhen}>
        <freetext validate={this.filter} />
      </argument>
    )
  }
}
