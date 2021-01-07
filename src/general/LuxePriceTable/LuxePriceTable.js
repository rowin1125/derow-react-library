import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import TableColumn from './TableColumn';
import Col from '../Col';
import Row from '../Row';

const LuxePriceTable = ({
  className,
  htmlSerializer,
  linkResolver,
  iconGenerator,
  content,
  showPrice,
  showInfo,
  ...rest
}) => (
  <Row
    className={cn('z-0 my-20 lg:mt-32 lg:mb-20 text-gray-100', className)}
    {...rest}
  >
    {content.map((table, index) => {
      const multiple = content.length > 1;
      const isMiddle = multiple && index === 1;
      return (
        <Col
          xs={12}
          lg={4}
          key={index}
          className={cn(
            'my-5 lg:my-0',
            isMiddle
              ? 'order-first lg:order-none lg:-mt-20 lg:-ml-2 lg:-mr-2 z-10'
              : 'lg:-mt-10',
          )}
        >
          <TableColumn
            htmlSerializer={htmlSerializer}
            linkResolver={linkResolver}
            iconGenerator={iconGenerator}
            showPrice={showPrice}
            multiple={multiple}
            showInfo={showInfo}
            table={table}
            isMiddle={isMiddle}
          />
        </Col>
      );
    })}
  </Row>
);

LuxePriceTable.propTypes = {
  className: PropTypes.string,
  content: PropTypes.array.isRequired,
  showPrice: PropTypes.bool,
  showInfo: PropTypes.bool,
  linkResolver: PropTypes.func.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func,
};

export default LuxePriceTable;
