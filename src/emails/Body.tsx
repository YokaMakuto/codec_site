import * as React from 'react';

export default function EmailBody({ firstName }: { firstName: string }) {
    return (
        <div>
            <p>Hello {firstName},</p>
            <p>Welcome! This is a placeholder email body.</p>
        </div>
    );
}
