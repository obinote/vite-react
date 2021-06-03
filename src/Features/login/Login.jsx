import React, { Fragment } from 'react'

const Login = () => {
  return (
    <Fragment>
      <div className="flex flex-col place-items-center w-full px-8 bg-yellow-400 ">
        <div className="">Logo</div>
        <div className="">Text</div>
        <div className="w-full">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full border-none">
            LOGIN
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
