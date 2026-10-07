export default function initImageViewer(deck) {
  const triggers = document.querySelectorAll('button[data-image-viewer]');
  if (!triggers.length) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'image-viewer';
  dialog.setAttribute('aria-labelledby', 'image-viewer-title');

  const toolbar = document.createElement('div');
  toolbar.className = 'image-viewer-toolbar';
  const title = document.createElement('h2');
  title.id = 'image-viewer-title';
  title.textContent = 'Image preview';
  toolbar.append(title);

  function addButton(label, action, accessibleLabel = label) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.setAttribute('aria-label', accessibleLabel);
    button.addEventListener('click', action);
    toolbar.append(button);
    return button;
  }

  const viewport = document.createElement('div');
  viewport.className = 'image-viewer-viewport';
  viewport.tabIndex = 0;
  viewport.setAttribute('role', 'region');
  viewport.setAttribute('aria-label', 'Image: scroll to explore at the selected zoom');
  const image = document.createElement('img');
  image.className = 'image-viewer-image';
  image.draggable = false;
  viewport.append(image);

  let scale = 1;
  let naturalWidth = 0;
  let naturalHeight = 0;
  let fitMode = false;
  let opener;
  let previousNavigation;

  function fitScale() {
    if (!naturalWidth || !naturalHeight) return 1;
    return Math.min(1, Math.max(1, viewport.clientWidth - 48) / naturalWidth,
      Math.max(1, viewport.clientHeight - 48) / naturalHeight);
  }

  function setScale(value, keepCenter = true) {
    if (!naturalWidth || !naturalHeight) return;
    const centerX = (viewport.scrollLeft + viewport.clientWidth / 2 - 24) / scale;
    const centerY = (viewport.scrollTop + viewport.clientHeight / 2 - 24) / scale;
    scale = Math.max(fitScale(), Math.min(3, value));
    image.style.width = `${naturalWidth * scale}px`;
    image.style.height = `${naturalHeight * scale}px`;
    zoomStatus.textContent = `${Math.round(scale * 100)}%`;
    zoomOut.disabled = scale <= fitScale() + 0.001;
    zoomIn.disabled = scale >= 3;
    viewport.scrollLeft = keepCenter ? centerX * scale - viewport.clientWidth / 2 + 24 : 0;
    viewport.scrollTop = keepCenter ? centerY * scale - viewport.clientHeight / 2 + 24 : 0;
  }

  addButton('Fit', () => { fitMode = true; setScale(fitScale(), false); });
  addButton('100%', () => { fitMode = false; setScale(1); }, 'Show image at natural size');
  const zoomOut = addButton('−', () => { fitMode = false; setScale(scale / 1.25); }, 'Zoom out');
  const zoomIn = addButton('+', () => { fitMode = false; setScale(scale * 1.25); }, 'Zoom in');
  const zoomStatus = document.createElement('output');
  zoomStatus.className = 'image-viewer-zoom';
  zoomStatus.setAttribute('aria-live', 'polite');
  zoomStatus.setAttribute('aria-label', 'Zoom level');
  toolbar.append(zoomStatus);
  addButton('Close', () => dialog.close(), 'Close image preview');
  dialog.append(toolbar, viewport);
  document.body.append(dialog);

  image.addEventListener('load', () => {
    naturalWidth = image.naturalWidth;
    naturalHeight = image.naturalHeight;
    if (dialog.open) setScale(fitMode ? fitScale() : scale, false);
  });

  function open(trigger) {
    const source = trigger.querySelector('img');
    if (!source || dialog.open) return;
    const sourceUrl = new URL(source.currentSrc || source.src, window.location.href);
    if (sourceUrl.origin !== window.location.origin || !['http:', 'https:', 'file:'].includes(sourceUrl.protocol)) return;

    opener = trigger;
    naturalWidth = source.naturalWidth;
    naturalHeight = source.naturalHeight;
    scale = 1;
    fitMode = false;
    image.alt = source.alt;
    image.src = sourceUrl.href;
    const config = deck.getConfig();
    previousNavigation = { keyboard: config.keyboard, touch: config.touch, mouseWheel: config.mouseWheel };
    deck.configure({ keyboard: false, touch: false, mouseWheel: false });
    dialog.showModal();
    setScale(1, false);
    viewport.focus({ preventScroll: true });
  }

  for (const trigger of triggers) {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.addEventListener('click', () => open(trigger));
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') event.stopPropagation();
    });
  }

  // Preserve native Escape, Tab, and scrolling behavior without Reveal shortcuts.
  dialog.addEventListener('keydown', (event) => event.stopPropagation());
  dialog.addEventListener('close', () => {
    if (previousNavigation) deck.configure(previousNavigation);
    previousNavigation = undefined;
    scale = 1;
    fitMode = false;
    viewport.scrollTo(0, 0);
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = undefined;
  });
  deck.on('slidechanged', () => { if (dialog.open) dialog.close(); });
  window.addEventListener('resize', () => {
    if (dialog.open) setScale(fitMode ? fitScale() : scale);
  });
}
