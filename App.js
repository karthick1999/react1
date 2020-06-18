import React from "react";   
function App (){
     return ( 
         <div class="form-group">
            <h1> Login form </h1>
                <form> 
                <label >User name  :</label>
            
                    <input type="text" placeholder="Enter name" name="username"   class="form-control" ></input> 
                    <br></br>
                <label> Password :</label>
                    <input type="password" placeholder="password" name="password"  class="form-control mb-3"></input>  
                    <br></br>
                    <button type="submit" class="btn btn-primary"> submit</button>
                </form> 
         </div>
     ); 
} 
export default App; 