/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { defaultProps, headerSyle, containerStyle, titleStyle, subTitleStyle } from './Styles';

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg }) => {
    const headerStylesCombined = {
        ...headerSyle,
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        color: textColor,
        fontFamily: font,
    };

    const component = (
        <header style={headerStylesCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subTitleStyle}>{subtitle}</h2>}
            </div>
        </header>
    );

    return component;
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    bgImg: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
