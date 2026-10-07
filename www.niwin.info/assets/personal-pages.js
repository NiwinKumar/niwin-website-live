import './modulepreload-polyfill-DfS4ul37.js';
import {
  d as initializeClickSparks,
  i as initializePageTransitions,
  l as initializeSoundEffects,
  n as initializeCloudFooter,
  o as initializeSoundProvider,
  r as initializeSoundToggle,
  t as initializePageScroll,
  u as initializeSignature,
} from './footerPageScroll-D4eaqTNS.js';

initializeSoundProvider();
initializeSoundEffects();
initializeClickSparks();
initializeSignature();
initializePageTransitions();
initializeSoundToggle();
initializeCloudFooter(document.querySelector('[data-cloud-footer]'));
initializePageScroll(document.querySelector('[class$="-page-content"]'));

const writingDialog = document.querySelector('[data-writing-dialog]');
const openWriting = document.querySelector('[data-writing-open]');
const closeWriting = document.querySelector('[data-writing-close]');
let closeWritingTimer;

if (writingDialog && openWriting && closeWriting) {
  const closeArticle = () => {
    if (!writingDialog.open) return;
    writingDialog.classList.remove('is-visible');
    clearTimeout(closeWritingTimer);
    closeWritingTimer = setTimeout(() => {
      writingDialog.close();
      document.body.classList.remove('is-writing-drawer-open');
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 280);
  };

  openWriting.addEventListener('click', () => {
    clearTimeout(closeWritingTimer);
    writingDialog.showModal();
    writingDialog.querySelector('.writing-detail__drawer').scrollTop = 0;
    document.body.classList.add('is-writing-drawer-open');
    requestAnimationFrame(() => writingDialog.classList.add('is-visible'));
    closeWriting.focus();
  });
  closeWriting.addEventListener('click', closeArticle);
  writingDialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeArticle();
  });
  writingDialog.addEventListener('click', event => {
    if (event.target === writingDialog) closeArticle();
  });
}
