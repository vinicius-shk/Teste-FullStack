import { useContext, useEffect } from "react";
import ProdCard from "../components/ProdCard";
import Header from "../components/header/header";
import * as M from './styles';
import AppContext from "../Context/AppContext";
import useApi from "../Hooks/useApi";

export default function Main() {
  const { mlFetch, mlFilter, bpFilter, setBpCrawl, siteFilter } = useContext(AppContext);
  const api = useApi();

  useEffect(() => {
    (async function () {
      const data = await api.crawl()
      setBpCrawl(data.data);
    })()
  }, []);

  const renderProds = () => {
    let prodList = []
    if (siteFilter === 'Mercado Livre') {
      prodList = mlFetch
      if (mlFilter) {
        prodList = mlFilter
      }
    } else {
      prodList = bpFilter
    }
    return (
    !prodList ?
    'Loading...' :
    prodList.map((item, index) => (
    <ProdCard
      img_href={item.thumbnail}
      title={item.title}
      desc={item.desc || "Mercado Livre"}
      price={item.price}
      url={item.permalink}
      key={index}
    />
    ))
  )};
  return (
    <>
    <Header />
    <M.Container>
        {
          renderProds()
        }
    </M.Container>  
    </>
  );
}