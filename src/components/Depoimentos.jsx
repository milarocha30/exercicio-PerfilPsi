import { depoimentosJarsiaMelo } from '../data/conteudo';

function Depoimentos() {
  return (
    <section className="secao secao-clara" id="depoimentos">
      <div className="container">
        <p className="titulo-secao">Depoimentos demonstrativos</p>
        <h2>O que dizem sobre o atendimento</h2>
        <div className="grade-depoimentos">
          {depoimentosJarsiaMelo.map((item) => (
            <div key={item.id} className="card-depoimento">
              <blockquote>“{item.texto}”</blockquote>
              <p className="autor-depoimento">— {item.autor} <small>({item.contexto})</small></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;