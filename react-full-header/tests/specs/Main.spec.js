/* eslint-disable no-unused-vars */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });
    context('Title', () => {
        it('should have h1 tag when mount', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when mount', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });
    context('Subtitle', () => {
        it('should have h2 tag when mount', () => {
            const wrapper = shallow(<FullHeader subtitle="Curso de TDD na prática" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when mount', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h2 tag with the subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Curso de TDD na prática" />);
            expect(wrapper.find('h2').props().children).to.be.equal('Curso de TDD na prática');
        });
    });
    context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have background-color equal #000 when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('textColor', () => {
        it('should have color equal #fff when none is passed ', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });

        it('should have color equal #ff0000 when is passed ', () => {
            const wrapper = shallow(<FullHeader title="TDD" textColor="#ff0000" />);
            expect(wrapper).to.have.style('color').equal('#ff0000');
        });
    });

    context('font', () => {
        it('should have font equal sans-serif when none is passed ', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have font equal cursive font when is passed ', () => {
            const wrapper = shallow(<FullHeader title="TDD" font="cursive" />);
            expect(wrapper).to.have.style('font-family').equal('cursive');
        });
    });
});
