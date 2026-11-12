/**
 * Consultorio Dental Dr. José Orozco D.
 * Scripts para Interacciones UI/UX: Tour de Instalaciones Reales, FAQ y Navegación
 * Alineado con estándares WCAG 2.2 y UX Architecture (ux-ui-agent-skills)
 */

const WHATSAPP_NUMBER = '573145026911';
let lastFocusedElement = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress Bar & Sticky Header Elevation
  const header = document.querySelector('.site-nav-header');
  const progressBar = document.getElementById('reading-progress-bar');

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    if (progressBar) {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // 2. Mobile Navigation Toggle & Drawer
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-drawer-open');
    };

    mobileToggle.addEventListener('click', () => {
      const willOpen = !mobileDrawer.classList.contains('is-open');
      mobileDrawer.classList.toggle('is-open', willOpen);
      mobileToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      document.body.classList.toggle('nav-drawer-open', willOpen);
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeDrawer();
        mobileToggle.focus();
      }
    });
  }

  // 3. Interactive Clinic Tour (Accessible Tablist & Photos)
  const clinicTabs = Array.from(document.querySelectorAll('.clinic-tab-item'));
  const mainClinicImg = document.getElementById('clinic-main-img');
  const clinicCaptionTitle = document.getElementById('clinic-caption-title');
  const clinicCaptionDesc = document.getElementById('clinic-caption-desc');

  const activateTab = (tab) => {
    clinicTabs.forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');

    const imgSrc = tab.getAttribute('data-img');
    const title = tab.getAttribute('data-title');
    const desc = tab.getAttribute('data-desc');

    if (mainClinicImg && imgSrc) {
      mainClinicImg.style.opacity = '0.35';
      setTimeout(() => {
        mainClinicImg.src = imgSrc;
        mainClinicImg.style.opacity = '1';
      }, 150);
    }
    if (clinicCaptionTitle) clinicCaptionTitle.textContent = title;
    if (clinicCaptionDesc) clinicCaptionDesc.textContent = desc;
  };

  clinicTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));

    // Keyboard navigation (Arrow keys, Home, End)
    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        targetIndex = (index + 1) % clinicTabs.length;
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        targetIndex = (index - 1 + clinicTabs.length) % clinicTabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = clinicTabs.length - 1;
      }

      if (targetIndex !== null) {
        clinicTabs[targetIndex].focus();
        activateTab(clinicTabs[targetIndex]);
      }
    });
  });

  // 4. FAQ Accordion (with live aria-expanded state)
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      if (!item) return;
      const isCurrentlyActive = item.classList.contains('is-active');

      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('is-active');
        const trig = i.querySelector('.faq-trigger');
        if (trig) trig.setAttribute('aria-expanded', 'false');
      });

      if (!isCurrentlyActive) {
        item.classList.add('is-active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 5. Global Escape listener for Modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('legal-modal-backdrop');
      if (modal && modal.classList.contains('is-visible')) {
        closeLegalModal();
      }
    }
  });
});

// 6. Modal Legal Helpers with Focus Management
function openLegalModal() {
  lastFocusedElement = document.activeElement;
  const modal = document.getElementById('legal-modal-backdrop');
  if (modal) {
    modal.classList.add('is-visible');
    const closeBtn = modal.querySelector('.legal-modal-close-btn') || modal.querySelector('button');
    if (closeBtn) closeBtn.focus();
  }
}

function closeLegalModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.closest('button')) return;
  const modal = document.getElementById('legal-modal-backdrop');
  if (modal) {
    modal.classList.remove('is-visible');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }
}
