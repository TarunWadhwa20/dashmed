import React from 'react'

const Button = (props) => {
    const showMore = () => {
        props.setCount(props.count + 12);
        console.log("first");
      };
  return (
    <div className="row">
        <div className="col-12">
          <button
            className="btn btn-primary d-block mx-auto mt-4"
            onClick={showMore}
          >
            {props.title}
          </button>
        </div>
      </div>
  )
}

export default Button