export type Recenzia = { meno: string; text: string; hviezdy: number; datum: string };

// Prázdne pole = sekcia recenzií sa nezobrazí.
// Google profil má 119 hodnotení s priemerom 5,0 — treba ich sem premigrovať
// alebo napojiť cez Google Places API.
export const recenzie: Recenzia[] = [];
