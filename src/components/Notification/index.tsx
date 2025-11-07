'use client';

import { getNotification } from '@/data/notification';
import { useEffect, useState } from 'react';
import BannerNotification from './BannerNotification';
import PopupNotification from './PopupNotification';

export default function Notification() {
    const notification = getNotification();
    const [dismissed, setDismissed] = useState(false);

    const storageKey = 'notification-dismissed';
    const messageKey = 'notification-message';

    useEffect(() => {
        if (!notification) return;

        const isDismissed = localStorage.getItem(storageKey) === 'true';
        const cachedMessage = localStorage.getItem(messageKey);

        if (notification.text !== cachedMessage) {
            setDismissed(false);
            localStorage.setItem(storageKey, 'false');
            localStorage.setItem(messageKey, notification.text);
        } else {
            setDismissed(isDismissed);
        }
    }, [notification]);

    const handleClose = () => {
        setDismissed(true);
        localStorage.setItem(storageKey, 'true');
    };

    if (!notification || !notification.enabled || dismissed) return null;

    return notification.type === 'popup' ? (
        <PopupNotification data={notification} onClose={handleClose} />
    ) : (
        <BannerNotification data={notification} onClose={handleClose} />
    );
}
