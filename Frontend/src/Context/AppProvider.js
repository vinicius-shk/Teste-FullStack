import { useCallback, useMemo, useState } from "react";
import AppContext from "./AppContext";
import { getProductsByName } from "../Service/api";
import useApi from "../Hooks/useApi";

function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [siteFilter, setSiteFilter] = useState('Mercado Livre');
  const [category, setCategory] = useState('Mobile');
  const [mlFetch, setMlFetch] = useState(null);
  const [mlFilter, setMlFilter] = useState(null);
  const [bpCrawl, setBpCrawl] = useState(null);
  const [bpFilter, setBpFilter] = useState(null);
  const [bpSearch, setBpSearch] = useState(null);

  const api = useApi();

  const handleButton = useCallback(async () => {
    if (siteFilter === 'Mercado Livre') {
      const data = [...mlFetch].filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setMlFilter(data);
    } else {
      const data = [...bpFilter].filter((item) => item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
      setBpSearch(data);
    }
    const body = { site: siteFilter, category, input: searchTerm };
    api.postSearch(body);
  }, [siteFilter, searchTerm, mlFetch, bpFilter, api, category])

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
      setBpFilter(filtered[0].data);
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
    bpSearch,
    setBpSearch,
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
    bpSearch,
    setBpSearch,
  ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
