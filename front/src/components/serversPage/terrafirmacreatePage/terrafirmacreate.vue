<template>
    <OfferSection :title="offerTitle" :date="offerDate" />
    <ServerInfoBlock :blocks="infoBlocks" />
    <ModList :modLists="mainMods" />
    <DevelopmentTeam :teamMembers="teamMembers" />
</template>

<script setup>
import OfferSection from './components/OfferSection.vue';
import ServerInfoBlock from './components/ServerInfoBlock.vue';
import ModList from './components/ModList.vue';
import DevelopmentTeam from './components/DevelopmentTeam.vue';

import group_1CreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/group_1.png';
import group_2CreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/group_2.png';
import ftbquests__bookCreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/ftbquests__book.png';
import tfc__ore___cinnabar___quartziteCreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/tfc__ore___cinnabar___quartzite.png';
import firmalife__food___cheddarCreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/firmalife__food___cheddar.png';
import rustic_engineerCreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/rustic_engineer.gif';
import modern_industrialization__distillation_towerCreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/modern_industrialization__distillation_tower.png';
import voteCreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/vote.webp';
import create__gogglesCreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/create__goggles.png';
import Cyberpunk909CreateImage from '@/assets/icons/serverPage/terrafirmacreatePage/Cyberpunk909.png';
import DaniamapsCreateImage from '@/assets/icons/otherPage/admins/Daniamaps.png';
import katrinkaCreateImage from '@/assets/icons/otherPage/admins/katrinka.png';
import srcccCreateImage from '@/assets/icons/otherPage/admins/srccc.png';

const offerTitle = 'TerraFirmaCreate 1.20.1';
const offerDate = '26.08.2024';

const infoBlocks = [
  {
    title: 'Эпохальное развитие',
    text: 'Развитие на сервере построено вокруг <span style="color: wheat">четырёх эпох</span>, игроку придется ' +
        'начать с самых <span style="color: wheat">примитивных технологий</span> - изготавливать ресурсы из подручных' +
        ' предметов, проходя постепенную эволюцию, дойти до <span style="color: wheat">ядерных технологий</span>!',
    imgSrc: group_1CreateImage
  },
  {
    title: 'Комбинация модов',
    text: 'В процессе развития тебе предстоит изучить два очень интересных мода - ' +
        '<span style="color: wheat">TerraFirmaCraft</span> и <span style="color: wheat">Create.</span><br><br>' +
        'Мы добавили множество <span style="color: wheat">переплетений</span>, сделав ' +
        '<span style="color: wheat">все моды взаимосвязанными</span>, теперь развитие станет действительно ' +
        '<span style="color: wheat">интересным</span>!',
    imgSrc: group_2CreateImage
  },
  {
    title: 'Подробные квесты',
    text: 'Никогда не играли с <span style="color: wheat">данными модами?</span> Не проблема, ведь мы специально ' +
        'составили <span style="color: wheat">огромные ветки квестов</span>, которые будут сопровождать вас на ' +
        'протяжении всей игры! <br><br> Все механики <span style="color: wheat">подробно описаны</span>, полностью ' +
        '<span style="color: wheat">выстроенно постепенное развитие</span>, что позволяет даже не зная моды, ' +
        '<span style="color: wheat">начать играть</span> именно здесь!',
    imgSrc: ftbquests__bookCreateImage,
    reversed: true
  },
  {
    title: 'Генерация',
    text: 'На нашем сервере установлена совсем новая <span style="color: wheat">генерация мира и руд</span> с помощью' +
        ' мода TerraFirmaCraft.<br><br> Все руды представлены в виде <span style="color: wheat">жил</span>, которые ' +
        'разбросаны по всему миру. Используйте <span style="color: wheat">индикаторы</span>, чтобы находить нужные ' +
        'вам ресурсы!',
    imgSrc: tfc__ore___cinnabar___quartziteCreateImage,
    reversed: true
  },
  {
    title: 'Виноделие и сыроваренье',
    text: 'Для любителей <span style="color: wheat">сыра</span> и <span style="color: wheat">вина</span> мы предлагаем' +
        ' окунуться в процесс <span style="color: wheat">приготовления</span> с помощью мода <span style="color: wheat">FirmaLife</span>.',
    imgSrc: firmalife__food___cheddarCreateImage
  },
  {
    title: 'Новые горизонты',
    text: 'С модами <span style="color: wheat">Simple Planes</span> и <span style="color: wheat">Automobility</span> ' +
        'перед вами открываются новые горизонты. Создавайте собственные <span style="color: wheat">самолеты</span> с ' +
        'помощью <span style="color: wheat">Simple Planes</span>, адаптируя их под любые задачи и условия, а затем ' +
        'берите под контроль полноценные <span style="color: wheat">автомобили</span> из <span style="color: wheat">Automobility</span>, ' +
        'которые облегчат перемещение и позволят <span style="color: wheat">исследовать мир</span> со скоростью и ' +
        'удобством. <br><br> В дополнение к этим модам, на сервере представлен мод <span style="color: wheat">Rustic Engineers</span>, ' +
        'добавляющий уникальный <span style="color: wheat">транспорт</span> - от <span style="color: wheat">механического паука</span>, ' +
        'до подводной лодки и дирижабля!',
    imgSrc: rustic_engineerCreateImage
  },
  {
    title: 'Высокие технологии',
    text: 'В процессе <span style="color: wheat">эволюции</span> вам предстоит обуздать силы <span style="color: wheat">ядерного синтеза</span>, ' +
        'чтобы достичь тотального <span style="color: wheat">превосходства</span> над остальными игроками. <br><br>' +
        'Все это достижимо благодаря моду - <span style="color: wheat">Modern Industrialization</span>. Из паровых ' +
        'технологий вы получите доступ к <span style="color: wheat">электричеству</span>, и сможете построить самый ' +
        '<span style="color: wheat">грандиозный завод</span> по производству всего и вся!',
    imgSrc: modern_industrialization__distillation_towerCreateImage
  },
  {
    title: 'Живая экономика',
    text: 'На сервере установлен <span style="color: wheat">аукцион</span>, он позволит активно <span style="color: wheat">развивать экономику</span> ' +
        'сервера! Чтобы воспользоваться аукционом - необходимо прописать команды <span style="color: wheat">/ah (просмотр)</span> ' +
        'и <span style="color: wheat">/sell [цена] (продажа)</span>.<br><br> Также на сервере проводится ' +
        '<span style="color: wheat">конкурс</span> - <span style="color: wheat">Топ 5 игроков</span> по количеству ' +
        'монет на сервере к концу вайпа получат награды в виде <span style="color: wheat">Энткоинов</span> на Личный Кабинет!',
    imgSrc: voteCreateImage
  },
  {
    title: 'Визуальные улучшения',
    text: 'Новые версии превносят множество <span style="color: wheat">визуальных улучшений</span>, но мы на этом не ' +
        'остановились! На клиенте установлены <span style="color: wheat">десятки модов</span>, которые улучшат ' +
        'визуальное <span style="color: wheat">восприятие игры</span>, оставив только <span style="color: wheat">лучшие впечатления!</span>',
    imgSrc: create__gogglesCreateImage,
    reversed: true
  },
];

const mainMods = [
  ['Applied Energistics 2', 'Astikor Carts', 'Automobility', 'Controlling', 'Create', 'Create: Additions',
    'Create: Deco', 'Create: The Factory Must Grow', 'Create: Utilities', 'EMI', 'FirmaLife', 'FTB', 'Quests', 'Jade'],
  ['MegaCells', 'Modern Industrialization', 'Nature Compass', 'Rustic Engineer', 'Scannable', 'Sophisticated Backpacks',
    'TerraFirmaCraft', 'TFC: Corals', 'TFC: Groomer', 'TFC: Lumberjack', 'TFC: Metal Items', 'Toolbelt', 'WaterFlasks',
    'Xaeros: Minimap']
];

const teamMembers = [
  { name: 'Cyberpunk909', role: 'Ведущий Дизайнер', imgSrc: Cyberpunk909CreateImage },
  { name: 'Daniamaps', role: 'Дизайнер', imgSrc: DaniamapsCreateImage },
  { name: 'katrinka', role: 'Куратор сервера', imgSrc: katrinkaCreateImage },
  { name: 'srccc', role: 'Разработчик', imgSrc: srcccCreateImage }
];
</script>

<style scoped>

</style>