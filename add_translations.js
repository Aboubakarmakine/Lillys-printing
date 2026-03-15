const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/locales/en.json'));
const es = JSON.parse(fs.readFileSync('src/locales/es.json'));

const keysEn = {
  "grand_opening_title_part1": "GRAND",
  "grand_opening_title_part2": "OPENING",
  "grand_opening_badge1": "BIG",
  "grand_opening_badge2": "SALE!",
  "grand_opening_cta": "SHOP NOW!",
  "grand_opening_desc": "Celebrate our grand opening with exclusive discounts on your next printing project."
};

const keysEs = {
  "grand_opening_title_part1": "GRAN",
  "grand_opening_title_part2": "APERTURA",
  "grand_opening_badge1": "GRAN",
  "grand_opening_badge2": "OFERTA!",
  "grand_opening_cta": "¡COMPRAR AHORA!",
  "grand_opening_desc": "Celebra nuestra gran apertura con descuentos exclusivos en tu próximo proyecto de impresión."
};

Object.assign(en, keysEn);
Object.assign(es, keysEs);

fs.writeFileSync('src/locales/en.json', JSON.stringify(en, null, 2) + "\n");
fs.writeFileSync('src/locales/es.json', JSON.stringify(es, null, 2) + "\n");
