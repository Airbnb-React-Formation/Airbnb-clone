import HomeBaseCard, {VARIANT_GIFTCARD} from './HomeBaseCard';

const HomeGift = () => {
  const giftCardImage = {
    alt: "",
    url_default: 'https://a0.muscache.com/im/pictures/09c5b264-32db-4168-8204-9ce035c1b6ef.jpg?im_q=highq&amp;im_w=720',
    url_nomin_1x: 'https://a0.muscache.com/im/pictures/09c5b264-32db-4168-8204-9ce035c1b6ef.jpg?im_w=320',
    url_nomin_2x: 'https://a0.muscache.com/im/pictures/09c5b264-32db-4168-8204-9ce035c1b6ef.jpg?im_w=720',
    url_min375_1x: 'https://a0.muscache.com/im/pictures/52d02be0-0429-427d-bf40-5360fc9a2674.jpg?im_w=320',
    url_min375_2x: 'https://a0.muscache.com/im/pictures/52d02be0-0429-427d-bf40-5360fc9a2674.jpg?im_w=720',
    url_min744_1x: 'https://a0.muscache.com/im/pictures/c4fec6c9-f626-4e3b-9d6a-62accec858db.jpg?im_w=720',
    url_min744_2x: 'https://a0.muscache.com/im/pictures/c4fec6c9-f626-4e3b-9d6a-62accec858db.jpg?im_w=1440',
    url_min1128_1x: 'https://a0.muscache.com/im/pictures/9d0d4afc-0c05-49af-9663-80ad7f6d79c0.jpg?im_w=960',
    url_min1128_2x: 'https://a0.muscache.com/im/pictures/9d0d4afc-0c05-49af-9663-80ad7f6d79c0.jpg?im_w=1920',
    url_min1440_1x: 'https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200',
    url_min1440_2x: 'https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=2560',
    url_min2080_1x: 'https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1920',
    url_min2080_2x: 'https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=2560',
  };
  const giftCardText = "Offrez une\ncarte cadeau\nAirbnb";
  const giftCardButton = {
    label: 'En savoir plus',
    target: '#'
  };
  return (
    <HomeBaseCard
      image={giftCardImage}
      text={giftCardText}
      button={giftCardButton}
      variant={VARIANT_GIFTCARD}
     />
  );
}

export default HomeGift;
