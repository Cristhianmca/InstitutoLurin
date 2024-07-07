import React, { useState, useRef, useEffect } from 'react';
import './Noticias.css'; // Asegúrate de tener los estilos necesarios

const Noticias = () => {
  const eventsRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleMouseDown = (e) => {
    const events = eventsRef.current;
    setIsDown(true);
    setStartX(e.pageX - events.offsetLeft);
    setStartY(e.pageY - events.offsetTop);
    setScrollLeft(events.scrollLeft);
    setScrollTop(events.scrollTop);
    events.style.cursor = 'grabbing';
  };

  const handleMouseLeaveOrUp = () => {
    const events = eventsRef.current;
    setIsDown(false);
    events.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const events = eventsRef.current;
    const x = e.pageX - events.offsetLeft;
    const y = e.pageY - events.offsetTop;
    const walkX = (x - startX) * 1;
    const walkY = (y - startY) * 1;
    events.scrollLeft = scrollLeft - walkX;
    events.scrollTop = scrollTop - walkY;
  };

  const scrollBy = (left) => {
    const events = eventsRef.current;
    events.scrollBy({
      top: 0,
      left: left,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const events = eventsRef.current;
      const position = events.scrollLeft;

      setCanScrollLeft(position > 0);
      setCanScrollRight(Math.round(position) < events.scrollWidth - events.clientWidth);
    };

    const events = eventsRef.current;
    events.addEventListener('scroll', handleScroll);

    handleScroll(); // Call initially to set the correct state for buttons

    return () => {
      events.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container_noticias">
      <div className="top-bar">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M4 11h16" />
          <path d="M7 14h.013" />
          <path d="M10.01 14h.005" />
          <path d="M13.01 14h.005" />
          <path d="M16.015 14h.005" />
          <path d="M13.015 17h.005" />
          <path d="M7.01 17h.005" />
          <path d="M10.01 17h.005" />
        </svg>
        <h2>Upcoming events</h2>
        <button
          type="button"
          id="action-button--previous"
          className="action-button--horizontal-scroll"
          onClick={() => scrollBy(-200)}
          disabled={!canScrollLeft}
        >
          <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24">
            <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
          </svg>
        </button>
        <button
          type="button"
          id="action-button--next"
          className="action-button--horizontal-scroll"
          onClick={() => scrollBy(200)}
          disabled={!canScrollRight}
        >
          <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24">
            <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
          </svg>
        </button>
      </div>
      <div
        id="events"
        ref={eventsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        style={{ overflow: 'auto', cursor: 'grab' }}
      >
        <a href="#the-weeknd" className="event">
          <div className="event__image">
            <img src="https://www.urbanstage.cz/wp-content/uploads/2020/03/weeknd.jpg" alt="The Weeknd" />
            <div className="event__indicator event__date">
              08 <div className="event__date__month">Feb</div>
            </div>
            <div className="event__indicator event__type">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 5l0 2" />
                <path d="M15 11l0 2" />
                <path d="M15 17l0 2" />
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
          <div className="event-description">
            <h2>The Weeknd - After Hours Tour</h2>
            <div className="bottom-stats">
              <div className="bottom-stat">
                <div className="circle circle--red"></div> 2 new posts
              </div>
              <div className="bottom-stat">
                <div className="circle circle--green"></div> 5 tickets
              </div>
            </div>
          </div>
        </a>
        <a href="#the-weeknd" className="event">
          <div className="event__image">
            <img
              src="https://media.architecturaldigest.com/photos/641b2b8252ae61ead67e92d9/16:9/w_2560%2Cc_limit/GettyImages-1474485122.jpg"
              alt="The Weeknd"
            />
            <div className="event__indicator event__date">
              16 <div className="event__date__month">Feb</div>
            </div>
            <div className="event__indicator event__type">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 5l0 2" />
                <path d="M15 11l0 2" />
                <path d="M15 17l0 2" />
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
          <div className="event-description">
            <h2>Taylor Swift - Eras Tour</h2>
            <div className="bottom-stats">
              <div className="bottom-stat">
                <div className="circle circle--red"></div> 4 new posts
              </div>
              <div className="bottom-stat">
                <div className="circle circle--green"></div> 10 tickets
              </div>
            </div>
          </div>
        </a>
        <a href="#the-weeknd" className="event">
          <div className="event__image">
            <img
              src="https://fox2now.com/wp-content/uploads/sites/14/2021/09/GettyImages-451833751.jpg?w=1280"
              alt="The Weeknd"
            />
            <div className="event__indicator event__date">
              20 <div className="event__date__month">Feb</div>
            </div>
            <div className="event__indicator event__type">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 5l0 2" />
                <path d="M15 11l0 2" />
                <path d="M15 17l0 2" />
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
          <div className="event-description">
            <h2>Imagine Dragons</h2>
            <div className="bottom-stats">
              <div className="bottom-stat">
                <div className="circle circle--red"></div> 2 new posts
              </div>
              <div className="bottom-stat">
                <div className="circle circle--green"></div> 4 tickets purchased
              </div>
            </div>
          </div>
        </a>
        <a href="#the-weeknd" className="event">
          <div className="event__image">
            <img
              src="https://i.dailymail.co.uk/i/pix/2012/10/05/article-2212936-155E4783000005DC-817_1024x615_large.jpg"
              alt="The Weeknd"
            />
            <div className="event__indicator event__date">
              28 <div className="event__date__month">March</div>
            </div>
            <div className="event__indicator event__type">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 5l0 2" />
                <path d="M15 11l0 2" />
                <path d="M15 17l0 2" />
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
          <div className="event-description">
            <h2>U2</h2>
            <div className="bottom-stats">
              <div className="bottom-stat">
                <div className="circle circle--red"></div> 2 new posts
              </div>
              <div className="bottom-stat">
                <div className="circle circle--green"></div> 3 tickets purchased
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Noticias;
