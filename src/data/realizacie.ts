export type Realizacia = {
  slug: string;
  nazov: string;
  mesto: string;
  plochaM2: number | null;
  dni: number | null;
  rok: number | null;
  sluzba: string;
  fotoPred: string | null;
  fotoPo: string | null;
  popis: string;
};

// Prázdne pole = sekcia realizácií sa nezobrazí. Dopĺňať až s reálnymi fotkami.
export const realizacie: Realizacia[] = [];
