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
        <!-- Introduction -->
        <section class="content-section">
          <h2 class="section-title">1. Data Protection at a Glance</h2>
          <div class="text-card">
            <h3 class="text-heading">General Information</h3>
            <p class="text-content">
              The following information provides a simple overview of what happens to your personal data when you visit
              this website. Personal data is any data that can be used to personally identify you. For detailed
              information on the subject of data protection, please refer to our privacy policy listed below this text.
            </p>

            <h3 class="text-heading">Data Collection on this Website</h3>
            <p class="text-content">
              <strong>Who is responsible for data collection on this website?</strong><br />
              Data processing on this website is carried out by the website operator. You can find the operator's
              contact details in the "Legal Notice" section of this website.
            </p>

            <h3 class="text-heading">How do we collect your data?</h3>
            <p class="text-content">
              On the one hand, your data is collected when you provide it to us. This could be data that you enter in a
              contact form, for example. Other data is collected automatically or with your consent when you visit the
              website through our IT systems. This is primarily technical data (e.g., internet browser, operating
              system, or time of page access). This data is collected automatically as soon as you enter this website.
            </p>
          </div>
        </section>

        <!-- Hosting -->
        <section class="content-section">
          <h2 class="section-title">2. Hosting</h2>
          <div class="text-card">
            <h3 class="text-heading">External Hosting</h3>
            <p class="text-content">
              This website is hosted externally. The personal data collected on this website is stored on the servers of
              the host(s). This may include IP addresses, contact requests, meta and communication data, contract data,
              contact details, names, website accesses, and other data generated via a website.
            </p>
            <p class="text-content">
              External hosting is carried out for the purpose of fulfilling contracts with our potential and existing
              customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast, and efficient provision of
              our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR).
            </p>
          </div>
        </section>

        <!-- General Information -->
        <section class="content-section">
          <h2 class="section-title">3. General Information and Mandatory Information</h2>
          <div class="text-card">
            <h3 class="text-heading">Data Protection</h3>
            <p class="text-content">
              The operators of these pages take the protection of your personal data very seriously. We treat your
              personal data confidentially and in accordance with statutory data protection regulations and this privacy
              policy. When you use this website, various personal data is collected. Personal data is data that can be
              used to personally identify you.
            </p>

            <h3 class="text-heading">Note on the Responsible Party</h3>
            <p class="text-content">
              The responsible party for data processing on this website is:<br /><br />
              <strong>Simon Maximilian Heistermann</strong><br />
              Mutter-Teresa-Weg 6<br />
              46325 Borken<br />
              Germany<br /><br />
              Email: business@heistermann-solutions.de
            </p>

            <h3 class="text-heading">Storage Duration</h3>
            <p class="text-content">
              Unless a more specific storage period has been specified within this privacy policy, your personal data
              will remain with us until the purpose for data processing no longer applies. If you assert a justified
              request for deletion or revoke your consent to data processing, your data will be deleted unless we have
              other legally permissible reasons for storing your personal data.
            </p>

            <h3 class="text-heading">SSL/TLS Encryption</h3>
            <p class="text-content">
              This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential
              content, such as orders or inquiries that you send to us as the site operator. You can recognize an
              encrypted connection by the fact that the address line of the browser changes from "http://" to "https://"
              and by the lock symbol in your browser line.
            </p>
          </div>
        </section>

        <!-- Data Collection -->
        <section class="content-section">
          <h2 class="section-title">4. Data Collection on this Website</h2>
          <div class="text-card">
            <h3 class="text-heading">Server Log Files</h3>
            <p class="text-content">
              The provider of the pages automatically collects and stores information in so-called server log files,
              which your browser automatically transmits to us. These are:
            </p>
            <ul class="text-list">
              <li>Browser type and browser version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Host name of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address</li>
            </ul>
            <p class="text-content">
              This data is not merged with other data sources. The collection of this data is based on Art. 6 para. 1
              lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and
              optimization of their website – for this purpose, the server log files must be collected.
            </p>
          </div>
        </section>

        <!-- External Services -->
        <section class="content-section">
          <h2 class="section-title">5. External Services</h2>
          <div class="text-card">
            <h3 class="text-heading">Google Sheets Integration</h3>
            <p class="text-content">
              This website uses Google Sheets for displaying financial data. When you use this website, data may be
              transferred to Google servers. This is a published, publicly accessible spreadsheet that does not require
              authentication. The use is based on our legitimate interest in providing accurate and up-to-date financial
              information (Art. 6 para. 1 lit. f GDPR).
            </p>
            <p class="text-content">
              For more information, please see Google's privacy policy at:
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-link">
                https://policies.google.com/privacy
              </a>
            </p>
          </div>
        </section>

        <!-- Important Disclaimers -->
        <section class="content-section">
          <h2 class="section-title">6. Important Disclaimers</h2>
          <div class="text-card">
            <h3 class="text-heading">Educational Purpose</h3>
            <p class="text-content">
              This dashboard is created for educational purposes only. It is a portfolio project demonstrating web
              development skills and is not intended for professional financial analysis or as a tool for making
              investment decisions.
            </p>

            <h3 class="text-heading">No Financial Advice</h3>
            <p class="text-content">
              The information displayed on this website does not constitute financial, investment, legal, or tax advice.
              The displayed data should not be used as a basis for investment decisions. Always consult with qualified
              financial professionals before making any investment decisions.
            </p>

            <h3 class="text-heading">No Guarantee of Data Accuracy</h3>
            <p class="text-content">
              While we strive to display accurate financial data, we make no guarantees regarding the accuracy,
              completeness, or timeliness of the information presented. Data may contain errors, be outdated, or be
              incomplete. Users should verify all information through official sources before relying on it.
            </p>

            <h3 class="text-heading">No Liability</h3>
            <p class="text-content">
              We accept no liability for any losses, damages, or decisions made based on the information displayed on
              this website. Use of this website and its data is entirely at your own risk.
            </p>
          </div>
        </section>

        <!-- Data Sources -->
        <section class="content-section">
          <h2 class="section-title">7. Data Sources</h2>
          <div class="text-card">
            <h3 class="text-heading">Google Sheets</h3>
            <p class="text-content">
              Financial data displayed on this dashboard is sourced from a publicly accessible Google Sheets document.
              This data is collected from various public financial reports and may be subject to delays or inaccuracies.
              The website operator is not responsible for any errors or inaccuracies in the source data.
            </p>
            <p class="text-content">
              The data source can be viewed directly at:
              <a
                href="https://docs.google.com/spreadsheets/d/1wx-yoq72MjaVWmzpYX9hgNNnU9A9_AgZ6rNpzgZUMGg"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link"
              >
                Google Sheets Data Source
              </a>
            </p>

            <h3 class="text-heading">Third-Party Data</h3>
            <p class="text-content">
              The website operator is not responsible for the accuracy, completeness, or timeliness of any third-party
              data displayed on this website. Users should independently verify all information before making any
              decisions based on the displayed data.
            </p>
          </div>
        </section>

        <!-- Your Rights -->
        <section class="content-section">
          <h2 class="section-title">8. Your Rights</h2>
          <div class="text-card">
            <h3 class="text-heading">Right to Information</h3>
            <p class="text-content">
              You have the right to receive information about your stored personal data, its origin and recipients, and
              the purpose of data processing at any time free of charge.
            </p>

            <h3 class="text-heading">Right to Rectification</h3>
            <p class="text-content">
              You have the right to request the rectification of inaccurate personal data concerning you without undue
              delay.
            </p>

            <h3 class="text-heading">Right to Erasure</h3>
            <p class="text-content">
              You have the right to request the erasure of personal data concerning you without undue delay, provided
              that one of the grounds specified in Art. 17 GDPR applies.
            </p>

            <h3 class="text-heading">Right to Object</h3>
            <p class="text-content">
              If your personal data is processed based on legitimate interests pursuant to Art. 6 para. 1 lit. f GDPR,
              you have the right to object to the processing of your personal data pursuant to Art. 21 GDPR, provided
              there are grounds relating to your particular situation.
            </p>
          </div>
        </section>

        <!-- Contact -->
        <section class="content-section">
          <h2 class="section-title">9. Contact for Data Protection</h2>
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">For questions about data protection</span>
              <a href="mailto:business@heistermann-solutions.de" class="info-value link">
                business@heistermann-solutions.de
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
  .privacy-page {
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
