import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import './carrusel.css';
import BL from '../../assets/Images/BL.png';
import DDD from '../../assets/Images/DDD.png';
import OP from '../../assets/Images/OP.png';
import ToF from '../../assets/Images/ToF.png';
import WWS from '../../assets/Images/WWS.png';

function Carrusel() {
    const [show, setShow] = useState(false);
    const [AnimeImage, setModalImage] = useState('');

    const handleShow = (AnimeImage: string) => {
        setModalImage(AnimeImage);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <>
            <Carousel className='carrusel'>
                <Carousel.Item className='carruselItem' interval={1000}>
                    <Caption title="Blue Lock" description="Un programa de entrenamiento para encontrar al mejor delantero de Japón." link='https://www.google.com/search?q=Blue+Lock&oq=Blue+Lock&gs_lcrp=EgZjaHJvbWUqEggAEEUYOxiDARjjAhixAxiABDISCAAQRRg7GIMBGOMCGLEDGIAEMg0IARAuGIMBGLEDGIAEMg0IAhAAGIMBGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgYIBBAAGAMyBggFEAAYAzINCAYQLhiDARixAxiABDIGCAcQRRg80gEIMTI3OWowajmoAgCwAgE&sourceid=chrome&ie=UTF-8' />
                    <img src={BL} alt="Blue Lock" onClick={() => handleShow(BL)} />
                </Carousel.Item>
                <Carousel.Item className='carruselItem' interval={1000}>
                    <Caption title="Dan Da Dan" description="Una historia llena de misterio y aventuras sobrenaturales." link='https://www.google.com/search?q=Dan+Da+Dan&sca_esv=8141674a718dc13d&sxsrf=ADLYWIIdKReLGAIoQiwZ071VQJFhbUA1KQ%3A1728258271434&ei=3yADZ9CfGr7ewbkP_cC_2Qk&ved=0ahUKEwiQi-Xi9_qIAxU-bzABHX3gL5sQ4dUDCA8&uact=5&oq=Dan+Da+Dan&gs_lp=Egxnd3Mtd2l6LXNlcnAiCkRhbiBEYSBEYW4yChAjGIAEGCcYigUyEBAuGIAEGLEDGEMYgwEYigUyBRAuGIAEMgsQLhiABBixAxiDATIEEAAYAzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMh8QLhiABBixAxhDGIMBGIoFGJcFGNwEGN4EGOAE2AEBSPYDUABYAHAAeAGQAQCYAXmgAXmqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAn6YAwC6BgYIARABGBSSBwMwLjGgB5wN&sclient=gws-wiz-serp' />
                    <img src={DDD} alt="Dan Da Dan" onClick={() => handleShow(DDD)} />
                </Carousel.Item>
                <Carousel.Item className='carruselItem'>
                    <Caption title="One Piece" description="La búsqueda del tesoro más grande del mundo, el One Piece." link='https://www.google.com/search?q=One+Piece&sca_esv=8141674a718dc13d&sxsrf=ADLYWIJdCb203aF3Lt-ZpB0oJ-Vx6BD8CQ%3A1728258291856&ei=8yADZ7eCNOyFwbkPgZ2L4QQ&ved=0ahUKEwj3x8Ps9_qIAxXsQjABHYHOIkwQ4dUDCA8&uact=5&oq=One+Piece&gs_lp=Egxnd3Mtd2l6LXNlcnAiCU9uZSBQaWVjZTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIQEC4YgAQYsQMYQxjUAhiKBTIQEC4YgAQYsQMYQxjUAhiKBTIFEAAYgAQyBRAAGIAEMgsQLhiABBixAxiDATIFEAAYgAQyCxAuGIAEGLEDGIMBMgUQABiABDIfEC4YgAQYsQMYQxjUAhiKBRiXBRjcBBjeBBjgBNgBAUiIBFAAWABwAHgBkAEAmAGGAaABhgGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAosBmAMAugYGCAEQARgUkgcDMC4xoAebEA&sclient=gws-wiz-serp' />
                    <img src={OP} alt="One Piece" onClick={() => handleShow(OP)} />
                </Carousel.Item>
                <Carousel.Item className='carruselItem'>
                    <Caption title="Tower of God" description="Un joven sube la torre para encontrar a su amiga perdida." link='https://www.google.com/search?q=Tower+of+God&sca_esv=8141674a718dc13d&sxsrf=ADLYWIKzTx1C5MG0nbSr8RflyhCDXf4xJg%3A1728258306644&ei=AiEDZ_aHJ5qWwbkP4IipgAc&ved=0ahUKEwj2kMrz9_qIAxUaSzABHWBECnAQ4dUDCA8&uact=5&oq=Tower+of+God&gs_lp=Egxnd3Mtd2l6LXNlcnAiDFRvd2VyIG9mIEdvZDIQEC4YgAQYsQMYQxjUAhiKBTIQEC4YgAQYsQMYQxjUAhiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMh8QLhiABBixAxhDGNQCGIoFGJcFGNwEGN4EGOAE2AEBSPEEUJUBWJUBcAF4AZABAJgBswGgAbMBqgEDMC4xuAEDyAEA-AEC-AEBmAICoAK8AcICBxAjGLADGCfCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAZgDAIgGAZAGEroGBggBEAEYCZIHAzEuMaAHmAo&sclient=gws-wiz-serp' />
                    <img src={ToF} alt="Tower of God" onClick={() => handleShow(ToF)} />
                </Carousel.Item>
                <Carousel.Item className='carruselItem'>
                    <Caption title="Wistoria Wand and Sword" description="Una historia de magia y espadas en un mundo fantástico." link='https://www.google.com/search?q=Wistoria+Wand+and+Sword&oq=Wistoria+Wand+and+Sword&gs_lcrp=EgZjaHJvbWUyEQgAEEUYJxg5GOMCGIAEGIoFMgwIARAuGCcYgAQYigUyDAgCEAAYQxiABBiKBTIMCAMQLhhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBBzQ4OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' />
                    <img src={WWS} alt="Wistoria Wand and Sword" onClick={() => handleShow(WWS)} />
                </Carousel.Item>
            </Carousel>

            <Modal show={show} onHide={handleClose} centered className="custom-modal">
                <Modal.Body>
                    <img src={AnimeImage} alt="Anime Image" className="img-fluid" />
                </Modal.Body>
            </Modal>
        </>
    );
}

function Caption({ title, description, link }: { title: string; description: string; link: string }) {
    return (
        <div className="TextImage">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Más información</a>
        </div>
    );
}

export default Carrusel;