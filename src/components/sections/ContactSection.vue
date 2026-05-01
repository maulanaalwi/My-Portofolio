<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import { reactive } from 'vue'
import { Linkedin, Mail, MessagesSquare } from 'lucide-vue-next'
import AppButton from '@/components/ui/AppButton.vue'
import AppCard from '@/components/ui/AppCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { contactSection } from '@/content/contact'

const channelIcons = {
  mail: Mail as FunctionalComponent<{ class?: string }>,
  whatsapp: MessagesSquare,
  linkedin: Linkedin,
} as const

const formModel = reactive({
  name: '',
  email: '',
  message: '',
})

const toast = reactive({ visible: false, text: '' })

function notify(text: string) {
  toast.text = text
  toast.visible = true
  window.setTimeout(() => {
    toast.visible = false
  }, 5200)
}

function handleSubmit() {
  if (!formModel.name.trim() || !formModel.email.trim()) {
    notify('Mohon lengkapi nama dan email.')
    return
  }
  if (!formModel.message.trim()) {
    notify('Mohon tulis pesan singkat Anda.')
    return
  }

  notify('Terima kasih! Ini simulasi lokal tanpa backend — tautkan Formspree / API Anda nanti.')

  Object.assign(formModel, { name: '', email: '', message: '' })
}
</script>

<template>
  <section id="contact" aria-label="Kontak" class="relative border-t border-slate-200/70 bg-white/60 pb-28 pt-20 dark:border-slate-800 dark:bg-[var(--color-surface-dark)]">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="toast.visible" class="fixed inset-x-4 bottom-6 z-[60] mx-auto max-w-xl rounded-xl border border-violet-200 bg-white/95 px-4 py-3 text-sm shadow-lg shadow-indigo-200/65 dark:border-violet-500/40 dark:bg-slate-900/95 dark:shadow-black/65 sm:inset-auto sm:right-6 sm:translate-x-0">
        {{ toast.text }}
      </div>
    </transition>

    <div class="mx-auto max-w-6xl space-y-12 px-5 lg:px-8">
      <RevealOnScroll class="flex flex-wrap items-start justify-between gap-8">
        <SectionHeading class="flex-1" align="center" :eyebrow="contactSection.eyebrow" :title="contactSection.title" :subtitle="contactSection.subtitle" />
      </RevealOnScroll>
      <RevealOnScroll :delay-ms="80">
        <div class="grid gap-10 lg:grid-cols-[0.92fr_minmax(0,1fr)]">
          <div class="flex flex-wrap gap-4">
            <a
              v-for="channel in contactSection.channels"
              :key="channel.title"
              :href="channel.href"
              :target="channel.href.startsWith('http') ? '_blank' : undefined"
              :rel="channel.href.startsWith('http') ? 'noreferrer noopener' : undefined"
              class="flex min-w-[200px] flex-1 gap-4 rounded-[1.4rem] border border-transparent bg-white/95 p-4 shadow-inner shadow-white/65 transition hover:-translate-y-0.5 hover:border-violet-300/85 dark:bg-[var(--color-surface-darker)] dark:hover:border-violet-500/40 dark:shadow-none"
            >
              <component :is="channelIcons[channel.iconKey]" class="mt-1 h-6 w-6 text-violet-500 dark:text-violet-200" aria-hidden="true" />
              <span>
                <span class="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{{ channel.title }}</span>
                <span class="mt-1 block text-lg font-semibold text-slate-900 dark:text-white">{{ channel.detail }}</span>
              </span>
            </a>
          </div>
          <AppCard class="backdrop-blur">
            <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{{ contactSection.formNotice }}</p>
            <form class="mt-6 space-y-4" autocomplete="off" @submit.prevent="handleSubmit">
              <div class="space-y-2">
                <label for="contact-name" class="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Nama
                </label>
                <input
                  id="contact-name"
                  v-model.trim="formModel.name"
                  name="name"
                  type="text"
                  minlength="2"
                  maxlength="120"
                  class="block w-full rounded-xl border border-slate-300/85 bg-white/90 px-4 py-3 text-sm outline-none ring-violet-500/30 placeholder:text-slate-400 transition focus-visible:border-transparent focus-visible:ring-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                  placeholder="Nama Anda"
                />
              </div>
              <div class="space-y-2">
                <label for="contact-email" class="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Email
                </label>
                <input
                  id="contact-email"
                  v-model.trim="formModel.email"
                  name="email"
                  type="email"
                  inputmode="email"
                  maxlength="160"
                  class="block w-full rounded-xl border border-slate-300/85 bg-white/90 px-4 py-3 text-sm outline-none ring-violet-500/30 placeholder:text-slate-400 transition focus-visible:border-transparent focus-visible:ring-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                  placeholder="email@domain.com"
                />
              </div>
              <div class="space-y-2">
                <label for="contact-msg" class="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Pesan
                </label>
                <textarea
                  id="contact-msg"
                  v-model.trim="formModel.message"
                  name="message"
                  maxlength="3200"
                  rows="6"
                  class="min-h-[148px] w-full resize-none rounded-xl border border-slate-300/85 bg-white/90 px-4 py-3 text-sm outline-none ring-violet-500/30 placeholder:text-slate-400 transition focus-visible:border-transparent focus-visible:ring-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                  placeholder="Cerita singkat proyek, timeline, dll."
                />
              </div>
              <AppButton type="submit" variant="primary" class="w-full sm:w-auto">Kirim pesan</AppButton>
            </form>
          </AppCard>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
