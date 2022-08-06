import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import logo from '../../images/logo.svg';

// const theme_style = createTheme({
//   typography: {
//     fontFamily: 'Palatino',
//   },
// });

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '90%',
  maxHeight: '90%',
});

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: 1,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const Text = () => ({
//   color: '#fff',
//   marginBottom: 1,
//   fontSize: 14,
//   fontFamily: 'Palatino',
// });

function Footer2() {
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      bgcolor: '#2F353F',
      bottom: 0,
      position: 'absolute',
      flexGrow: 1,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10,
    }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="nlf college logo" src={logo} />
          </ButtonBase>
        </Grid>
        <Grid item xs={3}>
          <p>7777 Fairbanks North Houston Rd</p>
          <p>Houston, TX 77040</p>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <Link href="#top" underline="hover">Home</Link>
            <Link href="#top" underline="hover">What We Do</Link>
            <Link href="#top" underline="hover">Housechurch</Link>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <Link href="#top" underline="hover">Events</Link>
            <Link href="#top" underline="hover">Classes</Link>
            <Link href="#top" underline="hover">FAQ</Link>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <Button href="#top" underline="hover">Get Connected</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer2;
