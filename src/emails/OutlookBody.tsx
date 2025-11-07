import * as React from 'react';

export default function OutlookEmailBody({ firstName }: { firstName: string }) {
    return (
        <table role="presentation" cellPadding={0} cellSpacing={0} style={{ width: '100%' }}>
            <tbody>
                <tr>
                    <td>
                        <p>Hello {firstName},</p>
                        <p>Welcome! This is a simple Outlook-friendly placeholder.</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
