import { Fragment } from 'react'
import { dataFieldStructure } from '../utils/dataFieldStructure'
import { ParagraphCollapse } from './ParagraphCollapse'
import style from '../styles/DataFields.module.css'
import PropTypes from 'prop-types'

export const DataFields = ({ data, component, page }) => {
  return dataFieldStructure(data, component, page).map((field, idx) => (
    <Fragment key={idx}>
      <p className={style.label}>{field.label}</p>
      {field.isCollapsed ? (
        <ParagraphCollapse textList={field.value} />
      ) : field.isLink ? (
        <a href={field.value} target="_blank" rel="noopener noreferrer">
          {field.value ? field.value.replace(/^https?:\/\//, '') : 'n/a'}
        </a>
      ) : (
        <p>{field.value || 'unknown'}</p>
      )}
    </Fragment>
  ))
}

DataFields.propTypes = {
  data: PropTypes.object.isRequired,
  component: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}
