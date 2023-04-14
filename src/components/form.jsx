import React from "react";
import styled from "styled-components";
import { Widget } from "@typeform/embed-react";
import { useNavigate } from "react-router";

const TypeForm = () => {
  // configs
  const navigate = useNavigate();
  const [percent, setPercent] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          setSubmitted(false);
          navigate("/form/report");
        }
      });
    }, 50);
  };

  return (
    <Container>
      {submitted ? (
        <div className="loader">
          <progress value={percent} max={100} />
          <p>{percent}%</p>
        </div>
      ) : (
        <>
          <Widget
            onSubmit={onSubmit}
            id="uf57tmys"
            style={{ width: "100%", height: "700px" }}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loader {
    width: 500px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    background: var(--gray);
    position: relative;

    p {
      position: absolute;
      right: 15px;
    }

    progress {
      width: 100%;
      height: 100%;
      border-radius: 0;

      ::-webkit-progress-bar {
        background: var(--gray);
        border-radius: 5px;
      }

      ::-webkit-progress-value {
        background: var(--blue);
        border-radius: 5px;
      }
    }
  }
`;

export default TypeForm;
