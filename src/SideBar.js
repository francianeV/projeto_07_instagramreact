export default function SideBar(){
    return(
        <div class="sidebar">
            <Usuario />
            <Sujestoes />
            <InfosRodape />
        </div>
    );
}

function Usuario(){
    return(
        <div class="usuario">
            <img src="img/catanacomics.svg" alt="catanacomics"/>
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
        </div>
    );
}

function Sujestoes(){
    const sujestao = [{user:"img/bad.vibes.memes.svg", name:"bad.vibes.memes", razao:"Segue você"},
                      {user:"img/chibirdart.svg", name:"chibirdart", razao:"Segue você"},
                      {user:"img/razoesparaacreditar.svg", name:"razoesparaacreditar", razao:"Novo no Instagram"},
                      {user:"img/adorable_animals.svg", name:"adorable_animals", razao:"Segue você"},
                      {user:"img/smallcutecats.svg", name:"smallcutecats", razao:"Segue você"}];
    return(
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sujestao.map((sujestao) =>  (<Sujestao user={sujestao.user} name={sujestao.name} razao={sujestao.razao} />))}

        </div>
    );
}

function Sujestao(props){

    return(
        <div class="sugestao">
              <div class="usuario">
                <img src={props.user} alt={props.name}/>
                <div class="texto">
                  <div class="nome">{props.name}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    );
}

function InfosRodape(){
    return(
        <div>
            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );

}