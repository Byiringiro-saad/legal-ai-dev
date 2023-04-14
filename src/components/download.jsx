import React from "react";
import styled from "styled-components";

const Download = () => {
  return (
    <Container>
      <div className="content">
        <p>
          Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
          molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit
          sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse
          tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue
          libero quis, commodo purus. Cras iaculis massa ut elit tempor
          malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt
          velit ullamcorper. Suspendisse potenti. Nam varius varius erat.
          Aliquam pulvinar elit ut orci egestas tincidunt. Morbi ornare orci
          ante, mollis posuere lacus accumsan sit amet. Cras ut dignissim ipsum.
        </p>
        <p>
          Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
          molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit
          sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse
          tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue
          libero quis, commodo purus. Cras iaculis massa ut elit tempor
          malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt
          velit ullamcorper. Suspendisse potenti. Nam varius varius erat.
          Aliquam pulvinar elit ut orci egestas tincidunt. Morbi ornare orci
          ante, mollis posuere lacus accumsan sit amet. Cras ut dignissim ipsum.
        </p>
        <p>
          Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
          molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit
          sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse
          tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue
          libero quis, commodo purus. Cras iaculis massa ut elit tempor
          malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt
          velit ullamcorper. Suspendisse potenti. Nam varius varius erat.
          Aliquam pulvinar elit ut orci egestas tincidunt. Morbi ornare orci
          ante, mollis posuere lacus accumsan sit amet. Cras ut dignissim ipsum.
        </p>
        <p>
          Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
          molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit
          sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse
          tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue
          libero quis, commodo purus. Cras iaculis massa ut elit tempor
          malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt
          velit ullamcorper. Suspendisse potenti. Nam varius varius erat.
          Aliquam pulvinar elit ut orci egestas tincidunt. Morbi ornare orci
          ante, mollis posuere lacus accumsan sit amet. Cras ut dignissim ipsum.
        </p>
      </div>
      <button type="button">Download PDF</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 0 0 0;

  .content {
    width: 100%;
    height: auto;

    p {
      margin: 0 0 30px 0;
    }
  }

  button {
    width: 200px;
    height: 60px;
    border: none;
    display: flex;
    font-size: 1em;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: var(--green);
    color: var(--white);
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Download;
