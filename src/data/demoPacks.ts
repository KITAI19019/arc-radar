export type DemoPack = {
  id: string;
  slug: string;
  name: string;
  description: string;
  songCount: number;
  chartCount: number;
  accent: string;
};

export const demoPacks: DemoPack[] = [
  {
    id: 'pack-aurora-circuit',
    slug: 'aurora-circuit',
    name: 'Aurora Circuit',
    description: 'Clean sightread patterns with a gentle technical climb.',
    songCount: 8,
    chartCount: 29,
    accent: '#67e8f9',
  },
  {
    id: 'pack-glass-horizon',
    slug: 'glass-horizon',
    name: 'Glass Horizon',
    description: 'Airy melodies, wide cross-hand motion, and crisp timing tests.',
    songCount: 7,
    chartCount: 26,
    accent: '#a7f3d0',
  },
  {
    id: 'pack-null-garden',
    slug: 'null-garden',
    name: 'Null Garden',
    description: 'Sparse openings that bloom into dense reading challenges.',
    songCount: 9,
    chartCount: 33,
    accent: '#c4b5fd',
  },
  {
    id: 'pack-velvet-spectrum',
    slug: 'velvet-spectrum',
    name: 'Velvet Spectrum',
    description: 'Smooth rhythm shifts built around stamina and accuracy control.',
    songCount: 6,
    chartCount: 23,
    accent: '#f9a8d4',
  },
  {
    id: 'pack-satellite-rain',
    slug: 'satellite-rain',
    name: 'Satellite Rain',
    description: 'Fast bursts, layered holds, and short windows for recovery.',
    songCount: 10,
    chartCount: 38,
    accent: '#93c5fd',
  },
  {
    id: 'pack-ember-archive',
    slug: 'ember-archive',
    name: 'Ember Archive',
    description: 'Older-style chart flow with modern precision pressure.',
    songCount: 8,
    chartCount: 30,
    accent: '#fdba74',
  },
];
