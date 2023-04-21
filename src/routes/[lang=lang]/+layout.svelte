<script>
  import Footer from './Footer.svelte';
  import Header from './Header/main.svelte';
  import ScrollToTop from './ScrollToTop.svelte';

  // use this if you want to offset header
  /** @param { HTMLElement } node */
  const setPaddingTop = (node) => {
    const headerHeight = document.getElementsByTagName('header')[0].getBoundingClientRect().height;
    node.style.paddingTop = `${headerHeight}px`;
  };
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-grow pt-20">
    <slot />
  </main>
  <Footer />
  <ScrollToTop />
</div>
