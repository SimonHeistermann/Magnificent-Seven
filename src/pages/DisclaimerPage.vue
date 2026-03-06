<script setup lang="ts">
import { SiteFooter } from '@/components/base'
</script>

<template>
  <div class="disclaimer-page-wrapper">
    <div class="disclaimer-page">
      <!-- Header -->
      <header class="page-header">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Dashboard</span>
        </router-link>
        <h1 class="page-title">Disclaimer</h1>
        <p class="page-subtitle">Training project notice</p>
      </header>

      <!-- Content -->
      <main class="page-content">
        <!-- Training Project -->
        <section class="content-section">
          <h2 class="section-title">Training Project</h2>
          <div class="notice-card">
            <p class="notice-text">
              This website is a <strong>training and portfolio project</strong> built as part of a web development
              education at
              <a href="https://developerakademie.com/" target="_blank" rel="noopener noreferrer" class="text-link"
                >Developer Akademie</a
              >. It is <strong>not</strong> a commercial product, financial service, investment platform, or business
              offering of any kind.
            </p>
          </div>
        </section>

        <!-- Not a Real Service -->
        <section class="content-section">
          <h2 class="section-title">Not a Real Financial Service</h2>
          <div class="text-card">
            <ul class="disclaimer-list">
              <li>This dashboard is for <strong>educational and demonstration purposes only</strong></li>
              <li>No real financial services, transactions, or advisory services are provided</li>
              <li>No investment advice is given or implied</li>
              <li>
                The displayed financial data may be delayed, incomplete, or inaccurate and should
                <strong>not</strong> be used for investment decisions
              </li>
              <li>Always consult qualified financial professionals before making investment decisions</li>
            </ul>
          </div>
        </section>

        <!-- Company Names & Trademarks -->
        <section class="content-section">
          <h2 class="section-title">Company Names &amp; Trademarks</h2>
          <div class="text-card">
            <p class="text-content">
              This project displays publicly available financial data for educational purposes. All company names,
              logos, tickers, and brand elements referenced on this website — including but not limited to Apple,
              Microsoft, Alphabet (Google), Amazon, Meta, NVIDIA, and Tesla — are trademarks of their respective
              owners.
            </p>
            <p class="text-content">
              <strong
                >This website is not affiliated with, endorsed by, or sponsored by any of these companies.</strong
              >
              Their names and data are used solely for educational demonstration of web development skills.
            </p>
          </div>
        </section>

        <!-- Data Sources -->
        <section class="content-section">
          <h2 class="section-title">Data Sources</h2>
          <div class="text-card">
            <p class="text-content">
              Financial data displayed on this dashboard is sourced from a publicly accessible Google Sheets document
              containing data compiled from public financial reports. This data is provided "as is" without any
              guarantee of accuracy, completeness, or timeliness.
            </p>
            <p class="text-content">
              The website operator is not responsible for any errors or inaccuracies in the source data. Users should
              independently verify all information through official sources.
            </p>
          </div>
        </section>

        <!-- No Liability -->
        <section class="content-section">
          <h2 class="section-title">Limitation of Liability</h2>
          <div class="text-card">
            <p class="text-content">
              We accept no liability for any losses, damages, or decisions made based on the information displayed on
              this website. Use of this website and its data is entirely at your own risk.
            </p>
          </div>
        </section>

        <!-- Contact -->
        <section class="content-section">
          <h2 class="section-title">Contact</h2>
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">Questions or concerns</span>
              <a href="mailto:simon@heistermann-solutions.de" class="info-value link">
                simon@heistermann-solutions.de
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
.disclaimer-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.disclaimer-page {
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

/* Text Card */
.text-card {
  background: var(--color-card, rgba(12, 25, 45, 0.75));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-lg, 12px);
  border: 1px solid var(--color-card-border, rgba(0, 180, 220, 0.06));
  padding: var(--space-6, 1.5rem);
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

.disclaimer-list {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #94a3b8);
  line-height: 1.7;
  margin: 0;
  padding-left: var(--space-6, 1.5rem);
}

.disclaimer-list li {
  margin-bottom: var(--space-3, 0.75rem);
}

.disclaimer-list li:last-child {
  margin-bottom: 0;
}

.disclaimer-list strong {
  color: var(--color-text-primary, #f8fafc);
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

/* Responsive */
@media (max-width: 768px) {
  .disclaimer-page {
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
