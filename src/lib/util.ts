const formatter = new Intl.NumberFormat('en-US', {
	currency: 'USD',
	style: 'currency'
});

// Dividing by 100 to convert from cent to dollar
export const formatCurrencyToDollars = (amount: number) => formatter.format(amount / 100);
