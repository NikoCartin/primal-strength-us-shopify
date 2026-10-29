(() => {
  const root = document.querySelector('[data-primal-a11y]');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const launcher = root.querySelector('[data-primal-a11y-open]');
  const panel = root.querySelector('[data-primal-a11y-panel]');
  const close = root.querySelector('[data-primal-a11y-close]');
  const reset = root.querySelector('[data-primal-a11y-reset]');
  const storageKey = 'primal-a11y-preferences-v1';
  const actions = [...root.querySelectorAll('[data-primal-a11y-action]')];
  let lastFocus = launcher;
  let contrastOn = false;
  let motionOn = false;
  let contrastScheduled = false;

  const preferenceAttributeNames = {
    bg: 'data-primal-a11y-bg',
    fg: 'data-primal-a11y-fg',
    glow: 'data-primal-a11y-glow',
    icon: 'data-primal-a11y-icon',
  };

  const parseAlpha = (value) => {
    const match = String(value).match(/rgba?\(([^)]+)\)/);
    if (!match) return 0;
    const values = match[1].split(/[\s,\/]+/).filter(Boolean).map(Number);
    return values.length > 3 ? values[3] : 1;
  };

  const setOwnedAttribute = (element, key, value) => {
    const attribute = preferenceAttributeNames[key];
    if (!attribute || element.hasAttribute(attribute)) return;
    element.setAttribute(attribute, value);
    const owned = new Set((element.getAttribute('data-primal-a11y-owned') || '').split(' ').filter(Boolean));
    owned.add(key);
    element.setAttribute('data-primal-a11y-owned', [...owned].join(' '));
  };

  const clearOwnedAttributes = () => {
    document.querySelectorAll('[data-primal-a11y-owned]').forEach((element) => {
      (element.getAttribute('data-primal-a11y-owned') || '').split(' ').forEach((key) => {
        const attribute = preferenceAttributeNames[key];
        if (attribute) element.removeAttribute(attribute);
      });
      element.removeAttribute('data-primal-a11y-owned');
    });
  };

  const tagIcon = (svg) => {
    if (svg.hasAttribute(preferenceAttributeNames.icon)) return;
    const colors = new Set();
    svg.querySelectorAll('path, circle, rect, polygon, polyline, ellipse, line, use, text').forEach((shape) => {
      const styles = window.getComputedStyle(shape);
      [styles.fill, styles.stroke].forEach((paint) => {
        if (paint && paint !== 'none' && !/rgba\([^)]*,\s*0\)/.test(paint)) colors.add(paint);
      });
    });
    setOwnedAttribute(svg, 'icon', colors.size <= 1 ? 'mono' : 'color');
  };

  const tagBackground = (element) => {
    if (element.tagName.toLowerCase() === 'svg') {
      tagIcon(element);
      return;
    }
    if (element.hasAttribute(preferenceAttributeNames.bg) || element.closest('[data-primal-a11y]')) return;
    if (/^(SCRIPT|STYLE|NOSCRIPT|IFRAME|IMG|VIDEO|PICTURE|CANVAS|PATH)$/i.test(element.tagName)) return;

    const styles = window.getComputedStyle(element);
    const backgroundImage = styles.backgroundImage || 'none';
    const glows = ['::before', '::after']
      .filter((pseudo) => {
        const pseudoStyles = window.getComputedStyle(element, pseudo);
        return pseudoStyles.content !== 'none' && /gradient\(/.test(pseudoStyles.backgroundImage) && !/url\(/.test(pseudoStyles.backgroundImage);
      })
      .map((pseudo) => pseudo.slice(2));

    if (glows.length) setOwnedAttribute(element, 'glow', glows.join(' '));
    if (parseAlpha(styles.color) === 0) setOwnedAttribute(element, 'fg', 'transparent');

    const opaqueBackground = parseAlpha(styles.backgroundColor) >= 0.85;
    if (backgroundImage !== 'none' || opaqueBackground || parseAlpha(styles.backgroundColor) > 0.05) {
      setOwnedAttribute(element, 'bg', 'surface');
    }
  };

  const contrastPass = () => {
    contrastScheduled = false;
    if (!contrastOn) return;
    document.querySelectorAll('body *:not([data-primal-a11y-bg]):not(svg *)').forEach(tagBackground);
  };

  const scheduleContrastPass = () => {
    if (!contrastOn || contrastScheduled) return;
    contrastScheduled = true;
    window.requestAnimationFrame(contrastPass);
  };

  const setContrast = (enabled) => {
    contrastOn = enabled;
    if (enabled) contrastPass();
    else clearOwnedAttributes();
  };

  const pauseEligibleVideos = () => {
    document.querySelectorAll('video:not([data-primal-a11y-seen])').forEach((video) => {
      video.setAttribute('data-primal-a11y-seen', '');
      if (video.autoplay) {
        video.autoplay = false;
        video.setAttribute('data-primal-a11y-autoplay', '');
      }
      if (!video.paused || video.hasAttribute('data-primal-a11y-autoplay')) {
        video.pause();
        video.setAttribute('data-primal-a11y-paused', '');
      }
    });
  };

  const pauseEligibleCarousels = () => {
    document.querySelectorAll('.swiper, .swiper-container').forEach((element) => {
      const autoplay = element.swiper && element.swiper.autoplay;
      if (!autoplay || element.hasAttribute('data-primal-a11y-swiper')) return;
      try {
        if (autoplay.running) {
          autoplay.stop();
          element.setAttribute('data-primal-a11y-swiper', '');
        }
      } catch (error) {
        return;
      }
    });

    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.slick) {
      try {
        window.jQuery('.slick-initialized').each(function () {
          const slider = window.jQuery(this);
          const instance = slider.slick('getSlick');
          if (!instance || this.hasAttribute('data-primal-a11y-slick') || !instance.options.autoplay) return;
          slider.slick('slickPause');
          this.setAttribute('data-primal-a11y-slick', '');
        });
      } catch (error) {
        return;
      }
    }
  };

  const setMotion = (enabled) => {
    motionOn = enabled;
    if (enabled) {
      pauseEligibleVideos();
      pauseEligibleCarousels();
    }
  };

  const setHappyFoxFrameTitle = () => {
    const container = document.getElementById('__HF_Bots_Widget_Container__');
    const frame = container instanceof HTMLIFrameElement ? container : container?.querySelector('iframe');
    if (frame && !frame.getAttribute('title')) {
      frame.setAttribute('title', 'Chat with Primal Strength support');
    }
  };

  new MutationObserver(() => {
    setHappyFoxFrameTitle();
    if (contrastOn) scheduleContrastPass();
    if (motionOn) {
      pauseEligibleVideos();
      pauseEligibleCarousels();
    }
  }).observe(document.body, { childList: true, subtree: true });
  setHappyFoxFrameTitle();

  if (!launcher || !panel || !close || !reset) return;

  const readPreferences = () => {
    try {
      return JSON.parse(window.localStorage.getItem(storageKey) || '{}');
    } catch (error) {
      return {};
    }
  };

  const savePreferences = (preferences) => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(preferences));
    } catch (error) {
      return;
    }
  };

  const applyPreferences = (preferences) => {
    const html = document.documentElement;
    const contrastEnabled = Boolean(preferences.contrast);
    setContrast(contrastEnabled);
    html.classList.toggle('primal-a11y-large', Boolean(preferences.largeText));
    html.classList.toggle('primal-a11y-contrast', contrastEnabled);
    html.classList.toggle('primal-a11y-links', Boolean(preferences.links));
    html.classList.toggle('primal-a11y-motion', Boolean(preferences.motion));
    if (Boolean(preferences.motion) !== motionOn) setMotion(Boolean(preferences.motion));

    actions.forEach((action) => {
      if (action.dataset.primalA11yAction === 'decrease-text') return;
      const active = action.dataset.primalA11yAction === 'increase-text'
        ? Boolean(preferences.largeText)
        : action.dataset.primalA11yAction === 'contrast'
          ? contrastEnabled
          : action.dataset.primalA11yAction === 'links'
            ? Boolean(preferences.links)
            : action.dataset.primalA11yAction === 'motion'
              ? Boolean(preferences.motion)
              : false;
      action.setAttribute('aria-pressed', String(active));
    });
  };

  const openPanel = () => {
    lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : launcher;
    panel.hidden = false;
    launcher.setAttribute('aria-expanded', 'true');
    const firstControl = panel.querySelector('button');
    if (firstControl) firstControl.focus();
  };

  const closePanel = () => {
    panel.hidden = true;
    launcher.setAttribute('aria-expanded', 'false');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };

  launcher.addEventListener('click', () => {
    if (panel.hidden) openPanel();
    else closePanel();
  });
  close.addEventListener('click', closePanel);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) closePanel();
  });
  document.addEventListener('pointerdown', (event) => {
    if (!panel.hidden && !root.contains(event.target)) closePanel();
  });

  actions.forEach((action) => {
    action.addEventListener('click', () => {
      const preferences = readPreferences();
      const key = action.dataset.primalA11yAction;
      if (key === 'increase-text') preferences.largeText = !preferences.largeText;
      if (key === 'decrease-text') preferences.largeText = false;
      if (key === 'contrast') preferences.contrast = !preferences.contrast;
      if (key === 'links') preferences.links = !preferences.links;
      if (key === 'motion') preferences.motion = !preferences.motion;
      savePreferences(preferences);
      applyPreferences(preferences);
    });
  });

  reset.addEventListener('click', () => {
    const preferences = {};
    savePreferences(preferences);
    applyPreferences(preferences);
  });

  applyPreferences(readPreferences());
})();
