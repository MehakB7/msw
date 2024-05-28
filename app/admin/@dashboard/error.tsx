"use client"
import React from 'react'

export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) { 
    return (
      <div className="p-6 max-w-sm mx-auto bg-purple-400 rounded-xl shadow-md flex items-center space-x-4 w-4/12">
        <h2>Something went wrong!</h2>
        <button
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    )
  }