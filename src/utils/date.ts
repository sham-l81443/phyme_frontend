import { format } from 'date-fns';

export const formatDate = (date: Date | string, pattern = 'yyyy-MM-dd') => {
    return format(new Date(date), pattern);
};