export const clientLogos = [
  { id: '01', name: 'Aloro', src: '/images/client-logos/01.webp' },
  { id: '02', name: 'Unigold', src: '/images/client-logos/02.webp' },
  { id: '03', name: 'Anastasopoulou Myrto', src: '/images/client-logos/03.webp' },
  { id: '04', name: 'Sigma Oro', src: '/images/client-logos/04.webp' },
  { id: '05', name: 'Jekon-cut', src: '/images/client-logos/05.webp' },
  { id: '06', name: 'Αρχείο πελάτη 06', src: '/images/client-logos/06.webp' },
  { id: '07', name: 'Georgiadis Nanos', src: '/images/client-logos/07.webp' },
  { id: '08', name: 'Stefos', src: '/images/client-logos/08.webp' },
  { id: '09', name: 'Psomas', src: '/images/client-logos/09.webp' },
  { id: '10', name: 'Liaphs Dionysopoulos', src: '/images/client-logos/10.webp' },
  { id: '11', name: 'Makriadis', src: '/images/client-logos/11.webp' },
  { id: '12', name: 'Boras', src: '/images/client-logos/12.webp' },
  { id: '14', name: 'Psatha', src: '/images/client-logos/14.webp' },
  { id: '17', name: 'Paraskevopoylos', src: '/images/client-logos/17.webp' },
  { id: '19', name: 'Kontopidis', src: '/images/client-logos/19.webp' },
  { id: '20', name: 'Michopoulos', src: '/images/client-logos/20.webp' },
  { id: '21', name: 'Boulgaris', src: '/images/client-logos/21.webp' },
  { id: '23', name: 'Garofalakis', src: '/images/client-logos/23.webp' },
  { id: '24', name: 'Papakonstantinou', src: '/images/client-logos/24.webp' },
  { id: '25', name: 'Doyklias', src: '/images/client-logos/25.webp' },
  { id: '26', name: 'Kappos', src: '/images/client-logos/26.webp' },
  { id: '27', name: 'Grivaki Mika', src: '/images/client-logos/27.webp' },
  { id: '28', name: 'Diamantopoulos Gold4more', src: '/images/client-logos/28.webp' },
  { id: '30', name: 'Χαρχαρού', src: '/images/client-logos/30.webp' },
  { id: '32', name: 'Αρχείο πελάτη 32', src: '/images/client-logos/32.webp' },
] as const;

const featuredClientLogoIds = ['01', '02', '05', '11', '04'] as const;

export const featuredClientLogos = featuredClientLogoIds.map(
  (id) => clientLogos.find((logo) => logo.id === id)!,
);

export const additionalClientLogos = clientLogos.filter(
  (logo) => !featuredClientLogoIds.includes(logo.id as typeof featuredClientLogoIds[number]),
);
