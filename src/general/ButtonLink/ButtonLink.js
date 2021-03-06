import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

const ButtonLink = React.forwardRef(
  (
    {
      bold = true,
      children,
      variant = 'primary',
      className,
      href,
      link: Link,
      linkProps,
      ...props
    },
    ref,
  ) => {
    const generalClasses = 'relative';
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    const isTertairy = variant === 'tertairy';

    return Link ? (
      <Link href={href} passHref {...linkProps}>
        <ButtonLinkElement
          ref={ref}
          className={classNames(
            'button-link',
            generalClasses,
            { 'font-semibold': bold },
            { 'text-color-base': isPrimary },
            { 'text-color-dark  ': isSecondary },
            { 'text-color-light': isTertairy },
            variant,
            className,
          )}
          {...props}
        >
          {children}
        </ButtonLinkElement>
      </Link>
    ) : (
      <ButtonLinkElement
        ref={ref}
        href={href}
        className={classNames(
          'button-link',
          generalClasses,
          { 'font-semibold': bold },
          { 'text-color-base': isPrimary },
          { 'text-color-dark  ': isSecondary },
          { 'text-color-light': isTertairy },
          variant,
          className,
        )}
        {...props}
      >
        {children}
      </ButtonLinkElement>
    );
  },
);

export const ButtonLinkElement = styled.a`
  &.primary {
    &:after {
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }

  &.secondary {
    &:after {
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }
  &.tertairy {
    &:after {
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 30px;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    bottom: -2px;
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
`;

ButtonLink.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.any,
  linkProps: PropTypes.object,
  noHover: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertairy']),
};

export default ButtonLink;
