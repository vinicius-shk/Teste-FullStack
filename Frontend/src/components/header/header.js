import { useContext, useEffect } from 'react';
import * as H from './styles'
import AppContext from '../../Context/AppContext';

export default function Header() {
  const {
    searchTerm,
    setSearchTerm,
    siteFilter,
    setSiteFilter,
    category,
    setCategory,
    handleButton,
    handleSelect,
  } = useContext(AppContext);

  useEffect(() => {
    handleSelect(category);
  }, [category, handleSelect])

  return (
    <H.Container>
      <H.Select
        value={ siteFilter }
        onChange={ ({ target: { value } }) => setSiteFilter(value) }
      >
        <H.Option>Mercado Livre</H.Option>
        <H.Option>Buscapé</H.Option>
      </H.Select>
      <H.Select
        value={ category }
        onChange={ ({ target: { value } }) => setCategory(value) }
      >
        <H.Option>Mobile</H.Option>
        <H.Option>Refrigerator</H.Option>
        <H.Option>TV</H.Option>
      </H.Select>
      <H.Input
        placeholder='Type your product here'
        value={ searchTerm }
        onChange={ ({target: { value }}) => setSearchTerm(value) }
      />
      <H.Button onClick={handleButton}>
        Search
      </H.Button>
    </H.Container>
  );
}