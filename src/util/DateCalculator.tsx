const today = new Date();
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(today.getMonth() - 1);

const formatDate = (date: Date) =>
  date.toLocaleDateString('ka-GE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
export const todayDate = formatDate(today);
export const lastMonthDate = formatDate(oneMonthAgo);
