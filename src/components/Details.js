import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled from 'styled-components'

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [friendId])

  return (
    <DarkContainer primary={false}>
      <h2>Details:</h2>
      {
        details &&
        <>
          <PersonInfo>{details.name} is {details.age}</PersonInfo>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </DarkContainer>
  )
}

const Container = styled.div`
  background-color: ${props => props.primary ? 'pink' : 'papayawhip'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
`

const DarkContainer = styled(Container)`
  background-color: #24155d;
  color: white;
  padding: 15px;
`

const PersonInfo = styled.p`
  &:hover {
    font-size: 20px;
    transition: 2s all ease-in-out;
  }
`