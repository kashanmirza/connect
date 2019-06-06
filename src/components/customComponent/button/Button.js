import React from "react";
import { Button } from 'react-bootstrap';
import { isEmpty } from "lodash";

import './Button.scss';
/* eslint-disable */
import btnDetail from '../../../constant/buttonConstants';




const RoundedButton = (props) => {
    const { btnAction, click } = props;

    let styleClass= !isEmpty(btnDetail[btnAction].className) ? btnDetail[btnAction].className : "";
    let icon= !isEmpty(btnDetail[btnAction].icon) ? btnDetail[btnAction].icon : "";
    let title= !isEmpty(btnDetail[btnAction].title) ? btnDetail[btnAction].title : "";

    return (
            <button
                type="button"
                className={styleClass}
                onClick={click}>
                {title}
                {icon && <li className={icon}></li>}
            </button>
    );
};

export default RoundedButton;