import './HomeBaseCard.css';

const VARIANT_HEADER = '_HEADER_';
const VARIANT_HOSTING = '_HOSTING_';
const VARIANT_EXPERIENCE = '_EXPERIENCE_';
const VARIANT_GIFTCARD = '_GIFTCARD_';

const HomeBaseCard = ({image, text, button, variant}) => {
  const wrapperClassList = ['hbc__wrapper'];
  const illustrationClassList = ['hbc__illustration'];
  const textClassList = ['hbc__text'];
  const buttonClassList = ['hbc__button'];
  if (variant === VARIANT_HEADER) {
    wrapperClassList.push('hbc__wrapper--header');
    illustrationClassList.push('hbc__illustration--header');
    textClassList.push('hbc__text--header');
    buttonClassList.push('hbc__button--header');
  }
  if (variant === VARIANT_HOSTING) {
    wrapperClassList.push('hbc__wrapper--hosting');
    illustrationClassList.push('hbc__illustration--hosting');
    textClassList.push('hbc__text--hosting');
    buttonClassList.push('hbc__button--hosting');
  }
  if (variant === VARIANT_EXPERIENCE) {
    wrapperClassList.push('hbc__wrapper--experience');
    illustrationClassList.push('hbc__illustration--experience');
    textClassList.push('hbc__text--experience');
    buttonClassList.push('hbc__button--experience');
  }
  if (variant === VARIANT_GIFTCARD) {
    wrapperClassList.push('hbc__wrapper--gift');
    illustrationClassList.push('hbc__illustration--gift');
    textClassList.push('hbc__text--gift');
    buttonClassList.push('hbc__button--gift');
  }

  return (
    <div className={wrapperClassList.join(' ')}>
      <picture className={illustrationClassList.join(' ')}>
        <source srcSet={`${image?.url_min2080_1x} 1x, ${image?.url_min2080_2x} 2x,`} media='(min-width: 2080px)' />
        <source srcSet={`${image?.url_min1440_1x} 1x, ${image?.url_min1440_2x} 2x,`} media='(min-width: 1440px)' />
        <source srcSet={`${image?.url_min1128_1x} 1x, ${image?.url_min1128_2x} 2x,`} media='(min-width: 1128px)' />
        <source srcSet={`${image?.url_min744_1x} 1x, ${image?.url_min744_2x} 2x,`} media='(min-width: 744px)' />
        <source srcSet={`${image?.url_min375_1x} 1x, ${image?.url_min375_2x} 2x,`} media='(min-width: 375px)' />
        <source srcSet={`${image?.url_nomin_1x} 1x, ${image?.url_nomin_2x} 2x,`} />
        <img src={image?.url_default} alt={`${image?.alt}`} />
      </picture>
      <div className={textClassList.join(' ')}>{text}</div>
      <a className={buttonClassList.join(' ')} href={button?.target}><span>{button?.label}</span></a>
    </div>
  );
}

export {
  HomeBaseCard as default,
  VARIANT_HEADER,
  VARIANT_HOSTING,
  VARIANT_EXPERIENCE,
  VARIANT_GIFTCARD
};
