/**
 * 
 */
import { user } from "../data/data.js";

export default class Update {
	
	constructor() {
	    this.main = document.querySelector(".main-content");
	  }
	render() {
	    const div = document.createElement("div");
	    div.setAttribute("class", "mypage");
	    div.innerHTML = `
	        <form action="submit" class="update-form">
	                <input
        class="form__row id"
        type="text"
        value="ssafy"
        />
          <input
            class="form__row pwd"
            type="password"
            placeholder="ë¹ë°ë²í¸ ìì "
            required
          />
      <input
      class="form__row email"
      type="text"
      placeholder="ì´ë©ì¼ ìì "
      required
      />
          <button class="update-form__btn" type="submit">íì¸</button>
        </form>
	    `;
  
	    this.main.innerHTML = "";
	    this.main.appendChild(div);
	    

	const id = document.querySelector(".form__row.id").value;
    const pwd = document.querySelector(".form__row.pwd").value;
    const email = document.querySelector(".form__row.email").value;
    
    const update_form__btn = document.querySelector(".update-form__btn");
    update_form__btn.addEventListener("click", (e) => {
    	 e.preventDefault();
      this.update.render();
    });
    
    
  }
    update(){
    	
        for(var i=0;i<user.length;i++){
    		if(user[i]['id']==id){
    			user[i]['pwd']=pwd;
    			user[i]['email']=email;

    		    console.log("íì ì ë³´ ìì  ìë£.");
    		}
    	}
    }

}
