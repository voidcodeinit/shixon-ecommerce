/**
 * Initializes Bootstrap tooltips used throughout the Shixon storefront.
 */
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggers = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  tooltipTriggers.forEach((element) => {
    new bootstrap.Tooltip(element);
  });
});
