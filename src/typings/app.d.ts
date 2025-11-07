import type { ReactNode } from 'react';

declare global {
    type RootLayoutProps = {
        children: ReactNode;
    };
}

export {};
