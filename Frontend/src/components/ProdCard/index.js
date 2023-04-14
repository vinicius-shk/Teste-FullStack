import * as P from './styles'

export default function ProdCard({img_href, title, desc, price, url }) {
  return (
    <P.Container>
      <P.Image src={img_href}/>
      <P.ContText>
        <P.Title>{title}</P.Title>
        <P.Description>{`Site da oferta: ${desc}`}</P.Description>
        <P.Price>{`R$: ${price}`}</P.Price>
      </P.ContText>
      <P.Button
        onClick={ () => window.open(url, '_blank') }
      >
        Go to website
      </P.Button>
    </P.Container>
  );
}