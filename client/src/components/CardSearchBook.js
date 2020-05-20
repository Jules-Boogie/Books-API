import React from "react"

const CardSearchBook = (props) => {


    // const handleSave = e => {
    //     API_server.saveBook({
    //         title: props.title, 
    //         author: props.author,
    //         image: props.image,
    //         body: props.body,
    //         link: props.link
    //     })
    // }

    return (
        <div className="container text-dark text-center row mr-0px">
            <div className="card col" style={{ width: '80rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
                    <div className="card mb-3" style={{ maxWidth: '900px' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={props.image} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text" >{props.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <a className="btn btn-info pr-3" href={props.link} target="_blank" rel='noreferrer noopener'>
                        More Info
                 </a>
                    <button className="btn btn-success" onClick={props.save}>
                        Add to Favorites
                 </button>
                </div>
            </div>
        </div>
    )

}

export default CardSearchBook;