<template>
    <div class="stars-container">
      <div v-for="n in 300" :key="n" class="star"></div>
    </div>

  <OfferSection
        :announcement="announcement"
        :serverTitle="serverTitle"
        :serverDate="serverDate"
    />
    <FeatureList
        :serverFeaturesTitle="serverFeaturesTitle"
        :features="features"
    />
    <GregTechFeatures
        :whatIsGregTechTitle="whatIsGregTechTitle"
        :gregTechFeatures="gregTechFeatures"
    />
    <ModList
        :modsTitle="modsTitle"
        :modTypes="modTypes"
    />
</template>

<style scoped>
.stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
  will-change: transform;
  clip-path: inset(0 0 0 0);
}

.star {
  position: absolute;
  width: var(--size, 2px);
  height: var(--size, 2px);
  background-color: white;
  border-radius: 50%;
  opacity: 0.7;
  top: calc(100vh * var(--random-y));
  left: calc(100vw * var(--random-x));
  animation: moveStar var(--speed) linear infinite;
}

@keyframes moveStar {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(calc(50px * var(--direction-x)), calc(50px * var(--direction-y)));
  }
  50% {
    transform: translate(calc(100px * var(--direction-x)), calc(100px * var(--direction-y)));
  }
  75% {
    transform: translate(calc(50px * var(--direction-x)), calc(50px * var(--direction-y)));
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>


<script setup>
import OfferSection from './components/OfferSection.vue';
import FeatureList from './components/FeatureList.vue';
import GregTechFeatures from './components/GregTechFeatures.vue';
import ModList from './components/ModList.vue';

import multi_progressionCreateImage from '@/assets/icons/multi_progression.png'
import artefactsCreateImage from '@/assets/icons/artefacts.png'
import economyCreateImage from '@/assets/icons/economy.png'
import custom_contentCreateImage from '@/assets/icons/custom_content.png'
import many_way_to_farmCreateImage from '@/assets/icons/many_way_to_farm.png'
import multi_blocksCreateImage from '@/assets/icons/multi_blocks.png'
import dungeonsCreateImage from '@/assets/icons/dungeons.png'
import veinsCreateImage from '@/assets/icons/meat.png'


import { onMounted } from 'vue';

onMounted(() => {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const randomX = Math.random();
    const randomY = Math.random();
    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;
    const speed = `${Math.random() * 200 + 200}s`;
    const size = `${Math.random() * 2 + 1}px`;

    star.style.setProperty('--random-x', randomX);
    star.style.setProperty('--random-y', randomY);
    star.style.setProperty('--direction-x', directionX);
    star.style.setProperty('--direction-y', directionY);
    star.style.setProperty('--speed', speed);
    star.style.setProperty('--size', size);

    star.style.setProperty('top', `${containerHeight * randomY}px`);
    star.style.setProperty('left', `${containerWidth * randomX}px`);
  });
});

const announcement = "Открытие приватного сервера";
const serverTitle = "MI:Foundation NEW";
const serverDate = "09.08.2024";
const serverFeaturesTitle = "Особенности сервера";
const features = [
  {
    title: "Сочетание технологий и магии",
    description: "Некоторые выбирают только <span style='color: #007bff'>Технологии</span> или\n" +
        "<span style='color: #007bff'>Магию</span>. Но смельчаки смогут раскрыть для\n" +
        "    себя уникальные возможности синергии развития. Магия усилит технологии, а технологии\n" +
        "    усилят магию. Стройте заводы, автоматизируйте и творите чудеса.",
    image: multi_progressionCreateImage
  },
  {
    title: "Система развития персонажа",
    description: "Могущественные предметы значительно усиливают твои характеристики, добавляют " +
        "<span style='color: #007bff'>уникальные</span> механики и эффекты. Уникальное оружие увеличивает урон и " +
        "открывает новые возможности в бою.",
    image: artefactsCreateImage
  },
  {
    title: "Внутриигровая экономика",
    description: "Уникальная система добычи внутриигровой валюты, основанная на глубоком исследовании мира, " +
        "<span style='color: #007bff'>идеально</span> подходит для совершения сделок с другими игроками и " +
        "покупок в нашем магазине.",
    image: economyCreateImage
  },
  {
    title: "Собственные разработки",
    description: "Сделано невероятно много <span style='color: #007bff'>собственных</span> изменений в прогрессии, " +
        "большая база квестов с полезными наградами, добавлено множество приятных наград, каждый сможет разобраться, " +
        "но сможет ли каждый дойти до конца?",
    image: custom_contentCreateImage
  },
];

const whatIsGregTechTitle = "Что такое MI:Foundation?";
const gregTechFeatures = [
  {
    title: "Разные пути добычи ресурсов",
    description: "Открой для себя разнообразные способы <span style='color: #007bff'>добычи ресурсов</span>. " +
        "Пчёлы создают материалы и соты, карьеры используют данные о планетах, собранные спутником на орбите, а " +
        "дроны добывают ценные ресурсы в космосе.",
    image: many_way_to_farmCreateImage
  },
  {
    title: "Множество новых мультиблоков",
    description: "Новые <span style='color: #007bff'>мультиблоки</span> открывают широкие возможности для исследования " +
        "и прогресса, делая игровой процесс увлекательным и многогранным.",
    image: multi_blocksCreateImage
  },
  {
    title: "Игровой мир обновился",
    description: "Добавлены <span style='color: #007bff'>новые структуры</span> с обилием лута, а также изменены способы добычи большинства ресурсов, делая процесс более захватывающим и интересным.",
    image: dungeonsCreateImage
  },
  {
    title: "Мясной эндгейм",
    description: "Погружайся в тёмные глубины эндгейма, где мясные технологии достигают апогея. Имплантируй жуткие " +
        "улучшения в своё тело и используй древние энзимы для создания рудного жира и переработки руды. Создай " +
        "зловещую гармонию, объединяя механизмы и плоть для максимальной эффективности.",
    image: veinsCreateImage
  },
];

const modsTitle = "Список модов";
const modTypes = {
  "Основные моды": [
    {
      name: "Modern Industrialization",
      description: "Технологический мод, в котором конечной целью является <b>тотальная автоматизация</b>."
    },
    {
      name: "Applied Energistics 2",
      description: "Мод, добавляющий систему хранения, которая позволит автоматизировать абсолютно все"
    },
    {
      name: "Applied Botanics",
      description: "Аддон для AE2 и Botania, объединяет их"
    },
    {
      name: "MEGA Cells",
      description: "Аддон для AE2, добавляет ячейки большего размера"
    },
    {
      name: "Ad Astra",
      description: "Мод на технологии и исследование космоса"
    },
    {
      name: "NEEPMeat",
      description: "Мод на мясо и мясные технологии, очень кроваво!"
    },
    {
      name: "Flux Networks",
      description: "Мод позволит игроку использовать беспроводные энергетические системы"
    },
    {
      name: "Excorrelation",
      description: "Аналог АЕ2, но более бюджетный, для ранних этапов игры"
    },
    {
      name: "Spectrum",
      description: "Невероятно большой мод про магию красок!"
    },
    {
      name: "Storage Drawers",
      description: "Ящики, которые станут вашим первым другом в хранении вещей"
    },
    {
      name: "Bewitchment",
      description: "Магический мод добавляющий ведьмовство"
    },
    {
      name: "Traveler Anchors",
      description: "Классические якори телепортации из EnderIO"
    },
    {
      name: "Botania",
      description: "Техно/магический мод про цветы и ману"
    },
    {
      name: "Mythic Metals",
      description: "Мод добавляет множество новых магических металлов"
    },
    {
      name: "The Bumblezone",
      description: "Мод добавляющий измерение пчёл и всё что связано с пчёлами"
    },
    {
      name: "Kibe",
      description: "Мод-утилита, добавляет много разнообразных утилити предметов"
    },
    {
      name: "Whisperwoods",
      description: "Мод добавляет разную живность в мир"
    },
    {
      name: "Farmer's Delight",
      description: "Мод добавляет множество новой еды"
    },
    {
      name: "Diet",
      description: "Мод добавляет систему диеты, поощеряя прием разных блюд"
    },
    {
      name: "Probbably Chests",
      description: "Мод добавялет новых мимиков и много нового лута в мире"
    },
    {
      name: "Numismatic Overhaul",
      description: "Мод добавляет монетки и магазин, а так же используется в нашем игровом магазине"
    },
    {
      name: "Gofish",
      description: "Мод прокачивает систему рыбалки"
    },
    {
      name: "Majrusz's Accessories",
      description: "Мод добавляет множество новых уникальных артефактов"
    },
    {
      name: "Artifacts",
      description: "Мод добавялет ещё больше артефактов"
    },
    {
      name: "Things",
      description: "Артефакты-артефакты, и ещё раз <b>артефакты</b>!!!"
    },
    {
      name: "Simply Swords",
      description: "Мод добавляет множество нового оружия"
    },
    {
      name: "Waystones",
      description: "Камни путешествий, позволяют телепортироваться по миру, ценой монеток"
    },
    {
      name: "End Remastered",
      description: "Изменен поход в энд, теперь для входа в энд необходимо собрать 12 разных глаз"
    },
    {
      name: "Bosses of Mass Destruction",
      description: "Больше новых боссов"
    },
    {
      name: "AdventureZ",
      description: "Ещё больше мобов и боссов"
    },
    {
      name: "FTB Quests",
      description: "Система квестов"
    }
  ],
  "Клиентские моды": [
    {
      name: "REI",
      description: "Добавляет возможность смотреть крафты и систему закладок для этих крафтов"
    },
    {
      name: "Controlling",
      description: "Добавляет более простой способ переназначить игровые кнопки, добавляет поиск по кнопками и категориям"
    },
    {
      name: "Dynamic FPS",
      description: "Уменьшает потребления ресурсов игры когда вы сворачиваете игру, почти что до нуля"
    },
    {
      name: "Wthit",
      description: "Подробно описывает блок на который можно посмотреть"
    },
    {
      name: "Legendary Tooltips",
      description: "Множество новых рамок на разнообразных предметах"
    },
    {
      name: "Iris",
      description: "Поддержкак шейдеров"
    },
    {
      name: "Xaero's Minimap",
      description: "Мини карта"
    },
    {
      name: "Xaero's World Map",
      description: "Глобальная мини карта на кнопку M"
    },
    {
      name: "Apple Skin",
      description: "Отображает сколько голода и насыщения восстановит вся еда в игре"
    },
    {
      name: "3D Skin Layers",
      description: "Делает скин более 3D-шным"
    },
    {
      name: "EmoteCraft",
      description: "Добавляет в игру анимации персонажу, анимации уже предзагружены на сервере!"
    },
    {
      name: "Better Clouds",
      description: "Улучшенная оптимизация на облака, а так меняет их внешний вид "
    },
    {
      name: "Biome Particle Weather",
      description: "Добавляет разнообразные частицы в разных биомах, в аду и обычном мире"
    },
    {
      name: "Charmonium",
      description: "Добавляет природные звуки для биомов и пещер, а также вводит дополнительную фоновую музыку"
    },
    {
      name: "Chat Heads",
      description: "ГоЛоВы ИгРоКоВ в ЧаТе"
    },
    {
      name: "Chat Patches",
      description: "Невероятно сильно меняет чат в лучшую сторону, добавляет сохранение истории сообщений в чате и т.д."
    },
    {
      name: "Eating Animation",
      description: "Добавляет анимацию поедания для большинства еды, поддерживается еда из мода Farmer's Delight"
    },
    {
      name: "Extra Sounds",
      description: "Добавляет множество новых звуков в игру, например приятные щелчки печатанья в чат!"
    },
    {
      name: "Falling Leaves",
      description: "Добавляет листве приятные эффекты падающих листьев"
    },
    {
      name: "Litematica",
      description: "Добавляет возможность переносить свои постройки на сервер по схемам"
    },
    {
      name: "Mini Effects",
      description: "Убирает надоедающий интерфейс зелий, делая его очень минималистичным"
    },
    {
      name: "Moon Phase Info+",
      description: "Добавляет интерфейс индикации фазы луны в мир "
    },
    {
      name: "Paginated Advancements",
      description: "Увеличивает размер интерфейса ачивок и позволяет закреплять определенные категории"
    },
    {
      name: "Traveler's Titles",
      description: "Приятные надписи при входе в новый биом/мир"
    },
    {
      name: "Visuality",
      description: "Добавляет новые разновидности частицы, немного дополняющие и улучшающие вид игры"
    },
    {
      name: "Zoomify",
      description: "Это самый простой, самый настраиваемый и самый сексуально выглядящий зум-мод, который вы когда-либо найдете."
    },
  ],
  "Серверные моды": [
    {
      name: "No Chat Reports",
      description: "Запрещает моджангам смотреть за историей чата и принимать жалобы от игроков, котоырм не " +
          "понравились ваши слова"
    },
    {
      name: "Starlight",
      description: "Оптимизация света на стороне сервера"
    },
    {
      name: "Let Me Despawn",
      description: "оптимизирует игру, меняя механику деспауна враждебных мобов"
    },
    {
      name: "Spark",
      description: "Позволяет отслеживать нагрузку на сервер и профилировать его"
    },
    {
      name: "Observable",
      description: "Как Spark, но визуально удобнее"
    },
    {
      name: "Nether Portal Fix",
      description: "Позволяет правильно считать расстояние в аду, испроавляя множество проблем с порталом в ад"
    },
    {
      name: "Terralith",
      description: "Новая генерация мира"
    },
    {
      name: "Tectonic",
      description: "Увеличивает лимиты гор, шахты, очень хорошо сочетается с модом Terralith"
    },
    {
      name: "ServerCore",
      description: "Оптимизационный мод"
    },
    {
      name: "Universal Graves",
      description: "Могилки игроков после смерти"
    },
    {
      name: "Moog's Voyager Structures",
      description: "Невероятно много новых структур"
    },
    {
      name: "When Dungeons Arise",
      description: "Множество новых структур и данжей, невероятных размеров"
    },
    {
      name: "И так далее…",
      description: "К сожалению вместить весь список модов мы не смогли, уж слишком он велик ☹️"
    },
  ]
};

</script>