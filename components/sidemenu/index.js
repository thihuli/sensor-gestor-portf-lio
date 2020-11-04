import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import * as S from './styles';

import { RiTeamLine, RiTeamFill } from 'react-icons/ri';
import { BsGrid1X2, BsGrid1X2Fill } from 'react-icons/bs';
import { FaLightbulb, FaRegLightbulb, FaRegUserCircle, FaUserCircle } from 'react-icons/fa';
import { MdNotificationsNone, MdNotifications, MdSearch, MdInfoOutline } from 'react-icons/md';

import CircularAvatar from '../circular_avatar';
import useNotifications from '../../hooks/notifications';
import Notification from '../notification';
import Search from '../search';
import { useAuth } from '../../hooks/auth';

export const SIDE_SIZE = 74;

function SideMenu() {
  const router = useRouter();
  const auth = useAuth();
  const { pathname: path } = router;

  const ref = useRef();

  const [notification, setNotification] = useState(false);
  const [search, setSearch] = useState(false);

  const [items, readable] = useNotifications();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    if(auth.logged === false){
      router.replace('/auth');
    }
  }, [auth.logged]);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
     setSearch(false);
     setNotification(false);
    }
  }

  const route = (pathname) => {
    router.push(pathname);
  }

  const onSearch = (value) => {
    console.log(value);
    setSearch(false);
  }

  return (
    <div ref={ref}>
      <S.Container>
        <div>
          <S.Logo src={'/assets/logo.png'} onClick={() => route('/')}/>
          <S.Menu>
            <S.MenuItem selected={path === "/"} onClick={() => route('/')}>
              { path === '/' ? (
                  <BsGrid1X2Fill />
                ) : (
                  <BsGrid1X2 />
                )
              }
            </S.MenuItem>
            <S.MenuItem selected={path === "/projects"} onClick={() => route('/')}>
              { path === '/projects' ? (
                  <img src={'/assets/lightbulb-green.svg'}/>
                ) : (
                  <img src={'/assets/lightbulb.svg'}/>
                )
              }
            </S.MenuItem>
            <S.MenuItem selected={path === "/teams"} onClick={() => route('/')}>
              { path === '/teams' ? (
                  <img src={'/assets/teams-green.svg'}/>
                ) : (
                  <img src={'/assets/teams.svg'}/>
                )
              }
            </S.MenuItem>
            <S.MenuItem selected={path === "/users"} onClick={() => route('/')}>
              { path === '/users' ? (
                  <FaUserCircle />
                ) : (
                  <FaRegUserCircle />
                )
              }
            </S.MenuItem>
          </S.Menu>
        </div>
        <div>
          <S.Menu>
            <S.MenuItem selected={readable} onClick={() => setNotification(!notification)}>
              { readable ? (
                  <MdNotifications />
                ) : (
                  <MdNotificationsNone />
                )
              }
            </S.MenuItem>
            <S.MenuItem onClick={() => setSearch(!search)}>
              <MdSearch />
            </S.MenuItem>
            <S.MenuItem onClick={() => {}}>
              <MdInfoOutline />
            </S.MenuItem>
          </S.Menu>
          <CircularAvatar 
            src={'/assets/clarisse.png'} 
            onClick={() => auth.logout()}
            size={52}
          />
        </div>
      </S.Container>
      <Notification visible={notification} items={items} />
      <Search visible={search} onSearch={onSearch} />
    </div>
  );
}

export default SideMenu;