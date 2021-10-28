import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <>
        <Card className='text-center'>
          <Card.Body>
            <Card.Text>
              <i>Не бывает безвыходных ситуаций. Бывают ситуации, выход из которых
              тебя не устраивает.</i>
              <br/>
              <i><strong>Шикамару Нара</strong></i>
            </Card.Text>
          </Card.Body>
          <Card.Img
            className="pic"
            variant="bottom"
            src="https://cdn.pixabay.com/photo/2021/10/14/09/16/shikamaru-6708482__480.jpg"
          />
        </Card>
      </>
    </div>
  );
};

export default Footer;
