import Navbar from './Topo';
import Stories from './Stories';
import Posts from './Posts';

export default function App(){
    return (
        <div>
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                    <SideBar />   
            </div>

        </div>
    );
}