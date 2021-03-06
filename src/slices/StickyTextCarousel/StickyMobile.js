import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Card from '../../general/Card';
import Container from '../../general/Container';

const StickyMobile = ({ content, htmlSerializer, bgBrand }) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:hidden py-10',
        bgBrand ? 'bg-brand text-color-light' : 'bg-white text-brand',
      )}
    >
      <Container>
        {content.primary.sticky_title && (
          <h2 className='text-center mb-10'>{content.primary.sticky_title}</h2>
        )}
        {content.fields.map((pitch, i) => (
          <Card
            content={content}
            variant='transparent'
            className='mb-10'
            key={pitch.item_title + i.toString()}
          >
            <h3 className='font-bold text-2xl text-center'>
              {pitch.item_title}
            </h3>
            <RichText
              render={pitch.item_content}
              htmlSerializer={htmlSerializer}
            />
            <img
              className='w-full h-auto mt-5'
              src={pitch.sticky_image.url}
              alt={pitch.sticky_image.alt || 'Derow'}
            />
          </Card>
        ))}
      </Container>
    </div>
  );
};

StickyMobile.propTypes = {
  bgBrand: PropTypes.bool,
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
};

export default StickyMobile;
