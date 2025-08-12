/**
 * @file options.js
 * @brief Persist and load extension options via chrome.storage.
 */
const key = 'ethercart:options';
const enableCheckbox = document.getElementById('enableWidget');

async function load() {
  const { [key]: value } = await chrome.storage.sync.get(key);
  enableCheckbox.checked = !!value?.enableWidget;
}
async function save() {
  await chrome.storage.sync.set({ [key]: { enableWidget: enableCheckbox.checked } });
}
enableCheckbox?.addEventListener('change', save);
load();

