import { usePublicClient, useWalletClient } from 'wagmi'
import { useMemo } from 'react'
import { getContract, Address } from 'viem'

export function useContract(
  address: Address,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ABI: any,
  withSigner?: boolean
) {
  const publicClient = usePublicClient({ chainId: 1001 })
  const { data: signer } = useWalletClient()

  const canReturnContract = useMemo(
    () => address && ABI && publicClient && signer,
    [address, ABI, publicClient, signer]
  )

  return useMemo(() => {
    if (!canReturnContract) return null
    else
      return getContract({
        address,
        abi: ABI,
        publicClient,
        walletClient: withSigner && signer,
      })
  }, [address, ABI, canReturnContract, publicClient, signer, withSigner])
}
