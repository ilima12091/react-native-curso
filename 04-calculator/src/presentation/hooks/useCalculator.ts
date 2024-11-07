import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPreviousNumber(`${subResult}`);
  }, [formula]);

  const buildNumber = (stringNumber: string) => {
    if (number.includes('.') && stringNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal o si es otro cero y no hay un punto
      if (
        stringNumber === '.' ||
        (stringNumber === '0' && number.includes('.'))
      ) {
        return setNumber(number + stringNumber);
      }

      // Evaluar si es diferente de cero, no tiene punto y es el primer número
      if (stringNumber !== '0' && !number.includes('.')) {
        return setNumber(stringNumber);
      }

      // Evitar 0000.0
      if (stringNumber === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + stringNumber);
    }
    setNumber(number + stringNumber);
  };

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    lastOperation.current = undefined;
    setFormula('');
  };

  const deleteLast = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) {
      return num1;
    }

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        if (num1 === 0) {
          throw new Error('Cannot divide by zero');
        } else {
          return num1 / num2;
        }
      default:
        throw new Error('Invalid operation');
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    lastOperation.current = undefined;
    setPreviousNumber('0');
    setFormula(`${result}`);
    setNumber(`${result}`);
  };

  return {
    number,
    previousNumber,
    formula,
    buildNumber,
    clean,
    deleteLast,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
