import React, { ReactNode } from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
// import { WagmiConfig } from 'wagmi'
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
// import { getDefaultWallets } from '@rainbow-me/rainbowkit'
// import { configureChains, createConfig } from 'wagmi'
// import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Header />
    </header>
    <div />
    {children}
  </div>
)

export default Layout
