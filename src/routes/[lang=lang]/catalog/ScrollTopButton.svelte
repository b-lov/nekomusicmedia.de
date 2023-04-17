<script>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<button
  class="fixed bottom-6 left-6 rounded-full bg-gray-800 p-4 shadow-lg"
  on:click={() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
>
  Scroll to Top
</button>
