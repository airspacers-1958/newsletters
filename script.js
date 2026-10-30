(function () {
  const root = document.documentElement;
  const items = Array.from(document.querySelectorAll(".reveal"));

  if (!items.length || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    }
  );

  items.forEach((item) => observer.observe(item));
})();
