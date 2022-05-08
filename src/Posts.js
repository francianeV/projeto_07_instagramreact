import Icones from "./Icon";
import React from 'react';


export default function Posts(){
    const posts = [{user:"img/meowed.svg", name:"meowed", post:"img/gato-telefone.svg"},{user:"img/barked.svg", name:"barked", post:"img/dog.svg"}];
    return(
        <div class="posts">
        {posts.map((post) =>  (<Post user={post.user} name={post.name} post={post.post} />))}
        </div>
    );
}

function Post(props){

    const [like, setLike] = React.useState(false);
    let color = "black";

    if(like === true){
        color = "danger";
    }
    

    return(
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.user} />
            {props.name}
          </div>
          <div class="acoes">
            <Icones name="ellipsis-horizontal" />
          </div>
        </div>

        <div class="conteudo">
          <img src={props.post} onClick={() => setLike(!like)}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name={`${like === true ? 'heart' : 'heart-outline'}`} onClick={() => setLike(!like)} color={color}></ion-icon>
              <Icones name="chatbubble-outline" />
              <Icones name="paper-plane-outline" />
            </div>
            <div>
              <Icones name="bookmark-outline" />
            </div>
          </div>

          <div class="curtidas">
            <img src="img/adorable_animals.svg" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
}

