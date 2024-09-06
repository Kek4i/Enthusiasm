<template>
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
  <ProgressionLevels
      :progressionTitle="progressionTitle"
      :progressionLevels="progressionLevels"
  />
  <ModList
      :modsTitle="modsTitle"
      :modTypes="modTypes"
  />
  <ContestsSection
      :contestsTitle="contestsTitle"
      :contests="contests"
  />
</template>

<script setup>
import OfferSection from './components/OfferSection.vue';
import FeatureList from './components/FeatureList.vue';
import GregTechFeatures from './components/GregTechFeatures.vue';
import ProgressionLevels from './components/ProgressionLevels.vue';
import ModList from './components/ModList.vue';
import ContestsSection from './components/ContestsSection.vue';

import { ref } from 'vue';
import versionCreateImage from '@/assets/icons/version.png'
import gtceuCreateImage from '@/assets/icons/gtceu.png'
import questsCreateImage from '@/assets/icons/quests.png'
import contestCreateImage from '@/assets/icons/contest.png'
import multiblocksCreateImage from '@/assets/icons/multiblocks.png'
import ae2CreateImage from '@/assets/icons/ae2.png'
import mechanismsCreateImage from '@/assets/icons/mechanisms.png'
import veinsCreateImage from '@/assets/icons/veins.png'
import steam_ageCreateImage from '@/assets/icons/steam_age.png'
import lvCreateImage from '@/assets/icons/lv.png'
import mvCreateImage from '@/assets/icons/mv.png'
import hvCreateImage from '@/assets/icons/hv.png'
import evCreateImage from '@/assets/icons/ev.png'
import ivCreateImage from '@/assets/icons/iv.png'
import luvCreateImage from '@/assets/icons/luv.png'
import zpmCreateImage from '@/assets/icons/zpm.png'
import uvCreateImage from '@/assets/icons/uv.png'
import contest_top_moneyCreateImage from '@/assets/icons/contest_top_money.png'
import contest_top_timeCreateImage from '@/assets/icons/contest_top_time.png'
import contest_blockCreateImage from '@/assets/icons/contest_block.png'

const announcement = "Открытие сервера";
const serverTitle = "HardTech 1.20.1";
const serverDate = "10.05.2024";
const serverFeaturesTitle = "Особенности сервера";
const features = [
  {
    title: "Новейшая версия",
    description: "Один из первых серверов на новейшей версии Майнкрафта - 1.20.1!",
    image: versionCreateImage
  },
  {
    title: "Увлекательный мод GregTech",
    description: "GregTech - уникальные в своем роде мод, добавляющий техническую прогрессию от паровых механизмов, до " +
        "термоядерных реакторов!",
    image: gtceuCreateImage
  },
  {
    title: "Система Квестов",
    description: "Никогда не играли с GregTech? Не проблема! Мы составили полноценную ветку квестов, подробно расписав " +
        "каждый элемент геймплея.",
    image: questsCreateImage
  },
  {
    title: "Конкурсы",
    description: "Любите спидранить сборки? Тогда, специально для вас, мы подготовили конкурсы!",
    image: contestCreateImage
  },
];

const whatIsGregTechTitle = "Что такое GregTech?";
const gregTechFeatures = [
  {
    title: "Мультиблоки",
    description: "Ваши заводы в несколько блоков и близко не похожи на настоящие? GregTech компенсирует этот недуг " +
        "добавлением более 50 мультиблочных структур, которые помогут вам обуздать абсолютно все технологии!",
    image: multiblocksCreateImage
  },
  {
    title: "Автоматизация",
    description: "Боитесь что не справитесь с автоматизацией таких больших заводов? МЭ-система, которая открывается с " +
        "MV уровня механизмов, поможет вам!",
    image: ae2CreateImage
  },
  {
    title: "Обновленные текстуры",
    description: "Все текстуры мода обновлены, чтобы соответствовать стилистике новейших версий Майнкрафта!",
    image: mechanismsCreateImage
  },
  {
    title: "Система жил",
    description: "В новых крафтах вам потребуется очень много ресурсов, но это не проблема, ведь на сервере существует " +
        "копательный мир, в котором руды генерируются специальными \"жилами\"!",
    image: veinsCreateImage
  },
];

const progressionTitle = "Система прогрессии";
const progressionLevels = [
  {
    level: "Паровая эра",
    description: "Ваше путешествие начнется именно здесь, используйте силу пара чтобы получить первую энергию!",
    image: steam_ageCreateImage,
    class: "yellow-hover"
  },
  {
    level: "LV - уровень",
    description: "На данном этапе вы научитесь создавать свою первую энергию, здесь ваша главная цель - создание " +
        "Электронной Доменной Печи, для получения первого алюминия!",
    image: lvCreateImage,
    class: "gray-hover"
  },
  {
    level: "MV - уровень",
    description: "Вам предстоит ознакомится с начальной веткой химии, создать дистиллятор, начав свою первую " +
        "переработку топлива!",
    image: mvCreateImage,
    class: "aqua-hover"
  },
  {
    level: "HV - уровень",
    description: "Ваша цель на данном этапе - создание чистой комнаты, для выведения нового сверхпрочного материала - Титана!",
    image: hvCreateImage,
    class: "orange-hover"
  },
  {
    level: "EV - уровень",
    description: "Эффективно используя титан, пришло время обновить все свои механизмы и научиться работать с " +
        "радиоактивными материалами!",
    image: evCreateImage,
    class: "purple-hover"
  },
  {
    level: "IV - уровень",
    description: "Вы выходите на новый уровень, теперь вы можете создать сборочную линию, которая позволит вам " +
        "обрабатывать сложнейшие рецепты!",
    image: ivCreateImage,
    class: "blue-hover"
  },
  {
    level: "LuV - уровень",
    description: "Имея огромное производство, вам предстоит собрать термоядерный реактор, начав синтез абсолютно " +
        "новых веществ!",
    image: luvCreateImage,
    class: "pink-hover"
  },
  {
    level: "ZPM - уровень",
    description: "Кажется что это предел? Значит вам нужно создать исследовательскую станцию и начать изучать " +
        "передовые технологии для достижения всех вершин научной прогрессии!",
    image: zpmCreateImage,
    class: "white-hover"
  },
  {
    level: "UV - уровень",
    description: "Только сильнейшие дойдут до конца. Ваши технологии и изучения позволят работать вам с био-органикой!",
    image: uvCreateImage,
    class: "dark-aqua-hover"
  },
];

const modsTitle = "Список модов";
const modTypes = {
  "Основные моды": [
    {
      name: "GregTechCEu Modern",
      description: "Является основой сборки, добавляет множество приборов и мультиблоков"
    },
    {
      name: "GTStuff",
      description: "Является основой сборки, добавляет множество приборов и мультиблоков",
      customLabel: "Самописный"
    },
    {
      name: "Applied Energistics 2",
      description: "Мод, добавляющий систему хранения, которая позволит автоматизировать абсолютно все!"
    },
    {
      name: "ExtendedAE",
      description: "Аддон для Applied Energistics 2, добавляющее новые уровни механизмов и предметов"
    },
    {
      name: "Architect's Palette",
      description: "Добавляет множество строительных блоков, которые помогут вам украсить базу!"
    },
    {
      name: "Biomes O' Plenty",
      description: "Классический мод, улучшающий ванильную генерацию мира"
    },
    {
      name: "FramedBlocks",
      description: "Добавляет каркасные блоки, которые можно использовать в строительстве!"
    },
    {
      name: "FTB Quests",
      description: "Классическая система квестов"
    },
    {
      name: "Sophisticated Backpacks",
      description: "Удобные рюкзаки для переноски предметов"
    },
    {
      name: "Storage Drawers",
      description: "Ящики, которые станут вашим первым другом в хранении вещей"
    },
    {
      name: "Tool Belt",
      description: "Используй место в инвентаре рационально"
    },
    {
      name: "Traveler Anchors",
      description: "Классические якори телепортации из EnderIO"
    },
    {
      name: "Xtones Reworked",
      description: "Множество декоративных блоков"
    },
    {
      name: "Trofers",
      description: "Уникальные трофеи, которые вы будете получать по ходу игры"
    }
  ],
  "Клиентские моды": [
    {
      name: "Source Visuals",
      description: "Множество самописных визуальных улучшений",
      customLabel: "Самописный"
    },
    {
      name: "JEI",
      description: "Классический мод для просмотра крафтов"
    },
    {
      name: "Better F3",
      description: "Обновляет визуальный стиль отладочной вкладки F3"
    },
    {
      name: "Controlling",
      description: "Добавляет возможность гибкой настройки клавиш управления"
    },
    {
      name: "Crafting Tweaks",
      description: "Добавляет хот-кеи для быстрой работы с инвентарями"
    },
    {
      name: "Embeddium",
      description: "Изменяет рендер Майнкрафта, оптимизируя его до предела"
    },
    {
      name: "FPS Reducer 2",
      description: "Повышает ФПС, оптимизируя алгоритмы потребления памяти"
    },
    {
      name: "Inventory Essentials",
      description: "Дополнительные функции для работы со своим инвентарем"
    },
    {
      name: "Jade",
      description: "Отображает информацию о блоке, на который вы смотрите"
    },
    {
      name: "Legendary Tooltips",
      description: "Изменяет визуальный стиль подсказок при наведении на предмет"
    },
    {
      name: "Oculus",
      description: "Добавляет поддержку шейдеров"
    },
    {
      name: "Mouse Tweaks",
      description: "Улучшает работу с инвентарем при помощи мыши"
    },
    {
      name: "Xaero's Minimap",
      description: "Удобная миникарта"
    },
    {
      name: "Xaero's World Map",
      description: "Полноразмерный вариант миникарты"
    },
    {
      name: "Apple Skin",
      description: "Отображает дополнительную информацию о голоде игрока"
    }
  ],
  "Серверные моды": [
    {
      name: "Source Content",
      description: "Добавляет абсолютно все команды, от /home, до /rtp и /kit",
      customLabel: "Самописный"
    },
    {
      name: "Source Guard",
      description: "Улучшенная система приватов",
      customLabel: "Самописный"
    },
    {
      name: "Ferrite Core",
      description: "Оптимизирует работу с оперативной памятью"
    },
    {
      name: "Bad Packets",
      description: "Оптимизирует передачу серверных пакетов"
    },
    {
      name: "No Chat Reports",
      description: "Отключает ванильную систему репортов"
    },
    {
      name: "И так далее...",
      description: "Мы не раскрываем все наши секреты :3"
    },
  ]
};

const contestsTitle = "Конкурсы";
const contests = [
  {
    title: "Конкурс Торговцев",
    description: "Любишь торговать и строить магазины? Тогда специально для тебя мы проводим конкурс с наградами за топ по количеству коинов к концу вайпа!",
    image: contest_top_moneyCreateImage
  },
  {
    title: "Конкурс Онлайна",
    description: "Тратишь 12 часов в сутки на игру? У тебя есть шанс выиграть ЭнтКоины, заняв призовые места по количеству часов в игре!",
    image: contest_top_timeCreateImage
  },
  {
    title: `Конкурс "Секретного блока"`,
    description: "Готов пройти сборку одним из первых? Скрафти секретный блок одним из первых, и твои старания окупятся!",
    image: contest_blockCreateImage
  },
];
</script>