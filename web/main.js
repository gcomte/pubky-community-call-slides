import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes';
import initImageViewer from './image-viewer.js';
import 'reveal.js/reveal.css';
import './styles.css';
import './backgrounds.css';
import './image-viewer.css';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const deck = new Reveal({
  width: 1600,
  height: 900,
  margin: 0,
  minScale: 0.15,
  maxScale: 2,
  center: false,
  hash: true,
  controls: false,
  controlsTutorial: false,
  progress: false,
  slideNumber: false,
  keyboard: true,
  overview: true,
  touch: true,
  transition: reducedMotion.matches ? 'none' : 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: reducedMotion.matches ? 'none' : 'fade',
  autoAnimate: !reducedMotion.matches,
  pdfSeparateFragments: false,
  pdfMaxPagesPerSlide: 1,
  plugins: [Notes],
});

reducedMotion.addEventListener('change', ({ matches }) => {
  deck.configure({
    transition: matches ? 'none' : 'fade',
    backgroundTransition: matches ? 'none' : 'fade',
    autoAnimate: !matches,
  });
});

// Also useful for inspecting a specific slide during local visual review.
window.deck = deck;
deck.initialize();
initImageViewer(deck);
