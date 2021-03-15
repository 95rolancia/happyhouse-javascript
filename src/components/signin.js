import { user } from "../data/data.js";

export default class Signin {
  constructor({ mypage, header }) {
    this.mypage = mypage;
    this.header = header;
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <!-- Modal sign in -->
    <div class="modal signin hide">
      <div class="modal__content animate">
        <i
          onclick="document.querySelector('.modal.signin').classList.toggle('hide')"
          class="fas fa-times close"
        ></i>
        <div class="modal__content__title">로그인</div>

        <form action="submit" class="signin-form">
          <input
            class="form__row id"
            type="text"
            placeholder="아이디"
            required
          />
          <input
            class="form__row pwd"
            type="password"
            placeholder="비밀번호"
            required
          />
          <button class="signin-form__btn" type="submit">로그인</button>
        </form>
        <span class="psw">계정이 없으신가요? <a href="#">회원가입</a></span>
      </div>
    </div>
    `
    );
    this.modalSignin = document.querySelector(".modal.signin");

    this.signinForm = document.querySelector(".signin-form");
    this.signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.signin();
      this.toggle();
      return;
    });
  }

  toggle = () => {
    this.modalSignin.classList.toggle("hide");
  };

  signin = () => {
    const id = this.signinForm.querySelector(".form__row.id").value;
    const pwd = this.signinForm.querySelector(".form__row.pwd").value;
    for (let i = 0; i < user.length; i++) {
      if (user[i].id === id && user[i].pwd === pwd) {
        console.log("login!");
        sessionStorage.setItem(
          "logined",
          JSON.stringify({
            logined: true,
          })
        );
        this.header.setState(JSON.parse(sessionStorage.getItem("logined")));
        return;
      }
    }
  };
}
