/** @jsx createElement */

import {createElement} from 'elliptical'

const defaultProps = {
  label: 'email address'
}

function suppressWhen (input) {
  return /^[\d\w_+.-]+(|@[\d\w_-]{0,63}|@[\d\w_-]{1,63}\.\w?)$/.test(input)
}

function filter (input) {
  return /^[\d\w_+.-]+@[\d\w_.-]{1,63}\.\w{2,63}$/.test(input)
}

function describe ({props}) {
  return (
    <placeholder
      label={props.label}
      arguments={props.phraseArguments || (props.phraseArguments ? [props.phraseArgument] : [props.label])}
      suppressWhen={suppressWhen}>
      <freetext filter={filter} />
    </placeholder>
  )
}

export const EmailAddress = {defaultProps, describe, id: 'elliptical-email:EmailAddress'}
