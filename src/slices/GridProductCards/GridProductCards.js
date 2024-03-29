/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Row from '../../general/Row';
import Container from '../../general/Container';
import Col from '../../general/Col';
import Card from '../../general/Card';
import BgOverflow from '../../general/BgOverflow';
import ProductShow from '../../general/ProductShow/ProductShow';

const GridProductCards = ({
  content,
  link: Link = 'a',
  linkResolver,
  imageComponent: Image = 'img',
  imageProps,
  ...rest
}) => {
  const needsGrayBg = ['left', 'right'].includes(content.primary.show_gray_box);
  const bgLeft = content.primary.show_gray_box === 'left';

  return (
    <BgOverflow
      className={cn({ 'bg-brand': content.primary?.bg_brand })}
      type={content.primary?.overflow}
      {...rest}
    >
      <Container className='py-8 lg:py-16 w-full relative'>
        {content.primary.product_grid_title && (
          <Row centerX wrap>
            <Col xs={12} lg={12}>
              <Card
                className='z-10'
                noMarginBottom
                content={content}
                variant='transparent'
                cardBodyClass='flex flex-col'
              >
                {content.primary.product_grid_title && (
                  <h2
                    className={cn({
                      'lg:mb-20': needsGrayBg,
                      'text-center': content.primary.product_grid_title_center,
                    })}
                  >
                    {content.primary.product_grid_title}
                  </h2>
                )}
              </Card>
            </Col>
          </Row>
        )}
        {needsGrayBg && (
          <div
            className={cn(
              'hidden lg:block absolute bg-secondary w-7/12 h-96 my-10 top-0 transform translate-y-24',
              bgLeft ? 'left-10' : 'right-10',
            )}
          ></div>
        )}
        <div className='Row flex flex-row flex-wrap lg:flex-row relative w-full'>
          {content?.fields.map((card, i) => {
            const dynamicUrl = card.product_link?._meta;
            return (
              <ProductShow
                key={card.product_title}
                title={card.product_title}
                index={i}
                contentLength={content.fields.length}
                link={dynamicUrl ? card.product_link?._meta : null}
                image={card.product_image}
                fixedUrl={dynamicUrl ? null : card.product_link}
                linkResolver={linkResolver}
                imageComponent={Image}
                imageProps={imageProps}
                linkComponent={Link}
              />
            );
          })}
        </div>
      </Container>
    </BgOverflow>
  );
};

GridProductCards.propTypes = {
  content: PropTypes.object.isRequired,
  imageComponent: PropTypes.any,
  imageProps: PropTypes.object,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default GridProductCards;
