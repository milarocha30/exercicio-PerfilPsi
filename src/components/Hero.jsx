function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="etiqueta">Psicologia e acolhimento</span>
          <h1>Um espaço seguro para cuidar de você</h1>
          <p>Um espaço de escuta, acolhimento e reflexão para momentos importantes da sua trajetória.</p>
          <div className="grupo-botoes">
            <a className="botao" href="#contato">Solicitar atendimento</a>
            <a className="botao botao-secundario" href="#sobre">Conhecer a profissional</a>
          </div>
          <small>Atendimento sujeito à disponibilidade.</small>
        </div>
        <div className="foto-placeholder" aria-label="Espaço reservado para fotografia autorizada">
          <img className="foto" src="https://scontent-mia5-1.cdninstagram.com/v/t51.82787-19/532761766_18527823070012031_2387211032409494643_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=106&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDE4LkMzIn0%3D&_nc_ohc=j4TCll54NpsQ7kNvwFuKdRc&_nc_oc=Adp6bPXHR99sziwNmBtispjJo79qZFZMksOGqBD3N_P00UXPKvD6hUTtrywykSorwaI&_nc_zt=24&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_gid=3uQF_hisPVmuw3Fr8b5VuQ&_nc_ss=7aa8c&oh=00_AQJ9U7AuTZANFbICYVhnfZm-EYRn3q5ukRynX3ah0UZGtg&oe=6A9DFA56" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;