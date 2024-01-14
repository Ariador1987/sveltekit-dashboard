const formatter = new Intl.NumberFormat('en-US', {
	currency: 'USD',
	style: 'currency'
});

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
	dateStyle: 'medium'
});

// Dividing by 100 to convert from cent to dollar
export const formatCurrencyToDollars = (amount: number) => formatter.format(amount / 100);
export const formatCurrencyToCents = (amount: number) => formatter.format(amount / 1000);
export const formatDate = (date: Date) => dateFormatter.format(date);
