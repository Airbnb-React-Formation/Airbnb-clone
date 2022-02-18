import './HomeExperiences.css';
import HomeBaseCard, {VARIANT_EXPERIENCE} from './HomeBaseCard';

const HomeExperiences = () => {
  const expTitle = 'Découvrez les expériences Airbnb';

  const expTravelImage = {
    alt: "Trois personnes se trouvent dans un canyon de grès à Kanab, en Utah, aux États-Unis. L'hôte de l'expérience montre quelque chose en hauteur aux deux voyageurs.",
    url_default: 'https://a0.muscache.com/im/pictures/ffbbd861-7fc4-417d-bed7-acc68af7222c.jpg?im_q=highq&amp;im_w=720',
    url_nomin_1x: 'https://a0.muscache.com/im/pictures/ffbbd861-7fc4-417d-bed7-acc68af7222c.jpg?im_w=320',
    url_nomin_2x: 'https://a0.muscache.com/im/pictures/ffbbd861-7fc4-417d-bed7-acc68af7222c.jpg?im_w=720',
    url_min375_1x: 'https://a0.muscache.com/im/pictures/b081750b-8f9b-426a-a4dc-cfbf06f14a4a.jpg?im_w=320',
    url_min375_2x: 'https://a0.muscache.com/im/pictures/b081750b-8f9b-426a-a4dc-cfbf06f14a4a.jpg?im_w=720',
    url_min744_1x: 'https://a0.muscache.com/im/pictures/3290306e-8e26-4c77-a96a-777e554c5222.jpg?im_w=320',
    url_min744_2x: 'https://a0.muscache.com/im/pictures/3290306e-8e26-4c77-a96a-777e554c5222.jpg?im_w=720',
    url_min1128_1x: 'https://a0.muscache.com/im/pictures/ae7fadb9-0b76-49a7-a45a-835a7390144e.jpg?im_w=480',
    url_min1128_2x: 'https://a0.muscache.com/im/pictures/ae7fadb9-0b76-49a7-a45a-835a7390144e.jpg?im_w=960',
    url_min1440_1x: 'https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=720',
    url_min1440_2x: 'https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=1200',
    url_min2080_1x: 'https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=960',
    url_min2080_2x: 'https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=1920'
  };
  const expTravelText = "Des expériences\nà vivre pendant\nvotre voyage";
  const expTravelButton = {
    label: 'Expériences',
    target: '#'
  };

  const expOnlineCardImage = {
    alt: "Une hôte est assise dans son logement à Bali, en Indonésie. Elle tient du tissu batik qu'elle vient de fabriquer devant son téléphone, avec lequel elle est en train d'animer une expérience en ligne.",
    url_default: 'https://a0.muscache.com/im/pictures/3b2ce598-04d6-4cb8-a597-3c8de7fb2449.jpg?im_q=highq&amp;im_w=720',
    url_nomin_1x: 'https://a0.muscache.com/im/pictures/3b2ce598-04d6-4cb8-a597-3c8de7fb2449.jpg?im_w=320',
    url_nomin_2x: 'https://a0.muscache.com/im/pictures/3b2ce598-04d6-4cb8-a597-3c8de7fb2449.jpg?im_w=720',
    url_min375_1x: 'https://a0.muscache.com/im/pictures/282ad058-cf85-4c29-bdb4-c7cfa841de61.jpg?im_w=320',
    url_min375_2x: 'https://a0.muscache.com/im/pictures/282ad058-cf85-4c29-bdb4-c7cfa841de61.jpg?im_w=720',
    url_min744_1x: 'https://a0.muscache.com/im/pictures/0fa7e0a7-c3c2-410a-b5c0-567cfca193cb.jpg?im_w=320',
    url_min744_2x: 'https://a0.muscache.com/im/pictures/0fa7e0a7-c3c2-410a-b5c0-567cfca193cb.jpg?im_w=720',
    url_min1128_1x: 'https://a0.muscache.com/im/pictures/2e9e0381-68d8-4961-abf2-a4f897b41fa8.jpg?im_w=480',
    url_min1128_2x: 'https://a0.muscache.com/im/pictures/2e9e0381-68d8-4961-abf2-a4f897b41fa8.jpg?im_w=960',
    url_min1440_1x: 'https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=720',
    url_min1440_2x: 'https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=1200',
    url_min2080_1x: 'https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=960',
    url_min2080_2x: 'https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=1920',
  };
  const expOnlineCardText = "Des expériences\nà vivre\nde chez vous";
  const expOnlineCardButton = {
    label: 'Expériences en ligne',
    target: '#'
  };

  return (
    <div className='he__experiences'>
      <div className='he__experiencestitle'>{expTitle}</div>
      <HomeBaseCard
        image={expTravelImage}
        text={expTravelText}
        button={expTravelButton}
        variant={VARIANT_EXPERIENCE}
      />
      <HomeBaseCard
        image={expOnlineCardImage}
        text={expOnlineCardText}
        button={expOnlineCardButton}
        variant={VARIANT_EXPERIENCE}
      />
    </div>
  );
}

export default HomeExperiences;
