import React,{useState} from 'react';
import { Button,Card,ListGroupItem,ListGroup} from 'react-bootstrap';
import './mainpage.css';



function MainPage() {
    const [inputVal, setInputVal] = useState();
    const [search, setSearch] = useState([]);


    const inputChangeHandler = async (e) => {
        setInputVal(e.target.value);
        const data = await fetch(`https://pixabay.com/api/?key=18942071-b5e374b3048bbf4e67a184d77&q=${inputVal}&image_type=photo&pretty=true`);
        const res = await data.json();
        console.log(res)
        setSearch(res.hits)
    }
    const searchImg = async () => {
        const data = await fetch(`https://pixabay.com/api/?key=18942071-b5e374b3048bbf4e67a184d77&q=${inputVal}&image_type=photo&pretty=true`);
        const res = await data.json();
        console.log(res)
        setSearch(res.hits)
    }
    
    return (
        <div className="container-fluid">
            <div className="search-box">
                <input type="text" placeholder="Enter To Search Image" value={inputVal} onChange={inputChangeHandler} />
                <Button className="submitToSearch" onClick={searchImg}>Search</Button>
            </div>
            <div className="container show-img">
                <div className="row">
                    {search.length ? 
                    search.map((img) => (
                        <div className="col-md-4 col-sm-6 col-xs-6 col-10 col-xl-4">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="image" variant="top" src={img.previewURL} />
                            <Card.Body>
                                    <Card.Title className="card_Title">Photos By: {img.user}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                    <ListGroupItem>Downloads: {img.downloads}</ListGroupItem>
                                    <ListGroupItem>Likes: {img.likes}</ListGroupItem>
                                    <ListGroupItem>Comments: {img.comments}</ListGroupItem>
                            </ListGroup>
                            </Card>
                            <br/><br/>
                        </div>
                    )):(<h1 className="NotFound">Image Not Found</h1>)}
                </div>
                
            </div>
        </div>
    )
}

export default MainPage
