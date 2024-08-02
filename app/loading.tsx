import React from 'react'
export default function Loading() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="loader">
            <h1 style={{background:"red"}}>page is loading</h1>
        </div>
      </div>
    );
  }