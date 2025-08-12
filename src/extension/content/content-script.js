/**
 * @file content-script.js
 * @brief Injects the floating widget and initializes site-specific adapters.
 */

import './widget-injector.js';
import './site-integrations/generic.js';
import './site-integrations/twitter.js';
import './site-integrations/reddit.js';

/**
 * Request ETH price once injected to seed UI with live conversion.
 */
chrome.runtime.sendMessage({ type: 'GET_ETH_USD' }, (resp) => {
  if (resp?.ok) {
    window.dispatchEvent(new CustomEvent('ethercart:price', { detail: resp.price }));
  }
});

