import { Util } from '@common/interfaces';
import { hasError } from '@common/utils/DataValidation';
import { GridRowSelectedParams } from '@material-ui/data-grid';
import { useState, useEffect } from 'react';
import { withoutVNSign } from '@common/utils/StringHelper';

function useSelectedItems<T extends { id: string }>(predicate: (model: T) => any = (model => model.id)) 
  : {
    selectedItems: Array<T>;
    changeSelection: (param: GridRowSelectedParams) => void;
} {
  const [selectedItems, setSelectedItems] = useState<Array<T>>([]);

  const changeSelection = (param: GridRowSelectedParams) => {
    if (param.isSelected) {
      setSelectedItems(prev => {
        const newItems = [...prev];
        newItems.push(param.data as T);
        return newItems;
      })
    } else {
      setSelectedItems(prev => {
        const newItems = [...prev];
        const index = newItems.findIndex(el => predicate(el) === predicate(param.data as T))
        index !== -1 && newItems.splice(index, 1);
        return newItems;
      })
    }
  };

  return {
    selectedItems,
    changeSelection
  }
};

function useDataValidator()
: {
  errors: Array<Util.DataError>;
  validate: (propertyName: string, value: any, validators: Array<string> | string) => string | undefined;
  getError: (propertyName: string) => {error: boolean; helperText: string}
} {
  const [ errors, setErrors ] = useState<Array<Util.DataError>>([]);

  const validate = (propertyName: string, value: any, validators: Array<string> | string): string | undefined => {
    const id = withoutVNSign(propertyName);
    const newErr = errors.filter(el => el.id !== id);

    if (Array.isArray(validators)) {
      validators.forEach(val => {
        const validationResult = hasError(propertyName, value, val);
        validationResult && newErr.push({ 
          id: id,
          msg: validationResult
        });
      })
    } else if (typeof validators === 'string'){
      const validationResult = hasError(propertyName, value, validators);
      validationResult && validationResult && newErr.push({ 
        id: id,
        msg: validationResult
      });
    }
    setErrors(newErr);
    const err = errors.find(el => el.id === id);
    return err ? err.msg : undefined;
  };

  const getError = (propertyName: string): {error: boolean; helperText: string} => {
    const id = withoutVNSign(propertyName);
    const result = errors.find(el => el.id === id);
    if (result) return {
      error: true,
      helperText: result.msg
    };
    return {
      error: false,
      helperText: ''
    };
  };

  return {
    errors,
    validate,
    getError
  }
}

export {
  useSelectedItems,
  useDataValidator
};