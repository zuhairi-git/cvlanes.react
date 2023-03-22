import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className='div-author d-flex mt-4 mb-3'>
                    <div className='position-relative me-2'>
                        <img src='../img/ali.png' className="blog-author" alt="cover" />
                    </div>
                    <div className='position-relative me-2'>
                        <h5 className='blog-author-name'>Ali Zuhairi</h5>
                        <p className='blog-author-position'>Professional Product Designer</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;
