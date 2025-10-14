// todo: remove mock functionality
import type { Product } from '@shared/schema';
import harvesterImg from '@assets/stock_images/modern_agricultural__6811b211.jpg';
import tractorImg from '@assets/stock_images/agricultural_tractor_ff5b52d1.jpg';
import planterImg from '@assets/stock_images/rice_planting_machin_e868dce6.jpg';
import cornHarvesterImg from '@assets/stock_images/corn_harvester_agric_ef4a093f.jpg';
import irrigationImg from '@assets/stock_images/modern_irrigation_sy_2f2f9fbe.jpg';
import sprayerImg from '@assets/stock_images/agricultural_spray_m_1d9a887b.jpg';

export const products: Product[] = [
  {
    id: 'P001',
    name: 'Mesin Pemanen Padi X100',
    type: 'Pemanen',
    description: 'Mesin pemanen padi modern dengan efisiensi tinggi untuk lahan sawah',
    specs: {
      power: '120 HP',
      capacity: '1.2 Ha/Jam',
    },
    price: 145000000,
    image: harvesterImg,
  },
  {
    id: 'P002',
    name: 'Traktor Pertanian T-450',
    type: 'Traktor',
    description: 'Traktor serbaguna untuk membajak, mengangkut, dan berbagai kebutuhan pertanian',
    specs: {
      power: '85 HP',
      capacity: '2 Ton',
    },
    price: 95000000,
    image: tractorImg,
  },
  {
    id: 'P003',
    name: 'Mesin Tanam Padi R-200',
    type: 'Penanam',
    description: 'Mesin tanam padi otomatis dengan presisi tinggi dan hemat waktu',
    specs: {
      power: '25 HP',
      capacity: '0.8 Ha/Jam',
    },
    price: 65000000,
    image: planterImg,
  },
  {
    id: 'P004',
    name: 'Pemanen Jagung C-800',
    type: 'Pemanen',
    description: 'Mesin pemanen jagung multi-fungsi dengan sistem pembersihan otomatis',
    specs: {
      power: '150 HP',
      capacity: '1.5 Ha/Jam',
    },
    price: 185000000,
    image: cornHarvesterImg,
  },
  {
    id: 'P005',
    name: 'Sistem Irigasi Modern I-500',
    type: 'Irigasi',
    description: 'Sistem irigasi otomatis dengan kontrol digital dan hemat air',
    specs: {
      power: '15 HP',
      capacity: '5 Ha',
    },
    price: 45000000,
    image: irrigationImg,
  },
  {
    id: 'P006',
    name: 'Mesin Semprot S-300',
    type: 'Penyemprot',
    description: 'Mesin semprot pestisida dengan jangkauan luas dan hasil merata',
    specs: {
      power: '35 HP',
      capacity: '800 L',
    },
    price: 55000000,
    image: sprayerImg,
  },
];
