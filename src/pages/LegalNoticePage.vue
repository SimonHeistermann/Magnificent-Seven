<script setup lang="ts">
import { SiteFooter } from '@/components/base'

const legalData = {
  responsiblePerson: 'Simon Maximilian Heistermann',
  address: {
    street: 'Mutter-Teresa-Weg 6',
    zip: '46325',
    city: 'Borken',
    country: 'Deutschland',
    countryEn: 'Germany',
  },
  contact: {
    email: 'simon@heistermann-solutions.de',
  },
  vatId: 'DE454100405',
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
        <p class="page-subtitle">Impressum gemäß § 5 DDG</p>
      </header>

      <!-- Content -->
      <main class="page-content">
        <!-- Training Project Notice -->
        <section class="content-section">
          <div class="notice-card">
            <p class="notice-text">
              <strong>Hinweis:</strong> Diese Website ist ein Ausbildungs- und Übungsprojekt, erstellt im Rahmen der
              Ausbildung bei der
              <a href="https://developerakademie.com/" target="_blank" rel="noopener noreferrer" class="text-link"
                >Developer Akademie</a
              >. Es handelt sich nicht um ein kommerzielles Angebot oder eine geschäftliche Dienstleistung.
            </p>
          </div>
        </section>

        <!-- Impressum (German - legally required) -->
        <section class="content-section">
          <h2 class="section-title">Impressum</h2>
          <p class="section-note">Angaben gemäß § 5 DDG</p>
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">Name</span>
              <span class="info-value">{{ legalData.responsiblePerson }}</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <span class="info-label">Anschrift</span>
              <span class="info-value">
                {{ legalData.address.street }}<br />
                {{ legalData.address.zip }} {{ legalData.address.city }}<br />
                {{ legalData.address.country }}
              </span>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <span class="info-label">E-Mail</span>
              <a :href="`mailto:${legalData.contact.email}`" class="info-value link">
                {{ legalData.contact.email }}
              </a>
            </div>
          </div>
        </section>

        <!-- USt-IdNr -->
        <section class="content-section">
          <h2 class="section-title">Umsatzsteuer-ID</h2>
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">USt-IdNr.</span>
              <span class="info-value">{{ legalData.vatId }}</span>
            </div>
            <div class="info-row-note">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz
            </div>
          </div>
        </section>

        <!-- Verantwortlich für den Inhalt -->
        <section class="content-section">
          <h2 class="section-title">Verantwortlich für den Inhalt</h2>
          <p class="section-note">nach § 18 Abs. 2 MStV</p>
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">Name</span>
              <span class="info-value">{{ legalData.responsiblePerson }}</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <span class="info-label">Anschrift</span>
              <span class="info-value">
                {{ legalData.address.street }}<br />
                {{ legalData.address.zip }} {{ legalData.address.city }}<br />
                {{ legalData.address.country }}
              </span>
            </div>
          </div>
        </section>

        <!-- EU-Streitschlichtung -->
        <section class="content-section">
          <h2 class="section-title">EU-Streitschlichtung</h2>
          <div class="text-card">
            <p class="text-content">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p class="text-content">
              Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>

        <!-- Haftung für Links -->
        <section class="content-section">
          <h2 class="section-title">Haftung für Links</h2>
          <div class="text-card">
            <p class="text-content">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </section>

        <!-- Divider -->
        <div class="section-divider"></div>

        <!-- English Summary -->
        <section class="content-section">
          <h2 class="section-title">English Summary</h2>
          <div class="text-card">
            <h3 class="text-heading">Legal Notice pursuant to § 5 DDG</h3>
            <p class="text-content">
              <strong>{{ legalData.responsiblePerson }}</strong
              ><br />
              {{ legalData.address.street }}<br />
              {{ legalData.address.zip }} {{ legalData.address.city }},
              {{ legalData.address.countryEn }}<br />
              Email:
              <a :href="`mailto:${legalData.contact.email}`" class="text-link">{{ legalData.contact.email }}</a>
            </p>

            <h3 class="text-heading">VAT Identification Number</h3>
            <p class="text-content">USt-IdNr: {{ legalData.vatId }}</p>

            <h3 class="text-heading">Responsible for Content</h3>
            <p class="text-content">
              Pursuant to § 18(2) MStV:<br />
              {{ legalData.responsiblePerson }}<br />
              {{ legalData.address.street }}, {{ legalData.address.zip }} {{ legalData.address.city }},
              {{ legalData.address.countryEn }}
            </p>

            <h3 class="text-heading">EU Online Dispute Resolution</h3>
            <p class="text-content">
              The European Commission provides an online dispute resolution platform:
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer
              arbitration board.
            </p>

            <h3 class="text-heading">Training Project</h3>
            <p class="text-content">
              This website is a training and portfolio project created during education at
              <a href="https://developerakademie.com/" target="_blank" rel="noopener noreferrer" class="text-link"
                >Developer Akademie</a
              >. It is not a commercial product, financial service, or business offering. Any resemblance to real
              businesses or services is for educational demonstration purposes only.
            </p>
          </div>
        </section>

        <!-- Stand -->
        <section class="content-section">
          <p class="last-updated">Stand: März 2026</p>
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

/* Notice Card */
.notice-card {
  background: rgba(0, 200, 255, 0.04);
  border-radius: var(--radius-lg, 12px);
  border: 1px solid rgba(0, 200, 255, 0.12);
  padding: var(--space-5, 1.25rem) var(--space-6, 1.5rem);
}

.notice-text {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #94a3b8);
  line-height: 1.7;
  margin: 0;
}

.notice-text strong {
  color: var(--color-accent, #00c8ff);
  font-weight: 500;
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

.info-row:last-of-type {
  padding-bottom: 0;
}

.info-row-note {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748b);
  padding-top: var(--space-2, 0.5rem);
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

/* Section Divider */
.section-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 180, 220, 0.12) 20%,
    rgba(0, 180, 220, 0.12) 80%,
    transparent
  );
  margin: var(--space-4, 1rem) 0;
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

.text-content:not(:last-child) {
  margin-bottom: var(--space-4, 1rem);
}

.text-content strong {
  color: var(--color-text-primary, #f8fafc);
  font-weight: 500;
}

.text-link {
  color: var(--color-accent, #00c8ff);
  text-decoration: none;
  transition: opacity var(--transition-fast, 150ms);
}

.text-link:hover {
  opacity: 0.8;
}

.last-updated {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748b);
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
