import { Input } from '../Input';
import { Select } from '../Select';

import { currency } from '../../data/currency';
import { useCallback, useState } from 'react';

const currencyOptions = currency.map(({ code, flag, name }) => {
  return {
    icon: flag,
    value: code,
    label: name
  }
});

const DEFAULT_CURRENCY_CODE = 'EUR';

const defaultSelectedCurrency = currency.find(({ code }) => code === DEFAULT_CURRENCY_CODE);

export const CurrencyConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(defaultSelectedCurrency);
  const [gbpAmount, setGbpAmount] = useState(0);
  const [altAmount, setAltAmount] = useState(0);

  const handleNextCurrency = useCallback((nextCode: string) => {
    const nextCurrency = currency.find(({ code }) => code === nextCode);
    setSelectedCurrency(nextCurrency)
  }, []);

  const handleGbp = useCallback((nextAmount: number) => {
    if (selectedCurrency) {
      setGbpAmount(nextAmount)
      setAltAmount(nextAmount * selectedCurrency.rate)
    }
  }, [selectedCurrency]);

  const handleAlt = useCallback((nextAmount: number) => {
    if (selectedCurrency) {
      setAltAmount(nextAmount)
      setGbpAmount(nextAmount / selectedCurrency.rate)
    }
  }, [selectedCurrency]);

  return (
    <section>
      <h1 className="text-2xl">Buy Travel Money</h1>
      <p className="pt-6 text-gray-600">
        Card and cash directly delivered to your door
      </p>
      <form>
        <Select options={currencyOptions} defaultValue={DEFAULT_CURRENCY_CODE} id='currency-selector' label='Currency' onChange={handleNextCurrency} />
        <Input placeholder='100.00' type='numeric' id="currency-amount" label="GBP Amount" onChange={handleGbp} value={gbpAmount} />
        {
          selectedCurrency && (
            <Input placeholder='100.00' type='numeric' id="alt-currency-amount" label={`${selectedCurrency.code} Amount`} onChange={handleAlt} value={altAmount} />
          )
        }
        <button type="button" onClick={() => {
          window.alert(`EUR Amount: ${altAmount}`)
        }}>
          Buy currency
        </button>
      </form>
    </section>
  )
};
