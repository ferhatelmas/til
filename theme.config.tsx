import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Today I Learned (TIL)</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Ferhat Elmas',
    }
  },
  faviconGlyph: '🚀',
  project: {
    link: 'https://github.com/ferhatelmas/til',
  },
  docsRepositoryBase: 'https://github.com/ferhatelmas/til',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://til.ferhatelmas.com" target="_blank">
          Today I Learned (TIL)
        </a>
        .
      </span>
    )
  },
}

export default config
