import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Script from 'next/script';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://cococareer-lp.vercel.app';

export const metadata = {
  title: 'COCO CAREER - 学生と企業をつなぐキャリアサポートサービス',
  description: 'COCO CAREERは、学生と企業を繋ぐ長期インターン掲載プラットフォームです。採用を賭けから戦略に変える、新しいキャリアサポートサービスです。',
  openGraph: {
    title: 'COCO CAREER - 学生と企業をつなぐキャリアサポートサービス',
    description: 'COCO CAREERは、学生と企業を繋ぐ長期インターン掲載プラットフォームです。採用を賭けから戦略に変える、新しいキャリアサポートサービスです。',
    url: baseUrl,
    siteName: 'COCO CAREER',
    images: [
      {
        url: `${baseUrl}/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: 'COCO CAREER',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COCO CAREER - 学生と企業をつなぐキャリアサポートサービス',
    description: 'COCO CAREERは、学生と企業を繋ぐ長期インターン掲載プラットフォームです。採用を賭けから戦略に変える、新しいキャリアサポートサービスです。',
    images: [`${baseUrl}/ogp.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  // verification: {
  //   google: 'your-google-site-verification',
  // },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'COCO CAREER',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: '学生と企業を繋ぐ長期インターン掲載プラットフォーム',
  sameAs: [
    'https://twitter.com/cococareer',
    'https://www.instagram.com/cococareer',
    'https://www.linkedin.com/company/cococareer',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+81-XXX-XXXX-XXXX',
    contactType: 'customer service',
    areaServed: 'JP',
    availableLanguage: ['Japanese'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
