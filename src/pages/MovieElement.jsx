import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useCallback } from 'react'
import { fetchData } from '../api/fetch'
import { LoadPending } from '../components/LoadPending'
import { LoadError } from '../components/LoadError'
import { SortAndPaginateData } from '../components/SortAndPaginateData'
import { episodesItemOffset } from '../store/episodesSlice'
import { charactersItemOffset } from '../store/charactersSlice'
import { planetsItemOffset } from '../store/planetsSlice'
import { speciesItemOffset } from '../store/speciesSlice'
import { vehiclesItemOffset } from '../store/vehiclesSlice'
import { starshipsItemOffset } from '../store/starshipsSlice'
import ReactPaginate from 'react-paginate'
import style from '../styles/MovieElement.module.css'
import caretDown from '../assets/svg/caret_down.svg'

export function MovieElement() {
  const location = useLocation()
  const page = location.pathname.split('/')[1]
  const dispatch = useDispatch()
  const { data, error, itemOffset } = useSelector((state) => state[page])
  const [sortCriteria, setSortCriteria] = useState(null)
  const [showSort, setShowSort] = useState(false)
  const itemsPerPage = 4

  const sortTypes = useCallback(() => {
    switch (page) {
      case 'episodes':
        return [
          { id: 'Episode' },
          { release_date: 'Release Date' },
          { name: 'Name' },
        ]
      case 'vehicles':
        return [{ name: 'Name' }, { class: 'Class' }]
      case 'starships':
        return [{ name: 'Name' }, { cost_in_credits: 'Cost in Credits' }]
      default:
        return null
    }
  }, [page])

  useEffect(() => {
    dispatch(fetchData(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    if (sortTypes()) {
      setSortCriteria(sortTypes()[0])
    }
  }, [sortTypes])

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length

    const itemOffset = {
      episodes: episodesItemOffset,
      characters: charactersItemOffset,
      planets: planetsItemOffset,
      species: speciesItemOffset,
      vehicles: vehiclesItemOffset,
      starships: starshipsItemOffset,
    }[page]

    dispatch(itemOffset(newOffset))
  }

  if (error) {
    return <LoadError error={error} />
  }

  if (!data?.length) {
    return <LoadPending page={page} />
  }

  return (
    <article className={style.article}>
      <div className={style.title}>
        <p>{page.charAt(0).toUpperCase() + page.slice(1)}</p>
        {sortCriteria && sortTypes() && (
          <>
            <span>Sort by:</span>
            <div className={style.dropdown}>
              <div
                onClick={() => {
                  setShowSort((prev) => !prev)
                }}
                className={style.dropdownBtn}>
                {Object.values(sortCriteria)}
                <img src={caretDown} alt="caret down" />
              </div>
              <div
                className={style.dropdownContent}
                style={{ display: showSort ? 'block' : 'none' }}>
                {sortTypes().map((item, idx) => (
                  <div
                    onClick={() => {
                      setSortCriteria(item)
                      setShowSort(false)
                    }}
                    className={style.dropdownItem}
                    key={idx}>
                    {Object.values(item)}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className={style.container}>
        <SortAndPaginateData
          {...{ data, sortCriteria, itemOffset, itemsPerPage, page }}
        />
      </div>

      <ReactPaginate
        containerClassName={style.pagination}
        pageLinkClassName={style.screenBtn}
        activeLinkClassName={style.screenActiveBtn}
        onPageChange={handlePageClick}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        previousLinkClassName={style.screenPrevBtn}
        nextLinkClassName={style.screenNextBtn}
        disabledLinkClassName={style.screenBtnDisabled}
        previousLabel=""
        nextLabel=""
        breakLabel="..."
        renderOnZeroPageCount={null}
        forcePage={itemOffset / itemsPerPage}
      />
    </article>
  )
}
