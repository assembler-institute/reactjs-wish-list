/* eslint-disable prettier/prettier */
import React from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function TaskList() {
  return (
    <>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" />
          Task1
        </label>
      </div>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" />
          Task2
        </label>
      </div>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" />
          Task3
        </label>
      </div>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" />
          Task4
        </label>
      </div>
      <RemoveButton />
    </>
  )
}
