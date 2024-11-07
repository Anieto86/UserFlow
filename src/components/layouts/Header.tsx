import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { grey, neutral, primary } from '../../assets/themes/colors';
// import { useGetUsersQuery } from "@/services/api/userServices";

const userTest = {
  user: [{ firstName: 'john', middleName: 'MArie', lastName: 'Doe' }],
};

export const Header = () => {
  //TODO: Add user from the store when the user is logged i, the use getInitials for pass to the AVATAR component

  const testUser = userTest.user.map(({ firstName, lastName }) => {
    const getInitials = (name: string) =>
      name
        .toUpperCase()
        .split(' ')
        .map((word) => word[0])
        .join('');

    return `${getInitials(firstName)}${lastName ? getInitials(lastName) : ''}`;
  });

  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>

          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* MUI */}
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: grey.light }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: grey.light }}
            />
          </Search>

          <Grid container component="div" display="flex">
            <Avatar
              sx={{
                mr: 3,
                ml: 8,
                bgcolor: primary.main,
                color: primary.contrastText,
              }}
            >
              <QuestionMarkIcon />
            </Avatar>

            <Avatar
              sx={{ bgcolor: primary.main, color: primary.contrastText }}
              alt={`${testUser}`}
              src="/broken-image.jpg"
            >
              {testUser}
            </Avatar>
          </Grid>
        </Toolbar>
        <GreenLine />
      </AppBar>
    </>
  );
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: neutral[50],
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: '1px solid transparent', // Initially no border
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&:focus-within': {
    borderColor: theme.palette.primary.main, // Change border on focus
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    '&::placeholder': {
      color: neutral[800],
      fontSize: '16px',
      fontWeight: 400,
    },
  },
}));

const GreenLine = styled(Box)(({ theme }) => ({
  height: '2px',
  borderBottomColor: theme.palette.success.main,
  borderBottomStyle: 'solid',
  borderBottomWidth: '2px',
}));
