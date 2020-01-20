import React, {useCallback, useState, useRef} from 'react'
import PropTypes from 'prop-types'
import DatePicker from '../../Date/DatePicker'

const DateInput = props => {
  const {
    applyLabel,
    autoComplete,
    autoFocus,
    cancelLabel,
    disabled,
    dropDirection,
    format,
    name,
    onChange = () => {},
    onInputChange = () => {},
    placeholder,
    single,
    style,
    timePicker
  } = props

  const [inputValue, changeInputValue] = useState('')
  const elementId = useRef(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
  const [showPicker, changeShowPicker] = useState(false)

  const onDateChange = useCallback(e => {
    onChange()
    return changeInputValue(() => e.value, [changeInputValue])
  }, [onChange, changeInputValue])

  const handleOnInputChange = useCallback(e => {
    onInputChange()
    if (!showPicker) changeShowPicker(true)
  }, [onInputChange, showPicker])

  const handleOnFocus = useCallback(() => {
    changeShowPicker(true)
  }, [changeShowPicker])

  const handleOnBlur = useCallback(() => {
  }, [])

  return (
    <div>
      <input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        id={elementId.current}
        name={name}
        onBlur={handleOnBlur}
        onChange={handleOnInputChange}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        style={style}
        value={inputValue}
      />
      {showPicker && (
        <DatePicker
          applyLabel={applyLabel}
          cancelLabel={cancelLabel}
          dropDirection={dropDirection}
          elementId={elementId.current}
          handleOnChange={onDateChange}
          changeShowPicker={changeShowPicker}
          name={name}
          single={single}
          timePicker={timePicker}
          format={format}
        />
      )}
    </div>
  )
}

DateInput.defaultProps = {
  applyLabel: 'Apply',
  autoComplete: 'off',
  autoFocus: false,
  cancelLabel: 'Clear',
  disabled: false,
  dropDirection: 'down',
  format: 'M/D/YYYY hh:mm a',
  placeholder: 'Select a date',
  name: 'dateInput',
  single: true,
  timePicker: false
}

DateInput.propTypes = {
  applyLabel: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  cancelLabel: PropTypes.string,
  disabled: PropTypes.bool,
  /** can specify drop down or up */
  dropDirection: PropTypes.string,
  format: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  single: PropTypes.bool,
  style: PropTypes.object,
  timePicker: PropTypes.bool
}

export default DateInput
