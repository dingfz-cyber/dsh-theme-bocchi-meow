/** Original client theme for the approved 波奇酱喵喵喵 design. */
window.__ModuleLoader__.load({
  id: 'dsh-theme-bocchi-meow',
  factory: (require) => {
    const React = require('react');
    const ART = /*__BOCCHI_ASSETS__*/ {};
    const CSS = /*__BOCCHI_CSS__*/ "";
    const ID = 'dsh-theme-bocchi-meow';
    const ATTRIBUTE = 'data-bocchi-meow';

    // Native ThemeRuntime layers select the appropriate member of each pair.
    // Built-in light/dark/system preferences and their persistence stay native.
    const pairs = {
      '--dsw-alias-bg-base': ['#fffaf7', '#231e27'],
      '--dsw-alias-bg-layer-1': ['#fffdfb', '#2b2430'],
      '--dsw-alias-bg-layer-2': ['#f9f0f0', '#362c3a'],
      '--dsw-alias-bg-layer-3': ['#f3e8eb', '#423444'],
      '--dsw-alias-bg-overlay': ['#fffdfb', '#302734'],
      '--dsw-alias-bg-module-platform': ['#fffaf7', '#231e27'],
      '--dsw-alias-bg-multi-select': ['#fae0e9', '#543343'],
      '--dsw-alias-bg-skeleton': ['#f0e7e9', '#3b303e'],
      '--dsw-alias-label-primary': ['#30303e', '#f8edf2'],
      '--dsw-alias-label-primary-bluish': ['#30303e', '#f8edf2'],
      '--dsw-alias-label-secondary': ['#605360', '#d7c3d0'],
      '--dsw-alias-label-tertiary': ['#7b6978', '#bca6b7'],
      '--dsw-alias-label-caption': ['#897581', '#b59aaa'],
      '--dsw-alias-label-dimmed': ['#ab97a2', '#8c7487'],
      '--dsw-alias-border-l1': ['#dfb7c6', '#765369'],
      '--dsw-alias-border-l2': ['#e9c8d3', '#604457'],
      '--dsw-alias-border-l3': ['#f0dce3', '#473442'],
      '--dsw-alias-border-l4': ['#dfb8c8', '#755168'],
      '--dsw-alias-border-l2-darkmode-thin': ['#e9c8d3', '#604457'],
      '--dsw-alias-brand-primary': ['#b65373', '#f1a4c2'],
      '--dsw-alias-brand-text': ['#ffffff', '#392031'],
      '--dsw-alias-brand-primary-invert': ['#f1a4c2', '#b65373'],
      '--dsw-alias-button-primary-fill': ['#b65373', '#e99ab9'],
      '--dsw-alias-button-primary-hover': ['#9b3e5b', '#f6b1cb'],
      '--dsw-alias-button-primary-dimmed': ['#dba2b5', '#926278'],
      '--dsw-alias-button-info-fill': ['#b65373', '#ac5277'],
      '--dsw-alias-button-info-hover': ['#9b3e5b', '#c1698d'],
      '--dsw-alias-button-elevated-fill': ['#fffdfb', '#352936'],
      '--dsw-alias-button-floating-fill': ['#fffdfb', '#352936'],
      '--dsw-alias-button-floating-hover': ['#fbe5ec', '#4b3447'],
      '--dsw-alias-button-tool-bar-fill': ['#fff7f8', '#342735'],
      '--dsw-alias-button-tool-bar-hover': ['#f8e0e9', '#493342'],
      '--dsw-alias-button-ghost-active-border': ['#b65373', '#e99ab9'],
      '--dsw-alias-button-ghost-active-fill': ['#f9e4ec', '#503243'],
      '--dsw-alias-button-ghost-active-hover': ['#f3d3e0', '#644055'],
      '--dsw-alias-state-business-primary': ['#b04d70', '#f1a4c2'],
      '--dsw-alias-state-business-tertiary': ['#fae4ec', '#503344'],
      '--dsw-alias-interactive-bg-hover': ['#f9e5ec', '#463043'],
      '--dsw-alias-interactive-bg-active': ['#f2cedd', '#5e3c50'],
      '--dsw-alias-interactive-bg-hover-solid': ['#f9e5ec', '#463043'],
      '--dsw-alias-interactive-bg-hover-accent': ['#f9e1eb', '#513145'],
      '--dsw-alias-markdown-code-block': ['#f6eff2', '#2c2531'],
      '--dsw-alias-markdown-code-block-banner': ['#eee5eb', '#3a2c3b'],
      '--dsw-alias-markdown-inline-code': ['#f5e9ee', '#443044'],
      '--dsw-alias-markdown-citation': ['#f7edf1', '#382c3b'],
      '--dsw-alias-separator-primary': ['#ead0db', '#594050'],
      '--dsw-alias-scrollbar-bg-l1': ['#dab9c6', '#755065'],
      '--dsw-alias-scrollbar-bg-l2': ['#e8cbd5', '#644456'],
      '--dsw-alias-scrollbar-hover-l1': ['#bd7b94', '#ac7893'],
      '--dsw-alias-scrollbar-hover-l2': ['#d09bb0', '#956680'],
      '--dsw-specific-sidebar-fill': ['#fde6ec', '#30222f'],
      '--dsw-specific-sidebar-nav-item-active': ['#f5cbd9', '#563447'],
      '--dsw-specific-sidebar-nav-item-active-accent': ['#f2bfd2', '#663c52'],
      '--dsw-specific-sidebar-nav-item-hover': ['#f8d9e4', '#442b3c'],
      '--dsw-specific-bubble': ['#fbe2eb', '#4c3042'],
      '--dsw-specific-bubble-highlight': ['#f5cbdc', '#663e55'],
      '--dsw-specific-input-major': ['#fffdfc', '#2e2532'],
      '--dsw-specific-login-input': ['#fffdfc', '#2e2532'],
      '--dsw-specific-menu': ['#fffdfc', '#342837'],
      '--dsw-specific-selector': ['#f8eaf0', '#443044'],
      '--dsw-specific-tip': ['#fff4df', '#463b2b']
    };
    const tokens = Object.fromEntries(Object.entries(pairs).map(([key, [light, dark]]) => [key, { light, dark }]));

    function SidebarArtwork({ wide }) {
      if (!wide) return null;
      return React.createElement('div', { className: 'bocchi-meow-sidebar', 'aria-hidden': true },
        React.createElement('img', { src: ART.sidebar, alt: '', draggable: false }),
        React.createElement('span', { className: 'bocchi-meow-caption' }, '波奇酱喵喵喵'));
    }

    function apply(ctx) {
      ctx.effect(() => ctx.theme.overrideTokens(ID, tokens), 'bocchi-meow: native palette layer');
      ctx.effect(() => {
        const body = document.body;
        const previous = body.getAttribute(ATTRIBUTE);
        const style = document.createElement('style');
        style.dataset.plugin = ID;
        style.dataset.bocchiTheme = '';
        // A large PNG data URL exceeds Chromium's custom-property substitution
        // limit. Keep it as a direct declaration instead of a CSS variable.
        style.textContent = `${CSS}\nbody[${ATTRIBUTE}] [data-slot="main"] [data-conversation-content]::after { background-image: url(${JSON.stringify(ART.character)}); }\nbody[${ATTRIBUTE}] { --bocchi-decor: url(${JSON.stringify(ART.decor)}); }`;
        document.head.appendChild(style);
        body.setAttribute(ATTRIBUTE, '1');
        return () => {
          style.remove();
          if (body.getAttribute(ATTRIBUTE) === '1') {
            if (previous === null) body.removeAttribute(ATTRIBUTE);
            else body.setAttribute(ATTRIBUTE, previous);
          }
        };
      }, 'bocchi-meow: scoped artwork and styles');
      ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
        name: 'sidebar.footer.action',
        id: 'bocchi-meow-polaroid',
        order: 15
      }, SidebarArtwork));
    }

    return { inject: ['theme', 'slots'], apply };
  }
});
