import { useMemo } from 'react'
import { Card } from './Card'
import PropTypes from 'prop-types'

export function SortAndPaginateData({
  data,
  sortCriteria,
  itemOffset,
  itemsPerPage,
  page,
}) {
  const sortedData = useMemo(() => {
    if (sortCriteria) {
      return [...data].sort((a, b) => {
        const aValue = a[Object.keys(sortCriteria)]
        const bValue = b[Object.keys(sortCriteria)]

        if (typeof aValue === 'string') {
          return aValue.localeCompare(bValue)
        } else {
          return aValue - bValue
        }
      })
    } else {
      return data
    }
  }, [data, sortCriteria])

  const paginatedData = useMemo(() => {
    const endOffset = itemOffset + itemsPerPage
    return sortedData.slice(itemOffset, endOffset)
  }, [itemOffset, itemsPerPage, sortedData])

  return (
    <>
      {paginatedData.map((item, idx) => (
        <Card key={idx} {...{ page, ...item }} />
      ))}
    </>
  )
}

SortAndPaginateData.propTypes = {
  data: PropTypes.array.isRequired,
  sortCriteria: PropTypes.object,
  itemOffset: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
}
