/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export class EmailAddress extends Phrase {
  static defaultProps = {
    argument: 'email address'
  }

  suppressWhen (input) {
    return /^[\d\w_+.-]+(|@[\d\w_-]{0,63}|@[\d\w_-]{1,63}\.\w?)$/.test(input)
  }

  filter (input) {
    return /^[\d\w_+.-]+@[\d\w_.-]{1,63}\.\w{2,63}$/.test(input)
  }

  describe() {
    return (
      <label text={this.props.argument} suppressWhen={this.suppressWhen}>
        <freetext filter={this.filter} />
      </label>
    )
  }
}
