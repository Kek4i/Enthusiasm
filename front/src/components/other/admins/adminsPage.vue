<template>
  <main class="layout-container">
    <div class="admins-page">
      <div class="page-block">
        <PageTitle title="Наша команда" />
        <div class="admins-page__description">
          <p>На каждом сервере существует свой персонал со своими должностями и обязанностями.</p>
          <p>На данной странице мы собрали всю нашу команду.</p>
        </div>
      </div>

      <div v-for="(server, index) in servers" :key="index" class="page-block">
        <PageTitle :title="server.title" />
        <div class="admins-page__cards">
          <AdminCard
              v-for="(admin, idx) in server.admins"
              :key="idx"
              :nick="admin.nick"
              :avatar="admin.avatar"
              :role="admin.role"
              :links="admin.links"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.layout-container {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.admins-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.page-block {
  display: flex;
  padding: 64px 96px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.admins-page__description {
  color: #fff;
  font-size: 20px;
}

p {
  margin: 0;
}

.admins-page__cards {
  display: grid;
  gap: 16px;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
}

</style>

<script setup>
import PageTitle from '@/components/other/admins/components/PageTitle.vue'
import AdminCard from '@/components/other/admins/components/AdminCard.vue'
import RivavivaCreateImage from '@/assets/icons/Rivaviva.png'
import PilyaaaaCreateImage from '@/assets/icons/Pilyaaaa.png'
import srcccCreateImage from '@/assets/icons/srccc.png'
import KyKyPy3aCreateImage from '@/assets/icons/KyKyPy3a.png'
import supernovusCreateImage from '@/assets/icons/supernovus.png'
import VirusnyakCreateImage from '@/assets/icons/Virusnyak.png'
import ChocolateBountyCreateImage from '@/assets/icons/ChocolateBounty.png'
import XomaMilashCreateImage from '@/assets/icons/XomaMilash.png'
import SkoutCreateImage from '@/assets/icons/Skout.png'
import lamaCreateImage from '@/assets/icons/lama.png'
import YugiTheDeadCreateImage from '@/assets/icons/YugiTheDead.png'
import grangoCreateImage from '@/assets/icons/grango.png'
import raTuhCreateImage from '@/assets/icons/raTuh.png'
import SteelfontCreateImage from '@/assets/icons/Steelfont.png'
import NeOxygenCreateImage from '@/assets/icons/NeOxygen.png'
import guzyaCreateImage from '@/assets/icons/guzya.png'
import milhovskiCreateImage from '@/assets/icons/milhovski.png'
import _reflexedCreateImage from '@/assets/icons/_reflexed.png'
import MAD_RTXCreateImage from '@/assets/icons/MAD_RTX.png'
import BlxckdssCreateImage from '@/assets/icons/Blxckdss.png'
import cracker7CreateImage from '@/assets/icons/cracker7.png'
import HiroshiCreateImage from '@/assets/icons/Hiroshi.png'
import katrinkaCreateImage from '@/assets/icons/katrinka.png'
import cookiiekomoriCreateImage from '@/assets/icons/cookiiekomori.png'
import KamenitCreateImage from '@/assets/icons/Kamenit.png'
import Gigman_69CreateImage from '@/assets/icons/Gigman_69.png'
import KisunyCreateImage from '@/assets/icons/Kisuny.png'
import AsphyxijaCreateImage from '@/assets/icons/Asphyxija.png'
import error1number404CreateImage from '@/assets/icons/error1number404.png'
import MrSlibbaCreateImage from '@/assets/icons/MrSlibba.png'
import lLuffyCreateImage from '@/assets/icons/lLuffy.png'
import TheTzdDarkCreateImage from '@/assets/icons/TheTzdDark.png'
import ggwinCreateImage from '@/assets/icons/ggwin.png'
import CyripCreateImage from '@/assets/icons/Cyrip.png'
import TimeDustikCreateImage from '@/assets/icons/TimeDustik.png'
import mirromanCreateImage from '@/assets/icons/mirroman.png'
import KOT3KCreateImage from '@/assets/icons/KOT3K.png'
import SkyDrive_CreateImage from '@/assets/icons/SkyDrive_.png'
import TohruCreateImage from '@/assets/icons/Tohru.png'
import GeniusCreateImage from '@/assets/icons/Genius.png'

const servers = [
  {
    title: 'Администрация',
    admins: [
      { nick: 'Rivaviva', avatar: RivavivaCreateImage, role: 'Основатель', links: [{ type: 'discord', url: 'https://discord.com/users/263370341068439553' }] },
      { nick: 'Pilyaaaa', avatar: PilyaaaaCreateImage, role: 'Основатель', links: [{ type: 'discord', url: 'https://discord.com/users/355710510760460289' }, { type: 'telegram', url: 'https://t.me/opulat' }] },
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Админ состава', links: [{ type: 'discord', url: 'https://discord.com/users/320449433747587072' }, { type: 'telegram', url: 'https://t.me/srccc74' }] },
      { nick: 'KyKyPy3a', avatar: KyKyPy3aCreateImage, role: 'Админ форума', links: [{ type: 'discord', url: 'https://discord.com/users/410478161717886987' }] },
      { nick: 'NeOxygen', avatar: NeOxygenCreateImage, role: 'Админ поддержки', links: [{ type: 'discord', url: 'https://discord.com/users/737990554452754504' }, { type: 'telegram', url: 'https://t.me/ne0xygen' }] },
    ],
  },
  {
    title: 'HardTech #1',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'Virusnyak', avatar: VirusnyakCreateImage, role: 'Куратор' },
      { nick: 'ChocolateBounty', avatar: ChocolateBountyCreateImage, role: 'Гл. модератор' },
      { nick: 'Skout', avatar: SkoutCreateImage, role: 'Модератор' },
      { nick: 'XomaMilash', avatar: XomaMilashCreateImage, role: 'Модератор' },
      { nick: 'lama', avatar: lamaCreateImage, role: 'Помощник' },
    ],
  },
  {
    title: 'HardTech #2',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'Virusnyak', avatar: VirusnyakCreateImage, role: 'Куратор' },
      { nick: 'ChocolateBounty', avatar: ChocolateBountyCreateImage, role: 'Гл. модератор' },
      { nick: 'YugiTheDead', avatar: YugiTheDeadCreateImage, role: 'Модератор' },
      { nick: 'grango', avatar: grangoCreateImage, role: 'Модератор' },
    ],
  },
  {
    title: 'HardTech #3',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'Virusnyak', avatar: VirusnyakCreateImage, role: 'Куратор' },
      { nick: 'ChocolateBounty', avatar: ChocolateBountyCreateImage, role: 'Гл. модератор' },
      { nick: 'grango', avatar: grangoCreateImage, role: 'Модератор' },
    ],
  },
  {
    title: 'HardTech #4',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'Virusnyak', avatar: VirusnyakCreateImage, role: 'Куратор' },
      { nick: 'ChocolateBounty', avatar: ChocolateBountyCreateImage, role: 'Гл. модератор' },
      { nick: 'raTuh', avatar: raTuhCreateImage, role: 'Модератор' },
    ],
  },
  {
    title: 'HardTech #5',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'Virusnyak', avatar: VirusnyakCreateImage, role: 'Куратор' },
      { nick: 'ChocolateBounty', avatar: ChocolateBountyCreateImage, role: 'Гл. модератор' },
      { nick: 'Steelfont', avatar: SteelfontCreateImage, role: 'Помощник' },
    ],
  },
  {
    title: 'HiTech 1.20.1 #1',
    admins: [
      { nick: 'supernovus', avatar: supernovusCreateImage, role: 'Разработчик' },
      { nick: 'NeOxygen', avatar: NeOxygenCreateImage, role: 'Куратор' },
      { nick: 'guzya', avatar: guzyaCreateImage, role: 'Гл. модератор' },
      { nick: 'milhovski', avatar: milhovskiCreateImage, role: 'Модератор' },
      { nick: '_reflexed', avatar: _reflexedCreateImage, role: 'Модератор' },
    ],
  },
  {
    title: 'HiTech 1.20.1 #2',
    admins: [
      { nick: 'supernovus', avatar: supernovusCreateImage, role: 'Разработчик' },
      { nick: 'NeOxygen', avatar: NeOxygenCreateImage, role: 'Куратор' },
      { nick: 'guzya', avatar: guzyaCreateImage, role: 'Гл. модератор' },
      { nick: 'MAD_RTX', avatar: MAD_RTXCreateImage, role: 'Модератор' },
      { nick: 'Blxckdss', avatar: BlxckdssCreateImage, role: 'Модератор' },
      { nick: 'cracker7', avatar: cracker7CreateImage, role: 'Модератор' },
      { nick: 'Hiroshi', avatar: HiroshiCreateImage, role: 'Помощник' },
    ],
  },
  {
    title: 'TerraFirmaCreate #1',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'katrinka', avatar: katrinkaCreateImage, role: 'Куратор' },
      { nick: 'cookiiekomori', avatar: cookiiekomoriCreateImage, role: 'Гл. модератор' },
    ],
  },
  {
    title: 'TerraFirmaCreate #2',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'katrinka', avatar: katrinkaCreateImage, role: 'Куратор' },
      { nick: 'cookiiekomori', avatar: cookiiekomoriCreateImage, role: 'Гл. модератор' },
      { nick: 'Kamenit', avatar: KamenitCreateImage, role: 'Помощник' },
    ],
  },
  {
    title: 'TerraFirmaCreate #3',
    admins: [
      { nick: 'srccc', avatar: srcccCreateImage, role: 'Разработчик' },
      { nick: 'katrinka', avatar: katrinkaCreateImage, role: 'Куратор' },
      { nick: 'cookiiekomori', avatar: cookiiekomoriCreateImage, role: 'Гл. модератор' },
      { nick: 'Gigman_69', avatar: Gigman_69CreateImage, role: 'Помощник' },
    ],
  },
  {
    title: 'MI:FoundationNew #1',
    admins: [
      { nick: 'Kisuny', avatar: KisunyCreateImage, role: 'Разработчик' },
      { nick: 'Asphyxija', avatar: AsphyxijaCreateImage, role: 'Гл. модератор' },
      { nick: 'Asphyxija', avatar: AsphyxijaCreateImage, role: 'Модератор' },
      { nick: 'error1number404', avatar: error1number404CreateImage, role: 'Модератор' },
      { nick: 'MrSlibba', avatar: MrSlibbaCreateImage, role: 'Модератор' },
    ],
  },
  {
    title: 'Ind:Upgrade',
    admins: [
      { nick: 'lLuffy', avatar: lLuffyCreateImage, role: 'Разработчик' },
      { nick: 'TheTzdDark', avatar: TheTzdDarkCreateImage, role: 'Разработчик' },
      { nick: 'ggwin', avatar: ggwinCreateImage, role: 'Куратор' },
      { nick: 'Cyrip', avatar: CyripCreateImage, role: 'Гл. модератор' },
      { nick: 'TimeDustik', avatar: TimeDustikCreateImage, role: 'Модератор' },
      { nick: 'mirroman', avatar: mirromanCreateImage, role: 'Модератор' },
      { nick: 'KOT3K', avatar: KOT3KCreateImage, role: 'Помощник' },
    ],
  },
  {
    title: 'HiTech',
    admins: [
      { nick: 'SkyDrive_', avatar: SkyDrive_CreateImage, role: 'Разработчик' },
      { nick: 'KyKyPy3a', avatar: KyKyPy3aCreateImage, role: 'Куратор' },
      { nick: 'Tohru', avatar: TohruCreateImage, role: 'Гл. модератор' },
      { nick: 'Genius', avatar: GeniusCreateImage, role: 'Модератор' },
    ],
  },
]
</script>