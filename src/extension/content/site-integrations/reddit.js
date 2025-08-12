/**
 * @file reddit.js
 * @brief Reddit-specific hooks (detect subreddit context).
 */
(function initRedditIntegration() {
  const isReddit = /reddit\.com/.test(location.host);
  if (!isReddit) return;
  // Observe post containers and enrich with EtherCart actions (stub).
})();

