import React from "react";

const Buttons = ({ concOp, onEval }) => {
  return (
    //this is probably stupid asf
    <div className="mx-5 mt-3">
      <table className="table">
        <tr className="row">
          <button onClick={concOp} className="m-1 col btn btn-primary">
            1
          </button>
          <button onClick={concOp} className="m-1 col btn btn-primary">
            2
          </button>
          <button onClick={concOp} className="m-1 col btn btn-primary">
            3
          </button>
          <button onClick={concOp} className="m-1 col btn btn-secondary">
            +
          </button>
        </tr>

        <tr className="row">
          <button onClick={concOp} className="m-1 col btn btn-primary">
            4
          </button>
          <button onClick={concOp} className="m-1 col btn btn-primary">
            5
          </button>
          <button onClick={concOp} className="m-1 col btn btn-primary">
            6
          </button>
          <button onClick={concOp} className="m-1 col btn btn-secondary">
            -
          </button>
        </tr>

        <tr className="row">
          <button onClick={concOp} className="m-1 col btn btn-primary">
            7
          </button>
          <button onClick={concOp} className="m-1 col btn btn-primary">
            8
          </button>
          <button onClick={concOp} className="m-1 col btn btn-primary">
            9
          </button>
          <button onClick={concOp} className="m-1 col btn btn-secondary">
            *
          </button>
        </tr>

        <tr className="row">
          <button onClick={concOp} className="m-1 col btn btn-primary">
            0
          </button>
          <button onClick={concOp} className="m-1 col btn btn-warning">
            C
          </button>
          <button onClick={concOp} className="m-1 col btn btn-secondary">
            /
          </button>
        </tr>

        <tr className="row">
          <button onClick={onEval} className="m-1 col btn btn-secondary">
            =
          </button>
        </tr>
      </table>
    </div>
  );
};

export default Buttons;
