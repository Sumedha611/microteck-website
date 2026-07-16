console.log("Products.js loaded");

let currentView = "categories";
let currentCategory = "";

/* CATEGORY DATA */
const categories = [
  { key: "nutrients", name: "Nutrients", img: "images/nutrients.jpg" },
  { key: "biostimulants", name: "Biostimulants", img: "images/biostimulants.jpg" },
  { key: "bioproducts", name: "Bio Products", img: "images/bio.jpg" },
  { key: "organic", name: "Organic Fertilizers", img: "images/organic.jpg" },
  { key: "cake", name: "Non Edible De-Oiled Cake", img: "images/cake.jpg" },
  { key: "speciality", name: "Speciality Products", img: "images/special.jpg" },
  { key: "aqua", name: "Aqua Products", img: "images/aqua.jpg" }
];

document.addEventListener("DOMContentLoaded", showCategories);

/* SHOW CATEGORY CARDS */
function showCategories() {
  const products = document.getElementById("products");

  let html = `<div class="category-grid" id="category-grid">`;

  categories.forEach(cat => {
    html += `
      <div class="category-card" onclick="openCategory('${cat.key}')">
        <h3>${cat.name}</h3>
        <img src="${cat.img}">
      </div>
    `;
  });

  html += `</div><div id="category-content" style="margin-top:40px;"></div>`;
  products.innerHTML = html;
}
function openCategory(category) {
  const grid = document.getElementById("category-grid");
  const content = document.getElementById("category-content");

  currentCategory = category;
  grid.style.display = "none";


  if (category === "nutrients") {
    grid.style.display ="none";
    content.innerHTML = `
      <div class="back-btn" onclick="backToCategories()">← Back</div>
      ${getNutrientsHTML()}
    `;
    initAccordion();

  } else if (category === "biostimulants") {
    content.innerHTML = `
      <div class="back-btn" onclick="backToCategories()">← Back</div>
      ${getBiostimulantsHTML()}
    `;
    initAccordion();

  } else if (category === "bioproducts") {
    content.innerHTML = `
      <div class="back-btn" onclick="backToCategories()">← Back</div>
      ${getBioProductsHTML()}
    `;
    initAccordion();
  }
else if (category === "speciality") {
  content.innerHTML = `
    <div class="back-btn" onclick="backToCategories()">← Back</div>
    ${getSpecialityHTML()}
  `;
  initAccordion();
}
else if (category === "organic") {
  content.innerHTML = `
    <div class="back-btn" onclick="backToCategories()">← Back</div>
    ${getOrganicSimpleHTML()}
  `;
  initAccordion();

} else if (category === "cake") {
  content.innerHTML = `
    <div class="back-btn" onclick="backToCategories()">← Back</div>
    ${getCakeHTML()}
  `;
  initAccordion();

} else if (category === "aqua") {
  content.innerHTML = `
    <div class="back-btn" onclick="backToCategories()">← Back</div>
    ${getAquaHTML()}
  `;
  initAccordion();
}
}
function getNutrientsHTML() {
  return `
    <h2 style="text-align:center;margin:40px 0 20px;">Nutrients</h2>

    <div class="accordion">

      <div class="accordion-item micro">
        <div class="accordion-header">Micronutrients <span>+</span></div>
        <div class="accordion-content">
          <div class="content-inner">
            <div class="card">
              <h3>Foliar Sprays</h3>
              <ul>
                <li onclick="openProduct('Mazik Plus')">Mazik Plus</li>
                <li onclick="openProduct('Total')">Total</li>
                <li onclick="openProduct('Totaal')">Totaal</li>
                <li onclick="openProduct('Energy')">Energy</li>
                <li onclick="openProduct('Energy Gold')">Energy Gold</li>
                <li onclick="openProduct('Magnus')">Magnus</li>
                <li onclick="openProduct('Bororich')">Bororich</li>
                <li onclick="openProduct('Femax')">Femax</li>
                <li onclick="openProduct('Zimax')">Zimax</li>
                <li onclick="openProduct('OxyZn')">OxyZn</li>
                <li onclick="openProduct('Orthosid')">Orthosid</li>
                <li onclick="openProduct('Ferri Plus')">Ferri Plus</li>
              </ul>
            </div>

            <div class="card">
              <h3>Soil Applications</h3>
              <ul>
                <li onclick="openProduct('Captain')">Captain</li>
                <li onclick="openProduct('Captain SA')">Captain SA</li>
                <li onclick="openProduct('Captain Plus')">Captain Plus</li>
                <li onclick="openProduct('Captain Plus GR')">Captain Plus GR</li>
                <li onclick="openProduct('Captain Plus g+++')">Captain Plus g+++</li>
                <li onclick="openProduct('Captain Gold')">Captain Gold</li>
                <li onclick="openProduct('Captain Diamond')">Captain Diamond</li>
                <li onclick="openProduct('Golden Zink 12')">Golden Zink 12</li>
                <li onclick="openProduct('Bororich SA')">Bororich SA</li>
                <li onclick="openProduct('Ferri Plus')">Ferri Plus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item secondary">
        <div class="accordion-header">Secondary Nutrients <span>+</span></div>
        <div class="accordion-content">
          <div class="content-inner">
            <div class="card">
              <h3>Foliar Sprays</h3>
              <ul>
                <li onclick="openProduct('Calsyp')">Calsyp</li>
                <li onclick="openProduct('Calsyp 21')">Calsyp 21</li>
                <li onclick="openProduct('Calcin Mag')">Calcin Mag</li>
                <li onclick="openProduct('Multigreen')">Multigreen</li>
              </ul>
            </div>

            <div class="card">
              <h3>Soil Applications</h3>
              <ul>
                <li onclick="openProduct('Sulphonite')">Sulphonite</li>
                <li onclick="openProduct('Multigreen')">Multigreen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item primary">
        <div class="accordion-header">Primary Nutrients <span>+</span></div>
        <div class="accordion-content">
          <div class="content-inner">
            <div class="card">
              <h3>Foliar Sprays</h3>
              <ul>
                <li onclick="openProduct('K - 50')">K - 50</li>
                <li onclick="openProduct('Humak')">Humak</li>
                <li onclick="openProduct('NutriPaK')">NutriPaK</li>
                <li onclick="openProduct('Phokus')">Phokus</li>
                <li onclick="openProduct('K - Brix')">K - Brix</li>
                <li onclick="openProduct('Thio K')">Thio K</li>
              </ul>
            </div>

            <div class="card">
              <h3>Soil Applications</h3>
              <ul>
                <li onclick="openProduct('Takat')">Takat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}
function getBiostimulantsHTML() {
  return `
  <h2 style="text-align:center;margin:40px 0 20px;">Biostimulants</h2>

  <div class="accordion">

    <!-- Botanical Extract -->
    <div class="accordion-item">
      <div class="accordion-header">Botanical Extract <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">
          <div class="card">
            <ul>
              <li onclick="openProduct('Fire')">Fire</li>
              <li onclick="openProduct('Flare')">Flare</li>
              <li onclick="openProduct('O3')">O3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Humic & Fulvic -->
    <div class="accordion-item">
      <div class="accordion-header">Humic Acid & Fulvic Acid <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">

          <div class="card">
            <h3>Foliar Sprays</h3>
            <ul>
              <li onclick="openProduct('Miracle')">Miracle</li>
              <li onclick="openProduct('Rainbow')">Rainbow</li>
              <li onclick="openProduct('Flower Booster')">Flower Booster</li>
              <li onclick="openProduct('Kick')">Kick</li>
            </ul>
          </div>

          <div class="card">
            <h3>Soil Applications</h3>
            <ul>
              <li onclick="openProduct('Kick Gr')">Kick Gr</li>
              <li onclick="openProduct('Kick Gold')">Kick Gold</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- Mixed Formulations -->
    <div class="accordion-item">
      <div class="accordion-header">Mixed Formulations <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">

          <div class="card">
            <h3>Foliar Sprays</h3>
            <ul>
              <li onclick="openProduct('Healup')">Healup</li>
            </ul>
          </div>

          <div class="card">
            <h3>Soil Applications</h3>
            <ul>
              <li onclick="openProduct('Alter')">Alter</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- Protein Hydrolysates -->
    <div class="accordion-item">
      <div class="accordion-header">Protein Hydrolysates & Amino Acids <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">

          <div class="card">
            <h3>Seed Treatment</h3>
            <ul>
              <li onclick="openProduct('Bond')">Bond</li>
            </ul>
          </div>

          <div class="card">
            <h3>Soil Applications</h3>
            <ul>
              <li onclick="openProduct('Microzyme')">Microzyme</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- Sea Weed Extract -->
    <div class="accordion-item">
      <div class="accordion-header">Sea Weed Extract <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">

          <div class="card">
            <h3>Foliar Sprays</h3>
            <ul>
              <li onclick="openProduct('K - 10')">K - 10</li>
              <li onclick="openProduct('CVID 20')">CVID 20</li>
              <li onclick="openProduct('Canopy')">Canopy</li>
            </ul>
          </div>

          <div class="card">
            <h3>Soil Applications</h3>
            <ul>
              <li onclick="openProduct('Bumper')">Bumper</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
  `;
}
function getBioProductsHTML() {
  return `
  <h2 style="text-align:center;margin:40px 0 20px;">Bio Products</h2>

  <div class="accordion">

    <!-- Biopesticides -->
    <div class="accordion-item">
      <div class="accordion-header">Biopesticides <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">

          <div class="card">
            <h3>Foliar Sprays</h3>
            <ul>
              <li onclick="openProduct('Biocens')">Biocens</li>
            </ul>
          </div>

          <div class="card">
            <h3>Soil Applications</h3>
            <ul>
              <li onclick="openProduct('Bioguard TV')">Bioguard TV</li>
              <li onclick="openProduct('Bioguard TH')">Bioguard TH</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- Biofertilizers -->
    <div class="accordion-item">
      <div class="accordion-header">Biofertilizers <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">
          <div class="card">
            <ul>
              <li onclick="openProduct('AcetoN')">AcetoN</li>
              <li onclick="openProduct('Azospire')">Azospire</li>
              <li onclick="openProduct('AzoNova')">AzoNova</li>
              <li onclick="openProduct('Mycophos')">Mycophos</li>
              <li onclick="openProduct('Bio Fuse')">Bio Fuse</li>
              <li onclick="openProduct('Phosio')">Phosio</li>
              <li onclick="openProduct('Solvi K')">Solvi K</li>
              <li onclick="openProduct('Solviphos F')">Solviphos F</li>
              <li onclick="openProduct('Rhizo Boost')">Rhizo Boost</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Neem Formulations -->
    <div class="accordion-item">
      <div class="accordion-header">Neem Formulations <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">

          <div class="card">
            <h3>Foliar Sprays</h3>
            <ul>
              <li onclick="openProduct('Azaatin 300')">Azaatin 300</li>
              <li onclick="openProduct('Azaatin 300 BF')">Azaatin 300 BF</li>
              <li onclick="openProduct('Azaatin 1500')">Azaatin 1500</li>
              <li onclick="openProduct('Azaatin 3000')">Azaatin 3000</li>
              <li onclick="openProduct('Azaatin 1 %')">Azaatin 1 %</li>
              <li onclick="openProduct('Azaatin 5 %')">Azaatin 5 %</li>
              <li onclick="openProduct('Azaatin 10 %')">Azaatin 10 %</li>
            </ul>
          </div>

          <div class="card">
            <h3>Soil Applications</h3>
            <ul>
              <li onclick="openProduct('Azaatin 1.5% GR')">Azaatin 1.5% GR</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
  `;
}
function getSpecialityHTML() {
  return `
  <h2 style="text-align:center;margin:40px 0 20px;">Speciality Products</h2>

  <div class="accordion">

    <div class="accordion-item">
      <div class="accordion-header">Speciality Products <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">

          <div class="card">
            <h3>Foliar Sprays</h3>
            <ul>
              <li onclick="openProduct('Shikari - L')">Shikari - L</li>
              <li onclick="openProduct('Spread')">Spread</li>
            </ul>
          </div>

          <div class="card">
            <h3>Soil Applications</h3>
            <ul>
              <li onclick="openProduct('Shikari Gr')">Shikari Gr</li>
              <li onclick="openProduct('Nutricap')">Nutricap</li>
              <li onclick="openProduct('Nutricap - Banana Spl')">Nutricap - Banana Spl</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
  `;
}
function getOrganicSimpleHTML() {
  return `
  <h2 style="text-align:center;margin:40px 0 20px;">Organic Fertilizers</h2>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">Products <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">
          <div class="card">
            <ul>
              <li onclick="openProduct('Allrounder')">Allrounder</li>
              <li onclick="openProduct('PhotoN')">PhotoN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
function getCakeHTML() {
  return `
  <h2 style="text-align:center;margin:40px 0 20px;">Non Edible De-Oiled Cake</h2>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">Products <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">
          <div class="card">
            <ul>
              <li onclick="openProduct('Caster Gold')">Caster Gold</li>
              <li onclick="openProduct('Neem Gold')">Neem Gold</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
function getAquaHTML() {
  return `
  <h2 style="text-align:center;margin:40px 0 20px;">Aqua Products</h2>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">Products <span>+</span></div>
      <div class="accordion-content">
        <div class="content-inner">
          <div class="card">
            <ul>
              <li onclick="openProduct('Aqua Boost')">Aqua Boost</li>
              <li onclick="openProduct('Aqua Feast')">Aqua Feast</li>
              <li onclick="openProduct('Gutnil')">Gutnil</li>
              <li onclick="openProduct('Gelstick')">Gelstick</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
} 
/* PRODUCT DATA */
const productData = {
"Mazik Plus": {
  img: "46.png",
  info: [
    "➜ Contains partially chelated micronutrients in powder form as per the state formula.<br>" +
    "➜ Available in 100 g, 200 g, 400 g, and 1 Kg packs.<br>" +
    "➜ Recommended for foliar spray.<br>" +
    "➜ Dosage: 2 g per liter of water.<br>" +
    "➜ Contains micronutrients as per the state formula."
  ]
},
  "Total": {
    img: "total.png",
    info: "Contains all micronutrients in completely chelated form along with amino acids as per the state formula.Recommended for Foliar spray.Available in 50,100 & 250 g.Dosage - 1 g / L of water."
  },
  "Totaal": {
    img: "total2.png",
    info: "Contains all micronutrients in completely chelated form along with amino acids as per the state formula.Recommended for Foliar spray.Available in 50,100 & 250 g.Dosage - 1 g / L of water."
  },
"Energy": {
  img: "07.png",
  info: [
    "➜ Contains all micronutrients in liquid form as per the state formula.<br>"+
    "➜ Available in 100 ml, 250 ml, 500 ml, 1 L, 5 L, and 20 L packs.<br>"+
    "➜ Recommended for foliar spray.<br>"+
    "➜ Dosage: 3 ml per liter of water."
  ]
},
  "Energy Gold": {
    img: "06.png",
  info: [
  "➜ Contains all plant chelated micronutrients and fulvic acid in liquid form as per the state formula.<br>" +
  "➜ Recommended for foliar spray.<br>" +
  "➜ Available in 100 ml, 250 ml, 500 ml, and 1000 ml packs.<br>" +
  "➜ Dosage: 1 ml per liter of water."
    ]
  },
   "Magnus": {
    img: "45.png",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
  "Bororich": {
    img: "23.png",
    info: [
  "➜ 20% B.<br>" +
  "➜ Available in 100 g, 250 g, 500 g, and 1000 g packs.<br>" +
  "➜ Foliar application: 3 g per liter of water."
]
  },
  "Femax": {
    img: "33.png",
    info: [
  "➜ Foliar application: 1 g per liter of water.<br>" +
  "➜ Available in 50 g, 100 g, 250 g, and 500 g packs.<br>" +
  "➜ Contains 12% chelated iron (Fe)."
]
  },
    "Zimax": {
    img: "56.png",
    info: [
  "➜ 12% chelated zinc.<br>" +
  "➜ Foliar application: 1 g per liter of water.<br>" +
  "➜ Available in 50 g, 100 g, 250 g, 500 g, and 1 Kg packs."
]
  },
  "OxyZn": {
    img: "16.png",
    info: [
  "➜ Highly concentrated zinc formulation containing 39.5% zinc.<br>" +
  "➜ Requires a low dosage of 1 ml per liter of water.<br>" +
  "➜ Promotes nitrogen metabolism and the production of proteins and starch.<br>" +
  "➜ Boosts chloroplast development and enzyme production.<br>" +
  "➜ Available in 100 ml, 250 ml, 500 ml, and 1000 ml packs."
] 
  },
  "Orthosid": {
    img: "images/products/mazik-plus.jpg",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
   "Ferri Plus": {
    img: "34.png",
    info: [
  "➜ Fe - 19%.<br>" +
  "➜ Available in 1 Kg and 5 Kg packs.<br>" +
  "➜ Foliar application: 3 g per liter of water.<br>" +
  "➜ Soil application (SA): 5 Kg per acre."
]
  },


   "Captain": {
    img: "31.png",
   info: [
  "➜ Micronutrient fertilizer in powder form.<br>" +
  "➜ 100% soluble in water.<br>" +
  "➜ Can be used in drip irrigation.<br>" +
  "➜ Contains micronutrients as per the state formula.<br>" +
  "➜ Available in 1 Kg, 5 Kg, 10 Kg, and 25 Kg packs.<br>" +
  "➜ Recommended dosage: 10 Kg per acre.<br>" +
  "➜ For plantation crops: 50 g to 250 g per plant, depending on the size of the plant."
]
  },
   "Captain SA": {
    img: "30.png",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
   "Captain Plus": {
    img: "29.png",
   info: [
  "➜ Used for soil application in Andhra Pradesh and Telangana states only.<br>" +
  "➜ Contains micronutrients such as zinc, ferrous, and manganese as per Formula No. 7 of AP & Telangana.<br>" +
  "➜ Helps in better plant growth and development.<br>" +
  "➜ Dosage: 50 Kg per acre.<br>" +
  "➜ For uniform distribution, 48 Kg of inert material is provided along with 2 Kg of Captain Plus.<br>" +
  "➜ Mix together and apply to 1 acre."
]
  },
   "Captain Plus GR": {
    img: "28.png",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
   "Captain Plus g+++": {
    img: "29.png",
    info: [
  "➜ Granular micronutrient fertilizer.<br>" +
  "➜ Easy for application.<br>" +
  "➜ Contains micronutrients along with secondary nutrients as per the state formula.<br>" +
  "➜ Pack size / recommendation: 10 Kg per acre."
]
  },
   "Captain Gold": {
    img: "27.png",
    info: [
  "➜ Granular micronutrient fertilizer.<br>" +
  "➜ Easy for application.<br>" +
  "➜ 100% soluble in water.<br>" +
  "➜ Can be used in drip irrigation.<br>" +
  "➜ Contains chelated micronutrients as per the state formula.<br>" +
  "➜ Pack size / recommendation: 4 Kg per acre."
]
  },
   "Captain Diamond": {
    img: "26.png",
    info: [
  "➜ Granular micronutrient fertilizer.<br>" +
  "➜ Easy for application.<br>" +
  "➜ 100% soluble in water.<br>" +
  "➜ Can be used in drip irrigation.<br>" +
  "➜ Contains micronutrients chelated with organic matter as per the state formula.<br>" +
  "➜ Pack size / recommendation: 1 Kg per acre.<br>" +
  "➜ Mix with 9 Kg of NPK and apply for better results."
]
  },
   "Golden Zink 12": {
    img: "36.png",
    info: [
  "➜ Contains zinc in chelated form (Zn-EDTA 12%).<br>" +
  "➜ Recommended for soil application.<br>" +
  "➜ Used to correct zinc deficiency in soil.<br>" +
  "➜ Technical material: 250 g.<br>" +
  "➜ Along with the technical material, 4.75 Kg of inert material is provided.<br>" +
  "➜ Mix together and apply for half an acre for uniform distribution."
]
  },
   "Bororich SA": {
    img: "22.png",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
 
  "Calsyp": {
    img: "04.png",
    info: [
  "➜ Microteck CALSYP is a calcium concentrate liquid formulation containing 11% calcium.<br>" +
  "➜ Strengthens cell walls and increases resistance to pests and diseases.<br>" +
  "➜ Recommended for application during the flowering stage.<br>" +
  "➜ Dosage: 1 ml per liter of water.<br>" +
  "➜ Symptoms of deficiency: flower buds fail to develop, and the youngest leaves remain small and deformed.<br>" +
  "➜ Available in 100 ml, 250 ml, 500 ml, and 1000 ml packs."
]
  },
  "Calsyp 21": {
    img: "images/products/mazik-plus.jpg",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
  "Calcin Mag": {
    img: "images/products/mazik-plus.jpg",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },

  "Sulphonite": {
    img: "54.png",
   info: [
  "➜ Helps to overcome sulfur (S) deficiency.<br>" +
  "➜ Improves soil health, balances soil pH, and enhances the uptake of other plant nutrients.<br>" +
  "➜ A key ingredient in the process of photosynthesis, protein synthesis, enzyme activity, and vitamin formation.<br>" +
  "➜ Easy to broadcast as it is in granular form.<br>" +
  "➜ Dosage: 8 to 10 Kg per acre.<br>" +
  "➜ Pack size: 10 Kg."
]
  },
  
  "Multigreen": {
    img: "", 
   info: [
  "➜ Available in 500 g, 1 Kg, and 25 Kg packs.<br>" +
  "➜ Mg – 9.5%.<br>" +
  "➜ Foliar application: 3 g per liter of water.<br>" +
  "➜ Soil application (SA): 25 Kg per acre."
]
  },

  "K - 50": {
    img: "k20.png",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
  "Humak": {
    img: "39.png",
    info: [
  "➜ Chemically known as Potassium Schoenite.<br>" +
  "➜ Water-soluble potassium (as K₂O) – 23% minimum.<br>" +
  "➜ Magnesium (as MgO) – 11% maximum.<br>" +
  "➜ Available in powder form.<br>" +
  "➜ Foliar spray: An emergency source of potassium for improving crop growth, quality, and yield.<br>" +
  "➜ Foliar dosage: 1 Kg per acre.<br>" +
  "➜ Drip dosage: 2 Kg per acre.<br>" +
  "➜ Available in 1 Kg and 5 Kg packs."
]
  },
  "NutriPaK": {
    img: "13.png",
   info: [
  "➜ Highly nutritious concentrated agrifluid with a unique formulation containing NPK and other essential plant nutrients.<br>" +
  "➜ Composition: NPK – 11:11:08.<br>" +
  "➜ Composition: Zinc (as Zn-EDTA) – 0.7%.<br>" +
  "➜ Composition: Boron (as B) – 0.5% to 0.7%.<br>" +
  "➜ Contains fulvic acid along with other micro and secondary plant nutrients.<br>" +
  "➜ A complete food for all crops.<br>" +
  "➜ Available in 100 ml, 250 ml, 500 ml, and 1000 ml packs."
]
  },
  "Phokus": {
    img: "17.png",
    info: [
  "➜ Microteck PHOKUS contains phosphorus and potassium in liquid form.<br>" +
  "➜ Acts as both a nutrient and fungicide.<br>" +
  "➜ Composition: Two primary nutrients (PK) – 30% min.<br>" +
  "➜ Composition: Copper (as Cu) – 1% min.<br>" +
  "➜ Foliar dosage: 2.5 ml per liter of water.<br>" +
  "➜ Drip dosage: 500 ml per acre.<br>" +
  "➜ Available in 100 ml, 250 ml, 500 ml, and 1000 ml packs."
]
  },
  "K - Brix": {
    img: "images/products/mazik-plus.jpg",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
  "Thio K": {
    img: "images/products/mazik-plus.jpg",
    info: "Mazik Plus is a micronutrient foliar spray that improves crop growth."
  },
  "Takat": {
    img: "55.png",
    info: "is a granular fertilizer rich in organic potash derived from molasses Contains potassium (@ 14.5 %), seaweed extract and potassium mobilising bacteria (KMB) Helps in root development of the crop The coated bacteria helps in solubilising the fixed potash in the soil Also called as Organic potash Dosage – 40 Kg / acre"
  },
};
productData["Fire"] = { img: "35.png", info: [
  "➜ Organic plant protector.<br>" +
  "➜ Potential natural inhibitor of many plant pathogens including fungi, bacteria, and viruses.<br>" +
  "➜ Composition: Plant extract – clove oil.<br>" +
  "➜ Compatible with all bio-fertilizers.<br>" +
  "➜ Storage life up to three years.<br>" +
  "➜ Eco-friendly and environmentally safe with no pollution.<br>" +
  "➜ No development of resistance.<br>" +
  "➜ Safe for human beings and animals.<br>" +
  "➜ Disperses and spreads quickly with in the plant system.<br>" +
  "➜ Activates the plant defense mechanism instantly.<br>" +
  "➜ Dosage: 1 g per liter of water.<br>" +
  "➜ Application: Spray or soil drenching.<br>" +
  "➜ Recommended dosage: 150 to 200 g per acre.<br>" +
  "➜ Spray thoroughly on all sides and parts of the crop.<br>" +
  "➜ For best results, repeat application after 3 days.<br>" +
  "➜ Available in 50 g, 100 g, 250 g, and 500 g packs."
] };
productData["Flare"] = { img: "08.png", info: [
  "➜ Prevents migration of insects from adjacent fields to feed on crops.<br>" +
  "➜ Acts as an antifeedant.<br>" +
  "➜ Pests do not prefer feeding on treated plants and may starve due to lack of food.<br>" +
  "➜ Target pests: White flies.<br>" +
  "➜ Target pests: Mealy bugs."
]};
productData["O3"] = { img: "15.png",info: [
  "➜ Composition: Plant extract – garlic oil.<br>" +
  "➜ Recommended for the control of sucking pests.<br>" +
  "➜ Dosage: 2.5 ml per liter of water.<br>" +
  "➜ Available in 100 ml, 250 ml, 500 ml, and 1000 ml packs."
]};

productData["Miracle"] = { img: "47.png", info: [
  "➜ Contains purest humic acid in powder form.<br>" +
  "➜ Dosage: 0.15–0.2 g per liter of water (15–20 g per acre); ultra-low dose with extra benefits.<br>" +
  "➜ Stimulates flowering in plants and promotes better fruit set, resulting in higher yields.<br>" +
  "➜ Helps reduce flower drop.<br>" +
  "➜ Available in 25 g, 50 g, and 100 g packs."
] };
productData["Rainbow"] = { img: "51.png",info: [
  "➜ Dosage: 0.3 g per liter of water (30 g per acre); low dosage, more benefit.<br>" +
  "➜ Increases leaf chlorophyll content, resulting in enhanced photosynthesis.<br>" +
  "➜ Available in 30 g, 100 g, and 200 g packs.<br>" +
  "➜ Contains purest humic substances in powder form.<br>" +
  "➜ Promotes overall plant growth and development, resulting in higher yield."
]};
productData["Flower Booster"] = { img: "09.png", info: [
  "➜ Composition: Humic acid (derived from organic manure) – 15% w/v.<br>" +
  "➜ Composition: Aqueous media – 85% v/v.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Improves flowering without affecting vegetative growth.<br>" +
  "➜ Imparts attractive color to fruits.<br>" +
  "➜ Improves flower bud opening and promotes the growth of flowers and fruits.<br>" +
  "➜ Dosage: 1 ml per liter of water."
]};
productData["Kick"] = { img: "11.png", info: [
  "➜ Microteck KICK contains organic nutrients and natural plant growth stimulants derived from plant and animal waste sources.<br>" +
  "➜ Contributes to the healthy development of plants, resulting in higher yields.<br>" +
  "➜ Stimulates root and shoot growth by enhancing foliar nutrient absorption and translocation.<br>" +
  "➜ Increases vitamin content and enzyme production in plants.<br>" +
  "➜ Improves drought tolerance in plants."
] };
productData["Kick Gr"] = { img: "42.png", info: [
  "➜ Contains organic nutrients and natural plant growth stimulants derived from plant and animal waste sources.<br>" +
  "➜ Increases the capacity of retaining and exchanging soil nutrients.<br>" +
  "➜ Effectively chelates and complexes soil nutrients.<br>" +
  "➜ Improves root and shoot growth even under adverse conditions.<br>" +
  "➜ Helps increase overall crop yield.<br>" +
  "➜ Composition: Humic substances (derived from organic manure) – 3% w/w.<br>" +
  "➜ Composition: Bentonite granules as carrier material – 97% w/w.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Dosage: 2 Kg per acre."
]};
productData["Kick Gold"] = { img: "41.png", info: [
  "➜ Unique silver-colored, perfectly round, and uniformly shining bentonite granules.<br>" +
  "➜ Contains humic substances and other secondary nutrients.<br>" +
  "➜ Composition: Humic substances (derived from organic manure) – 1.5% w/w.<br>" +
  "➜ Composition: Bentonite granules as carrier material – 98.5% w/w.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Dosage: 1 Kg per acre.<br>" +
  "➜ Use: Yield maximizer for soil application.<br>" +
  "➜ Improves soil physical conditions.<br>" +
  "➜ Recommended for all field crops, fruit crops, vegetables, and commercial crops.<br>" +
  "➜ Available in pack sizes of 1 Kg × 8, 1 Kg × 16, and 1 Kg × 25."
]};

productData["Healup"] = { img: "healup.png",info: [
  "➜ A natural immunity booster that helps plants overcome stress and adverse conditions.<br>" +
  "➜ Acts as a strong antifeedant and repels sucking pests.<br>" +
  "➜ Helps prevent viral transmission by controlling sucking pests.<br>" +
  "➜ Dosage: 3.5 g per liter of water.<br>" +
  "➜ Not soluble in water; filter the solution before use."
] };
productData["Alter"] = { img: "20.png", info: [
  "➜ A soil conditioner in granular form.<br>" +
  "➜ Composition: Humic substances (derived from organic manure) – 0.3%.<br>" +
  "➜ Composition: CMS (Ca, Mg & S) as carrier material – 99.7%.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Recommended for soil application.<br>" +
  "➜ Dosage: 25 Kg per acre."
] };

productData["Bond"] = { img: "21.png", info: [
  "➜ Used for seed treatment to achieve higher yields.<br>" +
  "➜ Contains natural organic plant root stimulants that promote healthy and uniform root development.<br>" +
  "➜ Improves plant growth by increasing nutrient absorption.<br>" +
  "➜ Helps plants survive under adverse conditions.<br>" +
  "➜ Composition: Humic substances (derived from organic manure) – 70% w/w.<br>" +
  "➜ Composition: Binding agent – 30% w/w.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Dosage: 2 g per Kg of seed.<br>" +
  "➜ Method of use: Add 25 ml of water to the pouch containing 5 g of product and shake vigorously for 15 minutes until it forms a paste.<br>" +
  "➜ Use the paste to treat 2.5 Kg of seeds and shade dry (if required) before sowing."
] };
productData["Microzyme"] = { img: "images/products/default.jpg", info: "Soil enzyme activator." };

productData["K - 10"] = { img: "images/products/default.jpg", info: "Seaweed foliar spray." };
productData["CVID 20"] = { img: "05.png", info: "Growth promoting rhizobacteria." };
productData["Canopy"] = { img: "25.png",info: [
  "➜ Used as a bactericide and fungicide.<br>" +
  "➜ Contains fulvic acid and carrier material."
]};
productData["Bumper"] = { img: "24.png", info: [
  "➜ Humic substances (derived from organic manure) – 1% w/w.<br>" +
  "➜ Bentonite granules as carrier material – 99% w/w.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Yield maximizer for soil application.<br>" +
  "➜ Helps in better growth and development of crops.<br>" +
  "➜ Easy for application.<br>" +
  "➜ Available in 1 Kg, 4 Kg, 8 Kg, 16 Kg, and 24 Kg packs.<br>" +
  "➜ Dosage: 4 Kg per acre."
]};

productData["Biocens"] = { img: "biocens.png", info: "Biopesticide for foliar application." };
productData["Bioguard TV"] = { img: "bioguard.", info: "Soil applied biopesticide." };
productData["Bioguard TH"] = { img: "images/products/default.jpg", info: "Controls soil-borne pathogens." };

productData["AcetoN"] = { img: "images/products/default.jpg", info: "Nitrogen fixing biofertilizer." };
productData["Azospire"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["AzoNova"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Mycophos"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Bio Fuse"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Phosio"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Solvi K"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Solviphos F"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Rhizo Boost"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };


productData["Azaatin 300"] = { img: "images/products/default.jpg", info: "Neem based botanical insecticide." };
productData["Azaatin 300 BF"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Azaatin 1500"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Azaatin 3000"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Azaatin 1%"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Azaatin 5%"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Azaatin 10%"] = { img: "images/products/default.jpg", info: "Growth promoting rhizobacteria." };
productData["Azaatin 1.5% GR"] = { img: "images/products/default.jpg", info: "Neem granules for soil application." };


productData["Shikari - L"] = {img: "",info: [
  "➜ A bio-product.<br>" +
  "➜ Contains entomopathogenic nematodes (EPN).<br>" +
  "➜ Available in granular form.<br>" +
  "➜ Each gram contains approximately 50,000 EPN.<br>" +
  "➜ Pack size / recommendation: 2 Kg per acre."
]};
productData["Spread"] = {img: "18.png",info: [
  "➜ Composition: Essential oil – 3% w/v.<br>" +
  "➜ Composition: Non-ionic surfactant – 4% w/v.<br>" +
  "➜ Composition: Surface tension reducing agent (silicone based) – 1% w/v.<br>" +
  "➜ Composition: Aqueous media with dye – Quantum sufficient.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Reduces water surface tension.<br>" +
  "➜ Increases the wettability of the leaf surface and helps in fast and uniform spread of spray solution.<br>" +
  "➜ Improves spray coverage.<br>" +
  "➜ Ensures better sticking of active ingredients to the plant surface.<br>" +
  "➜ Facilitates faster and more uniform penetration of active ingredients into the plant body.<br>" +
  "➜ Dosage: 0.5 ml per liter of water.<br>" +
  "➜ Compatible with all fertilizers, insecticides, fungicides, and bactericides."
]};
productData["Shikari Gr"] = {img: "52.png",info: "Granular speciality product for soil application."};
productData["Nutricap"] = {img: "14.png",info: [
  "➜ Microteck NUTRICAP is enriched with natural plant growth substances and organic nutrients.<br>" +
  "➜ Helps significantly in the growth and development of banana bunches, resulting in higher yield.<br>" +
  "➜ Composition per capsule (750 mg): Fulvic acid (derived from organic manure) – 10% w/w.<br>" +
  "➜ Composition per capsule (750 mg): Moisture – 5% w/w.<br>" +
  "➜ Composition per capsule (750 mg): Carrier material – 85% w/w.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Dosage: One capsule per plant.<br>" +
  "➜ Method of use: Apply after complete fruit setting by placing one capsule in the provided polythene cover solution and securing it to the banana bunch as directed.<br>" +
  "➜ Leave undisturbed for 30 days to allow nutrient absorption by the plant."
]};
productData["Nutricap - Banana Spl"] = {img: "13.png",info: [
  "➜ Microteck NUTRICAP is enriched with natural plant growth substances and organic nutrients.<br>" +
  "➜ Helps significantly in the growth and development of banana bunches, resulting in higher yield.<br>" +
  "➜ Composition per capsule (750 mg): Fulvic acid (derived from organic manure) – 10% w/w.<br>" +
  "➜ Composition per capsule (750 mg): Moisture – 5% w/w.<br>" +
  "➜ Composition per capsule (750 mg): Carrier material – 85% w/w.<br>" +
  "➜ Total composition: 100%.<br>" +
  "➜ Dosage: One capsule per plant.<br>" +
  "➜ Method of use: Apply after complete fruit setting by placing one capsule in the provided polythene cover solution and securing it to the banana bunch.<br>" +
  "➜ Leave undisturbed for 30 days to allow nutrient absorption by the plant.<br>" +
  "➜ Remove the cover and dispose of it after treatment."
]};

productData["Allrounder"] = { img: "images/products/default.jpg", info: "Organic fertilizer for overall nutrition." };
productData["PhotoN"] = { img: "images/products/default.jpg", info: "Organic nitrogen enhancer." };

productData["Caster Gold"] = { img: "images/products/default.jpg", info: "Castor based de-oiled cake." };
productData["Neem Gold"] = { img: "images/products/default.jpg", info: "Neem based de-oiled cake." };

productData["Aqua Boost"] = { img: "02.png", info: [
  "➜ Contains natural organic nutrients along with humic substances derived from fish and prawn sources.<br>" +
  "➜ Safe, zero-residue, and eco-friendly.<br>" +
  "➜ Increases brood yield through prophylactic treatment.<br>" +
  "➜ Improves growth and feed utilization.<br>" +
  "➜ Enhances survival rate.<br>" +
  "➜ Helps in detoxification of harmful metals and chemicals in water.<br>" +
  "➜ Improves the physiological condition of aquatic organisms.<br>" +
  "➜ Compatible with all aquatic flora and fauna."
]};
productData["Aqua Feast"] = { img: "03.png", info: [
  "➜ A unique concentrated food for fish.<br>" +
  "➜ Contains organic nutrients such as humic and fulvic substances.<br>" +
  "➜ Reduces fish mortality.<br>" +
  "➜ Helps in achieving higher yields.<br>" +
  "➜ Can be used as a substitute for cow dung.<br>" +
  "➜ Helps avoid water pollution."
] };
productData["Gutnil"] = { img: "images/products/default.jpg", info: "Water quality stabilizer." };
productData["Gelstick"] = { img: "10.png", info: "Binding agent for aqua feed." };

const micronutrientProducts = [
  "Mazik Plus",
  "Total",
  "Totaal",
  "Energy",
  "Energy Gold",
  "Magnus",
  "Bororich",
  "Femax",
  "Zimax",
  "OxyZn",
  "Orthosid",
  "Ferri Plus",
 "Captain",
"Captain SA",
"Captain Plus",
"Captain Plus GR",
"Captain Plus g+++",
"Captain Gold",
"Captain Diamond",
"Golden Zink 12",
"Bororich SA" ,
"Calsyp",
"Calsyp 21", 
"Calcin Mag",
"Multigreen",
"Sulphonite",
"K - 50",
"Humak",
"NutriPaK",
"Phokus", 
"K - Brix",
"Thio K",
"Takat",
"Fire", 
"Flare", 
"O3", 
"Miracle",
"Rainbow",
"Flower Booster",
"Kick",
"Kick Gr",
"Kick Gold",
"Healup",
"Alter",
"Bond",
"Microzyme",
"K - 10", 
"CVID 20", 
"Canopy",
"Bumper",
"Biocens",
"Bioguard TV",
"Bioguard TH",
"Shikari - L",
"Spread",
"Shikari Gr",
"Nutricap",
"Nutricap - Banana Spl",
"Aqua Boost",
"Aqua Feast",
"Gutnil",
"Gelstick",

];
function openProduct(productName) {

    currentView = "product";

    const content = document.getElementById("category-content");
    const key = productName.trim();
    const product = productData[key];

    if (!product) {
        content.innerHTML = `
            <div class="back-btn" onclick="goBack()">← Back</div>
            <h2>Product not found</h2>
        `;
        return;
    }

    // Find current product index
    const index = micronutrientProducts.indexOf(key);

    // Previous product
    const prevProduct =
        index > 0 ? micronutrientProducts[index - 1] : null;

    // Next product
    const nextProduct =
        index < micronutrientProducts.length - 1
            ? micronutrientProducts[index + 1]
            : null;

    content.innerHTML = `
        <div class="back-btn" onclick="goBack()">← Back</div>

        <div class="product-wrapper">

            ${
                prevProduct
                    ? `<span class="prev-arrow"
                            onclick="openProduct('${prevProduct}')">❮</span>`
                    : ""
            }

            <div class="product-card">

                <div class="product-image">
                    <img src="${product.img}" alt="${key}">
                </div>

                <div class="product-info">
                    <h2>${key}</h2>
                    <p>${product.info}</p>
                </div>

            </div>

            ${
                nextProduct
                    ? `<span class="next-arrow"
                            onclick="openProduct('${nextProduct}')">❯</span>`
                    : ""
            }

        </div>
    `;
}
/* BACK TO CATEGORY GRID */
function backToCategories() {
    currentView = "categories";

    document.getElementById("category-grid").style.display = "grid";
    document.getElementById("category-content").innerHTML = "";
}

/* ACCORDION LOGIC */
function initAccordion() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.onclick = () => {
      const item = header.parentElement;
      const content = item.querySelector(".accordion-content");

      item.classList.toggle("active");
      content.style.maxHeight = item.classList.contains("active")
        ? content.scrollHeight + "px"
        : null;
    };
  });
}

function goBack() {

    if (currentView === "product") {
        currentView = "category";
        openCategory(currentCategory);
    }

    else if (currentView === "category") {
        currentView = "categories";
        backToCategories();
    }

}

