import type { ImageMetadata } from 'astro';
import heroStrecha from '../../public/img/hero-strecha.jpg';
import fasadaPredpo from '../../public/img/fasada-predpo.jpg';
import fasadaGaraz from '../../public/img/fasada-predpo-garaz.jpg';
import fasadaStena from '../../public/img/fasada-predpo-stena.jpg';
import fasadaOkna from '../../public/img/fasada-predpo-okna.jpg';
import fasadaBytovka from '../../public/img/fasada-predpo-bytovka.jpg';
import hrobPredpo from '../../public/img/hrob-predpo.jpg';
import strechaPredpo from '../../public/img/strecha-predpo.jpg';
import strechaPo from '../../public/img/strecha-po.jpg';
import dlazbaPredpo from '../../public/img/dlazba-predpo.jpg';
import dlazbaPredpo2 from '../../public/img/dlazba-predpo-2.jpg';
import dlazbaDetail from '../../public/img/dlazba-detail.jpg';
import dlazbaSchody from '../../public/img/dlazba-schody.jpg';
import graffitiPredpo from '../../public/img/graffiti-predpo.jpg';
import pracaDlazba from '../../public/img/praca-dlazba.jpg';

const obrazky: Record<string, ImageMetadata> = {
  '/img/hero-strecha.jpg': heroStrecha,
  '/img/fasada-predpo.jpg': fasadaPredpo,
  '/img/fasada-predpo-garaz.jpg': fasadaGaraz,
  '/img/fasada-predpo-stena.jpg': fasadaStena,
  '/img/fasada-predpo-okna.jpg': fasadaOkna,
  '/img/fasada-predpo-bytovka.jpg': fasadaBytovka,
  '/img/hrob-predpo.jpg': hrobPredpo,
  '/img/strecha-predpo.jpg': strechaPredpo,
  '/img/strecha-po.jpg': strechaPo,
  '/img/dlazba-predpo.jpg': dlazbaPredpo,
  '/img/dlazba-predpo-2.jpg': dlazbaPredpo2,
  '/img/dlazba-detail.jpg': dlazbaDetail,
  '/img/dlazba-schody.jpg': dlazbaSchody,
  '/img/graffiti-predpo.jpg': graffitiPredpo,
  '/img/praca-dlazba.jpg': pracaDlazba,
};

export const obrazok = (src: string) => obrazky[src];
