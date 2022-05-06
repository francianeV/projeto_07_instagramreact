//import Icones from './Topo'

export default function Stories(){

    const storie = [{img: "img/9gag.svg",title: "9gag"}, {img: "img/meowed.svg",title: "meowed"},{img: "img/barked.svg", title:"barked"},{img: "img/nathanwpylestrangeplanet.svg", title:"nathanwpylestrangeplanet"},{img: "img/wawawicomics.svg", title: "wawawicomics"}, {img: "img/respondeai.svg", title: "respondeai"},{img: "img/filomoderna.svg", title: "filomoderna"}, {img: "img/memeriagourmet.svg", title: "memeriagourmet"}];

    return(
        <div class="stories">
        
            {storie.map((stories) =>  (<div class="story"><div class="imagem"><img src={stories.img} /></div><div class="usuario">{stories.title}</div></div>))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div> 
        </div>
        

        
              
    );
}
