import '../styles.css';

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const legalDialog = document.querySelector('.legal-dialog');
const legalTitle = document.querySelector('#legal-title');
const legalCopy = document.querySelector('#legal-copy');

const legalContent = {
  disclaimer: {
    title: 'Disclaimer',
    paragraphs: [
      'This website provides general information about TRUMPY FOOD AND BEVERAGES PRIVATE LIMITED and its associated business verticals. It is not an offer, solicitation, or recommendation to invest, and it should not be relied on as the basis for a financial or commercial decision.',
      'Company descriptions are provided for general information and may change. Product availability, services, and plans are subject to confirmation directly with the relevant business.',
      'Links to third-party websites are provided for convenience. Their content and practices are managed by their respective owners.'
    ]
  },
  terms: {
    title: 'Terms',
    paragraphs: [
      'You may use this website for lawful, informational purposes. Please do not misuse the site, interfere with its operation, or reproduce its content in a misleading way.',
      'Website content is provided “as is” for general information and may be updated without notice. A conversation initiated through this site does not create a partnership, agency, or investment agreement; any such arrangement requires separate written terms.',
      'External company and social links lead to websites operated by others and are subject to their own terms.'
    ]
  },
  privacy: {
    title: 'Privacy',
    paragraphs: [
      'This one-page site does not ask you to submit information through a form. If you email, call, or message us, we receive the contact details and message content you choose to share so we can respond to your enquiry.',
      'Please avoid sending sensitive personal or financial information in an initial enquiry. Third-party email, phone, and messaging services process data under their own privacy policies.',
      'For a privacy question or request, contact abhishekthakur872000@gmail.com.'
    ]
  }
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  siteNav?.classList.toggle('is-open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-legal]').forEach((button) => {
  button.addEventListener('click', () => {
    const entry = legalContent[button.dataset.legal];
    if (!entry || !legalDialog || !legalTitle || !legalCopy) return;
    legalTitle.textContent = entry.title;
    legalCopy.replaceChildren(...entry.paragraphs.map((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      return paragraph;
    }));
    legalDialog.showModal();
  });
});

document.querySelector('.dialog-close')?.addEventListener('click', () => legalDialog?.close());
legalDialog?.addEventListener('click', (event) => {
  if (event.target === legalDialog) legalDialog.close();
});
document.querySelector('#current-year').textContent = new Date().getFullYear();
