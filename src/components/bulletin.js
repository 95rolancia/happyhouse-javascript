export default class Bulletin {
  constructor() {
    this.main = document.querySelector(".main-content");
  }
  render() {
    const div = document.createElement("div");
    div.setAttribute("id", "page-wrapper");
    div.className = "clearfix";
    div.innerHTML = `
    <h1>글쓰기</h1>
    <form action="#" method="POST" id="file-form">
      <div class="field">
        <input
          type="text"
          name="filename"
          id="filename"
          placeholder="제목을 입력해주세요!"
        />
      </div>
      <div class="field">
        <textarea
          name="content"
          id="content"
          placeholder="내용을 입력하세요!"
        ></textarea>
      </div>
      <div class="field">
        <button type="submit">등록</button>
        <div id="messages"></div>
      </div>
    </form>
    `;
    this.main.innerHTML = "";
    this.main.appendChild(div);
  }
}
