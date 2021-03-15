export default class Board {
  constructor() {
    this.main = document.querySelector(".main-content");
    // this.render();
  }

  render() {
    const div = document.createElement("div");
    div.className = "article-board";
    div.innerHTML =
      `
      <table>
        <caption></caption>
        <colgroup>
          <col style="width: 88px" />
          <col />
          <col style="width: 118px" />
          <col style="width: 80px" />
          <col style="width: 68px" />
        </colgroup>
        <tbody>
        ` +
      this.getBulletins() +
      `
        </tbody>
      </table>
      `;
    this.main.innerHTML = "";
    this.main.appendChild(div);
  }

  getBulletins() {
    return `
    <tr>
    <td colspan="2" class="td_article">
      <div class="board-name">
        <div class="inner_name">
          <a href="#" class="link_name">
            자유게시판
          </a>
        </div>
      </div>

      <div class="board-list">
        <div class="inner_list">
          <a class="article" href="#">
           
            오늘은.. 지옥이였어..
          </a>
        </div>
      </div>
    </td>
    <td class="td_name">
      <a href="#" class="m-tcol-c">
        장준혁
      </a>
    </td>
    <td class="td_date">21:12</td>
    <td class="td_view">31</td>
  </tr>
  <tr>
    <td colspan="2" class="td_article">
      <div class="board-name">
        <div class="inner_name">
          <a href="#" class="link_name">
            자유게시판
          </a>
        </div>
      </div>

      <div class="board-list">
        <div class="inner_list">
          <a class="article" href="#">
  
            살려줘..
          </a>
        </div>
      </div>
    </td>
    <td class="td_name">
      <a href="#" class="m-tcol-c">
        정세원
      </a>
    </td>
    <td class="td_date">21:12</td>
    <td class="td_view">31</td>
  </tr>`;
  }
}
