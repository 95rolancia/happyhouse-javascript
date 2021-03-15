//import { api } from "../api/api.js";
import { user } from "../data/data.js";


export default class Signup {
  constructor() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <!-- Modal sign up -->
      <div class="modal signup hide">
        <div class="modal__content animate">
          <i
            onclick="document.querySelector('.modal.signup').classList.toggle('hide')"
            class="fas fa-times close"
          ></i>
          <div class="modal__content__title">필수 정보를 입력해주세요.</div>
          <form class="signup-form" action="submit">
            <input
              class="form__row id"
              type="text"
              placeholder="아이디*(4~20자)"
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
            <div class="signup-form__email">
              <input
                class="form__row email front"
                type="text"
                placeholder="이메일 앞자리*"
                required
              />
              <span class="email-center">@</span>
              <input
                class="form__row email end"
                type="text"
                placeholder="이메일 뒷자리*"
                disabled
              />
            </div>
            <select class="form__row email-select" name="email">
              <option value="noSelected">이메일 선택</option>
              <option value="naver.com">naver.com</option>
              <option value="nate.com">nate.com</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="etc">직접 입력</option>
            </select>
            <button class="signup-form__btn" type="submit">가입 완료</button>
            </form>
          </div>
        </div>
    `
    );

    this.signupForm = document.querySelector(".signup-form");
    this.selectEmail = document.querySelector(".email-select");
    this.emailForm = document.querySelector(".email.end");
    this.signupBtn = document.querySelector(".signup-form__btn");
    this.signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
//      this.validCheck();
//      this.duplicateCheck();
      if( this.validCheck()&&this.duplicateCheck())
    	  this.signup();
    });
    this.setSelectEmailEvent();
  }

  setSelectEmailEvent() {
    this.selectEmail.addEventListener("change", (e) => {
      const selectedEmail = e.target.options[e.target.selectedIndex].value;
      if (selectedEmail === "etc") {
        this.emailForm.value = "";
        this.emailForm.disabled = false;
        return;
      }
      this.emailForm.value = selectedEmail;
    });
  }

  validCheck() {
    const id = this.signupForm.querySelector(".form__row.id");
    if (!this.validateId(id.value)) {
      console.log("id 다시 입력하세용!");
      return false;
    }
    return true;
  }

  validateId(id) {
    return /^[A-Za-z][A-Za-z0-9-_]{3,20}/.test(id);
  }
  
  duplicateCheck(){
	  const id = this.signupForm.querySelector(".form__row.id");
	    for(var i=0;i<user.length;i++){
	    	if(user[i]['id']==id.value){
	    		console.log("이미 사용 중인 ID입니다!");
	    		return false;
	    	}
	    }
	    return true;
  }

  showError($target, reason) {
    const error = document.createElement("div");
    error.textContent = reason;
    $target.appendChild(error);
  }

  signup() {
	  	let email = this.signupForm.querySelector(".form__row.email.front").value +"@"+this.signupForm.querySelector(".form__row.email.end").value;
	    const data = {
	    		"id": this.signupForm.querySelector(".form__row.id").value,
	    		"pwd": this.signupForm.querySelector(".form__row.pwd").value,
	    		"email" : email
	    };
	    console.log(data);
	    user.push(data);
  }
  
}
