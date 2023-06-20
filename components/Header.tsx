import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { NavLinks } from '../constants'
import Link from 'next/link'
import { ConnectKitButton } from 'connectkit'

// header
const Header = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#090721' }}>
      <Toolbar disableGutters variant="dense" sx={{ height: '64px' }}>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ display: 'flex', gap: 2, mr: 4, alignItems: 'center' }}>
          {NavLinks.map((item, index) => (
            <Link key={index} href={item.toLowerCase()}>
              <Typography sx={{ fontSize: '1rem' }}>{item}</Typography>
            </Link>
          ))}
          <ConnectKitButton />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

// {NavLinks.map((item, index) => (
//   <Link key={index} href={item}>
//     <Typography sx={{ fontSize: '1rem' }}>{item}</Typography>
//   </Link>
// ))}
