import React from 'react';

function ErrorProvider(props) {
  const { errors } = props;
  return (
    <div>
      {props.children}
      {errors.map((error) => {
        const message = error instanceof Error ? error.message : error;
        return <p className="def-size def-color def-family">{message}</p>;
      })}
    </div>
  );
}

export default ErrorProvider;
