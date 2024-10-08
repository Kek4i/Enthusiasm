<template>
  <main class="layout-container">
    <div class="server-info">
      <div class="server-info__header">
        <div class="server-info__title-container">
          <router-link to="/servers">
            <img src="@/assets/icons/arrow.png" alt="Изменить сервер" />
          </router-link>
          <h1 class="server-info__title">{{ currentServerData.title }}</h1>
        </div>
        <div class="server-info__description">
          <p>{{ currentServerData.description }}</p>
        </div>
      </div>
      <div class="page-block">
        <div class="page-title">
          <h2 class="page-title__text">Информация о сервере</h2>
          <div class="page-title__line"></div>
        </div>
        <div class="server-info__items">
          <div class="server-info__item" v-for="(infoItem, index) in currentServerData.info" :key="index">
            <span class="server-info__item-title">{{ infoItem.title }}</span>
            <span class="server-info__item-info">{{ infoItem.value }}</span>
          </div>
        </div>
      </div>
      <div class="page-block">
        <div class="page-title">
          <h2 class="page-title__text">Моды сервера</h2>
          <div class="page-title__line"></div>
        </div>
        <div class="server-info__mods">
          <div
              v-for="(mod, index) in currentServerData.mods"
              :key="mod.name"
              class="tooltip-container server-info__mod"
              @mouseover="setCurrentMod(mod, index)"
              @mouseleave="clearCurrentMod"
          >
            {{ mod.name }}
            <span v-if="hoveredModIndex === index" class="tooltip-text">
              {{ mod.description }}
            </span>
          </div>
        </div>
      </div>
      <div class="page-block">
        <div class="page-title">
          <h2 class="page-title__text">Описание сервера</h2>
          <div class="page-title__line"></div>
        </div>
        <div class="server-info__uniq-wrapper">
          <div
              v-for="(item, index) in currentServerData.uniqContent"
              :key="index"
              class="uniq-item"
          >
            <p v-if="item.title" style="font-size: 20px; text-align: left;"><strong>{{ item.title }}</strong></p>
            <p v-if="item.description" style="font-size: 16px;">{{ item.description }}</p>
            <img v-if="item.image" :src="item.image" style="width: 100%; height: 100%; border-radius: 10px;" />
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>

h1, h2, p {
  margin: 0;
  color: #fff;
}

.layout-container {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
  box-sizing: border-box;
}

.server-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

.server-info__header {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
  padding: 30px 64px;
  box-sizing: border-box;
}

.server-info__title-container {
  display: flex;
  align-items: baseline;
  gap: 20px;
}

.server-info__title {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
}

.server-info__description {
  font-size: 20px;
  line-height: 25px;
  color: #fff;
}

.page-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  padding: 64px 96px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  box-sizing: border-box;
}

.page-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.page-title__text {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.page-title__line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.server-info__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 24px 160px;
  gap: 24px 160px;
}

.server-info__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.server-info__item-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #fff;
}

.server-info__item-info {
  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  text-transform: uppercase;
  color: #fff;
}

.server-info__uniq-wrapper, .uniq-item {
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
}

.server-info__mods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-auto-flow: row;
  grid-gap: 8px;
  gap: 12px;
  width: 100%;
}

.server-info__mod {
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
}

.tooltip-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease;
}

.tooltip-container:hover {
  color: #f1b55c;
  transition: color 0.3s ease;
}

.tooltip-container .tooltip-text {
  visibility: hidden;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  text-align: center;
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: .875rem;
}

.tooltip-container .tooltip-text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 0.9;
}

@media (max-width: 1170px) {
  .server-info__items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .server-info__mods {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .server-info__items {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 768px) {
  .layout-container {
    margin-top: 32px;
  }

  .page-block, .server-info__header {
    padding: 35px 20px;
  }

  .server-info__title, .page-title__text {
    font-size: 27px;
  }

  .server-info__description {
    font-size: 17px;
  }

  .server-info__mods {
    grid-template-columns: repeat(1, 1fr);
  }

  .server-info__item-info {
    font-size: 50px;
  }
}

</style>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const serverData = {
  hitech1710: {
    title: 'HiTech 1.7.10',
    description: 'HiTech - это индустриальный сервер, на котором главная задача добывать ресурсы и автоматизировать их ' +
        'переработку. С течением времени инструменты для добычи будут становиться более мощными, и будут подвластны все ' +
        'более улучшенные методы переработки и различные вариации добычи энергии.',
    info: [
      { title: 'Версия', value: '1.7.10' },
      { title: 'Режим игры', value: 'PVP' },
      { title: 'Дата вайпа', value: '18.09.24' },
      { title: 'Размер мира', value: '10000' },
      { title: 'Размер доп. миров', value: '6000' },
      { title: 'Сложность сборки', value: 'Normal' }
    ],
    mods: [
      { name: 'Industrial Craft 2 Experimental', description: 'Мод, добавляющий промышленные машины, автоматизацию и генерацию энергии.' },
      { name: 'Advanced Solar Panels', description: 'Мод добавляет улучшенные солнечные панели для генерации энергии в IC2.' },
      { name: 'AE2 Stuff', description: 'Расширение для Applied Energistics 2, добавляющее новые машины для обработки данных.' },
      { name: 'AFSU', description: 'Улучшенная версия MFSU для хранения большего объема энергии в IC2.' },
      { name: 'Applied Energistics 2', description: 'Мод для хранения и управления предметами с помощью цифровых систем.' },
      { name: 'BiblioCraft', description: 'Мод, добавляющий декоративные предметы и мебель для оформления интерьера.' },
      { name: "Binnie's Mods", description: 'Набор дополнений к Forestry, включая пчеловодство и генетику растений.' },
      { name: 'Botany', description: 'Часть Binnie’s Mods, посвященная выращиванию и гибридизации растений.' },
      { name: 'Build Craft', description: 'Мод, добавляющий трубы, механизмы и системы автоматизации для строительства и производства.' },
      { name: "Carpenter's Blocks", description: 'Мод, позволяющий изменять форму блоков и создавать уникальные постройки.' },
      { name: 'CaseReload', description: 'Дополнение для IC2, добавляющее новые контейнеры для хранения предметов и жидкостей.' },
      { name: 'Chisel', description: 'Мод для создания декоративных блоков с разнообразными текстурами для строительства.' }
      //Добавляем дальше моды, если надо
    ],
    uniqContent: [
      {
        title: 'Виды энергии',
        description: 'Солнечные панели - один из самых простых, но затратных вариантов получения энергии. Система ' +
            'улучшения панелей позволит вам генерировать энергию даже ночью и будет актуальным методом добычи энергии ' +
            'вплоть до конца развития. На выбор вам будут доступны как обычные EU панели, так и Квантовые генераторы ' +
            'разных уровней.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Solars.jpg'
      },
      {
        description: 'Реакторы - это самый выгодный по ресурсам способ получения энергии, но такие генераторы требуют к' +
            ' себе достаточно много внимания. Они отлично подходят для ранней стадии игры.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Reactors.jpg'
      },
      {
        title: 'Альтернативные способы генерации ресурсов',
        description: 'Пчёлы - Модификация Forestry предоставляет возможность пассивной добычи различных ресурсов, в ' +
            'альтернативу привычных способов (копание в шахте и т.п.). Ресурсы могут быть максимально разнообразными: ' +
            'начиная от эндер-жемчуга, заканчивая черепами скелетов-иссушителей.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Forestry.jpg'
      },
      {
        description: 'Материя - c помощью разных видов материи у вас есть возможность крафтить ресурсы первой ' +
            'необходимости: железо, медь, олово, резина и т.д.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Matters.jpg'
      },
      {
        description: 'Фермы - вы можете добывать различные ресурсы с помощью ферм, которые присутствуют у нас на ' +
            'сервере. Вы можете выбрать наиболее удобный метод добычи благодаря разным типам ферм, которые нам ' +
            'предоставляют моды IndustrialCraft2 и Minefactory Reloaded.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Farms.jpg'
      },
      {
        title: 'Кастомизация персонажа',
        description: 'Сеты скинов - позволят вам преобразить ваш внешний вид с помощью кастомной брони с особыми ' +
            'эффектами. На сервере присутствуют как комплекты брони, которые вы можете купить у других игроков, так ' +
            'и уникальные комплекты, которые вы можете скрафтить.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Skins.jpg'
      },
      {
        description: 'Скины на посох - позволят вам преобразить внешний вид Драконьего посоха силы. Некоторые скины ' +
            'можно установить только с определённого грейда, что позволит визуально демонстрировать уровень прокачки вашего посоха.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Skins2.jpg'
      },
      {
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Skins3.jpg'
      },
      {
        title: 'Высокие технологии',
        description: 'Программирование - создавайте свои компьютеры, серверы, микроконтроллеров, роботов и пишите ' +
            'полноценные программы на языке lua прямо в игре. Печатайте 3D модели на принтере. Всё это ограничено лишь вашей фантазией.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/OC.jpg'
      },
      {
        title: 'Разное',
        description: 'Грейды Драконьего посоха силы - улучшайте посох, с помощью различных грейдов, которые ещё сильнее ' +
            'повысят урон, увеличат радиус копания, откроют новые скины и т.д.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Grades.jpg'
      },
      {
        description: 'Крафты - огромное кол-во новых и интересных крафтов, которые не дадут заскучать и сделают вашу ' +
            'игру более увлекательной и разнообразной.',
        image: 'https://ftp.mcskill.net/sky/Images/ServersDescription/Crafts.jpg'
      },
    ]
  },
  industrialupgrade: {
    title: 'Ind:Upgrade 1.12.2',
    description: 'Уникальный сервер на базе мода Industrial Upgrade, предлагающий огромное количество технологий и ' +
        'постепенную прогрессию улучшения производства.',
    info: [
      { title: 'Версия', value: '1.12.2' },
      { title: 'Режим игры', value: 'PVP' },
      { title: 'Дата вайпа', value: '18.08.24' },
      { title: 'Размер мира', value: '10000' },
      { title: 'Размер доп. миров', value: '6000' },
      { title: 'Сложность сборки', value: 'Normal' }
    ],
    mods: [
      { name: 'AE2 Stuff', description: 'Дополнение для Applied Energistics 2 с новыми машинами и устройствами.' },
      { name: 'Applied Energistics 2', description: 'Мод для хранения, управления и автоматизации предметов с помощью цифровых систем.' },
      { name: 'Avaritia', description: 'Мод с добавлением сверхдорогих и мощных предметов, в том числе бесконечного оружия.' },
      { name: 'Computronics', description: 'Мод, расширяющий возможности компьютерных систем и взаимодействие с машинами.' },
      { name: 'Cosmetic Armor Reworked', description: 'Позволяет носить декоративную броню поверх основной без влияния на характеристики.' },
      { name: 'Custom NPCs', description: 'Мод для создания и настройки персонализированных NPC с уникальными диалогами и заданиями.' },
      { name: 'Draconic Evolution', description: 'Мод с мощным оружием, броней и механизмами на основе драконьей энергии.' },
      { name: 'Dragon Radio Mod', description: 'Добавляет радио для воспроизведения музыки и радиостанций в игре.' },
      { name: 'Ender IO', description: 'Мод для сложных механизмов, энергетики и трубопроводов для передачи ресурсов и энергии.' }
      //Добавляем дальше моды, если надо
    ],
    uniqContent: [
      {
        title: 'Технологии',
        description: 'Это слово, "технологии"... что может быть лучше? Они превращаются в настоящий калейдоскоп ' +
            'фантазии и возможностей. Здесь генераторы нейтронных частиц не просто "есть", а словно волшебные факелы ' +
            'освещают путь в глубины науки и фантастики. Твердая материя и жидкая материя тают в руках игрока, как ' +
            'волшебные ингредиенты, позволяя создавать невероятные шедевры.',
      },
      {
        description: 'Квантовые и спектральные технологии становятся настоящей магией, раскрывая перед игроком двери ' +
            'в невообразимые возможности. Здесь каждое технологическое открытие – как волшебный ключ, отпирающий новые ' +
            'двери в мир инноваций и возможностей.',
        image: 'https://img.enthusiasm.world/TheTzdDark/1723973448-1.png.webp'
      },
      {
        title: 'Энергия',
        description: 'Энергия в моде приобретает яркие оттенки, предлагая игрокам целый арсенал генераторов. Ветряные ' +
            'генераторы вращаются под свист ветра, гидрогенераторы раскачиваются на волнах энергии водопадов, а ' +
            'солнечные панели блеском подчеркивают яркость вашего завода. Игроки могут создавать свой уникальный ' +
            'энергетический мир, выбирая и комбинируя различные источники энергии.',
        image: 'https://img.enthusiasm.world/TheTzdDark/1723973454-1.png.webp'
      },
      {
        title: 'Квесты',
        description: 'Слово "квест" в этом технологическом мире превращается в нечто гораздо более грандиозное – в ' +
            'персонального путеводителя, провожающего игрока через множество этапов технологического развития. С 800 ' +
            'квестами в роли верных напарников, каждый из них становится шагом в захватывающем путешествии, ' +
            'охватывающем все аспекты сборки – от простых деревянных палок до технологий, неотличимых от магии.',
        image: 'https://img.enthusiasm.world/TheTzdDark/1703696570-1.png'
      },
      {
        title: 'Кастомные крафты',
        description: 'Одним из выдающихся аспектов является введение кастомных крафтов. Это позволяет игрокам ' +
            'создавать уникальные предметы и блоки, заставляя экспериментировать с различными комбинациями ресурсов и ' +
            'технологий. Кастомные крафты требуют тщательного планирования и ресурсов, что способствует глубокому и ' +
            'интересному процессу развития.',
      },
    ]
  },
  hitech: {
    title: 'HiTech 1.20.1',
    description: 'Этот сервер предоставляет новейшие технологии и возможности. Благодаря обновленной версии игры, ' +
        'геймплей стал невероятно увлекательным! Оригинальные разработки, переработанные крафты, множество ' +
        'разнообразных модов, интересные квестовые линии и уникальная генерация мира - всё это делает наш сервер непревзойденным!',
    info: [
      { title: 'Версия', value: '1.20.1' },
      { title: 'Режим игры', value: 'PVE' },
      { title: 'Дата вайпа', value: '30.08.24' },
      { title: 'Размер мира', value: '10000' },
      { title: 'Размер доп. миров', value: '5000' },
      { title: 'Сложность сборки', value: 'Normal' }
    ],
    mods: [
      { name: 'Applied Energistics 2', description: 'Мод для хранения, управления и автоматизации предметов с помощью цифровых систем.' },
      { name: 'Artifacts', description: 'Добавляет мощные артефакты, которые дают игрокам уникальные способности и бонусы.' },
      { name: 'Draconic Evolution', description: 'Мод с продвинутым оружием, броней и механизмами, работающими на драконьей энергии.' },
      { name: 'Farmer’s Delight', description: 'Мод, улучшающий фермерство и кулинарию, добавляя новые инструменты и рецепты.' },
      { name: 'Flux Networks', description: 'Позволяет передавать энергию без кабелей через продвинутые энергетические сети.' },
      { name: 'FTB Quests', description: 'Мод для создания квестов и систем прогресса с удобным интерфейсом для игроков.' },
      { name: 'Iron Chests', description: 'Добавляет улучшенные сундуки с увеличенным объемом для хранения предметов.' },
      { name: 'Mekanism', description: 'Мод с высокотехнологичными машинами для обработки руд, генерации энергии и логистики.' },
      { name: 'Scannable', description: 'Мод, добавляющий сканеры для поиска ресурсов, структур и мобов в мире.' }
      //Добавляем дальше моды, если надо
    ],
    uniqContent: [
      {
        title: 'Богатая и развитая энергетика',
        description: 'В сборке огромное количество способов получения энергии! Солнечные панели, ядерные и ' +
            'термоядерные реакторы, генераторы и ветряки - всё это вы можете строить уже сейчас!',
        image: 'https://ftp.enthusiasm.world/supernovus/description/energy.png'
      },
      {
        title: 'Собственные разработки',
        description: 'Основой сборки стали собственные моды, которые позволили впервые почувствовать игру без плагинов. ' +
            'Собственные команды, различные визуальные и геймплейные улучшения, собственные предметы, блоки, ' +
            'инструменты и механизмы - всё это было сделано для игроков.',
        image: 'https://ftp.enthusiasm.world/supernovus/description/mods.png'
      },
      {
        title: 'Сотни декоративных блоков',
        description: 'Каждый хотел бы сделать базу в своём стиле, но из доступных блоков не всегда можно построить дом ' +
            'мечты. По этому в игре доступно более 600 декоративных блоков на разный вкус и цвет, и всё это доступно каждому игроку.',
        image: 'https://ftp.enthusiasm.world/supernovus/description/decor.png'
      },
      {
        title: 'Невероятная генерация мира',
        description: 'Магия новой версии позволяет создавать невероятную генерацию ландшафта. Мы добавили различные ' +
            'моды, создающие захватывающие ландшафты и структуры в мире, так что каждый игрок может найти то ' +
            'самое местечко под свою будущую базу.',
        image: 'https://ftp.enthusiasm.world/supernovus/description/dimensions.png'
      },
      {
        title: 'Развитый квест-бук и гайды',
        description: 'Квестовые линии помогают игроку войти в сборку более просто, ведь они выступают в качестве ' +
            'путеводителя по миру. Квест-бук был разработан в виде глав, а каждое задание поощряет игрока приятными наградами.',
        image: 'https://ftp.enthusiasm.world/supernovus/description/quests.png'
      },
    ]
  }
};

const route = useRoute();
const currentServerData = ref({});

const fetchServerData = (serverName) => {
  currentServerData.value = serverData[serverName] || {};
};

onMounted(() => {
  fetchServerData(route.params.serverName);
});

watch(
    () => route.params.serverName,
    (newServerName) => {
      fetchServerData(newServerName);
    }
);

const currentMod = ref(null);
const hoveredModIndex = ref(null);

const setCurrentMod = (mod, index) => {
  currentMod.value = mod;
  hoveredModIndex.value = index;
};

const clearCurrentMod = () => {
  currentMod.value = null;
  hoveredModIndex.value = null;
};
</script>