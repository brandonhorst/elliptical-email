# lacona-phrase-email

[![Build Status](https://travis-ci.org/lacona/lacona-phrase-email.svg?branch=master)](https://travis-ci.org/lacona/lacona-phrase-email)

Lacona Phrases for matching an email-related information

## Installation

```sh
npm install lacona-phrase-email
```

## Usage

```js
/** @jsx createElement */
import { createElement, Phrase } from 'lacona-phrase'
import { Address as EmailAddress } from 'lacona-phrase-email'
import { Parser } from 'lacona'

const parser = new Parser({
  grammar: (
    <sequence>
      <literal text='email ' />
      <EmailAddress />
    </sequence>
  )
})

parser.parseArray('email app@lacona.io')
/* [{
  words: [
    {text: 'email ', input: true},
    {text: 'app@lacona.io', input: true, argument='email'}
}] */
```

## Reference

### `Address`

Matches standard user@domain.tld email addresses.

#### Result

`String` - the email address

#### Props

- `argument`: String - the text for the label
