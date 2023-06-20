import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { WagmiConfig, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit Next.js demo',
    //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    //alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
    chains: [sepolia],
    walletConnectProjectId: '',
  })
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider
        debugMode
        customTheme={{
          '--ck-overlay-background': 'rgba(255, 255, 255, 0.01)',
          '--ck-connectbutton-background': '#5137ee',
          '--ck-connectbutton-color': 'white',
          '--ck-connectbutton-hover-background': '#5137ee',
          '--ck-connectbutton-hover-color': 'white',
        }}
      >
        <Layout title="Stake">
          <Component {...pageProps} />
        </Layout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
