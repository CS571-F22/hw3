import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BadgerBook from './BadgerBook';

function BadgerBookstore() {
    const DUMMY_BOOK = { "id": "2a244236-1166-476f-b3bb-822588c59f75", "name": "It's Still Rock 'n Roll to Me", "description": "Cupiditate qui molestias eligendi. Quam libero praesentium quidem dolor quisquam facere est. Repellat nobis earum vitae eos rem exercitationem.", "genre": "HORROR", "price": 78.56, "rating": 1.33, "publisher": "Kautzer - Dickens", "imageUrl": "https://loremflickr.com/150/200/abstract?random=4485868170559964", "author": { "firstName": "Leora", "lastName": "Boyer", "aboutMe": "Iure quidem odit dignissimos ipsa et esse enim repudiandae. Ea est earum eaque sint labore. Quos aut assumenda accusamus aut qui possimus unde. Possimus autem facilis dolor corporis asperiores sint.\nFugit id rem cumque voluptatum maxime voluptatem provident maiores. Quae qui dolorum molestiae autem iusto maxime quis sit dolorum. Amet quis voluptatem laborum libero et perspiciatis optio expedita.\nNon quo rerum eos odio ut. Dicta exercitationem qui aut quis. Dignissimos temporibus temporibus neque non aperiam aut.", "homeCountry": "Gambia" } }
    
    // TODO: Define state for featuredBooks
    // TODO: Define state for otherBooks

    // TODO: Load data into featuredBooks
    // TODO: Load data into otherBooks
    
    return (
        <>
            <p>Welcome to the Badger Bookstore!</p>
            <p>Featured Books</p>
            <Container>
                <Row>
                    {
                        // TODO: Show featured books here!
                        <Col xs={6}><BadgerBook {...DUMMY_BOOK}></BadgerBook></Col>
                    }
                </Row>
            </Container>
            <br />
            <p>All Other Books</p>
            <Container>
                <Row>
                    {
                        // TODO: Show other books here!
                    }
                </Row>
            </Container>
        </>

    );
}

export default BadgerBookstore;