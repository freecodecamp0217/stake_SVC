import { Contract } from '@ethersproject/contracts'
import type { Provider } from '@ethersproject/providers'
import type { Signer } from '@ethersproject/abstract-signer'
import { AddressZero } from '@ethersproject/constants'
import { isAddress } from '@ethersproject/address'

export function getContract(
  address: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ABI: any,
  signer?: Signer | Provider
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return new Contract(address, ABI, signer)
}
