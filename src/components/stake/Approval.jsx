"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Approval = () => {

    const handleToast = () => {
        toast.success('You have successfully staked!')
        // toast.error('Please enter a valid number!')
    }
  return (
    <div>
      <h1 onClick={handleToast}>Approval</h1>
    </div>
  )
}

export default Approval