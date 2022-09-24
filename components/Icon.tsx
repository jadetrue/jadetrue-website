import React from "react";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix } from "@fortawesome/fontawesome-svg-core";

interface Props {
    name: IconName;
    prefix?: IconPrefix;
    styles?: string;
}

const Icon: React.FC<Props> = ({
    name,
    prefix = "fab",
    styles = "text-primary dark:text-secondary",
}) => <FontAwesomeIcon icon={{ prefix, iconName: name }} className={styles} />;

export default Icon;
