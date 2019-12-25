import React, { useEffect, useState  } from 'react';
import Link from 'next/link';
import { signout, isAuth } from '../../actions/auth';
import Router from 'next/router';
import NProgress from 'nprogress';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { APP_NAME } from '../../config';
import Search from '../blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const styleSheet = {
  list : {
    width : 250,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    cursor : "pointer",
    color: 'orange',
  },
}

export default function Header2() {
  const [drawer, setDrawer] = useState(false);
  const [drawerActivate, setDrawerActivate] = useState(false);
  useEffect(() =>  {
    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 700){
        setDrawerActivate(true);
      }
      else setDrawerActivate(false)
    });  
  });

  const whichDrawer = () => {
    if(document.children[0].clientWidth < 700){
      setDrawerActivate(true)
    } else setDrawerActivate(false)
  }
 
    //window.addEventListener('resize',()=>{
      //if(window.innerWidth <= 600){
        //setDrawerActivate(true);
      //}
      //else{
        //setDrawerActivate(false);
      //}
    //});

  //Small Screens
  function createDrawer(){
    return (
      <div>
        <AppBar style={{boxShadow:'none', backgroundColor:'white'}} >
          <Toolbar style={{backgroundColor:'transparent'}}>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
            <Link href="/">
              <a className="text-center nav-title">{APP_NAME}</a>
            </Link>
              <MenuIcon
              style={styleSheet.sideBarIcon}
                onClick={()=>{setDrawer(true)}} />
                
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={drawer}
         onClose={()=>{setDrawer(false)}}
         onOpen={()=>{setDrawer(true)}}>
          
           <div
           style={{backgroundColor:'orange', height:'100vh'}}
             tabIndex={0}
             role="button"
             onClick={()=>{setDrawer(false)}}
             onKeyDown={()=>{setDrawer(false)}}>

            <List style = {styleSheet.list}>
               <ListItem key = {1} button divider><Link href='/'><a className='nav-link-item-sm'>Home</a></Link></ListItem>
               <ListItem key = {2} button divider><Link href='/blogs'><a className="nav-link-item-sm">Blogs</a></Link></ListItem>
               <ListItem key = {3} button divider><Link href='/contact'><a className="nav-link-item-sm">Contact</a></Link></ListItem>
               {!isAuth() && (
                 <React.Fragment>
               <ListItem key = {6} button divider><Link href='/signin'><a className='nav-link-item-sm'>Signin</a></Link></ListItem>
               <ListItem key = {7} button divider><Link href='/signup'><a className='nav-link-item-sm'>Signup</a></Link></ListItem>
               </React.Fragment>
                )}
                {isAuth() && isAuth().role === 0 && (
               <ListItem key = {4} button divider><Link href='/user'><a className='nav-link-item-sm'>Dashboard</a></Link></ListItem>
                )}
                {isAuth() && isAuth().role === 1 && (
               <ListItem key = {5} button divider><Link href='/admin'><a className='nav-link-item-sm'>Admin</a></Link></ListItem>
                )}
                {isAuth() && (
                  <ListItem className='nav-link-item-sm' key = {6} onClick={() => signout(() => Router.replace(`/signin`))} button divider><a>Signout</a></ListItem>
                )}
                <ListItem key = {7} button divider><Link href='/user/crud/blog'><a className='nav-link-item-sm'>Write a blog</a></Link></ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  function destroyDrawer(){
    return (
      <AppBar style={{backgroundColor:'white', boxShadow:'none'}}>
          <div className='container'>
              <div className='row justify-content-center'>
            <Toolbar>
              <Typography><Link href='/'><a className='nav-link-item-lg'>Home</a></Link></Typography>
              <Typography><Link href='/blogs'><a className='nav-link-item-lg'>Blogs</a></Link></Typography>
              <Typography><Link href='/contact'><a className='nav-link-item-lg'>Contact</a></Link></Typography>
              {!isAuth() && (
                <React.Fragment>
              <Typography><Link href='/signin'><a className='nav-link-item-lg'>Signin</a></Link></Typography>
              <Typography><Link href='/signup'><a className='nav-link-item-lg'>Signup</a></Link></Typography>
                </React.Fragment>
              )}
              {isAuth() && isAuth().role === 0 && (
              <Typography><Link href='/user'><a className='nav-link-item-lg'>Dashboard</a></Link></Typography>
              )}
              {isAuth() && isAuth().role === 1 && (
              <Typography><Link href='/admin'><a className='nav-link-item-lg'>Admin</a></Link></Typography>
              )}
              {isAuth() && (
              <Typography className="nav-link-item-lg" onClick={() => signout(() => Router.replace(`/signin`))}>Signout</Typography>
              )}
              <Typography><Link href='/user/crud/blog'><a className='nav-link-item-lg'>Write a blog</a></Link></Typography>


            </Toolbar>
            </div>
        </div>
      </AppBar>
    )
  }


    return(
      <div>
        {drawerActivate ? createDrawer() : destroyDrawer()}
      </div>
    );
}
