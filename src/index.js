import App from "./App.svelte";
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
register('en', () => import('./pages/lang/en.json'));
register('az', () => import('./pages/lang/az.json'));

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}

// From official tutorial of svelte-i18n. I put this code here instead of creating i18n.js. Because I didn't know how to 
// put that file into entry-point. But this file is put already, so I decided to do it like that.

