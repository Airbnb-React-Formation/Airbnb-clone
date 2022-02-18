import HomeBaseCard, {VARIANT_HOSTING} from './HomeBaseCard';

const HomeHosting = () => {
  const HomehostingImage = {
    alt: "Debout dans un champ, une hôte sourit chaleureusement. L'océan et le toit de la maison se situent derrière elle, en arrière-plan.",
    url_default: 'https://a0.muscache.com/im/pictures/6274bfff-7159-4e30-a32b-7b99c48858b3.jpg?im_q=highq&amp;im_w=720',
    url_nomin_1x: 'https://a0.muscache.com/im/pictures/6274bfff-7159-4e30-a32b-7b99c48858b3.jpg?im_w=320',
    url_nomin_2x: 'https://a0.muscache.com/im/pictures/6274bfff-7159-4e30-a32b-7b99c48858b3.jpg?im_w=720',
    url_min375_1x: 'https://a0.muscache.com/im/pictures/8262da55-f57f-460a-88cd-67a1d07b6f80.jpg?im_w=320',
    url_min375_2x: 'https://a0.muscache.com/im/pictures/8262da55-f57f-460a-88cd-67a1d07b6f80.jpg?im_w=720',
    url_min744_1x: 'https://a0.muscache.com/im/pictures/0903a029-e330-41f6-add2-652954f62185.jpg?im_w=720',
    url_min744_2x: 'https://a0.muscache.com/im/pictures/0903a029-e330-41f6-add2-652954f62185.jpg?im_w=1440',
    url_min1128_1x: 'https://a0.muscache.com/im/pictures/538e9fb4-2197-466a-9019-4b6a733d6ce2.jpg?im_w=960',
    url_min1128_2x: 'https://a0.muscache.com/im/pictures/538e9fb4-2197-466a-9019-4b6a733d6ce2.jpg?im_w=1920',
    url_min1440_1x: 'https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1200',
    url_min1440_2x: 'https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1920',
    url_min2080_1x: 'https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1920',
    url_min2080_2x: 'https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=2560',
  };
  const HomehostingText = "Des questions\nsur l'accueil\nde voyageurs ?";
  const HomehostingButton = {
    label: 'Discutez avec un Superhôte',
    target: '#'
  };
  return (
    <HomeBaseCard
      image={HomehostingImage}
      text={HomehostingText}
      button={HomehostingButton}
      variant={VARIANT_HOSTING}
     />
  );
}

export default HomeHosting;
