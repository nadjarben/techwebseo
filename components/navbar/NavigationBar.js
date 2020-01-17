import React from 'react';
import { Link, Router } from '../../18n';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

export default function ButtonAppBar() {
  return (
    <div style={{flexGrow: '1'}}>
      <AppBar position="relative" style={{backgroundColor:'black', height:'6vh'}}>
        <Toolbar style={{alignItems: 'flex-start'}}>      
          <ArrowBackIosIcon 
            onClick={() => Router.back()}
            style={{marginTop:'1vh', cursor: 'pointer' }} 
          />

          <ShoppingCartIcon
            style={{marginTop:'1vh', marginLeft:'auto'}}
          />
          </Toolbar>
      </AppBar>
    </div>
  );
}