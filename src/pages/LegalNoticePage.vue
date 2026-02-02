<script setup lang="ts">
import { SiteFooter } from '@/components/base'

const legalData = {
  responsiblePerson: 'Simon Maximilian Heistermann',
  address: {
    street: 'Mutter-Teresa-Weg 6',
    city: '46325 Borken',
    country: 'Germany',
  },
  contact: {
    email: 'business@heistermann-solutions.de',
  },
}
</script>

<template>
  <div class="legal-page-wrapper">
    <div class="legal-page">
      <!-- Header -->
      <header class="page-header">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Dashboard</span>
        </router-link>
        <h1 class="page-title">Legal Notice</h1>
        <p class="page-subtitle">Impressum according to section 5 TMG</p>
      </header>

      <!-- Content -->
      <main class="page-content">
        <!-- Contact Information -->
        <section class="content-section">
          <h2 class="section-title">Contact Information</h2>
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">Name</span>
              <span class="info-value">{{ legalData.responsiblePerson }}</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <span class="info-label">Address</span>
              <span class="info-value">
                {{ legalData.address.street }}<br />
                {{ legalData.address.city }}<br />
                {{ legalData.address.country }}
              </span>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <span class="info-label">Email</span>
              <a :href="`mailto:${legalData.contact.email}`" class="info-value link">
                {{ legalData.contact.email }}
              </a>
            </div>
          </div>
        </section>

        <!-- Responsible for Content -->
        <section class="content-section">
          <h2 class="section-title">Responsible for Content</h2>
          <p class="section-note">According to section 55 para. 2 RStV</p>
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">Name</span>
              <span class="info-value">{{ legalData.responsiblePerson }}</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <span class="info-label">Address</span>
              <span class="info-value">
                {{ legalData.address.street }}<br />
                {{ legalData.address.city }}<br />
                {{ legalData.address.country }}
              </span>
            </div>
          </div>
        </section>

        <!-- Disclaimer -->
        <section class="content-section">
          <h2 class="section-title">Disclaimer</h2>
          <div class="text-card">
            <h3 class="text-heading">Content Accuracy</h3>
            <p class="text-content">
              The contents of this website have been created with the utmost care. However, no guarantee can be given
              for the accuracy, completeness, and timeliness of the content. This dashboard displays financial data for
              educational and informational purposes only. The data shown may be delayed, incomplete, or contain errors.
            </p>

            <h3 class="text-heading">Educational Purpose</h3>
            <p class="text-content">
              This website is a portfolio project created for educational and demonstration purposes. It showcases web
              development skills and is not intended for professional financial analysis or trading decisions.
            </p>

            <h3 class="text-heading">No Financial Advice</h3>
            <p class="text-content">
              The information provided on this website does not constitute financial, investment, legal, or tax advice.
              The displayed data should not be used as a basis for investment decisions. We assume no liability for any
              losses, damages, or decisions made based on the information displayed on this website. Always consult with
              qualified financial professionals before making investment decisions.
            </p>

            <h3 class="text-heading">Liability for Links</h3>
            <p class="text-content">
              Our offer contains links to external websites of third parties, on whose contents we have no influence.
              Therefore, we cannot assume any liability for these external contents. The respective provider or operator
              of the pages is always responsible for the content of the linked pages. The linked pages were checked for
              possible legal violations at the time of linking. Illegal contents were not recognizable at the time of
              linking.
            </p>

            <h3 class="text-heading">Copyright</h3>
            <p class="text-content">
              The content and works created by the site operator on these pages are subject to German copyright law. The
              reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require
              the written consent of the respective author or creator. Downloads and copies of this site are only
              permitted for private, non-commercial use.
            </p>
          </div>
        </section>
      </main>
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
.legal-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.legal-page {
  flex: 1;
  padding: var(--space-12, 3rem) var(--space-8, 2rem) var(--space-16, 4rem);
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

/* Header */
.page-header {
  margin-bottom: var(--space-12, 3rem);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 0.5rem);
  color: var(--color-text-muted, #64748b);
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: var(--space-6, 1.5rem);
  transition: color var(--transition-fast, 150ms);
}

.back-link:hover {
  color: var(--color-accent, #00c8ff);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-text-primary, #f8fafc);
  margin: 0 0 var(--space-2, 0.5rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--color-text-muted, #64748b);
  margin: 0;
}

/* Content */
.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-10, 2.5rem);
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 1rem);
}

.section-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text-primary, #f8fafc);
  margin: 0;
  letter-spacing: -0.01em;
}

.section-note {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748b);
  margin: -0.5rem 0 0;
}

/* Info Card */
.info-card {
  background: var(--color-card, rgba(12, 25, 45, 0.75));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-lg, 12px);
  border: 1px solid var(--color-card-border, rgba(0, 180, 220, 0.06));
  padding: var(--space-5, 1.25rem) var(--space-6, 1.5rem);
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4, 1rem);
  padding: var(--space-3, 0.75rem) 0;
}

.info-row:first-child {
  padding-top: 0;
}

.info-row:last-child {
  padding-bottom: 0;
}

.info-label {
  font-size: 0.8125rem;
  color: var(--color-text-muted, #64748b);
  flex-shrink: 0;
}

.info-value {
  font-size: 0.875rem;
  color: var(--color-text-primary, #f8fafc);
  text-align: right;
  line-height: 1.5;
}

.info-value.link {
  color: var(--color-accent, #00c8ff);
  text-decoration: none;
  transition: opacity var(--transition-fast, 150ms);
}

.info-value.link:hover {
  opacity: 0.8;
}

.info-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.04) 20%,
    rgba(255, 255, 255, 0.04) 80%,
    transparent
  );
}

/* Text Card */
.text-card {
  background: var(--color-card, rgba(12, 25, 45, 0.75));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-lg, 12px);
  border: 1px solid var(--color-card-border, rgba(0, 180, 220, 0.06));
  padding: var(--space-6, 1.5rem);
}

.text-heading {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-primary, #f8fafc);
  margin: 0 0 var(--space-3, 0.75rem);
}

.text-heading:not(:first-child) {
  margin-top: var(--space-6, 1.5rem);
}

.text-content {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #94a3b8);
  line-height: 1.7;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .legal-page {
    padding: var(--space-8, 2rem) var(--space-4, 1rem) var(--space-12, 3rem);
  }

  .page-title {
    font-size: 1.75rem;
  }

  .info-row {
    flex-direction: column;
    gap: var(--space-1, 0.25rem);
  }

  .info-value {
    text-align: left;
  }
}
</style>
