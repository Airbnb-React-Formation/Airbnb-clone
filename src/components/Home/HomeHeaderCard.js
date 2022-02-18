import HomeBaseCard, {VARIANT_HEADER} from './HomeBaseCard';

const HomeHeaderCard = () => {
  const HomeheaderCardImage = {
    alt: "Dans la lumière chaude et accueillante du crépuscule, debout sur le pas de la porte d'une maison dôme unique, un voyageur fait un signe de la main.",
    url_default: 'https://a0.muscache.com/im/pictures/2459fa90-5f66-4198-a8f2-43d8f8783bc2.jpg?im_q=highq&amp;im_w=720',
    url_nomin_1x: 'https://a0.muscache.com/im/pictures/2459fa90-5f66-4198-a8f2-43d8f8783bc2.jpg?im_w=320',
    url_nomin_2x: 'https://a0.muscache.com/im/pictures/2459fa90-5f66-4198-a8f2-43d8f8783bc2.jpg?im_w=720',
    url_min375_1x: 'https://a0.muscache.com/im/pictures/1bb878f5-478d-47ed-98e7-f0e9549ee645.jpg?im_w=320',
    url_min375_2x: 'https://a0.muscache.com/im/pictures/1bb878f5-478d-47ed-98e7-f0e9549ee645.jpg?im_w=720',
    url_min744_1x: 'https://a0.muscache.com/im/pictures/0bcabcc8-b18a-470d-95ff-84f41df5d33f.jpg?im_w=720',
    url_min744_2x: 'https://a0.muscache.com/im/pictures/0bcabcc8-b18a-470d-95ff-84f41df5d33f.jpg?im_w=1440',
    url_min1128_1x: 'https://a0.muscache.com/im/pictures/ce7d8ae6-977b-4031-b800-762ac4daf347.jpg?im_w=960',
    url_min1128_2x: 'https://a0.muscache.com/im/pictures/ce7d8ae6-977b-4031-b800-762ac4daf347.jpg?im_w=1920',
    url_min1440_1x: 'https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=1200',
    url_min1440_2x: 'https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560',
    url_min2080_1x: 'https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_q=highq&amp;im_w=1920',
    url_min2080_2x: 'https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_q=highq&amp;im_w=2560'
  };
  const HomeheaderCardText = 'Vous ne savez pas où partir ?\nParfait.';
  const HomeheaderCardButton = {
    label: 'Je suis flexible',
    target: '#'
  };
  return (
    <HomeBaseCard
      image={HomeheaderCardImage}
      text={HomeheaderCardText}
      button={HomeheaderCardButton}
      variant={VARIANT_HEADER}
    />
  );
}

export default HomeHeaderCard;
