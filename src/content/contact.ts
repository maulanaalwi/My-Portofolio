export const contactSection = {
  eyebrow: 'Kontak',
  title: 'Mari berkolaborasi',
  subtitle: 'Ada ide produk baru atau sekadar ingin ngobrol soal UX? Tinggalkan pesan!',
  channels: [
    {
      title: 'Email',
      detail: 'alwi84279@gmail.com',
      href: 'mailto:you@example.com',
      iconKey: 'mail' as const,
    },
    {
      title: 'WhatsApp',
      detail: '081573631060',
      href: 'https://wa.me/6281573631060',
      iconKey: 'whatsapp' as const,
    },
    {
      title: 'LinkedIn',
      detail: 'Maulana Alwi Al-Khatami',
      href: 'https://www.linkedin.com/in/maulana-alwi-al-khatami-alwi-b11298407/',
      iconKey: 'linkedin' as const,
    },
  ],
  formNotice:
    'Form ini simulasi lokal tanpa backend. Anda bisa menghubungi integrasi formulir seperti Formspree nanti.',
} as const
