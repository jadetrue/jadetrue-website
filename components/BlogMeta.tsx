import React from "react";
import { parseISO, format } from "date-fns";

interface Props {
    dateString: string;
    readingTime?: string;
    styles?: string;
}

const BlogMeta: React.FC<Props> = ({ dateString, readingTime, styles }) => {
    const date = parseISO(dateString);

    return (
        <div className={`flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 ${styles || ""}`}>
            <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
            {readingTime && (
                <>
                    <span aria-hidden="true">&middot;</span>
                    <span>{readingTime}</span>
                </>
            )}
        </div>
    );
};

export default BlogMeta;
