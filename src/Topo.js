import Icones from "./Icon";

export default function Navbar(){
    return(
        <div class="navbar">
            <ContainerTop />
        </div>
    );
}

function ContainerTop(){
    return(
        <div class="container">
            <Logos />

            <div class="pesquisa"><input type="text" placeholder="Pesquisar" /> </div>

            <DivIcones />
        </div>
    );

}

function Logos(){
    return (
        <div>
            <div class="logo">
                <Icones name="logo-instagram" />
                <div class="separador"></div>
                <img src="img/logo.png" alt="logo instagram"/>
            </div>

            <div class="logo-mobile">
                <Icones name="logo-instagram" />
            </div>

            <div class="instagram-mobile">
                <img src="img/logo.png" alt="logo instagram mobile"/>
            </div>
        </div>
    )
}

function DivIcones(){
    return (
        <div>
            <div class="icones">
                <Icones name="paper-plane-outline" />
                <Icones name="compass-outline" />
                <Icones name="heart-outline" />
                <Icones name="person-outline" />
            </div>

            <div class="icones-mobile">
                <Icones name="paper-plane-outline" />
            </div>
        </div>
    );
}