import A from './components/A.vue';
import B from './components/B.vue';
import C from './components/C.vue';

// インポートしたコンポーネントを表示したいパスと結びつける
export const routes = [
  { path: '/a', components: A},
  { path: '/b', components: B},
  { path: '/c', components: C},
];