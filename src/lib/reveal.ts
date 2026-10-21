/**
 * Runs before hydration (inlined in <head>). Opts the page into scroll-reveal animations only when
 * they can actually run. If the app still hasn't hydrated well after the page has loaded (e.g. the
 * JavaScript failed), the content is shown without animation rather than staying hidden.
 */
export const REVEAL_INIT_SCRIPT = `(function(){try{var d=document.documentElement;if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('reveal');addEventListener('load',function(){setTimeout(function(){if(!window.__revealReady)d.classList.remove('reveal')},8000)})}catch(e){}})();`;
