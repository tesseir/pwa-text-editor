
//! please note that the instructor has provided some of the code for this assignment to the class.

const butInstall = document.getElementById('buttonInstall');

//  Keep this code as-is
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// This listener fires when the user clicks the "install" button.
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
