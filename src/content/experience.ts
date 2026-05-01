export interface ExperienceItem {
  company: string
  role: string
  period: string
  summary: readonly string[]
}

export const experienceSection = {
  eyebrow: 'Perjalanan',
  title: 'Pengalaman kerja & magang',
  subtitle: 'Perjalanan saya membangun produk digital lewat magang dan proyek nyata.',
} as const

export const experiences: readonly ExperienceItem[] = [
  {
    company: 'PT Era Baru Digitama Surabaya',
    role: 'Junior Frontend Engineer/UI UX DESIGN',
    period: '5 Bulan',
    summary: [
      'Mengikuti program SMK LINK (Learning in Industry & Knowledge) selama 5 bulan, yang memberikan pengalaman belajar dan bekerja langsung di dunia industri. Dalam program tersebut, saya ditempatkan di PT Era Baru Digitama Surabaya, di mana saya memperoleh pengalaman dalam pengembangan aplikasi dan website, memahami alur kerja profesional, serta meningkatkan keterampilan teknis, kedisiplinan, dan kerja sama tim dalam lingkungan industri.'
    ],
  },
  {
    company: '-',
    role: 'Mengembangkan Sebuah Aplikasi & Website',
    period: '2025-Sekarang',
    summary: [
      'Ikut Serta dalam Pembuatan dan Pengembangan Sistem Aplikasi/website Pondok, Aplikasi Sekolah, dan Platform  Undangan Pernikahan digital, Aplikasi CMS ( Content Management System), dan Beerapa aplikasi Lainnya'
    ],
  },
  {
    company: 'Magang Selama 3 Bulan di Universitas PGRI Jombang',
    role: 'Membuat Aplikasi sistem rekap lab',
    period: '3 Bulan',
    summary: [
      'Dalam Progam Magang ini, Saya di utus oleh pihak atau dosen di universitas untuk Membuat sebuah Aplikasi Sistem  Rekap Labolatorium UPJB, Karena rekap di universitas masih Manual dan data tidak rapi'
    ],
  },
  {
    company: 'Mengembangkan Aplikasi belajaro.id',
    role: 'Front End/UI UX',
    period: '2 Bulan',
    summary: [
      'Dalam Proses Pengembangan aplikasi ini,saya bekerja sebagai UI/UX Design utk membuat Prototype websitenya, dan bekerja sebagai Front end developer(Membuat sebuah tampilan websitenya dan consume API)'
    ],
  },
  {
    company: 'SatuJanji/Platform Undangan digital',
    role: 'Membuat jasa template design undangan pernikahan digital berbasis website',
    period: '2025-sekarang',
    summary: [
      'Jasa Pembuatan undangan pernikahan digital berbasis website'
    ],
  },
] as const
