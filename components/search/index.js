import React, { useEffect, createRef } from 'react';

import { MdSearch } from 'react-icons/md';

import * as S from './styles';

function Search({ visible, onSearch=()=>{}, ref }) {
  const inputRef = createRef();

  useEffect(() => {
    if(visible){
      if(inputRef.current){
        inputRef.current.focus();
      }
    }
  }, [visible]);

  const search = (evt) => {
    evt.preventDefault();

    if(inputRef.current){
      onSearch(inputRef.current.value);
    }
  }

  return (
    <S.Container visible={visible} ref={ref}>
      <form onSubmit={search}>
        <input className="search-input" ref={inputRef}/>
        <button className="search-button"><MdSearch /></button>
      </form>
    </S.Container>
  );
}

export default Search;