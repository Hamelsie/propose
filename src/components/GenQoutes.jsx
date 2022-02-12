import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';

const GenQoutes = ({ className = '', texts = [] }) => {
    const useDummyScroll = useRef(null);

    useEffect(() => {
        if (useDummyScroll && texts.length) {
            console.log(useDummyScroll);
            useDummyScroll.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [useDummyScroll, texts]);

    return (
        <div className={`qoutes ${className}`}>
            {texts.length
                ? texts.map((item) => (
                      <Card
                          body
                          key={item.id}
                          bg={item.id === 'finished' ? 'danger' : 'default'}
                          text={item.id === 'finished' ? 'light' : 'dark'}
                          className={`qoutes_card animIn ${item.id === 'finished' ? 'last' : ''}`}
                      >
                          <p className={`card-text mb-0 `}>{item.text}</p>
                      </Card>
                  ))
                : ''}

            <div
                className="dummyscroll"
                style={{ float: 'left', clear: 'both' }}
                ref={useDummyScroll}
            />
        </div>
    );
};

export default GenQoutes;
