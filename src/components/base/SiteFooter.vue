<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <!-- Top Section - Branding & Links -->
      <div class="footer-top">
        <router-link to="/" class="footer-brand">
          <div class="brand-mark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 17L9 11L13 15L21 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 7H21V11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span class="brand-text">Magnificent Seven</span>
        </router-link>

        <nav class="footer-nav">
          <router-link to="/" class="footer-link">Dashboard</router-link>
          <a
            href="https://docs.google.com/spreadsheets/d/1wx-yoq72MjaVWmzpYX9hgNNnU9A9_AgZ6rNpzgZUMGg"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link external-link"
          >
            Data Source
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="external-icon"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a
            href="https://github.com/SimonHeistermann/Magnificent-Seven"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            GitHub
          </a>
        </nav>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Section - Legal -->
      <div class="footer-bottom">
        <div class="footer-legal">
          <span class="copyright">&copy; {{ currentYear }} Magnificent Seven Dashboard</span>
          <span class="separator">|</span>
          <span class="disclaimer">Educational purposes only. Not financial advice.</span>
        </div>

        <div class="footer-legal-links">
          <router-link to="/legal-notice" class="legal-link">Legal Notice</router-link>
          <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;
  padding: var(--space-16, 4rem) 0 var(--space-8, 2rem);
  position: relative;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 180, 220, 0.12) 20%,
    rgba(0, 180, 220, 0.12) 80%,
    transparent
  );
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-8, 2rem);
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-6, 1.5rem);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3, 0.75rem);
  text-decoration: none;
  transition: opacity var(--transition-fast, 150ms);
}

.footer-brand:hover {
  opacity: 0.85;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 200, 255, 0.08);
  border: 1px solid rgba(0, 200, 255, 0.15);
  border-radius: var(--radius-md, 8px);
  color: var(--color-accent, #00C8FF);
}

.brand-text {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-secondary, #94A3B8);
  letter-spacing: -0.01em;
}

.footer-nav {
  display: flex;
  align-items: center;
  gap: var(--space-6, 1.5rem);
}

.footer-link {
  font-size: 0.8125rem;
  color: var(--color-text-muted, #64748B);
  text-decoration: none;
  transition: color var(--transition-fast, 150ms);
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent, #00C8FF);
  transition: width var(--transition-base, 250ms);
}

.footer-link:hover {
  color: var(--color-text-primary, #F8FAFC);
}

.footer-link:hover::after {
  width: 100%;
}

.footer-link.external-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.footer-link.external-link::after {
  display: none;
}

.external-icon {
  opacity: 0.6;
  transition: opacity var(--transition-fast, 150ms);
}

.footer-link:hover .external-icon {
  opacity: 1;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.04) 20%,
    rgba(255, 255, 255, 0.04) 80%,
    transparent
  );
  margin-bottom: var(--space-6, 1.5rem);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4, 1rem);
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: var(--space-3, 0.75rem);
  flex-wrap: wrap;
}

.copyright {
  font-size: 0.75rem;
  color: var(--color-text-disabled, #475569);
}

.separator {
  color: var(--color-text-disabled, #475569);
  opacity: 0.5;
}

.disclaimer {
  font-size: 0.6875rem;
  color: var(--color-text-disabled, #475569);
  opacity: 0.8;
}

.footer-legal-links {
  display: flex;
  align-items: center;
  gap: var(--space-5, 1.25rem);
}

.legal-link {
  font-size: 0.6875rem;
  color: var(--color-text-disabled, #475569);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color var(--transition-fast, 150ms);
}

.legal-link:hover {
  color: var(--color-text-muted, #64748B);
}

/* Responsive */
@media (max-width: 768px) {
  .site-footer {
    padding: var(--space-12, 3rem) 0 var(--space-6, 1.5rem);
  }

  .footer-container {
    padding: 0 var(--space-4, 1rem);
  }

  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4, 1rem);
  }

  .footer-nav {
    gap: var(--space-4, 1rem);
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3, 0.75rem);
  }

  .footer-legal {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2, 0.5rem);
  }

  .separator {
    display: none;
  }

  .footer-legal-links {
    gap: var(--space-4, 1rem);
  }
}
</style>
