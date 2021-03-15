export default class Header {
  constructor({ state, mypage, board, bulletin }) {
    this.state = state;
    this.mypage = mypage;
    this.board = board;
    this.bulletin = bulletin;
    this.headerMenu = document.querySelector(".header__menu");
    this.changeNavbar(this.state);

    const toggleBtn = document.querySelector(".header__toggleBtn");
    toggleBtn.addEventListener("click", () => {
      this.headerMenu.classList.toggle("active");
    });
  }

  setState(state) {
    this.state = state;
    this.changeNavbar(this.state);
  }

  changeNavbar = (state) => {
    if (state === null || !state.logined) {
      document.querySelector(".header__menu").innerHTML = "";
      document.querySelector(".header__menu").insertAdjacentHTML(
        "beforeend",
        `
          <li><button class="signin-btn">로그인</button></li>
          <li><button class="signup-btn">회원가입</button></li>
          `
      );
      // Signin Button
      const signinBtn = document.querySelector(".header__menu .signin-btn");
      signinBtn.addEventListener("click", () => {
        const signinModal = document.querySelector(".modal.signin");
        signinModal.classList.toggle("hide");
      });

      // Signup Button
      const signupBtn = document.querySelector(".header__menu .signup-btn");
      signupBtn.addEventListener("click", () => {
        const signupModal = document.querySelector(".modal.signup");
        signupModal.classList.toggle("hide");
      });
      //
    } else if (state.logined) {
      document.querySelector(".header__menu").innerHTML = "";
      document.querySelector(".header__menu").insertAdjacentHTML(
        "beforeend",
        `
          <li><button class="board-btn">자유게시판</button></li>
          <li><button class="bulletin-btn">글쓰기</button></li>
          <li><button class="mypage-btn">마이페이지</button></li>
          <li><button class="signout-btn">로그아웃</button></li>
          `
      );
      const mypageBtn = document.querySelector(".mypage-btn");
      mypageBtn.addEventListener("click", () => {
        this.mypage.render();
      });

      const signoutBtn = document.querySelector(".signout-btn");
      signoutBtn.addEventListener("click", () => {
        this.setState(null);
        sessionStorage.setItem(
          "logined",
          JSON.stringify({
            logined: false,
          })
        );
        window.location.replace("index.html");
      });

      const boardBtn = document.querySelector(".header__menu .board-btn");
      boardBtn.addEventListener("click", () => {
        this.board.render();
      });

      const bulletinBtn = document.querySelector(".header__menu .bulletin-btn");
      bulletinBtn.addEventListener("click", () => {
        this.bulletin.render();
      });
    }
  };
}
