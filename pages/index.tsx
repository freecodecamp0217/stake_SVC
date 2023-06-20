//import Link from 'next/link'
import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Divider,
  TextField,
  InputAdornment,
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import SuiTokenLogo from '../assets/images/sui_token.svg'
import { useAccount, useBalance } from 'wagmi'
import { SvcContractAddress } from '../constants/address'

const IndexPage = () => {
  const [stakeView, setStakeView] = useState('stake')

  const { address } = useAccount()

  const { data, isLoading } = useBalance({
    address,
    token: SvcContractAddress,
  })

  console.log(data?.value, isLoading)

  return (
    <Box
      sx={{
        mt: 15,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexGrow: 1,
          gap: 3,
          '& .MuiBox-root': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            p: 2,
            bgcolor: '#232358',
            minWidth: '250px',
            minHeight: '120px',
            borderRadius: 3,
          },
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
            Total SVC Staked
          </Typography>
          <Typography variant="h5" component="div" color="white">
            17971.021 SVC
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
            Last Reward Time
          </Typography>
          <Typography variant="h5" component="div" color="white">
            2023-06-17
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
            Total Reward Token
          </Typography>
          <Typography variant="h5" component="div" color="white">
            59179.7942 SIP
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
            Allocation Points
          </Typography>
          <Typography variant="h5" component="div" color="white">
            100 %
          </Typography>
        </Box>
      </Box>
      <Typography variant="h3" color="white" mt={5}>
        Stake Your SVC
      </Typography>
      <Typography variant="h6" color="grey" sx={{ mt: 2, fontSize: '16px' }}>
        Stake SVC and receive SVC while earning staking rewards
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={stakeView}
        onChange={(e, newV) => setStakeView(newV)}
        sx={{
          p: 1,
          px: 2,
          borderRadius: '40px',
          bgcolor: '#232358',
          mt: 4,
          '& .MuiToggleButton-root': {
            color: 'white',
            textTransform: 'none',
            fontSize: '20px',
            fontFamily: 'Square',
            minWidth: '120px',
            borderRadius: '40px !important',
            border: 'none',
          },
          '& .Mui-selected': {
            color: 'white !important',
            bgcolor: '#432fc2 !important',
            '&:hover': {
              bgcolor: '#432fc2 !important',
            },
          },
        }}
      >
        <ToggleButton value="stake">Stake</ToggleButton>
        <ToggleButton value="unstake">Unstake</ToggleButton>
      </ToggleButtonGroup>
      <Box
        sx={{
          bgcolor: '#17143a',
          p: 2.5,
          my: 4,
          mx: 2,
          borderRadius: '10px',
          minWidth: '450px',
        }}
      >
        <Box
          sx={{
            bgcolor: '#232358',
            borderRadius: '10px',
            p: 2,
          }}
        >
          <Box
            sx={{
              py: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SuiTokenLogo />
              <Typography variant="h5" color="white">
                SVC
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography color="grey">SVC amount to stake</Typography>
              &nbsp;&nbsp;
              <Typography
                variant="h5"
                sx={{ color: '#5137ee', fontWeight: 'bold' }}
              >
                MAX
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: '#5f70a0', p: '0.5px', mt: 1 }} />
          <Box
            py={1}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography color="white">Amount:</Typography>
            <TextField
              id="outlined-number"
              variant="standard"
              type="number"
              placeholder="0"
              inputProps={{
                style: {
                  textAlign: 'right',
                  color: 'white',
                  fontFamily: 'Square',
                },
              }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography color="white" mb={0.2} mr={3}>
                      SVC
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box sx={{ dispaly: 'flex' }}>
          {stakeView === 'unstake' && (
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                gap: 2,
                '& .MuiBox-root': {
                  p: 2,
                  bgcolor: '#232358',
                  flexGrow: 1,
                  borderRadius: '10px',
                  minWidth: '45%',
                },
                '& .MuiTypography-root': {
                  color: 'white',
                  fontSize: '14px',
                  py: '4px',
                },
              }}
            >
              <Box>
                <Typography>Staked</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: '0px !important',
                  }}
                >
                  <RadioButtonUncheckedIcon
                    sx={{ color: 'white', width: '8px' }}
                  />
                  <Typography ml={2}>0 SVC</Typography>
                </Box>
                <Typography color="grey !important">
                  Unstake fee: &nbsp;0.05%
                </Typography>
              </Box>
              <Box>
                <Typography>Pending Reward</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: '0px !important',
                  }}
                >
                  <RadioButtonUncheckedIcon
                    sx={{ color: 'white', width: '8px' }}
                  />
                  <Typography ml={2}>0 SIP</Typography>
                </Box>
                <Typography color="grey !important">
                  Unstake fee: &nbsp;0
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            width: '100%',
            bgcolor: '#432fc2',
            textTransform: 'none',
            fontFamily: 'Square',
            borderRadius: '20px',
            py: 1.5,
            fontSize: '1rem',
            '&:hover': {
              bgcolor: '#432fc2',
            },
          }}
        >
          {stakeView === 'stake' ? 'Stake' : 'Unstake'}
        </Button>
      </Box>
    </Box>
  )
}

export default IndexPage
