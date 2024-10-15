<template>
  <main class="layout-container">
    <div class="shop-header" v-if="server">
      <div class="shop-title-container">
        <router-link to="/shop">
          <img src="@/assets/icons/arrow.png" alt="Изменить сервер">
        </router-link>
        <span class="shop-title">{{ server.name }}</span>
      </div>
      <div class="shop-tabs">
        <button class="button">Привилегии</button>
      </div>
    </div>
    <div class="privileges-list">
      <div
          class="privilege-card"
          v-for="privilege in privileges"
          :key="privilege.name"
      >
        <img class="privilege-image" :src="privilege.image" alt="privilege image">
        <span>{{ privilege.name }}</span>
        <div class="privilege-buy-container">
          <div class="privilege-price-container">
            <div class="privilege-price">
              {{ privilege.price }}
              <img class="entcoins" src="@/assets/icons/entcoins.svg" alt="entcoins">
            </div>
          </div>
        </div>
        <button class="button" @click="showDetails(privilege)">Подробнее</button>
      </div>
    </div>
    <PrivilegesModal v-if="isModalOpen" :selectedPrivilege="selectedPrivilege" @close="isModalOpen = false" />
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

.shop-header {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
  padding: 30px 64px;
  margin-bottom: 30px;
}

.shop-title-container {
  display: flex;
  align-items: baseline;
  gap: 20px;
}

.shop-title {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
}

.shop-tabs {
  display: flex;
  flex-direction: row;
  gap: 21px;
}

.button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff626d, #ffc171);
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.button:hover {
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.privileges-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 29px;
  gap: 29px;
}

.privilege-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  width: 100%;
  padding: 32px;
  text-align: center;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #fff;
  transition: transform 0.3s ease;
}

.privilege-card:hover {
  transform: scale(1.05) translateZ(0px);
}

.privilege-image {
  width: 252px;
  height: 252px;
  color: transparent;
  image-rendering: pixelated;
}

.privilege-buy-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
}

.privilege-price-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
  font-size: 20px;
  line-height: 24px;
  background: hsla(0, 0%, 100%, .05);
  width: 100%;
  padding: 14px 0;
  border-radius: 10px;
}

.privilege-price {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 700;
}

.entcoins {
  width: 20px;
  height: 26px;
}

@media (max-width: 1024px) {
  .privileges-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .privileges-list {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import PrivilegesModal from "../components/privilegesModal.vue";

import rubyCreateImage from '@/assets/icons/Ruby.gif'
import sapphireCreateImage from '@/assets/icons/Sapphire.gif'
import adamantCreateImage from '@/assets/icons/Adamant.gif'
import titanCreateImage from '@/assets/icons/Titan.gif'
import chaosCreateImage from '@/assets/icons/Chaos.gif'
import infinityCreateImage from '@/assets/icons/Infinity.gif'

import toolsCreateImage from '@/assets/icons/Tools.png'
import mobsCreateImage from '@/assets/icons/mobs.png'
import jetpackCreateImage from '@/assets/icons/jetpack.png'
import nanoCreateImage from '@/assets/icons/nano.png'
import resCreateImage from '@/assets/icons/res.png'
import rubypngCreateImage from '@/assets/icons/ruby.png'
import ultrananoCreateImage from '@/assets/icons/Ultranano.png'
import extraarmorCreateImage from '@/assets/icons/Extraarmor.png'
import ultratoolsCreateImage from '@/assets/icons/Ultratools.png'
import beehiveCreateImage from '@/assets/icons/Beehive.png'
import sapphirepngCreateImage from '@/assets/icons/Sapphire.png'
import woolCreateImage from '@/assets/icons/Wool.png'
import matterCreateImage from '@/assets/icons/Matter.png'
import quantCreateImage from '@/assets/icons/Quant.png'
import adamantpngCreateImage from '@/assets/icons/Adamant.png'
import buildCreateImage from '@/assets/icons/Build.png'
import titanpngCreateImage from '@/assets/icons/Titan.png'
import endlessblocksCreateImage from '@/assets/icons/endlessblocks.png'
import cosmeticwingsCreateImage from '@/assets/icons/CosmeticWings.png'
import chaospngCreateImage from '@/assets/icons/Chaos.png'
import ic2CreateImage from '@/assets/icons/Ic2.png'
import ae2kitCreateImage from '@/assets/icons/Ae2kit.png'
import ocCreateImage from '@/assets/icons/Oc.png'
import forestryCreateImage from '@/assets/icons/Forestry.png'
import infinitypngCreateImage from '@/assets/icons/Infinity.png'
import tronCreateImage from '@/assets/icons/Tron.png'
import endlessblocks2CreateImage from '@/assets/icons/endlessblocks2.png'
import endlessblocks3CreateImage from '@/assets/icons/endlessblocks3.png'

const servers = [
  {
    id: 1,
    name: 'HiTech',
    privileges: [
      {
        header: "Ruby",
        body: [
          {
            title: "Основное",
            items: [
              "Префикс в чате и табе: [Ruby]",
              "Вход на заполненный сервер",
              "Возможность писать цветные сообщения в чат",
              "Возможность писать цветные сообщения на табличках",
            ],
          },
          {
            title: "Киты",
            items: [
              { name: "/kit Tools - 1 раз в неделю", image: toolsCreateImage },
              { name: "/kit Mobs - 1 раз в две недели", image: mobsCreateImage },
              { name: "/kit Jetpack - 1 раз в неделю", image: jetpackCreateImage },
              { name: "/kit Nano - 1 раз в неделю", image: nanoCreateImage },
              { name: "/kit Res - 1 раз в 3 дня", image: resCreateImage },
              { name: "/kit Ruby - Одноразовый", image: rubypngCreateImage },
            ],
          },
          {
            title: "Команды",
            items: [
              "/pvp - Вкл.|выкл. режим PvP",
              "/hat - Надеть блок на голову",
              "/feed - Восполнить голод",
              "/heal - Восполнить здоровье",
              "/workbench - Виртуальный верстак",
              "/pickup - Отключить подъем дропа",
              "/trash - Отключить подъем мусора",
            ],
          },
          {
            title: "Дополнительно",
            items: [
              "8 регионов WG по 589824 кубов каждый",
              "Лимит варпов: 6 (3 публичных и 3 приватных)",
              "Создание до 75 магазинов",
              "Больше флагов на свой регион",
            ],
          },
        ],
      },
      {
        header: "Sapphire",
        body: [
          {
            title: "Основное",
            items: [
              "Префикс в чате и табе: [Sapphire]",
              "Вход на заполненный сервер",
              "Возможность писать цветные сообщения в чат",
              "Возможность писать цветные сообщения на табличках",
              "Сохранение инвентаря после смерти. Исключения: Спавн и Край",
            ],
          },
          {
            title: "Киты",
            items: [
              { name: "/kit Tools - 1 раз в неделю", image: toolsCreateImage },
              { name: "/kit Mobs - 1 раз в две недели", image: mobsCreateImage },
              { name: "/kit Jetpack - 1 раз в неделю", image: jetpackCreateImage },
              { name: "/kit Nano - 1 раз в неделю", image: nanoCreateImage },
              { name: "/kit Res - 1 раз в 3 дня", image: resCreateImage },
              { name: "/kit Ultranano - 1 раз в неделю", image: ultrananoCreateImage },
              { name: "/kit Extraarmor - 1 раз в неделю", image: extraarmorCreateImage },
              { name: "/kit Ultratools - 1 раз в неделю", image: ultratoolsCreateImage },
              { name: "/kit Beehive - 1 раз в 30 дней", image: beehiveCreateImage },
              { name: "/kit Sapphire - Одноразовый", image: sapphirepngCreateImage },
            ],
          },
          {
            title: "Команды",
            items: [
              "/pvp - Вкл.|выкл. режим PvP",
              "/hat - Надеть блок на голову",
              "/feed - Восполнить голод",
              "/heal - Восполнить здоровье",
              "/workbench - Виртуальный верстак",
              "/enderchest - Виртуальный эндер-сундук",
              "/pickup - Отключить подъем дропа",
              "/trash - Отключить подъем мусора",
            ],
          },
          {
            title: "Дополнительно",
            items: [
              "15 регионов WG по 589824 кубов каждый",
              "Лимит варпов: 8 (4 публичных и 4 приватных)",
              "Создание до 100 магазинов",
              "Больше флагов на свой регион",
            ],
          },
        ],
      },
      {
        header: "Adamant",
        body: [
          {
            title: "Основное",
            items: [
              "Префикс в чате и табе: [Adamant]",
              "Вход на заполненный сервер",
              "Возможность писать цветные сообщения в чат",
              "Возможность писать цветные сообщения на табличках",
              "Сохранение инвентаря после смерти. Исключения: Спавн и Край",
              "Бессмертие",
              "Возможность летать",
            ],
          },
          {
            title: "Киты",
            items: [
              { name: "/kit Tools - 1 раз в неделю", image: toolsCreateImage },
              { name: "/kit Mobs - 1 раз в две недели", image: mobsCreateImage },
              { name: "/kit Jetpack - 1 раз в неделю", image: jetpackCreateImage },
              { name: "/kit Nano - 1 раз в неделю", image: nanoCreateImage },
              { name: "/kit Res - 1 раз в 3 дня", image: resCreateImage },
              { name: "/kit Ultranano - 1 раз в неделю", image: ultrananoCreateImage },
              { name: "/kit Extraarmor - 1 раз в неделю", image: extraarmorCreateImage },
              { name: "/kit Ultratools - 1 раз в неделю", image: ultratoolsCreateImage },
              { name: "/kit Beehive - 1 раз в 30 дней", image: beehiveCreateImage },
              { name: "/kit Wool - 1 раз в неделю", image: woolCreateImage },
              { name: "/kit Matter - 1 раз в неделю", image: matterCreateImage },
              { name: "/kit Quant - 1 раз в 2 недели", image: quantCreateImage },
              { name: "/kit Adamant - Одноразовый", image: adamantpngCreateImage },
            ],
          },
          {
            title: "Команды",
            items: [
              "/pvp - Вкл.|выкл. режим PvP",
              "/hat - Надеть блок на голову",
              "/feed - Восполнить голод",
              "/heal - Восполнить здоровье",
              "/workbench - Виртуальный верстак",
              "/pickup - Отключить подъем дропа",
              "/trash - Отключить подъем мусора",
              "/repair - Починить предмет",
              "/fly - Включить полёт",
              "/god - Включить бессмертие",
            ],
          },
          {
            title: "Дополнительно",
            items: [
              "25 регионов WG по 589824 кубов каждый",
              "Лимит варпов: 10 (5 публичных и 5 приватных)",
              "Создание до 125 магазинов",
              "Больше флагов на свой регион",
            ],
          },
        ],
      },
      {
        header: "Titan",
        body: [
          {
            title: "Основное",
            items: [
              "Префикс в чате и табе: [Titan]",
              "Вход на заполненный сервер",
              "Возможность писать цветные сообщения в чат",
              "Возможность писать цветные сообщения на табличках",
              "Сохранение инвентаря после смерти. Исключения: Спавн и Край",
              "Бессмертие",
              "Возможность летать",
              "Режим невидимки",
              "Возможность сетать блоки",
            ],
          },
          {
            title: "Киты",
            items: [
              { name: "/kit Tools - 1 раз в неделю", image: toolsCreateImage },
              { name: "/kit Mobs - 1 раз в две недели", image: mobsCreateImage },
              { name: "/kit Jetpack - 1 раз в неделю", image: jetpackCreateImage },
              { name: "/kit Nano - 1 раз в неделю", image: nanoCreateImage },
              { name: "/kit Res - 1 раз в 3 дня", image: resCreateImage },
              { name: "/kit Ultranano - 1 раз в неделю", image: ultrananoCreateImage },
              { name: "/kit Extraarmor - 1 раз в неделю", image: extraarmorCreateImage },
              { name: "/kit Ultratools - 1 раз в неделю", image: ultratoolsCreateImage },
              { name: "/kit Beehive - 1 раз в 30 дней", image: beehiveCreateImage },
              { name: "/kit Wool - 1 раз в неделю", image: woolCreateImage },
              { name: "/kit Matter - 1 раз в неделю", image: matterCreateImage },
              { name: "/kit Quant - 1 раз в 2 недели", image: quantCreateImage },
              { name: "/kit Build - 1 раз в неделю", image: buildCreateImage },
              { name: "/kit Titan - Одноразовый", image: titanpngCreateImage },
            ],
          },
          {
            title: "Команды",
            items: [
              "/pvp - Вкл.|выкл. режим PvP",
              "/hat - Надеть блок на голову",
              "/feed - Восполнить голод",
              "/heal - Восполнить здоровье",
              "/workbench - Виртуальный верстак",
              "/enderchest - Виртуальный эндер-сундук",
              "/pickup - Отключить подъем дропа",
              "/trash - Отключить подъем мусора",
              "/repair - Починить предмет",
              "/fly - Включить полёт",
              "/god - Включить бессмертие",
              "/vanish - Невидимка",
              { name: "/zset - Возможность сетать блоки. Список бесконечных блоков:", image: endlessblocksCreateImage },
            ],
          },
          {
            title: "Дополнительно",
            items: [
              "50 регионов WG по 589824 кубов каждый",
              "Лимит варпов: 12 (6 публичных и 6 приватных)",
              "Создание до 150 магазинов",
              "Больше флагов на свой регион",
              { name: "Возможность выбрать кастомные крылья из мода CosmeticWings (кнопка Y)", image: cosmeticwingsCreateImage },
            ],
          },
        ],
      },
      {
        header: "Chaos",
        body: [
          {
            title: "Основное",
            items: [
              "Префикс [Chaos]",
              "Вход на заполненный сервер",
              "Возможность писать цветные сообщения в чат",
              "Возможность писать цветные сообщения на табличках",
              "Сохранение инвентаря после смерти. Исключения: Спавн и Край",
              "Бессмертие",
              "Возможность летать",
              "Режим невидимки",
              "Возможность сетать блоки",
              "Доступ к отдельному чату для модераторов",
              "Возможность выдавать предупреждения",
              "Возможность кикать",
              "Возможность мутить на время",
              "Возможность банить на время/навсегда",
              "Телепорты без подтверждения",
              "Возможность телепортироваться по меткам на карте",
            ],
          },
          {
            title: "Киты",
            items: [
              { name: "/kit Tools - 1 раз в неделю", image: toolsCreateImage },
              { name: "/kit Mobs - 1 раз в две недели", image: mobsCreateImage },
              { name: "/kit Jetpack - 1 раз в неделю", image: jetpackCreateImage },
              { name: "/kit Nano - 1 раз в неделю", image: nanoCreateImage },
              { name: "/kit Res - 1 раз в 3 дня", image: resCreateImage },
              { name: "/kit Ultranano - 1 раз в неделю", image: ultrananoCreateImage },
              { name: "/kit Extraarmor - 1 раз в неделю", image: extraarmorCreateImage },
              { name: "/kit Ultratools - 1 раз в неделю", image: ultratoolsCreateImage },
              { name: "/kit Beehive - 1 раз в 30 дней", image: beehiveCreateImage },
              { name: "/kit Wool - 1 раз в неделю", image: woolCreateImage },
              { name: "/kit Matter - 1 раз в неделю", image: matterCreateImage },
              { name: "/kit Quant - 1 раз в 2 недели", image: quantCreateImage },
              { name: "/kit Build - 1 раз в неделю", image: buildCreateImage },
              { name: "/kit Chaos - Одноразовый", image: chaospngCreateImage },
            ],
          },
          {
            title: "Команды",
            items: [
              "/pvp - Вкл.|выкл. режим PvP",
              "/hat - Надеть блок на голову",
              "/feed - Восполнить голод",
              "/heal - Восполнить здоровье",
              "/workbench - Виртуальный верстак",
              "/enderchest - Виртуальный эндер-сундук",
              "/pickup - Отключить подъем дропа",
              "/trash - Отключить подъем мусора",
              "/repair - Починить предмет",
              "/fly - Включить полёт",
              "/god - Включить бессмертие",
              "/vanish - Невидимка",
              { name: "/zset - Возможность сетать блоки. Список бесконечных блоков:", image: endlessblocks2CreateImage },
            ],
          },
          {
            title: "Команды Модератора",
            items: [
              "/tppos x y z - Телепорт по координатам",
              "/tp [ник] - Телепорт к игроку без подтверждения",
              "/tphere [ник] - Телепорт игрока к себе без подтверждения",
              "/back - Вернуться назад после телепортации",
              "/warn [ник] [причина] - Выдать предупреждение игроку",
              "/kick [ник] [причина] - Кикнуть игрока",
              "/tempmute [ник] [время] [формат времени] [причина] - Временно замутить игрока",
              "/tempban [ник] [время] [формат времени] [причина] - Временно забанить игрока",
              "/ban [ник] [причина] - Навсегда забанить игрока",
              "/checkban [ник] - Информация о статусе наказаний игрока",
              "/dupeip [ник/IP] - Информация о всех игроках с повторяющимися IP адресами",
              "/history [ник] - История нарушений игрока",
              "/seen [ник] - Узнать как давно игрок был в сети",
              "/oi nick [ник] - Посмотреть инвентарь игрока",
              "/oe nick [ник] - Посмотреть эндерчест игрока",
              "/helpop (/l) [msg] - Доступ к модераторскому чату",
            ],
          },
          {
            title: "Дополнительно",
            items: [
              "75 регионов WG по 589824 кубов каждый",
              "Лимит варпов: 16 (8 публичных и 8 приватных)",
              "Создание до 175 магазинов",
              "Больше флагов на свой регион",
              { name: "Возможность выбрать кастомные крылья из мода CosmeticWings (кнопка Y)", image: cosmeticwingsCreateImage },
            ],
          },
          {
            title: "Запреты",
            items: [
              "Обязательно ознакомиться с правилами для игроков с привилегией Chaos <a href='/rules' style='text-decoration: none; color: #fff;'>(подробнее)</a>",
            ],
          },
        ],
      },
      {
        header: "Infinity",
        body: [
          {
            title: "Основное",
            items: [
              "Префикс [Infinity]",
              "Вход на заполненный сервер",
              "Возможность писать цветные сообщения в чат",
              "Возможность писать цветные сообщения на табличках",
              "Сохранение инвентаря после смерти. Исключения: Спавн и Край",
              "Бессмертие",
              "Возможность летать",
              "Режим невидимки",
              "Возможность сетать блоки",
              "Доступ к отдельному чату для модераторов",
              "Возможность выдавать предупреждения",
              "Возможность кикать",
              "Возможность мутить на время",
              "Возможность банить на время/навсегда",
              "Телепорты без подтверждения",
              "Возможность телепортироваться по меткам на карте",
            ],
          },
          {
            title: "Киты",
            items: [
              { name: "/kit Tools - 1 раз в неделю", image: toolsCreateImage },
              { name: "/kit Mobs - 1 раз в две недели", image: mobsCreateImage },
              { name: "/kit Jetpack - 1 раз в неделю", image: jetpackCreateImage },
              { name: "/kit Nano - 1 раз в неделю", image: nanoCreateImage },
              { name: "/kit Res - 1 раз в 3 дня", image: resCreateImage },
              { name: "/kit Ultranano - 1 раз в неделю", image: ultrananoCreateImage },
              { name: "/kit Extraarmor - 1 раз в неделю", image: extraarmorCreateImage },
              { name: "/kit Ultratools - 1 раз в неделю", image: ultratoolsCreateImage },
              { name: "/kit Beehive - 1 раз в 30 дней", image: beehiveCreateImage },
              { name: "/kit Wool - 1 раз в неделю", image: woolCreateImage },
              { name: "/kit Matter - 1 раз в неделю", image: matterCreateImage },
              { name: "/kit Quant - 1 раз в 2 недели", image: quantCreateImage },
              { name: "/kit Build - 1 раз в неделю", image: buildCreateImage },
              { name: "/kit Ic2 - 1 раз в 30 дней", image: ic2CreateImage },
              { name: "/kit Ae2 - 1 раз в 30 дней", image: ae2kitCreateImage },
              { name: "/kit Oc - 1 раз в 30 дней", image: ocCreateImage },
              { name: "/kit Forestry - 1 раз в 30 дней", image: forestryCreateImage },
              { name: "/kit Infinity - Одноразовый", image: infinitypngCreateImage },
              { name: "/kit Tron - Одноразовый. Уникальный скин, с визуальным эффектом", image: tronCreateImage },
            ],
          },
          {
            title: "Команды",
            items: [
              "/pvp - Вкл.|выкл. режим PvP",
              "/hat - Надеть блок на голову",
              "/feed - Восполнить голод",
              "/heal - Восполнить здоровье",
              "/workbench - Виртуальный верстак",
              "/enderchest - Виртуальный эндер-сундук",
              "/pickup - Отключить подъем дропа",
              "/trash - Отключить подъем мусора",
              "/repair - Починить предмет",
              "/fly - Включить полёт",
              "/god - Включить бессмертие",
              "/vanish - Невидимка",
              { name: "/zset - Возможность сетать блоки. Список бесконечных блоков:", image: endlessblocks3CreateImage },
            ],
          },
          {
            title: "Команды Модератора",
            items: [
              "/tppos x y z - Телепорт по координатам",
              "/tp [ник] - Телепорт к игроку без подтверждения",
              "/tphere [ник] - Телепорт игрока к себе без подтверждения",
              "/back - Вернуться назад после телепортации",
              "/warn [ник] [причина] - Выдать предупреждение игроку",
              "/kick [ник] [причина] - Кикнуть игрока",
              "/tempmute [ник] [время] [формат времени] [причина] - Временно замутить игрока",
              "/tempban [ник] [время] [формат времени] [причина] - Временно забанить игрока",
              "/ban [ник] [причина] - Навсегда забанить игрока",
              "/checkban [ник] - Информация о статусе наказаний игрока",
              "/dupeip [ник/IP] - Информация о всех игроках с повторяющимися IP адресами",
              "/history [ник] - История нарушений игрока",
              "/seen [ник] - Узнать как давно игрок был в сети",
              "/oi nick [ник] - Посмотреть инвентарь игрока",
              "/oe nick [ник] - Посмотреть эндерчест игрока",
              "/helpop (/l) [msg] - Доступ к модераторскому чату",
            ],
          },
          {
            title: "Дополнительно",
            items: [
              "100 регионов WG по 589824 кубов каждый",
              "Лимит варпов: 20 (10 публичных и 10 приватных)",
              "Создание до 200 магазинов",
              "Больше флагов на свой регион",
              { name: "Возможность выбрать кастомные крылья из мода CosmeticWings (кнопка Y)", image: cosmeticwingsCreateImage },
            ],
          },
          {
            title: "Запреты",
            items: [
              "Обязательно ознакомиться с правилами для игроков с привилегией Infinity <a href='/rules' style='text-decoration: none; color: #fff;'>(подробнее)</a>",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'HardTech',
    privileges: [
      {
        header: "Ruby",
        body: [
          {
            title: "Основное",
            items: [
              "Префикс в чате и табе: [Ruby]",
              "Вход на заполненный сервер",
              "Возможность писать цветные сообщения в чат",
              "Возможность писать цветные сообщения на табличках",
            ],
          },
        ],
      },
    ],
  }, // Добавляйте дальше сервера и описание их привелегий, если это нужно :D
];

const privilegesData = [
  { name: 'Ruby', price: 149, image: rubyCreateImage },
  { name: 'Sapphire', price: 299, image: sapphireCreateImage },
  { name: 'Adamant', price: 499, image: adamantCreateImage },
  { name: 'Titan', price: 899, image: titanCreateImage },
  { name: 'Chaos', price: 1999, image: chaosCreateImage },
  { name: 'Infinity', price: 9999, image: infinityCreateImage },
];

const route = useRoute();
const server = ref(null);
const privileges = ref([]);
const isModalOpen = ref(false);
const selectedPrivilege = ref(null);

onMounted(() => {
  loadServerData(route.params.id);
});

watch(route, (newRoute) => {
  loadServerData(newRoute.params.id);
});

function loadServerData(serverId) {
  const foundServer = servers.find((s) => s.id === Number(serverId));
  if (foundServer) {
    server.value = foundServer;
    privileges.value = privilegesData.map((priv) => {
      const serverPrivilege = foundServer.privileges.find(p => p.header === priv.name);
      return { ...priv, details: serverPrivilege ? serverPrivilege.body : [] };
    });
  } else {
    server.value = null;
    privileges.value = [];
  }
}

function showDetails(privilege) {
  selectedPrivilege.value = privilege;
  isModalOpen.value = true;
}

const lockScroll = () => {
  document.body.style.overflowY = 'hidden';
  document.body.style.overflowX = 'auto';
  document.documentElement.style.overflowY = 'hidden';
  document.documentElement.style.overflowX = 'auto';
};

const unlockScroll = () => {
  document.body.style.overflowY = '';
  document.body.style.overflowX = 'hidden';
  document.documentElement.style.overflowY = '';
  document.documentElement.style.overflowX = 'hidden';
};

watch(isModalOpen, (newValue) => {
  if (newValue) {
    lockScroll();
  } else {
    unlockScroll();
  }
});

onBeforeUnmount(() => {
  unlockScroll();
});
</script>