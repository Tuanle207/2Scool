import React from 'react';
import { AppBar, IconButton, Badge, Toolbar, InputBase, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import useHeaderStyles from '@assets/jss/components/Header/headerStyles';
import { withRedux } from '@common/utils/ReduxConnect';
import { AuthActions } from '@common/store/actions';

interface Props {
  hiddenSearchBar?: boolean;
  onTextChange?: (text: string) => void;
  postlogoutAsync: () => void;
  
}

const Header: React.FC<Props> = ({ postlogoutAsync, onTextChange, hiddenSearchBar = false }) => {

  const classes = useHeaderStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    postlogoutAsync();
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const textChange = (e: any) => {
    const value = e.target!.value || '';
    // setSearchText(value);
    onTextChange && onTextChange(value);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      className={classes.userMenu}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className={classes.userMenuItem} onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem className={classes.userMenuItem} onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar color='transparent' position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.search} style={hiddenSearchBar ? { visibility: 'hidden' } : {}} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              disabled={hiddenSearchBar ? true : false}
              placeholder="Tìm kiếm…"
              fullWidth
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={textChange}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
};

export default withRedux<Props>({
  component: React.memo(Header),
  dispatchProps: ({
    postlogoutAsync: AuthActions.postLogoutAsync
  })
});