let cookieCount = 0;
let cps = 1;

const cookie = document.getElementById("cookies");
const cpsShow = document.getElementById("cpsShow");
const Shop = document.getElementById("shop");

setInterval(function () {
  cookieCount = cookieCount + cps;
  console.log(cookieCount);
  cookieCount = document.getElementById("score");
  cookieCount++;
}, 1000);

const imageClick = document.getElementById("cookie");
imageClick.addEventListener("click", setInterval);
//const generateShop = document.getElementById("shop");

async function fetchData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );

  const data = await response.json();
  console.log(data);

  data.forEach(function (upgraded) {
    const Container = document.createElement("div");

    const PId = document.createElement("p");
    PId.innerText = upgraded.id;
    document.body.appendChild(PId);

    const PName = document.createElement("p");
    PName.innerText = upgraded.name;
    document.body.appendChild(PName);

    const PCost = document.createElement("p");
    PCost.innerText = upgraded.cost;
    document.body.appendChild(PCost);

    const PIncrease = document.createElement("p");
    PIncrease.innerText = upgraded.increase;
    document.body.appendChild(PIncrease);

    const buttonClick = document.createElement("button");
    buttonClick.innerText = "Buy";
    document.body.appendChild(buttonClick);

    buttonClick.addEventListener("click", () => {
      purchaseItem(upgraded);
    });

    Container.append(PId, PName, PCost, PIncrease, buttonClick);
    Shop.appendChild(Container);
  });
}

fetchData();
