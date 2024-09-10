'use client'

export const metadata = {
  title: 'Error',
}

export default function notFound() {
  return (
    <>
      <div className="industify_fn_error_page bg-white">
        <div className="container">
          <div className="error_box max550">
            <div className="title_holder">
              <h1>Error</h1>
              <h3>Something went wrong</h3>
              <p>Please try again later</p>
            </div>
            <div className="search_holder">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
