const CurrencyFormat = ({ priceValue, generalSettings }) => {

    const currencyFormat = generalSettings.currencyFormat;
    const currencySymbol = generalSettings.currencySymbol;
    const formatNumber = generalSettings.formatNumber;
    const changeCurrencyRate = generalSettings.changeCurrencyRate;

    return (
        <>
            {currencyFormat === 'suffix' ? (
                    <>
                    {Number((priceValue * changeCurrencyRate).toFixed(formatNumber)).toLocaleString(undefined, {
                        minimumFractionDigits: formatNumber,
                        maximumFractionDigits: formatNumber,
                    })} {currencySymbol}
                </>
                
            ): (
                    <>
                    {currencySymbol} {Number((priceValue * changeCurrencyRate).toFixed(formatNumber)).toLocaleString(undefined, {
                        minimumFractionDigits: formatNumber,
                        maximumFractionDigits: formatNumber,
                    })}
                </>
            )}
        </>
    );
};

export default CurrencyFormat;
