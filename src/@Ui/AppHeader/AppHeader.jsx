import React, { Fragment, useState } from 'react'

import { useQuery } from 'react-query'

import { BASE_PATH } from '../../app/constants'

const AppHeader = () => {
  const [enabled, setEnabled] = useState(false)

  const result = useQuery(
    'fetchPost',
    () => {
      return fetch(`${BASE_PATH}/employer`).then((res) => {
        return res.json()
      })
    },
    { enabled: enabled }
  )
  console.log(result)

  return (
    <Fragment>
      <div className="flex flex-1 p-2 bg-purple-700 items-center text-white">
        <div className="">
          <h4 className="font-semibold">App Header Goes Here</h4>
        </div>
        <div className="flex-grow"></div>
        <div>
          <button
            className="btn-fetch"
            onClick={() => {
              setEnabled(true)
            }}
          >
            Fetch Btn
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default AppHeader
