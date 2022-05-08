import Navbar from './Topo';
import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';


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