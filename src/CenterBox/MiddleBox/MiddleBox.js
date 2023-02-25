import { useState } from 'react';
import './MiddleBox.css';
function MiddleBox() {
    const [text, setText] = useState("bhupesh");
    return(
        <div className="middlebox">
            <h5>PostBox</h5>
            {/* <button onClick={()=>setText("Mishra")}>
                Click me!
            </button> */}
            <div class="postboxdiv">
                <form>
                    <textarea class="post-field"rows={7}cols={50}placeholder="Type...">

                    </textarea>
                    <br/>
                    <input type="submit" value="Post"/>
                </form>
            </div>
        </div>
    );
    
}
export default MiddleBox;