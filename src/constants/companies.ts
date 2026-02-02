import type { Company, CompanyTicker } from '@/types'

export const COMPANIES: Record<CompanyTicker, Company> = {
  AAPL: {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    displayName: 'Apple',
    logoKey: 'apple',
    color: '#A2AAAD',
  },
  META: {
    ticker: 'META',
    name: 'Meta Platforms, Inc.',
    displayName: 'Meta',
    logoKey: 'meta',
    color: '#0081FB',
  },
  MSFT: {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    displayName: 'Microsoft',
    logoKey: 'microsoft',
    color: '#00A4EF',
  },
  GOOG: {
    ticker: 'GOOG',
    name: 'Alphabet Inc.',
    displayName: 'Google',
    logoKey: 'google',
    color: '#4285F4',
  },
  AMZN: {
    ticker: 'AMZN',
    name: 'Amazon.com, Inc.',
    displayName: 'Amazon',
    logoKey: 'amazon',
    color: '#FF9900',
  },
  NVDA: {
    ticker: 'NVDA',
    name: 'NVIDIA Corporation',
    displayName: 'Nvidia',
    logoKey: 'nvidia',
    color: '#76B900',
  },
  TSLA: {
    ticker: 'TSLA',
    name: 'Tesla, Inc.',
    displayName: 'Tesla',
    logoKey: 'tesla',
    color: '#E82127',
  },
}

export const COMPANY_ORDER: CompanyTicker[] = ['AAPL', 'META', 'MSFT', 'GOOG', 'AMZN', 'NVDA', 'TSLA']

export const getCompany = (ticker: CompanyTicker): Company => COMPANIES[ticker]

export const getCompanyColor = (ticker: CompanyTicker): string => COMPANIES[ticker].color

export const getAllCompanies = (): Company[] => COMPANY_ORDER.map((ticker) => COMPANIES[ticker])
