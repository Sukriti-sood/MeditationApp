import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
function Main(){
 return(   < >
    <div className="text-center row front align-items-center">
      <div className="e1">
      <a href="https://fontmeme.com/fonts/storyteller-font/"><img className="med" height="150" src="https://fontmeme.com/permalink/201004/c40a49910db7109ef8f95ce0977417e1.png" alt="storyteller-font" border="0"/></a>
      <p className="pquote">"Nature does not hurry, yet eveything is accomplished"</p>
   <Link to="/session"><Button className="medbutton" >Click Me</Button></Link>   
      </div>
      </div>
        </>)
}

export default Main;