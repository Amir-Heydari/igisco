
export const metadata = {
    title: 'Page not found',
}

export default function notFound() {
    return (
        <>
            <div className="industify_fn_error_page">
                <div className="container">
                    <div className="error_box max550">
                        <div className="title_holder">
                            <h1>404</h1>
                            <h3>Page Not Found</h3>
                            <p>Sorry, but the page you are looking for was moved, removed, renamed or might never existed...</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
