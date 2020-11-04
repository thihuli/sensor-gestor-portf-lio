import React, { useEffect } from 'react';
import SideMenu from '../../components/sidemenu';

import { useRouter } from 'next/router';

import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

import Loading from '../../components/loading';

function Menu(Page, loginRequired=true) {
  return (props) => {
    const router = useRouter();
    const { logged, loading } = useAuth();

    useEffect(() => {
      if(logged === false && loginRequired){
        router.replace('/auth');
      }
    }, [logged, loading]);

    return loading ? (
      <Loading />
    ) : (
      <Container>
        <SideMenu />
        <Page />
      </Container>
    );
  };
}

export default Menu;