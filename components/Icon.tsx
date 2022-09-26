import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    icon: IconProp;
    styles?: string;
}

const Icon: React.FC<Props> = ({
    icon,
    styles = "text-primary dark:text-secondary",
}) => <FontAwesomeIcon icon={icon} className={styles} />;

export default Icon;
