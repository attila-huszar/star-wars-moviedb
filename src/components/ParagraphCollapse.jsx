import { useState } from 'react'
import style from '../styles/ParagraphCollapse.module.css'
import PropTypes from 'prop-types'

export function ParagraphCollapse({ textList }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev)
  }

  if (textList.length <= 3) {
    return (
      <p>{textList.map((item) => (item.name ? item.name : item)).join(', ')}</p>
    )
  }

  return (
    <div role="paragraph">
      <span className={style.text}>
        {(isCollapsed ? textList.slice(0, 3) : textList)
          .map((item) => (item.name ? item.name : item))
          .join(', ')}
      </span>
      <button className={style.toggleBtn} onClick={toggleCollapse}>
        {isCollapsed ? 'Show More...' : 'Show Less'}
      </button>
    </div>
  )
}

ParagraphCollapse.propTypes = {
  textList: PropTypes.array.isRequired,
}
