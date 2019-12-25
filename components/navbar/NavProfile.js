import Link from 'next/link';
import Router from 'next/router';
import { signout, isAuth } from '../../actions/auth';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';


const NavProfile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);

    function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    <div className="nav-account">
    {!isAuth() && (
              <React.Fragment>
                <MenuItem onClick={handleMenuClose}>
                  <Link href="/signin">
                    <a className='nav-profile'>Signin</a>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link href="/signup">
                    <a className='nav-profile'>Signup</a>
                  </Link>
                  </MenuItem>
              </React.Fragment>
            )}
             {isAuth() && (
                <MenuItem onClick={handleMenuClose}>
                <a className='nav-profile' 
                onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </a>
              </MenuItem>
            )}
    </div>
    </Menu>
  );
  
    return (
        <React.Fragment>
          <div onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          {renderMenu}
        </React.Fragment>
    )
}

export default NavProfile