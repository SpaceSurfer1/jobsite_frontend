import { useState } from 'react';
import './MiddleBox.css';
function MiddleBox() {
    const [text, setText] = useState("bhupesh");
    return(
        <div className="middlebox">
            {/* <h5>PostBox</h5> */}
            {/* <button onClick={()=>setText("Mishra")}>
                Click me!
            </button> */}
            <div class="postboxdiv">
                <form>
                    <textarea class="post-field"rows={6}cols={40}>

                    </textarea>
                    <br/>
                    <button>Post</button>
                    {/* <button>Attach Image</button> */}
                </form>
            </div>
        </div>
    );
    
}
export default MiddleBox;