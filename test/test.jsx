/** @jsx createElement */
/* eslint-env mocha */

import _ from 'lodash'
import {createElement, compile} from 'elliptical'
import {EmailAddress} from '../src/index'
import {expect} from 'chai'

export function text(input) {
  return _.map(input.words, 'text').join('')
}

describe('Email', () => {
  it('suggests one valid choice', () => {
    const parse = compile(<EmailAddress />)

    const data = parse('test@test.com')
    expect(data).to.have.length(1)
    expect(text(data[0])).to.equal('test@test.com')
    expect(data[0].result).to.equal('test@test.com')
    expect(data[0].words[0].placeholder).to.be.undefined
  })

  it('suppresses for incomplete', () => {
    const parse = compile(<EmailAddress />)

    const data = parse('test@tes')
    expect(data).to.have.length(1)
    expect(text(data[0])).to.equal('email address')
    expect(data[0].words[0].placeholder).to.be.true
  })
})
