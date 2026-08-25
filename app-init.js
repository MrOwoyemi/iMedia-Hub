/* ============================================================
   BOOTSTRAP
   ------------------------------------------------------------
   Loaded last, after the data files and script.js. Wires up the
   router, the global keyboard shortcuts and the first render.
   ============================================================ */

(function initApp() {
  // Day streak has to be recorded before the first paint so the dashboard
  // and topbar show the same, already-updated number.
  recordVisit();

  // --- Router ---
  // Back / Forward move between the pages we pushed.
  window.addEventListener('popstate', event => {
    const topic = (event.state && event.state.topic) || topicFromHash();
    loadContent(topic, { fromHistory: true });
  });

  // Someone editing the address bar by hand changes the hash without a popstate.
  window.addEventListener('hashchange', () => {
    const topic = topicFromHash();
    if (topic !== currentTopic) loadContent(topic, { fromHistory: true });
  });

  // --- Search dropdown dismissal ---
  document.addEventListener('click', event => {
    const container = document.querySelector('.search-container');
    if (container && !container.contains(event.target)) closeSearchResults();
  });

  const search = document.getElementById('global-search');
  if (search) {
    // A short delay lets a click on a result register before the list closes.
    search.addEventListener('blur', () => setTimeout(closeSearchResults, 150));
  }

  // --- Keyboard ---
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;

    const openModal = Array.from(document.querySelectorAll('.modal'))
      .find(m => m.style.display === 'block');
    if (openModal) {
      closeDialog(openModal);
      return;
    }

    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('sidebar-open')) {
      closeNav();
      return;
    }

    closeSearchResults();
  });

  // --- First render ---
  // Reads the hash, so a shared or bookmarked link opens the right page.
  loadContent(topicFromHash(), { silent: true });

  // With the dashboard on screen, pull the unit pages in behind it so the
  // first navigation does not have to wait for a fetch.
  prefetchUnitContent();
})();
