import * as React from 'react';
import * as PropTypes from 'prop-types';
import './RadioButton.less';
import cnCreate from 'utils/cnCreate';

export interface IRadioButtonProps {
    /** Значение */
    value: string;
    /** Имя для тега form */
    name?: string;
    /** Размер текса лейбла */
    textSize?: 'small' | 'medium';
    /** Управление возможности взаимодействия с компонентом */
    isDisabled?: boolean;
    /** Управление состоянием вкл/выкл компонента */
    isChecked?: boolean;
    /** Дополнительный класс корневого элемента */
    className?: string | string[];
    children?: React.ReactNode;
    /** Обработчик изменения значения 'value' */
    onChange?: (value: string) => void;
}

const cn = cnCreate('mfui-beta-radio-button');
class RadioButton extends React.Component<IRadioButtonProps> {
    static propTypes = {
        value: PropTypes.string.isRequired,
        name: PropTypes.string,
        textSize: PropTypes.oneOf(['small', 'medium']),
        isDisabled: PropTypes.bool,
        isChecked: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
        onChange: PropTypes.func,
    };

    static defaultProps: Partial<IRadioButtonProps> = {
        textSize: 'medium',
        isDisabled: false,
    };

    handleChange = () => {
        const { onChange, value } = this.props;

        onChange && onChange(value);
    }

    render() {
        const { isChecked, isDisabled, name, value, textSize, children } = this.props;
        const checkedProp = isChecked !== undefined ? { checked: isChecked } : {};

        return (
            <div className={cn()}>
                <label
                    className={cn('label', {
                        disabled: isDisabled,
                    })}
                >
                    <input
                        {...checkedProp}
                        className={cn('input')}
                        type="radio"
                        name={name}
                        value={value}
                        onChange={this.handleChange}
                        disabled={isDisabled}
                    />
                    <div className={cn('custom-input')} />
                    {children && <div className={cn('text', { 'size': textSize })}>{children}</div>}
                </label>
            </div>
        );
    }
}

export default RadioButton;
