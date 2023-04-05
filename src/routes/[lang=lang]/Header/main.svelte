<script>
  import { locale } from '$i18n/i18n-svelte';
  import Icon from '$lib/Icon.svelte';
  import Hamburger from './Hamburger.svelte';
  import DeskNav from './DeskNav.svelte';
  // import LocaleSwitcher from './LocaleSwitcher.svelte';
  import MobileNav, { mobileNavOpen } from './MobileNav.svelte';

  let headerState = 'show';
  let scrollOffset = 30;
  let scrollTolerance = 7;
  let scrollY = 0;
  let lastY = 0;
  let scrolledAmount = 0;

  $: headerState = (() => {
    scrolledAmount = lastY === 0 ? 0 : lastY - scrollY;
    lastY = scrollY;
    if (scrollY < scrollOffset) return 'show';
    if (Math.abs(scrolledAmount) <= scrollTolerance) return headerState;
    if (scrolledAmount < 0) {
      mobileNavOpen.set(false);
      return '-translate-y-full';
    }
    return 'translate-y-0';
  })();
</script>

<svelte:window bind:scrollY />

<header
  class="{headerState} w-full bg-white fixed top-0 transition-transform duration-150
	  ease-linear z-10 shadow-lg"
>
  <div class="h-20 flex justify-between items-center pl-3">
    <a href="/{$locale}"><Icon class="fill-gray-800" size={3.2} /></a>
    <Hamburger />
    <DeskNav />
    <!-- <LocaleSwitcher /> -->
  </div>
  <MobileNav />
</header>
