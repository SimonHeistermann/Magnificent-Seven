<script setup lang="ts">
import { SiteFooter } from '@/components/base'
</script>

<template>
  <div class="privacy-page-wrapper">
    <div class="privacy-page">
      <!-- Header -->
      <header class="page-header">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Dashboard</span>
        </router-link>
        <h1 class="page-title">Privacy Policy</h1>
        <p class="page-subtitle">Data protection information according to GDPR</p>
      </header>

      <!-- Content -->
      <main class="page-content">
        <!-- Training Project Notice -->
        <section class="content-section">
          <div class="notice-card">
            <p class="notice-text">
              <strong>Note:</strong> This website is a training project created during education at
              <a href="https://developerakademie.com/" target="_blank" rel="noopener noreferrer" class="text-link"
                >Developer Akademie</a
              >. It is not a commercial product. Data processing is minimal and limited to what is technically necessary
              for hosting and displaying the website.
            </p>
          </div>
        </section>

        <!-- Table of Contents -->
        <section class="content-section">
          <h2 class="section-title">Contents</h2>
          <div class="text-card">
            <ol class="toc-list">
              <li>Controller</li>
              <li>Data Protection Officer</li>
              <li>Data We Collect</li>
              <li>Purposes and Legal Basis</li>
              <li>Third-Party Processors</li>
              <li>International Data Transfers</li>
              <li>Cookies and Similar Technologies</li>
              <li>Retention Periods</li>
              <li>Your Rights</li>
              <li>Supervisory Authority</li>
              <li>Automated Decision-Making</li>
              <li>Obligation to Provide Data</li>
              <li>Changes to This Policy</li>
              <li>Severability</li>
            </ol>
          </div>
        </section>

        <!-- 1. Controller -->
        <section class="content-section">
          <h2 class="section-title">1. Controller</h2>
          <div class="text-card">
            <p class="text-content">
              The controller responsible for data processing on this website within the meaning of the General Data
              Protection Regulation (GDPR) is:
            </p>
            <p class="text-content">
              <strong>Simon Maximilian Heistermann</strong><br />
              Mutter-Teresa-Weg 6, 46325 Borken, Germany<br />
              Email:
              <a href="mailto:simon@heistermann-solutions.de" class="text-link">simon@heistermann-solutions.de</a>
            </p>
          </div>
        </section>

        <!-- 2. Data Protection Officer -->
        <section class="content-section">
          <h2 class="section-title">2. Data Protection Officer</h2>
          <div class="text-card">
            <p class="text-content">
              We are not legally required to appoint a data protection officer pursuant to § 38 of the German Federal
              Data Protection Act (BDSG). For any data protection inquiries, please contact us directly at
              <a href="mailto:simon@heistermann-solutions.de" class="text-link">simon@heistermann-solutions.de</a>.
            </p>
          </div>
        </section>

        <!-- 3. Data We Collect -->
        <section class="content-section">
          <h2 class="section-title">3. Data We Collect</h2>
          <div class="text-card">
            <p class="text-content">
              We process personal data that is automatically collected when you use our website. This website does not
              contain forms, user accounts, or any input fields that collect personal data from visitors.
            </p>

            <h3 class="text-heading">3.1 Technical Data (Server Log Files)</h3>
            <p class="text-content">
              When you visit our website, the following data is automatically collected by our hosting provider:
            </p>
            <ul class="text-list">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Date, time, and duration of access</li>
              <li>Referring URL</li>
              <li>Pages visited</li>
            </ul>

            <h3 class="text-heading">3.2 Google Sheets Data Retrieval</h3>
            <p class="text-content">
              This website retrieves financial data from a publicly accessible Google Sheets document. When you visit
              this website, your browser makes requests to Google servers to fetch this data. This may transmit your IP
              address and browser information to Google. No authentication or personal data is required to access this
              public spreadsheet.
            </p>
          </div>
        </section>

        <!-- 4. Purposes and Legal Basis -->
        <section class="content-section">
          <h2 class="section-title">4. Purposes and Legal Basis</h2>
          <div class="text-card">
            <p class="text-content">
              We process your personal data for the following purposes and on the following legal bases:
            </p>
            <div class="data-table">
              <div class="table-row table-header">
                <span class="table-cell">Purpose</span>
                <span class="table-cell">Legal Basis</span>
              </div>
              <div class="table-row">
                <span class="table-cell">Website hosting &amp; security</span>
                <span class="table-cell"
                  >Art. 6(1)(f) GDPR — legitimate interest in operating a secure website</span
                >
              </div>
              <div class="table-row">
                <span class="table-cell">Google Sheets data retrieval</span>
                <span class="table-cell"
                  >Art. 6(1)(f) GDPR — legitimate interest in displaying financial data for educational
                  purposes</span
                >
              </div>
            </div>
          </div>
        </section>

        <!-- 5. Third-Party Processors -->
        <section class="content-section">
          <h2 class="section-title">5. Third-Party Processors</h2>
          <div class="text-card">
            <p class="text-content">
              We use the following third-party service providers to operate our website:
            </p>

            <h3 class="text-heading">Hosting Provider</h3>
            <p class="text-content">
              This website is hosted on an external server. The hosting provider processes technical access data (IP
              address, request logs) as part of providing the hosting service. Processing is based on Art. 6(1)(f)
              GDPR — our legitimate interest in operating a secure and reliable website.
            </p>

            <h3 class="text-heading">Google LLC</h3>
            <p class="text-content">
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />
              Purpose: Provision of publicly accessible Google Sheets data used to display financial information on this
              dashboard.<br />
              Data processed: IP address, browser information (transmitted automatically when your browser fetches data
              from Google servers).<br />
              Privacy policy:
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-link"
                >https://policies.google.com/privacy</a
              >
            </p>
          </div>
        </section>

        <!-- 6. International Data Transfers -->
        <section class="content-section">
          <h2 class="section-title">6. International Data Transfers</h2>
          <div class="text-card">
            <p class="text-content">
              Google LLC is based in the United States. Data transfers to the US are conducted on the following legal
              bases:
            </p>
            <p class="text-content">
              <strong>EU-US Data Privacy Framework (DPF):</strong> The European Commission has adopted an adequacy
              decision for the EU-US Data Privacy Framework (Commission Implementing Decision of 10 July 2023). Google
              LLC is certified under the DPF, which ensures an adequate level of data protection.
            </p>
            <p class="text-content">
              <strong>Standard Contractual Clauses (SCCs):</strong> As an additional safeguard, Google applies Standard
              Contractual Clauses pursuant to Art. 46(2)(c) GDPR.
            </p>
          </div>
        </section>

        <!-- 7. Cookies and Similar Technologies -->
        <section class="content-section">
          <h2 class="section-title">7. Cookies and Similar Technologies</h2>
          <div class="text-card">
            <p class="text-content">
              This website does not use cookies. No cookie consent banner is required or displayed.
            </p>
            <p class="text-content">
              This website does not use localStorage, sessionStorage, or any other client-side storage mechanism. No
              data is stored on your device when you visit this website.
            </p>
          </div>
        </section>

        <!-- 8. Retention Periods -->
        <section class="content-section">
          <h2 class="section-title">8. Retention Periods</h2>
          <div class="text-card">
            <p class="text-content">
              We retain personal data only as long as necessary for the purposes for which it was collected:
            </p>
            <div class="data-table">
              <div class="table-row table-header">
                <span class="table-cell">Data Category</span>
                <span class="table-cell">Retention Period</span>
              </div>
              <div class="table-row">
                <span class="table-cell">Server/access logs (hosting provider)</span>
                <span class="table-cell">Per hosting provider policy (typically 30 days)</span>
              </div>
              <div class="table-row">
                <span class="table-cell">Google Sheets request logs</span>
                <span class="table-cell">Per Google's data retention policy</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 9. Your Rights -->
        <section class="content-section">
          <h2 class="section-title">9. Your Rights</h2>
          <div class="text-card">
            <p class="text-content">
              Under the GDPR, you have the following rights regarding your personal data:
            </p>

            <h3 class="text-heading">Right of access (Art. 15 GDPR)</h3>
            <p class="text-content">
              You may request confirmation of whether we process your personal data and, if so, obtain a copy of that
              data.
            </p>

            <h3 class="text-heading">Right to rectification (Art. 16 GDPR)</h3>
            <p class="text-content">You may request correction of inaccurate or incomplete data.</p>

            <h3 class="text-heading">Right to erasure (Art. 17 GDPR)</h3>
            <p class="text-content">
              You may request deletion of your data, subject to legal retention obligations.
            </p>

            <h3 class="text-heading">Right to restriction (Art. 18 GDPR)</h3>
            <p class="text-content">
              You may request restriction of processing in certain circumstances.
            </p>

            <h3 class="text-heading">Right to data portability (Art. 20 GDPR)</h3>
            <p class="text-content">
              You may request your data in a structured, commonly used, machine-readable format.
            </p>

            <h3 class="text-heading">Right to object (Art. 21 GDPR)</h3>
            <p class="text-content">
              You may object to processing based on legitimate interests at any time, for reasons related to your
              particular situation.
            </p>

            <h3 class="text-heading">Right to withdraw consent (Art. 7(3) GDPR)</h3>
            <p class="text-content">
              Where processing is based on your consent, you may withdraw consent at any time without affecting the
              lawfulness of processing carried out before withdrawal.
            </p>

            <p class="text-content">
              To exercise any of these rights, please contact us at
              <a href="mailto:simon@heistermann-solutions.de" class="text-link">simon@heistermann-solutions.de</a>. We
              will respond within one month of receiving your request.
            </p>
          </div>
        </section>

        <!-- 10. Supervisory Authority -->
        <section class="content-section">
          <h2 class="section-title">10. Supervisory Authority</h2>
          <div class="text-card">
            <p class="text-content">
              You have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The
              competent supervisory authority for us is:
            </p>
            <p class="text-content">
              <strong
                >Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</strong
              ><br />
              Postfach 20 04 44<br />
              40102 Düsseldorf, Germany<br />
              Website:
              <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" class="text-link"
                >www.ldi.nrw.de</a
              >
            </p>
          </div>
        </section>

        <!-- 11. Automated Decision-Making -->
        <section class="content-section">
          <h2 class="section-title">11. Automated Decision-Making</h2>
          <div class="text-card">
            <p class="text-content">
              We do not use fully automated decision-making, including profiling, within the meaning of Art. 22 GDPR.
            </p>
          </div>
        </section>

        <!-- 12. Obligation to Provide Data -->
        <section class="content-section">
          <h2 class="section-title">12. Obligation to Provide Data</h2>
          <div class="text-card">
            <p class="text-content">
              There is no obligation to provide personal data when visiting this website. The website is a passive,
              read-only dashboard that does not require any user input or registration.
            </p>
          </div>
        </section>

        <!-- 13. Changes to This Policy -->
        <section class="content-section">
          <h2 class="section-title">13. Changes to This Policy</h2>
          <div class="text-card">
            <p class="text-content">
              We may update this privacy policy from time to time to reflect changes in our practices or for legal,
              regulatory, or operational reasons. Minor corrections or clarifications may take effect immediately. The
              "Last updated" date below reflects the most recent revision.
            </p>
          </div>
        </section>

        <!-- 14. Severability -->
        <section class="content-section">
          <h2 class="section-title">14. Severability</h2>
          <div class="text-card">
            <p class="text-content">
              Should any provision of this privacy policy be held invalid or unenforceable, the remaining provisions
              shall remain in full force and effect. Any invalid provision shall be replaced by a valid provision that
              comes closest to the intent of the original.
            </p>
          </div>
        </section>

        <!-- Last Updated -->
        <section class="content-section">
          <p class="last-updated">Last updated: March 2026</p>
        </section>
      </main>
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
.privacy-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.privacy-page {
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

/* TOC */
.toc-list {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #94a3b8);
  line-height: 1.9;
  margin: 0;
  padding-left: var(--space-6, 1.5rem);
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

.text-list {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #94a3b8);
  line-height: 1.7;
  margin: var(--space-3, 0.75rem) 0;
  padding-left: var(--space-6, 1.5rem);
}

.text-list li {
  margin-bottom: var(--space-2, 0.5rem);
}

.text-link {
  color: var(--color-accent, #00c8ff);
  text-decoration: none;
  transition: opacity var(--transition-fast, 150ms);
}

.text-link:hover {
  opacity: 0.8;
}

/* Data Table */
.data-table {
  margin-top: var(--space-4, 1rem);
  border-radius: var(--radius-md, 8px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.table-row {
  display: flex;
  gap: 1px;
  background: rgba(255, 255, 255, 0.02);
}

.table-row:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.table-header {
  background: rgba(0, 200, 255, 0.04);
}

.table-header .table-cell {
  font-weight: 500;
  color: var(--color-text-primary, #f8fafc);
  font-size: 0.8125rem;
}

.table-cell {
  flex: 1;
  padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
  font-size: 0.8125rem;
  color: var(--color-text-secondary, #94a3b8);
  line-height: 1.6;
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

.last-updated {
  font-size: 0.75rem;
  color: var(--color-text-muted, #64748b);
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .privacy-page {
    padding: var(--space-8, 2rem) var(--space-4, 1rem) var(--space-12, 3rem);
  }

  .page-title {
    font-size: 1.75rem;
  }

  .table-row {
    flex-direction: column;
    gap: 0;
  }

  .table-cell {
    padding: var(--space-2, 0.5rem) var(--space-4, 1rem);
  }

  .table-cell:first-child {
    padding-bottom: 0;
    font-weight: 500;
    color: var(--color-text-primary, #f8fafc);
  }
}
</style>
