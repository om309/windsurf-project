import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import MaterialList from './components/MaterialList';
import MaterialForm from './components/MaterialForm';
import MaterialCreate from './components/MaterialCreate';
import PackagingHierarchyEditor from './components/PackagingHierarchyEditor';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import {
  Menu as MenuIcon,
  AddCircleOutline,
  Inventory2,
  Dashboard as DashboardIcon,
  Notifications,
  Settings,
  Logout,
  LocalShipping,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useThemeMode } from './contexts/ThemeContext';

const AnimatedBox = motion(Box);

function NavBar({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode, toggleTheme } = useThemeMode();

  const menuItems = [
    { label: 'Dashboard', icon: DashboardIcon, path: '/' },
    { label: 'New Material', icon: AddCircleOutline, path: '/materials/new' },
    { label: 'Materials', icon: Inventory2, path: '/materials' },
    { label: 'Packaging', icon: LocalShipping, path: '/packaging' },
  ];

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(135deg, rgba(10, 25, 41, 0.95), rgba(25, 118, 210, 0.95))',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', alignItems: 'center', gap: 2 }}>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            aria-label="menu"
            sx={{
              transition: 'transform 0.3s',
              '&:hover': { transform: 'rotate(90deg)' },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              gap: 1.5,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #FFFFFF, #90CAF9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.3)',
                }}
              >
                <LocalShipping sx={{ fontSize: 24, color: 'primary.dark' }} />
              </Box>
            </motion.div>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: 0.5,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              TraceRoo ILMS
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={mode === 'light' ? 'Dark Mode' : 'Light Mode'}>
              <IconButton 
                color="inherit" 
                onClick={toggleTheme}
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'rotate(180deg)' },
                }}
              >
                {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Account">
              <IconButton onClick={handleProfileClick} sx={{ p: 0.5 }}>
                <Avatar
                  sx={{
                    bgcolor: 'secondary.main',
                    width: 36,
                    height: 36,
                    fontWeight: 600,
                  }}
                >
                  IL
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <MenuItem onClick={handleProfileClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleProfileClose();
            onLogout();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'linear-gradient(180deg, #0A1929, #1976D2)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LocalShipping sx={{ fontSize: 28 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              TraceRoo
            </Typography>
          </Box>

          <List>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setDrawerOpen(false);
                  }}
                  selected={location.pathname === item.path}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    '&.Mui-selected': {
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                      },
                    },
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </motion.div>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Side Rail (when drawer is closed) */}
      <AnimatePresence>
        {!drawerOpen && (
          <motion.div
            initial={{ x: -60 }}
            animate={{ x: 0 }}
            exit={{ x: -60 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Box
              sx={{
                position: 'fixed',
                top: 70,
                left: 0,
                width: 60,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                py: 2,
                bgcolor: 'rgba(25, 118, 210, 0.95)',
                backdropFilter: 'blur(10px)',
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                boxShadow: '4px 0px 16px rgba(0, 0, 0, 0.1)',
                zIndex: (theme) => theme.zIndex.appBar - 1,
              }}
            >
              {menuItems.map((item) => (
                <Tooltip key={item.path} title={item.label} placement="right">
                  <IconButton
                    size="small"
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: 'white',
                      width: 44,
                      height: 44,
                      bgcolor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    <item.icon />
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState('login'); // 'login' | 'signup'

  if (!isAuthenticated) {
    return authView === 'login' ? (
      <Login onLogin={() => setIsAuthenticated(true)} onGoSignup={() => setAuthView('signup')} />
    ) : (
      <Signup onSignedUp={() => setIsAuthenticated(true)} onGoLogin={() => setAuthView('login')} />
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <GlobalStyles
        styles={{
          body: {
            scrollBehavior: 'smooth',
          },
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-track': {
            background: (theme) => theme.palette.mode === 'light' ? '#f1f1f1' : '#1A2027',
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#1976D2',
            borderRadius: '4px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: '#1565C0',
          },
        }}
      />
      <NavBar onLogout={() => setIsAuthenticated(false)} />
      <Container
        maxWidth="xl"
        sx={{
          mt: 3,
          mb: 6,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          pl: { xs: 2, sm: 10 },
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/materials/new" element={<MaterialCreate />} />
          <Route path="/materials/:code" element={<MaterialForm />} />
          <Route path="/materials" element={<MaterialList />} />
          <Route path="/packaging" element={<PackagingHierarchyEditor />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}
