import { useCallback, useMemo, useState } from "react";
import AppContext from "./AppContext";
import { getProductsByName } from "../Service/api";

function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [siteFilter, setSiteFilter] = useState('Mercado Livre');
  const [category, setCategory] = useState('Mobile');
  const [mlFetch, setMlFetch] = useState(null);
  const [mlFilter, setMlFilter] = useState(null);
  const [bpCrawl, setBpCrawl] = useState(null);
  const [bpFilter, setBpFilter] = useState(null);
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
    else {
      const filtered = bpCrawl.filter((item) => item.category === query[category].toLowerCase());
      setBpFilter(filtered[0].data)
    }
  }, [category, siteFilter, bpCrawl])
   

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
    bpCrawl,
    setBpCrawl,
    bpFilter,
    setBpFilter,
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
    bpCrawl,
    setBpCrawl,
    bpFilter,
    setBpFilter,
  ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
