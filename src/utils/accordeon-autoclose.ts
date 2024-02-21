export function setUpAccordions() {
  const accordions = document.querySelectorAll('[data-click="accordion"]');

  accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function (this: HTMLElement) {
      if (!this.classList.contains('open')) {
        document
          .querySelectorAll('[data-click="accordion"].open')
          .forEach(function (openAccordion) {
            (openAccordion as HTMLElement).click();
            openAccordion.classList.remove('open');
          });
        this.classList.add('open');
      } else {
        this.classList.remove('open');
      }
    });
  });
}
