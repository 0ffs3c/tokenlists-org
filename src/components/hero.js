import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 6rem;
  position: sticky;
  top: 10rem;
  height: fit-content;

  p {
    text-align: left;
    max-width: 400px;
    font-size: 18px;
  }

  .title {
    text-align: left;
    max-width: 450px;
    font-size: 48px;
    line-height: 125%;
    letter-spacing: 0.002em;
    color: #1f1f1f;
    margin: 0;
    font-family: 'MatterSQ-Medium';
  }

  .icon {
    width: 48px;
  }

  .list {
    max-width: 960px;
  }

  a {
    color: #131313;
    font-family: 'MatterSQ-SemiBold';
  }

  .uniswap {
    color: #ff007a;
    font-family: 'MatterSQ-Regular';
  }

  @media screen and (max-width: 960px) {
    position: relative;
    top: initial;
    margin-top: 2rem;

    .title {
      font-size: 35px;
    }
  }
`

export default function Header() {
  return (
    <Hero>
      <span style={{ marginBottom: '1rem' }}>
        A{' '}
        <a href="https://uniswap.org/" className="uniswap">
          Uniswap
        </a>{' '}
        Project
      </span>

      <p className="title">A new Ethereum token list standard.</p>

      <p
        style={{ fontSize: '20px', lineHeight: '150%' }}
        className="description"
        id="why-lists"
      >
        Token Lists is a community-led initiative to improve discoverability,
        reputation and trust in ERC20 token lists in a manner that is inclusive,
        transparent, and decentralized.
      </p>
      <a
        target="_blank"
        style={{ marginTop: '.5rem', width: 'fit-content' }}
        href="https://uniswap.org/blog/token-lists/"
      >
        -> Why token lists?
      </a>
      <a
        target="_blank"
        style={{ marginTop: '.5rem', width: 'fit-content' }}
        href="https://github.com/Uniswap/token-lists#authoring-token-lists"
      >
        -> Make your own
      </a>
      <a
        target="_blank"
        style={{ marginTop: '.5rem', width: 'fit-content' }}
        href="http://community.tokenlists.org/"
      >
        -> Community
      </a>
    </Hero>
  )
}
