import React from "react";

export default function Card() {
  return (
    <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img className="card-img-top" src="https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.jpg?s=612x612&w=0&k=20&c=gbfAu17L1gtHmuo5biByhfCefAtYUtGQpyxMmi9_Mus=" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some impo text</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              
              <select className="m-2 h-100  bg-success rounded" id="">
                <option value="half"> Half </option>
                <option value="full"> Full </option>
              </select>

              <div className="d-inline fs-5 h-100 ">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
