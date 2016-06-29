/** @jsx createElement */

import {createElement} from 'elliptical'

function suppressWhen (input) {
  return /^[\d\w_+.-]+(|@[\d\w_-]{0,63}|@[\d\w_-]{1,63}\.\w?)$/.test(input)
}

function filter (input) {
  return /^[\d\w_+.-]+@[\d\w_.-]{1,63}\.\w{2,63}$/.test(input)
}

const defaultProps = {
  argument: 'email address'
}

function describe ({props}) {
  return (
    <placeholder text={props.argument} suppressWhen={suppressWhen}>
      <freetext filter={filter} />
    </placeholder>
  )
}

export const EmailAddress = {defaultProps, describe}
