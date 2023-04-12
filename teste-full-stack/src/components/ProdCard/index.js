import * as P from './styles'

export default function ProdCard({img_href, title, desc, price, url }) {
  return (
    <P.Container>
      <P.Image src={img_href}/>
      <P.Title>{title}</P.Title>
      <P.Description>{desc}</P.Description>
      <P.Price>{price}</P.Price>
      <P.Button
        onClick={ () => window.open(url, '_black') }
      >
        Go to website
      </P.Button>
    </P.Container>
  );
}