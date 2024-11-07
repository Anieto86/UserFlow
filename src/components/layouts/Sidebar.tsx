import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import {
  HomeOutlined,
  ManageAccountsOutlined,
  ReceiptLongOutlined,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import { primary } from '../../assets/themes/colors';
const drawerList = [
  {
    text: 'HOME',
    icon: <HomeOutlined color="secondary" />,
    route: '/home',
  },
  {
    text: 'CLIENTS',
    icon: <GroupsIcon color="secondary" />,
    route: '/client-management',
  },
  {
    text: 'TRANSACTIONS',
    icon: <ReceiptLongOutlined color="secondary" />,
    route: '/transactions',
  },

  {
    text: 'ACCOUNT',
    icon: <ManageAccountsOutlined color="secondary" />,
    route: '/account',
  },
  {
    text: 'PATIENTS',
    icon: <ManageAccountsOutlined color="secondary" />,
    route: '/patients',
  },
  {
    text: 'Cardio',
    icon: <ManageAccountsOutlined color="secondary" />,
    route: '/cardio_patients',
  },
];

// const bottomMenu = [
//   {
//     text: 'DocuPortal',
//     icon: <ArticleOutlined color="secondary" />,
//     route: 'https://www.datazoo.com/',
//   },
//   {
//     text: 'Support',
//     icon: <PhoneOutlined color="secondary" />,
//     route: 'https://www.datazoo.com/',
//   },
//   {
//     text: 'Dashboard Version 1.0',
//   },
// ];

export const Sidebar = () => {
  const drawerWidth = 248;
  const collapsedDrawerWidth = 64;
  const drawerPosition = '66px';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleItemClick = (index: number): void => {
    setActiveIndex(index);
  };
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  // Tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };
  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };
  const handleClick = () => {
    toggleCollapse();
    handleTooltipClose();
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedDrawerWidth : drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: collapsed ? collapsedDrawerWidth : drawerWidth,
          boxSizing: 'border-box',
          mt: drawerPosition,
          backgroundColor: primary.main,
          color: primary.contrastText,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRightColor: primary.contrastText,
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Home, Clients, transactions, Reporting, Services, Billing and Account*/}
        <Box
          sx={{
            width: collapsed ? collapsedDrawerWidth : drawerWidth, //64px : 248px
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: collapsed ? '0' : '0 24px 0 24px',
          }}
          role="presentation"
        >
          <List>
            <Box
              sx={{
                display: 'flex',
                justifyContent: collapsed ? 'center' : 'flex-end',
              }}
            >
              <Tooltip
                title={collapsed ? 'Expand' : 'Collapse'}
                placement="right"
                open={tooltipOpen}
                onOpen={handleTooltipOpen}
                onClose={handleTooltipClose}
                componentsProps={{
                  tooltip: {
                    sx: {
                      borderRadius: '4px',
                      color: primary.contrastText, //#FFFFFF
                      fontSize: '16px',
                      margin: '10px',
                    },
                  },
                }}
              >
                <IconButton
                  onClick={handleClick}
                  onMouseEnter={handleTooltipOpen}
                  onMouseLeave={handleTooltipClose}
                  sx={{
                    color: primary.contrastText, //#FFFFFF
                    '&:hover': {
                      backgroundColor: '#44415A',
                      '& .MuiSvgIcon-root': {
                        color: primary.contrastText,
                      },
                      // border: "1px solid var(--inherit-white-main, #FFF)",
                    },
                  }}
                >
                  {collapsed ? <ChevronRight /> : <ChevronLeft />}
                </IconButton>
              </Tooltip>
            </Box>
            {drawerList.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  key={index}
                  component={Link}
                  to={item.route}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:
                      activeIndex === index ? '#44415A' : 'inherit',
                    borderRadius: 1,
                    margin: collapsed ? '0 10px' : '0',
                    '&:hover': {
                      backgroundColor: '#44415A',
                      borderRadius: 1,
                      margin: collapsed ? '0 10px' : '0',
                    },
                  }}
                >
                  {/* "Icon" */}
                  <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 4 }}>
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          fontWeight="fontWeightBold"
                        >
                          {item.text}
                        </Typography>
                      }
                    />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* DocuPortal Support, Dashboard version */}
        <Box
          sx={{
            borderRadius: '8px',
            margin: collapsed ? '0 10px' : '8px 24px 72px 24px',
            marginBottom: '70px',
            backgroundColor: '#44415A',
          }}
        >
          {/* <List>
            {bottomMenu.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    margin: collapsed ? '0' : '0 10px',
                    ...(index !== 2 && {
                      '&:hover': {
                        backgroundColor: '#2C2946', // 2C2845
                        borderRadius: '4px',
                        // margin: "0 10px",
                        '& .MuiListItemIcon-root, & .MuiListItemText-root': {
                          borderRadius: '8px',
                        },
                      },
                    }),
                  }}
                >
                  {index !== 2 && (
                    <ListItemIcon
                      sx={{
                        display: 'flex',
                        justifyContent: collapsed ? 'flex-start' : 'center',
                        minWidth: 0,
                        marginRight: !collapsed ? '10px' : '0',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  )}
                  {!collapsed && (
                    <ListItemText
                      primary={
                        <Typography
                          variant={index !== 2 ? 'subtitle1' : 'subtitle2'}
                          fontWeight="fontWeightRegular"
                          sx={{
                            display: 'flex',
                            justifyContent: !collapsed
                              ? 'flex-start'
                              : 'center',
                          }}
                        >
                          {item.text}
                        </Typography>
                      }
                    />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
