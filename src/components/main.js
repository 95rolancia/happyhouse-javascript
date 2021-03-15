import { api } from "../api/api.js";
import Signin from "./signin.js";
import Signup from "./signup.js";
import Mypage from "./mypage.js";
import Header from "./header.js";
import Board from "./board.js";
import Bulletin from "./bulletin.js";

let state = JSON.parse(sessionStorage.getItem("logined"));
console.log(state);

const mypage = new Mypage();
const bulletin = new Bulletin();
const board = new Board();
const header = new Header({ state, mypage, board, bulletin });
const signin = new Signin({ mypage, header });
const signup = new Signup();

// Main Page
// Select address
const selectCity = document.querySelector(".select.city");
const selectSi = document.querySelector(".select.si");
selectCity.addEventListener("change", (e) => {
  const selectedCity = e.target.options[e.target.selectedIndex].value;

  const response = api.fetchJSON("./src/data/address.json");
  response.then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (Object.keys(data[i])[0] === selectedCity) {
        const target = data[i][selectedCity];
        for (let j = 0; j < target.length; j++) {
          const name = Object.keys(target[j])[0];
          const newSi = document.createElement("option");
          newSi.setAttribute("value", name);
          newSi.setAttribute("data-code", target[j][name].code);
          newSi.textContent = name;
          selectSi.appendChild(newSi);
        }
        return;
      }
    }
    selectSi.innerHTML = '<option value="all">시/구/군</option>';
  });
  console.log(selectedCity);
});

selectSi.addEventListener("change", (e) => {
  const selectedSi = e.target.options[e.target.selectedIndex];

  const item = [];
  const response = api.fetchJSON("./src/data/houseData.json");
  response.then((res) => {
    const data = res[0];
    let locs = [];
    if (data[selectedSi.dataset.code] !== undefined) {
      console.log(data[selectedSi.dataset.code]);
      for (let i = 0; i < data[selectedSi.dataset.code].length; i++) {
        console.log(data[selectedSi.dataset.code][i]);
        locs.push(data[selectedSi.dataset.code][i]["location"]);
        item.push(data[selectedSi.dataset.code][i]);
      }
    }
    console.log(item);
    document.querySelector(".map-info-list").innerHTML = "";
    for (let k = 0; k < item.length; k++) {
      const div = document.createElement("li");
      div.innerHTML = `
          <div>${item[k]["name"]}</div>
          <div>${item[k]["price"]}</div>
      `;
      document.querySelector(".map-info-list").appendChild(div);
    }

    let marker;
    for (let i = 0; i < locs.length; i++) {
      const response = api.fetchGetLoc(locs[i]);
      response.then((res) => {
        const loc = res["results"][0]["geometry"]["location"];
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(loc["lat"], loc["lng"]),
          map: map,
        });

        marker.addListener("click", () => {
          console.log("hello");
        });
      });
    }

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.556, lng: 126.97 },
      zoom: 12,
    });
  });
});

// About map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.556, lng: 126.97 },
    zoom: 12,
  });
}

initMap();
