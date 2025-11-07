import * as React from 'react';

interface Props {
    comment: string;
    msoOnly?: boolean;
    children?: React.ReactNode;
}

export function HtmlConditionalComment({ children }: Props) {
    // Minimal no-op wrapper for non-Outlook rendering in dev/editor contexts.
    return <>{children}</>;
}
