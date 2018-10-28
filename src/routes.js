import A from './components/A.vue';
import B from './components/B.vue';
import C from './components/C.vue';

// インポートしたコンポーネントを表示したいパスと結びつける
export const routes = [
  { 
    path: '/a', 
    component: A
  },
  { 
    path: '/b', 
    component: B 
  },
  { 
    path: '/c', 
    component: C 
  },
];