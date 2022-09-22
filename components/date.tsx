import { parseISO, format } from "date-fns";
import { Body } from "./Typography";

export default function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>
            <Body size="extra-small">{format(date, "LLLL d, yyyy")}</Body>
        </time>
    );
}
