import { jsx } from '@theme-ui/core';
import {
  useContext,
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { useDrop, useImperativePortal } from '../../../hooks';
import { mergeRefs } from '../../../utils';
import { Box, SystemContext } from '../../containers';
import { ComplexSearchContext, DropContext } from './contexts';
import { Drop } from './Drop';
import { Input } from './Input';

export const AddSegment = () => {
  const { floatingPortal } = useContext(SystemContext);
  const { segments, setEditingIndex, editingIndex, addSegment } =
    useContext(ComplexSearchContext);
  const dropRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeDropRef = useRef<() => void | void>();
  const [inputValue, setInputValue] = useState('');
  const portal = useImperativePortal(floatingPortal);
  const [openDrop, anchorRef] = useDrop<any>(
    ({ handleClose }) => {
      return (
        <Drop
          ref={dropRef}
          handleClose={handleClose}
          onItemClick={onOptionClick}
        />
      );
    },
    {
      deps: [],
      placement: 'bottom-start',
      blurResistant: true,
      tailored: false,
      portal,
      style: { width: '250px', marginTop: '2px' },
    }
  );
  const stableRef = useMemo(
    () => mergeRefs([inputRef, anchorRef]),
    [inputRef, anchorRef]
  );
  const handleClose = useCallback(() => {
    closeDropRef.current?.();
  }, []);

  const handleOpen = useCallback(() => {
    closeDropRef.current = openDrop();
  }, [openDrop]);
  const itemsLengthRef = useRef(segments.length);

  useEffect(() => {
    itemsLengthRef.current = segments.length;
  }, [segments]);

  const onOptionClick = (value: string) => {
    handleClose();
    addSegment(value);
    setEditingIndex(itemsLengthRef.current);
  };
  useEffect(() => {
    if (editingIndex === -1) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [editingIndex]);
  const onBlur = ev => {
    if (
      !ev.relatedTarget ||
      !dropRef.current ||
      !dropRef.current.contains(ev.relatedTarget)
    ) {
      handleClose();
    }
  };

  const onFocus = useCallback(() => {
    setEditingIndex(-1);
    handleOpen();
  }, [handleOpen]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('focus', onFocus);
      inputRef.current.addEventListener('blur', onBlur);
    }
    return () => {
      inputRef.current?.removeEventListener('focus', onFocus);
      inputRef.current?.removeEventListener('blur', onBlur);
    };
  }, [inputRef.current]);
  return (
    <Box sx={{ flex: 1 }}>
      <Input
        ref={stableRef}
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={(ev: any) => {
          if (
            ev.key === 'Backspace' &&
            ev.target.selectionStart === 0 &&
            !ev.target.value
          ) {
            if (segments.length > 0) {
              setEditingIndex(segments.length - 1);
            }
          }
        }}
      />
      <DropContext.Provider value={{ query: inputValue }}>
        {portal}
      </DropContext.Provider>
    </Box>
  );
};