import './modulepreload-polyfill-DfS4ul37.js';
import {
  d as initializePage,
  i as initializeLinks,
  l as initializeSound,
  n as initializeCloudFooter,
  o as initializeTransitions,
  r as initializeNavigation,
  t as initializePageScroll,
  u as initializeEffects,
} from './footerPageScroll-D4eaqTNS.js';

initializeTransitions();
initializeSound();
initializePage();
initializeEffects();
initializeLinks();
initializeNavigation();
initializeCloudFooter(document.querySelector('[data-cloud-footer]'));
initializePageScroll(document.querySelector('[class$="-page-content"]'));
