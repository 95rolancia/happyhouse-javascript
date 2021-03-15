import { api } from "../api/api.js";
import Update from "./update.js";
import { user } from "../data/data.js";

const update = new Update();
export default class Mypage {
  constructor() {
    this.main = document.querySelector(".main-content");
  }
  render() {
    const div = document.createElement("div");
    div.setAttribute("class", "mypage");
    div.innerHTML = `
        <form class="mypage-form" action="submit">
        <input
        class="form__row id"
        type="text"
        value="ssafy"
        />
        <input
        class="form__row pwd"
        type="password"
        placeholder="비밀번호* (영문+숫자, 8~20자)"
        required
        />
        <input
        class="form__row pwd"
        type="password"
        placeholder="비밀번호 재확인*"
        required
        />
        <div class="mypage-btns">
            <button class="update" type="submit">수정</button>
            <button class="withdrawal" type="submit">탈퇴</button>
        </div>
        </form>
    `;
    this.main.innerHTML = "";
    this.main.appendChild(div);
    
    const withdrawal =document.querySelector(".withdrawal");
    const id =document.querySelector(".form__row.id").value;
    
    
    
    const updateBtn = document.querySelector(".update");
    updateBtn.addEventListener("click", (e) => {
    	 e.preventDefault();
      this.update.render();
    });
    

    
    this.withdrawal.addEventListener("click",(e)=>{
    	 e.preventDefault();
    	for(var i=0;i<user.length;i++){
		if(user[i]['id']==id){
			user.splice(i,1);
			alert('탈퇴되었습니다.');
		}
	}
    })
  }
}
