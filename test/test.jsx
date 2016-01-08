/** @jsx createElement */
/* eslint-env mocha */
import _ from 'lodash'
import { createElement, Phrase } from 'lacona-phrase'
import { EmailAddress } from '..'
import { expect } from 'chai'
import { Parser } from 'lacona'

export function text(input) {
  return _.map(input.words, 'text').join('')
}

function from(i) {const a = []; for (let x of i) a.push(x); return a}

describe('Email', () => {
  let parser

  beforeEach(() => {
    parser = new Parser()
  })

  it('suggests one valid choice', () => {
    parser.grammar = <EmailAddress />

    const data = from(parser.parse('test@test.com'))
    expect(data).to.have.length(1)
    expect(text(data[0])).to.equal('test@test.com')
    expect(data[0].result).to.equal('test@test.com')
    expect(data[0].words[0].placeholder).to.be.undefined
  })

  it('suppresses for incomplete', () => {
    parser.grammar = <EmailAddress />

    const data = from(parser.parse('test@tes'))
    expect(data).to.have.length(1)
    expect(text(data[0])).to.equal('email address')
    expect(data[0].words[0].placeholder).to.be.true
  })

})
