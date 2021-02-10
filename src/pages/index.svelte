<script>
    import { _ } from 'svelte-i18n';

    // import { addMessages, init } from "svelte-i18n";

    // import en from "./lang/en.json";
    // import az from "./lang/az.json";

    // addMessages("en", en);
    // addMessages("az", az);

    // init({
    //     initialLocale: "az",
    // });
</script>


<h1 class="mx-auto mb-10 font-semibold text-4xl text-shadow text-gray-900">{$_('home.hero-h')}</h1>
<h5 class="text-gray-700 mb-12">{$_('home.hero-p')}</h5>