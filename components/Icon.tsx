import React from "react";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix } from "@fortawesome/fontawesome-svg-core";

interface Props {
    name: IconName;
    prefix?: IconPrefix;
    size?: string;
    styles?: string;
}

const Icon: React.FC<Props> = ({ name, prefix = "fab", size, styles }) => (
    <FontAwesomeIcon
        icon={{ prefix, iconName: name }}
        className={`${size} ${styles}`}
    />
);

export default Icon;
