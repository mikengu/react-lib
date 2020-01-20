import {useMemo, useEffect} from 'react'
import PropTypes from 'prop-types'
import 'daterangepicker'
import './daterangepicker.css'
import $ from 'jquery'
import moment from 'moment'

const isDateValid = date => date && date.isValid && date.isValid()

const DatePicker = props => {
  const {
    applyLabel,
    cancelLabel,
    changeShowPicker,
    dropDirection,
    elementId,
    format,
    handleOnChange,
    name,
    single,
    startDate,
    timePicker
  } = props

  const initializePicker = useMemo(() => {
    return () => {
      const $input = $(`#${elementId}`)

      $input.daterangepicker(
        {
          autoUpdateInput: false,
          drops: dropDirection,
          showDropdowns: true,
          singleDatePicker: single,
          startDate,
          timePicker,
          locale: {
            applyLabel: applyLabel,
            cancelLabel: cancelLabel,
            format: format
          }
        },
        (start, end) => {
          if (!single && isDateValid(start) && isDateValid(end)) {
            handleOnChange({
              name,
              value: `${start.format(format)} - ${end.format(format)}`
            })
          } else if (isDateValid(start) && single) {
            handleOnChange({
              name,
              value: start.format(format)
            })
          }
        }
      )

      $input.on(
        'hide.daterangepicker',
        () => {
          changeShowPicker(false)
        }
      )
    }
    // eslint-disable-next-line
  }, [applyLabel, cancelLabel, changeShowPicker, dropDirection, elementId, format, handleOnChange, name, single, startDate, timePicker])

  useEffect(() => {
    initializePicker()
    return () => {
      const $portal = $('.daterangepicker')
      if ($portal) $portal.remove()
      const $input = $(`#${elementId}`)
      if ($input) $input.off()
    }
  }, [elementId, initializePicker])

  return null
}

export default DatePicker

DatePicker.propTypes = {
  elementId: PropTypes.string,
  handleOnChange: PropTypes.func,
  changeShowPicker: PropTypes.func,
  dropDirection: PropTypes.string,
  name: PropTypes.string,
  timePicker: PropTypes.bool,
  startDate: PropTypes.instanceOf(moment),
  format: PropTypes.string
}
