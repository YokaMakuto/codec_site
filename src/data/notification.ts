import type { NotificationData } from '@/components/Notification/types';

// Static notification content so the deploy never relies on runtime fetches.
export const NOTIFICATION: NotificationData | null = {
    enabled: false,
    type: 'banner',
    text: 'Welcome to CODEC! Keep an eye on this space for updates.',
    url: 'https://github.com',
    urlText: 'Explore our projects',
};

export const getNotification = (): NotificationData | null => NOTIFICATION;
