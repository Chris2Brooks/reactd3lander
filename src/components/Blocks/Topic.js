import React, {useState} from 'react'
import {Collapse} from 'react-collapse';
import styled from '@emotion/styled'

const Container = styled.div`
  & .ReactCollapse--collapse {
    transition: height 500ms;
  }

  div[role="button"]:focus {
    outline: 0;
  }

  h3 {
    cursor: pointer;
  }

  span {
    font-size: 0.6em;
  }

  .topic-item {
    margin-bottom: 0px;
    margin-top: 1em;
    padding-left: 2em;
    font-size: 0.8em;
  }
`

const Topic = ({title, content = []}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Container>
      <div role="button" onClick={() => setIsOpened(!isOpened)} onKeyDown={() => {}} tabIndex="0" >
        <h3>
          <span>{isOpened ? '▼' : '▶'}</span> {title}
        </h3>
      </div>
      <Collapse isOpened={isOpened} >
        <div>
          {
            content.map((item, index) => <div className="topic-item" key={index}>{item}</div>)
          }
        </div>
      </Collapse>
    </Container>
  );

}

export default Topic;