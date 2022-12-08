var material;
function ferro() {
  material = 0.0003;
  document.getElementById("ferro").classList.add("selected");
  document.getElementById("pvc").classList.remove("selected");
  document.getElementById("aco").classList.remove("selected");

  var mat = document.querySelector("#material");
  mat.innerHTML = `Coeficiente do material: ${material}`;
}
function pvc() {
  material = 0.00001;
  document.getElementById("ferro").classList.remove("selected");
  document.getElementById("pvc").classList.add("selected");
  document.getElementById("aco").classList.remove("selected");

  console.log(material);
  var mat = document.querySelector("#material");
  mat.innerHTML = `Coeficiente do material: ${material}`;
}
function aco() {
  material = 0.00005;
  document.getElementById("ferro").classList.remove("selected");
  document.getElementById("pvc").classList.remove("selected");
  document.getElementById("aco").classList.add("selected");
  console.log(material);
  var mat = document.querySelector("#material");
  mat.innerHTML = `Coeficiente do material: ${material}`;
}
function conta() {
  var pegavaz = document.querySelector("#vazao");
  var vazao = pegavaz.value;
  vazao = vazao / 1000;
  var pegadesn = document.querySelector("#desnivel");
  var desnivel = pegadesn.value;
  var pegadiam = document.querySelector("#diametro");
  var diametro = pegadiam.value;
  diametro = diametro / 1000;
  var pegacompr = document.querySelector("#comprimento");
  var comprimento = pegacompr.value;

  var mi = 0.000001;
  var velocidade = vazao / ((diametro ** 2 * Math.PI) / 4);
  var gravidade = 9.81;
  var rendimento = 0.7;
  var gama = 10000;
  var h1 = 0;
  var h2 = desnivel;
  var rey = (velocidade * diametro) / mi;
  var fp1, fp2;
  var vardoln = material / (3.7 * diametro) + 5.74 / rey ** 0.9;
  fp1 = (64 / rey) ** 8;

  fp2 = 9.5 * (Math.log(vardoln) - (2500 / rey) ** 6) ** -16;

  var f = (parseFloat(fp1) + parseFloat(fp2)) ** 0.125;
  var hf = f * (comprimento / diametro) * (velocidade ** 2 / (2 * gravidade));

  console.log(hf);

  var hm = parseFloat(h2) + parseFloat(hf);
  var potencia = (gama * parseFloat(vazao) * hm) / rendimento;
  potencia = potencia / 735;

  var pot = document.querySelector("#potencia");
  var alt = document.querySelector("#altura");
  pot.innerHTML = `${potencia} CV`;
  alt.innerHTML = `${hm} m`;
}
