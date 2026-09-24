// Zoznam miest sa NEPOUŽÍVA na generovanie podstránok — lokálne vyhľadávanie
// riešime platenou reklamou. Slúži len na vetu o pôsobnosti a na areaServed
// v LocalBusiness schéme.
export const mesta = [
  'Nitra', 'Zlaté Moravce', 'Topoľčany', 'Levice', 'Nové Zámky', 'Hlohovec',
  'Galanta', 'Piešťany', 'Trnava', 'Senec', 'Dunajská Streda', 'Prievidza',
  'Trenčín', 'Žilina', 'Banská Bystrica', 'Zvolen',
];

export const kraje = [
  'Nitriansky', 'Trnavský', 'Trenčiansky', 'Bratislavský', 'Žilinský', 'Banskobystrický',
];

export const vetaOPosobnosti =
  'Pôsobíme v mestách: ' + mesta.join(', ') + ' — a v ich okolí.';
