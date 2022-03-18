import React from "react";

const Buttons = ({ concOp, onEval }) => {
  return (
    //this is probably stupid asf
    <div className="mx-5 mt-3">
      {/* <tr className="row">
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                1
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                2
              </button>
            </td>

            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                3
              </button>
            </td>

            <td>
              <button onClick={concOp} className="m-1 col btn btn-secondary">
                +
              </button>
            </td>
          </tr>

          <tr className="row">
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                4
              </button>
            </td>

            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                5
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                6
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                -
              </button>
            </td>
          </tr>

          <tr className="row">
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                7
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                8
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                9
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                *
              </button>
            </td>
          </tr>

          <tr className="row">
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                0
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                C
              </button>
            </td>
            <td>
              <button onClick={concOp} className="m-1 col btn btn-primary">
                /
              </button>
            </td>
          </tr>

          <tr className="row">
            <td>
              <button onClick={onEval} className="m-1 col btn btn-secondary">
                =
              </button>
            </td>
          </tr> */}
      {/* <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">1</div>
          </div>
          <div className="row">
            <div className="col">4</div>
          </div>
          <div className="row">
            <div className="col">7</div>
          </div>
          <div className="row">
            <div className="col">0</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">2</div>
          </div>
          <div className="row">
            <div className="col">5</div>
          </div>
          <div className="row">
            <div className="col">8</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">3</div>
          </div>
          <div className="row">
            <div className="col">6</div>
          </div>
          <div className="row">
            <div className="col">9</div>
          </div>
          <div className="row">
            <div className="col">C</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">+</div>
          </div>
          <div className="row">
            <div className="col">-</div>
          </div>
          <div className="row">
            <div className="col">*</div>
          </div>
          <div className="row">
            <div className="col">/</div>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary w">
            1
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            2
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            3
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            +
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            4
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            5
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            6
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            -
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            7
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            8
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            9
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            *
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6  ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            0
          </button>
        </div>

        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-warning">
            C
          </button>
        </div>
        <div className="col-3 ">
          <button onClick={concOp} className="w-100 m-1 btn btn-primary">
            /
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={onEval} className="w-100 m-1 btn btn-secondary">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
