import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const ShowNextImage = ({
  card,
  image: Image,
  imageComponent: ImageComponent,
  ...rest
}) => {
  return (
    <>
      <div
        className={cn(
          'showNext',
          'w-full lg:w-80 h-100 z-10 relative transform lg:-translate-y-20 ',
          { 'lg:h-650': card.image_large },
        )}
      >
        <Image
          className={cn('object-cover', {
            'rounded-full': card.round_image,
            'h-100 lg:h-650': card.image_large && !ImageComponent,
          })}
          src={card.img.url}
          alt={card.img.alt || 'Derow'}
          {...rest}
        />
      </div>
      <div
        className={cn(
          'hidden lg:block absolute bg-secondary w-11/12 h-4/5 my-10 top-0 transform',
          card.img_first ? 'left-0 -translate-x-16' : 'right-0 translate-x-16',
        )}
      ></div>
    </>
  );
};

ShowNextImage.propTypes = {
  card: PropTypes.object.isRequired,
  image: PropTypes.any,
  imageComponent: PropTypes.any,
};

export default ShowNextImage;
