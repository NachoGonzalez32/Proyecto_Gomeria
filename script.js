const products = [
  {
    "codigo": "71815",
    "descripcion": "165/70R13 79T EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 58925,
    "precioFinal": 70000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71810",
    "descripcion": "175/65R14 82H EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 64540,
    "precioFinal": 80000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71811",
    "descripcion": "175/65R14 86TXL EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 66220,
    "precioFinal": 80000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71816",
    "descripcion": "175/70R13 82T EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 61330,
    "precioFinal": 75000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71817",
    "descripcion": "175/70R14 88TXL EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 68740,
    "precioFinal": 82000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71819",
    "descripcion": "185/70R14 88T EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 72960,
    "precioFinal": 88000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72012",
    "descripcion": "185/60R14 82H EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 67280,
    "precioFinal": 81000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72014",
    "descripcion": "185/60R15 84H EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 76565,
    "precioFinal": 92000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72016",
    "descripcion": "185/65R14 86H EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 68025,
    "precioFinal": 85000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72018",
    "descripcion": "185/65R15 92TXL EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 78505,
    "precioFinal": 95000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71011",
    "descripcion": "195/55R15 85V EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 76898,
    "precioFinal": 93000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71074",
    "descripcion": "195/55R16 87V EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 83315,
    "precioFinal": 100000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71072",
    "descripcion": "195/55R16 91VXL EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 86695,
    "precioFinal": 105000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72025",
    "descripcion": "195/60R15 88V EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 81340,
    "precioFinal": 97000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72027",
    "descripcion": "195/65R15 91V EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 81775,
    "precioFinal": 99000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72032",
    "descripcion": "205/55R16 91V EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 87020,
    "precioFinal": 105000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "7924",
    "descripcion": "205/65R15 94V EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 89295,
    "precioFinal": 108000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "72050",
    "descripcion": "215/65R16 98H EUROTRAXX H/P",
    "origen": "CHINA",
    "precioLista": 116660,
    "precioFinal": 140000,
    "modelo": "EUROTRAXX H/P"
  },
  {
    "codigo": "71022",
    "descripcion": "205/55R17 95WXL SPORTRAXX UHP",
    "origen": "CHINA",
    "precioLista": 106210,
    "precioFinal": 122000,
    "modelo": "SPORTRAXX UHP"
  },
  {
    "codigo": "71051",
    "descripcion": "215/50R17 95WXL SPORTRAXX UHP",
    "origen": "CHINA",
    "precioLista": 108030,
    "precioFinal": 125000,
    "modelo": "SPORTRAXX UHP"
  },
  {
    "codigo": "71042",
    "descripcion": "215/55R17 98WXL SPORTRAXX UHP",
    "origen": "CHINA",
    "precioLista": 111730,
    "precioFinal": 129000,
    "modelo": "SPORTRAXX UHP"
  },
  {
    "codigo": "71060",
    "descripcion": "225/45ZR17 94YXL SPORTRAXX UHP",
    "origen": "CHINA",
    "precioLista": 104810,
    "precioFinal": 121000,
    "modelo": "SPORTRAXX UHP"
  },
  {
    "codigo": "71077",
    "descripcion": "225/50R18 99WXL SPORTRAXX UHP",
    "origen": "CHINA",
    "precioLista": 125280,
    "precioFinal": 144000,
    "modelo": "SPORTRAXX UHP"
  },
  {
    "codigo": "71088",
    "descripcion": "235/50R18 99WXL SPORTRAXX UHP",
    "origen": "CHINA",
    "precioLista": 138360,
    "precioFinal": 160000,
    "modelo": "SPORTRAXX UHP"
  },
  {
    "codigo": "71089",
    "descripcion": "235/50ZR19 103YXL SPORTRAXX UHP",
    "origen": "CHINA",
    "precioLista": 153210,
    "precioFinal": 176000,
    "modelo": "SPORTRAXX UHP"
  },
  {
    "codigo": "7647",
    "descripcion": "185R14C 102/100S DURATRAXX VAN",
    "origen": "CHINA",
    "precioLista": 101525,
    "precioFinal": 122000,
    "modelo": "DURATRAXX VAN"
  },
  {
    "codigo": "7656",
    "descripcion": "195/75R16C 107/105S DURATRAXX VAN",
    "origen": "CHINA",
    "precioLista": 116060,
    "precioFinal": 139000,
    "modelo": "DURATRAXX VAN"
  },
  {
    "codigo": "7648",
    "descripcion": "195R14C 106/104S DURATRAXX VAN",
    "origen": "CHINA",
    "precioLista": 109255,
    "precioFinal": 131000,
    "modelo": "DURATRAXX VAN"
  },
  {
    "codigo": "7660",
    "descripcion": "205/75R16C 110/108S DURATRAXX VAN",
    "origen": "CHINA",
    "precioLista": 125995,
    "precioFinal": 145000,
    "modelo": "DURATRAXX VAN"
  },
  {
    "codigo": "7812",
    "descripcion": "225/75R16C 121/120R DURATRAXX VAN",
    "origen": "CHINA",
    "precioLista": 155450,
    "precioFinal": 179000,
    "modelo": "DURATRAXX VAN"
  },
  {
    "codigo": "7275",
    "descripcion": "205R16C 110/108S GRANDTRAXX A/T",
    "origen": "CHINA",
    "precioLista": 147425,
    "precioFinal": 170000,
    "modelo": "GRANDTRAXX A/T"
  },
  {
    "codigo": "7663",
    "descripcion": "225/70R17C 112/110S GRANDTRAXX A/T",
    "origen": "CHINA",
    "precioLista": 151475,
    "precioFinal": 174000,
    "modelo": "GRANDTRAXX A/T"
  },
  {
    "codigo": "7683",
    "descripcion": "245/70R16 111TXL GRANDTRAXX A/T",
    "origen": "CHINA",
    "precioLista": 160330,
    "precioFinal": 184000,
    "modelo": "GRANDTRAXX A/T"
  },
  {
    "codigo": "7686",
    "descripcion": "265/70R16 112T GRANDTRAXX A/T",
    "origen": "CHINA",
    "precioLista": 168920,
    "precioFinal": 194000,
    "modelo": "GRANDTRAXX A/T"
  },
  {
    "codigo": "7688",
    "descripcion": "245/65R17 111 HXL GRANDTRAXX A/T",
    "origen": "CHINA",
    "precioLista": 159890,
    "precioFinal": 184000,
    "modelo": "GRANDTRAXX A/T"
  },
  {
    "codigo": "71043",
    "descripcion": "205/50ZR17 93WXL CITYTRAXX HP",
    "origen": "TAILANDIA",
    "precioLista": 100280,
    "precioFinal": 120000,
    "modelo": "CITYTRAXX HP"
  },
  {
    "codigo": "71041",
    "descripcion": "215/55R17 98WXL CITYTRAXX H/P",
    "origen": "TAILANDIA",
    "precioLista": 123000,
    "precioFinal": 147000,
    "modelo": "CITYTRAXX H/P"
  },
  {
    "codigo": "7664",
    "descripcion": "225/70R16 107HXL CITYTRAXX H/T",
    "origen": "CHINA",
    "precioLista": 148480,
    "precioFinal": 178000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "71090",
    "descripcion": "235/50R19 103WXL CITYTRAXX H/P",
    "origen": "TAILANDIA",
    "precioLista": 179570,
    "precioFinal": 205000,
    "modelo": "CITYTRAXX H/P"
  },
  {
    "codigo": "7666",
    "descripcion": "235/65R17 108HKL CITYTRAXX H/T",
    "origen": "CHINA",
    "precioLista": 165300,
    "precioFinal": 198000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7251",
    "descripcion": "235/70R16 106H CITYTRAXX H/T",
    "origen": "CHINA",
    "precioLista": 162720,
    "precioFinal": 195000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7694",
    "descripcion": "245/65R17 111HXL CITYTRAXX H/T",
    "origen": "TAILANDIA",
    "precioLista": 172660,
    "precioFinal": 207000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7682",
    "descripcion": "245/70R16 111HXL CITYTRAXX H/T",
    "origen": "TAILANDIA",
    "precioLista": 172664,
    "precioFinal": 207000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7772",
    "descripcion": "245/70R17 119/116S CITYTRAXX H/T",
    "origen": "TAILANDIA",
    "precioLista": 224830,
    "precioFinal": 264000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7690",
    "descripcion": "255/70R16 111H CITYTRAXX H/T",
    "origen": "TAILANDIA",
    "precioLista": 185700,
    "precioFinal": 222000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7699",
    "descripcion": "265/60R18 110H CITYTRAXX H/T",
    "origen": "TAILANDIA",
    "precioLista": 197640,
    "precioFinal": 237000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7697",
    "descripcion": "265/65R17 112H CITYTRAXX H/T",
    "origen": "TAILANDIA",
    "precioLista": 197750,
    "precioFinal": 237000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7680",
    "descripcion": "265/70R16 112H CITYTRAXX H/T",
    "origen": "CHINA",
    "precioLista": 192130,
    "precioFinal": 230000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7621",
    "descripcion": "LT225/75R16 115/1125 CITYTRAXX H/T",
    "origen": "CHINA",
    "precioLista": 191650,
    "precioFinal": 229000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7679",
    "descripcion": "LT235/85R16 120/116S CITYTRAXX H/T",
    "origen": "CHINA",
    "precioLista": 212000,
    "precioFinal": 254000,
    "modelo": "CITYTRAXX H/T"
  },
  {
    "codigo": "7672",
    "descripcion": "245/65R17 111TXL WILDTRAXX A/T",
    "origen": "TAILANDIA",
    "precioLista": 212664,
    "precioFinal": 255000,
    "modelo": "WILDTRAXX A/T"
  },
  {
    "codigo": "7689",
    "descripcion": "245/70R16 111TXL WILDTRAXX A/T",
    "origen": "TAILANDIA",
    "precioLista": 209320,
    "precioFinal": 251000,
    "modelo": "WILDTRAXX A/T"
  },
  {
    "codigo": "7681",
    "descripcion": "255/70R16 111T WILDTRAXX A/T",
    "origen": "TAILANDIA",
    "precioLista": 220978,
    "precioFinal": 265000,
    "modelo": "WILDTRAXX A/T"
  },
  {
    "codigo": "7698",
    "descripcion": "265/60R18 114TXL WILDTRAXX A/T",
    "origen": "TAILANDIA",
    "precioLista": 239124,
    "precioFinal": 286000,
    "modelo": "WILDTRAXX A/T"
  },
  {
    "codigo": "7687",
    "descripcion": "265/65R17 112T WILDTRAXX A/T",
    "origen": "TAILANDIA",
    "precioLista": 232354,
    "precioFinal": 278000,
    "modelo": "WILDTRAXX A/T"
  },
  {
    "codigo": "7685",
    "descripcion": "265/70R16 112T WILDTRAXX A/T",
    "origen": "TAILANDIA",
    "precioLista": 244435,
    "precioFinal": 293000,
    "modelo": "WILDTRAXX A/T"
  },
  {
    "codigo": "7771",
    "descripcion": "265/70R18 116T WILDTRAXX A/T",
    "origen": "TAILANDIA",
    "precioLista": 197635,
    "precioFinal": 237000,
    "modelo": "WILDTRAXX A/T"
  },
  {
    "codigo": "7773",
    "descripcion": "285/65R18 125/122Q WILDTRAXX M/T",
    "origen": "TAILANDIA",
    "precioLista": 290375,
    "precioFinal": 348000,
    "modelo": "WILDTRAXX M/T"
  },
  {
    "codigo": "7640",
    "descripcion": "35X12.50R17LT 121 WILDTRAXX M/T",
    "origen": "TAILANDIA",
    "precioLista": 417126,
    "precioFinal": 500000,
    "modelo": "WILDTRAXX M/T"
  },
  {
    "codigo": "7693",
    "descripcion": "LT265/75R16 123/1200 WILDTRAXX M/T",
    "origen": "TAILANDIA",
    "precioLista": 303224,
    "precioFinal": 363000,
    "modelo": "WILDTRAXX M/T"
  }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const modelFilter = document.getElementById("modelFilter");
const originFilter = document.getElementById("originFilter");
const sortFilter = document.getElementById("sortFilter");
const compareBody = document.getElementById("compareBody");
let selected = [];

function money(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);
}

function loadModels() {
  const models = [...new Set(products.map(product => product.modelo))].sort();
  models.forEach(model => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelFilter.appendChild(option);
  });
}

function getFilteredProducts() {
  const term = searchInput.value.toLowerCase().trim();
  const model = modelFilter.value;
  const origin = originFilter.value;
  const sort = sortFilter.value;

  let filtered = products.filter(product => {
    const text = `${product.codigo} ${product.descripcion} ${product.modelo} ${product.origen}`.toLowerCase();
    return text.includes(term)
      && (!model || product.modelo === model)
      && (!origin || product.origen === origin);
  });

  if (sort === "priceAsc") filtered.sort((a, b) => a.precioFinal - b.precioFinal);
  if (sort === "priceDesc") filtered.sort((a, b) => b.precioFinal - a.precioFinal);
  if (sort === "nameAsc") filtered.sort((a, b) => a.descripcion.localeCompare(b.descripcion));

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  if (!filtered.length) {
    grid.innerHTML = `<p class="empty">No se encontraron cubiertas con esos filtros.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isSelected = selected.includes(product.codigo);
    return `
      <article class="card">
        <div class="image-box">
          <span class="image-label">${product.modelo}</span>
          <div class="tire-shape" aria-label="Espacio para imagen de cubierta"></div>
        </div>
        <div class="card-body">
          <span class="code">Código ${product.codigo}</span>
          <h3>${product.descripcion}</h3>
          <div class="meta">
            <span>${product.origen}</span>
            <span>${product.modelo}</span>
          </div>
          <div class="prices">
            <span class="price-title">Precio final</span>
            <span class="new">${money(product.precioFinal)}</span>
          </div>
          <button class="compare-btn ${isSelected ? "active" : ""}" onclick="toggleCompare('${product.codigo}')">
            ${isSelected ? "Quitar de comparativa" : "Agregar a comparativa"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function toggleCompare(code) {
  selected = selected.includes(code)
    ? selected.filter(item => item !== code)
    : [...selected, code];

  renderProducts();
  renderCompare();
}

function renderCompare() {
  const items = products.filter(product => selected.includes(product.codigo));

  if (!items.length) {
    compareBody.innerHTML = `<tr><td colspan="5" class="empty">Todavía no seleccionaste productos.</td></tr>`;
    return;
  }

  compareBody.innerHTML = items.map(product => `
    <tr>
      <td>${product.codigo}</td>
      <td>${product.descripcion}</td>
      <td>${product.modelo}</td>
      <td>${product.origen}</td>
      <td><strong>${money(product.precioFinal)}</strong></td>
    </tr>
  `).join("");
}

[searchInput, modelFilter, originFilter, sortFilter].forEach(element => {
  element.addEventListener("input", renderProducts);
  element.addEventListener("change", renderProducts);
});

loadModels();
renderProducts();
