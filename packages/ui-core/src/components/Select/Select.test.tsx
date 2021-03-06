import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Select, { ISelectProps, SelectTypes, Verification } from './Select';
import cnCreate from 'utils/cnCreate';

const cn = cnCreate('mfui-beta-select');

const props: ISelectProps = {
    className: 'test-class',
    label: 'test-label',
    labelId: '1',
    noticeText: 'test-notice-text',
    required: true,
    placeholder: 'test-placeholder',
    classes: {
        control: 'test-control-class',
        root: 'test-root-class',
    },
    items: [
        {
            value: 1,
            title: 'test-name-1',
        },
        {
            value: 2,
            title: 'test-name-2',
        },
    ],
    dataAttrs: {
        'data-test': 'test',
        'incorrect-attr': 'test',
    },
};

const newItems = [
    {
        value: 111,
        title: 'new-test-name-1',
    },
    {
        value: 222,
        title: 'new-test-name-2',
    },
];

describe('<Select />', () => {
    describe('snapshots', () => {
        it('renders with default props', () => {
            const wrapper = mount(<Select items={props.items} />);
            expect(wrapper).toMatchSnapshot();
        });

        it('renders with props', () => {
            const wrapper = mount(<Select {...props} />);
            expect(wrapper).toMatchSnapshot();
        });

        it('renders combobox after update with new prop items', () => {
            const wrapper = mount(<Select {...props} type="combobox" />);

            wrapper.setProps({ items: newItems });
            wrapper.update();

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('states of select', () => {
        it('renders with disabled state', () => {
            const handleClick = jest.fn();
            const wrapper = shallow(<Select onSelect={handleClick} items={[]} isDisabled />);

            wrapper.find(`.${cn('control')}`).simulate('click');

            expect(handleClick).not.toHaveBeenCalled();
            expect(wrapper).toMatchSnapshot();
        });

        it('renders with valid state', () => {
            const wrapper = shallow(<Select items={[]} verification={Verification.VALID} noticeText="success" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('renders with error state', () => {
            const wrapper = shallow(<Select items={[]} verification={Verification.ERROR} noticeText="error" />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('onSelect', () => {
        it('calls onSelect', () => {
            const handleSelectItem = jest.fn();
            const wrapper = shallow(<Select {...props} onSelect={handleSelectItem} />);
            const listItem = `.${cn('list-item')}`;
            const listItemActive = `${cn('list-item_active')}`;

            wrapper.find(`.${cn('title')}`).simulate('click');
            wrapper.find(listItem).at(1).simulate('click');

            expect(wrapper.find(listItem).at(0).hasClass(listItemActive)).toEqual(true);
            expect(wrapper.find(listItem).at(1).hasClass(listItemActive)).toEqual(false);
        });

        it('calls onSelect after update with new prop items', () => {
            const handleSelectItem = jest.fn();
            const wrapper = shallow(<Select {...props} onSelect={handleSelectItem} />);

            wrapper.setProps({ items: newItems });
            wrapper.update();

            const title =  wrapper.find(`.${cn('title')}`);
            const lastListItem = wrapper.find(`.${cn('list-item')}`).last();

            title.simulate('click');
            lastListItem.simulate('mouseenter', { preventDefault: () => {} });
            lastListItem.simulate('click', {});

            expect(handleSelectItem).toBeCalledWith(
                {},
                newItems[1]
            );
        });
    });

    describe('key typing handlers', () => {
        it('calls onChange while typing in the field with debounce', async () => {
            const wrapper = shallow(<Select {...props} type={SelectTypes.COMBOBOX} />);

            expect(wrapper).toMatchSnapshot();

            wrapper.find(`.${cn('combobox')}`).simulate('change', {
                target: {
                    value: 'test-name-1',
                },
            });

            await new Promise((r) => setTimeout(r, 150));

            expect(wrapper).toMatchSnapshot();

            await new Promise((r) => setTimeout(r, 100));

            expect(wrapper).toMatchSnapshot();
        });

        it('highlighted text', () => {
            const wrapper = shallow(<Select {...props} type={SelectTypes.COMBOBOX}  />);

            wrapper.find(`.${cn('combobox')}`).simulate('change', {
                target: {
                    value: 'name-1',
                },
            });

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('keyboard actions', () => {
        it('handles ArrowUp and ArrowDown', () => {
            const wrapper = mount(<Select {...props}  />);
            const title = wrapper.find(`.${cn('title')}`);
            const control = wrapper.find(`.${cn('control')}`);
            const listItem = `.${cn('list-item')}`;
            const listItemActive = `${cn('list-item_active')}`;

            title.simulate('click');
            expect(wrapper.find(listItem).at(0).hasClass(listItemActive)).toEqual(true);

            control.simulate('keyDown', { key: 'ArrowDown', preventDefault: () => {}});
            expect(wrapper.find(listItem).at(0).hasClass(listItemActive)).toEqual(false);
            expect(wrapper.find(listItem).at(1).hasClass(listItemActive)).toEqual(true);

            control.simulate('keyDown', { key: 'ArrowUp', preventDefault: () => {}});
            expect(wrapper.find(listItem).at(0).hasClass(listItemActive)).toEqual(true);
            expect(wrapper.find(listItem).at(1).hasClass(listItemActive)).toEqual(false);
        });

        it('handles Tab', () => {
            const wrapper = mount(<Select {...props}  />);
            const title = wrapper.find(`.${cn('title')}`);
            const control = wrapper.find(`.${cn('control')}`);

            title.simulate('click');
            expect(wrapper).toMatchSnapshot();

            control.simulate('keyDown', { key: 'Tab', preventDefault: () => {}});
            expect(wrapper).toMatchSnapshot();
        });

        it('handles Enter with focus to open items list', () => {
            const handleSelectItem = jest.fn();
            const wrapper = mount(<Select {...props} onSelect={handleSelectItem} />);
            const control = wrapper.find(`.${cn('control')}`);
            const title = wrapper.find(`.${cn('title')}`);

            title.simulate('focus');
            control.simulate('keyDown', { key: 'Enter', preventDefault: () => {}});

            expect(wrapper.state('isOpened')).toBeTruthy();
        });
    });

    it('it renders with data attributes', () => {
        const wrapper = shallow(<Select dataAttrs={props.dataAttrs} />);
        expect(wrapper).toMatchSnapshot();
    });
});
