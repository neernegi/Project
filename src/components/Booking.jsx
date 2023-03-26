import React from "react";
import Container from 'react-bootstrap/Container'

const Booking = () => {
  return (
    <>
      <Container className="booking" >
        <main>
          <h1>Booking</h1>
          <form>
            <Container>
              <label>Name</label>
              <input type="text" required placeholder="name" />
            </Container>
            <Container>
              <label>Phone No</label>
              <input type="number" required placeholder="phone no" />
            </Container>
            <Container>
              <label>Email</label>
              <input type="email" required placeholder="xyz12@gmail.com" />
            </Container>
            <Container>
              <label htmlFor="table">Table</label>
              <input
                type="number"
                name="table"
                id="table"
                placeholder="book table"
                required
              />
            </Container>
            <Container>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="date"
                required
              />
            </Container>
            <Container>
              <label htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
                id="time"
                placeholder="time"
                required
              />
            </Container>
            <Container>
              <button type="submit" className="btn">
                Book
              </button>
              <button type="reset" className="btn btn-alt" id="cancel-config-btn">
                Cancel
              </button>
            </Container>
          </form>
          <p>We will call you for more detail!....</p>
        </main>
      </Container>
    </>
  );
};

export default Booking;
