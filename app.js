let cookieCount = 0;
let cps = 1;

/*let state = {
  cookieCount: 0,
  cps: 1,
};*/

setInterval(function () {
  cookieCount = cookieCount + cps;
  console.log(cookieCount);
}, 1000);

const imageClick = document.getElementById("cookie");

const generateShop = document.getElementById("shop");

imageClick.addEventListener("click", setInterval);

async function fetchData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );

  const data = await response.json();
  console.log(data);

  data.forEach(function (upgraded) {
    const PId = document.createElement("p");
    PId.innerText(upgraded.id);
    document.body.appendChild(PId);

    const PName = document.createElement("p");
    PName.innerText(upgraded.name);
    document.body.appendChild(PName);

    const PCost = document.createElement("p");
    PCost.innerText(upgraded.cost);
    document.body.appendChild(upgraded.PCost);

    const PIncrease = document.createElement("p");
    PIncrease.innerText(upgraded.increase);
    document.body.appendChild(PIncrease);

    alert("hello");
  });
}

const buttonClick = document.getElementById("bClick");

buttonClick.addEventListener("click", fetchData);

fetchData();
