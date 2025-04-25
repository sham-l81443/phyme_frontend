import { format } from 'date-fns';

export const formatDate = (date: Date | string | undefined | null, pattern = 'yyyy-MM-dd') => {
    if (!date) return '-';
    return format(new Date(date), pattern);
};