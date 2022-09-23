import { parseISO, format } from "date-fns";
import { Body } from "./Typography";

export interface Props {
    dateString: string;
    styles?: string;
}

export const Date: React.FC<Props> = ({ dateString, styles }) => {
    const date = parseISO(dateString);

    return (
        <time dateTime={dateString}>
            <Body size="small" styles={`p-3 ${styles}`}>
                {format(date, "LLLL d, yyyy")}
            </Body>
        </time>
    );
};

export default Date;
