import React from "react";

interface Props {
    tag: string;
}

const TagPill: React.FC<Props> = ({ tag }) => {
    return (
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            {tag}
        </span>
    );
};

export default TagPill;
