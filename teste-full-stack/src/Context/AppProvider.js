import { useMemo, useState } from "react";
import AppContext from "./AppContext";

function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [siteFilter, setSiteFilter] = useState('Mercado Livre');
  const [category, setCategory] = useState('Mobile');

  const value = useMemo(() => ({
    searchTerm,
    setSearchTerm,
    siteFilter,
    setSiteFilter,
    category,
    setCategory,
  }), [
    searchTerm,
    setSearchTerm,
    siteFilter,
    setSiteFilter,
    category,
    setCategory,
  ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
