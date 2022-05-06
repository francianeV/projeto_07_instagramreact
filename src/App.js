import Navbar from './Topo';
import Stories from './Stories';

export default function App(){
    return (
        <div>
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                </div>   
            </div>

        </div>
    );
}