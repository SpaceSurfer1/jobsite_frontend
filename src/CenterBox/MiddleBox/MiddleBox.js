import { useState } from 'react';
import './MiddleBox.css';
function MiddleBox() {
    const [text, setText] = useState("bhupesh");
    return(
        <div className="middlebox">
            {text}
            <button onClick={()=>setText("Mishra")}>
                Click me!
            </button>
        </div>
    );
    
}
export default MiddleBox;