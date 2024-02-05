import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
                            <h1 className="text-2xl font-bold text-center">ADD POST</h1>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
