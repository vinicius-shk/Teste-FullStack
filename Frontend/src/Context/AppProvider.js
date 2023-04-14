import { useCallback, useMemo, useState } from "react";
import AppContext from "./AppContext";
import { getProductsByName } from "../Service/api";

function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [siteFilter, setSiteFilter] = useState('Mercado Livre');
  const [category, setCategory] = useState('Mobile');
  const [mlFetch, setMlFetch] = useState(null);
  const [mlFilter, setMlFilter] = useState(null);
  const handleButton = useCallback(async () => {
    if (siteFilter === 'Mercado Livre') {
      const data = [...mlFetch].filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      setMlFilter(data);
    }
  }, [siteFilter, searchTerm, mlFetch])

  const handleSelect = useCallback(async () => {
    const query = {
      Mobile: 'Celular',
      Refrigerator: 'Geladeira',
      TV: 'Tv',
    };
    if (siteFilter === 'Mercado Livre') {
      const data = await getProductsByName(query[category])
      setMlFetch(data.results)
    }
  }, [category, siteFilter])
   

  const value = useMemo(() => ({
    searchTerm,
    setSearchTerm,
    siteFilter,
    setSiteFilter,
    category,
    setCategory,
    handleButton,
    handleSelect,
    mlFilter,
    mlFetch,
  }), [
    searchTerm,
    setSearchTerm,
    siteFilter,
    setSiteFilter,
    category,
    setCategory,
    handleButton,
    handleSelect,
    mlFilter,
    mlFetch,
  ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
