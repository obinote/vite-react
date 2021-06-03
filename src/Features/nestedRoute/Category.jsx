import React, { Fragment } from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

const categories = [
  { id: 0, title: 'Cat 0', subCategory: [1, 2] },
  { id: 1, title: 'Cat 1', subCategory: [3, 5] },
  { id: 2, title: 'Cat 2', subCategory: [4] },
  { id: 3, title: 'Cat 3', subCategory: [5] },
  { id: 4, title: 'Cat 4', subCategory: [] },
  { id: 5, title: 'Cat 5', subCategory: [] },
]

const Category = () => {
  let { url } = useRouteMatch()
  let { id } = useParams()

  const category = categories.find((cat) => cat.id === parseInt(id))

  return (
    <Fragment>
      <div>
        <h3>Category : {category.title}</h3>

        <ul>
          {category.subCategory.map((subId) => {
            return (
              <li key={`Sub${subId}`}>
                <Link to={`${url}/${subId}`}>{find(subId).title}</Link>
              </li>
            )
          })}
        </ul>
        {/* <Switch>
          <Route path={`${url}/:id`}>
            <Category />
          </Route>
        </Switch> */}
      </div>
    </Fragment>
  )
}

export default Category
