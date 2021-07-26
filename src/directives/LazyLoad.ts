export default {
  inserted: (el: HTMLElement) => {
    function loadImage() {
      const element = Array.from(el.children).find(
        (el) => el.nodeName === "IMG"
      );

      if (element) {
        const imageElement = element as HTMLImageElement;
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url as string;
      }
    }

    function handleIntersect(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options: IntersectionObserverInit = {
        root: null,
        threshold: 0,
      };

      // Whether you're using the viewport or some other element as the root,the API works the same way,
      // executing a callback function you provide whenever the visibility of the target element changes
      // so that it crosses desired amounts of intersection with the root

      const observer = new IntersectionObserver(handleIntersect, options);

      observer.observe(el);
    }

    if (!window["IntersectionObserver"]) {
      loadImage();
    } else {
      createObserver();
    }
  },
};
