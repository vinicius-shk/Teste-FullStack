import { useContext } from "react";
import ProdCard from "../components/ProdCard";
import Header from "../components/header/header";
import * as M from './styles';
import AppContext from "../Context/AppContext";

export default function Main() {
  const { mlFetch, mlFilter } = useContext(AppContext);

  const renderProds = (prodList) => (
    !prodList ?
    'Loading...' :
    prodList.map((item, index) => (
    <ProdCard
      img_href={item.thumbnail}
      title={item.title}
      desc="Mercado Livre"
      price={item.price}
      url={item.permalink}
      key={index}
    />
    ))
  )
  return (
    <>
    <Header />
    <M.Container>
        {
          renderProds(!mlFilter ? mlFetch : mlFilter)
        }
    </M.Container>  
    </>
  );
}